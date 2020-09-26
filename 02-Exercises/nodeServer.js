const http = require('http');
const os = require('./osInfo');
const DOSDetector = require('./dosDetector');

let instance = new DOSDetector(3000);
instance.on('DOSDetected', (arg) => {
    console.log('Detected on URL: ' + arg.url);
    console.log('Time between calls: ' + arg.timeBetweenCalls);
});


const server = http.createServer((req, res) => {
    if (req.url === '/api/os-info') {
        instance.addUrl(req.url);
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ os }));
        return res.end();
    }
    if (req.url === '/') {
        instance.addUrl(req.url);
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo</h2>
        <p>Exposes this endpoint <code>/api/os-info</code></p>
      `);
        return res.end();
    }
});
server.on('connection', (sock) => {
    console.log(sock.remoteAddress);
});
server.listen(3000);
console.log('listening on 3000');
