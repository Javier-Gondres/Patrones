import { ejecutarModuloInventario } from './modulo-inventario.js';
import { ejecutarModuloReportes } from './modulo-reportes.js';

const dbDesdeInventario = ejecutarModuloInventario();
const dbDesdeReportes = ejecutarModuloReportes();

console.log('\n--- Verificación ---');
console.log(
  '¿Ambos módulos usan exactamente la misma instancia?',
  dbDesdeInventario === dbDesdeReportes
);
