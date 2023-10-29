import mongoose from 'mongoose'

const client = new mongoose.Schema(
    {
        usuario: String,
        senha: String,
        nome: String,
        telefone: String,
        cidade: String,
        estado: String,
        cep: String,
        ramo_atuacao: String,
        cor_raca: String
    }
)

export default client
