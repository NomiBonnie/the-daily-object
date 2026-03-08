const fs = require('fs');
const buf = fs.readFileSync('src/data.ts');

// Try reading as latin1 first, then see if it decodes correctly as UTF-8
const latin1 = buf.toString('latin1');
const utf8 = buf.toString('utf8');

// Find the 01-01 entry title area
const start01 = utf8.indexOf("date: '2026-01-01'");
const titleArea = utf8.substring(start01 - 50, start01 + 300);
console.log("=== UTF8 read ===");
console.log(titleArea.substring(0, 200));

// Now try: read as latin1, find the same area, re-encode as latin1 bytes, decode as UTF-8
const start01_l = latin1.indexOf("date: '2026-01-01'");
const titleArea_l = latin1.substring(start01_l + 80, start01_l + 200);
const rebuf = Buffer.from(titleArea_l, 'latin1');
const decoded = rebuf.toString('utf8');
console.log("\n=== Latin1 -> UTF8 ===");
console.log(decoded);
