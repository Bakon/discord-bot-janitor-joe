import {getPlayerStats} from '../../modules/getplayerstats';

export const config = {
  name: 'compare',
  aliases: ['getstats', 'stats'],
  description: 'Compares the ranked stats of 2 players',
};

export const run = async (bot, message, args) => {
  getPlayerStats(args[0]).then(result => {
    message.channel.send('** ** \n' + result.stats.join('\n'));

    if (args[1]) {
      const player1Stats = [];
      const player2Stats = [];
      const results = () => {};

      getPlayerStats(args[0]).then(result => {
        player1Stats.push(result);
      });

      getPlayerStats(args[1]).then(result => {
        player2Stats.push(result);
      });

      Promise.all([getPlayerStats([0]), getPlayerStats([1])]).then(
        message.channel.send('\u200b\n' + results.join('\n'))
      );
    }
    // Promise.all([fetchData(args[0]), fetchData(args[1])]).then(console.log);
  });
};

// Iron 4 = 0
// Iron 3 = 100
// Iron 2 = 200
// Iron 1 = 300
// Silver 4 = 300
// Silver 3 = 400
// Silver 2 = 500
// Silver 1 = 600
// Gold 4 = 600
// Gold 3 = 700
// Gold 2 =  800
// Gold I = 900
// Plat 4 = 900
// Plat 3 = 1000
// Plat 2 = 1100
// Plat 1 = 1200
// Dia 4 = 1200
// Dia 3 = 1300
// Dia 2 = 1400
// Dia 1 = 1500
// Master = 1600
// Grandmaster = 1700
// Challenger = 1800
