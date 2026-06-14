import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ART_DIR = path.resolve('public/art');

// Display-aware targets (px on the longest side) + webp quality
const targets = {
  'hero.png': { size: 1000, q: 80 },
  'method.png': { size: 900, q: 80 },
  'project-blue.png': { size: 480, q: 82 },
  'project-green.png': { size: 480, q: 82 },
};

const kb = (b) => (b / 1024).toFixed(0) + ' Ko';

for (const [file, { size, q }] of Object.entries(targets)) {
  const src = path.join(ART_DIR, file);
  const out = path.join(ART_DIR, file.replace(/\.png$/, '.webp'));
  const before = (await stat(src)).size;
  await sharp(src)
    .resize({ width: size, height: size, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: q })
    .toFile(out);
  const after = (await stat(out)).size;
  console.log(`${file}  ${kb(before)}  ->  ${path.basename(out)}  ${kb(after)}`);
}
