const Discord = require('discord.js')

let { MessageEmbed } = require("discord.js")

const Color = `#ffdf5c`

module.exports = {
    name: 'kill',
    category: "fun",
    description: 'kill someone',
    usage: '?kill <member>',
    aliases: [],
    run : async (client, message, args) => {
     
		let victim = message.mentions.users.first();
		if (!victim) message.reply('Mention someone to Kill');
		else {
			if (victim.id == '768362780545384449') {
				message.reply({content: 'kings never die!!!', allowedMentions: { repliedUser: false }});
			} else {
				let replies = [
					`**${victim.username}** has been shot`,
					`**${victim.username}** has been stabbed`,
					`**${victim.username}** has been drowned`,
					`**${victim.username}** has been electrified`,
					`A goose honked at **${victim.username}** to death`,
					`Some psychopath zapped **${victim.username}** with his laser eyes`,
					`**${victim.username}** ate a poisonous potato`,
					`**${victim.username}** died from slowmode being to long`,
					`**${victim.username}** was run over by car`,
					`**${victim.username}** was pushed in lava`,
					`Someone named Joe was found chewing on ${victim}'s leg`,
					`**${victim.username}** got drunk and fell in the water`,
					`**${victim.username}** was hacked by an Oreo`,
					`An alien named MEE6 abducted **${victim}** in their sleep`,
					`**${victim.username}** ate too many potatoes`,
					`**${victim.username}** experienced kinetic energy`,
					`**${victim.username}** hit the ground too hard`,
					`**${victim.username}** fell from a high place.`,
					`**${victim.username}** was impaled on a stalagmite`,
					`**${victim.username}** was squashed by a falling anvil`,
					`**${victim.username}** went up in flames`,
          `**${victim.username}** kills u first`
				];
				if (victim == message.author.id) {
					return message.reply("You can't kill yourself lol!");
				} else {
					message.channel.send(
						`${replies[Math.floor(Math.random() * replies.length)]}`
					);
				}
			}
		}

}
}