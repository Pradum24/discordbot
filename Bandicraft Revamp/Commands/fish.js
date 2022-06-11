const db = require("quick.db")

//const db = require("quick.db")
module.exports = {
  name: "fish",
  aliases: [],
  description: "fish for things",
  run: async (client, message, args) => {
    //pog oksy so now, since we stashed the inventory trough an object, lets make it all an object
const num = Math.floor(Math.random() * 100)
if(num < 50) {
const num2 = Math.floor(Math.random() * 2)
if(num2 == 1) {
message.channel.send("You've Cough A Fish!")
  const e = {
    name: "fish"
  }
  await db.push(`items_${message.author.id}`, e)
   // 
} if (num2 == 2) {
  message.channel.send("You Got A Rare Pink Axoltl")
  const e = {
    name: "Pink Axolotl"
  }
  await db.push(`items_${message.author.id}`, e)
}
//pink axolotl
} if(num  > 75) {
message.channel.send("You Fished And Got An Axoltl")
  const e = {
    name: "Axoltl"
  }
  await db.push(`items_${message.author.id}`, e)
} if(num < 1) {
//black axolotl
  message.channel.send("You Got An Ultra Rare Black Axoltl")
  const e = {
    name: "Black Axolotl"
  }
  await db.push(`items_${message.author.id}`, e)
}


  }
}