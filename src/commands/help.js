export const config = {
  name: 'help',
  aliases: ['commands'],
};

export const run = async (bot, message) => {
  message.channel.send('Still a WIP, come back later fam');
};
