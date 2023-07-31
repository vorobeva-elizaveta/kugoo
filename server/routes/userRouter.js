import { Router } from 'express'
import UserController from '../controllers/userController.js'
const router = new Router()
import AuthMiddleware from '../middlewares/auth-middleware.js'
import roleMiddleware from '../middlewares/role-middleware.js'

router.post('/info', AuthMiddleware, UserController.getUserInfo)
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/logout', UserController.logout)
router.post('/refresh-auth', AuthMiddleware, UserController.refreshAuthorization)

export default router
