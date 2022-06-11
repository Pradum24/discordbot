const Discord = require("discord.js")
exports.run = (client, message, args) => {
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.MessageEmbed()
 .setTitle(`${client.user.username}'s Ping`)
 .addField(`My Ping Is:`, `${client.ws.ping} ms`)
 .setColor("RANDOM")
 .setFooter("my prefix is -")
 .setTimestamp()

  message.channel.send({embeds:[embed]})
}

exports.name = "invite"