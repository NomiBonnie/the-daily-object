const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

// Find each entry by date and extract English fields
const dates = ['01-01','01-02','01-03','01-04','01-05','01-06','01-07','01-13','01-14','01-15','01-16','01-20','01-23','01-26','01-27','01-28','01-30','01-31','02-01','02-04','02-08','02-12','02-14','02-22'];

for (const d of dates) {
  const marker = `date: '2026-${d}'`;
  const idx = content.indexOf(marker);
  if (idx === -1) { console.log(`${d}: NOT FOUND`); continue; }
  
  // Find the entry block - from preceding { to the next },
  const blockStart = content.lastIndexOf('{', idx);
  const blockEnd = content.indexOf('\n  },', idx) + 4;
  const block = content.substring(blockStart, blockEnd);
  
  // Extract title_en
  const titleEn = block.match(/title_en:\s*'([^']+)'/)?.[1] || '';
  const subtitleEn = block.match(/subtitle_en:\s*'([^']+)'/)?.[1] || '';
  const title = block.match(/title:\s*'([^']+)'/)?.[1] || '';
  
  console.log(`\n=== ${d} ===`);
  console.log(`title: ${title}`);
  console.log(`title_en: ${titleEn}`);
  console.log(`subtitle_en: ${subtitleEn}`);
  
  // Check if dateConnection_en exists
  const hasEnFields = block.includes('dateConnection_en');
  console.log(`has EN fields: ${hasEnFields}`);
  
  // Print English content fields
  const dcEn = block.match(/dateConnection_en:\s*[`']([^`']+)/)?.[1];
  if (dcEn) console.log(`dateConnection_en: ${dcEn.substring(0, 100)}...`);
}
