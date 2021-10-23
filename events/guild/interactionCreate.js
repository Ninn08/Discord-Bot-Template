module.exports = async (client, interaction) => {
    if (interaction.isCommand()) {
      const command = client.slashCommands.get(interaction.commandName);
      if (!command) return;

      // execute
      try {
        await command.execute(client, interaction)
      } catch (error) {
        console.log(error)
        await interaction.reply({
          content: "An error occurred while executing the command",
          ephemeral: true
        }).catch(console.error)
      }
    }
};