import clientModel from "../models/clients.js";

async function findClient(username, password) {
    try {
        
        const Client = await clientModel.findOne( {usuario: username}, {senha: password });
        return Client;
    } catch (error) {
        throw error; // Você pode lidar com o erro aqui ou lançá-lo para ser tratado em outro lugar
    }
}

export default findClient
