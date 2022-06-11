const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js');

exports.run = async(client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.MessageEmbed()
 .setTitle("Bandicraft Revamp's Invite Link")
 .setDescription("https://top.gg/bot/928576594535145472 \n Or Else \n https://discord.com/oauth2/authorize?client_id=928576594535145472&permissions=8&scope=bot%20applications.commands )")
 .setColor("RANDOM")
 .setFooter("Made By MashrafiPlays")
 .setTimestamp()

  message.channel.send({embeds:[embed]})
}

exports.name = "invite"