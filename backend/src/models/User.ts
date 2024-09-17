import { Schema, model } from 'mongoose'
import { IUser } from '../types/IUser'
import Joi from 'joi'

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  aadhar: { type: String, required: true },
  role: { type: String, enum: ['Farmer', 'Contractor'], required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
  },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
})

const validateLogin = (userData: any) => {
  return Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate(userData)
}

const validateSignup = (userData: any) => {
  return Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    aadhar: Joi.string().required(),
    role: Joi.string().valid('Farmer', 'Contractor').required(),
    address: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
    }),
    location: Joi.object({
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    }),
  }).validate(userData)
}

const User = model<IUser>('User', userSchema)

export { validateLogin, validateSignup, User }
