import { ListrTask } from 'listr';
import {
    missingProjectConfigFile,
    overwriteNotAllowedProjectConfigFile,
} from './projectConfig';
import {
    getDownloadTasksFromTranslationFiles,
    getUploadTasksFromTranslationFiles,
    runTasks,
} from './task';
import { TranslationFile } from './types';
import i18natureConfigJSON from '../../.i18naturerc.json';
import { DEBUG_FILENAME } from './config';

describe('task', () => {
    it('should get upload tasks from translation files', () => {
        const translatioFile: TranslationFile =
            i18natureConfigJSON.translation_files[0];
        const translatioFiles: TranslationFile[] = [translatioFile];

        const tasks = getUploadTasksFromTranslationFiles(
            translatioFiles,
            async () => {
                // Empty method
            },
        );

        expect(tasks[0].title).toContain(translatioFile.name);
    });

    it('should get download tasks from translation files', () => {
        const translatioFile: TranslationFile =
            i18natureConfigJSON.translation_files[1];
        const translatioFiles: TranslationFile[] = [translatioFile];

        const tasks = getDownloadTasksFromTranslationFiles(
            translatioFiles,
            async () => {
                // Empty method
            },
        );

        expect(tasks[0].title).toContain(translatioFile.name);
    });

    it('should run empty tasks', async () => {
        const tasks: ListrTask[] = [];

        await runTasks(tasks);
    });

    it('should run missing projectConfigFile tasks', async () => {
        const configFilePath = DEBUG_FILENAME;
        const tasks = missingProjectConfigFile({
            configFilePath,
        });

        await runTasks(tasks);
    });

    it('should run overwrite not allowed projectConfigFile tasks', async () => {
        const configFilePath = DEBUG_FILENAME;
        const tasks = overwriteNotAllowedProjectConfigFile({
            configFilePath,
        });

        await runTasks(tasks);
    });
});
