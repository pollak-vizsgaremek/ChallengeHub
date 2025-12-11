import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import authController from './controllers/auth.controller.js'
import categoryController from './controllers/category.controller.js'
import userController from './controllers/user.controller.js'
import challengesController from './controllers/challenges.controller.js'

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173',
}

app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/v1/auth', authController)
app.use('/api/v1/categories', categoryController)
app.use('/api/v1/users', userController)
app.use('/api/v1/challenges', challengesController)

app.listen(3300, () => {
  console.log('Elindult az alkalmazás')
})
