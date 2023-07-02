import axios from 'axios';
import {
    getProjectConfig,
    missingProjectConfigFile,
} from '../lib/projectConfig';
import { Options } from '../lib/types';
import { logError, logHeader } from '../lib/log';
import { getDownloadTasksFromTranslationFiles } from '../lib/task';
import { writeContent } from '../lib/fileInfo';
import { ListrTask } from 'listr';

interface DownloadResponse {
    content: string;
}

export default (options: Options): ListrTask[] => {
    logHeader('DOWNLOAD');

    if (!options.existsProjectConfigFile) {
        return missingProjectConfigFile(options);
    }

    const projectConfig = getProjectConfig(options.configFilePath);
    return getDownloadTasksFromTranslationFiles(
        projectConfig.translation_files,
        async (translationFile, fileInfo): Promise<void> => {
            try {
                const { data } = await axios.get<DownloadResponse>(
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
                writeContent(fileInfo.path, data.content);
            } catch (error: any) {
                logError(error.message);
                return Promise.reject(error);
            }
        },
    );
};
