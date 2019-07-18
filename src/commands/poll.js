export const config = {
  name: 'poll',
  aliases: ['vote'],
};

export const run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed();
  const userMessage = message.author.lastMessage.content;
};
