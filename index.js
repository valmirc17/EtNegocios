import express from 'express' // Importando o Express
import mongoose from 'mongoose' // Importando o Mongoose
import bodyParser from 'body-parser' // Importando o BodyParser

import clientService from './services/clientService.js'

//import client from './models/clients'
//import clientService from './services/clientService.js'

const app = express() // Iniciando o Express

// Decodifica os dados recebidos por formulários
app.use(bodyParser.urlencoded({ extended: false }))

// Permite a utilização de dados via json
app.use(bodyParser.json())

const uri = "mongodb+srv://admin:9YQZCHx0tddG7Ixs@cluster0.413hior.mongodb.net/etnegocios";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com o MongoDB Atlas estabelecida com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB Atlas:', err);
    });


// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('./public'))

// Rota principal
app.get("/", function (req, res) {
    res.render("index")
})

// Rota Home
// Rota de login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' });
        }

        const client = await clientService.findClient(username, password);

        if (!client) {
            return res.status(401).json({ message: 'Nome de usuário não encontrado.' });
        }

        // Se chegou aqui, o usuário foi encontrado e a senha está correta
        return res.redirect("/home");
    } catch (error) {
        console.error(error); // Registre o erro no console
        return res.status(500).json({ message: 'Erro no servidor.' });
    }

});

app.get("/home", function (req, res) {
    res.render("home")
})
app.get("/cadastro", function (req, res) {
    res.render("cadastro")
})

app.post("/create", function (req, res) {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const nome = req.body.name;
    const telefone = req.body.senha;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const cep = req.body.cep;
    const ramo_atuacao = req.body.ramo;
    const cor_raca = req.body.cor;

    // Cria um documento JSON com os dados do formulário
    const documento = {
        usuario,
        senha,
        nome,
        telefone,
        cidade,
        estado,
        cep,
        ramo_atuacao,
        cor_raca
    };

    const client = clientService.createClient
        (
            usuario,
            senha,
            nome,
            telefone,
            cidade,
            estado,
            cep,
            ramo_atuacao,
            cor_raca
        );

        

    return res.redirect("/")

})




// Iniciando o servidor na pora 8080
app.listen(8080, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!")

    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})