import axios from 'axios';
import {
    getProjectConfig,
    missingProjectConfigFile,
    saveProjectConfig,
} from '../lib/projectConfig';
import { Options } from '../lib/model';
import { logHeader } from '../lib/log';
import { getUploadTasksFromTranslationFiles, runTasks } from '../lib/task';
import { readContent } from '../lib/fileInfo';

interface UploadResponse {
    translation_file_id?: string;
}

export default async (options: Options): Promise<void> => {
    logHeader('UPLOAD');

    if (!options.existsProjectConfigFile) {
        return await missingProjectConfigFile(options);
    }

    const projectConfig = getProjectConfig(options.configFilePath);
    const taskList = getUploadTasksFromTranslationFiles(
        projectConfig.translation_files,
        async (translationFile, fileInfo): Promise<void> => {
            try {
                const response = await axios.post<UploadResponse>(
                    `/api/translation-files/${
                        translationFile.id ?? null
                    }/upload`,
                    {
                        translation_file: translationFile,
                        content: readContent(fileInfo.path),
                    },
                    {
                        params: {
                            overwrite: options.overwriteTranslations,
                            locale: fileInfo.locale,
                            api_key: projectConfig.project_api_key,
                        },
                    },
                );
                translationFile.id =
                    response.data.translation_file_id ?? translationFile.id;
            } catch (error: any) {
                return Promise.reject(
                    new Error(error.response.data.message ?? error.message),
                );
            }
        },
    );

    taskList.push({
        title: `Modified config file: ${options.configFilePath}`,
        task: async () => {
            await saveProjectConfig(options.configFilePath, projectConfig);
        },
    });

    await runTasks(taskList);
};
