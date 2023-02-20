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
        !client.address
      ) {
        throw new Error("Submit all fields for registration");
      }

      res.send(await clientService.createClientService(client));
      logger.info(`POST /client - ${JSON.stringify(client)}`);
    } catch (error) {
      next(error);
    }
  },
};

export default clientController;
