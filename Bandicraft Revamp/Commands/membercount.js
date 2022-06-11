const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.MessageEmbed()
 .setTitle(`${message.guild.memberCount} Member's`)
 .setFooter("My prefix is -")

  message.channel.send({embeds:[embed]})
}

exports.name = "MemberCount"