import glob from 'glob';
import path from 'path';
import fs from 'fs';
import { CURRENT_WORK_DIR } from './config';
import { FileInfo, TranslationFile } from './model';

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
        const path = _resolvePathPattern(filePattern, locale);
        return path === filePath;
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
    const results: FileInfo[] = [];

    files.forEach((filePath): void => {
        const locale = _getLocaleFrom(
            filePath,
            filePattern,
            translationFile.locales,
        );
        if (locale) {
            results.push({
                path: filePath,
                locale,
            });
        }
    });

    return results;
};

export const getDownloadFileInfosOfTranslationFile = (
    translationFile: TranslationFile,
): FileInfo[] => {
    const [filePattern] = _getGlobPatterns(translationFile);
    const results: FileInfo[] = [];

    translationFile.locales.forEach((locale): void => {
        const filePath = _resolvePathPattern(filePattern, locale);
        if (locale) {
            results.push({
                path: filePath,
                locale,
            });
        }
    });

    return results;
};

export const readContent = (path: string): string => {
    return fs.readFileSync(path, 'utf8');
};

export const writeContent = (path: string, content: string): void => {
    return fs.writeFileSync(path, content);
};
