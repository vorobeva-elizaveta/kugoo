import { Router } from 'express'
import userRouter from 'routes/userRouter.js'
import productRouter from './productRouter.js'
import labelRouter from './labelRouter.js'
const router = new Router()

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/label', labelRouter)

export default router
