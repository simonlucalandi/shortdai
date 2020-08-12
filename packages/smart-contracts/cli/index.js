const { program } = require("commander");

require("./commands/deploy.js").cmd(program);
require("./commands/swap.js").cmd(program);
require("./commands/query-cdp.js").cmd(program);

program.parse(process.argv);
