const express = require('express')

const router = express.Router()

router.get('/noticias/:fecha/:categoria', (req, res) => {
    let url = req.url
    let fecha = req.params.fecha
    let categoria = req.params.fecha
    if(!fecha && !categoria){
        res.status(404).sendFile(path.join(__dirname+'/404.html'))
        console.log("Paso por aca")
    }else{
        res.status(200).send({ruta: url, fecha: fecha, categoria: categoria})
    }
})

module.exports = router