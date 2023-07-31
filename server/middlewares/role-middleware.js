import tokenService from '../service/token-service.js'
import ApiError from './../errors/ApiError.js'

export default (role) => {
  return async (req, res, next) => {
    try {
      const authorizationHeader = req.headers.authorization
      if (!authorizationHeader) {
        return next(ApiError.unauthorized())
      }
      const accessToken = authorizationHeader.split(' ')[1]
      if (!accessToken) {
        return next(ApiError.unauthorized())
      }

      const userData = await tokenService.validateAccessToken(accessToken)
      if (!userData) {
        return next(ApiError.unauthorized())
      }
      if (userData.role != role) {
        return res.status(403).send({ message: 'У вас нет доступа' })
      }
      next()
    } catch (error) {
      return next(ApiError.unauthorized())
    }
  }
}
