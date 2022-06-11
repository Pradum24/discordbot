const Discord = require("discord.js");
const Database = require("@replit/database")
const db = new Database()

exports.run = async(client, message, args) => {
  let balance = await db.get(`wallet_${message.author.id}`)
  let bank = await db.get(`bank_${message.author.id}`)
  let total = balance + bank;

  if (balance === null) balance = 0
  if (bank === null) bank = 0
  if (total === null) total = 0

  let balanceEmbed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username}'s Balance`)
  .addField("Wallet:", `${balance.toLocaleString()}`)
  .addField("Bank:", `${bank.toLocaleString()}`)
  .addField("Total:", `${total.toLocaleString()}`)
  .setColor("RANDOM")
  .setFooter("😎")
  .setTimestamp()
  .setThumbnail("http://www.clker.com/cliparts/A/U/J/c/h/u/stacks-of-money-hi.png")
  message.reply({embeds: [balanceEmbed]})
}

exports.name = "bal"