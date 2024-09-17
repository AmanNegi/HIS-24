import { Schema, model } from 'mongoose'
import { IUser } from '../types/IUser'
import Joi from 'joi'

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  aadhar: { type: String, required: true },
  role: { type: String, enum: ['farmer', 'contractor', 'officer'], required: true },
  address: {
    state: { type: String }
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
        validator: function (coords: number[]) {
          return coords.length === 2
        },
        message: 'Coordinates must be an array of two numbers [longitude, latitude].',
      },
    },
  },
})

const validateLogin = (userData: any) => {
  return Joi.object({
    phone: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(userData)
}

const validateSignup = (userData: any) => {
  return Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().optional(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    aadhar: Joi.string().required(),
    role: Joi.string().valid('farmer', 'contractor', 'officer').required(),
    address: Joi.object({
      state: Joi.string().required()
    }),
    location: Joi.object({
      type: Joi.string().valid('Point').required(),
      coordinates: Joi.array().items(Joi.number()).length(2).required(),
    }),
  }).validate(userData)
}

const User = model<IUser>('User', userSchema)

export { validateLogin, validateSignup, User }
