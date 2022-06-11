const { MessageEmbed } = require("discord.js")
const db = require('quick.db')

module.exports = {
  name: "inventory",
  aliases: [],
  description: "shows your inventory of what you have",
  usage: "inventory",
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
 .setAuthor(`Inventory of ${message.author.tag}`, message.guild.iconURL)
 .setColor("#E973DA")
 .setThumbnail()
 .setTimestamp();
 const x = db.get(`items_${message.author.id}`);
if(!x) { return message.channel.send(`Soon.`); }
const arrayToObject = x.reduce((itemsobj, x) => {
 itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
 return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`Name: ${k}`,`Quantity: **${arrayToObject[k]}**`, false));
 
 
 return message.channel.send({embeds: [embed]});
  }
}