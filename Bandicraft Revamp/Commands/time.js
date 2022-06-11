exports.run = (client, message, args) => {
 const currentDate = new Date();
 message.channel.send(currentDate.toLocaleString());
}

exports.name = "time"