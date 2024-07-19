import glob from 'glob';
import path from 'path';
import fs from 'fs-extra';
import { CURRENT_WORK_DIR } from './config';
import { FileInfo, TranslationFile } from './types';

const _getGlobPatterns = (translatioFile: TranslationFile): string[] => {
    const directory = translatioFile.directory ?? '';
    const file = `${translatioFile.filename}.${translatioFile.extension}`;
    const filePattern = path.join(CURRENT_WORK_DIR, directory, file);
    const globPattern = _resolvePathPattern(filePattern, '*');

    return [filePattern, globPattern];
};

const _getLanguageFromLocale = (locale: string): string => {
    return locale.replace('_', '-').split('-', 2)[0];
};

const _getLocaleFrom = (
    filePath: string,
    filePattern: string,
    locales: string[],
): string | undefined => {
    return locales.find((locale): boolean => {
        return filePath === _resolvePathPattern(filePattern, locale);
    });
};

const _resolvePathPattern = (filePattern: string, locale: string): string => {
    const language = locale === '*' ? '*' : _getLanguageFromLocale(locale);
    return filePattern
        .replace('%language', language)
        .replace('%locale', locale);
};

export const getUploadFileInfosOfTranslationFile = (
    translationFile: TranslationFile,
): FileInfo[] => {
    const [filePattern, globPattern] = _getGlobPatterns(translationFile);
    const files = glob.sync(globPattern);
    const fileInfos: FileInfo[] = [];

    files.forEach((filePath): void => {
        const locale = _getLocaleFrom(
            filePath,
            filePattern,
            translationFile.locales,
        );
        if (locale) {
            fileInfos.push({
                path: filePath,
                locale,
            });
        }
    });

    return fileInfos;
};

export const getDownloadFileInfosOfTranslationFile = (
    translationFile: TranslationFile,
): FileInfo[] => {
    const [filePattern] = _getGlobPatterns(translationFile);
    const fileInfos: FileInfo[] = [];

    translationFile.locales.forEach((locale): void => {
        const filePath = _resolvePathPattern(filePattern, locale);
        fileInfos.push({
            path: filePath,
            locale,
        });
    });

    return fileInfos;
};

export const readContent = (filePath: string): string => {
    return fs.readFileSync(filePath, 'utf8');
};

export const writeContent = (filePath: string, content: string): void => {
    fs.ensureFileSync(filePath);

    return fs.writeFileSync(filePath, content);
};
