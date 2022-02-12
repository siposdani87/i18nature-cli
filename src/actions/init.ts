import axios from 'axios';
import { Options, TranslationFile } from '../lib/model';
import { createProjectConfig, saveProjectConfig } from '../lib/projectConfig';
import { logHeader } from '../lib/log';
import { runTasks } from '../lib/task';

interface InitResponse {
    translation_files: TranslationFile[];
    supported_languages: string[];
}

export default async (options: Options): Promise<void> => {
    logHeader('INIT');

    if (!options.overwriteConfigFile) {
        const taskList = [
            {
                title: `Create config file: ${options.configFilePath}`,
                task: () =>
                    Promise.reject(
                        new Error('Config file overwrite is not allowed!'),
                    ),
            },
        ];

        return await runTasks(taskList);
    }

    const taskList = [
        {
            title: `Create config file: ${options.configFilePath}`,
            task: async () => {
                try {
                    const response = await axios.get<InitResponse>(
                        `/api/projects/init`,
                        {
                            params: {
                                api_key: options.projectApiKey,
                            },
                        },
                    );
                    const translationFiles =
                        response.data.translation_files.map(
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
                    await saveProjectConfig(
                        options.configFilePath,
                        projectConfig,
                    );
                } catch (error: any) {
                    return Promise.reject(
                        new Error(error.response.data.message ?? error.message),
                    );
                }
            },
        },
    ];

    await runTasks(taskList);
};
