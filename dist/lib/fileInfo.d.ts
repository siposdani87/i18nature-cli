import { FileInfo, TranslationFile } from './model';
export declare const getUploadFileInfosOfTranslationFile: (translationFile: TranslationFile) => FileInfo[];
export declare const getDownloadFileInfosOfTranslationFile: (translationFile: TranslationFile) => FileInfo[];
export declare const readContent: (path: string) => string;
export declare const writeContent: (path: string, content: string) => void;
