const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`


let randomWord = require('random-words');

module.exports = {
    name: 'typerace',
    category: "games",
    description: 'type race with other people!',
    usage: '?typerace',
    aliases: ['type', 'fast-type'],
    timeout: 10,
    run : async (client, message, args) => {

    let word = randomWord()

    let desc1 = `**Game begins in 5 seconds...**\nGame begins in 4 seconds...\nGame begins in 3 seconds...\nGame begins in 2 seconds...\nGame begins in 1 second...`

    let desc2 = `Game begins in 5 seconds...\n**Game begins in 4 seconds...**\nGame begins in 3 seconds...\nGame begins in 2 seconds...\nGame begins in 1 second...`

    let desc3 = `Game begins in 5 seconds...\nGame begins in 4 seconds...\n**Game begins in 3 seconds...**\nGame begins in 2 seconds...\nGame begins in 1 second...`

    let desc4 = `Game begins in 5 seconds...\nGame begins in 4 seconds...\nGame begins in 3 seconds...\n**Game begins in 2 seconds...**\nGame begins in 1 second...`

    let desc5 = `Game begins in 5 seconds...\nGame begins in 4 seconds...\nGame begins in 3 seconds...\nGame begins in 2 seconds...\n**Game begins in 1 second...**\nThe word is...`

    let desc6 = `Game begins in 5 seconds...\nGame begins in 4 seconds...\nGame begins in 3 seconds...\nGame begins in 2 seconds...\nGame begins in 1 second...\n**The word is... ${word}**`
     
    let e = new MessageEmbed()
    .setTitle(`Fast Typer`)
    .setDescription(`**Choosing a word...**`)
    .setTimestamp()
    .setColor('#990002')

    let sentMsg = await message.channel.send({embeds: [e]})
    
    setTimeout(() => 
    sentMsg.edit({embeds: [e.setDescription(desc1).setColor("#b90403")]}).then(m1 => 
    setTimeout(() => 
    m1.edit({embeds: [e.setDescription(desc2).setColor("#fe0000")]}).then(m2 => 
    setTimeout(() => 
    m2.edit({embeds:[e.setDescription(desc3).setColor("#be6103")]}).then(m3 => 
    setTimeout(() => 
    m3.edit({embeds: [e.setDescription(desc4).setColor("#db6f03")]}).then(m4 => 
    setTimeout(() => 
    m4.edit({embeds: [e.setDescription(desc5).setColor("#fe7b03")]}).then(m5 => 
    setTimeout(() => 
    m5.edit({embeds: [e.setDescription(desc6).setColor("#05fb05")]}),
    1000)), 
    1000)), 
    1000)), 
    1000)), 
    1000)), 
    1000)

    const collector = message.channel.createMessageCollector({time: 20000});

    let winner;

    collector.on('collect', async collect => {
      if(collect.author.bot) return;
      if(collect.content.toLowerCase() == word.toLowerCase()) {
        winner = collect.author
        collector.stop('someone answered')
        collect.react("🎉")
      }
    })

    collector.on('end', async (collected, reason) => {
      if(reason == 'someone answered') {
        sentMsg.edit({embeds: [e.setDescription(`Game begins in 5 seconds...\nGame begins in 4 seconds...\nGame begins in 3 seconds...\nGame begins in 2 seconds...\nGame begins in 1 second...\n\nThe word is ${word}\n\n**GG!**\n**The winner is** ${winner}`).setColor("#ffe65a")]})
      } else if(reason == 'time') {
        sentMsg.edit({embeds: [e.setDescription(`**You guys were to late to type the word correctly!**`).setColor("#940401")]})
      }
      
    })

}
}