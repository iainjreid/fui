"use strict";

const fs = require("fs");
const util = require("util");

(async () => {
  const { name, dependencies } = require("./package.json");

  for (const dependency in dependencies) {
    if (!dependency.startsWith(`${name}-`)) {
      continue;
    }

    try {
      await util.promisify(fs.mkdir)("lib");
    } catch {}

    await util.promisify(fs.writeFile)(`lib/${dependency.substr(`${name}-`.length)}.js`, `module.exports = require("${dependency}")`);
  }
})();

