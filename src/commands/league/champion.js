import {Champs} from '../../data/champions';

export default class Champion {
  static name = 'champion';
  static aliases = ['champ'];
  static description =
    'Returns a random champion, if given a lane it will return a champ for that lane\nFor example: /champion supp';

  static run(bot, message, args) {
    const suppliedRole = args[0];
    const checkArgs = args[1] === 'all' || args[1] === 'list';
    const rAdc = Champs.adc[Math.floor(Math.random() * Champs.adc.length)];
    const rSupp = Champs.supp[Math.floor(Math.random() * Champs.supp.length)];
    const rMid = Champs.mid[Math.floor(Math.random() * Champs.mid.length)];
    const rJgl =
      Champs.jungle[Math.floor(Math.random() * Champs.jungle.length)];
    const rTop = Champs.top[Math.floor(Math.random() * Champs.top.length)];

    const randomChampion = () => {
      switch (suppliedRole) {
        case 'adc':
        case 'bot':
          return checkArgs ? ['\u200b', ...Champs.adc] : rAdc;

        case 'support':
        case 'supp':
          return checkArgs ? ['\u200b', ...Champs.supp] : rSupp;

        case 'mid':
          return checkArgs ? ['\u200b', ...Champs.mid] : rMid;

        case 'jungle':
        case 'jgl':
          return checkArgs ? ['\u200b', ...Champs.jungle] : rJgl;

        case 'top':
          return checkArgs ? ['\u200b', ...Champs.supp] : rTop;

        default:
          return Champs.any[Math.floor(Math.random() * Champs.any.length)];
      }
    };
    message.channel.send(randomChampion());
  }
}
