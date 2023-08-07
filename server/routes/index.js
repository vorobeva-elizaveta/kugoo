import { Router } from 'express'
import userRouter from './userRouter.js'
import productRouter from './productRouter.js'
import labelRouter from './labelRouter.js'
import ApiError from './../errors/ApiError.js'
const router = new Router()

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/label', labelRouter)
router.use((res, req, next) => {
  next(ApiError.methodNotFound())
})

export default router
