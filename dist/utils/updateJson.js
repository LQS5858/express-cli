"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateJsonFile = void 0;

const fs = require('fs');

const updateJsonFile = (fileName, obj) => {
  return new Promise(resolve => {
    if (fs.existsSync(fileName)) {
      // 读出模板下的package.json文件
      const data = fs.readFileSync(fileName).toString(); // 转为json对象

      let json = JSON.parse(data);
      console.log('json', json); // 将用户输入的更新到模板package.json文件

      Object.keys(obj).forEach(key => {
        json[key] = obj[key];
      }); // 重写模板下的package.json文件

      fs.writeFileSync(file, JSON.stringify(json, null, '\t'), 'utf-8');
      resolve();
    }
  });
};

exports.updateJsonFile = updateJsonFile;