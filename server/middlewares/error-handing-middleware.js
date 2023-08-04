import { Prisma } from '@prisma/client'
import ApiError from '../errors/ApiError.js'

export default function (err, req, res, next) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(400).json({ message: err?.meta?.cause || 'Непредвиденная ошибка' })
  }

  if (err instanceof ApiError) {
    return res.status(err.status).json({ ...err })
  }
  res.status(500).json({ message: 'Непредвиденная ошибка', ...err })
}
