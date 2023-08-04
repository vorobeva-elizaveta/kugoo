import ProductModel from '../models/product-model.js'
import ApiError from './../errors/ApiError.js'
import ProductDto from './../dtos/product-dto.js'

class ProductService {
  async getAllProducts() {
    const result = await ProductModel.findMany({
      include: {
        labels: true
      }
    })
    return result
  }

  async createProduct(requestBody) {
    const productDto = new ProductDto(requestBody),
      { labelsIds } = requestBody
    const result = await ProductModel.create({
      data: {
        ...productDto,
        labels: labelsIds != null ? { connect: [...labelsIds.map((el) => ({ id: el }))] } : {}
      },
      include: { labels: true }
    }).catch((err) => {
      throw err
    })

    return result
  }

  async updateProduct(requestBody) {
    const productDto = new ProductDto(requestBody),
      { id, labels } = requestBody
    const result = await ProductModel.update({
      where: { id },
      data: {
        ...productDto,
        labels: labels != null ? { connect: [{ id: labels }] } : {}
      }
    })
    return result
  }

  async deleteProduct({ id }) {
    const result = await ProductModel.delete({ where: { id } })
    return result
  }

  async deleteManyProducts({ ids }) {
    let result = []
    for (let id of ids) {
      result.push(await ProductModel.deleteMany({ where: { id } }))
    }
    return result
  }
}

export default new ProductService()
