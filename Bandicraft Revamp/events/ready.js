const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});
client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);
