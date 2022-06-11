const express = require('express');
const app = express();
const mySecret = process.env['token']
const chalk = require("chalk.js")
const { version: discordjsVersion } = require("discord.js");

app.listen(3000, () => {
  console.log(" ");
}) 

app.get("/", (req, res) => {
  res.send("Hello World!");
})

const Database = require("@replit/database");
const db = new Database();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});

const fs = require("fs");
const prefix = "-";
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
if(message.author.bot) return;
if(message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift().toLowerCase()
  const command = client.commands.get(commandName)
  if(!command) return
  command.run(client, message, args)
}
})


////////Anti Spamming

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
 warnThreshold: 3,
 kickThreshold: 7,
 banThreshold: 7,
 maxInterval: 2000,
 warnMessage: '{@user}, Please stop spamming.', 
 kickMessage: '**{user_tag}** has been kicked for spamming.',
 muteMessage: '**{user_tag}** has been muted for spamming.',
 banMessage: '**{user_tag}** has been banned for spamming.', 
 maxDuplicatesWarning: 7,
 maxDuplicatesKick: 10,
 maxDuplicatesBan: 12,
 exemptPermissions: [ 'ADMINISTRATOR'],
 ignoreBots: true, 
 verbose: true, 
 ignoredUsers: [],
 muteRoleName: "Muted",
 removeMessages: true
});

client.on('message', (message) => antiSpam.message(message)); 

//////// Custom Status // Client Logging

client.on('ready', ()=> {
client.user.setActivity(`-help | Handling ${client.guilds.cache.size} Servers`, { type: 'STREAMING', url: `https://twitch.tv/Mashrafiplays` })
  console.log(`[ - Bot is Online - ]`);
  console.log(`---------------------------------`);
  console.log(`[Done] | ✔️  | Name Bot : ${client.user.username}`);
  console.log(`[Done] | ✔️  | Bot ID   : ${client.user.id}`);
  console.log(`[Done] | ✔️  | Guilds   : ${client.guilds.cache.size}`);
  console.log(`[Done] | ✔️  | Users    : ${client.users.cache.size}`);
  console.log(`[Done] | ✔️  | loaded servers [ ${client.guilds.cache.size} ] Servers`);
  console.log(`[Done] | ✔️  | loaded users [ ${client.users.cache.size} ] Users`);
  console.log(`[Done] | ✔️  | loaded channels [ ${client.channels.cache.size} ] Channels`);
  console.log(`[Done] | ✔️  | loaded all commands`);
  console.log(`[Done] | ✔️  | loaded all Multi-Stat's`);
  console.log(`---------------------------------`);
  client.user.setStatus("online");
})

//////// Anti Crash

process.on("unhandledRejection", (reason, p) => {
  console.log(" [antiCrash] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch");
  console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(" [antiCrash] :: Multiple Resolves");
  console.log(type, promise, reason);
});
 
//////// Logs

client.on('messageDelete', async (message) => {
    const channel = message.channel;
    const guild = message.guild;
    const author = message.author;
    const content = message.content;
    const embed = new Discord.MessageEmbed()
    .setTitle("Message Deleted")
    .setColor("#ff0000")
    .setDescription(`**Message Deleted**\n\n**Author:** ${author}\n**Channel:** ${channel}\n**Guild:** ${guild}\n**Content:** ${content}`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
const targetChannel = client.channels.cache.get('956470531434119218')
  targetChannel.send({embeds : [embed]})
})

// New Server

client.on('guildCreate', async (message) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Message Deleted")
    .setColor("#ff0000")
    .setDescription(`**Ive Joined New Guild**`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
const targetChannel = client.channels.cache.get('956524637464956958')
  targetChannel.send({embeds : [embed]})
})

// Left Server

client.on('guildDelete', async (message) => {
    const guild = message.guild;
    const embed = new Discord.MessageEmbed()
    .setTitle("Message Deleted")
    .setColor("#ff0000")
    .setDescription(`**Ive Left New Guild**`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
const targetChannel = client.channels.cache.get('956524637464956958')
  targetChannel.send({embeds : [embed]})
})

// Bot Updated

client.on(`ready`, async (message) => {
    const guild = message.guild;
    const embed = new Discord.MessageEmbed()
    .setTitle("Bandicraft Revamp")
    .setColor("#ff0000")
    .setDescription(`Im Online Angin!`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
const targetChannel = client.channels.cache.get('956470531434119218')
  targetChannel.send({embeds : [embed]})
})

//////// Help Detechtion

// Ping

client.on('messageCreate', async (message) => {
if(message.content === `<@!${client.user.id}>`) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Bandicraft Revamp Ping Menu")
    .setColor("#ff0000")
    .addField(`Hey If Your Looking For My Prefix Here It Is! `, `Prefix: **-**`)
    .addField(`For Help Menu`, `Use **-help**`)
    .setTimestamp()
  message.channel.send({embeds : [embed]})}})

//////// Reconlx Handler

client.slashCommands = new Discord.Collection();
client.config = ("./config.json");

// Initializing the project
require("./handler")(client);

//////// Token Detechtor Line Below

client.login(process.env.token)