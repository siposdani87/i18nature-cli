import {
    getDownloadFileInfosOfTranslationFile,
    getUploadFileInfosOfTranslationFile,
    readContent,
    writeContent,
} from './fileInfo';
import { TranslationFile } from './types';
import fs from 'fs-extra';
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
});
