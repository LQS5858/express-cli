const download = require('download-git-repo')
const path = require('path')
const logger = require('./logger')
const ora = require('ora')

export const downloadTemplate = (gitPath = 'LQS5858/express-12306') => {
    let loading = ora('downloading template ...');
    return new Promise((resolve, reject) => {
        loading.start()
        download(gitPath, path.resolve(process.cwd(), './template'), err => {
            if (err) {
                logger.error(err)
                loading.fail()
                reject(err)
            } else {
                logger.info('模板下载成功')
                loading.succeed()
                resove('模板下载成功')
            }
        })
    })
}