class LabelDto {
  id
  title
  full_title
  color

  constructor(options) {
    this.id = options.id
    this.title = options.title
    this.full_title = options.full_title
    this.color = options.color
  }
}

export default LabelDto
