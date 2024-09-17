import express from 'express'
import { sendErrorResponse, sendSuccessResponse } from '../../utils/response'
import { User } from '../../models/User'
import { Farm, validateFarm } from '../../models/Farm'

export const router = express.Router()

// get Farmer (User by) id

router.get('/byId/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return sendErrorResponse(res, 'User not found')
    }
    return sendSuccessResponse(res, 'User found', user)
  } catch (error: any) {
    console.log(error.message)
    return sendErrorResponse(res, error.message)
  }
})

// update Farmer (User by) id

router.put('/update/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!user) {
      return sendErrorResponse(res, 'User not found')
    }
    return sendSuccessResponse(res, 'User updated successfully', user)
  } catch (error: any) {
    return sendErrorResponse(res, error.message)
  }
})

// get all Farmers

router.get('/getAll', async (req, res) => {
  try {
    const users = await User.find({ role: 'farmer' })
    return sendSuccessResponse(res, 'Users found', users)
  } catch (error: any) {
    return sendErrorResponse(res, error.message)
  }
})

//add farm

router.post('/addFarm/:id', async (req, res) => {
  try {
    const { error } = validateFarm(req.body)
    if (error) return sendErrorResponse(res, error.details[0].message)

    const user = await User.findById(req.params.id)
    if (!user) return sendErrorResponse(res, 'User not found')

    const farm = new Farm({ owner: req.params.id, ...req.body })
    const savedFarm = await farm.save()
    return sendSuccessResponse(res, 'Farm added successfully', savedFarm)
  } catch (error: any) {
    return sendErrorResponse(res, error.message)
  }
})

//get all farms of a farmer

router.get('/getAllFarms/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return sendErrorResponse(res, 'User not found')

    const farms = await Farm.find({ owner: req.params.id })
    return sendSuccessResponse(res, 'Farms found', farms)
  } catch (error: any) {
    return sendErrorResponse(res, error.message)
  }
})

router.get('/listAll', async (req, res) => {
  return sendSuccessResponse(res, 'Farms found', await Farm.find())
})
