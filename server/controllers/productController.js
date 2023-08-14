import ApiError from '../errors/ApiError.js'
import LabelModel from '../models/label-model.js'
import ProductModel from '../models/product-model.js'
import ProductService from '../service/product-service.js'
class ProductController {
  async getAllProducts(req, res, next) {
    try {
      const { page, limit } = req.query
      console.log(req.query)
      const result = await ProductService.getAllProducts(limit, page)
      res.send(result)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  async createProduct(req, res, next) {
    try {
      let requestBody = req.body
      const response = await ProductService.createProduct(requestBody)
      return res.send(response)
    } catch (error) {
      next(error)
    }
  }

  async updateProductById(req, res, next) {
    try {
      const result = await ProductService.updateProduct(req.body)
      res.send(result)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  async deleteProductById(req, res, next) {
    try {
      const requestBody = req.body
      const result = await ProductService.deleteProduct(requestBody)
      res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async deleteManyProductsByIds(req, res, next) {
    try {
      const requestBody = req.body
      const result = await ProductService.deleteManyProducts(requestBody)
      res.send(result)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  async searchProducts(req, res, next) {
    try {
      const { searchText } = req.body
      const result = await ProductService.searchProducts(searchText)
      res.send(result)
    } catch (error) {
      next(error)
    }
  }
}
export default new ProductController()
