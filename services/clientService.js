import clientModel from "../models/clients.js";

class clientService {

 findClient(username, password) {
    try {
        
        const Client =  clientModel.findOne( {usuario: username}, {senha: password });
        return Client;
    } catch (error) {
        throw error; // Você pode lidar com o erro aqui ou lançá-lo para ser tratado em outro lugar
    }
    
}

createClient(username, password,nome,telefone, cidade, estado, cep, ramo_atuacao) {
    try {
        
        const Client = clientModel.createClient( {usuario: username}, {senha: password }, {nome: nome},{telefone:telefone},{cidade:cidade},{estado:estado},{cep:cep},{ramo_atuacao: ramo_atuacao},{cor_raca: cor_raca});
        return Client;
    } catch (error) {
        throw error; // Você pode lidar com o erro aqui ou lançá-lo para ser tratado em outro lugar
    }
}

}
export default new clientService()

