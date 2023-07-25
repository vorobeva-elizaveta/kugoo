import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.js'
import cors from 'cors'
import ErrorHandingMiddleware from './middlewares/ErrorHandingMiddleware.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express(),
  PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))
app.use('/api', router)

app.use('', ErrorHandingMiddleware)

app.listen(PORT, () => console.log(`Server is started on port http://localhost:${PORT}`))
