import { ChatMediator } from './mediator.js';
import { User } from './user.js';

console.log('Paso 1 - Se crea el mediador (chat)');
const chat = new ChatMediator();

console.log('\nPaso 2 - Se crean usuarios y se registran en el mediador');
const PapiChulo = new User('Papi chulo', chat);
const Chols = new User('Chols', chat);
const Wazaa = new User('Wazaa', chat);

chat.addUser(PapiChulo);
chat.addUser(Chols);
chat.addUser(Wazaa);

console.log('\nPaso 3 - Envio de mensajes por medio del mediador');
PapiChulo.send('Hola a todos');
Chols.send('Hola Papi Chulo, todo bien?');
Wazaa.send('Yo tambien estoy conectada');
