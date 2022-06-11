const { Message, MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports.run = async (client, message, args) => {


        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send("You dont have perms to use this")
        if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send("I dont have perms to use this")
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]

        if (!Member) return message.channel.send("You Didnt Mention Anyone To Mute `-mute @user 2` `For 1hour`")


        if (!time) return message.channel.send("Say some time...")
       const role1 = message.guild.roles.cache.find(role => role.name === "Muted");

    if (!role1) return message.channel.send("This server doesn't have a mute role named Muted");

        
        if (Member.roles.cache.has(role1)) return message.channel.send(`${Member.displayName} is already muted.`)
        await Member.roles.add(role1)

        message.channel.send(`${Member.displayName} is muted.`)

        setTimeout(async () => {
            await Member.roles.remove(role1)
            message.channel.send(`${Member.displayName} is unmuted.`)
        }, time * 1000)
    }


module.exports.help = {
    name: "tempmute",
    description: "Tempmute someone",
    category: "Moderation",
    aliases: []
}