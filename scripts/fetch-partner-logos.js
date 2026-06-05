#!/usr/bin/env node
/**
 * Fetch official partner logos for TripSure supply partners.
 * Saves to /public/assets/logos/partners/
 * Falls back to SVG badge if fetch fails.
 */

const https = require('https');
const http  = require('http');
const fs    = require('fs');
const path  = require('path');

const OUT_DIR = path.join(__dirname, '../public/assets/logos/partners');
fs.mkdirSync(OUT_DIR, { recursive: true });

const logos = [
  {
    name: 'ratehawk',
    filename: 'ratehawk.svg',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RateHawk_logo.svg/320px-RateHawk_logo.svg.png',
      'https://cdn.ratehawk.com/static/images/ratehawk-logo.svg',
    ],
    fallback: { bg: '#FF4B00', text: 'RateHawk', color: '#fff' },
    alt: 'RateHawk hotel supply platform logo',
  },
  {
    name: 'tbo',
    filename: 'tbo.svg',
    urls: [
      'https://www.tbo.com/images/tbo-logo.svg',
      'https://www.tboholidays.com/images/logo.svg',
    ],
    fallback: { bg: '#0A2240', text: 'TBO', color: '#fff' },
    alt: 'TBO hotel supply network logo',
  },
  {
    name: 'expedia',
    filename: 'expedia.svg',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Expedia_logo.svg/320px-Expedia_logo.svg.png',
      'https://a.travel-assets.com/mad-service/footer/exp-footer-rebuild/images/logo-expedia.svg',
    ],
    fallback: { bg: '#003580', text: 'Expedia', color: '#fff' },
    alt: 'Expedia hotel supply logo',
  },
  {
    name: 'agoda',
    filename: 'agoda.svg',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Agoda_transparent_logo.svg/320px-Agoda_transparent_logo.svg.png',
      'https://www.agoda.com/content/agoda/en-us/logo.png',
    ],
    fallback: { bg: '#003478', text: 'Agoda', color: '#fff' },
    alt: 'Agoda hotel supply platform logo',
  },
  {
    name: 'hotelbeds',
    filename: 'hotelbeds.svg',
    urls: [
      'https://www.hotelbeds.com/static/HB_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hotelbeds_logo.svg/320px-Hotelbeds_logo.svg.png',
    ],
    fallback: { bg: '#E3000F', text: 'Hotelbeds', color: '#fff' },
    alt: 'Hotelbeds hotel wholesale platform logo',
  },
  {
    name: 'dida',
    filename: 'dida.svg',
    urls: [
      'https://www.didatravel.com/images/logo.svg',
      'https://www.didatravel.com/static/images/dida-logo.svg',
    ],
    fallback: { bg: '#1B3A6B', text: 'DIDA', color: '#fff' },
    alt: 'DIDA Travel hotel wholesale logo',
  },
  {
    name: 'smyrooms',
    filename: 'smyrooms.svg',
    urls: [
      'https://www.smyrooms.com/images/logo.svg',
      'https://www.smyrooms.com/static/img/smyrooms-logo.svg',
    ],
    fallback: { bg: '#00A19A', text: 'Smyrooms', color: '#fff' },
    alt: 'Smyrooms hotel supply platform logo',
  },
];

function makeSvgBadge({ bg, text, color }) {
  const w = Math.max(120, text.length * 9 + 24);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="36" viewBox="0 0 ${w} 36">
  <rect width="${w}" height="36" rx="6" fill="${bg}"/>
  <text x="${w/2}" y="23" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="600" fill="${color}">${text}</text>
</svg>`;
}

function sanitizeSvg(content) {
  return content
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/xlink:href="(?!#)[^"]*"/gi, '')
    .replace(/href="(?!#)[^"]*"/gi, '');
}

function fetch(url, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, { headers: { 'User-Agent': 'TripSure-LogoFetcher/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location, timeoutMs).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const ct = res.headers['content-type'] || '';
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ buffer: Buffer.concat(chunks), contentType: ct }));
    });
    req.setTimeout(timeoutMs, () => { req.destroy(); reject(new Error('Timeout')); });
    req.on('error', reject);
  });
}

const report = [];

async function processLogo(logo) {
  const dest = path.join(OUT_DIR, logo.filename);
  let tried = [];
  for (const url of logo.urls) {
    tried.push(url);
    try {
      const { buffer, contentType } = await fetch(url);
      let saved = false;
      if (contentType.includes('svg') || url.endsWith('.svg')) {
        const clean = sanitizeSvg(buffer.toString('utf-8'));
        if (clean.includes('<svg')) {
          fs.writeFileSync(dest, clean, 'utf-8');
          report.push({ logo: logo.name, source: url, status: 'fetched', size: `${(clean.length/1024).toFixed(1)}KB`, file: logo.filename });
          console.log(`✅ ${logo.name}: fetched SVG from ${url}`);
          saved = true;
        }
      }
      if (!saved && (contentType.includes('png') || contentType.includes('webp') || url.match(/\.(png|webp)$/i))) {
        // Convert PNG to WebP via sharp if available
        try {
          const sharp = require('../node_modules/sharp');
          const webpFile = logo.filename.replace('.svg', '.webp');
          const webpDest = path.join(OUT_DIR, webpFile);
          await sharp(buffer).resize({ width: 160, withoutEnlargement: true }).webp({ quality: 90 }).toFile(webpDest);
          // Also save a text SVG with the fallback for the .svg file
          const svgBadge = makeSvgBadge(logo.fallback);
          fs.writeFileSync(dest, svgBadge, 'utf-8');
          report.push({ logo: logo.name, source: url, status: 'png→webp', size: `${(buffer.length/1024).toFixed(1)}KB`, file: webpFile });
          console.log(`✅ ${logo.name}: converted PNG→WebP from ${url}`);
          saved = true;
        } catch (e) {
          // sharp not available or failed — save PNG fallback
          const pngFile = logo.filename.replace('.svg', '.png');
          fs.writeFileSync(path.join(OUT_DIR, pngFile), buffer);
          const svgBadge = makeSvgBadge(logo.fallback);
          fs.writeFileSync(dest, svgBadge, 'utf-8');
          report.push({ logo: logo.name, source: url, status: 'png-saved', size: `${(buffer.length/1024).toFixed(1)}KB`, file: pngFile });
          saved = true;
        }
      }
      if (saved) break;
    } catch (e) {
      console.log(`  ⚠️  ${logo.name}: ${url} → ${e.message}`);
    }
  }
  // If no URL worked, write fallback badge
  if (!fs.existsSync(dest)) {
    const badge = makeSvgBadge(logo.fallback);
    fs.writeFileSync(dest, badge, 'utf-8');
    report.push({ logo: logo.name, source: tried.join(' | '), status: 'fallback-badge', size: `${(badge.length/1024).toFixed(1)}KB`, file: logo.filename });
    console.log(`🔶 ${logo.name}: used fallback SVG badge`);
  }
}

(async () => {
  console.log('Fetching partner logos…\n');
  for (const logo of logos) await processLogo(logo);

  // Write WebP versions of any SVG files that don't have one
  for (const logo of logos) {
    const svgPath = path.join(OUT_DIR, logo.filename);
    const webpPath = path.join(OUT_DIR, logo.filename.replace('.svg', '.webp'));
    if (fs.existsSync(svgPath) && !fs.existsSync(webpPath)) {
      try {
        const sharp = require('../node_modules/sharp');
        await sharp(Buffer.from(fs.readFileSync(svgPath, 'utf-8')))
          .resize({ width: 160, withoutEnlargement: true })
          .webp({ quality: 90 })
          .toFile(webpPath);
      } catch (_) {}
    }
  }

  // Write report
  const md = [
    '# Partner Logos Fetch Report',
    '',
    '| Logo | Source tried | Status | Size | File |',
    '|------|-------------|--------|------|------|',
    ...report.map(r => `| ${r.logo} | ${r.source.slice(0,50)} | ${r.status} | ${r.size} | ${r.file} |`),
  ].join('\n');
  fs.writeFileSync(path.join(__dirname, '../LOGOS_FETCH_REPORT.md'), md);
  console.log('\n✅ Done. Report saved to LOGOS_FETCH_REPORT.md');
})();
