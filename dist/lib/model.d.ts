export declare enum Action {
    NONE = 0,
    INIT = 1,
    UPLOAD = 2,
    DOWNLOAD = 3
}
export interface Options {
    projectApiKey: string;
    skipPrompts: boolean;
    verbose: boolean;
    overwrite: boolean;
    debug: boolean;
    action: Action;
    directory: string;
    configFileName: string;
    configFilePath: string;
    existsProjectConfigFile: boolean;
}
export interface TranslationFile {
    id?: string;
    name: string;
    locales: string[];
    default_locale: string;
    filename: string;
    extension: string;
    wrapper_key: string;
    directory?: string;
}
export interface ProjectConfig {
    version: number;
    project_api_key: string;
    translation_files: TranslationFile[];
}
export interface FileInfo {
    path: string;
    locale: string;
}
export declare const DEFAULT_API_KEY = "API_KEY";
export declare const FILENAME = ".i18naturerc.json";
export declare const DEBUG_FILENAME = ".i18naturerc-debug.json";
export declare const CURRENT_WORK_DIR: string;
export declare const DEBUG_BASE_URL = "http://localhost";
export declare const BASE_URL = "https://app.i18nature.com";
export declare const GREEN_COLOR = "#0A4414";
