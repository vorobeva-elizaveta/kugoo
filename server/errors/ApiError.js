class ApiError extends Error {
  status
  message
  type

  constructor(status, message, type) {
    super(status, message, type)
    this.status = status
    this.message = message
    this.type = type
  }

  static badRequest(message) {
    return new ApiError(400, message)
  }
  static unauthorized() {
    return new ApiError(401, 'Вы неавторизованы', 'Unauthorized')
  }
  static internal(message) {
    return new ApiError(500, message)
  }
}

export default ApiError
