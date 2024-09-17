import { Schema, model } from 'mongoose';
import { ICrop } from '../types/ICrop';
import Joi from 'joi';

const cropSchema = new Schema<ICrop>({
  farmer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  season: { type: String, enum: ['Rabi', 'Kharif', 'Zaid'], required: true },   // season can be either of 3
  timeToHarvest: { type: Number, required: true },
});

const validateCrop = (cropData: any) => {
  return Joi.object({
    farmer: Joi.string().required(),
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    season: Joi.string().valid('Rabi', 'Kharif', 'Zaid').required(),
    timeToHarvest: Joi.number().required(),
  }).validate(cropData);
};

const Crop = model<ICrop>('Crop', cropSchema);

export { Crop, validateCrop };