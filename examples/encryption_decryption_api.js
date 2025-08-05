require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const { encryptFile, decryptFile } = require('./../utils/crypto.helper');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/encrypt', upload.single('file'), async (req, res) => {
  const inputPath = req.file.path;
  const outputPath = path.join('uploads', `${req.file.filename}_encrypted`);

  try {
    await encryptFile(inputPath, outputPath);
    res.download(outputPath);
  } catch (err) {
    res.status(500).send('Encryption failed: ' + err.message);
  }
});

app.post('/decrypt', upload.single('file'), async (req, res) => {
  const inputPath = req.file.path;
  const outputPath = path.join('uploads', `${req.file.filename}_decrypted`);

  try {
    await decryptFile(inputPath, outputPath);
    res.download(outputPath);
  } catch (err) {
    res.status(500).send('Decryption failed: ' + err.message);
  }
});

app.listen(3000, () => {
  console.log('File crypto API running on http://localhost:3000');
});