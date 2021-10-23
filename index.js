require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');

const client = new Client({
    intents: [
        /**
         * @Intents
         */

        // Intents.FLAGS.GUILDS,
        // Intents.FLAGS.GUILD_MEMBERS,
        // Intents.FLAGS.GUILD_BANS,
        // Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        // Intents.FLAGS.GUILD_INTEGRATIONS,
        // Intents.FLAGS.GUILD_WEBHOOKS,
        // Intents.FLAGS.GUILD_INVITES,
        // Intents.FLAGS.GUILD_VOICE_STATES,
        // Intents.FLAGS.GUILD_PRESENCES,
        // Intents.FLAGS.GUILD_MESSAGES,
        // Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        // Intents.FLAGS.GUILD_MESSAGE_TYPING,
        // Intents.FLAGS.DIRECT_MESSAGES,
        // Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        // Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
});

client.commands = new Collection();
client.slashCommands = new Collection();
client.menuCommands = new Collection();

// load our handlers
['command','event', 'interaction'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

// register slash (/) commands 
require('./util/register')();

client.login(process.env.TOKEN);