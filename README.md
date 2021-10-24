# Discord.js Bot Template

Contains a complete build / framework for message, slash and context menu commands.

## Prerequisites

- **[Node.js](https://nodejs.org/en/)** Latest 
- IDE like **[Visual Studio Code](https://code.visualstudio.com/)**

Following npm packages:

- [discord.js](https://www.npmjs.com/package/discord.js)
- [@discordjs/builders](https://www.npmjs.com/package/@discordjs/builders)
- [@discordjs/rest](https://www.npmjs.com/package/@discordjs/rest)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [discord-api-types](https://www.npmjs.com/package/discord-api-types)

To install all of them at once, run the following command in your console:-
```js
npm install discord.js @discordjs/builders @discordjs/rest dotenv discord-api-types
```

## Installation
**STEP 1:**
- Install [git](https://git-scm.com/).
- Open `cmd` in the directory you want to clone the repository.
- Run the command: `git clone https://github.com/Ninn08/Discord-Bot-Template.git`.
- And there you go! You have the repository in your directory!

**STEP 2:**
- Click on "Code", then "Download ZIP".
- Extract the `.zip` file in your directory, and you're good to go!
<img alt="Screenshot" src="https://media.discordapp.net/attachments/851664702752292884/901671271450959962/unknown.png">

__**IMPORTANT**__

- Fill in your `.env` file:
  - `TOKEN=` : Your bot's token
  - `PREFIX=` : Your bot's prefix
  - `CLIENT_ID=` : Your bot's discord ID
  - `GUILD_ID=` : Your test guild ID (You only need this if you don't want global commands)

- Remove the `#` in the line `# .env` in your **`.gitignore`** file, so that you don't push your secret variables.

## Information

- When creating message commands, delete the following:
  - `slashCommands`, `menuCommands` folder(s)
  - `interaction.js` in __handlers__ folder
  - `util` folder
  - `require("./util/register")()` in __index.js__
  - `interactionCreate.js` in __events__ folder

- When creating interactions (slash commands & context menus), delete the following:
  - `commmands` folder(s)
  - `command.js` in __handlers__ folder
  - `messageCreate.js` in __events__ folder
  - `PREFIX=` in __.env__

- For global interaction commmands, make the following change under [`util/register.js`](https://github.com/Ninn08/Discord-Bot-Template/tree/main/test)
```diff
- await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
+ await rest.put(Routes.applicationCommands(clientId), { body: commands })
```
For command attributes (message, slash, context), click **[here](https://github.com/Ninn08/Discord-Bot-Template/tree/main/test)**.

## Reports / Improvements

- You can contact me on Discord, **[Jack o'Nin#8881](https://discord.com/users/838620835282812969)**.
- For improvements / bug fixes, you can create a [pull request](https://github.com/Ninn08/Discord-Bot-Template/pulls).
