import clientRepository from "../repositories/client.repository.js";

const clientService = {
    createClientService: async function (client){
        return await clientRepository.createClientRepository(client);
    },

    getClientsService: async function (){
        return await clientRepository.getClientsRepository();
    }




}

export default clientService;