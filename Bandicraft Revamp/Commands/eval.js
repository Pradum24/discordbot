const { MessageEmbed } = require('discord.js');
const { inspect } = require("util");

module.exports = {
  name: "eval",
  run: async (client, message, args) => {
    
        
      if (message.author.id != "909785459129999370")
        return message.channel.send(
          `<a:_cross:725303285015117844> Developer Only <a:_cross:725303285015117844>`
        );    const code = args.join(" ");
    const token = client.token.split("").join("[^]{0,2}");
    const rev = client.token.split("").reverse().join("[^]{0,2}");
    const filter = new RegExp(`${token}|${rev}`, "g");
    try {
      let output = eval(code);
      if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
      output = inspect(output, { depth: 0, maxArrayLength: null });
      output = output.replace(filter, "no");
      if (output.length < 1950) {
        
        const outputembed = new MessageEmbed()
          .setTitle('Evaluation Successful!!')
          .setDescription('**Argument**\n\`\`\`' + code + '\`\`\`\n\n**Output**\n\`\`\`' + output + '\`\`\`')
          .setFooter(`${client.user.tag} `, client.user.displayAvatarURL() )
        message.channel.send({ embeds: [outputembed] });
      }
    } catch (error) {
      message.channel.send({ content: ` \`\`\`js\n${error}\`\`\` ` });
    }
  }
}
