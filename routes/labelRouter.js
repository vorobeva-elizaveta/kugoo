import { Router } from 'express'
import LabelController from '../controllers/labelController.js'
const router = new Router()

router.get('/all', LabelController.getAllLables)
router.post('/create', LabelController.createLabel)

export default router
