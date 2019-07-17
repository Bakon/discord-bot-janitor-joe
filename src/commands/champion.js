import Discord from 'discord.js';
import { Champions } from '../data/champions';

export const run = async (bot, message, args) => {
  function randomChampion() {
    let suppliedRole = args.slice(0).join(' ');

     switch (suppliedRole) {
      case 'adc' || 'bot':
        return Champions.adc[Math.floor(Math.random() * Champions.adc.length)];
      break;
      
      case 'support' || 'supp':
        return Champions.support[Math.floor(Math.random() * Champions.support.length)];
      break;

      case 'mid':
        return Champions.mid[Math.floor(Math.random() * Champions.mid.length)];
      break;

      case 'jungle' || 'jgl':
        return Champions.jungle[Math.floor(Math.random() * Champions.jungle.length)];
      break;

      case 'top':
        return Champions.top[Math.floor(Math.random() * Champions.top.length)];
      break;

      default:
        return Champions.any[Math.floor(Math.random() * Champions.any.length)];
    }
  }
  message.channel.send(randomChampion());
}

export const config = {
  name: 'champion',
  aliases: ['champ']
};