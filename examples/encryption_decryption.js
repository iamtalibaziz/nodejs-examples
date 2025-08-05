const crypto = require('crypto');
const fs = require('fs');

const storagePath = './../storage';

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


// Encryption
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
const input = fs.createReadStream(`${storagePath}/test.txt`);
const output = fs.createWriteStream(`${storagePath}/test_encrypted.txt`);
input.pipe(cipher).pipe(output);

// You can also chain transformations, like compressing and encrypting in one go:
// input.pipe(zlib.createGzip()).pipe(cipher).pipe(output);

output.on('finish', () => {
  console.log('✅ Encryption complete:', `${storagePath}/test_encrypted.txt`);

  // Decryption
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    const input_decryption = fs.createReadStream(`${storagePath}/test_encrypted.txt`);
    const output_decryption = fs.createWriteStream(`${storagePath}/test_decrypted.txt`);
    input_decryption.pipe(decipher).pipe(output_decryption);

    output_decryption.on('finish', () => {
        console.log('✅ Decryption complete:', `${storagePath}/test_decrypted.txt`);
    });
});



