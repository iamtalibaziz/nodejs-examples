const crypto = require('crypto');
const fs = require('fs');

// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex'); // 32 bytes
const iv = Buffer.from(process.env.ENCRYPTION_IV, 'hex');   // 16 bytes

function encryptFile(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    input.pipe(cipher).pipe(output);

    output.on('finish', () => resolve('Encryption complete'));
    output.on('error', reject);
    input.on('error', reject);
    cipher.on('error', reject);
  });
}

function decryptFile(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);

    input.pipe(decipher).pipe(output);

    output.on('finish', () => resolve('Decryption complete'));
    output.on('error', reject);
    input.on('error', reject);
    decipher.on('error', reject);
  });
}

module.exports = { encryptFile, decryptFile };