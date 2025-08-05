const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get('/api/download', (req, res) => {
  const filePath = './storage/test.txt';
  res.setHeader('Content-Disposition', 'attachment; filename=test.txt');

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);

  stream.on('error', err => {
    res.status(500).send('File streaming error');
  });
});

// This enables video seeking, resumable downloads, and partial content delivery
app.get('/api/video', (req, res) => {
  const path = 'sample.mp4';
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const [start, end] = range.replace(/bytes=/, '').split('-').map(Number);
    const chunkEnd = end || fileSize - 1;
    const chunkSize = chunkEnd - start + 1;

    const file = fs.createReadStream(path, { start, end: chunkEnd });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${chunkEnd}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    });
    file.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    });
    fs.createReadStream(path).pipe(res);
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));