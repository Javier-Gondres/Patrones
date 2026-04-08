export class RemoteControl {
  constructor() {
    this._slot = null;
    this._history = [];
  }

  setCommand(command) {
    this._slot = command;
  }

  pressButton() {
    if (!this._slot) {
      console.log('   (No hay comando asignado)');
      return;
    }
    this._slot.execute();
    this._history.push(this._slot);
  }

  pressUndo() {
    const last = this._history.pop();
    if (last) {
      last.undo();
    } else {
      console.log('   (No hay nada que deshacer)');
    }
  }
}
