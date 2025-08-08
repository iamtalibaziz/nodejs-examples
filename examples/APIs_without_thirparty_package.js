const http = require('http');
const url = require('url');

let users = []; // in-memory user store
let idCounter = 1;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  // GET /users - List all users
  if (req.method === 'GET' && pathname === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }

  // GET /users/:id - Get single user
  else if (req.method === 'GET' && /^\/users\/\d+$/.test(pathname)) {
    const id = parseInt(pathname.split('/')[2]);
    const user = users.find(u => u.id === id);
    if (!user) {
      res.writeHead(404);
      return res.end(JSON.stringify({ error: 'User not found' }));
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
  }

  // POST /users - Create user
  else if (req.method === 'POST' && pathname === '/users') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { name, email } = JSON.parse(body);
      const newUser = { id: idCounter++, name, email };
      users.push(newUser);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });
  }

  // PUT /users/:id - Update user
  else if (req.method === 'PUT' && /^\/users\/\d+$/.test(pathname)) {
    const id = parseInt(pathname.split('/')[2]);
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const index = users.findIndex(u => u.id === id);
      if (index === -1) {
        res.writeHead(404);
        return res.end(JSON.stringify({ error: 'User not found' }));
      }
      const updatedData = JSON.parse(body);
      users[index] = { ...users[index], ...updatedData };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users[index]));
    });
  }

  // DELETE /users/:id - Delete user
  else if (req.method === 'DELETE' && /^\/users\/\d+$/.test(pathname)) {
    const id = parseInt(pathname.split('/')[2]);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
      res.writeHead(404);
      return res.end(JSON.stringify({ error: 'User not found' }));
    }
    const deleted = users.splice(index, 1);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(deleted[0]));
  }

  // Fallback 404
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
