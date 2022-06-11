const discord = require("discord.js")

module.exports = {
  name: "purge",
  aliases: ["delete", "fckmessage", "thishthash"],
   category: "moderation",
   description: "delete messages",
   usage: "!purge <number>",
   run: (client, message, args) => {
         let arg = message.content.split(" ");
          if (message.member.permissions.has('MANAGE_CHANNELS')) {
      let clear = args[0];
      if (!clear)
        return message.channel
          .send(`:x: | Incorrect usage of command you need to provide an amount of messages to Clear. `);
      if (isNaN(clear))
        return message.channel.send(
          ":x: | ``Please Put a Valid Number to Clear messages.``"
        );
      if (clear > 100)
        return message.channel.send(
          ":x: | ``I can't Clear more than 100 messages.``"
        );
      if (clear < 1)
        return message.channel.send(
          ":x: | ``You cannot Clear less than 1 message.``"
        );

      message.channel.bulkDelete(clear);
      message.channel.send(
          `:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `
        )
    } else {
      message.reply("You dont have perms!");
    }
   }
  }