const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate')

module.exports.run = async(Client, message, args, prefix) => {
  const txt = message.content.split(" ").slice(2).join(" ")
  const lang = args[0]
  if (!lang) return message.channel.send(`Provide an ISO code of the language! Example: \`translate en (your word)\``)
  if (!txt) return message.channel.send("Provide some text to translate!")
  translate(txt, { to: lang }).then(res => {
    const tlate = new Discord.MessageEmbed()
      .setDescription(res.text)
      .setColor("#34eb3a")
    message.channel.send({ embeds: [tlate] })
  }).catch(err => {
    message.channel.send("Provide a valid ISO code!")
  })
}

module.exports.help = {
  name: "translate"
}