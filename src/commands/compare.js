import {getPlayerStats} from '../getplayerstats';

export const config = {
  name: 'compare',
  aliases: ['getstats', 'stats'],
};

export const run = async (bot, message, args) => {
  getPlayerStats(args[0]).then(result => {
    message.channel.send('** ** \n' + result.stats.join('\n'));

    if (args[1]) {
      getPlayerStats(args[1]).then(result => {
        message.channel.send('** ** \n' + result.stats.join('\n'));
      });
    }
    // console.log(args[1]);
    // Promise.all([fetchData(args[0]), fetchData(args[1])]).then(console.log);
  });
};

// Iron 4 = 0
// Iron 3 = 100
// Iron 2 = 200
// Iron 1 = 300
// Silver 4 = 300
// Silver 3
// Plat 1 2300MMR
// Diamond 4 2200MMR
