export class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message) {
    console.log(`\n[${this.name}] Envia: "${message}"`);
    this.mediator.sendMessage(message, this);
  }

  receive(message, senderName) {
    console.log(`[${this.name}] Recibe de ${senderName}: "${message}"`);
  }
}
