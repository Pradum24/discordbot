const { MessageActionRow, MessageEmbed, MessageButton } = require("discord.js");

module.exports = {
  name: "rock-paper-scissors",
	aliases: ['rockpaperscissors'],
  description: "Play Rock Paper Scissors With Someone",
  usage: "<@user>",
  run: async (client, message, args) => {
let player = message.mentions.users.first();
if(!player){
let embed = new MessageEmbed() 
.setDescription("**Please Mention Someone To Play With**")
.setColor("#6F8FAF")
return message.reply({ embeds: [embed] })
  }
  
if (player.id === message.author.id){
     let embed = new MessageEmbed()
        .setDescription(`**Please Mention Someone Else**`)
         .setColor("#6F8FAF")
    return message.reply({ embeds: [embed] })
}

if (player.bot) {
     let embed = new MessageEmbed()
        .setDescription(`**My Apologies You Cannot Play With A Bot**`)
         .setColor("#6F8FAF")
    return message.reply({ embeds: [embed] })
}

var authorTurns = 0;

var playerTurns = 0;

var authorMove = "Nothing";

var playerMove = "Nothing";

var authorMove2 = "Nothing";

var playerMove2 = "Nothing";

var status = "Nothing"

let rpsButtons = new MessageActionRow()
.addComponents(
new MessageButton()
.setCustomId('rock')
.setLabel('Rock')
.setStyle('PRIMARY')
.setEmoji('🪨'),
new MessageButton()
.setCustomId('paper')
.setLabel('Paper')
.setStyle('PRIMARY')
.setEmoji('📰'),
new MessageButton()
.setCustomId('scissors')
.setLabel('Scissors')
.setStyle('PRIMARY')
.setEmoji('✂️'),
			);
let game = new MessageEmbed()
.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove},\n${player}: ${playerMove}**`)
.setColor("#6F8FAF")

let currentGame = await message.channel.send({ embeds: [game], components: [rpsButtons] })

const collector = currentGame.createMessageComponentCollector({  time: 30000 });

collector.on('collect', async i => {
	if(i.customId === 'rock') {
if(i.user.id === message.author.id){
if(authorTurns === 1)return i.reply({ content: "You Already Chose Your Turn", ephemeral: true })

authorMove = "🪨 | Rock" 
authorTurns += 1
authorMove2 = "Ready"

 await i.reply({content: `You Choose ${authorMove}`, ephemeral: true})
await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove2},\n${player}: ${playerMove}\n\nStatus:\n${status}**`)]})
if(playerTurns && authorTurns === 1){
   if(authorMove && playerMove === "🪨 | Rock"){
      status = "Tie" 
    }

if(authorMove  === "📰 | Paper" && playerMove === "🪨 | Rock"){
      status = `${message.author} Wins`
    }

    if(authorMove  === "🪨 | Rock" && playerMove === "✂️ | Scissors"){
      status = `${message.author} Wins`
    }

if(authorMove  === "🪨 | Rock" && playerMove === "📰 | Paper"){
      status = `${player} Wins`
    }

    if(authorMove  === "✂️ | Scissors" && playerMove === "🪨 | Rock"){
      status = `${player} Wins`
    }

 await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove},\n${player}: ${playerMove}\n\nStatus:\n${status}**`)], components: []})
collector.stop()
}
    


}else if(i.user.id === player.id){
  if(playerTurns === 1)return i.reply({ content: "You Already Chose Your Move", ephemeral: true })
playerMove = "🪨 | Rock" 
playerTurns += 1      
playerMove2 = "Ready"
  
await i.reply({content: `You Choose ${playerMove}`, ephemeral: true})

await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove},\n${player}: ${playerMove2}\n\nStatus:\n${status}**`)]})

if(playerTurns && authorTurns === 1){
   if(authorMove && playerMove === "🪨 | Rock"){
      status = "Tie" 
    }

if(authorMove  === "📰 | Paper" && playerMove === "🪨 | Rock"){
      status = `${message.author} Wins`
    }

    if(authorMove  === "🪨 | Rock" && playerMove === "✂️ | Scissors"){
      status = `${message.author} Wins`
    }

if(authorMove  === "🪨 | Rock" && playerMove === "📰 | Paper"){
      status = `${player} Wins`
    }

    if(authorMove  === "✂️ | Scissors" && playerMove === "🪨 | Rock"){
      status = `${player} Wins`
    }

await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove}, ${player}: ${playerMove}\n\nStatus:\n${status}**`)], components: []})
collector.stop()
}
}else{
await i.reply({ content: "This Is Not Your Game", ephemeral: true })
}
}

if(i.customId === 'paper'){
if(i.user.id === message.author.id){
 if(authorTurns === 1)return i.reply({ content: "You Already Chose Your Turn", ephemeral: true })
authorMove = "📰 | Paper" 
authorTurns += 1
authorMove2 = "Ready"
 await i.reply({content: `You Choose ${authorMove}`, ephemeral: true})
await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove2},\n${player}: ${playerMove}\n\nStatus:\n${status}**`)]})
if(playerTurns && authorTurns === 1){
  if(authorMove && playerMove === "📰 | Paper"){
      status = "Tie" 
    }

    if(authorMove  === "✂️ | Scissors" && playerMove === "📰 | Paper"){
      status = `${message.author} Wins`
    }
    
      if(authorMove  === "📰 | Paper" && playerMove === "✂️ | Scissors"){
      status = `${player} Wins`
    }

if(authorMove  === "📰 | Paper" && playerMove === "🪨 | Rock"){
      status = `${message.author} Wins`
    }


if(authorMove  === "🪨 | Rock" && playerMove === "📰 | Paper"){
      status = `${player} Wins`
    }

await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove}, ${player}: ${playerMove}\n\nStatus:\n${status}**`)], components: []})
collector.stop()
}
}else if(i.user.id === player.id){
  if(playerTurns === 1)return i.reply({ content: "You Already Chose Your Move", ephemeral: true })
playerMove = "📰 | Paper" 
playerTurns += 1      
playerMove2 = "ready"
    
await i.reply({content: `You Choose ${playerMove}`, ephemeral: true})
await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove},\n${player}: ${playerMove2}\n\nStatus:\n${status}**`)]})
if(playerTurns && authorTurns === 1){
  if(authorMove && playerMove === "📰 | Paper"){
      status = "Tie" 
    }

    if(authorMove  === "✂️ | Scissors" && playerMove === "📰 | Paper"){
      status = `${message.author} Wins`
    }
    
      if(authorMove  === "📰 | Paper" && playerMove === "✂️ | Scissors"){
      status = `${player} Wins`
    }

if(authorMove  === "📰 | Paper" && playerMove === "🪨 | Rock"){
      status = `${message.author} Wins`
    }


if(authorMove  === "🪨 | Rock" && playerMove === "📰 | Paper"){
      status = `${player} Wins`
    }

await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove}, ${player}: ${playerMove}\n\nStatus:\n${status}**`)], components: []})
collector.stop()
}
}else{
await i.reply({ content: "This Is Not Your Game", ephemeral: true })
}
} 
if(i.customId === 'scissors'){
if(i.user.id === message.author.id){
if(authorTurns === 1)return i.reply({ content: "You Already Chose Your Turn", ephemeral: true })
authorMove = "✂️ | Scissors" 
authorTurns += 1
authorMove2 = "Ready"

  await i.reply({content: `You Choose ${authorMove}`, ephemeral: true})
await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove2},\n${player}: ${playerMove}\n\nStatus:\n${status}**`)]})
if(playerTurns && authorTurns === 1){
  if(authorMove && playerMove === "✂️ | Scissors"){
      status = "Tie" 
    }

if(authorMove  === "🪨 | Rock" && playerMove === "✂️ | Scissors"){
      status = `${message.author} Wins`
    }

if(authorMove  === "✂️ | Scissors" && playerMove === "📰 | Paper"){
      status = `${message.author} Wins`
    }
    
      if(authorMove  === "📰 | Paper" && playerMove === "✂️ | Scissors"){
      status = `${player} Wins`
    }

    if(authorMove  === "✂️ | Scissors" && playerMove === "🪨 | Rock"){
      status = `${player} Wins`
    }

await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove}, ${player}: ${playerMove}\n\nStatus:\n${status}**`)], components: []})
collector.stop()

}
}else if(i.user.id === player.id){

if(playerTurns === 1)return i.reply({ content: "You Already Chose Your Move", ephemeral: true })

playerMove = "✂️ | Scissors" 
playerTurns += 1    
playerMove2 = "Ready"
    
await i.reply({content: `You Choose ${playerMove}`, ephemeral: true})
await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove},\n${player}: ${playerMove2}\n\nStatus:\n${status}**`)]})
if(playerTurns && authorTurns === 1){
  if(authorMove && playerMove === "✂️ | Scissors"){
      status = "Tie" 
    }

if(authorMove  === "🪨 | Rock" && playerMove === "✂️ | Scissors"){
      status = `${message.author} Wins`
    }

if(authorMove  === "✂️ | Scissors" && playerMove === "📰 | Paper"){
      status = `${message.author} Wins`
    }
    
      if(authorMove  === "📰 | Paper" && playerMove === "✂️ | Scissors"){
      status = `${player} Wins`
    }

    if(authorMove  === "✂️ | Scissors" && playerMove === "🪨 | Rock"){
      status = `${player} Wins`
    }

await currentGame.edit({ embeds: [game.setDescription(`**${message.author} VS, ${player}\n\nGame:\n${message.author}: ${authorMove}, ${player}: ${playerMove}\n\nStatus:\n${status}**`)], components: []})
collector.stop()

}
}else{
 await i.reply({ content: "This Is Not Your Game", ephemeral: true })
}
}
});
  
collector.on('end', async (i, reason)  => {
  if(reason === "time") {
  await currentGame.edit({ embeds: [game.setDescription("**The Game Took To Long So I Stoped The Game**")], components: [] })
  }
});

  },
};
