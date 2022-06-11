const Discord = require('discord.js')


module.exports.run = async(client, message, args) => {




if(message.author.id !== "909785459129999370") return message.channel.send(`:x: | Only The Owner Can Use This Command`)
message.channel.send("🔔 | Shutting Down...")
process.exit();

}
