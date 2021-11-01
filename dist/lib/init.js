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
var util_1 = require("./util");
var _getProjectConfig = function (projectApiKey, translationFiles, version) {
    if (version === void 0) { version = 1; }
    var config = {
        version: version,
        project_api_key: projectApiKey,
        translation_files: translationFiles,
    };
    return config;
};
exports.default = (function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var taskList_1, taskList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, util_1.logHeader)('INIT');
                if (!!options.overwriteConfigFile) return [3 /*break*/, 2];
                taskList_1 = [
                    {
                        title: "Create config file: " + options.configFilePath,
                        task: function () { return Promise.reject(new Error('Config file overwrite is not allowed!')); },
                    },
                ];
                return [4 /*yield*/, (0, util_1.runTasks)(taskList_1)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                taskList = [
                    {
                        title: "Create config file: " + options.configFilePath,
                        task: function () { return __awaiter(void 0, void 0, void 0, function () {
                            var response, translationFiles, projectConfig, error_1;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 3, , 4]);
                                        return [4 /*yield*/, axios_1.default.get("/api/projects/init", {
                                                params: {
                                                    api_key: options.projectApiKey,
                                                },
                                            })];
                                    case 1:
                                        response = _b.sent();
                                        translationFiles = response.data.translation_files.map(function (translationFile) {
                                            return __assign(__assign({}, translationFile), { directory: options.directory });
                                        });
                                        projectConfig = _getProjectConfig(options.projectApiKey, translationFiles);
                                        return [4 /*yield*/, (0, util_1.saveProjectConfig)(options.configFilePath, projectConfig)];
                                    case 2:
                                        _b.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _b.sent();
                                        return [2 /*return*/, Promise.reject(new Error((_a = error_1.response.data.message) !== null && _a !== void 0 ? _a : error_1.message))];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }
                    },
                ];
                return [4 /*yield*/, (0, util_1.runTasks)(taskList)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=init.js.map