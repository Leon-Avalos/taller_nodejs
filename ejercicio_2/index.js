// Libraries
const expres = require('express')

//Initialize
var app = expres()
app.use(expres.json())


//Config
const PORT = 3001

// Route
app.get('/', (req, res)=>{
    res.status(200).send(JSON.stringify({message: "Respuesta en JSON"}))
})


// Running server
app.listen(PORT, () => {
    console.log(`working at: http://localhost:${PORT}`)
})