const inquirer = require('inquirer')

const chalk = require('chalk')

const { exec } = require('child_process')

chalk.level = 3  //设置chalk等级为3

const fs = require('fs')

module.exports = () => {
    const prompts = [{
        type: 'input',
        message: 'your projectName',
        name: 'projectName',
        validate: val => {
            if (!val) return chalk.red('项目名不能为空,请重新输入')
            return true
        }
    }, {
        type: 'input',
        message: 'your version:',
        name: 'version',
        default: '1.0.0'
    },
    // {
    //     type: 'confirm',
    //     message: 'use vuex',
    //     name: 'useVuex',
    //     default: true
    // }
    {
        type: 'list',
        message: 'the UI fragment',
        name: 'UIfrag',
        choices: [
            { name: 'no UI fragment', value: 'none' },
            { name: 'element-ui', value: 'eleUI' }
        ]
    }
    ]



    inquirer.prompt(prompts).then(answer => {
        console.log(chalk.green('开始初始化文件\n'))
        console.log(chalk.gray('初始化中。。。'))
        const giturl = 'https://github.com/LQS5858/express-12306.git'
        const { projectName } = answer || {}
        exec(`git clone ${giturl} ${projectName}`, (error, stdout, stderr) => {
            // 克隆项目并进入根目录
            console.log(chalk.green('模版下载完毕'));
            if (error) {
                // 当有错误打印错误并退出
                console.log('error--', error);
                console.log(chalk.red('拷贝文件失败'));
                process.exit()
            }
            exec(`cd ${answer.projectName} && npm i`, (err, stdout, stderr) => {
                if (error) {
                    console.log(chalk.red('拷贝文件失败'));
                    process.exit()
                }
                console.log(chalk.green('依赖包下载完毕'));
                console.log(chalk.green('初始化完成'));
                process.exit()
            })
        })
    })

}