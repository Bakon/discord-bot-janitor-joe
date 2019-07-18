const fetch = require('node-fetch');

export const getPlayerStats = username => {
  const pastRanks = /<li class="Item tip" title="([^"]+)"/gm;
  const currentRank = /<meta name="description" content="[^/]+\/([^/]+)/gm;

  return fetch(`https://euw.op.gg/summoner/userName=${username}`)
    .then(res => res.text())
    .then(html => {
      const currentMatch = currentRank.exec(html);
      const current = currentMatch
        ? currentMatch[1].trim()
        : console.log(username);

      const past = [];
      let pastMatch = null;

      while ((pastMatch = pastRanks.exec(html))) {
        past.push(pastMatch[1].trim());
      }
      return {
        username,
        stats: [current, ...past],
      };
    });
};
