import { Schema, model } from 'mongoose'
import { IContract } from '../types/IContract'
import Joi from 'joi'

const contractSchema = new Schema<IContract>({
  farmer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  contractor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  crop: { type: String, required: true },
  area: { type: Number, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  contractStartDate: { type: Date, required: true },
  contractEndDate: { type: Date, required: true },
  contractPDF: { type: String, required: true },
  paymentStatus: { type: String, enum: ['pending', 'partially paid', 'paid'], required: true },
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
})

const validateContract = (contractData: any) => {
  return Joi.object({
    farmer: Joi.string().required(),
    contractor: Joi.string().required(),
    crop: Joi.string().required(),
    area: Joi.number().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    contractStartDate: Joi.date().required(),
    contractEndDate: Joi.date().required(),
    contractPDF: Joi.string().required(),
    paymentStatus: Joi.string().valid('Pending', 'Partially Paid', 'Paid').required(),
    paymentMilestones: Joi.object({
      milestone1: Joi.object({
        amount: Joi.number().required(),
        paid: Joi.boolean().required(),
      }),
      milestone2: Joi.object({
        amount: Joi.number().required(),
        paid: Joi.boolean().required(),
      }),
      milestone3: Joi.object({
        amount: Joi.number().required(),
        paid: Joi.boolean().required(),
      }),
    }).required(),
    cropInsurance: Joi.boolean().required(),
    signedDate: Joi.date().required(),
  }).validate(contractData)
}

const Contract = model<IContract>('Contract', contractSchema)

export { Contract, validateContract }
