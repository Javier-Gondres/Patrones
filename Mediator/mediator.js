export class ChatMediator {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(message, sender) {
    console.log(
      `\n[ChatMediator] Mensaje recibido de ${sender.name}: "${message}"`
    );
    console.log('[ChatMediator] Distribuyendo mensaje a los demas usuarios...');

    for (const user of this.users) {
      if (user !== sender) {
        user.receive(message, sender.name);
      }
    }
  }
}
