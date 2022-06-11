const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const btnRow = new MessageActionRow().addComponents(
   new MessageButton()
   .setLabel('Gun 1')
   .setStyle('DANGER')
   .setCustomId('a'),
     new MessageButton()
   .setLabel('Gun 2')
   .setStyle('DANGER')
   .setCustomId('b'),
   new MessageButton()
   .setLabel('Gun 3')
   .setStyle('DANGER')
   .setCustomId('c'),
   new MessageButton()
   .setLabel('Gun 4')
   .setStyle('DANGER')
   .setCustomId('d'),
   new MessageButton()
   .setLabel('Gun 5')
   .setStyle('DANGER')
   .setCustomId('e')
  );
  const second = new MessageActionRow().addComponents(
   new MessageButton()
   .setLabel('Gun 1')
   .setStyle('DANGER')
    .setDisabled(true)
   .setCustomId('a'),
     new MessageButton()
   .setLabel('Gun 2')
   .setStyle('DANGER')
    .setDisabled(true)
   .setCustomId('b'),
   new MessageButton()
   .setLabel('Gun 3')
   .setStyle('DANGER')
    .setDisabled(true)
   .setCustomId('c'),
   new MessageButton()
   .setLabel('Gun 4')
   .setStyle('DANGER')
    .setDisabled(true)
   .setCustomId('d'),
   new MessageButton()
   .setLabel('Gun 5')
   .setStyle('DANGER')
    .setDisabled(true)
   .setCustomId('e')
  );
let bullets = [
 'You are safe!',
 'You are safe!',
 'You are safe!',
 'Your life flashes before your eyes as the bullet hits you , You died',
  'Your life flashes before your eyes as the bullet hits you , You died',
 'Your life flashes before your eyes as the bullet hits you , You died'
 ];
  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("🔫 Russian Roulette 🔫")
    .setDescription("Out of all of the guns, only one has a bullet")
    .setFooter({text: "Choose wisely"})
   
 try {
   message.channel.send({ embeds: [embed], components: [btnRow] }).then(msg => {
   const collecter = msg.createMessageComponentCollector()
     
 collecter.on('collect', async i => {
  if(i.customId === 'a') {
     i.reply(`${bullets[Math.floor(Math.random() * bullets.length)]}`)
       i.message.edit({components: [second]})
   }
 if(i.customId === 'b') {
      i.reply({
           content: `${bullets[Math.floor(Math.random() * bullets.length)]}`  
        });
  i.message.edit({components: [second]})
   }
    if(i.customId === 'c') {
      i.reply({
           content: `${bullets[Math.floor(Math.random() * bullets.length)]}`  
        });
      i.message.edit({components: [second]})
       
   }
    if(i.customId === 'd') {
      i.reply({
           content: `${bullets[Math.floor(Math.random() * bullets.length)]}`  
        });
     i.message.edit({components: [second]})
     
   }
    if(i.customId === 'e') {
      i.reply({
           content: `${bullets[Math.floor(Math.random() * bullets.length)]}`  
        });
     i.message.edit({components: [second]})
      
   }
 })
  })
  } catch(e) {
      console.log(e)
			return message.channel.send(
				':x: Sorry I crashed :/',
			);
		}}


module.exports.name = "rr"