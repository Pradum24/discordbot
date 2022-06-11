const db = require("quick.db")
const Discord = require("discord.js")


module.exports = {
  name: "give",
  aliases: ["gv"],
  category: "economy",
  run: async (client, message, args) => {
    let user = message.mentions.members.first() || message.author
    let wallet = await db.fetch(`cash_${message.author.id}`)
    let userbal = await db.fetch(`cash_${user.id}`)
    let amount = parseInt(args[1]);
    if(!user) return message.reply("Who are you gonna give money to?")
    if (!amount) {
      message.channel.send(`Usage: **;give @user (amount)** By the way: **Don't do it to yourself, if you do, you'll lose that amount of money!**`)
    } else if (isNaN(amount)) {
      message.channel.send(`Provide a real amount of money in numbers to give.`)
    } else if (amount > wallet) {
      message.channel.send(`Hey, you don't have enough money in your wallet.`)
  } else {
      await db.set(`cash_${message.author.id}`, wallet - amount)
      await db.set(`cash_${user.id}`, userbal + amount)
      message.channel.send({ content: `You have gifted **₿${amount}** to ${user.user.tag}.`})  
    }
}
}