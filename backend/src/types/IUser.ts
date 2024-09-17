import { Document } from 'mongoose'
export interface IUser extends Document {
  name: string
  email: string
  password: string
  phone: string
  aadhar: string
  role: 'Farmer' | 'Contractor'
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  location: {
    latitude: number
    longitude: number
  }
}
