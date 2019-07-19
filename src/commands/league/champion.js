import {Champions} from '../../data/champions';

export const config = {
  name: 'champion',
  aliases: ['champ'],
};

export const run = async (bot, message, args) => {
  function randomChampion() {
    let suppliedRole = args.slice(0).join(' ');

    switch (suppliedRole) {
      case 'adc':
      case 'bot':
        return Champions.adc[Math.floor(Math.random() * Champions.adc.length)];

      case 'support':
      case 'supp':
        return Champions.support[
          Math.floor(Math.random() * Champions.support.length)
        ];

      case 'mid':
        return Champions.mid[Math.floor(Math.random() * Champions.mid.length)];

      case 'jungle':
      case 'jgl':
        return Champions.jungle[
          Math.floor(Math.random() * Champions.jungle.length)
        ];

      case 'top':
        return Champions.top[Math.floor(Math.random() * Champions.top.length)];

      default:
        return Champions.any[Math.floor(Math.random() * Champions.any.length)];
    }
  }
  message.channel.send(randomChampion());
};
