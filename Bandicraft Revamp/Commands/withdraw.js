const Database = require("@replit/database")
const db = new Database()

exports.run = async(client, message, args) => {
  let amount = parseInt(args[0]);
  let balance = await db.get(`wallet_${message.author.id}`)
  let bank = await db.get(`bank_${message.author.id}`)
  let total = balance + bank;

  if (balance === null) balance = 0
  if (bank === null) bank = 0
  if (total === null) total = 0
  
  if (!amount) {
    message.reply("You have to provide some money to withdraw")
  } else if (isNaN(amount)) {
    message.reply("Not Enough Money")
  } else if (amount > bank) {
    message.reply("You Dont Have Enough Money!")
  } else if (args[0] == "max" || args[0] == "all") {
    await db.set(`wallet_${message.author.id}`, balance + balance)
    await db.set(`bank_${message.author.id}`, bank - balance)
    message.reply(`You have withdrawed ${amount.toLocaleString()} in your balance`)
  } else {
    await db.set(`wallet_${message.author.id}`, balance + amount)
    await db.set(`bank_${message.author.id}`, bank - amount)
    message.reply(`You have withdrawed ${amount.toLocaleString()} in your balance`)
  }
}

exports.name = "withdraw"