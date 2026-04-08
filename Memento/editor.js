import { EditorMemento } from './memento.js';

export class TextEditor {
  constructor() {
    this._text = '';
    this._cursor = 0;
  }

  write(chunk) {
    const before = this._text.slice(0, this._cursor);
    const after = this._text.slice(this._cursor);
    this._text = before + chunk + after;
    this._cursor += chunk.length;
    console.log(`   Escribir "${chunk}" -> estado: "${this._text}" (cursor ${this._cursor})`);
  }

  save() {
    return new EditorMemento(this._text, this._cursor);
  }

  restore(memento) {
    this._text = memento.getText();
    this._cursor = memento.getCursor();
    console.log(
      `   Restaurado -> "${this._text}" (cursor ${this._cursor})`
    );
  }

  getState() {
    return { text: this._text, cursor: this._cursor };
  }
}
