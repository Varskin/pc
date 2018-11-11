exports.run = (message, args) => {
  message.channel
    .send({ embed: { description: 'Pinging...' } })
    .then(newMessage => {
      newMessage.edit({
        embed: {
          title: 'Pong! 🏓',
          description: `${newMessage.createdTimestamp -
            message.createdTimestamp} ms ${fetchNumPlayersInGame(args)}`
        }
      });
    })
    .catch(error => console.log(error));
};

function fetchNumPlayersInGame(placeUrl) {

return new Promise((resolve, reject) => {
    request(placeUrl, (err, response, body) => {
        if (err) reject(err)
        else {
            let $ = cheerio.load(body)
            resolve($('.game-stat .text-lead').first().text())
        }
    })
}) 
}
