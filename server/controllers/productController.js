import { PrismaClient } from '@prisma/client'
class ProductController {
  async getAllProducts(req, res) {
    const client = new PrismaClient()
    const result = await client.product.findMany().then((data) => data)
    res.send(result)
  }

  async createProduct(req, res) {
    const client = new PrismaClient()
    let { cost, speed, work_time, horsepower } = req.body
    let result = await client.product.create({
      data: {
        cost,
        speed,
        work_time,
        horsepower
      }
    })
    res.send(result)
  }

  async updateProductById(req, res) {
    const client = new PrismaClient()
    let { id, cost, speed, work_time, horsepower } = req.body
    let result = await client.product.update({
      where: { id },
      data: { cost, speed, work_time, horsepower }
    })
    res.send(result)
  }
}
export default new ProductController()
