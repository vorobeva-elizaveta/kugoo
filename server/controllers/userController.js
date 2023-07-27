import userService from '../service/user-service.js'
class UserController {
  async getUserInfo(req, res, next) {
    try {
      let { userId } = req.body
      let user = await userService.getUserData(userId)
      res.send(user)
    } catch (error) {
      next(error)
    }
  }

  async registration(req, res, next) {
    try {
      let { email, password, role } = req.body
      let user = await userService.registration(email, password, role).then((data) => data)
      res.send(user)
    } catch (error) {
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
