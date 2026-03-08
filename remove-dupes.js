const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

// Find all occurrences of 01-21 and 01-22
const first21 = content.indexOf("date: '2026-01-21'");
const first22 = content.indexOf("date: '2026-01-22'");
const second21 = content.indexOf("date: '2026-01-21'", first21 + 1);
const second22 = content.indexOf("date: '2026-01-22'", first22 + 1);

console.log('first 01-21:', first21, 'second:', second21);
console.log('first 01-22:', first22, 'second:', second22);

// Find the { that starts the second 01-21 entry
let entryStart = content.lastIndexOf('\n  {', second21);
// Also look for a comment before it
const commentBefore = content.lastIndexOf('\n  //', entryStart);
if (commentBefore > entryStart - 80) {
  entryStart = commentBefore;
}

// Find the end of the second 01-22 entry: its closing },
const entry22End = content.indexOf('\n  },', second22) + 5;

// What comes after?
const afterContent = content.substring(entry22End).trim();
console.log('After duplicates:', afterContent.substring(0, 30));

// Remove from entryStart to entry22End, but keep the array closing ];
content = content.substring(0, entryStart) + '\n' + content.substring(entry22End).replace(/^\s*\n/, '\n');

fs.writeFileSync('src/data.ts', content, 'utf8');

// Verify
const c2 = fs.readFileSync('src/data.ts', 'utf8');
console.log('01-21 count:', (c2.match(/date: '2026-01-21'/g)||[]).length);
console.log('01-22 count:', (c2.match(/date: '2026-01-22'/g)||[]).length);
