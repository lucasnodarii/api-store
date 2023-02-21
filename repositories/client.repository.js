import { connect } from "./db.js";

const clientRepository = {
  createClientRepository: async function (client) {
      const conn = await connect();
    try {
      const sql =
        "INSERT INTO clients (name, cpf, phone, email, adress) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const values = [
        client.name,
        client.cpf,
        client.phone,
        client.email,
        client.adress,
      ];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getClientsRepository: async function(){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM clients");
        return res.rows;

    }catch(error){
        throw error;
    }finally{
        conn.release();
    }
  },
  getClientRepository: async function(){
    const conn = await connect();
    try{

    }catch(error){
        throw error;
    }finally{
        conn.release();
    }
  },
  updateClientRepository: async function(){
    const conn = await connect();
    try{

    }catch(error){
        throw error;
    }finally{
        conn.release();
    }
  },
  deleteClientRepository: async function(){
    const conn = await connect();
    try{

    }catch(error){
        throw error;
    }finally{
        conn.release();
    }
  }
};

export default clientRepository;
