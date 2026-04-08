import { TextEditor } from './editor.js';
import { History } from './history.js';

console.log('Paso 1 — Editor (originator) modifica su estado');
const editor = new TextEditor();
editor.write('Hola');
editor.write(' mundo');

console.log('\nPaso 2 — Se guarda un snapshot (memento) en el historial (caretaker)');
const history = new History();
history.push(editor.save());

editor.write('!!!');
console.log('\nEstado actual:', editor.getState());

console.log('\nPaso 3 — Se deshace: se restaura desde el memento');
const snapshot = history.pop();
editor.restore(snapshot);

console.log('\nEstado tras restaurar:', editor.getState());

console.log('\n--- Idea ---');
console.log(
  'Memento: captura estado interno sin romper encapsulamiento; el caretaker solo guarda.'
);
