const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname)))
app.use(express.json())

app.use(routes)



app.listen(3434)