import {getPlayerStats} from '../../modules/getplayerstats';

export const config = {
  name: 'stats',
  aliases: ['getstats', 'roastme'],
  description: 'Fetches requested user ranked stats',
};

export const run = async (bot, message, args) => {
  const input = args.join('+');
  getPlayerStats(input).then(result => {
    message.channel.send('** ** \n' + result.stats.join('\n'));
  });
};
