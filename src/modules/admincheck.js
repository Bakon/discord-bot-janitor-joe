export default class Admincheck {
  static run(message) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      message.channel
        .send(
          `Sorry ${message.author.username}, but you don't have permission to do that!`
        )
        .then(message => {
          message.delete(5000);
        });
      return;
    }
  }
}
