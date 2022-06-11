module.exports = {
  name: "mute",
  aliases: ["Mute", "timeout", "Timeout"],
  description: "Mute a member",
  run(client, message, args) {
    if (!message.member.permissions.has
      ("MUTE_MEMBERS")) return message.channel.send("You don't have permission to do that!")

    const role = message.guild.roles.cache.find(role => role.name === "Muted");
    const member = message.mentions.members.first();
    const reason = message.content.split("").slice(2).join(" ");

    if (!reason) reason = "No reason specified!";
    if (!role) return message.channel.send("This server doesn't have a mute role!");
    if (!member) return message.channel.send(`Wrong command usage!
Command usage: \`-unmute @user\``);
    member.roles.remove(role)
      .then(() => {
        message.channel.send(`Sucessfully Un-muted ${member}`)
      })
      .catch(() => {
        message.channel.send("Oops, something went wrong!")
      })
  }
}