exports.run = (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
  return message.channel.send("You do not have enough permissions!");
  let toSay = args.join(" ")
  if(!toSay) return message.channel.send({content: "You have to provide something!"})
  message.channel.send({content: toSay})
}

exports.name = "say"