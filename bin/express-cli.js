#!/usr/bin/env node --harmony

// 定义脚手架文件路径

process.env.NODE_PATH = __dirname + '/../node_modules'

const { arguments } = require('commander')
const program = require('commander')

// 获取package.json中的version来作为项目版本号

program.version(require('../package.json').version)

// 定义脚手架的方法在program.help方法中使用

program.usage('<command>')

/**
 * command 为执行的命令
 * description为命令的描述
 * alias为简写
 * action为命令相应的操作
 */

program.command('init')
    .description('init a express+awilix+mysql project')
    .alias('i')
    .action(() => {
        require('../command/init.js')
    })

// program.parse(arguments)会处理参数,没有被使用的选项会被存放在program.args数组中
program.parse(process.argv)

// 如果有选项被放在program.args,即没有被program.parse处理,则默认使用program.help()
if (program.args.lenth) {
    program.help()
}
