export const config = {
  name: '',
  aliases: [],
};

export const run = async (bot, message, args) => {
  message.channel.send('Cannot send an empty string!');
};
