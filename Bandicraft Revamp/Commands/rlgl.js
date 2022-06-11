module.exports = {
  name: "rlgl",
  aliases: ["redlightgreenlight"],
  run: async (client, message, args) => {
    try {
      const grass = "🟩";
      const square = "🟥";
      const greenGirl = "😽";
      const redGirl = "😾";
      const greenLine = "🟨";
      const redLine = "🏮";
      const you = "🤠";
      const triangle = "🔺";
      const colors = ["red", "green"];

      const positions = {
        green: [
          `${grass + square + grass + greenGirl + grass + triangle + grass}`,
          `${greenLine + grass.repeat(5) + greenLine}`,
          `${greenLine + grass.repeat(5) + greenLine}`,
          `${greenLine + grass.repeat(5) + greenLine}`,
          `${greenLine + grass.repeat(5) + greenLine}`,
          `${greenLine + grass.repeat(5) + greenLine}`,
          `${greenLine + grass.repeat(5) + greenLine}`,
          [greenLine, grass.repeat(2), you, grass.repeat(2), greenLine],
        ],
        red: [
          `${grass + square + grass + redGirl + grass + triangle + grass}`,
          `${redLine + grass.repeat(5) + redLine}`,
          `${redLine + grass.repeat(5) + redLine}`,
          `${redLine + grass.repeat(5) + redLine}`,
          `${redLine + grass.repeat(5) + redLine}`,
          `${redLine + grass.repeat(5) + redLine}`,
          `${redLine + grass.repeat(5) + redLine}`,
          [redLine, grass.repeat(2), you, grass.repeat(2), redLine],
        ],
      };

      const move = String(Math.random());
      const data = { left: 6, color: colors[Math.floor(Math.random() * 2)] };
      let gameEnded = false;

      const componentsArray = [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: "SECONDARY",
              custom_id: "xd",
              disabled: true,
              label: "\u200b",
            },
            {
              type: 2,
              style: "PRIMARY",
              custom_id: move,
              label: "Move",
            },
            {
              type: 2,
              style: "SECONDARY",
              custom_id: "dx",
              disabled: true,
              label: "\u200b",
            },
          ],
        },
      ];

      const msg = await message.channel.send({
        content: positions[data.color].join("\n").replace(/,/g, ""),
        components: componentsArray,
      });

      if (!msg) return message.channel.send(`Current Game Was Deleted`);

      const filter = (button) => {
        return button.user.id === message.author.id;
      };
      const game = message.channel.createMessageComponentCollector({
        filter,
        componentType: "BUTTON",
      });
      function update(die, win) {
        if (win === true) {
          game.stop();
          gameEnded = true;
          componentsArray[0].components[1].disabled = true;

          message.channel.send("gg you win");
        }
        if (die === true) {
          game.stop();
          gameEnded = true;
          componentsArray[0].components[1].disabled = true;

          message.channel.send("you lost, be proud");
        }
        msg.edit({
          content: positions[data.color].join("\n").replace(/,/g, ""),
          components: componentsArray,
        });
      }
      setInterval(() => {
        if (gameEnded === false)
          data.color = colors[Math.floor(Math.random() * 2)];
        update();
      }, 2000);
      game.on("collect", async (button) => {
        button.deferUpdate();
        if (data.color === "red") return update(true);
        if (data.left === 1) update(false, true);

        colors.forEach((color) => {
          const thearraytofind = positions[color].filter((x) =>
            Array.isArray(x)
          );
          const i = positions[color]
            .filter((x) => Array.isArray(x))
            .map((x) => positions[color].indexOf(x))[0];

          const dataBefore = positions[color][i - 1];
          positions[color][i - 1] = thearraytofind;
          positions[color][i] = dataBefore;
        });

        data.left--;
        update();
      });
    } catch (err) {
      message.reply(
        `Oh no, an error occurred: \`\`\`${err.message}\`\`\`. Try again later!`
      );
    }
  },
};