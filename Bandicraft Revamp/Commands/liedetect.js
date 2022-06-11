const Discord = require('discord.js')

let { MessageEmbed } = require("discord.js")

const Color = `#ffdf5c`

module.exports = {
    name: 'liedetector',
    category: "fun",
    description: 'A Lie detector!',
    usage: '?liedetector <question>',
    aliases: ['ld'],
    timeout: 5,
    run : async (client, message, args) => {
     
		let detect = ['`🔴 | Lie`', '`🟢 | Truth`'];
		let random = detect[Math.floor(Math.random() * detect.length)];
		let sentence = message.content.split(' ');
		sentence.shift();
		sentence = sentence.join(' ');
		if (!sentence)
			return message.reply(':x: | **Enter The Question!**');
		let embed = new Discord.MessageEmbed()
			.setThumbnail(`${message.author.displayAvatarURL()}`)
			.setTitle('**Lie Detector**')
			.addField(`Question:`, `"**${sentence}**"`)
			.addField('Detection', `${random}`)
			.setColor('#00b9bc')
			.setFooter(`Asked by ${message.author.username}`)
			.setTimestamp();
		message.reply({embeds: [embed], allowedMentions: { repliedUser: false } })

}
}