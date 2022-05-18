import { CURRENT_WORK_DIR, DEBUG_FILENAME } from '../lib/config';
import { Action, Options } from '../lib/types';
import init from './init';

const options: Options = {
    projectApiKey: 'API_KEY',
    skipPrompts: true,
    verbose: false,
    overwriteConfigFile: true,
    overwriteTranslations: false,
    debug: true,
    action: Action.INIT,
    directory: CURRENT_WORK_DIR,
    configFileName: DEBUG_FILENAME,
    configFilePath: `${CURRENT_WORK_DIR}/${DEBUG_FILENAME}`,
    existsProjectConfigFile: false,
};

describe('init', () => {
    it('should run init action with default options', async () => {
        const tasks = init({
            ...options,
        });

        expect(tasks[0].title).toContain(options.configFilePath);
    });

    it('should run init action with false value of overwriteConfigFile option', async () => {
        const tasks = init({
            ...options,
            overwriteConfigFile: false,
        });

        expect(tasks[0].title).toContain(
            `Create config file: ${options.configFilePath}`,
        );
    });
});
