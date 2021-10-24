const { ContextMenuCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName("message")
    .setType(3),
    /**
     * @see https://discord.com/developers/docs/interactions/application-commands#message-commands
     */

    async execute(client, interaction){
        const message = await interaction.channel.messages.fetch(interaction.targetId);

        return interaction.reply(`${message.author.tag} said ${message.content}`)
    }
}