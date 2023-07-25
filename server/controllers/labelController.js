import { PrismaClient } from '@prisma/client'
import ApiError from './../errors/ApiError.js'

class LabelController {
  async getAllLables(req, res) {
    const client = new PrismaClient()
    let result = await client.label.findMany().then((data) => data)
    res.send(result)
  }
  async createLabel(req, res, next) {
    const client = new PrismaClient()
    let { title } = req.body
    let lable = await client.label.findFirst({ where: { title } })
    if (!lable) {
      let result = await client.label.create({
        data: { title }
      })
      return res.send(result)
    }

    return next(ApiError.badRequest('Такой лейбл уже существует!'))
  }
}

export default new LabelController()
