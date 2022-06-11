module.exports = {
  name: "calculator",
  description: "Solve math problem! What if use an app instead.",
  aliases: ["cal", "calc", "calcu", "calcul", "calcula", "calculat", "calculato", "calculate"],
  run: async (client, message, args) => {
    const simplydjs = require("simply-djs");
    simplydjs.calculator(message, {
      embedColor: `#525254`
    });
  },
};
