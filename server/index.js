import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.js'
import cors from 'cors'
import ErrorHandingMiddleware from './middlewares/error-handing-middleware.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import logger from './logging.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express(),
  PORT = process.env.PORT || 5000,
  whitelist = ['http://localhost:4000']

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      callback(null, true)
      // if (whitelist.indexOf(origin) !== -1) {
      // } else {
      //   callback(new Error('Not allowed by CORS'))
      // }
    }
  })
)

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))

app.use('/api', router)
// app.use('/', (req, res, next) => {
//   res.send('Welcome To Kugoo API!')
//   next()
// })
app.listen(PORT, () => logger.info(`Server is started on port http://localhost:${PORT}`))
app.use(ErrorHandingMiddleware)
