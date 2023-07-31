import tokenService from '../service/token-service.js'
import ApiError from './../errors/ApiError.js'
export default (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      return next({ message: 'Вы не передали токен', type: 'TOKEN_NOT_VALID' })
    }
    const accessToken = authorizationHeader.split(' ')[1]
    if (!accessToken) {
      return next({ message: 'Вы не передали токен', type: 'TOKEN_NOT_VALID' })
    }

    const userData = tokenService.validateAccessToken(accessToken)
    if (!userData) {
      return next({ message: 'Токен не валидный', type: 'TOKEN_NOT_VALID' })
    }
    req.user = userData
    next()
  } catch (error) {
    return next({ ...ApiError.badRequest() })
  }
}
