"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContract = exports.Contract = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = __importDefault(require("joi"));
var contractSchema = new mongoose_1.Schema({
    farmer: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    contractor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    crop: { type: String, required: true },
    area: { type: Number, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    contractStartDate: { type: Date, required: true },
    contractEndDate: { type: Date, required: true },
    // contractPDF: { type: String, required: true },
    paymentStatus: { type: String, enum: ['pending', 'partial', 'paid'], required: true },
    paymentMilestones: {
        milestone1: {
            amount: { type: Number, required: true },
            paid: { type: Boolean, required: true, default: false },
        },
        milestone2: {
            amount: { type: Number, required: true },
            paid: { type: Boolean, required: true, default: false },
        },
        milestone3: {
            amount: { type: Number, required: true },
            paid: { type: Boolean, required: true, default: false },
        },
    },
    cropInsurance: { type: Boolean, required: true },
    signedDate: { type: Date, required: true },
    status: { type: String, enum: ['negotiation', 'review', 'completed'] },
});
var validateContract = function (contractData) {
    return joi_1.default.object({
        farmer: joi_1.default.string().required(),
        contractor: joi_1.default.string().required(),
        crop: joi_1.default.string().required(),
        area: joi_1.default.number().required(),
        price: joi_1.default.number().required(),
        quantity: joi_1.default.number().required(),
        contractStartDate: joi_1.default.date().required(),
        contractEndDate: joi_1.default.date().required(),
        // contractPDF: Joi.string().required(),
        paymentStatus: joi_1.default.string().valid('pending', 'partial', 'paid').default("pending"),
        paymentMilestones: joi_1.default.object({
            milestone1: joi_1.default.object({
                amount: joi_1.default.number().required(),
                paid: joi_1.default.boolean().required(),
            }),
            milestone2: joi_1.default.object({
                amount: joi_1.default.number().required(),
                paid: joi_1.default.boolean().required(),
            }),
            milestone3: joi_1.default.object({
                amount: joi_1.default.number().required(),
                paid: joi_1.default.boolean().required(),
            }),
        }).required(),
        cropInsurance: joi_1.default.boolean().required(),
        signedDate: joi_1.default.date().required(),
        status: joi_1.default.string().default("negotiation")
    }).validate(contractData);
};
exports.validateContract = validateContract;
var Contract = (0, mongoose_1.model)('Contract', contractSchema);
exports.Contract = Contract;
