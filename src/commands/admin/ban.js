import Admincheck from '../../modules/admincheck';

export default class Ban {
  static name = 'ban';
  static aliases = [];
  static description = 'Bans the @mentioned user';

  static run(bot, message, args) {
    Admincheck.run(message);
    message.delete(0);

    let mentionedUser = message.mentions.users.first();
    let suppliedReason =
      args.slice(1).join(' ') ||
      `${message.author.username} did not supply reason.`;
    let banLog = `${message.author.username}: ${suppliedReason}`;

    if (!mentionedUser) {
      message.channel
        .send(`Sorry ${message.author.username}, I couldn't find that user!`)
        .then(message => {
          message.delete(5000);
        });
      return;
    }

    message.guild
      .member(mentionedUser)
      .ban(banLog)
      .then(console.log)
      .catch(console.error);
  }
}
