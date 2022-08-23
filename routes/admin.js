const express = require('express')
const adminroute = express.Router()
const path = require('path')

adminroute.get('/admin', (req, res) => {
    res.sendFile('admin.html', { root: './views' })
})

module.exports  = adminroute