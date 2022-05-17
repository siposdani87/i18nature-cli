import { FileInfo, TranslationFile } from './types';
export declare const getUploadFileInfosOfTranslationFile: (translationFile: TranslationFile) => FileInfo[];
export declare const getDownloadFileInfosOfTranslationFile: (translationFile: TranslationFile) => FileInfo[];
export declare const readContent: (filePath: string) => string;
export declare const writeContent: (filePath: string, content: string) => void;
