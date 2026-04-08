export class Command {
  execute() {
    throw new Error('execute() debe implementarse');
  }

  undo() {
    throw new Error('undo() debe implementarse');
  }
}

export class TurnOnCommand extends Command {
  constructor(lamp) {
    super();
    this.lamp = lamp;
  }

  execute() {
    this.lamp.turnOn();
  }

  undo() {
    this.lamp.turnOff();
  }
}

export class TurnOffCommand extends Command {
  constructor(lamp) {
    super();
    this.lamp = lamp;
  }

  execute() {
    this.lamp.turnOff();
  }

  undo() {
    this.lamp.turnOn();
  }
}
