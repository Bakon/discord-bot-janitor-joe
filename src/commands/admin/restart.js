import {admincheck} from '../../modules/admincheck';
import {token} from '../../../token';

export const config = {
  name: 'restart',
  aliases: ['reboot', 'reload'],
  description: "If I'm failing, use this to restart me!",
};

export const run = async (bot, message) => {
  admincheck(message);
  message.channel
    .send('Restarting bot...')
    .then(() => {
      console.log(`${message.author.username} has requested me to restart!`);
      bot.destroy();
      bot.login(token);
    })
    .then(() => message.channel.send("I've restarted!"));
};
