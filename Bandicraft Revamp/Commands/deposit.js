const Database = require("@replit/database")
const db = new Database()
const discord = require("discord.js");

module.exports = {
  name: "deposit",
  category: "economy",
  aliases: ["dep", "deposit"],
  description: "Deposit Money From Your Bal",
  usage: "deposit <amount> }",
  run: async (client, message, args) => {
    let wallet = await db.get(`wallet_${message.author.id}`)
    let amount = parseInt(args[0]);
    let bank = await db.get(`bank_${message.author.id}`)

    if (!amount) {
      message.channel.send(`Provide the amount of money to deposit please.`)
    } else if (isNaN(amount)) {
      message.channel.send(`Provide a real amount of money in numbers to deposit.`)
    } else if (amount > wallet) {
      message.channel.send(`Hey You Dont have Enough Money In Your Wallet.`)
    } else if (args[0] == "max" || args[0] == "all") {
      await db.set(`wallet_${message.author.id}`, wallet - wallet)
      await db.set(`bank_${message.author.id}`, bank + wallet)
      message.channel.send(`You Have deposited **${amount.toLocaleString()}** in your bank!!`)
    } else {
      await db.set(`wallet_${message.author.id}`, wallet - amount)
      await db.set(`bank_${message.author.id}`, bank + amount)
      message.channel.send(`You have deposited **${amount.toLocaleString()}** in your bank`)
    }
  }
};