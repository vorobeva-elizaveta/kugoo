import { Router } from 'express'
import LabelController from '../controllers/labelController.js'
const router = new Router()

router.get('/all', LabelController.getAllLabels)
router.post('/create', LabelController.createLabel)
router.post('/find', LabelController.findLabelById)
router.post('/delete', LabelController.deleteLabelById)

export default router
