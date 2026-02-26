const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

// Fix remaining mojibake dashes and special chars
// â€" is UTF-8 bytes of — (em-dash) misread as CP1252
// â€" → — , â€™ → ' , â€œ → " , â€ → " , Ã© → é, etc.
content = content.replace(/â€"/g, '—');
content = content.replace(/â€™/g, "'");
content = content.replace(/â€œ/g, '"');
content = content.replace(/â€\u009D/g, '"');
content = content.replace(/â€"/g, '–');  // en-dash
content = content.replace(/Ã©/g, 'é');
content = content.replace(/Ã‰/g, 'É');
content = content.replace(/Ã¶/g, 'ö');
content = content.replace(/Ã¢/g, 'â');
content = content.replace(/È™/g, 'ș');
content = content.replace(/Â±/g, '±');
content = content.replace(/Â·/g, '·');

// Fix the specific subtitle with dash issue
// Also fix â‚¬ → €
content = content.replace(/â‚¬/g, '€');

fs.writeFileSync('src/data.ts', content, 'utf8');
console.log('Fixed remaining encoding issues');

// Verify the subtitle
const c2 = fs.readFileSync('src/data.ts', 'utf8');
const subtitleMatch = c2.match(/subtitle: 'John Ruskin, ([^']+)'/);
console.log('Ruskin subtitle:', subtitleMatch?.[1]);
