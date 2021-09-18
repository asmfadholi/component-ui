#!/usr/bin/env node

var shell = require("shelljs");

const init = async () => {
    await shell.exec("yarn install --cwd ./example", { async:true });
};

init();

