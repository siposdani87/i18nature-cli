"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GREEN_COLOR = exports.BASE_URL = exports.DEBUG_BASE_URL = exports.CURRENT_WORK_DIR = exports.DEBUG_FILENAME = exports.FILENAME = exports.DEFAULT_API_KEY = exports.Action = void 0;
var Action;
(function (Action) {
    Action[Action["NONE"] = 0] = "NONE";
    Action[Action["INIT"] = 1] = "INIT";
    Action[Action["UPLOAD"] = 2] = "UPLOAD";
    Action[Action["DOWNLOAD"] = 3] = "DOWNLOAD";
})(Action = exports.Action || (exports.Action = {}));
exports.DEFAULT_API_KEY = 'API_KEY';
exports.FILENAME = '.i18naturerc.json';
exports.DEBUG_FILENAME = '.i18naturerc-debug.json';
exports.CURRENT_WORK_DIR = process.cwd();
exports.DEBUG_BASE_URL = 'http://localhost';
exports.BASE_URL = 'https://app.i18nature.com';
exports.GREEN_COLOR = '#0A4414';
//# sourceMappingURL=model.js.map