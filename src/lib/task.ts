import Listr, { ListrTask } from 'listr';
import {
    getDownloadFileInfosOfTranslationFile,
    getUploadFileInfosOfTranslationFile,
} from './fileInfo';
import { FileInfo, TranslationFile } from './types';

export const getUploadTasksFromTranslationFiles = (
    translationFiles: TranslationFile[],
    taskCallback: (
        translationFile: TranslationFile,
        fileInfo: FileInfo,
    ) => Promise<void>,
): ListrTask[] => {
    return _getTasksFromTranslationFileData({
        title: 'Upload translation file',
        subtitle: 'Upload data of',
        translationFiles,
        fileInfoCallback: getUploadFileInfosOfTranslationFile,
        taskCallback,
    });
};

export const getDownloadTasksFromTranslationFiles = (
    translationFiles: TranslationFile[],
    taskCallback: (
        translationFile: TranslationFile,
        fileInfo: FileInfo,
    ) => Promise<void>,
): ListrTask[] => {
    return _getTasksFromTranslationFileData({
        title: 'Download translation file',
        subtitle: 'Download data of',
        translationFiles,
        fileInfoCallback: getDownloadFileInfosOfTranslationFile,
        taskCallback,
    });
};

const _getTasksFromTranslationFileData = (data: {
    title: string;
    subtitle: string;
    translationFiles: TranslationFile[];
    fileInfoCallback: (translationFile: TranslationFile) => FileInfo[];
    taskCallback: (
        translationFile: TranslationFile,
        fileInfo: FileInfo,
    ) => Promise<void>;
}): ListrTask[] => {
    const taskList: ListrTask[] = [];

    data.translationFiles.forEach(async (translationFile): Promise<void> => {
        taskList.push({
            title: `${data.title}: ${translationFile.name}`,
            task: async () => {
                const subTaskList: ListrTask[] = [];
                const fileInfos = data.fileInfoCallback(translationFile);
                fileInfos.forEach((fileInfo) => {
                    subTaskList.push({
                        title: `${data.subtitle}: ${fileInfo.path}`,
                        task: async () => {
                            await data.taskCallback(translationFile, fileInfo);
                        },
                    });
                });

                return new Listr(subTaskList);
            },
        });
    });

    return taskList;
};

export const runTasks = async (taskList: ListrTask[]): Promise<void> => {
    const tasks = new Listr(taskList);

    return tasks.run().catch((reason): void => {
        console.log(reason);
    });
};
