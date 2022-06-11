const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "money",
	run: async(client, message, args) => {
		
		let member = message.mentions.members.first()
		if(!member) {
			return message.reply({
				files: [ 
`https://badboy.is-a.dev/api/image/money?image=${message.author.displayAvatarURL({format: "png"})}`]
			})
		}
		
		
await message.reply({
	files: [ 
`https://badboy.is-a.dev/api/image/money?image=${member.user.displayAvatarURL({format: "png"})}`]
})

		
	}



	
}