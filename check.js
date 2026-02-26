const fs = require('fs');
const c = fs.readFileSync('C:/Users/kaixin_yy/.openclaw/workspace/the-daily-object/src/data.ts','utf8');

const blocks = [];
let i = 0;
const marker = "date: '";
while(true) {
  const idx = c.indexOf(marker, i);
  if(idx===-1) break;
  const braceStart = c.lastIndexOf('{', idx);
  let depth=1, j=braceStart+1;
  while(j<c.length && depth>0){if(c[j]==='{')depth++;if(c[j]==='}')depth--;j++;}
  const block = c.substring(braceStart, j);
  const dm = block.match(/date:\s*'([^']*)'/);
  const im = block.match(/imageUrl:\s*'([^']*)'/);
  const ti = block.match(/title:\s*'([^']*)'/);
  if(dm && im && ti){
    blocks.push({date:dm[1], title:ti[1], img:im[1].split('/').pop().split('?')[0]});
  }
  i = idx + 10;
}
blocks.sort((a,b)=>a.date.localeCompare(b.date));
blocks.forEach(b=>console.log(b.date+' | '+b.title+' | '+b.img));
