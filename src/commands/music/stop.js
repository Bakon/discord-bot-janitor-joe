export const config = {
  name: 'stop',
  aliases: ['leave', 'quit'],
  description: 'Lets the bot leave the voice channel',
};

export const run = async (bot, message, args) => {
  message.guild.voiceConnection
    ? message.guild.voiceConnection.disconnect()
    : message.channel.send(
        "I can't leave a voice channel if I'm not in one..."
      );
};
