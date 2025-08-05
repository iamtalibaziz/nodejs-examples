const fs = require("fs");

const sourceFilePath = "./storage/test.txt";
const destFilePath = `./storage/test_${new Date().getTime()}.txt`;

fs.readFile(sourceFilePath, (error, data) => {
    console.log("readFile:error", error);
    console.log("readFile:data", data);
})


fs.read(sourceFilePath, (error, data) => {
    console.log("read:error", error);
    console.log("read:data", data);
})