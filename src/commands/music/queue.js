export const config = {
  name: 'queue',
  aliases: ['next'],
  description: 'Adds song to the queue',
};

export const run = async (bot, message, args, options) => {
  let guildIdData = options.active.get(message.guild.id);

  if (!guildIdData) {
    return message.channel.send('The queue seems to be empty!');
  }

  let queue = guildIdData.queue;
  let nowPlaying = queue[0];
  let response = `Now playing: ${nowPlaying.songTitle}, requested by: ${nowPlaying.requestedBy} \n\n Queue \n`;

  for (let i = 0; i < queue.length; i++) {
    response += `${i}. ${queue[i].songTitle} - Requested by: ${queue[i].requestedBy}\n`;
  }

  message.channel.send(response);
};
