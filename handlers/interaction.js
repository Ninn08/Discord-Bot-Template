const fs = require("fs");

module.exports = (client) => {
    const files = fs.readdirSync("slashCommands")
    for(const folders of files){
        const folder = fs
            .readdirSync(`./slashCommands/${folders}`)
            .filter(file => file.endsWith(".js"))

        for(const file of folder){
            const command = require(`../slashCommands/${folders}/${file}`)

            if(command.data){
                client.slashCommands.set(command.data.name, command)
            }
        }
    }

    const cfiles = fs.readdirSync("menuCommands")
    for(const folders of cfiles){
        const folder = fs
            .readdirSync(`./menuCommands/${folders}`)
            .filter(file => file.endsWith(".js"))

        for(const file of folder){
            const command = require(`../menuCommands/${folders}/${file}`)

            if(command.data){
                client.menuCommands.set(command.data.name, command)
            }
        }
    }
};
