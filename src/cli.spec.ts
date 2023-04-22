import inquirer from 'inquirer';
import { mockedAxios } from '../jest.setup';
import cli from './cli';
import { FILENAME } from './lib/config';
import i18natureConfigJSON from '../.i18naturerc.json';

describe('cli', () => {
    it('should run init action with args', async () => {
        mockedAxios.get.mockResolvedValue({
            data: {
                translation_files: i18natureConfigJSON.translation_files,
            },
        });
        const logSpy = jest.spyOn(console, 'log');

        await cli([
            'bin/node',
            'bin/i18nature',
            'init',
            'API_KEY',
            '-y',
            '--verbose',
        ]);

        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining('INIT'),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining(`${FILENAME} [started]`),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            3,
            expect.stringContaining(`${FILENAME} [completed]`),
        );
        logSpy.mockRestore();
    });

    it('should run init action without server response', async () => {
        const message = 'connect ECONNREFUSED 127.0.0.1:80';
        mockedAxios.get.mockRejectedValue(new Error(message));
        const errorSpy = jest.spyOn(console, 'error');

        await cli([
            'bin/node',
            'bin/i18nature',
            'init',
            'API_KEY_1',
            '-y',
            '--debug',
            '--verbose',
        ]);

        expect(errorSpy).toHaveBeenNthCalledWith(1, new Error(message));
        errorSpy.mockRestore();
    });

    it('should run init action with bad api_key', async () => {
        const message = 'Exception: Not found project (bad or missing api_key)';
        mockedAxios.get.mockRejectedValue(new Error(message));
        const errorSpy = jest.spyOn(console, 'error');

        await cli([
            'bin/node',
            'bin/i18nature',
            'init',
            'API_KEY_1',
            '-y',
            '--verbose',
        ]);

        expect(errorSpy).toHaveBeenNthCalledWith(1, new Error(message));
        errorSpy.mockRestore();
    });

    it('should run init action without args', async () => {
        mockedAxios.get.mockResolvedValue({
            data: {
                translation_files: i18natureConfigJSON.translation_files,
            },
        });
        const logSpy = jest.spyOn(console, 'log');
        const promptSpy = jest.spyOn(inquirer, 'prompt').mockResolvedValue({
            overwriteConfigFile: true,
            projectApiKey: 'API_KEY',
            directory: 'example/locales',
        });

        await cli(['bin/node', 'bin/i18nature', 'init']);

        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining('INIT'),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining(`${FILENAME} [started]`),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            3,
            expect.stringContaining(`${FILENAME} [completed]`),
        );
        logSpy.mockRestore();
        promptSpy.mockRestore();
    });

    it('should run download action with args', async () => {
        mockedAxios.get.mockResolvedValue({
            data: {
                content: '',
            },
        });
        const logSpy = jest.spyOn(console, 'log');

        await cli(['bin/node', 'bin/i18nature', 'download', '--verbose']);

        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining('DOWNLOAD'),
        );

        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining(
                'Download translation file: Base [started]',
            ),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            4,
            expect.stringContaining(
                'example/locales/base_en-GB.yml [completed]',
            ),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            6,
            expect.stringContaining(
                'example/locales/base_hu-HU.yml [completed]',
            ),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            7,
            expect.stringContaining(
                'Download translation file: Base [completed]',
            ),
        );

        expect(logSpy).toHaveBeenNthCalledWith(
            8,
            expect.stringContaining(
                'Download translation file: Common [started]',
            ),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            10,
            expect.stringContaining('example/i18n/en/common.json [completed]'),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            12,
            expect.stringContaining('example/i18n/hu/common.json [completed]'),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            13,
            expect.stringContaining(
                'Download translation file: Common [completed]',
            ),
        );

        logSpy.mockRestore();
    });

    it('should run download action with error', async () => {
        const message = '';
        mockedAxios.get.mockRejectedValue(new Error(message));
        const errorSpy = jest.spyOn(console, 'error');

        await cli(['bin/node', 'bin/i18nature', 'download', '--verbose']);

        expect(errorSpy).toHaveBeenNthCalledWith(1, new Error(message));
        errorSpy.mockRestore();
    });

    it('should run upload action with args', async () => {
        mockedAxios.post.mockResolvedValue({
            data: {
                translation_file_id: '1',
            },
        });
        const logSpy = jest.spyOn(console, 'log');

        await cli(['bin/node', 'bin/i18nature', 'upload', '--verbose']);

        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining('UPLOAD'),
        );

        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining('Upload translation file: Base [started]'),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            4,
            expect.stringContaining(
                'example/locales/base_en-GB.yml [completed]',
            ),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            6,
            expect.stringContaining(
                'example/locales/base_hu-HU.yml [completed]',
            ),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            7,
            expect.stringContaining(
                'Upload translation file: Base [completed]',
            ),
        );

        expect(logSpy).toHaveBeenNthCalledWith(
            8,
            expect.stringContaining(
                'Upload translation file: Common [started]',
            ),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            10,
            expect.stringContaining('example/i18n/en/common.json [completed]'),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            12,
            expect.stringContaining('example/i18n/hu/common.json [completed]'),
        );
        expect(logSpy).toHaveBeenNthCalledWith(
            13,
            expect.stringContaining(
                'Upload translation file: Common [completed]',
            ),
        );

        logSpy.mockRestore();
    });

    it('should run upload action with overwrite translations arg', async () => {
        mockedAxios.post.mockResolvedValue({
            data: {
                translation_file_id: '1',
            },
        });
        const logSpy = jest.spyOn(console, 'log');

        await cli([
            'bin/node',
            'bin/i18nature',
            'upload',
            '--overwriteTranslations',
            '--verbose',
        ]);

        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining('UPLOAD'),
        );

        expect(logSpy).toHaveBeenNthCalledWith(
            13,
            expect.stringContaining(
                'Upload translation file: Common [completed]',
            ),
        );

        logSpy.mockRestore();
    });

    it('should run upload action with error', async () => {
        const message = '';
        mockedAxios.post.mockRejectedValue(new Error(message));
        const errorSpy = jest.spyOn(console, 'error');

        await cli(['bin/node', 'bin/i18nature', 'upload', '--verbose']);

        expect(errorSpy).toHaveBeenNthCalledWith(1, new Error(message));
        errorSpy.mockRestore();
    });
});
