module.exports = {
    name: "ping",
    description: "bot's latency to discord",

    run: async(client, message, args) => {
        const msg = await message.reply(`Pinging...`)
        const messageLatency = Math.round(msg.createdTimestamp - message.createdTimestamp)
        const clientLatency = Math.round(client.ws.ping)

        await msg.edit(`Pong! Websocket: ${clientLatency} ms. Discord: ${messageLatency} ms.`)
    }
}