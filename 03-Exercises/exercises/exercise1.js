const getSecureRandom = require('./ex1-crypto-module');

let sizes = [48, 40, 32, 24, 16, 8];
let randoms = [];
sizes.forEach((size) => getSecureRandom(size).then((data) => {
    console.log(data);
    randoms.push(data);
}));

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/api/securerandoms') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ randoms }));
        return res.end();
    }
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server</h2>
        <p>Check this endpoint <code>/api/securerandoms</code></p>
      `);
        return res.end();
    }
});
server.listen(3000);
console.log('listening on 3000');