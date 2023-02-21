import clientService from "../services/client.service.js";

const clientController = {
  createClient: async function (req, res, next) {
    try {
      const client = req.body;
      if (
        !client.name ||
        !client.cpf ||
        !client.phone ||
        !client.email ||
        !client.adress
      ) {
        throw new Error("Submit all fields for registration");
      }

      res.send(await clientService.createClientService(client));
      logger.info(`POST /client - ${JSON.stringify(client)}`);
    } catch (error) {
      next(error);
    }
  },
  getClients: async function(req, res, next){
    try{   
        res.send(await clientService.getClientsService());
        logger.info("GET /client");

    }catch(error){
        next(error)
    }
  },
  getClient: async function (req, res, next){
    try{
        res.send(await clientService.getClientService(req.params.id))
        logger.info("GET /client")
    }catch(error){
        next(error);
    }
  },
  deleteClient: async function (req, res, next){
    try{
        await clientService.deleteClientService(req.params.id);
        res.end();
        logger.info("DELETE /client");
    }catch(error){
        next(error);
    }
  }
};

export default clientController;
