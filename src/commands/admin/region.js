import Admincheck from '../../modules/admincheck';

export default class Region {
  static name = 'region';
  static aliases = ['changeregion'];
  static description =
    'Changes the server region between EU-west and EU-central';

  static run(bot, message) {
    Admincheck.run(message);

    let currentRegion = message.guild.region;
    let otherRegion =
      message.guild.region === 'eu-central' ? 'eu-west' : 'eu-central';

    if (message.guild.region === currentRegion)
      message.guild.setRegion(otherRegion);

    message.channel.send(
      `${message.author.username} changed the region from ${currentRegion} to \`${otherRegion}\` !`
    );
  }
}
