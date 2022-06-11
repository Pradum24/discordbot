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
              if (!message.guild.me.permissions.has('MANAGE_CHANNELS'))
            return message.reply(
                'I Dont Have Permission To Ban The User'
            );

        const channelNameQuery = args.join(' ');
        if (!channelNameQuery)
            return message.reply(
                'Please specify a channel name'
            );

        message.guild.channels.create(channelNameQuery).then(ch => {
            message.reply(`Successfully created ${ch}`);
        });
    }
};