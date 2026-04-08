import { CafeSimple } from './cafe.js';
import { Azucar, Chocolate, Leche } from './decorador-cafe.js';

console.log('Paso 1 — Objeto base');
let pedido = new CafeSimple();
console.log('   Descripción:', pedido.getDescripcion());
console.log('   Costo:', pedido.getCosto().toFixed(2));

console.log('\n Paso 2 — Se agrega leche (decorador envuelve al objeto actual)');
pedido = new Leche(pedido);
console.log('   Descripción:', pedido.getDescripcion());
console.log('   Costo:', pedido.getCosto().toFixed(2));

console.log('\nPaso 3 — Se agrega azúcar (otro envoltorio)');
pedido = new Azucar(pedido);
console.log('   Descripción:', pedido.getDescripcion());
console.log('   Costo:', pedido.getCosto().toFixed(2));

console.log('\nPaso 4 — Se agrega chocolate');
pedido = new Chocolate(pedido);
console.log('   Descripción:', pedido.getDescripcion());
console.log('   Costo:', pedido.getCosto().toFixed(2));

console.log('\n--- Mismo resultado con una sola expresión anidada ---');
const directo = new Chocolate(new Azucar(new Leche(new CafeSimple())));
console.log(directo.getDescripcion(), '→', directo.getCosto().toFixed(2));
