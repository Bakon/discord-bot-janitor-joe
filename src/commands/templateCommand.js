import Discord from 'discord.js';

export const run = async (bot, message, args) => {

  message.channel.send('Cannot send an empty string!');
}

export const config = {
  name: '',
  aliases: []
};