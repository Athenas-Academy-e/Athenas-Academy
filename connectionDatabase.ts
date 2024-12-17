import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

// Pool de conexões (reutiliza as conexões)
let pool:any;

const connection = () => {
    if (!pool) {
        pool = mysql.createPool({
            host: process.env.DB_URL,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE,
            port: Number(process.env.DB_PORT),
            waitForConnections: true,
            connectionLimit: 10,  // Número máximo de conexões simultâneas no pool
            queueLimit: 0          // Sem limite na fila de conexões
        });
    }
    return pool;
}

export default connection;
