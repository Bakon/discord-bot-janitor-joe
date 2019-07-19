import fetch from 'node-fetch';
import {parse} from 'node-html-parser';

export const getPlayerStats = searchQuery => {
  return fetch(`https://euw.op.gg/summoner/userName=${searchQuery}`)
    .then(res => res.text())
    .then(html => {
      const parsedHTML = parse(html);
      const username = parsedHTML.querySelector('.Profile .Name').rawText;
      const pastRankList = parsedHTML
        .querySelector('.PastRankList')
        .childNodes.toString();

      let allSeasonsPlayed = parsedHTML
        .querySelectorAll('.PastRankList li')
        .map(li => {
          return [
            'Season ' + li.querySelector('b').rawText.substr(1, 1),
            li.attributes.title || li.rawText.trim().slice(3),
          ];
        });

      const currentStats =
        parsedHTML.querySelector('.TierRank').innerHTML +
        ' ' +
        parsedHTML.querySelector('.LeaguePoints').innerHTML.trim();

      allSeasonsPlayed.push(['Current', currentStats]);

      const firstColumnLengths = allSeasonsPlayed.map(s => s[0].length);
      const lastColumnLengths = allSeasonsPlayed.map(s => s[1].length);
      const firstColumnMax = Math.max(...firstColumnLengths);
      const lastColumnMax = Math.max(...lastColumnLengths);

      const stats = allSeasonsPlayed.map(season => {
        return [
          season[0].padEnd(firstColumnMax, ' '),
          season[1].padEnd(lastColumnMax, ' '),
        ];
      });

      stats.reverse();

      const finalStats = stats.map(columns => {
        return `\`| ${columns[0]} | ${columns[1]} |\``;
      });

      const userLength = username.length + 1;
      // - 6 because white space & backticks (``)
      const maxLength = finalStats[0].length - 6;

      finalStats.unshift(
        `\`+ ${username} ${'-'.repeat(maxLength - userLength)} +\``
      );
      finalStats.push(`\`+ ${'-'.repeat(maxLength)} +\``);

      return {
        username,
        stats: finalStats,
      };
    });
};
