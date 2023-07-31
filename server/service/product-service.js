import ProductModel from '../models/product-model.js'
import ApiError from './../errors/ApiError.js'

class ProductService {
  async createProduct(cost, work_time, speed, horsepower, labels) {
    // let label = await LabelModel.findFirst({ where: { id: label_id } })
    let result = await ProductModel.create({
      data: {
        cost,
        work_time,
        speed,
        horsepower,
        labels: { connect: [...labels.map((el) => ({ id: el }))] }
      },
      include: {
        labels: true
      }
    }).catch((err) => {
      return ApiError.badRequest(err?.meta?.cause || 'Произошла ошибка при создании продукта')
    })

    return result
  }
}

export default new ProductService()
