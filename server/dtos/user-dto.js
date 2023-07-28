class UserDto {
  email
  id

  constructor(options) {
    this.email = options.email
    this.id = options.id
    this.role = options.role
  }
}

export default UserDto
