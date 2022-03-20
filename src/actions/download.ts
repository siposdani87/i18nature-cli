import axios from 'axios';
import {
    getProjectConfig,
    missingProjectConfigFile,
} from '../lib/projectConfig';
import { Options } from '../lib/model';
import { logHeader } from '../lib/log';
import { getDownloadTasksFromTranslationFiles } from '../lib/task';
import { writeContent } from '../lib/fileInfo';
import { ListrTask } from 'listr';

interface DownloadResponse {
    content: string;
}

export default (options: Options): ListrTask<any>[] => {
    logHeader('DOWNLOAD');

    if (!options.existsProjectConfigFile) {
        return missingProjectConfigFile(options);
    }

    const projectConfig = getProjectConfig(options.configFilePath);
    return getDownloadTasksFromTranslationFiles(
        projectConfig.translation_files,
        async (translationFile, fileInfo): Promise<void> => {
            try {
                const response = await axios.get<DownloadResponse>(
                    `/api/translation-files/${
                        translationFile.id ?? null
                    }/download`,
                    {
                        params: {
                            locale: fileInfo.locale,
                            api_key: projectConfig.project_api_key,
                        },
                    },
                );
                writeContent(fileInfo.path, response.data.content);
            } catch (error: any) {
                return Promise.reject(
                    new Error(error.response.data.message ?? error.message),
                );
            }
        },
    );
};
