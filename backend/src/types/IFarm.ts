import { Document, Schema } from 'mongoose'

export interface IFarm extends Document {
  title: string,
  owner: Schema.Types.ObjectId
  size: number // in acer
  images: string[],
  location: {
    type: 'Point'
    coordinates: number[] // [longitude, latitude]
  }
  state: string
  waterSource: string
  crops: string[]
}
