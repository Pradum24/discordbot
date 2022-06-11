const Database = require("@replit/database")
const db = new Database()

exports.run = async(client, message, args) => {
  const check = await db.get(`dailyCheck_${message.author.id}`);
  const timeout = 86400000;
  if (check !== null && timeout - (Date.now() - check) > 0) {
    const ms = require("pretty-ms")
    const timeLeft = ms(timeout - (Date.now() - check))
    message.reply(`You have already claimed your daily prize bruh... Come back after __${timeLeft}__`)
  } else {
    let reward = 10000
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    message.reply(`GG! You claimed${reward.toLocaleString()} as your daily reward!`)
    await db.set(`wallet_${message.author.id}`, currentBalance + reward)
    await db.set(`dailyCheck_${message.author.id}`, Date.now())
  }
}

exports.name = "daily"