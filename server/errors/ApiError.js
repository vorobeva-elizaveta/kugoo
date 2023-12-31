class ApiError {
  status
  message
  type

  constructor(status, message, type) {
    this.status = status
    this.message = message
    this.type = type
  }

  static badRequest(message, type) {
    return new ApiError(400, message, type)
  }
  static unauthorized() {
    return new ApiError(401, 'Вы неавторизованы', 'Unauthorized')
  }
  static methodNotFound() {
    return new ApiError(404, 'Метод не найден')
  }
  static notFound() {
    return new ApiError(404, 'Не найдено', 'Unauthorized')
  }
  static internal(message, type) {
    return new ApiError(500, message, type)
  }
}

export default ApiError
