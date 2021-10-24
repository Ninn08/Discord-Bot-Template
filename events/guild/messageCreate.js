const prefix = process.env.PREFIX;
const { Permissions, Client, Message } = require("discord.js");

const validatePermissions = (permissions) => {
  const validPermissions = Object.keys(Permissions.FLAGS);

  for (const permission of permissions) {
    if (!validPermissions.includes(permission)) {
      throw new Error(`Unknown permission node "${permission}"`);
    }
  }
};

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 */

module.exports = async (client, message) => {
    const { member, content, guild } = message;

	if(message.author.bot) return;

	if(!content.startsWith(prefix)) return;

	const args = content.slice(prefix.length).split(/[ ]+/);
	const cmdName = args.shift().toLowerCase();
	const command = message.client.commands.get(cmdName)
       || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

	if(!command) return;

	let {
		permissions = [],
		botPermissions = [],
		run,
		guildOnly
	} = command;

	if(guildOnly && message.channel.type === "DM") return message.reply('This command cannot be executed in DMS.');

	// Ensure the permissions are in an array and are all valid
	if (permissions.length) {
		if (typeof permissions === 'string') {
			permissions = [permissions];
		}

		validatePermissions(permissions);
	}

	// Ensure the user has the required permissions
	for (const permission of permissions) {
		if (!member.permissions.has(permission)) {
			message.reply(`Missing \`${permission}\` Permission`);
			return;
		}
	}

	// Ensuring the bot permissions
	if(botPermissions.length){
		if(typeof botPermissions === "string"){
			botPermissions = [botPermissions];
		}

		validatePermissions(botPermissions)
	}

	// Ensure the bot has the required permissions
	for(const permission of botPermissions){
		if(!guild.me.permissions.has(permission)){
			if(guild.me.permissions.has("SEND_MESSAGES") && message.channel.permissionsFor(guild?.me).has("SEND_MESSAGES")){
				message.reply(`I'm missing \`${permission}\` Permission`)
			} else return;
		}
	}

	// run the command
	try {
		message.channel.sendTyping()
		await run(client, message, args).catch(console.error)
	} catch (error) {
		console.log(error)
		await message.reply(`An error occurred while executing the command`).catch(console.error)
	}
};
