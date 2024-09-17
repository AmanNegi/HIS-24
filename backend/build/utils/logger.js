"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp, json = winston_1.format.json, colorize = winston_1.format.colorize;
var consoleLogFormat = winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf(function (_a) {
    var level = _a.level, message = _a.message, timestamp = _a.timestamp;
    return "[".concat(timestamp, "] ").concat(level, ": ").concat(message);
}));
var logger = (0, winston_1.createLogger)({
    level: 'debug',
    format: combine(colorize(), timestamp(), json()),
    transports: [
        new winston_1.transports.Console({
            format: consoleLogFormat,
        }),
        new winston_1.transports.File({ filename: 'app.log' }),
    ],
});
exports.default = logger;
