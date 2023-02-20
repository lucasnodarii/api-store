import clientRepository from "../repositories/client.repository.js";

const clientService = {
    createClientService: async function (client){
        return await clientRepository.createClientRepository(client);

    }




}

export default clientService;