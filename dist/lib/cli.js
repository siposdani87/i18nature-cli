"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var axios_1 = __importDefault(require("axios"));
var fs_1 = __importDefault(require("fs"));
var inquirer_1 = __importDefault(require("inquirer"));
var path_1 = __importDefault(require("path"));
var yargs_1 = __importDefault(require("yargs"));
var helpers_1 = require("yargs/helpers");
var config_1 = require("./config");
var download_1 = __importDefault(require("./download"));
var init_1 = __importDefault(require("./init"));
var model_1 = require("./model");
var upload_1 = __importDefault(require("./upload"));
var actionFromString = function (action) {
    switch (action) {
        case 'init':
            return model_1.Action.INIT;
        case 'upload':
            return model_1.Action.UPLOAD;
        case 'download':
            return model_1.Action.DOWNLOAD;
        default:
            return model_1.Action.NONE;
    }
};
var parseArgumentsIntoOptions = function (rawArgs) { return __awaiter(void 0, void 0, void 0, function () {
    var argv, configFileName, configFilePath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, yargs_1.default)((0, helpers_1.hideBin)(rawArgs))
                    .epilogue('for more information, find our website at https://i18nature.com')
                    .usage('Command-line tool of I18Nature localization tool.\n\nUsage: $0 <cmd> [args]')
                    .command('init [project_api_key]', 'Create .i18naturerc.json file.', function (yargs) {
                    return yargs
                        .positional('project_api_key', {
                        describe: 'project to bind on',
                        default: config_1.DEFAULT_API_KEY,
                    });
                }, function (argv) {
                    if (argv.verbose) {
                        console.info("create config file of: " + argv.project_api_key);
                    }
                })
                    .command('upload', 'Upload translation files.', function (yargs) {
                    return yargs;
                }, function (argv) {
                    if (argv.verbose) {
                        console.info("upload translation file");
                    }
                })
                    .command('download', 'Download translation files.', function (yargs) {
                    return yargs;
                }, function (argv) {
                    if (argv.verbose) {
                        console.info("download translation file");
                    }
                }).options({
                    'help': {
                        type: 'boolean',
                        alias: 'h',
                        description: 'Show help',
                        global: false,
                    },
                    'verbose': {
                        type: 'boolean',
                        alias: 'v',
                        description: 'Run with verbose logging',
                        global: true,
                    },
                    'yes': {
                        type: 'boolean',
                        alias: 'y',
                        description: 'Skip prompts',
                        global: true,
                    },
                    'debug': {
                        type: 'boolean',
                        description: 'Debug mode',
                        global: true,
                    },
                    'overwriteTranslations': {
                        type: 'boolean',
                        description: 'Overwrite translation file on upload',
                        global: true,
                    },
                }).argv];
            case 1:
                argv = _a.sent();
                configFileName = argv.debug ? config_1.DEBUG_FILENAME : config_1.FILENAME;
                configFilePath = path_1.default.join(config_1.CURRENT_WORK_DIR, configFileName);
                return [2 /*return*/, {
                        projectApiKey: argv.project_api_key,
                        skipPrompts: argv.yes || false,
                        verbose: argv.verbose || false,
                        debug: argv.debug || false,
                        overwriteConfigFile: false,
                        overwriteTranslations: argv.overwriteTranslations || false,
                        configFileName: configFileName,
                        configFilePath: configFilePath,
                        directory: '',
                        existsProjectConfigFile: fs_1.default.existsSync(configFilePath),
                        action: actionFromString(argv._[0]),
                    }];
        }
    });
}); };
var promptForMissingOptions = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var questions, isDefaultApiKey, projectConfig, answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (options.skipPrompts) {
                    return [2 /*return*/, options];
                }
                questions = [];
                isDefaultApiKey = options.projectApiKey === config_1.DEFAULT_API_KEY;
                if (options.action === model_1.Action.INIT && options.existsProjectConfigFile) {
                    questions.push({
                        type: 'confirm',
                        name: 'overwriteConfigFile',
                        message: "Overwrite existing " + options.configFileName + " file?",
                        default: false,
                    });
                }
                if (options.action === model_1.Action.INIT) {
                    projectConfig = {
                        project_api_key: options.projectApiKey,
                    };
                    if (options.existsProjectConfigFile) {
                        projectConfig = JSON.parse(fs_1.default.readFileSync(options.configFilePath, 'utf8'));
                    }
                    questions.push({
                        type: 'input',
                        name: 'project_api_key',
                        message: 'Project API key?',
                        default: projectConfig.project_api_key,
                        when: function (answers) { return answers.overwriteConfigFile || isDefaultApiKey; },
                    });
                    questions.push({
                        type: 'input',
                        name: 'directory',
                        message: 'Relative path of translation files directory?',
                        default: 'example/locales',
                        when: function (answers) { return answers.overwriteConfigFile || !options.existsProjectConfigFile; },
                    });
                }
                return [4 /*yield*/, inquirer_1.default.prompt(questions)];
            case 1:
                answers = _a.sent();
                return [2 /*return*/, __assign(__assign({}, options), { projectApiKey: options.projectApiKey !== config_1.DEFAULT_API_KEY ? options.projectApiKey : answers.project_api_key, overwriteConfigFile: answers.overwriteConfigFile || !options.existsProjectConfigFile, directory: options.directory || answers.directory })];
        }
    });
}); };
var actionHandler = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                axios_1.default.defaults.baseURL = options.debug ? config_1.DEBUG_BASE_URL : config_1.BASE_URL;
                _a = options.action;
                switch (_a) {
                    case model_1.Action.INIT: return [3 /*break*/, 1];
                    case model_1.Action.UPLOAD: return [3 /*break*/, 3];
                    case model_1.Action.DOWNLOAD: return [3 /*break*/, 5];
                }
                return [3 /*break*/, 7];
            case 1: return [4 /*yield*/, (0, init_1.default)(options)];
            case 2: return [2 /*return*/, _b.sent()];
            case 3: return [4 /*yield*/, (0, upload_1.default)(options)];
            case 4: return [2 /*return*/, _b.sent()];
            case 5: return [4 /*yield*/, (0, download_1.default)(options)];
            case 6: return [2 /*return*/, _b.sent()];
            case 7: return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.default = (function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, parseArgumentsIntoOptions(args)];
            case 1:
                options = _a.sent();
                return [4 /*yield*/, promptForMissingOptions(options)];
            case 2:
                options = _a.sent();
                return [4 /*yield*/, actionHandler(options)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=cli.js.map