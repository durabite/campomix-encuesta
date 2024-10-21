require('dotenv').config();
const pool = require('./db.js');

async function createTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS survey_responses (
        id SERIAL PRIMARY KEY,
        conoce_marca VARCHAR(3) NOT NULL,
        ha_probado VARCHAR(3) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Tabla creada exitosamente');
  } catch (err) {
    console.error('Error al crear la tabla:', err);
  } finally {
    client.release();
  }
}

createTable();