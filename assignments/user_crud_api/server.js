const express = require('express')
const app = express()
var router = express.Router()


app.use(express.json())


app.use(router)
require('./routes')(router)
module.exports = app