import {
    createProjectConfig,
    getProjectConfig,
    missingProjectConfigFile,
    overwriteNotAllowedProjectConfigFile,
    saveProjectConfig,
} from './projectConfig';
import { TranslationFile } from './types';
import fs from 'fs';
import { DEBUG_FILENAME, INDENT } from './config';

describe('projectConfig', () => {
    it('should create a valid project config', () => {
        const version = 2;
        const projectApiKey = 'API_KEY';
        const translationFiles: TranslationFile[] = [];

        const projectConfig = createProjectConfig(
            projectApiKey,
            translationFiles,
            version,
        );

        expect(projectConfig).toEqual({
            version,
            project_api_key: projectApiKey,
            translation_files: translationFiles,
        });
    });

    it('should get project config', () => {
        const projectConfig = getProjectConfig('.i18naturerc.json');

        expect(projectConfig).toEqual(
            expect.objectContaining({
                project_api_key: 'API_KEY',
            }),
        );
    });

    it('should save project config', async () => {
        const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync');
        const projectApiKey = 'API_KEY';
        const translationFiles: TranslationFile[] = [];
        const projectConfig = createProjectConfig(
            projectApiKey,
            translationFiles,
        );
        const configFilePath = DEBUG_FILENAME;

        saveProjectConfig(configFilePath, projectConfig);

        expect(writeFileSyncSpy).toHaveBeenCalledWith(
            ...[configFilePath, JSON.stringify(projectConfig, null, INDENT)],
        );
        writeFileSyncSpy.mockRestore();
    });

    it('should get tasks from missing projectConfigFile', () => {
        const configFilePath = DEBUG_FILENAME;

        const tasks = missingProjectConfigFile({
            configFilePath,
        });

        expect(tasks[0].title).toContain(configFilePath);
    });

    it('should get tasks from overwrite not allowed projectConfigFile', () => {
        const configFilePath = DEBUG_FILENAME;

        const tasks = overwriteNotAllowedProjectConfigFile({
            configFilePath,
        });

        expect(tasks[0].title).toContain(configFilePath);
    });
});
