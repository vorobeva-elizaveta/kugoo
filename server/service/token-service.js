import jwt from 'jsonwebtoken'
import tokenModel from '../models/token-model.js'
class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: '30m' })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '30d' })
    return { access: accessToken, refresh: refreshToken }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findFirst({ where: { userId } })
    if (tokenData) {
      await tokenModel.update({
        where: { userId: userId },
        data: { refreshToken }
      })
      return
    }
    const token = await tokenModel.create({ data: { userId, refreshToken } })
    return token
  }
}

export default new TokenService()
