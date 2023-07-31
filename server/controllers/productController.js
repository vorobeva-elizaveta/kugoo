import LabelModel from '../models/label-model.js'
import ProductModel from '../models/product-model.js'
import ApiError from '../errors/ApiError.js'
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
      let { cost, speed, work_time, horsepower, label_id } = req.body
      let label = await LabelModel.findFirst({ where: { id: label_id } })
      console.log(label)
      let result = await ProductModel.create({
        data: {
          cost,
          work_time,
          speed,
          horsepower,
          labels: { connect: label != null ? [{ id: label_id }] : [] }
        },
        include: {
          labels: true
        }
      })
      return res.send(result)
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
