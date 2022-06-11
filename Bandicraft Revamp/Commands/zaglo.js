const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const Zalgo = require('to-zalgo')

module.exports = {
    config: {
        name: 'zalgo',
        description: 'Converts your text to Zalgo',
        aliases: ["zalgo"],
        usage: '<text>',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        const embed = new MessageEmbed()
     .setColor("RANDOM")
     .setDescription(`${Zalgo(args.join(" "))}`)
     .setTimestamp()
  message.channel.send({embeds:[embed]})
    }
}