const fs = require('fs');
const buf = fs.readFileSync('src/data.ts');
const latin1 = buf.toString('latin1');

// Find the title field for 01-01
const dateIdx = latin1.indexOf("date: '2026-01-01'");
// Go back to find the { before
const blockStart = latin1.lastIndexOf('{', dateIdx);
const titleMatch = latin1.substring(blockStart, blockStart + 500).match(/title: '([^']+)'/);
if (titleMatch) {
  const garbled = titleMatch[1];
  console.log('raw chars (hex):', [...garbled].map(c => c.charCodeAt(0).toString(16).padStart(2,'0')).join(' '));
  // These are raw UTF-8 bytes stored as latin1 codepoints
  const rebuf = Buffer.from(garbled, 'latin1');
  console.log('decoded:', rebuf.toString('utf8'));
}
