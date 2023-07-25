import { Router } from 'express'
import productRouter from './productRouter.js'
import labelRouter from './labelRouter.js'
const router = new Router()

router.use('/product', productRouter)
router.use('/label', labelRouter)

export default router
