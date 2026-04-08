import { DatabaseConnection } from './database-connection.js';

export function ejecutarModuloReportes() {
  console.log('\n--- Módulo Reportes solicita la conexión (siguiente vez) ---');
  const db = DatabaseConnection.getInstance();
  db.query("SELECT COUNT(*) AS total FROM ventas WHERE fecha = '2026-03-31'");
  return db;
}
