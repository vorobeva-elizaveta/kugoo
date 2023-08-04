import LabelModel from '../models/label-model.js'
import LabelDto from './../dtos/label-dto.js'
import ApiError from './../errors/ApiError.js'

class LabelService {
  async getAllLabels() {
    let result = await LabelModel.findMany().then((data) => data)
    return result
  }

  async createLabel(requestBody) {
    const labelDto = new LabelDto(requestBody)
    console.log(requestBody)
    let label = await LabelModel.findFirst({ where: { title: labelDto.title } })
    if (!label) {
      let result = await LabelModel.create({
        data: { ...labelDto }
      })
      return result
    }
    throw ApiError.badRequest('Лейбл с таким названием уже существует')
  }

  async deleteLabelById({ id }) {
    if (!id) {
      throw ApiError.badRequest('Вы не передали id лейбла')
    }
    const result = await LabelModel.delete({ where: { id } })
    return result
  }

  async findLabelById({ id }) {
    if (!id) {
      throw ApiError.badRequest('Вы не передали id лейбла')
    }
    const result = await LabelModel.findFirst({
      where: { id }
    })
    return result
  }
}

export default new LabelService()
