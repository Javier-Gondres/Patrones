import { AddExpr, NumberExpr, SubtractExpr } from './expressions.js';

export function parseExpression(str) {
  const tokens = str
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (tokens.length === 0) {
    throw new Error('Expresión vacía');
  }

  let i = 0;
  function readNumber() {
    const n = Number(tokens[i]);
    if (Number.isNaN(n)) {
      throw new Error(`Se esperaba número en posición ${i}`);
    }
    i++;
    return new NumberExpr(n);
  }

  let node = readNumber();
  while (i < tokens.length) {
    const op = tokens[i++];
    const right = readNumber();
    if (op === '+') {
      node = new AddExpr(node, right);
    } else if (op === '-') {
      node = new SubtractExpr(node, right);
    } else {
      throw new Error(`Operador no soportado: ${op}`);
    }
  }
  return node;
}
