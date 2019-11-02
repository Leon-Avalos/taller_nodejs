const express = require('express')

const router = express.Router()

router.get('/rutas1/info', (req, res) => {
    let url = req.url
    res.status(200).send({ruta: url})
})

module.exports = router