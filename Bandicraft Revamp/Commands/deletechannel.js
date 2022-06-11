const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'create',
    aliases: ['Create', 'create-channel', 'Create-channel'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!message.member.permissions.has('MANAGE_CHANNELS'))
            return message.reply(
                'You need manage channels permission to use this command'
            );
      
        if (message.member.permissions.has('MANAGE_CHANNELS'))
            return 
      message.channel.delete()
message.author.send("Deleted Channel")
    }
};