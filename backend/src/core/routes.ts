import type { Express } from 'express'
import { router as AuthRouter } from './routes/auth'
import { router as FarmerRouter } from './routes/farmer'

export default function registerRoutes(app: Express) {
  app.use('/api/auth', AuthRouter)
  app.use('/api/farmer', FarmerRouter)
}
