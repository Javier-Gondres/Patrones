import { DatabaseConnection } from './database-connection.js';

export function ejecutarModuloInventario() {
  console.log('\n--- Módulo Inventario solicita la conexión (primera vez) ---');
  const db = DatabaseConnection.getInstance();
  db.query('SELECT * FROM productos WHERE stock > 0');
  return db;
}
