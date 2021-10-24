const { Client, Interaction, CommandInteraction, ContextMenuInteraction } = require("discord.js");

/**
 * 
 * @param {Client} client 
 * @param {Interaction|CommandInteraction|ContextMenuInteraction} interaction 
 */

module.exports = async (client, interaction) => {
  if(interaction.isCommand()){
    const command = client.slashCommands.get(interaction.commandName);
    if(!command) return;

    try {
      await command.execute(client, interaction)
    } catch (error) {
      console.log(error)
      await interaction.reply({
        content: `An error occurred`,
        ephemeral: true
      })
    }
  }

  if(interaction.isContextMenu()){
    const command = client.menuCommands.get(interaction.commandName)
    if(!command) return;

    try {
      await command.execute(client, interaction)
    } catch (error) {
      console.log(error)
      await interaction.reply({
        content: `An error occurred`,
        ephemeral: true
      })
    }
  }
}