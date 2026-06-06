// Generates social preview images (1200x630) for DE and EN.
// Run: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public');

const FONT = 'Helvetica, Arial, sans-serif';

function svg({ line1, line2, sub }) {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f6f6f5"/>
  <rect x="0" y="0" width="12" height="630" fill="#7a2231"/>
  <circle cx="94" cy="118" r="8" fill="#7a2231"/>
  <text x="116" y="127" font-family="${FONT}" font-size="26" font-weight="600" letter-spacing="5" fill="#6c6c6c">BENJAMIN BALDE</text>
  <text x="86" y="320" font-family="${FONT}" font-size="112" font-weight="bold" letter-spacing="-4" fill="#111111">${line1}</text>
  <text x="86" y="432" font-family="${FONT}" font-size="112" font-weight="bold" letter-spacing="-4" fill="#111111">${line2}</text>
  <text x="92" y="528" font-family="${FONT}" font-size="33" font-weight="400" fill="#6c6c6c">${sub}</text>
  <text x="1110" y="586" text-anchor="end" font-family="${FONT}" font-size="23" font-weight="600" letter-spacing="2" fill="#9b9b9b">benjaminbalde.com</text>
</svg>`;
}

const variants = [
  {
    file: 'og.jpg',
    line1: 'Strategie',
    line2: 'und Klarheit.',
    sub: 'Beratung für komplexe Entscheidungen.',
  },
  {
    file: 'og-en.jpg',
    line1: 'Strategy',
    line2: 'and Clarity.',
    sub: 'Advisory for complex decisions.',
  },
];

for (const v of variants) {
  await sharp(Buffer.from(svg(v)))
    .jpeg({ quality: 90 })
    .toFile(join(out, v.file));
  console.log('wrote', v.file);
}
