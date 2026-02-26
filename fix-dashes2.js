const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');
const idx = content.indexOf('John Ruskin, 1851');
const area = content.substring(idx + 17, idx + 30);
console.log('chars:', [...area].map(c => `U+${c.codePointAt(0).toString(16).padStart(4,'0')}`).join(' '));
console.log('string:', area);

// Check what â€" actually is in the file
// â = U+00E2, € = U+20AC, " = special
const needle = '\u00E2\u20AC\u201C'; // â€"
console.log('Has needle:', content.includes(needle));

// Try: the em-dash in UTF-8 is E2 80 94, which if read as CP1252 gives â€"
// â = E2, \x80 in CP1252 = €(U+20AC), \x94 in CP1252 = "(U+201D)
// Wait no, en-dash \x96 in CP1252 = –(U+2013), but the bytes E2 80 93 would be â€" for en-dash
// em-dash E2 80 94 would give â€" = â + € + "(U+201D)... hmm

// Let's just try the exact sequence
const emDash = '\u00E2\u20AC\u201C';  // en-dash sequence
const emDash2 = '\u00E2\u20AC\u201D'; // em-dash sequence  
console.log('en-dash seq found:', content.includes(emDash));
console.log('em-dash seq found:', content.includes(emDash2));

// Replace
let fixed = content.replace(/\u00E2\u20AC\u201C/g, '–');
fixed = fixed.replace(/\u00E2\u20AC\u201D/g, '—');
// Also â€™ = â + € + ™ = \u00E2\u20AC\u2122 → '
fixed = fixed.replace(/\u00E2\u20AC\u2122/g, "'");

const idx2 = fixed.indexOf('John Ruskin, 1851');
console.log('After fix:', fixed.substring(idx2, idx2 + 30));

fs.writeFileSync('src/data.ts', fixed, 'utf8');
