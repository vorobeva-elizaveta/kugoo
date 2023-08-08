class ProductDto {
  id
  title
  work_time
  speed
  horsepower
  accumulator
  article_number
  views
  bought
  cost

  constructor(options) {
    this.id = options.id
    this.title = options.title
    this.work_time = options.work_time
    this.speed = options.speed
    this.horsepower = options.horsepower
    this.accumulator = options.accumulator
    this.article_number = options.article_number
    this.views = options.views
    this.bought = options.bought
    this.cost = options.cost
  }
}

export default ProductDto
