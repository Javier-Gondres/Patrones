export class EditorMemento {
  constructor(text, cursor) {
    this._text = text;
    this._cursor = cursor;
  }

  getText() {
    return this._text;
  }

  getCursor() {
    return this._cursor;
  }
}
