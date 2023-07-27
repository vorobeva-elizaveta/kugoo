import userModel from '../models/user-model.js'
import bcript from 'bcrypt'
import ApiError from '../errors/ApiError.js'
import tokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'

class UserService {
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
    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refresh)

    return {
      ...tokens,
      user: userDto
    }
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
    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refresh)
    return {
      ...tokens,
      user: userDto
    }
  }
}

export default new UserService()
