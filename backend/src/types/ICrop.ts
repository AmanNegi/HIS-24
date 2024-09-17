import { Document, Schema } from 'mongoose'

export interface ICrop extends Document {
  farmer: Schema.Types.ObjectId
  name: string
  quantity: number
  price: number
  season: string
  timeToHarvest: number
}
