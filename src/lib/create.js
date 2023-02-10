const inquirer = require('inquirer')
import prompts from 'prompts'
const { downloadTemplate } = require('./downloadTemplate')
const { gitPathVue3PcReactive, gitVue3h5Reactive } = require('../config')
const path = require('path')
const logger = require('./logger')
const { updateJsonFile } = require('../utils/updateJson')


export const create = (proName) => {
    const env = process.env.NODE_ENV
    const questions = [
        {
            name: 'projectName',
            type: 'text',
            message: 'Project name:',
            initial: proName ? proName : "vue3-reactive"
        },
        {
            type: 'select',
            name: 'gitPath',
            message: 'Pick a gitpath',
            choices: [
                { title: 'vue3-reactive-pc', description: 'This is pc reactive template', value: gitPathVue3PcReactive },
                { title: 'vue3-h5', description: 'This is h5 template', value: gitVue3h5Reactive },
            ],
            initial: 0
        },
        {
            name: 'version',
            message: 'project version',
            initial: '1.0.0',
        }
    ]
    prompts(questions).then(answer => {
        logger.info('answer', answer)
        const { projectName: name, gitPath } = answer || {}
        downloadTemplate(gitPath, name).then(() => {
            const filePath = path.resolve(process.cwd(), `./${name}/package.json`)
            updateJsonFile(filePath, answer)
        })
    })
}

