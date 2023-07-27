import ApiError from './../errors/ApiError.js'

export default function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message })
  }
  res.status(500).json({ message: err.message })
}
