import { Schema, model } from 'mongoose'
import { IFarm } from '../types/IFarm'
import Joi from 'joi'

const farmSchema = new Schema<IFarm>({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  size: { type: Number, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
  waterSource: { type: String, required: true },
  crops: [{ type: Schema.Types.ObjectId, ref: 'Crop' }],
})

const validateFarm = (farmData: any) => {
  return Joi.object({
    owner: Joi.string().required(),
    size: Joi.number().required(),
    location: Joi.object({
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
    }),
    waterSource: Joi.string().required(),
    crops: Joi.array().items(Joi.string()).required(),
  }).validate(farmData)
}

const Farm = model<IFarm>('Farm', farmSchema)

export { validateFarm, Farm }
