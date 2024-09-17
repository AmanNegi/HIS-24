import express from 'express'
import { sendErrorResponse, sendSuccessResponse } from '../../utils/response'
import { User } from '../../models/User'
import { Contract, validateContract } from '../../models/Contract'

export const router = express.Router()

//create contract between farmer and contractor

router.post('/create', async (req, res) => {
  try {
    const { error } = validateContract(req.body)
    if (error) return sendErrorResponse(res, error.details[0].message)
    const contract = new Contract(req.body)
    await contract.save()
    sendSuccessResponse(res, 'created Successfully', contract)
  } catch (error: any) {
    sendErrorResponse(res, error.message)
  }
})

// get all constracts of a farmer or contractor (id of Farmer or Contractor needed)

router.get('/byUser/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return sendErrorResponse(res, 'User not found')
    }
    const contracts = await Contract.find({ farmer: req.params.id })
    if (!contracts) await Contract.find({ contractor: req.params.id })
    return sendSuccessResponse(res, 'Contracts found', contracts)
  } catch (error: any) {
    return sendErrorResponse(res, error.message)
  }
})

// get contract by contract id

router.get('/details/:id', async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id)
    if (!contract) {
      return sendErrorResponse(res, 'contract not found')
    }
    return sendSuccessResponse(res, 'Contracts found', contract)
  } catch (error: any) {
    return sendErrorResponse(res, error.message)
  }
})

// update contract by contract id

router.put('/update/:id', async (req, res) => {
  try {
    const contract = await Contract.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!contract) {
      return sendErrorResponse(res, 'User not found')
    }
    return sendSuccessResponse(res, 'User updated successfully', contract)
  } catch (error: any) {
    return sendErrorResponse(res, error.message)
  }
})

