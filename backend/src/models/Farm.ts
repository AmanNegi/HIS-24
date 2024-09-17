import { Schema, model } from 'mongoose'
import { IFarm } from '../types/IFarm'
import Joi from 'joi'

const farmSchema = new Schema<IFarm>({
  title: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  size: { type: Number, required: true },
  images: [{type: String, default: []}],
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
        validator: function (coords: number[]) {
          return coords.length === 2
        },
        message: 'Coordinates must be an array of two numbers [longitude, latitude].',
      },
    },
  },
  waterSource: { type: String, required: true },
  crops: { type: [String], default: [] },
})

const validateFarm = (farmData: any) => {
  return Joi.object({
    title: Joi.string().required(),
    size: Joi.number().required(),
    state: Joi.string().required(),
    location: Joi.object({
      type: Joi.string().valid('Point').required(),
      coordinates: Joi.array().items(Joi.number()).length(2).required(),
    }),
    waterSource: Joi.string().required(),
    crops: Joi.array().items(Joi.string()).optional(),
  }).validate(farmData)
}

const Farm = model<IFarm>('Farm', farmSchema)

export { validateFarm, Farm }
