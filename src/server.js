const express = require('express')
const cors = require('cors')


const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


//conexao com banco de dados
db.connect()//

//habilita CORS para qq endereco
//app.use(cors())

//habilita CORS para somente alguns enderecos
const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://www.app.com.br',
]


app.use(cors({
  origin: function(origin,callback){
    let allowed = true

    if(!origin) allowed = true

    if(!allowedOrigins.includes(origin)) allowed = false


    callback(null, allowed)

  }
}))


//habilita server para receber dados json
app.use(express.json())


//definindo as rotasrotas
app.use('/api', routes)



//escutando o servidor

const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listening on ${port}`))

