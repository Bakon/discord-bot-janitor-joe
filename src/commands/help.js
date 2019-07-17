import Discord from 'discord.js';

export const config = {
  name: 'help',
  aliases: ['commands']
};

export const run = async (bot, message, args) => {
  message.channel.send('Still a WIP, come back later fam');
}