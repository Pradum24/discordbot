const Discord = require('discord.js')

let { MessageEmbed } = require("discord.js")

const axios = require('axios');

const Color = `#ffcc00`

let emo = {
  loading: "<a:3042loading:870618209148088360>",
  line: "<:botDecoHeheheheh:877785886081814538>",
  arrow: "<a:Yellow_Arrow_Right:883705649106649088>",
  check: "<a:6093_Animated_Checkmark:870618917138223104>"
}

module.exports = {
    name: 'covid',
    category: "utility",
    description: 'gives covid count for a country or entire world',
    usage: '?covid [country]',
    aliases: ['covid19', 'corona'],
    timeout: 0,
    run : async (client, message, args) => {
     
		const baseUrl = 'https://corona.lmao.ninja/v2';

		let url;
    let response;
    let corona;

    let countree = args.join(" ")

		try {
			url = countree ? `${baseUrl}/countries/${countree}` : `${baseUrl}/all`;
			response = await axios.get(url);
			corona = response.data;
		} catch (error) {
			return message.channel.send(`:x: | Can't find the country **${countree}**`);
		}

		const embed = new MessageEmbed()
			.setTitle(countree ? `${countree.toUpperCase()} Stats` : 'Total Corona Cases World Wide')
			.setColor('#fb644c')
			.setThumbnail(countree ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
			.addFields(
				{
					name: 'Total Cases:',
					value: corona.cases.toLocaleString(),
					inline: true,
				},
				{
					name: 'Total Deaths:',
					value: corona.deaths.toLocaleString(),
					inline: true,
				},
				{
					name: 'Total Recovered:',
					value: corona.recovered.toLocaleString(),
					inline: true,
				},
				{
					name: 'Active Cases:',
					value: corona.active.toLocaleString(),
					inline: true,
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: true,
				},
				{
					name: 'Critical Cases:',
					value: corona.critical.toLocaleString(),
					inline: true,
				},
				{
					name: 'Today Recoveries:',
					value: corona.todayRecovered.toLocaleString().replace('-', ''),
					inline: true,
				},
				{
					name: 'Todays Deaths:',
					value: corona.todayDeaths.toLocaleString(),
					inline: true,
				},
			);

		return message.channel.send({embeds: [embed]});

}
}