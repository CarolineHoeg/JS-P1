// 1.1
const os = require('./osInfo');
console.log(os);

// 1.2
const DOSDetector = require('./dosDetector');

let instance = new DOSDetector(1000);

instance.on('DOSDetected', (arg) => {
    console.log('Detected on URL: ' + arg.url);
    console.log('Time between calls: ' + arg.timeBetweenCalls);
});

instance.addUrl('facebook.dk');

setTimeout(() => instance.addUrl('facebook.dk'), 250);
setTimeout(() => instance.addUrl('facebook.dk'), 500);
setTimeout(() => instance.addUrl('facebook.dk'), 2000);
