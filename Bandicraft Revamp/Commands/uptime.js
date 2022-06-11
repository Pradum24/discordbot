const { MessageEmbed } = require("discord.js")
const ms = require("pretty-ms")

module.exports = {
  name: "uptime",
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
      .setTitle(`${client.user.username}'s uptime`)
      .setDescription(`${ms(Math.floor(client.uptime))}`)
    let timestamp = `<t:${Math.floor(Date.now()/1000 - client.uptime/1000)}:R>`
    message.channel.send({content: `I was online since ${timestamp}`, embeds: [embed]})
  }
}