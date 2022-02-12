"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logHeader = void 0;
var chalk_1 = __importDefault(require("chalk"));
var config_1 = require("./config");
var logHeader = function (title) {
    console.log(chalk_1.default.hex(config_1.GREEN_COLOR).bold(title));
};
exports.logHeader = logHeader;
var logError = function (msg) {
    console.error(chalk_1.default.red.bold(msg));
};
exports.logError = logError;
//# sourceMappingURL=log.js.map