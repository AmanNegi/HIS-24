import type { Express } from 'express'
import { router as AuthRouter } from './routes/auth'
import { router as FarmerRouter } from './routes/farmer'
import { router as ContractorRouter } from './routes/contractor'
import { router as ContractRouter } from './routes/contract'
import { router as SearchRouter } from './routes/search'

export default function registerRoutes(app: Express) {
  app.use('/api/auth', AuthRouter)
  app.use('/api/farmer', FarmerRouter)
  app.use('/api/contractor', ContractorRouter)
  app.use('/api/contract', ContractRouter)
  app.use('/api/search', SearchRouter)
}
