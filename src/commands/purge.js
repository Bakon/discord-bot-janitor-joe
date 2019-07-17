import Discord from 'discord.js';

export const config = {
  name: 'purge',
  aliases: ['delete', 'remove']
};

export const run = async (bot, message, args) => {
  message.delete();

  if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.channel.send(`Sorry ${message.author.username} but you don't have permission to do that!`)
    .then(message => {
      (message).delete(5000);
    });
    return;
  }

  let messagesToDelete = Number(args[0]);

  if (!args[0]) {
    message.channel.send(`Sorry ${message.author.username}, you didn't tell me how many messages to delete!`)
    .then(message => {
      (message).delete(5000);
    });
    return;
  }

  if (isNaN(messagesToDelete) || messagesToDelete > 100) {
    message.channel.send(`Sorry ${message.author.username}, but that's not a valid number! Please enter a number between 1-100`)
    .then(message => {
      (message).delete(5000);
    });
    return;
  }

  messagesToDelete = Math.round(messagesToDelete);

  message.channel.bulkDelete(messagesToDelete)
    .catch(console.error);
}
