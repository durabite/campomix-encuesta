import pg from 'pg';

const pool = new pg.Pool({
  host: 'localhost', // o la dirección IP de tu servidor de base de datos
  port: 5432,
  database: 'verceldb',
  user: 'default',
  password: '5iI4eqYMSKjr',
});

export default pool;