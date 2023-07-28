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
      res.cookie('refreshToken', user.refresh, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true
      })
      res.send(user)
    } catch (error) {
      next(error)
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await userService.login(email, password).then((data) => data)
      res.cookie('refreshToken', user.refresh, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true
      })
      res.send(user)
    } catch (error) {
      next(error)
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const token = await userService.logout(refreshToken)
      res.cookie('refreshToken', user.refresh, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
        httpOnly: true
      })
      res.send(token)
    } catch (error) {
      next(error)
    }
  }

  async refreshAuthorization(req, res, next) {
    try {
      const { refreshToken } = req.cookies
      const result = await userService.refreshToken(refreshToken)
      res.send(result)
    } catch (error) {
      next(error)
    }
  }
}

export default new UserController()
