// NPM modules
const fs = require('fs');

const FileHelper = {
  /**
   * 
   * @param {*} path 
   * @returns 
   */
  readFileAsync: (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  },
};
    
module.exports = CommonHelper;
