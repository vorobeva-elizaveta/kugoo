import { Router } from 'express'
import ProductController from '../controllers/productController.js'
import roleMiddleware from '../middlewares/role-middleware.js'
const router = new Router()

router.get('/all', ProductController.getAllProducts)
router.post('/create', roleMiddleware('admin'), ProductController.createProduct)
router.post('/update', roleMiddleware('admin'), ProductController.updateProductById)

export default router
