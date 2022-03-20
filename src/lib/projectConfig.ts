import fs from 'fs';
import { ListrTask } from 'listr';
import { INDENT } from './config';
import { Options, ProjectConfig, TranslationFile } from './model';

export const createProjectConfig = (
    projectApiKey: string,
    translationFiles: TranslationFile[],
    version = 1,
): ProjectConfig => {
    return {
        version,
        project_api_key: projectApiKey,
        translation_files: translationFiles,
    };
};

export const getProjectConfig = (configFilePath: string): ProjectConfig => {
    const data = fs.readFileSync(configFilePath, 'utf8');

    return JSON.parse(data) as ProjectConfig;
};

export const saveProjectConfig = async (
    configFilePath: string,
    projectConfig: ProjectConfig,
): Promise<void> => {
    return fs.writeFileSync(
        configFilePath,
        JSON.stringify(projectConfig, null, INDENT),
    );
};

export const missingProjectConfigFile = (
    options: Options,
): ListrTask<any>[] => {
    return [
        {
            title: `Missing config file: ${options.configFilePath}`,
            task: () =>
                Promise.reject(
                    new Error('Create config file or init project!'),
                ),
        },
    ];
};

export const overwriteNotAllowedProjectConfigFile = (
    options: Options,
): ListrTask<any>[] => {
    return [
        {
            title: `Create config file: ${options.configFilePath}`,
            task: () =>
                Promise.reject(
                    new Error('Config file overwrite is not allowed!'),
                ),
        },
    ];
};
