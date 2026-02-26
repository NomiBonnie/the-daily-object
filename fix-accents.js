const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

// Fix CP1252 mojibake for accented chars in English fields
// These are UTF-8 bytes read as CP1252
// Ã followed by another char = double-encoded UTF-8
// Ã (C3) + next byte forms a 2-byte UTF-8 sequence

// Common patterns:
content = content.replace(/Ã¼/g, 'ü');
content = content.replace(/Ã§/g, 'ç');
content = content.replace(/Ã¨/g, 'è');
content = content.replace(/Ã¡/g, 'á');
content = content.replace(/Â¥/g, '¥');

// Fix WA?rzburg -> Würzburg
content = content.replace(/WA\uFFFDrzburg/g, 'Würzburg');
content = content.replace(/WA.rzburg/g, (m) => m.includes('ü') ? m : 'Würzburg');

fs.writeFileSync('src/data.ts', content, 'utf8');
console.log('Fixed remaining accented chars');
