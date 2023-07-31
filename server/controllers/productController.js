import LabelModel from '../models/label-model.js'
import ProductModel from '../models/product-model.js'
import ProductService from '../service/product-service.js'
class ProductController {
  async getAllProducts(req, res) {
    const result = await ProductModel.findMany({
      include: {
        labels: true
      }
    })
    console.log(result)
    res.send(result)
  }

  async createProduct(req, res, next) {
    try {
      let { cost, work_time, speed, horsepower, labels } = req.body
      const response = await ProductService.createProduct(
        cost,
        work_time,
        speed,
        horsepower,
        labels
      )
      return res.send(response)
    } catch (error) {
      console.log(error)
      next()
    }
  }

  async updateProductById(req, res) {
    let { id, cost, speed, work_time, horsepower, label_id } = req.body
    let result = await ProductModel.update({
      where: { id },
      data: { cost, speed, work_time, horsepower, labels: { connect: [{ id: label_id }] } }
    })
    res.send(result)
  }
}
export default new ProductController()
