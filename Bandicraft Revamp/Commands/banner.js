const axios = require("axios");
const {MessageEmbed} = require("discord.js");


module.exports.run = async(client, message, args) => {
        const target = message.mentions.members.first() || message.member;

        await axios.default.get(`https://discord.com/api/users/${target.id}`, {
            headers: {
                Authorization: `Bot ${process.env.token}`
            }
        }).then((res) => {
            const { data } = res;

            const { banner, accent_color } = data;

            if (banner) {
                const extention = banner.startsWith("_a") ? ".gif" : ".png";
                const uri = `https://cdn.discordapp.com/banners/${target.id}/${banner}${extention}?width=400`;

                const embed = new MessageEmbed()
                    .setTitle(`${target.user.username}'s banner`)
                    .setImage(uri)
                    .setColor("RANDOM");
                console.log(uri);
                message.reply({
                    embeds: [embed]
                })
            } else {
                if (accent_color) {

                    const embed = new MessageEmbed()
                        .setTitle(`${target.user.username} accent color`)
                        .setColor(accent_color);
                    message.reply({
                        embeds: [embed]
                    })
                } else {
                    message.reply({
                        embeds: [new MessageEmbed().setColor("RED").setTitle(`${message.mentions.users.first() ? "That user does not have a banner or color" : "You dont't have a color or banner"}`)],

                    })
                }
            }
        })
}