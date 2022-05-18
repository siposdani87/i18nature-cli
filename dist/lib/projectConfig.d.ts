import { ListrTask } from 'listr';
import { Options, ProjectConfig, TranslationFile } from './types';
export declare const createProjectConfig: (projectApiKey: string, translationFiles: TranslationFile[], version?: number) => ProjectConfig;
export declare const getProjectConfig: (configFilePath: string) => ProjectConfig;
export declare const saveProjectConfig: (configFilePath: string, projectConfig: ProjectConfig) => void;
export declare const missingProjectConfigFile: (options: Partial<Options>) => ListrTask[];
export declare const overwriteNotAllowedProjectConfigFile: (options: Partial<Options>) => ListrTask[];
