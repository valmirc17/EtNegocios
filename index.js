import express from 'express' // Importando o Express
import mongoose from 'mongoose' // Importando o Mongoose
import bodyParser from 'body-parser' // Importando o BodyParser

import client from './models/clients.js'

const app = express() // Iniciando o Express

// Decodifica os dados recebidos por formulários
app.use(bodyParser.urlencoded({extended:false}))

// Permite a utilização de dados via json
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://admin:yOBqnpOZanrXDD3J@cluster0.413hior.mongodb.net/",{useNewUrlParser: true, useUnifiedTopology: true})


// Importanto as classes
//mport clientService from './services/clientService.js'



// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('./public'))

// Rota principal
app.get("/",function(req,res){
    res.render("index")
})

// Rota Home
app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const client = await cliente.findOne({ usuario: username });    

    if (!client) {
        res.status(401).json({ message: 'Nome de usuário não encontrado.' })
        return;
    }

    if (password === cliente.senha) {
        res.json({ message: 'Login bem-sucedido!' })
        res.redirect("home")
      } else {
        res.status(401).json({ message: 'Senha incorreta.' })
        res.redirect("index")
      }
})

app.get("/cadastro",function(req,res){
    res.render("cadastro")
})


// Iniciando o servidor na pora 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})