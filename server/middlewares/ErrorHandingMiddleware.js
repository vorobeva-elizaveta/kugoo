import ApiError from './../errors/ApiError.js'

export default function (err, req, res, next) {
  // if (err instanceof ApiError) {
  //   return res.json(err.status)
  // }
  console.log('as')
  res.status(500).send('aas')
}
