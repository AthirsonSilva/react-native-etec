import express from 'express'
import sequelize from './utils/database.js'
import router from './routes/routes.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use((_, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    response.setHeader('Access-Control-Allow-HEADERS', 'Content-Type, Authorization')
    
    next()
})

app.use(router)

sequelize.sync()

app.listen(5000)