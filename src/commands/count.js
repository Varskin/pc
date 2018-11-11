const get = require('simple-get')
$ npm install superagent
exports.run = (message, args) => {
  var playing
  get.concat('http://games.roblox.com/v1/games/2487325459/servers/Public?sortOrder=Asc&limit=10', function (err, res, data) {
  if (err) throw err
  playing = data // Buffer('this is the server response')
  })
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
