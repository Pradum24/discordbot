const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name: 'status',
    category: "owner",
    description: 'Set\'s status',
    usage: 'status <name> | <type> | <status>',
    run : async (client, message, args) => {
      if(message.author.id !== `909785459129999370`) {
        return message.channel.send("sorry, this command is only for the developer")
      }
      let content = args.join(' ').split(' | ')
      if(!content[0]) {
        return message.channel.send(`:x: | Provide something to change my status to!`)
      }
      if(!content[1]) content[1] = `WATCHING`;
      if(!content[2]) content[2] = `dnd`;
      client.user.setPresence({ activities: 
      [{ 
          name: `${content[0]}`, 
          type: `${content[1].toUpperCase()}` 
      }], 
      status: `${content[2]}`
    })
    await message.react(`✅`)
    let embed = new MessageEmbed()
    .setTitle(`Status Changed`)
    .setDescription(
      `
      ✅ | **Set Status Title To:** \`${content[0]}\`
      
      ✅ | **Set Status Type To:** \`${content[1]}\`
      
      ✅ | **Set Status To:** \`${content[2]}\``
    )
message.channel.send({ embeds: [embed] })

    }
}