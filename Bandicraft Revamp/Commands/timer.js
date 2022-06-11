const ms = require("ms")
const Discord = require("discord.js")

exports.run = async function (client ,message, args) {

let time = args[0];
 if(!time) return message.reply("Usage: -timer [time] [Reason]");

let reason = args[1];
 if(!reason) return message.reply("Usage: -timer [time] [Reason]")

 message.reply(`I will dm you when the timer s`)

 setTimeout(function(){
 message.author.send(`**Reminder:** ${reason}`);
 message.react("✅")
 }, ms(time));
}