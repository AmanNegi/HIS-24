"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var morgan_1 = __importDefault(require("morgan"));
var logger_1 = __importDefault(require("../utils/logger"));
var morganFormat = ':method :url :status :response-time ms';
var attachLogger = (0, morgan_1.default)(morganFormat, {
    stream: {
        write: function (message) {
            var logObject = {
                method: message.split(' ')[0],
                url: message.split(' ')[1],
                status: message.split(' ')[2],
                responseTime: message.split(' ')[3],
            };
            logger_1.default.info(JSON.stringify(logObject));
        },
    },
});
exports.default = attachLogger;
