import {permission} from '../../functions/permission';

export const config = {
  name: 'region',
  aliases: ['changeregion'],
};

export const run = async (bot, message, args) => {
  permission(message);

  let currentRegion = message.guild.region;
  let otherRegion =
    message.guild.region === 'eu-central' ? 'eu-west' : 'eu-central';

  if (message.guild.region === currentRegion)
    message.guild.setRegion(otherRegion);

  message.channel.send(
    `${message.author.username} changed the region to ${currentRegion} !`
  );
};
