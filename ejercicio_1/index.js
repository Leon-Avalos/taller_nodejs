// Libraries
const expres = require('express')

//Initialize
var app = expres()
app.use(expres.json())


//Config
const PORT = 3000

// Route
app.get('/', (req, res)=>{
    res.status(200).send('<h1> API nodejs creada! </h2>')
})


// Running server
app.listen(PORT, () => {
    console.log(`working at: http://localhost:${PORT}`)
})