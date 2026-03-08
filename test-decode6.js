const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

// Windows-1252 to byte mapping for chars > 127 that differ from latin1
const cp1252map = {
  0x20AC: 0x80, // €
  0x201A: 0x82, // ‚
  0x0192: 0x83, // ƒ
  0x201E: 0x84, // „
  0x2026: 0x85, // …
  0x2020: 0x86, // †
  0x2021: 0x87, // ‡
  0x02C6: 0x88, // ˆ
  0x2030: 0x89, // ‰
  0x0160: 0x8A, // Š
  0x2039: 0x8B, // ‹
  0x0152: 0x8C, // Œ
  0x017D: 0x8E, // Ž
  0x2018: 0x91, // '
  0x2019: 0x92, // '
  0x201C: 0x93, // "
  0x201D: 0x94, // "
  0x2022: 0x95, // •
  0x2013: 0x96, // –
  0x2014: 0x97, // —
  0x02DC: 0x98, // ˜
  0x2122: 0x99, // ™
  0x0161: 0x9A, // š
  0x203A: 0x9B, // ›
  0x0153: 0x9C, // œ
  0x017E: 0x9E, // ž
  0x0178: 0x9F, // Ÿ
};

function fixMojibake(str) {
  // Convert string chars back to CP1252 bytes, then decode as UTF-8
  const bytes = [];
  for (const ch of str) {
    const cp = ch.codePointAt(0);
    if (cp <= 0x7F) {
      bytes.push(cp);
    } else if (cp <= 0xFF) {
      bytes.push(cp); // Latin-1 supplement maps directly
    } else if (cp1252map[cp] !== undefined) {
      bytes.push(cp1252map[cp]);
    } else {
      // Non-CP1252 char - this is actual Unicode, keep as UTF-8 bytes
      const encoded = Buffer.from(ch, 'utf8');
      for (const b of encoded) bytes.push(b);
    }
  }
  return Buffer.from(bytes).toString('utf8');
}

// Test
const dateIdx = content.indexOf("date: '2026-01-01'");
const blockStart = content.lastIndexOf('{', dateIdx);
const titleMatch = content.substring(blockStart, blockStart + 500).match(/title: '([^']+)'/);
console.log('fixed title:', fixMojibake(titleMatch[1]));

// Test with dateConnection
const dcMatch = content.substring(blockStart, blockStart + 2000).match(/dateConnection: '([^']+)'/);
if (dcMatch) console.log('fixed dateConnection:', fixMojibake(dcMatch[1]));
