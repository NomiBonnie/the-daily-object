const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

const cp1252map = {
  0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84,
  0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x02C6: 0x88,
  0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C,
  0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93,
  0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
  0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B,
  0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F,
};

function isMojibake(str) {
  // Check if a string contains typical mojibake patterns (high Latin chars that form UTF-8 sequences)
  if (!str) return false;
  const suspicious = [...str].filter(c => {
    const cp = c.codePointAt(0);
    return cp >= 0xC0 && cp <= 0xFF;
  }).length;
  return suspicious > str.length * 0.1; // >10% of chars are high latin = likely mojibake
}

function fixMojibake(str) {
  if (!str || !isMojibake(str)) return str;
  const bytes = [];
  for (const ch of str) {
    const cp = ch.codePointAt(0);
    if (cp <= 0xFF) {
      bytes.push(cp);
    } else if (cp1252map[cp] !== undefined) {
      bytes.push(cp1252map[cp]);
    } else {
      const encoded = Buffer.from(ch, 'utf8');
      for (const b of encoded) bytes.push(b);
    }
  }
  try {
    const result = Buffer.from(bytes).toString('utf8');
    // Verify it doesn't contain replacement chars
    if (result.includes('\uFFFD')) return str; // failed, return original
    return result;
  } catch(e) {
    return str;
  }
}

// Process the file line by line
let lines = content.split('\n');

// First: remove duplicate entries at end (lines 3762 to near end)
// Find the second 01-21 entry
const secondDupe21Start = content.indexOf("  // 01-21: New Look (Dior)\n  {\n    id: '48',\n    date: '2026-01-21'", 
  content.indexOf("date: '2026-01-22'", content.indexOf("date: '2026-01-21'") + 100) // after first 01-22
);

if (secondDupe21Start > 0) {
  // Find from the comment before the duplicate 01-21 entry to the end of the array
  const beforeDupe = content.lastIndexOf('\n', secondDupe21Start - 1);
  // The duplicates go to the end: find "]" at the very end
  const arrayEnd = content.lastIndexOf('];');
  // Replace: remove duplicates, keep the closing
  const cleaned = content.substring(0, beforeDupe + 1) + '\n]\n\n\n';
  lines = cleaned.split('\n');
  console.log('Removed duplicate entries');
}

// Now fix mojibake in Chinese fields
// Fields that may contain Chinese: title, subtitle, dateConnection, designerBio, story, legacy, significance
// But NOT: title_en, subtitle_en, *_en fields, category, designer, id, date, imageUrl, etc.

let result = lines.join('\n');

// Strategy: find each single-line string field and fix mojibake
// Handle single-quoted fields: field: 'value',
result = result.replace(/(title|subtitle|dateConnection|designerBio|story|legacy|significance):\s*'([^']+)'/g, (match, field, value) => {
  if (field.endsWith('_en')) return match;
  const fixed = fixMojibake(value);
  if (fixed !== value) {
    console.log(`Fixed ${field}: ${value.substring(0,30)}... -> ${fixed.substring(0,30)}...`);
  }
  return `${field}: '${fixed}'`;
});

// Handle backtick template literals: field: `value`
result = result.replace(/(title|subtitle|dateConnection|designerBio|story|legacy|significance):\s*`([^`]+)`/g, (match, field, value) => {
  if (field.endsWith('_en')) return match;
  const fixed = fixMojibake(value);
  if (fixed !== value) {
    console.log(`Fixed ${field} (template): ${value.substring(0,30)}... -> ${fixed.substring(0,30)}...`);
  }
  return `${field}: \`${fixed}\``;
});

// Also fix comments at top of file
result = result.replace(/\/\/\s*(è[^\n]+)/g, (match, comment) => {
  const fixed = fixMojibake(comment);
  return `// ${fixed}`;
});

// Fix subtitle field for 01-31 (深澤直人)
result = result.replace("subtitle: '深泽的直人, 1999'", "subtitle: '深泽直人, 1999'");

fs.writeFileSync('src/data.ts', result, 'utf8');
console.log('\nFile saved!');
