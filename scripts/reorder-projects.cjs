const fs = require('fs');

const file = 'src/data/projects.ts';
let source = fs.readFileSync(file, 'utf8');
const marker = 'export const PROJECT_DATA = [';
const arrayStart = source.indexOf(marker) + marker.length;
let depth = 0;
let quote = null;
let escaped = false;
let objectStart = -1;
let arrayEnd = -1;
const items = [];

for (let index = arrayStart; index < source.length; index += 1) {
  const char = source[index];
  if (quote) {
    if (escaped) escaped = false;
    else if (char === '\\') escaped = true;
    else if (char === quote) quote = null;
    continue;
  }
  if (char === "'" || char === '"' || char === '`') {
    quote = char;
    continue;
  }
  if (char === '{') {
    if (depth === 0) objectStart = index;
    depth += 1;
  } else if (char === '}') {
    depth -= 1;
    if (depth === 0 && objectStart >= 0) {
      items.push(source.slice(objectStart, index + 1));
      objectStart = -1;
    }
  } else if (char === ']' && depth === 0) {
    arrayEnd = index;
    break;
  }
}

if (arrayEnd < 0) throw new Error('PROJECT_DATA array end not found');

const idOf = (item) => item.match(/id:\s*'([^']+)'/)?.[1];
const targetIds = [
  'gothic-eye-tracking',
  'ljsk',
  'smzc',
  'msys',
  'streetcat',
  'ergonomics2025',
];
const targetSet = new Set(targetIds);
const targetItems = new Map(items.filter((item) => targetSet.has(idOf(item))).map((item) => [idOf(item), item]));

if (targetItems.size !== targetIds.length) {
  throw new Error(`Expected ${targetIds.length} UX projects, found ${targetItems.size}`);
}

const firstTargetIndex = items.findIndex((item) => targetSet.has(idOf(item)));
const remaining = items.filter((item) => !targetSet.has(idOf(item)));
remaining.splice(firstTargetIndex, 0, ...targetIds.map((id) => targetItems.get(id)));

const rebuilt = `\n  ${remaining.join(',\n  ')},\n`;
source = source.slice(0, arrayStart) + rebuilt + source.slice(arrayEnd);
fs.writeFileSync(file, source, 'utf8');
console.log(targetIds.join('\n'));
