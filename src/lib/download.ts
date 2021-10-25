import axios from 'axios';
import fs from 'fs';
import wait from 'wait';
import { Options } from './model';
import { getDownloadTasksFromTranslationFiles, getProjectConfig, logHeader, runTasks } from './util';

interface DownloadResponse {
    content: string;
}

export default async (options: Options): Promise<void> => {
    logHeader('DOWNLOAD');

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
    const taskList = getDownloadTasksFromTranslationFiles(projectConfig.translation_files, async (translationFile, fileInfo) => {
        try {
            const response = await axios.post<DownloadResponse>(`/api/translation-files/${translationFile.id ?? null}/download`, {
                locale: fileInfo.locale,
            }, {
                params: {
                    api_key: projectConfig.project_api_key,
                },
            });
            fs.writeFileSync(fileInfo.path, response.data.content);
            await wait(2000);
        } catch (error: any) {
            return Promise.reject(new Error(error.response.data.message ?? error.message));
        }
    });

    await runTasks(taskList);
}
