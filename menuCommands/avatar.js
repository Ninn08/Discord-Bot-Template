const { ContextMenuCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName("avatar")
    .setType(2), 
    /**
     * @see https://discord.com/developers/docs/interactions/application-commands#user-commands
     */

    async execute(client, interaction){
        const user = await client.users.fetch(interaction.targetId) // fetch the user
    
        const avatar = new MessageAttachment(user.displayAvatarURL({ size: 512 }), "avatar.png")
        return interaction.reply({
            files: [
                avatar
            ]
        })
    }
}