exports.run = (client, message, args) => {
  const { Wikipedia } = require("ultrax")
  let query = message.content.split(" ").splice(1).join(" ")
  if (!query) return message.reply("LOL! You have to specify a query!")
  const res = new Wikipedia({
    message: message,
    color: "RANDOM",
    timestamp: "",
    query: query
  })
  res.fetch()
}

exports.name = "wiki"