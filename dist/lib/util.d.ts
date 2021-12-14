import Listr from 'listr';
import { FileInfo, ProjectConfig, TranslationFile, Options } from './model';
export declare const getUploadFileInfosOfTranslationFile: (translationFile: TranslationFile) => FileInfo[];
export declare const getDownloadFileInfosOfTranslationFile: (translationFile: TranslationFile) => FileInfo[];
export declare const getProjectConfig: (configFilePath: string) => ProjectConfig;
export declare const getUploadTasksFromTranslationFiles: (translationFiles: TranslationFile[], taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>) => Listr.ListrTask<any>[];
export declare const getDownloadTasksFromTranslationFiles: (translationFiles: TranslationFile[], taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>) => Listr.ListrTask<any>[];
export declare const _getTasksFromTranslationFileData: (data: {
    title: string;
    subtitle: string;
    translationFiles: TranslationFile[];
    fileInfoCallback: (translationFile: TranslationFile) => FileInfo[];
    taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>;
}) => Listr.ListrTask<any>[];
export declare const runTasks: (taskList: Listr.ListrTask<any>[]) => Promise<void>;
export declare const saveProjectConfig: (configFilePath: string, projectConfig: ProjectConfig) => Promise<void>;
export declare const missingConfigFile: (options: Options) => Promise<void>;
export declare const logHeader: (title: string) => void;
export declare const logError: (msg: string) => void;
