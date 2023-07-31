import jwt from 'jsonwebtoken'
import tokenModel from '../models/token-model.js'
class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: '0m' })
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

  async removeToken(refreshToken) {
    const token = await tokenModel.delete({ where: { refreshToken } })
    return token
  }

  async validateAccessToken(accessToken) {
    try {
      const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY)
      return userData
    } catch (error) {
      return
    }
  }
  async validateRefreshToken(accessToken) {
    try {
      const userData = jwt.verify(accessToken, process.env.JWT_REFRESH_SECRET_KEY)
      return userData
    } catch (error) {
      return
    }
  }

  async findToken(refreshToken) {
    const tokenData = await tokenModel.findFirst({ where: { refreshToken } })
    return tokenData
  }
}

export default new TokenService()
