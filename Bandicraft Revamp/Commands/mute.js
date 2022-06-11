module.exports = {
  name: "mute",
  aliases: ["Mute", "timeout", "Timeout"],
  description: "Mute a member",
  run(client, message, args) {
    if (!message.member.permissions.has
      ("KICK_MEMBERS")) return message.channel.send("You don't have permission to do that!")

    const role = message.guild.roles.cache.find(role => role.name === "Muted");
    const member = message.mentions.members.first();
    const reason = message.content.split("").slice(2).join(" ");

    if (!reason) reason = "No reason specified!";
    if (!role) return message.channel.send("This server doesn't have a mute role!");
    if (!member) return message.channel.send(`Wrong command usage!
Command usage: \`-mute @user\``);
    if (member.roles.cache.has(role.id)) return message.channel.send("That user is already muted!");
    member.roles.add(role)
      .then(() => {
        message.channel.send(`Sucessfully muted ${member}`)
      })
      .catch(() => {
        message.channel.send("Oops, something went wrong!")
      })
  }
}