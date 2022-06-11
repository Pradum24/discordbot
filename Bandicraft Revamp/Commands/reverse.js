module.exports = {
  name: 'reverse',
  description: 'Reverse text',
  aliases: [],
  usage: [],
  run: async (client, message, args) => {
    if(!args[0]) return message.reply('Use args');
    const reversed = args.join('').split('').reverse().join('');
    message.reply(reversed);
  },
};