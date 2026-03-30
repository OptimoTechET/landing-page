const fs = require('fs');
const filepath = '/home/befikadusata/Devs/2026/optimotech/landing-page/src/app/page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

const replacements = [
  ['pt-48 pb-32 px-8', 'pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 lg:px-8'],
  ['py-32', 'py-16 lg:py-32'],
  ['px-8 relative z-10', 'px-6 lg:px-8 relative z-10'],
  ['p-12 lg:p-16', 'p-8 lg:p-16'],
  ['grid-cols-1 md:grid-cols-5 gap-6', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'],
  ['max-w-7xl mx-auto px-8', 'max-w-7xl mx-auto px-6 lg:px-8'],
  ['max-w-4xl mx-auto px-8', 'max-w-4xl mx-auto px-6 lg:px-8'],
  ['p-10 rounded-2xl', 'p-6 md:p-10 rounded-2xl'],
  ['p-12 hover:bg', 'p-8 lg:p-12 hover:bg'],
  ['relative h-full p-12 flex', 'relative h-full p-8 lg:p-12 flex'],
  ['p-10 flex flex-col', 'p-8 lg:p-10 flex flex-col'],
  ['p-10 border border', 'p-8 lg:p-10 border border'],
  ['p-10 overflow-hidden', 'p-8 lg:p-10 overflow-hidden']
];

for (const [find, replace] of replacements) {
    content = content.replaceAll(find, replace);
}
fs.writeFileSync(filepath, content);
console.log('Responsive string replacements in page.tsx applied successfully.');
