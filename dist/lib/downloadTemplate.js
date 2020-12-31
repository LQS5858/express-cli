"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadTemplate = void 0;

const download = require('download-git-repo');

const path = require('path');

const logger = require('./logger');

const ora = require('ora');

const downloadTemplate = (gitPath = 'LQS5858/express-12306', name = 'express-cli') => {
  let loading = ora('downloading template ...');
  return new Promise((resolve, reject) => {
    loading.start();
    download(gitPath, path.resolve(process.cwd(), `./${name}`), err => {
      if (err) {
        logger.error(err);
        loading.fail();
        reject(err);
      } else {
        logger.info('模板下载成功');
        loading.succeed();
        resolve('模板下载成功');
      }
    });
  });
};

exports.downloadTemplate = downloadTemplate;