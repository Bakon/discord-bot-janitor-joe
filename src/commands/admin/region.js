import {admincheck} from '../../modules/admincheck';

export const config = {
  name: 'region',
  aliases: ['changeregion'],
  description: 'Changes the server region between EU-west and EU-central',
};

export const run = async (bot, message) => {
  admincheck(message);

  let currentRegion = message.guild.region;
  let otherRegion =
    message.guild.region === 'eu-central' ? 'eu-west' : 'eu-central';

  if (message.guild.region === currentRegion)
    message.guild.setRegion(otherRegion);

  message.channel.send(
    `${message.author.username} changed the region to ${currentRegion} !`
  );
};
