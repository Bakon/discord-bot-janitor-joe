export const config = {
  name: 'ban',
  aliases: [],
};

export const run = async (bot, message, args) => {
  let mentionedUser = message.mentions.users.first();
  let suppliedReason =
    args.slice(1).join(' ') ||
    `${message.author.username} did not supply reason.`;
  let banLog = `${message.author.username}: ${suppliedReason}`;

  message.delete(0);

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
};
