// Libraries
const expres = require('express')

//Initialize
var app = expres()
var path = require('path')
app.use(expres.json())
app.use(expres.static(__dirname + 'public'))


//Config
const PORT = 3003

// Route
app.get('/', (req, res)=>{
    res.status(200).send(JSON.stringify({message: "Respuesta en JSON"}))
})

const ruta1 = require('./routes/ruta1')
const ruta2 = require('./routes/ruta2')
app.use(ruta1)
app.use(ruta2)

app.get('/error', (req, res) => {
    res.status(404).sendFile(path.join(__dirname+'/404.html'))
})


// Running server
app.listen(PORT, () => {
    console.log(`working at: http://localhost:${PORT}`)
})