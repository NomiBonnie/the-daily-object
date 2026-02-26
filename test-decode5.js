const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

// Read as utf8, then for mojibake text, we need to:
// The displayed chars like æ¬§å…ƒçº¸å¸ are UTF-8 decoded, but they're actually 
// UTF-8 bytes of the real Chinese that were misread as latin1 and re-saved as UTF-8
// So: take the string chars, map to latin1 bytes, decode as utf8

function fixMojibake(str) {
  try {
    return Buffer.from(str, 'latin1').toString('utf8');
  } catch(e) {
    return str;
  }
}

// Test with the title from 01-01 as read by node in utf8
const dateIdx = content.indexOf("date: '2026-01-01'");
const blockStart = content.lastIndexOf('{', dateIdx);
const titleMatch = content.substring(blockStart, blockStart + 500).match(/title: '([^']+)'/);
const title = titleMatch[1];
console.log('original:', title);
console.log('fixed:', fixMojibake(title));

// Check if all chars are in latin1 range
const allLatin1 = [...title].every(c => c.charCodeAt(0) <= 255);
console.log('all latin1:', allLatin1);
console.log('char codes:', [...title].map(c => c.charCodeAt(0)));
