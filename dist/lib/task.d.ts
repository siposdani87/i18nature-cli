import { ListrTask } from 'listr';
import { FileInfo, TranslationFile } from './types';
export declare const getUploadTasksFromTranslationFiles: (translationFiles: TranslationFile[], taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>) => ListrTask[];
export declare const getDownloadTasksFromTranslationFiles: (translationFiles: TranslationFile[], taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>) => ListrTask[];
export declare const runTasks: (taskList: ListrTask[]) => Promise<void>;
