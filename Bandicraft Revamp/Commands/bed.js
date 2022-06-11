const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
    config: {
        name: 'Bed',
        description: 'Bed',
        aliases: ["bed"],
        usage: '',
        category: 'images',
    },
    run: async (bot, message, args) => {
 //   const m = bot.findMember(message, args, true);
   
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 let m = await message.channel.send("**Please Wait...**");   
 let avatar = message.author.displayAvatarURL({
      dynamic: false,
      format: "png",
    });
 let avatar2 = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Bed().getImage(avatar, avatar2);

    let attach = new Discord.MessageAttachment(img, "bed.png");
    m.delete({ timeout: 5000 });
    message.channel.send({files: [attach]});
  },
};