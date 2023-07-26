import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.js'
import cors from 'cors'
import ErrorHandingMiddleware from './middlewares/ErrorHandingMiddleware.js'
import bodyParser from 'body-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express(),
  PORT = process.env.PORT || 5000

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))

app.use('/api', router)
// app.use('/', (req, res, next) => {
//   res.send('Welcome To Kugoo API!')
//   next()
// })

app.listen(PORT, () => console.log(`Server is started on port http://localhost:${PORT}`))
app.use(ErrorHandingMiddleware)
