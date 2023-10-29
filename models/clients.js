import mongoose from 'mongoose'

const client = new mongoose.Schema(
    {
        usuario: { type: String },
        senha: { type: String },
        nome: { type: String },
        telefone: { type: String },
        cidade: { type: String },
        estado: { type: String },
        cep: { type: String },
        ramo_atuacao: { type: String },
        cor_raca: { type: String }
    }
)
const clientModel  = mongoose.model("Clients", client)

export default clientModel

