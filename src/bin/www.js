#! /usr/bin/env node
const program = require('commander')
const path = require('path')
const { version } = require('../../package.json')

program
    .version(version, '-V --version')
    .description('A simple CLI for building initialize project include Wechat applet, Vue, Egg (nodejs)')
    .usage('<command> [options]')
    .command('create')
    .action((name, cmd) => {
        require('../lib/create')
    })
    .parse(process.argv)


