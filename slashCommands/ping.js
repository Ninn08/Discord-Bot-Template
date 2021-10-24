const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("bot's latency to discord"),

    async execute(client, interaction){
        interaction.reply(`Pinging...`)
        const discordLatency = Math.round(Date.now() - interaction.createdTimestamp)
        const clientLatency = client.ws.ping

        await interaction.editReply(`Pong! Websocket: ${clientLatency} ms. Discord: ${discordLatency} ms.`)
    }
}