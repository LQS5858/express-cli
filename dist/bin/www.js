#! /usr/bin/env node
"use strict";

const program = require('commander');

const {
  version
} = require('../../package.json');

const {
  create
} = require('../lib/create');

program.usage('<command> [options]').version(version, '-v,--version').command('create').description('A simple CLI for building initialize project include Wechat applet, Vue, Egg (nodejs)').action((name, cmd) => {
  const _name = cmd === null || cmd === void 0 ? void 0 : cmd[1];

  create(_name);
}).parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}