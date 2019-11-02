// Libraries
const expres = require('express')

//Initialize
var app = expres()
var path = require('path')
app.use(expres.json())
app.use(expres.static(__dirname + 'public'))


//Config
const PORT = 3004

// Route
app.get('/', (req, res)=>{
    res.status(200).send(JSON.stringify({message: "Respuesta en JSON"}))
})

const noticias = require('./routes/noticias')

app.use(noticias)


// Running server
app.listen(PORT, () => {
    console.log(`working at: http://localhost:${PORT}`)
})