import glob from 'glob';

let commandsObj = {};

glob.sync('src/commands/*/*.js').map(filePath => {
  return (commandsObj[filePath.split('/')[2]] = []);
});

glob.sync('src/commands/*/*.js').map(filePath => {
  return commandsObj[`${filePath.split('/')[2]}`].push(
    filePath.split('/')[3].split('.')[0]
  );
});

export const config = {
  name: 'help',
  aliases: ['h', 'commands'],
  description: "Displays the help command,\n for general help type '/help' lol",
};

export const run = async (bot, message, args) => {
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
          name: '\u200b',
          value: '\u200b',
        },
        {
          name: 'General commands',
          value: `/${commandsObj.general
            .map(command => command + '\n')
            .join('/')}`,
        },
        {
          name: '\u200b',
          value: '\u200b',
        },
        {
          name: 'League commands',
          value: `/${commandsObj.league
            .map(command => command + '\n')
            .join('/')}`,
        },
        {
          name: '\u200b',
          value: '\u200b',
        },
        {
          name: 'Music commands (WIP)',
          value: `/${commandsObj.music
            .map(command => command + '\n')
            .join('/')}`,
        },
        {
          name: '\u200b',
          value: '\u200b',
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
          name: `Command /${command.config.name}`,
          icon_url: bot.user.displayAvatarURL,
        },
        fields: [
          {
            name: `${command.config.name}`,
            value: `${command.config.description}`,
          },
          {
            name: '\u200b',
            value: '\u200b',
          },
          {
            name: 'Aliases',
            value: `/${command.config.aliases
              .map(alias => alias + '\n')
              .join('/') || 'none'}`,
          },
        ],
      };
      message.channel.send({embed: commandEmbed});
    }
  }
};
