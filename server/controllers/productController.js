import { PrismaClient } from '@prisma/client'
import productModel from '../models/product-model.js'
class ProductController {
  async getAllProducts(req, res) {
    const result = await productModel
      .findMany({
        include: {
          labels: true
        }
      })
      .then((data) => data)
    res.send(result)
  }

  async createProduct(req, res) {
    let { cost, speed, work_time, horsepower, label_id } = req.body
    let label = await client.label.findFirst({ where: { id: label_id } })
    if (label != null) {
      let result = await productModel.create({
        data: {
          cost,
          work_time,
          speed,
          horsepower,
          labels: { connect: [{ id: label_id }] }
        },
        include: {
          labels: true
        }
      })
      return res.send(result)
    }
    return res.status(500).json({ message: 'Лейбл не найден' })
  }

  async updateProductById(req, res) {
    let { id, cost, speed, work_time, horsepower, label_id } = req.body
    let result = await productModel.update({
      where: { id },
      data: { cost, speed, work_time, horsepower, labels: { connect: [{ id: label_id }] } }
    })
    res.send(result)
  }
}
export default new ProductController()
