export class Lamp {
  constructor(name = 'Lámpara') {
    this.name = name;
    this._on = false;
  }

  turnOn() {
    this._on = true;
    console.log(`   [${this.name}] Encendida`);
  }

  turnOff() {
    this._on = false;
    console.log(`   [${this.name}] Apagada`);
  }

  isOn() {
    return this._on;
  }
}
