import LabelService from '../service/label-service.js'
import labelService from '../service/label-service.js'

class LabelController {
  async getAllLabels(req, res, next) {
    try {
      let result = await LabelService.getAllLabels()
      res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async createLabel(req, res, next) {
    try {
      const result = await LabelService.createLabel(req.body)
      res.send(result)
    } catch (error) {
      console.log(error);
      next(error)
    }
  }

  async findLabelById(req, res, next) {
    try {
      const result = await labelService.findLabelById(req.body)
      res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async deleteLabelById(req, res, next) {
    try {
      res.send(await labelService.deleteLabelById(req.body))
    } catch (error) {
      next(error)
    }
  }
}

export default new LabelController()
