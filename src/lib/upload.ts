import axios from 'axios';
import fs from 'fs';
import wait from 'wait';
import { Options } from './model';
import { getProjectConfig, getUploadTasksFromTranslationFiles, logHeader, runTasks, saveProjectConfig } from './util';

interface UploadResponse {
    translation_file_id?: string;
}

export default async (options: Options): Promise<void> => {
    logHeader('UPLOAD');

    if (!options.existsProjectConfigFile) {
        const taskList = [
            {
                title: `Missing config file: ${options.configFilePath}`,
                task: () => Promise.reject(new Error('Create config file or init project!')),
            },
        ];

        return await runTasks(taskList);
    }

    const projectConfig = getProjectConfig(options.configFilePath);
    const taskList = getUploadTasksFromTranslationFiles(projectConfig.translation_files, async (translationFile, fileInfo) => {
        const content = fs.readFileSync(fileInfo.path, 'utf8');
        try {
            const response = await axios.post<UploadResponse>(`/api/translation-files/${translationFile.id ?? null}/upload`, {
                translation_file: translationFile,
                locale: fileInfo.locale,
                content,
            }, {
                params: {
                    api_key: projectConfig.project_api_key,
                },
            });
            translationFile.id = response.data.translation_file_id ?? translationFile.id;
            await wait(2000);
        } catch (error: any) {
            return Promise.reject(new Error(error.response.data.message ?? error.message));
        }
    });

    taskList.push({
        title: `Modify config file: ${options.configFilePath}`,
        task: async () => {
            await saveProjectConfig(options.configFilePath, projectConfig);
        }
    });

    await runTasks(taskList);
}
