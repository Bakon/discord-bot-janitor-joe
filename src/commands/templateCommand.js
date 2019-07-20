export const config = {
  name: '',
  aliases: [],
  description: 'template command lol',
};

export const run = async (bot, message, args) => {
  message.channel.send('Cannot send an empty string!');
};
