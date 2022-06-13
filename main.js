const { Client } = require('discord.js-selfbot-v13');
const {token} = require("./config.json")
const stamps = require("./timestamps.json")

let lastTime = null
  console.log("HELLo 2")

const fn = () => {
  console.log("HELLo")
  const hr = new Date().getHours().toString().padStart(2, "0")
  const min = new Date().getMinutes().toString().padStart(2, "0");
  const a = `${hr}:${min}`
  console.log("checking", a)

  if (a === lastTime) return;
  lastTime = a;

  const match = stamps[a]
  
  if (match) {
    const msg = match[(Math.random() * match.length)] ?? match[0]
    console.log("sending", msg)

    const client = new Client(); // All partials are loaded automatically
    client.on('ready', async () => {
      // const gdm = await client.channels.fetch("439815556246274078") // the boys
      const gdm = await client.channels.fetch("985863940414271498") // test
      await gdm.send(msg)
      client.destroy()
    })
    client.login(token);
  }
}

setInterval(fn, 10 * 1000)
fn()

