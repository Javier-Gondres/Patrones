import { Playlist } from './playlist.js';

console.log('Paso 1 — Se crea la colección (playlist) sin exponer el array interno');
const playlist = new Playlist();
playlist.addSong('Bohemian Rhapsody');
playlist.addSong('Hotel California');
playlist.addSong('Stairway to Heaven');

console.log('\nPaso 2 — Se obtiene un iterador y se recorre con hasNext/next');
const it = playlist.createIterator();

let n = 1;
while (it.hasNext()) {
  console.log(`   ${n}. ${it.next()}`);
  n++;
}

console.log('\n--- Idea ---');
console.log(
  'Iterator: el cliente no necesita saber si es array, lista enlazada, etc.'
);
