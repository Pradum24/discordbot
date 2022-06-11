const Discord = require('discord.js')
module.exports = {
    name: 'choose',
    category: "fun",
    description: 'make a decision',
    usage: '?choose <choice1> / <choice2>',
    aliases: [],
    run : async (client, message, args) => {
     
      const choice1 = args.join(" ").split("/")[0]
      const choice2 = args.join(" ").split("/")[1]
        let replies = [choice1, choice2];
        if (!choice1)
            return message.channel.send(
                `${
                    message.author.username
                } please specify the choises\nUse \`?commands choice\` for help `
            );
        if (!choice2)
            return message.channel.send(`:x: | You didn't specify choice 2`);
        const embed = new Discord.MessageEmbed()
            .setTitle('Choice picker!')
            .addField(`Choice 1:`, choice1, true)
            .addField(`Choice 2:`, choice2, true)
            .addField(
                `I choose:`,
                `${replies[Math.floor(Math.random() * replies.length)]}`
            )
            .setColor('YELLOW')
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setFooter(`requested by ${message.author.username}`)
            .setTimestamp();
        message.channel.send({embeds: [embed]});


}
}