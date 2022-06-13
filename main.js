const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
const {token} = require("./config.json")

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  const user = await client.users.fetch("242000364281266176")
  user.send("hello :)")
})

client.login(token);
