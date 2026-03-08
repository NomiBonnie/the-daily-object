import { readFileSync, writeFileSync } from 'fs';

let c = readFileSync('src/data.ts', 'utf8');

// These entries need their images fixed. We need to target ONLY the specific date's entry.
// Strategy: find the date string, then replace the NEXT occurrence of the wrong image.

const fixes = [
  { date: '2026-02-04', wrong: 'gutenberg-bible.jpg', right: 'leger-mechanical-elements.jpg' },
  { date: '2026-02-08', wrong: 'panton-chair.jpg', right: 'ruskin-stones-of-venice.jpg' },
  { date: '2026-02-12', wrong: 'up-chair.jpg', right: 'boullee-cenotaph-newton.jpg' },
  { date: '2026-02-22', wrong: 'mercedes-35hp.jpg', right: 'gill-sans-typography.jpg' },
  { date: '2026-02-26', wrong: 'grand-central-terminal.jpg', right: 'levis-501.jpg' },
];

for (const fix of fixes) {
  const dateIdx = c.indexOf(`date: '${fix.date}'`);
  if (dateIdx === -1) { console.log(`SKIP ${fix.date}: not found`); continue; }
  
  // Find the end of this entry (next "date:" or end)
  const nextDateIdx = c.indexOf("date: '2026-", dateIdx + 20);
  const entryEnd = nextDateIdx === -1 ? c.length : nextDateIdx;
  
  let entry = c.substring(dateIdx, entryEnd);
  const count = entry.split(fix.wrong).length - 1;
  entry = entry.replaceAll(fix.wrong, fix.right);
  
  c = c.substring(0, dateIdx) + entry + c.substring(entryEnd);
  console.log(`${fix.date}: ${fix.wrong} -> ${fix.right} (${count} in entry)`);
}

c = c.replace(/IMAGE_VERSION = '[^']*'/, "IMAGE_VERSION = '20260226h'");

writeFileSync('src/data.ts', c, 'utf8');
console.log('Done. VERSION = 20260226h');
