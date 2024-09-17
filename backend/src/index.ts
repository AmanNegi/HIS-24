import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import logger from './utils/logger'
import connectToDB from './startup/db'
import attachLogger from './middleware/mLogger'
import setUpCORS from './middleware/mCors'
import registerRoutes from './core/routes'

const app = express()

const env = process.env.NODE_ENV || 'example'
dotenv.config({ path: `.env.${env}` })

app.use(setUpCORS)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(attachLogger)

registerRoutes(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  logger.info(`Listening on port ${PORT}`)
  await connectToDB()
})
