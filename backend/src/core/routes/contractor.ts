import express from 'express'
import { sendErrorResponse, sendSuccessResponse } from '../../utils/response'
import { User } from '../../models/User'
import { Contract } from '../../models/Contract'

export const router = express.Router()

//get contractor by id

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

// update contractor by id

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

