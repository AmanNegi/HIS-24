import { Document, Schema } from 'mongoose'

export interface IFarm extends Document {
  owner: Schema.Types.ObjectId
  size: number // in acer
  location: {
    latitude: number
    longitude: number
    city: string
    state: string
  }
  waterSource: string
  crops: Schema.Types.ObjectId[]
}
