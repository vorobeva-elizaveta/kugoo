import { Prisma } from '@prisma/client'
import ApiError from '../errors/ApiError.js'
import logger from '../logging.js'

export default function (err, req, res, next) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    logger.error({ request: req.body || req.query, ...err }, "BD's error")
    return res.status(400).json({ message: err?.meta?.cause || 'Непредвиденная ошибка' })
  }

  if (err instanceof ApiError) {
    logger.error({ request: req.body || req.query, ...err }, 'Ошибка!')
    return res.status(err.status).json({ ...err })
  }
  logger.error({ request: req.body || req.query }, 'Unexpected error')
  res.status(500).json({ message: 'Непредвиденная ошибка', ...err })
}
