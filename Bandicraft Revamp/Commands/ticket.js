module.exports = {
  name: 'ticket',
  run: async (client, message, args) => {
    const { MessageButton, MessageActionRow, MessageEmbed } = require('discord.js')

    if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply("I Don't Have Enough Permissions!");
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply("You Don't Have Enough Permissions!");

    const embed = new MessageEmbed()
      .setAuthor(`Click Create To Make A Ticket`)
      .setDescription(`Creating An Ticket Make's An Channel To Get Support From Staff's`)

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('tic')
          .setLabel('Create Ticket')
          .setStyle('PRIMARY'),
      );

    message.channel.send({
      embeds: [embed], components: [row]
    });

    client.on("interactionCreate", async (interaction) => {

      await interaction.deferUpdate();
      if (interaction.isButton()) {

        if (interaction.customId === 'tic') {

          if (interaction.guild.channels.cache.find(c => c.name.includes(`${interaction.user.tag}`))) interaction.followUp({
            content: 'You have already made a ticket',
            ephemeral: true,
          });

          let place = await interaction.guild.channels.create(`Ticket - ${interaction.user.username}`,
            {
              type: 'text',
              reason: `Ticket Requested by ${interaction.user.tag} `
            });

          place.permissionOverwrites.edit(interaction.guild.roles.everyone, {
            VIEW_CHANNEL: false,
          })

          place.permissionOverwrites.edit(interaction.user, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGE_HISTORY: true
          })

          const kembed = new MessageEmbed()
            .setTitle(`${interaction.user.username}'s Ticket`)
            .setAuthor(interaction.guild.name , interaction.guild.iconURL({ dynamic: true }))
            .setDescription('The staff will be here as soon as possible mean while tell us about your issue!\nThank You!')
            .setTimestamp()


          const del = new MessageActionRow()
            .addComponents(
              new MessageButton()
                .setCustomId('del')
                .setLabel('Delete Ticket!')
                .setStyle('DANGER'),
            );

          place.send({
            content: `Hey, <@${interaction.user.id}> This Is Your Ticket`,
            embeds: [kembed],
            components: [del]
          })

          interaction.followUp({
            content: `Ticket has been created ${place}`,
            ephemeral: true
          })
        } else if (interaction.customId === 'del') {

          const thread = interaction.channel
          thread.delete();

        }

      }
    })
  }
}