import fetch from 'node-fetch';
import {parse} from 'node-html-parser';

export const getPlayerStats = username => {
  return fetch(`https://euw.op.gg/summoner/userName=${username}`)
    .then(res => res.text())
    .then(html => {
      const parsedHTML = parse(html);
      const pastRankList = parsedHTML
        .querySelector('.PastRankList')
        .childNodes.toString();

      const currentSeason =
        'Current: ' +
        parsedHTML.querySelector('.TierRank').innerHTML +
        ' ' +
        parsedHTML.querySelector('.LeaguePoints').innerHTML.trim();

      let previousSeasonsPlayed = parsedHTML
        .querySelectorAll('.PastRankList li')
        .map(li => {
          return [
            'Season ' + li.querySelector('b').rawText.substr(1, 1),
            li.attributes.title === undefined
              ? li.rawText.trim().substr(3, 4)
              : li.attributes.title,
          ].join(': ');
        });

      previousSeasonsPlayed.reverse();

      return {
        username,
        stats: [currentSeason, ...previousSeasonsPlayed],
      };
    });
};
