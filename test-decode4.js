const fs = require('fs');
const buf = fs.readFileSync('src/data.ts');
const latin1 = buf.toString('latin1');

const dateIdx = latin1.indexOf("date: '2026-01-01'");
const blockStart = latin1.lastIndexOf('{', dateIdx);
const titleMatch = latin1.substring(blockStart, blockStart + 500).match(/title: '([^']+)'/);
if (titleMatch) {
  const garbled = titleMatch[1];
  // First round: latin1 -> utf8
  const round1 = Buffer.from(garbled, 'latin1').toString('utf8');
  console.log('round1:', round1);
  // Second round: latin1 -> utf8
  const round2 = Buffer.from(round1, 'latin1').toString('utf8');
  console.log('round2:', round2);
}
