export class History {
  constructor() {
    this._stack = [];
  }

  push(memento) {
    this._stack.push(memento);
  }

  pop() {
    return this._stack.pop();
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}
