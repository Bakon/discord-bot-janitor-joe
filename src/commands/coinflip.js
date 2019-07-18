export const config = {
  name: 'coinflip',
  aliases: ['coin', 'flip', 'rng'],
};

export const run = async (bot, message) => {
  let coinflip =
    Math.floor(Math.random() * 2) == 0
      ? 'has blessed you, you will win next game'
      : "didn't bless you, you will lose this game";
  message.channel.send(coinflip);
};
