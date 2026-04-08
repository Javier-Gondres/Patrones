import { parseExpression } from './parser.js';

console.log('Paso 1 — La gramática se representa como árbol de expresiones');
console.log('   (NumberExpr, AddExpr, SubtractExpr)');

console.log('\nPaso 2 — Se interpreta (evalúa) el árbol recorriendo nodos');

const expr1 = parseExpression('10 + 5');
console.log(`\n"10 + 5" => ${expr1.interpret()}`);

const expr2 = parseExpression('10 + 5 - 2');
console.log(`"10 + 5 - 2" => ${expr2.interpret()}`);

console.log('\n--- Idea ---');
console.log(
  'Interpreter: cada nodo implementa la misma operación (interpret) para dar un resultado.'
);
