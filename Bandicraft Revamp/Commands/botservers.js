const Discord = require("discord.js");
const OWNER_ID = "909785459129999370"

module.exports = {
  name: "botservers",
  description: "Check what Servers the bot is in!",
  botPerms: ["USE_EXTERNAL_EMOJIS"],
  run: async (client, message, args) => {
    try {
      if (message.author.id != OWNER_ID)
        return message.channel.send(
          `<a:_cross:725303285015117844> Developer Only <a:_cross:725303285015117844>`
        );
      let data = [];
      client.guilds.cache.forEach((x) => {
        message.channel.send(
          `š¹**${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})\n............................`
        );
      });

      if (data.length > 0) {
        data.sort();
        data = `š¹ ` + data.join("\nš¹");
      } else {
        data = "[No server found]";
      }
    } catch (err) {
      const errorlogs = client.channels.cache.get(ERROR_LOGS_CHANNEL);

      message.channel.send(
        `Whoops, We got a error right now! This error has been reported to Support center!`
      );

      console.log(`Error on bs commands!\n\nError:\n\n ${err}`);
    }
  },
};