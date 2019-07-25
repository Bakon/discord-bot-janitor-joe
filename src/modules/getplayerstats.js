import fetch from 'node-fetch';
import {parse} from 'node-html-parser';

export default function getPlayerStats(searchQuery) {
  return fetch(`https://euw.op.gg/summoner/userName=${searchQuery}`)
    .then(res => res.text())
    .then(html => {
      const parsedHTML = parse(html);
      const username = parsedHTML.querySelector('.Profile .Name').rawText;
      const user = {
        username,
        seasons: [],
      };

      parsedHTML.querySelectorAll('.PastRankList li').forEach(li => {
        const [_, tier, rank, leaguePoints] =
          /^(\w+)(?: (\d+)(?: (\d+))?)?/g.exec(
            li.attributes.title || li.rawText.trim().slice(3)
          ) || [];
        const seasonElement = li.querySelector('b');

        user.seasons.push({
          season: seasonElement
            ? parseInt(seasonElement.rawText.substr(1, 1))
            : -1,
          tier: (tier || 'unknown').toLowerCase(),
          rank: parseInt(rank) || 4,
          leaguePoints: parseInt(leaguePoints) || 0,
        });
      });

      const leaguePoints =
        parsedHTML.querySelector('.LeaguePoints') !== null
          ? parsedHTML.querySelector('.LeaguePoints').innerHTML.trim()
          : '0';

      const [currentTier, currentRank] = parsedHTML
        .querySelector('.TierRank')
        .innerHTML.toLowerCase()
        .split(' ');

      user.seasons.push({
        season: null,
        tier: currentTier,
        rank: parseInt(currentRank),
        leaguePoints: parseInt(leaguePoints),
      });

      return user;
    });
}
