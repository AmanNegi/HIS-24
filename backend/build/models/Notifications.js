"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = exports.validateNotifications = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = __importDefault(require("joi"));
var notificationsSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    notifications: [
        {
            viewed: { type: Boolean, default: false },
            message: { type: String, required: true },
            addedAt: { type: Date, default: Date.now },
        },
    ],
});
var validateNotifications = function (notificationsData) {
    return joi_1.default.object({
        userId: joi_1.default.string().required(),
        notifications: joi_1.default.array().items(joi_1.default.object({
            viewed: joi_1.default.boolean().default(false),
            message: joi_1.default.string().required(),
            addedAt: joi_1.default.date().default(Date.now),
        })),
    }).validate(notificationsData);
};
exports.validateNotifications = validateNotifications;
var Notifications = (0, mongoose_1.model)('Notifications', notificationsSchema);
exports.Notifications = Notifications;
