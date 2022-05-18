import { CURRENT_WORK_DIR, FILENAME } from '../lib/config';
import { Action, Options } from '../lib/types';
import upload from './upload';

const options: Options = {
    projectApiKey: 'API_KEY',
    skipPrompts: true,
    verbose: false,
    overwriteConfigFile: true,
    overwriteTranslations: false,
    debug: false,
    action: Action.DOWNLOAD,
    directory: CURRENT_WORK_DIR,
    configFileName: FILENAME,
    configFilePath: `${CURRENT_WORK_DIR}/${FILENAME}`,
    existsProjectConfigFile: true,
};

describe('upload', () => {
    it('should run upload action with default options', async () => {
        const tasks = upload(options);

        expect(tasks[0].title).toContain('Upload translation file');
    });

    it('should run init action with false value of existsProjectConfigFile option', async () => {
        const tasks = upload({
            ...options,
            existsProjectConfigFile: false,
        });

        expect(tasks[0].title).toContain(
            `Missing config file: ${options.configFilePath}`,
        );
    });
});
