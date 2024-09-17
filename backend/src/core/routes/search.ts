import express from 'express'
import { sendErrorResponse, sendSuccessResponse } from '../../utils/response'
import { User } from '../../models/User'
import logger from '../../utils/logger'
import { Farm, validateFarm } from '../../models/Farm'
import { Contract } from '../../models/Contract'

export const router = express.Router()


//search by giving query in body (crops, location, state) POST
router.post('/', async (req, res) => {
  try {
    const { crops, location, state } = req.body
    const query: any = {}

    if (crops && crops.length > 0) {
      query.crops = { $in: crops }
    }

    if (location && location.length === 2) {
      query.location = {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: location,
          },
          $maxDistance: 100000, // 100 km in meters
        },
      }
    }

    if (state) {
      query.state = state
    }

    const farms = await Farm.find(query)
    return sendSuccessResponse(res, 'Farms found', farms)
  } catch (error: any) {
    logger.info(error.message)
    return sendErrorResponse(res, error.message)
  }
})

//get all farms
router.get('/getAll', async (req, res) => {
  try {
    const farms = await Farm.find()
    return sendSuccessResponse(res, 'Farms found', farms)
  } catch (error: any) {
    logger.info(error.message)
    return sendErrorResponse(res, error.message)
  }
})

// get farms by id

router.get('/byId/:id', async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id)
    if (!farm) {
      return sendErrorResponse(res, 'Farm not found')
    }
    return sendSuccessResponse(res, 'Farm found', farm)
  } catch (error: any) {
    logger.info(error.message)
    return sendErrorResponse(res, error.message)
  }
})
