import mysql from 'mysql2/promise';

// Define connection pool type
export type ConnectionPool = mysql.Pool;

const pool: ConnectionPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
