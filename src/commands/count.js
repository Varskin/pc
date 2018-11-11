exports.run = (message, args) => {
  message.channel
    .send({ embed: { description: 'Pinging...' } })
    .then(newMessage => {
      newMessage.edit({
        embed: {
          title: 'Pong! 🏓',
          description: `${newMessage.createdTimestamp -
            message.createdTimestamp} ms ${playing}`
        }
      });
    })
    .catch(error => console.log(error));
};
