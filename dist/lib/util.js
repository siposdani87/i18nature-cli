"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logHeader = exports.saveProjectConfig = exports.runTasks = exports._getTasksFromTranslationFileData = exports.getDownloadTasksFromTranslationFiles = exports.getUploadTasksFromTranslationFiles = exports.getProjectConfig = exports.getDownloadFileInfosOfTranslationFile = exports.getUploadFileInfosOfTranslationFile = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var glob_1 = __importDefault(require("glob"));
var listr_1 = __importDefault(require("listr"));
var path_1 = __importDefault(require("path"));
var model_1 = require("./model");
var _getGlobPatterns = function (translatioFile) {
    var _a;
    var directory = (_a = translatioFile.directory) !== null && _a !== void 0 ? _a : '';
    var file = translatioFile.filename + "." + translatioFile.extension;
    var filePattern = path_1.default.join(model_1.CURRENT_WORK_DIR, directory, file);
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
var getProjectConfig = function (configFilePath) {
    var data = fs_1.default.readFileSync(configFilePath, 'utf8');
    return JSON.parse(data);
};
exports.getProjectConfig = getProjectConfig;
var getUploadTasksFromTranslationFiles = function (translationFiles, taskCallback) {
    return (0, exports._getTasksFromTranslationFileData)({
        title: 'Upload translation file',
        subtitle: 'Upload data of',
        translationFiles: translationFiles,
        fileInfoCallback: exports.getUploadFileInfosOfTranslationFile,
        taskCallback: taskCallback,
    });
};
exports.getUploadTasksFromTranslationFiles = getUploadTasksFromTranslationFiles;
var getDownloadTasksFromTranslationFiles = function (translationFiles, taskCallback) {
    return (0, exports._getTasksFromTranslationFileData)({
        title: 'Download translation file',
        subtitle: 'Download data of',
        translationFiles: translationFiles,
        fileInfoCallback: exports.getDownloadFileInfosOfTranslationFile,
        taskCallback: taskCallback,
    });
};
exports.getDownloadTasksFromTranslationFiles = getDownloadTasksFromTranslationFiles;
var _getTasksFromTranslationFileData = function (data) {
    var taskList = [];
    data.translationFiles.forEach(function (translationFile) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            taskList.push({
                title: data.title + ": " + translationFile.name,
                task: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var subTaskList, fileInfos;
                    return __generator(this, function (_a) {
                        subTaskList = [];
                        fileInfos = data.fileInfoCallback(translationFile);
                        fileInfos.forEach(function (fileInfo) {
                            subTaskList.push({
                                title: data.subtitle + ": " + fileInfo.path,
                                task: function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, data.taskCallback(translationFile, fileInfo)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }
                            });
                        });
                        return [2 /*return*/, new listr_1.default(subTaskList)];
                    });
                }); },
            });
            return [2 /*return*/];
        });
    }); });
    return taskList;
};
exports._getTasksFromTranslationFileData = _getTasksFromTranslationFileData;
var runTasks = function (taskList) { return __awaiter(void 0, void 0, void 0, function () {
    var tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tasks = new listr_1.default(taskList);
                return [4 /*yield*/, tasks.run().catch(function (reason) {
                        console.log(reason);
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.runTasks = runTasks;
var saveProjectConfig = function (configFilePath, projectConfig) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        fs_1.default.writeFileSync(configFilePath, JSON.stringify(projectConfig, null, 4));
        return [2 /*return*/];
    });
}); };
exports.saveProjectConfig = saveProjectConfig;
var logHeader = function (title) {
    console.log(chalk_1.default.hex(model_1.GREEN_COLOR).bold(title));
};
exports.logHeader = logHeader;
var logError = function (msg) {
    console.error(chalk_1.default.red.bold(msg));
};
exports.logError = logError;
//# sourceMappingURL=util.js.map