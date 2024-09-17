"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.validateSignup = exports.validateLogin = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = __importDefault(require("joi"));
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    aadhar: { type: String, required: true },
    role: { type: String, enum: ['farmer', 'contractor', 'officer'], required: true },
    address: {
        state: { type: String },
    },
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
});
var validateLogin = function (userData) {
    return joi_1.default.object({
        phone: joi_1.default.string().required().min(10).max(10),
        password: joi_1.default.string().required(),
    }).validate(userData);
};
exports.validateLogin = validateLogin;
var validateSignup = function (userData) {
    return joi_1.default.object({
        name: joi_1.default.string().required(),
        email: joi_1.default.string().email(),
        password: joi_1.default.string().required(),
        phone: joi_1.default.string().required(),
        aadhar: joi_1.default.string().required(),
        role: joi_1.default.string().valid('farmer', 'contractor', 'officer').required(),
        address: joi_1.default.object({
            state: joi_1.default.string().required(),
        }),
        location: joi_1.default.object({
            type: joi_1.default.string().valid('Point').required(),
            coordinates: joi_1.default.array().items(joi_1.default.number()).length(2).required(),
        }),
    }).validate(userData);
};
exports.validateSignup = validateSignup;
var User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
