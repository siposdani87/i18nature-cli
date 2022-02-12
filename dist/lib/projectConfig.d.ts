import { Options, ProjectConfig, TranslationFile } from './model';
export declare const createProjectConfig: (projectApiKey: string, translationFiles: TranslationFile[], version?: number) => ProjectConfig;
export declare const getProjectConfig: (configFilePath: string) => ProjectConfig;
export declare const saveProjectConfig: (configFilePath: string, projectConfig: ProjectConfig) => Promise<void>;
export declare const missingProjectConfigFile: (options: Options) => Promise<void>;
