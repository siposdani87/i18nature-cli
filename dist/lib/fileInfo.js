"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeContent = exports.readContent = exports.getDownloadFileInfosOfTranslationFile = exports.getUploadFileInfosOfTranslationFile = void 0;
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var config_1 = require("./config");
var _getGlobPatterns = function (translatioFile) {
    var _a;
    var directory = (_a = translatioFile.directory) !== null && _a !== void 0 ? _a : '';
    var file = "".concat(translatioFile.filename, ".").concat(translatioFile.extension);
    var filePattern = path_1.default.join(config_1.CURRENT_WORK_DIR, directory, file);
    var globPattern = _resolvePathPattern(filePattern, '*');
    return [filePattern, globPattern];
};
var _getLanguageFromLocale = function (locale) {
    return locale.replace('_', '-').split('-', 2)[0];
};
var _getLocaleFrom = function (filePath, filePattern, locales) {
    return locales.find(function (locale) {
        var path = _resolvePathPattern(filePattern, locale);
        return path === filePath;
    });
};
var _resolvePathPattern = function (filePattern, locale) {
    var language = locale === '*' ? '*' : _getLanguageFromLocale(locale);
    return filePattern.replace('%language', language).replace('%locale', locale);
};
var getUploadFileInfosOfTranslationFile = function (translationFile) {
    var _a = _getGlobPatterns(translationFile), filePattern = _a[0], globPattern = _a[1];
    var files = glob_1.default.sync(globPattern);
    var results = [];
    files.forEach(function (filePath) {
        var locale = _getLocaleFrom(filePath, filePattern, translationFile.locales);
        if (locale) {
            results.push({
                path: filePath,
                locale: locale,
            });
        }
    });
    return results;
};
exports.getUploadFileInfosOfTranslationFile = getUploadFileInfosOfTranslationFile;
var getDownloadFileInfosOfTranslationFile = function (translationFile) {
    var filePattern = _getGlobPatterns(translationFile)[0];
    var results = [];
    translationFile.locales.forEach(function (locale) {
        var filePath = _resolvePathPattern(filePattern, locale);
        if (locale) {
            results.push({
                path: filePath,
                locale: locale,
            });
        }
    });
    return results;
};
exports.getDownloadFileInfosOfTranslationFile = getDownloadFileInfosOfTranslationFile;
var readContent = function (path) {
    return fs_1.default.readFileSync(path, 'utf8');
};
exports.readContent = readContent;
var writeContent = function (path, content) {
    return fs_1.default.writeFileSync(path, content);
};
exports.writeContent = writeContent;
//# sourceMappingURL=fileInfo.js.map