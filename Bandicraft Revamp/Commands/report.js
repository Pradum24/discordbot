const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let report = args.join(" ")
  if(!report) return message.channel.send({content: "You have to provide something to report!"})

//////// CONSOLE REPORT

  console.log(` `)
  console.log(` `)
  console.log(`--------------New Report---------------`)
  console.log(` `)
  console.log(`Reported By <@${message.author.id}>`)
  console.log(`Report: ${report}`)
  console.log(`---------------------------------------`)
  console.log(` `)
  console.log(`----More Info Of User Who Reported-----`)
  console.log(` `)
  console.log(`Reporter Id: <@${message.author.id}>`)
  console.log(`Reporter Tag: <@${message.author.tag}>`)
  console.log(`Reporter Username: @${message.author.username}`)
  console.log(`Reported In: ${message.guild.name}`)
  console.log(` `)
  console.log(`-----------------END-------------------`)
  console.log(` `)
  console.log(` `)

//////// CHANNEL REPORT

    const embed = new Discord.MessageEmbed()
    .setTitle("New Report")
    .setColor("#ff0000")
    .setDescription(`Ive Got A New Report,\n And Here It Is!`)
    .addField(`Reported By`, `${message.author.tag}`)
    .addField(`Report`, `${report}`)
    .addField(`\n Heres More Information Of The User`, ` **Id:** ${message.author.id} \n **Tag:** ${message.author.tag} \n **Username:** ${message.author.username} \n **Reported Server:** ${message.guild.name}`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
const reportChannel = client.channels.cache.get('956537055578558494')
  reportChannel.send({embeds : [embed]})


  
  message.channel.send("Succesfully Reported Your Report!")

}

exports.name = "say"