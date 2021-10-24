const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");

module.exports = async () => {
  const commands = [];

  const clientId = process.env.CLIENT_ID;
  const guildId = process.env.GUILD_ID;

  // register slash commands
  const slashCommands = fs
    .readdirSync("slashCommands");
  for(const files of slashCommands){
    const folder = fs
      .readdirSync(`slashCommands/${files}`)
      .filter(file => file.endsWith(".js"));

      for(const file of folder){
        const command = require(`../slashCommands/${files}/${file}`);
        commands.push(command.data.toJSON())
      }
  }

  // register context menu commands
  const menuCommands = fs
    .readdirSync("menuCommands");
  for(const files of menuCommands){
    const folder = fs
      .readdirSync(`menuCommands/${files}`)
      .filter(file => file.endsWith(".js"));

      for(const file of folder){
        const command = require(`../menuCommands/${files}/${file}`);
        commands.push(command.data.toJSON())
      }
  }

  const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands
    });

    /**
     * @globalCommands
     * await rest.put(Routes.applicationCommands(clientId), {
     *  body: commands
     * })
     */

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
