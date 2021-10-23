const { Client, Message } = require("discord.js");

module.exports = {
	/**
	 * Name of command
	 * @type {string}
	 */
	name: "",

	/**
	 * Command description
	 * @type {?string}
	 */
	description: "",

	/**
	 * Command usage
	 * @type {?string}
	 */
	usage: "",

	/**
	 * Command aliases
	 * @type {?string[]}
	 */
	aliases: [],

	/**
	 * User permissions to run the command
	 * @type {string[]}
	 */
	permissions: [],

	/**
	 * Bot permissions to run the command
	 * @type {string[]}
	 */
	botPermissions: [],

	/**
	 * Cooldown of the command
	 * @type {?number}
	 */
	timeout: "",

	/**
	 * Whether the command only works for guild
	 * @type {boolean}
	 */
	guildOnly: true,
	
	/**
	 * 
	 * @param {Client} client 
	 * @param {Message} message 
	 * @param {String[]} args 
	 */
	run: async(client, message, args) => {
		// callback goes here
	}
}