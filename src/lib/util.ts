import chalk from 'chalk';
import fs from 'fs';
import glob from 'glob';
import Listr from 'listr';
import path from 'path';
import { CURRENT_WORK_DIR, GREEN_COLOR, INDENT } from './config';
import { FileInfo, ProjectConfig, TranslationFile, Options } from './model';

const _getGlobPatterns = (translatioFile: TranslationFile): string[] => {
    const directory = translatioFile.directory ?? '';
    const file = `${translatioFile.filename}.${translatioFile.extension}`;
    const filePattern = path.join(CURRENT_WORK_DIR, directory, file);
    const globPattern = _resolvePathPattern(filePattern, '*');

    return [filePattern, globPattern];
}

const _getLanguageFromLocale = (locale: string): string => {
    return locale.replace('_', '-').split('-', 2)[0];
}

const _getLocaleFrom = (filePath: string, filePattern: string, locales: string[]): string | undefined => {
    return locales.find((locale) => {
        const path = _resolvePathPattern(filePattern, locale);
        return path === filePath;
    });
}

const _resolvePathPattern = (filePattern: string, locale: string): string => {
    const language = locale === '*' ? '*' : _getLanguageFromLocale(locale);
    return filePattern.replace('%language', language).replace('%locale', locale);
}

export const getUploadFileInfosOfTranslationFile = (translationFile: TranslationFile): FileInfo[] => {
    const [filePattern, globPattern] = _getGlobPatterns(translationFile);
    const files = glob.sync(globPattern);
    const results: FileInfo[] = [];

    files.forEach((filePath) => {
        const locale = _getLocaleFrom(filePath, filePattern, translationFile.locales);
        if (locale) {
            results.push({
                path: filePath,
                locale,
            });
        }
    });

    return results;
}

export const getDownloadFileInfosOfTranslationFile = (translationFile: TranslationFile): FileInfo[] => {
    const [filePattern] = _getGlobPatterns(translationFile);
    const results: FileInfo[] = [];

    translationFile.locales.forEach((locale) => {
        const filePath = _resolvePathPattern(filePattern, locale);
        if (locale) {
            results.push({
                path: filePath,
                locale,
            });
        }
    });

    return results;
}

export const getProjectConfig = (configFilePath: string): ProjectConfig => {
    const data = fs.readFileSync(configFilePath, 'utf8');
    return JSON.parse(data) as ProjectConfig;
}

export const getUploadTasksFromTranslationFiles = (translationFiles: TranslationFile[], taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>): Listr.ListrTask<any>[] => {
    return _getTasksFromTranslationFileData({
        title: 'Upload translation file',
        subtitle: 'Upload data of',
        translationFiles,
        fileInfoCallback: getUploadFileInfosOfTranslationFile,
        taskCallback,
    });
}

export const getDownloadTasksFromTranslationFiles = (translationFiles: TranslationFile[], taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>): Listr.ListrTask<any>[] => {
    return _getTasksFromTranslationFileData({
        title: 'Download translation file',
        subtitle: 'Download data of',
        translationFiles,
        fileInfoCallback: getDownloadFileInfosOfTranslationFile,
        taskCallback,
    });
}

export const _getTasksFromTranslationFileData = (data: {
    title: string,
    subtitle: string,
    translationFiles: TranslationFile[],
    fileInfoCallback: (translationFile: TranslationFile) => FileInfo[],
    taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>
}): Listr.ListrTask<any>[] => {
    const taskList: Listr.ListrTask<any>[] = [];

    data.translationFiles.forEach(async (translationFile) => {
        taskList.push({
            title: `${data.title}: ${translationFile.name}`,
            task: async () => {
                const subTaskList: Listr.ListrTask<any>[] = [];
                const fileInfos = data.fileInfoCallback(translationFile);
                fileInfos.forEach(fileInfo => {
                    subTaskList.push({
                        title: `${data.subtitle}: ${fileInfo.path}`,
                        task: async () => {
                            await data.taskCallback(translationFile, fileInfo);
                        }
                    });
                });

                return new Listr(subTaskList);
            },
        });
    });

    return taskList;
}

export const runTasks = async (taskList: Listr.ListrTask<any>[]): Promise<void> => {
    const tasks = new Listr(taskList);
    await tasks.run().catch((reason) => {
        console.log(reason);
    });
}

export const saveProjectConfig = async (configFilePath: string, projectConfig: ProjectConfig): Promise<void> => {
    fs.writeFileSync(configFilePath, JSON.stringify(projectConfig, null, INDENT));
}

export const missingConfigFile = async (options: Options): Promise<void> => {
    const taskList = [
        {
            title: `Missing config file: ${options.configFilePath}`,
            task: () => Promise.reject(new Error('Create config file or init project!')),
        },
    ];

    return await runTasks(taskList);
}

export const logHeader = (title: string): void => {
    console.log(chalk.hex(GREEN_COLOR).bold(title));
}

export const logError = (msg: string): void => {
    console.error(chalk.red.bold(msg));
}
