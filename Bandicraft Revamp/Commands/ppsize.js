const Discord = require("discord.js")
exports.run = (client, message, args) => {

 if(!message.channel.nsfw) {
 return message.reply("This channel dosen't support nsfw content")
 
 } else {
let replies = ["=3", "==3", "===3", "====3", "=====3", "======3", "=======3", "THE ULTIMATE PP SIZE"]
message.channel.send(replies[Math.floor(Math.random() * replies.length)]) 

}
}

exports.name = "PPSize"