const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "kick",
  description: "Kicks a user from the server.",
  usage: "<user>",
  category: "moderation",
  userPerms: ["KICK_MEMBERS"],
  botPerms: ["KICK_MEMBERS"],
  run: async (client, message, args) => {
    const user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (member) => member.user.username === args.join(" ")
      );

    if (!user) {
      const embed = new MessageEmbed()
        .setTitle("Error")
        .setDescription(
          "You Must Mention A User Or Provide A User ID To Kick!\n\n**`Make Sure The User Was In The Guild!`**"
        )
        .setColor("RED");
      return message.channel.send({ embeds: [embed] });
    }

    const member = message.guild.members.cache.get(user.id);

    //check is the user is trying to kick themself
    if (user.id === message.author.id) {
      const embed = new MessageEmbed()
        .setTitle("Error")
        .setDescription("You Can't Kick Yourself!")
        .setColor("RED");
      return message.channel.send({ embeds: [embed] });
    }

    //check if the user is trying to kick the server owner
    if (user.id === message.guild.ownerID) {
      const embed = new MessageEmbed()
        .setTitle("Error")
        .setDescription("You Can't Kick The Server Owner!")
        .setColor("RED");
      return message.channel.send({ embeds: [embed] });
    }

    //check if the users role is lower than the user mentioned
    if (
      member.roles.highest.position >= message.member.roles.highest.position
    ) {
      const embed = new MessageEmbed()
        .setTitle("Error")
        .setDescription(`You Can't Kick A User Who Has A Higher Role Than You!`)
        .setColor("RED");
      return message.channel.send({ embeds: [embed] });
    }

    const embed = new MessageEmbed()
      .setTitle("Kick Confirmation")
      .setDescription(
        `${message.author.tag}, Are You Sure You Want To Kick **${member.user.tag}**?`
      )
      .setColor("YELLOW");

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("✅")
        .setStyle("SUCCESS")
        .setCustomId("confirm"),

      new MessageButton()
        .setLabel("❎")
        .setStyle("DANGER")
        .setCustomId("cancel")
    );

    const kickPage = await message.reply({
      embeds: [embed],
      components: [row],
      allowedMentions: {
        repliedUsers: false,
      },
    });

    const collection = await kickPage.createMessageComponentCollector({
      componentType: "BUTTON",
      time: 15000,
    });

    collection.on("collect", (i) => {
      if (i.user.id !== message.author.id) return;

      const kickEmbed = new MessageEmbed()
        .setDescription(
          `${i.user.username}, Successfully Kicked **${member.user.tag}**!`
        )
        .setColor("GREEN");

      const kickEmbed2 = new MessageEmbed()
        .setDescription(`${i.user.username}, Kick Cancelled!`)
        .setColor("YELLOW");

      const disable = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("✅")
          .setStyle("SECONDARY")
          .setCustomId("confirm")
          .setDisabled(true),

        new MessageButton()
          .setLabel("❎")
          .setStyle("SECONDARY")
          .setCustomId("cancel")
          .setDisabled(true)
      );

      if (i.customId === "confirm") {
        kickPage.edit({ components: [disable] });
        i.reply({ embeds: [kickEmbed], ephemeral: true });
        member.kick();
      } else if (i.customId === "cancel") {
        kickPage.edit({ components: [disable] });
        i.reply({ embeds: [kickEmbed2], ephemeral: true });
      }
    });

    collection.on("end", () => {
      const disable = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("✅")
          .setStyle("SECONDARY")
          .setCustomId("confirm")
          .setDisabled(true),

        new MessageButton()
          .setLabel("❎")
          .setStyle("SECONDARY")
          .setCustomId("cancel")
          .setDisabled(true)
      );

      kickPage.edit({ components: [disable] });
    });
  },
};