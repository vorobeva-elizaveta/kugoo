import { PrismaClient } from '@prisma/client'
class UserController {
  async getUserInfo(req, res) {
    const client = new PrismaClient()
    let { id } = req.body
    let user = await client.user.findFirst({
      where: {
        id
      }
    })
  }
}

export default UserController
