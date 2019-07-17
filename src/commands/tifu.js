import Discord from 'discord.js';
import fetch from 'node-fetch';

export const config = {
  name: 'tifu',
  aliases: []
};

export const run = async (bot, message, args) => {
  const postCollection = [];
  const postsList = [];
  
  const getPosts = () => {
    return fetch('https://www.reddit.com/r/tifu/new.json?sort=new')
        .then(res => res.json())
          .then(json => {
            json.data.children.map(postData => {
              let postTitle = postData.data.title;
              let postUrl = postData.data.url;
              let postContent = postData.data.selftext;
              postsList.push(`<${postUrl}>`);
              if (postContent.length <= 1750) postCollection.push([postTitle, postContent, postUrl]);
            })
          })
  }
  
  if (args == 'list') {
    getPosts().then(() => {
      message.channel.send(postsList.slice(0, 20).map(posts => posts))
    });
    return;
  }
  
  getPosts().then(() => {
    let random = [Math.floor(Math.random() * postCollection.length)];

    message.channel.send(postCollection[Math.floor(Math.random() * postCollection.length)])
    postCollection.splice([Math.floor(Math.random() * postCollection.length)], 1);
  })
}