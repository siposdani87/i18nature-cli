import Listr from 'listr';
import { FileInfo, TranslationFile } from './model';
export declare const getUploadTasksFromTranslationFiles: (translationFiles: TranslationFile[], taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>) => Listr.ListrTask<any>[];
export declare const getDownloadTasksFromTranslationFiles: (translationFiles: TranslationFile[], taskCallback: (translationFile: TranslationFile, fileInfo: FileInfo) => Promise<void>) => Listr.ListrTask<any>[];
export declare const runTasks: (taskList: Listr.ListrTask<any>[]) => Promise<void>;
