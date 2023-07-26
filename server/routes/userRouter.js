import { Router } from 'express'
import UserController from '../controllers/userController.js'
const router = new Router()

router.get('/info', UserController)

export default router
