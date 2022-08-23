const express = require('express')
const route = express.Router()
const studentroute = require('./student')
const adminroute = require('./admin')

route.use(studentroute)
route.use(adminroute)

module.exports = route