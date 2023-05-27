const express = require('express')
const path = require ('path')


//const db = require('./database')
const routes = require('./routes/routes')

const app = express()


//conexao com banco de dados
//db.connect()//




//habilita server para receber dados via post (formulario)
app.use(express.urlencoded({extended:true}))


//definindo as rotasrotas
app.use('/api', routes)





//escutando o servidor

const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listening on ${port}`))

