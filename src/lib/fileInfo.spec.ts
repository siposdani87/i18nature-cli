import {
    getDownloadFileInfosOfTranslationFile,
    getUploadFileInfosOfTranslationFile,
    readContent,
    writeContent,
} from './fileInfo';
import { TranslationFile } from './types';
import fs from 'fs-extra';
import glob from 'glob';
import i18natureConfigJSON from '../../.i18naturerc.json';

describe('fileInfo', () => {
    it('should get upload file infos of translation file', () => {
        const translatioFile: TranslationFile =
            i18natureConfigJSON.translation_files[0];

        const fileInfos = getUploadFileInfosOfTranslationFile(translatioFile);

        expect(fileInfos[0].path).toContain('example/locales/base_en-GB.yml');
        expect(fileInfos[1].path).toContain('example/locales/base_hu-HU.yml');
    });

    it('should get download file infos of translation file', () => {
        const translatioFile: TranslationFile =
            i18natureConfigJSON.translation_files[1];

        const fileInfos = getDownloadFileInfosOfTranslationFile(translatioFile);

        expect(fileInfos[0].path).toContain('example/i18n/en/common.json');
        expect(fileInfos[1].path).toContain('example/i18n/hu/common.json');
    });

    it('should read content', () => {
        const readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
        const filePath = '.i18naturerc.json';

        readContent(filePath);

        expect(readFileSyncSpy).toHaveBeenCalledWith(...[filePath, 'utf8']);
        readFileSyncSpy.mockRestore();
    });

    it('should write content', () => {
        const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync');
        const filePath = '.i18naturerc.json';
        const content = 'data';

        writeContent(filePath, content);

        expect(writeFileSyncSpy).toHaveBeenCalledWith(...[filePath, content]);
        writeFileSyncSpy.mockRestore();
    });

    it('should handle translation file with undefined directory', () => {
        const translatioFile: TranslationFile = {
            name: 'Test',
            filename: 'test_%locale',
            extension: 'json',
            locales: ['en-GB'],
            default_locale: 'en-GB',
        };

        const fileInfos = getDownloadFileInfosOfTranslationFile(translatioFile);

        expect(fileInfos).toBeDefined();
        expect(fileInfos.length).toBe(1);
        expect(fileInfos[0].path).toContain('test_en-GB.json');
    });

    it('should filter out non-matching locales in upload file infos', () => {
        const workDir = process.cwd();
        const globSyncSpy = jest
            .spyOn(glob, 'sync')
            .mockReturnValue([
                `${workDir}/example/locales/test_en-GB.json`,
                `${workDir}/example/locales/test_de-DE.json`,
            ]);

        const translatioFile: TranslationFile = {
            name: 'Test',
            filename: 'test_%locale',
            extension: 'json',
            locales: ['en-GB', 'fr-FR'],
            default_locale: 'en-GB',
            directory: 'example/locales',
        };

        const fileInfos = getUploadFileInfosOfTranslationFile(translatioFile);

        expect(globSyncSpy).toHaveBeenCalled();
        expect(fileInfos).toBeDefined();
        expect(fileInfos.length).toBe(1);
        expect(fileInfos[0].locale).toBe('en-GB');
        expect(fileInfos[0].path).toContain('test_en-GB.json');
        globSyncSpy.mockRestore();
    });
});
