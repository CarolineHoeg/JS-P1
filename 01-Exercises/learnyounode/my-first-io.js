const fs = require('fs');

const file_content = fs.readFileSync(process.argv[2]).toString();
const lines = file_content.split('\n').length - 1;
console.log(lines);