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

    return res.status(500).json({ message: 'Лейбл уже создан' })
  }

  async findLabelById(req, res, next) {
    const client = new PrismaClient()
    let { id } = req.body
    let result = await client.label.findFirst({
      where: { id }
    })
    if (result != null) return res.send(result)
    return res.status(404).json({ message: 'Лейбл не найден' })
  }
  async findLabelByName(req, res, next) {
    const client = new PrismaClient()
    let { title } = req.body
    let result = await client.label.findFirst({
      where: { title }
    })
    if (result != null) return res.send(result)
    return res.status(404).json({ message: 'Лейбл не найден' })
  }
}

export default new LabelController()
