const Discord = require('discord.js')

let { MessageEmbed } = require("discord.js")

const Color = `#ffcc00`

const giggle = require('pretty-ms');

const ms = require('ms');

let emo = {
  loading: "<a:3042loading:870618209148088360>",
  line: "<:botDecoHeheheheh:877785886081814538>",
  arrow: "<a:Yellow_Arrow_Right:883705649106649088>",
  check: "<a:verify:880366852826599480>"
}

module.exports = {
    name: 'slowmode',
    category: "mod",
    description: 'edit channel slowmode',
    usage: '?slowmode <time>\n?slowmode off',
    aliases: [],
    run : async (client, message, args) => {
     
		if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(':x: | You do not have permission!')

		if (!args[0]) {
			return message.channel.send(':x: | You did not specify a time!')
		}

		const currentCooldown = message.channel.rateLimitPerUser;

		const embed = new MessageEmbed()

		if (args[0] === 'off') {
			if (currentCooldown === 0) return message.channel.send(':x: | Channel cooldown is already off')

			embed.setTitle('Slowmode Disabled')
				.setColor('#00ff00');
        message.channel.send({embeds: [embed]})
			return message.channel.setRateLimitPerUser(0);
		}

		const time = ms(args[0]) / 1000;

		if (    
    !args[0].endsWith("h") &&
    !args[0].endsWith("m") &&
    !args[0].endsWith("s") 
    ) {
			return message.channel.send(':x: | You need to use `h` (hours), `m` (minutes), or `s` (seconds)')
		}

		if (time > 21600 || time < 1) {
			return message.channel.send(':x: | Slowmode have to be between 1s - 6h')
		}

    let modeslow = giggle(time * 1000, { verbose: true })

		if (currentCooldown === time) {
			return message.channel.send(`:x: | Slowmode is already set to ${modeslow}`);
		}

		embed.setTitle('Slowmode Changed!')
			.setDescription(`Slowmode now set to **${modeslow}!**`)
			.setColor('#ff0000');

		const msg = await message.channel.setRateLimitPerUser(time);
		return msg.send({embeds: [embed]});

}
}