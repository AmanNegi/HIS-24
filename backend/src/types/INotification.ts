import { Document, Schema } from 'mongoose'
interface INotification extends Document {
  viewed: boolean
  message: string
  addedAt: Date
}

// Define an interface for notifications schema
export interface INotifications extends Document {
  userId: Schema.Types.ObjectId
  notifications: INotification[]
}

