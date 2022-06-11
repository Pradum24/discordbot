const Discord = require("discord.js")
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setTitle("Server Info")
 .setDescription(`${message.guild}'s Information.`)
 .addField("Member Count", `This server has ${message.guild.memberCount} member(s).`)
 .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emoji(s).`)
 .addField("Roles Count", `This server has ${message.guild.roles.cache.size} role(s).`)
 message.channel.send({embeds:[embed]})
}
exports.name = "serverinfo"