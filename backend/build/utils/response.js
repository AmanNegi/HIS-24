"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccessResponse = exports.sendErrorResponse = void 0;
function sendErrorResponse(res, message) {
    return res.status(404).json({
        success: false,
        message: message,
    });
}
exports.sendErrorResponse = sendErrorResponse;
function sendSuccessResponse(res, message, data) {
    return res.status(200).json({
        success: true,
        message: message,
        data: data,
    });
}
exports.sendSuccessResponse = sendSuccessResponse;
