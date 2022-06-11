const Discord = require('discord.js')

let { MessageEmbed } = require("discord.js")

const Color = `#ffcc00`

let emo = {
  loading: "<a:3042loading:870618209148088360>",
  line: "<:botDecoHeheheheh:877785886081814538>",
  arrow: "<a:Yellow_Arrow_Right:883705649106649088>",
  check: "<a:verify:880366852826599480>"
}

module.exports = {
    name: 'unlock',
    category: "mod",
    description: 'unlock a channel',
    usage: '?unlock',
    aliases: ['unlockdown'],
    run : async (client, message, args) => {
     
		let embedYes = new Discord.MessageEmbed()
			.setTitle('Channel unlocked.')
			.setDescription('Lockdown lifted, enjoy talking while you still can:wink:')
			.setColor('GREEN');
		if (message.member.permissions.has('MANAGE_CHANNELS')) {
			message.channel.send({embeds: [embedYes]});
			message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
				SEND_MESSAGES: null
			});
		} else {
			let embed2 = new Discord.MessageEmbed()
				.setTitle('Error')
				.setColor('RED')
				.setDescription("You don't have permission to use this command.");
			message.channel.send({embeds: [embed2]});
		}

}
}