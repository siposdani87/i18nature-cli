import axios from 'axios';
import {
    getProjectConfig,
    missingProjectConfigFile,
    saveProjectConfig,
} from '../lib/projectConfig';
import { Options } from '../lib/types';
import { logHeader } from '../lib/log';
import { getUploadTasksFromTranslationFiles } from '../lib/task';
import { readContent } from '../lib/fileInfo';
import { ListrTask } from 'listr';

interface UploadResponse {
    translation_file_id?: string;
}

export default (options: Options): ListrTask[] => {
    logHeader('UPLOAD');

    if (!options.existsProjectConfigFile) {
        return missingProjectConfigFile(options);
    }

    const projectConfig = getProjectConfig(options.configFilePath);
    const taskList = getUploadTasksFromTranslationFiles(
        projectConfig.translation_files,
        async (translationFile, fileInfo): Promise<void> => {
            try {
                const { data } = await axios.post<UploadResponse>(
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
                translationFile.id = data.translation_file_id;
            } catch (error: any) {
                return Promise.reject(error);
            }
        },
    );

    taskList.push({
        title: `Modified config file: ${options.configFilePath}`,
        task: () => {
            saveProjectConfig(options.configFilePath, projectConfig);
        },
    });

    return taskList;
};
