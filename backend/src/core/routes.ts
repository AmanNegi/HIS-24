import type { Express } from 'express'
import { router as AuthRouter } from './routes/auth'

export default function registerRoutes(app: Express) {
  app.use('/api/auth', AuthRouter)
}
