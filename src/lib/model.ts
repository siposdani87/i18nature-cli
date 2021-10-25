export enum Action {
    NONE, INIT, UPLOAD, DOWNLOAD,
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

export const DEFAULT_API_KEY = 'API_KEY';

export const FILENAME = '.i18naturerc.json';
export const DEBUG_FILENAME = '.i18naturerc-debug.json';
export const CURRENT_WORK_DIR = process.cwd();

export const DEBUG_BASE_URL = 'http://localhost';
export const BASE_URL = 'https://app.i18nature.com';

export const GREEN_COLOR = '#0A4414';
