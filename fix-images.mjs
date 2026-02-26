import { readFileSync, writeFileSync } from 'fs';

const file = 'src/data.ts';
let content = readFileSync(file, 'utf8');

const replacements = [
  // 02-02: Levi's - wrong image ref
  ['grand-central-terminal.jpg', 'levis-501.jpg'],
  // 02-05: MUJI CD Player
  ['bakelite-radio-collection.jpg', 'muji-cd-player.jpg'],
  // 02-09: Gill Sans
  ['mercedes-35hp.jpg', 'gill-sans-typography.jpg'],
  // 02-10: Cenotaph for Newton
  ['up-chair.jpg', 'boullee-cenotaph-newton.jpg'],
  // 02-13: Stones of Venice
  ['panton-chair.jpg', 'ruskin-stones-of-venice.jpg'],
  // 02-23: Mechanical Elements
  ['gutenberg-bible.jpg', 'leger-mechanical-elements.jpg'],
];

for (const [oldName, newName] of replacements) {
  const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const before = content;
  content = content.replace(regex, newName);
  const count = (before.match(regex) || []).length;
  console.log(`${oldName} → ${newName}: ${count} replacements`);
}

// Update IMAGE_VERSION
content = content.replace(/IMAGE_VERSION = '[^']*'/, "IMAGE_VERSION = '20260226f'");

writeFileSync(file, content, 'utf8');
console.log('Done! IMAGE_VERSION updated to 20260226f');
