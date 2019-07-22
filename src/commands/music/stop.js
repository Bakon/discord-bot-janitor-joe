export const config = {
  name: 'stop',
  aliases: ['leave', 'quit'],
  description: 'The bot will stop playing music and leaves the voice channel',
};

export const run = async (bot, message) => {
  message.guild.voiceConnection
    ? message.guild.voiceConnection.disconnect()
    : message.channel.send(
        "I can't leave a voice channel if I'm not in one..."
      );
};
