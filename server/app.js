import express from 'express'
import homeRoutes from './routes/Home.routes.js'
const collection = require('./db.js')
const app = express()

app.use(homeRoutes)

export default app
