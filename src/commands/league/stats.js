import {getPlayerStats} from '../../functions/getplayerstats';

export const config = {
  name: 'stats',
  aliases: ['getstats'],
};

export const run = async (bot, message, args) => {
  const input = args.join('+');
  getPlayerStats(input).then(result => {
    message.channel.send('** ** \n' + result.stats.join('\n'));
  });
};
