import { Router } from 'express'
import UserController from '../controllers/userController.js'
const router = new Router()

router.get('/info', UserController.getUserInfo)
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)

export default router
