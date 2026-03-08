const fs = require('fs');
// Read file as raw bytes
const buf = fs.readFileSync('src/data.ts');
// Treat the bytes as latin1 string  
const latin1 = buf.toString('latin1');
// Find the title of 01-01
const idx = latin1.indexOf("date: '2026-01-01'");
const area = latin1.substring(idx + 100, idx + 130);
console.log('latin1 chars:', [...area].map(c => c.charCodeAt(0).toString(16)).join(' '));
console.log('latin1 string:', area);

// Now decode those bytes as UTF-8
const rebuf = Buffer.from(area, 'latin1');
console.log('bytes:', rebuf.toString('hex'));
const utf8 = rebuf.toString('utf8');
console.log('utf8:', utf8);
