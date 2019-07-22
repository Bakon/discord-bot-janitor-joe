import {Champs} from '../../data/champions';
import {Users} from '../../data/prefferedchamps';

export default class Champion {
  static name = 'champion';
  static aliases = ['champ', 'champs', 'champions'];
  static description =
    'Returns a random champion, if given a lane it will return a champ for that lane\nFor example: /champion supp';

  static run(bot, message, args) {
    const suppliedRole = args[0];
    const username = args[1].toLowerCase();

    if (username) {
      if (username in Users) {
        const randomPool = function() {
          switch (suppliedRole) {
            case 'bot':
            case 'adc':
              return Users[username].adc[
                Math.floor(Math.random() * Users[username].adc.length)
              ];

            case 'support':
            case 'supp':
              return Users[username].supp[
                Math.floor(Math.random() * Users[username].supp.length)
              ];

            case 'mid':
              return Users[username].mid[
                Math.floor(Math.random() * Users[username].mid.length)
              ];

            case 'jgl':
            case 'jungle':
              return Users[username].jungle[
                Math.floor(Math.random() * Users[username].jungle.length)
              ];

            case 'top':
              return Users[username].top[
                Math.floor(Math.random() * Users[username].top.length)
              ];
          }
        };
        message.channel.send(randomPool());
      } else {
        message.chanell.send(
          "I couldn't find a champion pool with this username..."
        );
      }
    } else {
      const randomChampion = function() {
        switch (suppliedRole) {
          case 'bot':
          case 'adc':
            return Champs.adc[Math.floor(Math.random() * Champs.adc.length)];

          case 'supp':
          case 'support':
            return Champs.supp[Math.floor(Math.random() * Champs.supp.length)];

          case 'mid':
            return Champs.mid[Math.floor(Math.random() * Champs.mid.length)];

          case 'jgl':
          case 'jungle':
            return Champs.jungle[
              Math.floor(Math.random() * Champs.jungle.length)
            ];

          case 'top':
            return Champs.top[Math.floor(Math.random() * Champs.top.length)];

          default:
            return Champs.any[Math.floor(Math.random() * Champs.any.length)];
        }
      };
      message.channel.send(randomChampion());
    }
  }
}
