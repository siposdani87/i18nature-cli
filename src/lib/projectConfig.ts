import fs from 'fs';
import { INDENT } from './config';
import { Options, ProjectConfig, TranslationFile } from './model';
import { runTasks } from './task';

export const createProjectConfig = (projectApiKey: string, translationFiles: TranslationFile[], version = 1): ProjectConfig => {
    const config = {
        version,
        project_api_key: projectApiKey,
        translation_files: translationFiles,
    };

    return config;
}

export const getProjectConfig = (configFilePath: string): ProjectConfig => {
    const data = fs.readFileSync(configFilePath, 'utf8');
    return JSON.parse(data) as ProjectConfig;
}

export const saveProjectConfig = async (configFilePath: string, projectConfig: ProjectConfig): Promise<void> => {
    fs.writeFileSync(configFilePath, JSON.stringify(projectConfig, null, INDENT));
}

export const missingProjectConfigFile = async (options: Options): Promise<void> => {
    const taskList = [
        {
            title: `Missing config file: ${options.configFilePath}`,
            task: () => Promise.reject(new Error('Create config file or init project!')),
        },
    ];

    return await runTasks(taskList);
}
