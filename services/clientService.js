import clientModel from "../models/clients.js";

class clientService {

    findClient(username, password) {
        try {

            const Client = clientModel.findOne({ usuario: username }, { senha: password},{ nome: 1, usuario: 1, senha: 1 });
            return Client
        } catch (error) {
            throw error;
        }

    }

}
export default new clientService()

