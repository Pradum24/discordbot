const { MessageEmbed } = require('discord.js');
const PREFIX = "r."
const db = require('quick.db');


 module.exports = {
 name: "shop",
 description: "shop ",
 category: "economy",
 run: async (bot, message, args) => {
 let prefix;
 let fetched = await db.fetch(`prefix_${message.guild.id}`);

 if (fetched === null) {
 prefix = PREFIX
 } else {
 prefix = fetched
 }
 
 let embed = new MessageEmbed()
   
 .setDescription(`Soon...`)
 .setFooter("My Prefix Is -")
 .setColor("RANDOM")
 message.channel.send( {embeds: [embed] } )
 }
}