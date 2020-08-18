const express = require('express')

const routes = express()

routes.post('/form', (req, res) => {
    res.send({
        ...req.body
    })
})
module.exports = routes