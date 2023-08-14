import { Router } from 'express'
import ProductController from '../controllers/productController.js'
import roleMiddleware from '../middlewares/role-middleware.js'
import authMiddleware from '../middlewares/auth-middleware.js'

const router = new Router()

router.get('/all', ProductController.getAllProducts)
router.post('/create', ProductController.createProduct)
router.post('/update', ProductController.updateProductById)
router.post('/delete', ProductController.deleteProductById)
router.post('/delete-many', ProductController.deleteManyProductsByIds)
router.post('/search', ProductController.searchProducts)

export default router
