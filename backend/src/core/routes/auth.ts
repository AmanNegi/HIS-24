import express from 'express'
import { sendErrorResponse, sendSuccessResponse } from '../../utils/response'
import { User, validateLogin, validateSignup } from '../../models/User'
import logger from '../../utils/logger'
export const router = express.Router()

router.post('/login', async (req, res) => {
  const { error } = validateLogin(req.body)
  if (error) return sendErrorResponse(res, error.details[0].message)

  const user = await User.findOne({ phone: req.body.phone })
  if (!user) return sendErrorResponse(res, 'Invalid email or password')

  if (user.password !== req.body.password)
    return sendErrorResponse(res, 'Invalid email or password')

  sendSuccessResponse(res, 'Login Success', user)
})

router.post('/signup', async (req, res) => {
  try{
  const { error } = validateSignup(req.body)
  if (error) return sendErrorResponse(res, error.details[0].message)

  const user = await User.findOne({ phone: req.body.phone })
  if (user) return sendErrorResponse(res, 'User with the Phone number already Exists')

  const newUser = new User(req.body)
  const savedUser = await newUser.save()
  return sendSuccessResponse(res, 'Signup Success', savedUser)
}catch(err){
  logger.info("Error occurred", err);
}
})
export default router
