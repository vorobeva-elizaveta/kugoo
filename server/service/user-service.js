import userModel from '../models/user-model.js'
import bcript from 'bcrypt'
import ApiError from '../errors/ApiError.js'
import TokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'
import tokenService from './token-service.js'

class UserService {
  async generateAndSaveTokens(user) {
    const userDto = new UserDto(user)
    const tokens = TokenService.generateTokens({ ...userDto })
    await TokenService.saveToken(userDto.id, tokens.refresh)

    return {
      ...tokens,
      user: userDto
    }
  }
  async getUserData(userId) {
    let user = await userModel.findFirst({ where: { id: userId } })
    if (!user) {
      throw ApiError.badRequest('Пользователь с таким id не найден')
    }
    const userDto = new UserDto(user)
    return { ...userDto }
  }
  async registration(email, password, role) {
    let candidate = await userModel.findFirst({ where: { email } })
    if (candidate) {
      throw ApiError.badRequest('Такой пользователь уже существует')
    }
    const hashPassword = await bcript.hash(password, 3)
    const user = await userModel
      .create({
        data: {
          email,
          password: hashPassword,
          role: role != null ? role : 'user'
        }
      })
      .then((data) => data)

    const result = this.generateAndSaveTokens(user)
    return result
  }

  async login(email, password) {
    const user = await userModel.findFirst({ where: { email } })
    if (!user) {
      throw ApiError.badRequest('Пользователь с такой почтой не найден')
    }
    const isPasswordsEqual = await bcript.compare(password, user.password)
    if (!isPasswordsEqual) {
      throw ApiError.badRequest('Пароль неверный')
    }
    const userDto = new UserDto(user)
    const tokens = TokenService.generateTokens({ ...userDto })
    await TokenService.saveToken(userDto.id, tokens.refresh)
    return {
      ...tokens,
      user: userDto
    }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async refreshToken(token) {
    if (!token) {
      throw ApiError.unauthorized()
    }
    const userData = TokenService.validateRefreshToken(token)
    const tokenFromDb = await TokenService.findToken(token)
    if (!userData || !tokenFromDb) {
      throw ApiError.unauthorized()
    }
    const user = await userModel.findFirst({ where: { id: userData.id } })
    const result = this.generateAndSaveTokens(user)
    return result
  }
}

export default new UserService()
