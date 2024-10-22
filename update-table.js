import pool from './db.js';

async function updateTable() {
  try {
    const client = await pool.connect();
    try {
      await client.query(`
        ALTER TABLE survey_responses
        ADD COLUMN IF NOT EXISTS conoce_marca VARCHAR(3),
        ADD COLUMN IF NOT EXISTS ha_probado VARCHAR(3),
        ADD COLUMN IF NOT EXISTS imagen VARCHAR(3),
        ADD COLUMN IF NOT EXISTS compra VARCHAR(3),
        ADD COLUMN IF NOT EXISTS precio DECIMAL(10, 2),
        ADD COLUMN IF NOT EXISTS sabor VARCHAR(50),
        ADD COLUMN IF NOT EXISTS tiendas TEXT[]
      `);
      console.log('Tabla actualizada exitosamente');
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Error al actualizar la tabla:', err);
  }
}

updateTable();