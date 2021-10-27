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
