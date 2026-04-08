import { Lamp } from './lamp.js';
import { TurnOnCommand, TurnOffCommand } from './commands.js';
import { RemoteControl } from './remote.js';

console.log('Paso 1 — Se crea el receptor (la lámpara)');
const lamp = new Lamp('Sala');

console.log('\nPaso 2 — Se encapsulan acciones como objetos Command');
const encender = new TurnOnCommand(lamp);
const apagar = new TurnOffCommand(lamp);

console.log('\nPaso 3 — El invocador (control remoto) ejecuta comandos');
const remote = new RemoteControl();

remote.setCommand(encender);
console.log('Botón: encender');
remote.pressButton();

remote.setCommand(apagar);
console.log('\nBotón: apagar');
remote.pressButton();

console.log('\nPaso 4 — Deshacer (undo) invierte el último comando');
remote.setCommand(encender);
remote.pressButton();
console.log('\nUndo:');
remote.pressUndo();

console.log('\n--- Idea ---');
console.log(
  'La solicitud (encender/apagar) es un objeto; se puede cola, historial, deshacer.'
);
