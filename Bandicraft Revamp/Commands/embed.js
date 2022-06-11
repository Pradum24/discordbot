const Discord = require('discord.js')

module.exports = {
    name: 'createembed',

   run: async (client, message, args) => {
    if (!message.member.permissions.has
      ("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that!")
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`RANDOM`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`Format:  FOOTER | TITLE | DESCRIPTION\` \nYou Must Add \`|\` To Split It & For It To Work!**`)
            return message.channel.send({ embeds: [nopr] })
        }
        let splitArgs = args.join(' ').split('|');
        const footer = splitArgs[0];
        if (!footer) {
            const noffot = new Discord.MessageEmbed().setTimestamp().setColor(`RANDOM`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Add The Footer Message!**`)
            return message.channel.send({ embeds: [noffot] })
        }
        const title = splitArgs[1];
        if (!title) {
            const nottot = new Discord.MessageEmbed().setTimestamp().setColor(`RANDOM`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Add The Title!**`)
            return message.channel.send({ embeds: [nottot] })
        }
        const description = splitArgs[2];
        if (!description) {
            const noddot = new Discord.MessageEmbed().setTimestamp().setColor(`RANDOM`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Add The Description!**`)
            return message.channel.send({ embeds: [noddot] })
        }
        const embed = new Discord.MessageEmbed().setColor(`RANDOM`).setTitle(`${title}`).setDescription(`${description}`).setFooter(`${footer}`)
        message.channel.send({ embeds: [embed] })
    }
}