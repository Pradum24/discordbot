module.exports = {
 name: "coinflip",
 aliases: [],
 description: "Flips the coin",
 usage: "prefix + coinflip",
 run: async (client, message, args) => {
    let replies = [`> **Heads**`, `> **Tails**`]
    message.channel.send("Coin is flipping..").then(m => {
      setTimeout(() => m.edit(replies[Math.floor(Math.random() * replies.length)]), 2200)
    });
 }
}