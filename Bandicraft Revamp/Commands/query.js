const { MessageButton, MessageActionRow } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: "query",
    aliases: ["query"],

    run: async function(client, message, args) {
      const text1 = args.join(' ');
        const text2 = args.join('+');
        const google = `https://th.bing.com/th/id/R.5069689e88f5dc4e88a5230dafb7e65b?rik=BBz5CfrNbwhMGg&pid=ImgRaw&r=0`;
      if (!text2) {
            return message.channel.send("Please provide something to search")
      }
      try {
             const google1 = new MessageButton()
            .setStyle('LINK')
            .setURL(`https://www.google.com/search?q=${text2}`)
            .setLabel('Google')
            .setEmoji('🔍')

        const bing = new MessageButton()
            .setStyle('LINK')
            .setURL(`https://www.bing.com/search?q=${text2}`)
            .setLabel('Bing')
            .setEmoji('🧐')

        const duckduckgo = new MessageButton()
            .setStyle('LINK')
            .setURL(`https://duckduckgo.com/?q=${text2}`)
            .setLabel('Duckduckgo')
            .setEmoji('🐤')

        const youtubemusic = new MessageButton()
            .setStyle('LINK')
            .setURL(`https://music.youtube.com/search?q=${text2}`)
            .setLabel('Youtube Music')
            .setEmoji('🎵')

        const spotify = new MessageButton()
            .setStyle('LINK')
            .setURL(`https://open.spotify.com/search/${text2}`)
            .setLabel('Spotify')
            .setEmoji('🎶')

        const wikipedia = new MessageButton()
            .setStyle('LINK')
            .setURL(`https://www.wikipedia.org/wiki/${text2}`)
            .setLabel('Wikipedia')
            .setEmoji('🌍')

        const wikihow = new MessageButton()
            .setStyle('LINK')
            .setURL(`https://www.wikihow.com/wikiHowTo?search=${text2}`)
            .setLabel('Wikihow')
            .setEmoji('📑')
const yt = new MessageButton()
            .setStyle('LINK')
            .setURL(`https://www.youtube.com/results?search_query=${text2}`)
            .setLabel('YouTube')
            .setEmoji('🔍')
       const pint = new MessageButton()
   .setStyle('LINK')
 .setLabel('Pinterest') 
 .setURL(`https://www.pinterest.com/search/pins/?q=${text2}`)
        .setEmoji('🔍')
const netflix = new MessageButton()
 .setStyle('LINK')
 .setLabel('Netflix (Requires an account)') 
 .setURL(`https://www.netflix.com/search?q=${text2}`)
        .setEmoji(`🔍`)

                let row = new MessageActionRow()
                .addComponents(google1)
                .addComponents(bing)
                .addComponents(duckduckgo)
               
        
                let row2 = new MessageActionRow()
                .addComponents(yt)   
                .addComponents(youtubemusic)
                  .addComponents(spotify)
                
         .addComponents(pint)
                
                let row3 = new MessageActionRow()
                .addComponents(wikipedia)
                .addComponents(wikihow)
        .addComponents(netflix)


                
                const panel = new Discord.MessageEmbed()
                .setTitle(`Search any query`)
                 .setDescription(`**Searched For: \n\`${text1}\` \n\nResults: \n Looked At All Query's And Found \`${text1}\`. \nPlease Click Below Your Query ⬇️.**`)
                .setTimestamp()
                .setColor(`RANDOM`)
            message.channel.send({embeds: [panel], components: [ row , row2, row3 ]})
      }
            
         catch(e) {
      console.log(e)
			return message.channel.send(
				':x: Please provide a valid query.',
			);
		}
    }}