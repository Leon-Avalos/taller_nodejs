const express = require('express')

const router = express.Router()

router.get('/rutas2/info', (req, res) => {
    let url = req.url
    res.status(200).send({ruta: url})
})

module.exports = router