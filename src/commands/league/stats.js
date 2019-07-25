import Base from '../../modules/base';
import getPlayerStats from '../../modules/getplayerstats';

export default class Stats extends Base {
  static name = 'stats';
  static aliases = ['getstats', 'roastme'];
  static description = 'Fetches requested user ranked stats';

  static run(bot, message, args) {
    const input = args.join('+');
    getPlayerStats(input).then(user => {
      message.channel.send(
        '\u200b\n' +
          this.makeTable(
            [['hello', 'hello'], ['hello', 'hello']],
            user.username
          ) +
          '\n'
      );
    });
  }
}
