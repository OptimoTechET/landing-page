const fs = require('fs');
const filepath = '/home/befikadusata/Devs/2026/optimotech/landing-page/src/app/services/page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

const replacements = [
  ['px-8 overflow-hidden', 'px-6 lg:px-8 overflow-hidden'],
  ['text-[3.5rem]', 'text-4xl md:text-[3.5rem]'],
  ['py-32', 'py-16 lg:py-32'],
  ['max-w-[1440px] mx-auto px-8', 'max-w-[1440px] mx-auto px-6 lg:px-8'],
  ['text-[2.75rem]', 'text-3xl md:text-[2.75rem]'],
  ['py-16 lg:py-32 px-8', 'py-16 lg:py-32 px-6 lg:px-8'],
  ['p-16 md:p-24', 'p-8 sm:p-12 md:p-24'],
  ['p-10 rounded-lg ghost-lift', 'p-8 lg:p-10 rounded-lg ghost-lift']
];

for (const [find, replace] of replacements) {
    content = content.replaceAll(find, replace);
}
fs.writeFileSync(filepath, content);
console.log('Services page responsive replacements applied.');
