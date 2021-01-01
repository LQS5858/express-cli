#! /usr/bin/env node
"use strict";

const program = require('commander');

const path = require('path');

program.version(`Version is ${require(path.resolve(__dirname, '../../package.json')).version}`).description('A simple CLI for building initialize project include Wechat applet, Vue, Egg (nodejs)').usage('<command> [options]').command('create').action((name, cmd) => {
  require('../lib/create');
}).parse(process.argv);