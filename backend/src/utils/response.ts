import type { Response } from 'express'

function sendErrorResponse(res: Response, message: string) {
  return res.status(404).json({
    success: false,
    message,
  })
}

function sendSuccessResponse(res: Response, message: string, data?: object) {
  return res.status(200).json({
    success: true,
    message: message,
    data: data,
  })
}

export { sendErrorResponse, sendSuccessResponse }
