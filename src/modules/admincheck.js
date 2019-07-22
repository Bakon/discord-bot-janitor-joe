// To be implemented on every command that requires an admin check

export const admincheck = message => {
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.channel
      .send(
        `Sorry ${message.author.username}, but you don't have permission to do that!`
      )
      .then(message => {
        message.delete(5000);
      });
    return;
  }
};
