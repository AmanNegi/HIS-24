import { Document, Schema } from 'mongoose'

export interface IFarm extends Document {
  owner: Schema.Types.ObjectId
  size: number // in acer
  location: {
    type: 'Point'
    coordinates: [number, number] // [longitude, latitude]
  }
  city: string
  state: string

  waterSource: string
  crops: [number]
}
