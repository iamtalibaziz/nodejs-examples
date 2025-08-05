const zlib = require('zlib');

const input = fs.createReadStream('test.txt');
const output = fs.createWriteStream('test.txt.gz');

input.pipe(zlib.createGzip()).pipe(output);
