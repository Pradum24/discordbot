module.exports = {
    config: {
        name: 'Tips',
        description: 'Sends Usefull Tips',
        usage: 'tips',
        category: 'Usefull',
    },
    run: async (bot, message, args) => {


let replies = ["**Your Tip Is:** My Prefix Is -", "**Your Tip Is:** You Can Do -bed *(Your Friend's Name)*", "**Your Tip Is:** You Can Do -help To Get Command List", "**Your Tip Is:** The Support Server Is discord.gg/5M9Q4CUh46", "**Your Tip Is:** You Can Play Rock Paper Scissors With Friends Using Me, Start With -rrr", "**Your Tip Is:** Nothings Too Low But My Uptime Is (-uptime)", ]
message.channel.send(replies[Math.floor(Math.random() * replies.length)]) 
}
}