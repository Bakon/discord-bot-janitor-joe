import Discord from 'discord.js';
import fetch from 'node-fetch';


export const run = async (bot, message, args) => {
  // fetch('https://www.reddit.com/r/tifu/new.json?sort=new')
  //   .then(res => res.json())
  //   .then(json => console.log(JSON.stringify(json.data.children)));

  message.channel.send('Kys Crackie');
}

export const config = {
  name: 'tifu',
  aliases: []
};