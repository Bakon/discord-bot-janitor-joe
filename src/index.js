import Discord from 'discord.js';
import glob from 'glob';
import {token} from '../token';

const prefix = '/';
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.on('ready', () => {
  bot.user
    .setActivity('Janitor simulator || "/help" for help', {type: 'PLAYING'})
    .then(presence =>
      console.log(
        `${bot.user.username} is online! Activity set to ${
          presence.game ? presence.game.name : 'none'
        }`
      )
    )
    .catch(console.error);
});

glob.sync(`${__dirname}/commands/*.js`).forEach(filePath => {
  let commandClass = require(filePath);

  bot.commands.set(commandClass.config.name, commandClass);
  commandClass.config.aliases.forEach(alias => {
    bot.aliases.set(alias, commandClass.config.name);
  });
});

bot.on('message', async message => {
  if (message.author.bot || message.channel.type === 'dm') return;
  if (!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandFile =
    bot.commands.get(cmd.slice(prefix.length)) ||
    bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));

  if (commandFile) commandFile.run(bot, message, args);
});

bot.login(token);
