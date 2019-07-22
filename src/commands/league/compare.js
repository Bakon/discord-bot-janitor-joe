import GetPlayerStats from '../../modules/getplayerstats';

export default class Compare {
  static name = 'compare';
  static aliases = [];
  static description = 'Compares the ranked stats of 2 players';

  static run(bot, message, args) {
    if (args) {
      Promise.all([GetPlayerStats(args[0]), GetPlayerStats(args[1])]).then(
        promise => {
          console.log(promise);

          message.channel.send(promise);
        }
      );
    }
  }
}

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
