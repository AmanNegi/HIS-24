"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farm = exports.validateFarm = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = __importDefault(require("joi"));
var farmSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    size: { type: Number, required: true },
    images: [{ type: String, default: [] }],
    state: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
            validate: {
                validator: function (coords) {
                    return coords.length === 2;
                },
                message: 'Coordinates must be an array of two numbers [longitude, latitude].',
            },
        },
    },
    waterSource: { type: String, required: true },
    crops: { type: [String], default: [] },
});
var validateFarm = function (farmData) {
    return joi_1.default.object({
        title: joi_1.default.string().required(),
        size: joi_1.default.number().required(),
        state: joi_1.default.string().required(),
        location: joi_1.default.object({
            type: joi_1.default.string().valid('Point').required(),
            coordinates: joi_1.default.array().items(joi_1.default.number()).length(2).required(),
        }),
        waterSource: joi_1.default.string().required(),
        crops: joi_1.default.array().items(joi_1.default.string()).optional(),
        images: joi_1.default.array().items(joi_1.default.string()).optional(),
    }).validate(farmData);
};
exports.validateFarm = validateFarm;
var Farm = (0, mongoose_1.model)('Farm', farmSchema);
exports.Farm = Farm;
Farm.schema.index({ location: '2dsphere' });
