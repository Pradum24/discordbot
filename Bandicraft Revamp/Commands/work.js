const Database = require("@replit/database")
const db = new Database()
const ms = require('pretty-ms');

module.exports = {
  name: "work",
  run: async (client, message, args) => {
    const check = await db.get(`srCheck_${message.author.id}`);
    const timeout = 3600000;

    if (check !== null && timeout - (Date.now() - check) > 0) {
      const timeLeft = ms(timeout - (Date.now() - check))
      if (timeLeft) {
        message.channel.send(`You Need To Wait **${timeLeft}** To Work Angin`)
      }
    } else {
      let amount = [125762, 522444, 1, 824, 12510, 1323455, 932460, 661912, 341314, 19334, 114233];
      let reward = amount[Math.floor(Math.random() * amount.length)];
      let wallet = await db.get(`wallet_${message.author.id}`);

      await db.set(`wallet_${message.author.id}`, wallet + reward)
      message.channel.send(`You got **$${reward}** For Working Today`)
      await db.set(`srCheck_${message.author.id}`, Date.now())
    }
  }
}