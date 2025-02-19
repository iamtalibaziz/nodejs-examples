// NPM modules
const UUID = require('uuid');

const currentENV = process.env.NODE_ENV || '';

const CommonHelper = {
  /**
   * 
   * @returns 
   */
  getNodeEnvironment: () => {
    return currentENV;
  },
  /**
   * @param  {...any} pMessage 
   * @returns 
   */
  consoleLog: (...pMessage) => {
    if (currentENV === 'local') {
      // console.log(processId, pMessage);
      try {
        console.log(`processId: ${process.pid}`, ' : ', new Date().toISOString(), ' : ', ...pMessage);
      } catch (e) {
        console.log(`processId: ${process.pid}`, ' : ', new Date().toISOString(), ' : ', pMessage);
      }
    }
    return true;
  },
  /**
   * @param {*} milliseconds 
   * @returns 
   */
  sleepInMilliSeconds: function(milliseconds = 1000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, milliseconds);
    });
  },
  /**
   * @param {*} pFilePath 
   * @returns 
   */
  splitFilePath: function(pFilePath) {
    return pFilePath.replace(/^.*[\\\/]/, '');
  },
  /**
   * Function to return given prop value from object
   * @param {*} obj object
   * @param {*} prop string
   * @param {*} defaultVal any
   * @returns null | any
   */
  getPropValueFromObject: function(obj, prop, defaultVal = null) {
    if (obj?.[prop]) {
      return obj[prop];
    }
    return defaultVal;
  },
  /**
   * 
   * @returns 
   */
  generateUID: function() {
    return UUID.v4();
  },
  /**
   * 
   * @param {*} total 
   * @param {*} size 
   * @returns 
   */
  generateArrayFromNum: function(total) {
    const array = [];
    for (let i = 0; i < total; i ++) {
      array.push(i);
    }
    return array;
  },
  /**
   * 
   * @param {*} arr 
   * @param {*} size 
   * @returns 
   */
  convertArrayToChunk: function(arr, size=5) {
    const newArr = [];
    for (let i=0; i < arr.length; i+=0) { 
      const sliced = arr.slice(i, size);
      newArr.push(sliced);
      arr.splice(0, size);
    }
    return newArr;
  },
};
    
module.exports = CommonHelper;
