import axios from 'axios';
import fs from 'fs';
import { Options } from './model';
import { getDownloadTasksFromTranslationFiles, getProjectConfig, logHeader, missingConfigFile, runTasks } from './util';

interface DownloadResponse {
    content: string;
}

export default async (options: Options): Promise<void> => {
    logHeader('DOWNLOAD');

    if (!options.existsProjectConfigFile) {
        return await missingConfigFile(options);
    }

    const projectConfig = getProjectConfig(options.configFilePath);
    const taskList = getDownloadTasksFromTranslationFiles(projectConfig.translation_files, async (translationFile, fileInfo): Promise<void> => {
        try {
            const response = await axios.get<DownloadResponse>(`/api/translation-files/${translationFile.id ?? null}/download`, {
                params: {
                    locale: fileInfo.locale,
                    api_key: projectConfig.project_api_key,
                },
            });
            fs.writeFileSync(fileInfo.path, response.data.content);
        } catch (error: any) {
            return Promise.reject(new Error(error.response.data.message ?? error.message));
        }
    });

    await runTasks(taskList);
}
