import Discord from 'discord.js';

export const run = async (bot, message, args) => {
  let coinflip = (Math.floor(Math.random() * 2) == 0)
    ? 'has blessed you, you will win next game'
    : 'didn\'t bless you, you will lose this game';
  message.channel.send(coinflip);
}

export const config = {
  name: 'coinflip',
  aliases: ['coin', 'flip', 'rng']
};