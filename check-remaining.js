const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

// Check for remaining CP1252 mojibake patterns
// Ã + something patterns (double-encoded accented chars)
const patterns = [
  [/Ã©/g, 'é'], [/Ã‰/g, 'É'], [/Ã¶/g, 'ö'], [/Ã¼/g, 'ü'],
  [/Ã¢/g, 'â'], [/Ã®/g, 'î'], [/Ã /g, 'à'], [/Ãˆ/g, 'È'],
  [/Ã§/g, 'ç'], [/Ã¨/g, 'è'], [/Ã¡/g, 'á'], [/Ã³/g, 'ó'],
];

for (const [pat, repl] of patterns) {
  const matches = content.match(pat);
  if (matches) console.log(`Found ${matches.length} occurrences of ${pat} -> ${repl}`);
}

// Check for Â prefix (common in CP1252 mojibake for non-breaking space etc)
const aMatches = content.match(/Â[^\s]/g);
if (aMatches) console.log('Found Â patterns:', [...new Set(aMatches)].join(', '));
