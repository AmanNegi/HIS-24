import { Document, Schema } from 'mongoose'

export interface IFarm extends Document {
  owner: Schema.Types.ObjectId
  title: string
  images: string[]
  size: number // in acer
  location: {
    type: 'Point'
    coordinates: number[] // [longitude, latitude]
  }
  state: string
  waterSource: string
  crops: string[]
}
