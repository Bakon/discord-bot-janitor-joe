import GetPlayerStats from '../../modules/getplayerstats';

export default class Stats {
  static name = 'stats';
  static aliases = ['getstats', 'roastme'];
  static description = 'Fetches requested user ranked stats';

  static run(bot, message, args) {
    const input = args.join('+');
    GetPlayerStats.run(input).then(result => {
      message.channel.send('\u200b\n' + result.stats.join('\n'));
    });
  }
}
