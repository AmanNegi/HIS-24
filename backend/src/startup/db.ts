import mongoose from 'mongoose'
import logger from '../utils/logger'

const connectToDB = async () => {
  const dbUrl = process.env.DATABASE_URL ?? ''
  try {
    const res = await mongoose.connect(dbUrl)
    if (res) {
      logger.info('Connected to Database...')
      return res
    }

    return undefined
  } catch (err) {
    logger.error('Error connecting to Database...', err)
    return err
  }
}

export default connectToDB
