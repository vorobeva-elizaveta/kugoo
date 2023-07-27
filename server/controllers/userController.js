import userService from '../service/user-service.js'
import userModel from '../models/user-model.js'
class UserController {
  async getUserInfo(req, res) {
    let { id } = req.body
    let user = await userModel.findFirst({
      where: {
        id
      }
    })
  }

  async registration(req, res, next) {
    try {
      let { email, password, role } = req.body
      let user = await userService.registration(email, password, role).then((data) => data)
      res.send(user)
    } catch (error) {
      // res.status(error.status).json(error)
      next(error)
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const result = await userService.login(email, password).then((data) => data)
      res.send(result)
    } catch (error) {
      next(error)
    }
  }
}

export default new UserController()
