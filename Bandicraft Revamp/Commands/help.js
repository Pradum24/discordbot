const Discord = require("discord.js")

const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")



module.exports = {
  name: "help",
  run: async(client, message, args ) => {
    

const row = new MessageActionRow()
 .addComponents(
 new MessageSelectMenu()
 .setCustomId("selectmenu")
 .setPlaceholder("Choose a category!") 
 .addOptions([
 {
 label: "Moderation", 
 description: "View all the moderation commands!",
 emoji: "⚒️", 
 value: "mod"
 },
   {
label: "Fun",
description: "View all the fun commands!",
     emoji: "🧩",
     value: "fun"
}, 
   {
     label: "Information",
     description: "Informative commands!",
     emoji: "📖",
     value: "info"
   },
     {
label: "Games",
       description: "See all the minigames!",
       emoji: "🥅",
       value: "games"
},
   {
     label: "Translations",
description: "View all the translation related commands!",
     emoji: "🔢",
     value: "trl"
   },
   {
label: "Time",
     description: "Time related commands.",
     emoji: "🕜",
     value: "time"
   },
   {
     label: "Support",
     description: "Support commands.",
     emoji: "🎟️",
     value: "support"
   },
   {
label: "NSFW",
     description: "NSFW commands.",
     emoji: "🔞",
     value: "nsfw"
   },
   {
label: "Economy",
     description: "Economic and miscellaneous commands.",
     emoji: "💹",
     value: "eco"
   }
 ])
 );
 

  const main = new Discord.MessageEmbed()
  .setTitle(`**${client.user.username}'s** Command List`)
  .addField("Total Commands", "**36**")
  .addField("🪓 Moderation Commands", "```Mute, Unmute, Ban, Kick, Say, Membercount,  Clear, Purge,  ```")
  .addField("🕶️ Usefull Commands", "```Tips, Ping, Whois, ServerInfo, ```")
  .addField("😸 Fun Commands", "```Bed, Rps, Zaglo, Wasted, SuS, 8ball, Dice, ```")
  .addField("🐱 Other Commands", "```Invite, Send, Help, Banner, ```")
  .addField("🔢 Language Command", "```Translate, Emojify, ```")
  .addField("🏈 Game Command", "```Football, Snake, Coinflip, ```")
  .addField("🕐 Timing Commands", "```Time, Timer, Uptime, ```")
  .addField("🔢 Search Command", "```Google, Wiki, ```")
  .addField("📛 NSFW Commands", "```PPSize, Boobs, Sexy, Hentai```")
  .addField("⚒️ Ticket Commands", "```Ticket, ```")
  .addField("⚡ Report Commands", "```Report, ```")
  .addField("💲 Economy Commands", "```Bal, Daily, Withdraw, Deposit, Beg, Work, Inventory, ```")
  .setFooter("My prefix is - ,  ")
  .setColor("RANDOM")
  .setTimestamp()




 
message.channel.send({components: [row], embeds: [main]})
 
 
 const modembed = new MessageEmbed()
    .addField("**7** Total Moderation Commands ⚒️", "```ban, kick, say, membercount, sudo, clear, purge```")
    .setColor("RED")
    .setFooter("Permissions: Staff")

    const funembed = new MessageEmbed()
    .addField("**7** Total Fun Commands 🧩", "```bed, rps, zalgo, wasted, sus, 8ball, dice```")
    .setColor("GREEN")
    .setFooter("No permissions required.")

    const infoembed = new MessageEmbed()
    .addField("**8** Total Information Commands ℹ️", "```tips, ping, whois, serverinfo, help, invite, banner, send```")
    .setColor("BLUE")
    .setFooter("No permissions required.")

    const gameembed = new MessageEmbed()
    .addField("**3** Total Game Commands 🥅", "```football, snake, coinflip```")
    .setColor("ORANGE")
    .setFooter("No permissions required.")
 
 const transembed = new MessageEmbed()
    .addField("**2** Total Translation Commands 📖", "```translate, emojify```")
    .setColor("GREY")
    .setFooter("No special permissions required.")
 
 const timeembed = new MessageEmbed()
    .addField("**3** Total Time Commands ⌚", "```timer, time, uptime```")
    .setColor("GOLD")
    .setFooter("Make sure that your dms are on while using the timer command.")
 
 const supportembed = new MessageEmbed()
    .addField("**2** Total Support Commands 🎫", "```ticket, report```")
    .setColor("WHITE")
    .setFooter("No permissions required for report, sen")

    const nsfwembed = new MessageEmbed()
    .addField("**1** Total NSFW Commands 🔞", "```ppsize, sexy, boobs, hentai```")
    .setColor("RED")
    .setFooter("No permissions required.")

const ecoembed = new MessageEmbed()
.addField("**7** Total Economy Commands 📖", "```bal, work, deposit, withdraw, deposit, beg, inventory```")
    .setColor("GREEN")
    .setFooter("No specific permissions required.")

 const filter = (interaction) =>
interaction.isSelectMenu() &&
interaction.user.id === message.author.id;


const collector = message.channel.createMessageComponentCollector({
filter,
max: "10000", 
});


 collector.on("collect", async (collected) => {
const value = collected.values[0];

  
if(value === "mod") {
 collected.update({embeds: [modembed]});
 }
if(value === "fun") {
 collected.update({embeds: [funembed]});
}
 if(value === "info") {
 collected.update({embeds: [infoembed]});
 }

   if(value === "games") {
 collected.update({embeds: [gameembed]});
   }
if(value === "trl") {
 collected.update({embeds: [transembed]});
}
 if(value === "time") {
 collected.update({embeds: [timeembed]});
 }
if(value === "support") {
 collected.update({embeds: [supportembed]});
}
   if(value === "nsfw") {
 collected.update({embeds: [nsfwembed]});
   }
   if(value === "eco") {
 collected.update({embeds: [ecoembed]});
   }
  });
  }
}

