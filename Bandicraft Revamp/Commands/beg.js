const Discord = require("discord.js");
const Database = require("@replit/database")
const db = new Database()
const rewardMessages = [
  1352, //put here the your random rewards
  578,
  338,
  1459,
  2543,
  9492,
  10382,
  323,
  463,
  3579,
  645,
  186,
  13,
  3246,
  24,
  554,
  1451,
  794,
  28,
  96,
  73,
  51
];
const rewards = rewardMessages[Math.floor(Math.random() * rewardMessages.length)];
const messages = [
  "LOL! No.", //put here your randome messages
  `Oh you poor little beggar, take this __${rewards}__`,
  "What if you go find some work to get money hm?",
  "What if no.",
  "No, I don't think so...",
  "Stop it, get some help.",
  `Oh you poor little beggar, take this __${rewards}__`,
  "What if no.",
  "*spits out milk*",
  `Oh you poor little beggar, take this __${rewards}__`,
  "poggers",
  "hmm...",
  "You look like a baby while begging, what if you just relax in a minute?",
  `Oh you poor little beggar, take this __${rewards}__`,
  "Don't be a fool.",
  "What if no.",
  "Don't be a simp, just be happy!",
  `Oh you poor little beggar, take this __${rewards}__`,
  "No, you will just use the money to buy pills.",
  `Here, take this __${rewards}__ and give it to my friend.`,
  "What if no.",
  `Oh you poor little beggar, take this __${rewards}__`,
  "ew get away",
  "Don't be a simp, just be happy!"
];
const peoples = [
  "Donald Trump", //put here all random names
  "Mr. Bean",
  "The guy you hate",
  "Joe Biden",
  "Vladimir Putin",
  "The guy hate you",
  "Hannah Montana",
  "Jake from State Farm",
  "Bo Burnham",
  "Rodrigo Duterte",
  "Mr. Beast",
  "Kristian ph",
  "Stephen Curry",
  "ThugLif Developer",
  "Your Mom",
  "Your sibling",
  "Your Dad",
  "PewDiePie",
  "Clint Eastwood",
  "Tom Hanks",
  "Rowan Atkinson",
  "Leonardo DiCaprio",
  "Elon Musk",
  "Your Cousin",
  "Steve",
  "Notch",
  "Rick Astley",
  "The guy rickrolled you",
  "Barack Obama",
  "Your ex",
  "Your enemy",
  "Your wifes boyfriend",
  "Bob",
  ":fire: The Rock :fire:",
  "Spongebob",
  "Patrick",
  "Squidward",
  "Mr. Krabs",
  "Old Man",
  "Dog"
]

exports.run = async(client, message, args) => {
  const check = await db.get(`dailyCheck_${message.author.id}`);
  const timeout = 5000;
  if (check !== null && timeout - (Date.now() - check) > 0) {
    const ms = require("pretty-ms")
    const timeLeft = ms(timeout - (Date.now() - check))
    message.reply(`Your Using This Command Too Quickly Please Wait ${timeLeft} `)
  } else {
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    let randomPerson = peoples[Math.floor(Math.random() * peoples.length)];
    let randomMessages = messages[Math.floor(Math.random() * messages.length)];
    let begEmbed = new Discord.MessageEmbed()
    .setAuthor(randomPerson)
    .setDescription(randomMessages)
    .setFooter("My prefix is -  ")
    .setColor("#525254")
    .setTimestamp()
    message.reply({embeds: [begEmbed]})
    
    await db.set(`wallet_${message.author.id}`, currentBalance + rewards)
    await db.set(`dailyCheck_${message.author.id}`, Date.now())
  }
}

exports.name = "beg"