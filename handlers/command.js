const fs = require("fs");
const path = require("path");
const rootDir = path.dirname(require.main.filename);

module.exports = (client) => {
  const fileArray = [];

  function readCommands(dir) {
    const files = fs.readdirSync(path.join(rootDir, dir));

    for (const file of files) {
      const stat = fs.lstatSync(path.join(rootDir, dir, file));
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file));
      } else {
        const fileDir = dir.replace("\\", "/");
        fileArray.push(fileDir + "/" + file);
      }
    }
  }
  readCommands("commands");

  for (const file of fileArray) {
    const command = require(`../${file}`);

    if (command.name) {
      client.commands.set(command.name, command);
    }
  }
};
