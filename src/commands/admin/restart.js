import Admincheck from '../../modules/admincheck';
import {token} from '../../../token';

export default class Restart {
  static name = 'restart';
  static aliases = ['reboot', 'reload'];
  static description =
    "If I'm having weird hiccups, you could use this command to restart me!";

  static run(bot, message) {
    Admincheck.run(message);
    message.channel
      .send('Restarting bot...')
      .then(() => {
        console.log(`${message.author.username} has requested me to restart!`);
        bot.destroy();
        bot.login(token);
      })
      .then(() => message.channel.send("I've restarted!"));
  }
}
