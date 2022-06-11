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
    name: 'lock',
    category: "mod",
    description: 'lock a channel',
    usage: 'lock',
    aliases: ['lockdown'],
    run : async (client, message, args) => {
     
		let embedYes = new Discord.MessageEmbed()
			.setTitle('Channel Locked.')
			.setDescription('Use unlock to unlock the channel again.')
			.setColor('RED');
		if (message.member.permissions.has('MANAGE_CHANNELS')) {
			message.channel.send({embeds: [embedYes]});
			message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
				SEND_MESSAGES: false
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