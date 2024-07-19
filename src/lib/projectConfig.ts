import { ListrTask } from 'listr';
import { INDENT } from './config';
import { Options, ProjectConfig, TranslationFile } from './types';
import { readContent, writeContent } from './fileInfo';

export const createProjectConfig = (
    projectApiKey: string,
    translationFiles: TranslationFile[],
    version = 1,
): ProjectConfig => {
    return {
        version,
        project_api_key: projectApiKey,
        translation_files: translationFiles,
    };
};

export const getProjectConfig = (configFilePath: string): ProjectConfig => {
    const data = readContent(configFilePath);

    return JSON.parse(data) as ProjectConfig;
};

export const saveProjectConfig = (
    configFilePath: string,
    projectConfig: ProjectConfig,
): void => {
    return writeContent(
        configFilePath,
        JSON.stringify(projectConfig, null, INDENT),
    );
};

export const missingProjectConfigFile = (
    options: Partial<Options>,
): ListrTask[] => {
    return [
        {
            title: `Missing config file: ${options.configFilePath}`,
            task: () =>
                Promise.reject(
                    new Error('Create config file or init project!'),
                ),
        },
    ];
};

export const overwriteNotAllowedProjectConfigFile = (
    options: Partial<Options>,
): ListrTask[] => {
    return [
        {
            title: `Create config file: ${options.configFilePath}`,
            task: () =>
                Promise.reject(
                    new Error('Config file overwrite is not allowed!'),
                ),
        },
    ];
};
