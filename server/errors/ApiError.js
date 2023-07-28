class ApiError {
  constructor(status, message) {
    this.status = status
    this.message = message
  }

  static badRequest(message) {
    return new ApiError(400, message)
  }
  static unauthorized() {
    return new ApiError(401, 'Вы неавторизованы')
  }
  static internal(message) {
    return new ApiError(500, message)
  }
}

export default ApiError
