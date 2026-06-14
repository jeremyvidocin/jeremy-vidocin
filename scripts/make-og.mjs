import sharp from 'sharp';
import path from 'node:path';

const W = 1200;
const H = 630;
const ART = path.resolve('public/art/hero.webp');
const OUT = path.resolve('public/og.png');

// Right-side art panel (cover crop)
const panelW = 470;
const art = await sharp(ART)
  .resize({ width: panelW, height: H, fit: 'cover', position: 'centre' })
  .toBuffer();

// Cream base
const base = sharp({
  create: { width: W, height: H, channels: 3, background: '#F4F0E6' },
});

// Text + brand overlay (left side)
const svg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .name { font-family: Arial, Helvetica, sans-serif; font-weight: 900; fill: #15120D; }
    .role { font-family: Arial, Helvetica, sans-serif; font-weight: 700; fill: #2034D9; letter-spacing: 2px; }
    .sub  { font-family: Arial, Helvetica, sans-serif; font-weight: 600; fill: #15120D; }
  </style>
  <rect x="64" y="86" width="56" height="56" fill="#15120D"/>
  <text x="74" y="128" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="34" fill="#F4F0E6">JV</text>
  <text x="64" y="300" class="name" font-size="92">Jérémy</text>
  <text x="64" y="392" class="name" font-size="92">Vidocin<tspan fill="#2034D9">.</tspan></text>
  <text x="66" y="200" class="role" font-size="24">DÉVELOPPEUR FULLSTACK × BUSINESS ANALYST</text>
  <text x="64" y="470" class="sub" font-size="28">Profil SI double compétence — coder &amp; piloter.</text>
  <rect x="64" y="508" width="360" height="2" fill="#15120D" opacity="0.15"/>
  <text x="64" y="552" class="sub" font-size="24" fill="#2034D9">Alternance · Île-de-France · septembre 2026</text>
</svg>`);

await base
  .composite([
    { input: art, left: W - panelW, top: 0 },
    { input: svg, left: 0, top: 0 },
  ])
  .png()
  .toFile(OUT);

console.log('og.png written', OUT);
