//   runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
//     let mentionedUser = msgObject.mentions.users.first();
//     let suppliedReason = args.slice(1).join(' ') || `${msgObject.author.username} did not supply reason.`;
//     let banLog = `${msgObject.author.username}: ${suppliedReason}`;

//     msgObject.delete(0);

//     if (!msgObject.member.hasPermission('ADMINISTRATOR')) {
//       msgObject.channel.send(`Sorry ${msgObject.author.username}, but you don't have permission to do that!`)
//       .then(msg => {
//           (msg as Discord.Message).delete(5000);
//         });
//       return;
//     }

//     if (!mentionedUser) {
//       msgObject.channel.send(`Sorry ${msgObject.author.username}, I couldn't find that user!`)
//       .then(msg => {
//           (msg as Discord.Message).delete(5000);
//         });
//       return;
//     }

//     msgObject.guild.member(mentionedUser).ban(banLog)
//       .then(console.log)
//       .catch(console.error)
//   }
// };

import Discord from 'discord.js';

export const run = async (bot, message, args) => {

  message.channel.send('Cannot send an empty string!');
}

export const config = {
  name: 'ban',
  aliases: []
};