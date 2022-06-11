exports.run = (client, message, args) => {
  const personMentioned = message.mentions.users.first();
  if(personMentioned){
    message.reply(`Heres the avatar of ${personMentioned}...`)
    message.channel.send(message.mentions.users.first().displayAvatarURL());
  }
  if(!personMentioned) return message.reply(message.author.displayAvatarURL());
}

exports.name = "avatar"