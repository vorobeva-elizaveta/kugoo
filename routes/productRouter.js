import { Router } from 'express'
import ProductController from '../controllers/productController.js'
const router = new Router()

router.get('/all', ProductController.getAllProducts)
router.post('/create', ProductController.createProduct)
router.post('/update', ProductController.updateProductById)

export default router
