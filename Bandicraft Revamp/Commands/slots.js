const Discord = module.require("discord.js");
const { Slots } = require('discord-gamecord')

module.exports = {
  name: "Slots",
  description: "Slots",
  run: async (client, message, args) => {
   
          new Slots({
        message: message,
        opponent: message.mentions.users.first(),
        embed: {
          title: '🎰 Slot Machine',
		color: '#5865F2',
        }
       
      }).startGame();
  },
};