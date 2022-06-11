const { MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: 'start',
  description: "start a giveaway",
  run: async (client, message, args, ) => {

    const ga = new MessageEmbed()
      .setTitle("Wrong Usage!!")
      .addField('How to use the Giveaway commands', '```.start <channel> <time> <number of winners> <prize>```', false)
      .addField("Time format", "\`\`\`s = seconds, h = hours, d = days, m = minutes\`\`\`")
      .setTimestamp()
      .setColor("RED")
      .setFooter(`Requested By ${message.author.username}`)

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
    const duration = args[2]
    if (!channel) return message.reply({ embeds: [ga] })
    if (!args[2]) return message.reply({ embeds: [ga] })
    if (!args[2].endsWith("s") && !args[2].endsWith("h") && !args[2].endsWith("d") && !args[2].endsWith("m")) return message.reply({ embeds: [ga] })
    const time = ms(duration)
    if (isNaN(time)) return message.reply({ content: `Please provide a valid time!!` })

    const WinnerCountEmbed = new MessageEmbed()
      .setColor("RED")
      .setDescription("The max winner count is 20, please choose a number from 1 to 20.")

    let winnerCount = args[3]
    if (winnerCount > 20) return message.reply({ embeds: [WinnerCountEmbed], allowedMentions: { repliedUser: false } })
    if (isNaN(winnerCount)) return message.reply({ content: "Please provide a number for the amount of winners!!" })
    let prize = args.slice(4).join(" ")
    if (!args[3]) return message.reply({ embeds: [ga] })
    if (!args[4]) return message.reply({ embeds: [ga] })

    const GiveawaybotEmbed = new MessageEmbed()
      .setTitle(`${prize}`)
      .setDescription(`React with 🎉 to enter!\n **${winnerCount}** Winner\n Hosted by: ${message.author}`)
      .setFooter(`Ends at`)
      .setTimestamp(Date.now() + ms(args[2]))

    const msg = await channel.send({
      content: "🎉🎉** GIVEAWAYㅤ**🎉🎉",
      embeds: [GiveawaybotEmbed]
    })

    msg.react('🎉')

    setTimeout(function() {

      var random = 0;
      var winners = [];
      var inList = false;

      const peopleReacted = msg.reactions.cache.get("🎉").users.cache.map(m => m)

      for (let i = 0; i < peopleReacted.length; i++) {

        if (peopleReacted[i].id == client.user.id) {
          peopleReacted.splice(i, 1);
          continue;
        }
      }

      if (peopleReacted.length == 0) {
        const nonWinner = new MessageEmbed()
          .setTitle(`${prize}`)
          .setDescription(`**There are no winners, because no one participated!**`)
          .addField("Giveaway Link:", `\n**[Press here](${msg.url})**`)
          .setFooter(`Giveaway hosted by ${message.author.tag}`)


        return msg.edit({
          embeds: [nonWinner],
          content: "🎉🎉** GIVEAWAY ENDEDㅤ**🎉🎉 **No one entered**"
        })
      }

      // if the winner count is higher then the members who joined the giveaway
      if (peopleReacted.length < winnerCount) {
        const notEWinner = new MessageEmbed()
          .setColor("#FCCBDF")
          .setTitle(`${prize}`)
          .setDescription(`**There are no winners, because not enough people participated!**`)
          .addField("Giveaway Link:", `\n**[Press here](${msg.url})**`)
          .setFooter({ text: `Giveaway hosted by ${message.author.tag}` })


        return msg.edit({
          embeds: [notEWinner],
          content: "🎉🎉 **GIVEAWAY ENDED** 🎉🎉"
        })
      }

      for (let y = 0; y < winnerCount; y++) {

        inList = false;

        random = Math.floor(Math.random() * peopleReacted.length);

        for (let o = 0; o < winners.length; o++) {

          if (winners[o] == peopleReacted[random]) {
            inList = true;
            y--;
            break;
          }
        }
        if (!inList) {
          winners.push(peopleReacted[random]);
        }
      }
      var response = ``

      for (let y = 0; y < winners.length; y++) {

        response += `${winners[y]}`

        const DmsDisabledEmbed = new MessageEmbed()
          .setTitle("Dms disabled")
          .setDescription(`${winners[y]} does not have their dm's enabled so i could not dm them. `)

        const Winnerembed = new MessageEmbed()
          .setColor("RED")
          .setTitle(`${prize} `)
          .setDescription(`React with 🎉 to enter!\n **${winnerCount}** Winner\n Hosted by: ${message.author}`)
          .addField("Giveaway Ended", `Winner: ${response}`, true)
          .setFooter(`Ends at`)
          .setTimestamp(Date.now() + ms(args[2]))

        msg.edit({
          embeds: [Winnerembed],
          content: "🎉🎉 GIVEAWAY ENDED 🎉🎉"
        })

        const Congratulations = new MessageEmbed()
          .setColor("#F3F97D")
          .setDescription(`Jump to the **[${prize}](${msg.url})** Giveaway!`)
        channel.send({ embeds: [Congratulations], content: `Congratulations ${response}, you have won the **${prize}** Giveaway.` })


        const CongratulationSend = new MessageEmbed()
          .setDescription(`Your have won the **[${prize}](${msg.url})** Giveaway in ${message.guild.name}!`)
          .setTitle("🎁 You have won a giveaway.")
          .setColor("#FFBC9B")
          .setFooter("Ended at")
          .setTimestamp(Date.now() + ms(args[2]))
        try {
          winners[y].send({ embeds: [CongratulationSend], content: `🎁 Congratulations ${winners[y]}` })
        } catch (error) {
          message.channel.send({ embeds: [DmsDisabledEmbed] })
        }
      }

    }, ms(args[2]));
  }
}