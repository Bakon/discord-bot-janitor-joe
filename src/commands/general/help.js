import glob from 'glob';

export default class Help {
  static name = 'help';
  static aliases = ['h', 'commands'];
  static description =
    "Displays the help command,\n for general help type '/help' lol";

  static run(bot, message, args) {
    let commandsObj = {};
    glob.sync('src/commands/*/*.js').forEach(filePath => {
      return (commandsObj[filePath.split('/')[2]] = []);
    });

    glob.sync('src/commands/*/*.js').forEach(filePath => {
      const filePartPath = filePath.split('/');
      return commandsObj[filePartPath[2]].push(filePartPath[3].split('.')[0]);
    });

    // Has a bug where it overwrites the array value with the new specified value
    // instead of ading it to the array each iteration

    // const commandsObj = glob
    //   .sync('src/commands/*/*.js')
    //   .reduce((commandsObj, filePath) => {
    //     const filePartPath = filePath.split('/');

    //     commandsObj[filePartPath[2]] = [filePartPath[3].split('.')[0]];
    //     return commandsObj;
    //   }, {});

    if (args == '') {
      const helpEmbed = {
        color: 0x738ad7,
        description: 'List of available commands',
        thumbnail: {
          url: message.guild.iconURL,
        },
        author: {
          name: 'General help',
          icon_url: bot.user.displayAvatarURL,
        },
        fields: [
          {
            name: 'Admin commands',
            value: `/${commandsObj.admin
              .map(command => command + '\n')
              .join('/')}`,
          },
          {
            name: 'General commands',
            value: `/${commandsObj.general
              .map(command => command + '\n')
              .join('/')}`,
          },
          {
            name: 'League commands',
            value: `/${commandsObj.league
              .map(command => command + '\n')
              .join('/')}`,
          },
          {
            name: 'Music commands',
            value: `/${commandsObj.music
              .map(command => command + '\n')
              .join('/')}`,
          },
          {
            name: 'Reddit commands',
            value: `/${commandsObj.reddit
              .map(command => command + '\n')
              .join('/')}`,
          },
        ],
      };
      message.channel.send({embed: helpEmbed});
    }

    if (args[0]) {
      let command = args[0];
      if (bot.commands.has(command)) {
        command = bot.commands.get(command);
        const commandEmbed = {
          color: 0x738ad7,
          thumbnail: {
            url: message.guild.iconURL,
          },
          author: {
            name: `Command /${command.name}`,
            icon_url: bot.user.displayAvatarURL,
          },
          fields: [
            {
              name: `${command.name}`,
              value: `${command.description}`,
            },
            {
              name: '\u200b',
              value: '\u200b',
            },
            {
              name: 'Aliases',
              value: `/${command.aliases.map(alias => alias + '\n').join('/') ||
                'none'}`,
            },
          ],
        };
        message.channel.send({embed: commandEmbed});
      }
    }
  }
}
