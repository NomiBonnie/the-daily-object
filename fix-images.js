const fs = require('fs');
let c = fs.readFileSync('src/data.ts', 'utf8');

// Fix 01-31: MUJI CD Player should use muji-cd-player.jpg, not bakelite-radio-collection.jpg
const dateIdx = c.indexOf("date: '2026-01-31'");
if (dateIdx === -1) { console.log('01-31 NOT FOUND'); process.exit(1); }
const nextDateIdx = c.indexOf("date: '2026-", dateIdx + 20);
const entryEnd = nextDateIdx === -1 ? c.length : nextDateIdx;

let entry = c.substring(dateIdx, entryEnd);
const count = entry.split('bakelite-radio-collection.jpg').length - 1;
entry = entry.replaceAll('bakelite-radio-collection.jpg', 'muji-cd-player.jpg');
c = c.substring(0, dateIdx) + entry + c.substring(entryEnd);
console.log(`01-31: bakelite-radio-collection.jpg -> muji-cd-player.jpg (${count} replacements)`);

c = c.replace(/IMAGE_VERSION = '[^']*'/, "IMAGE_VERSION = '20260226i'");
fs.writeFileSync('src/data.ts', c, 'utf8');
console.log('Done');
