import axios from 'axios';
import { Options, TranslationFile } from '../lib/types';
import {
    createProjectConfig,
    overwriteNotAllowedProjectConfigFile,
    saveProjectConfig,
} from '../lib/projectConfig';
import { logHeader } from '../lib/log';
import { ListrTask } from 'listr';

interface InitResponse {
    translation_files: TranslationFile[];
    supported_languages: string[];
}

export default (options: Options): ListrTask[] => {
    logHeader('INIT');

    if (!options.overwriteConfigFile) {
        return overwriteNotAllowedProjectConfigFile(options);
    }

    return [
        {
            title: `Create config file: ${options.configFilePath}`,
            task: async () => {
                try {
                    const { data } = await axios.get<InitResponse>(
                        `/api/projects/init`,
                        {
                            params: {
                                api_key: options.projectApiKey,
                            },
                        },
                    );
                    const translationFiles = data.translation_files.map(
                        (translationFile): TranslationFile => {
                            return {
                                ...translationFile,
                                directory: options.directory,
                            };
                        },
                    );

                    const projectConfig = createProjectConfig(
                        options.projectApiKey,
                        translationFiles,
                    );
                    saveProjectConfig(options.configFilePath, projectConfig);
                } catch (error: any) {
                    return Promise.reject(error);
                }
            },
        },
    ];
};
