import pg from "pg";

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }
    
    const pool = new pg.Pool({
        connectionString:"postgres://tejtirkw:xGUdw5CepHcS-OLPSXS02J_hFHibz2o9@drona.db.elephantsql.com/tejtirkw"
    });
    global.connection = pool;

    return pool.connect();
}

export { connect };