const Discord = require("discord.js");
const { DiscordTogether } = require('discord-together');
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});
const discordTogether = new DiscordTogether(client);


module.exports = {
    name: "youtubetogether",
    description: "use a vc to watch yt",
    category: "activity",
    aliases: ['ytt'],
   
    run: async (client, message, args) => {
      const cl  = message.mentions.channels.first()
      if(!cl) return message.reply("please specify a channel!")
      const channel = message.guild.channels.cache.get(cl.id);

    if(cl.type !== "GUILD_VOICE")
    return message.reply({ content: "Please choose a voice channel!", })
    

    discordTogether.createTogetherCode( cl.id, "youtube")
    .then((x) => message.channel.send( `Click this link to watch youtube\n${x.code}`));
    

}}