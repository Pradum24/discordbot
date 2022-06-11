// const { MessageEmbed } = require("discord.js");
// const db = require("quick.db")


// module.exports = {
//   name: "buy",
//   aliases: [],
//   description: "buy an item",
//   usage: "buy",
//   run: async (client, message, args) => {
//   let user = message.author;
//  let userBalancee = await db.fetch(`cash_${user.id}`);
//     let userBalance = parseInt(userBalancee)
//  if(userBalance === null) return message.channel.send("Looks like you are poor.");
//  let item = message.content.slice(6).trim();
//  if (!item) return message.channel.send("What are you trying to buy?");
//  let hasItem = client.shop[item.toLowerCase()];
//  if (!hasItem || hasItem == undefined) return message.reply("That item doesnt exists lol");
//  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
//  if (userBalance+1 < parseInt(hasItem) )return message.reply("Your balance is insufficient. You need $"+hasItem+" to buy this item.");
//  let buy = db.subtract(`cash_${message.author.id}`, hasItem);
 
//  let itemStruct = {
//    name: item.toLowerCase(),
//    price: hasItem
//    }
//  await db.push(`items_${message.author.id}`, itemStruct); 
//  return message.channel.send(`You purchased **${item}** for **$${hasItem}**.`);
// }
// }