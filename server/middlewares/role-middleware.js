import tokenService from '../service/token-service.js'
import ApiError from './../errors/ApiError.js'

export default (role) => {
  return async (req, res, next) => {
    try {
      const authorizationHeader = req.headers.authorization
      if (!authorizationHeader) {
        return next({ ...ApiError.unauthorized() })
      }
      const accessToken = authorizationHeader.split(' ')[1]
      if (!accessToken) {
        return next({ ...ApiError.unauthorized() })
      }

      const userData = await tokenService.validateAccessToken(accessToken)
      console.log(userData)
      if (!userData) {
        return next({ ...ApiError.unauthorized() })
      }
      if (userData.role !== role) {
        return res.status(403).send({ message: 'У вас нет доступа' })
      }
      req.user = userData
      next()
    } catch (error) {
      return next({ ...ApiError.unauthorized() })
    }
  }
}
