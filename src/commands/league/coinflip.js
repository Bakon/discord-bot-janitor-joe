export default class Coinflip {
  static name = 'coinflip';
  static aliases = ['rng'];
  static description = 'Rolls a coin to determine the outcome of the game';

  static run(bot, message) {
    const coinflip = () => {
      switch (Math.floor(Math.random() * 10)) {
        case 1:
          return 'Your toplaner ends up taking the first tower at 10 minutes, `you win`';
        case 2:
          return 'Your midlaner rotates while theirs is failing last hits on mid, `you win`';
        case 3:
          return 'Your adc has a 100CS lead at 15 mins, `you win`';
        case 4:
          return "Your support ends up 1v2'ing the enemy botlane, `you win`";
        case 5:
          return 'Your jungler shits on the enemy in "their" jungle, `you win`';
        case 6:
          return 'Your toplaner has a gray screen for 75% of the game, `you lose`';
        case 7:
          return 'You midlaner "gets camped", `you lose`';
        case 8:
          return 'Your adc is too tilted to perform, `you lose`';
        case 9:
          return 'Your "support" never even bought a support item, `you lose`';
        case 10:
          return 'Your jungler fails the only smite that actually matters, `you lose`';
      }
    };
    message.channel.send(coinflip());
  }
}
