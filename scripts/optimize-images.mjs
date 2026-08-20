#!/usr/bin/env node
/**
 * Optimiza las imágenes de public/images/ convirtiéndolas a WebP.
 *
 * Uso:
 *   npm run optimize:images
 *
 * Reglas aplicadas:
 *   - public/images/hitos/           -> máx. 1600px de ancho, calidad 78
 *   - public/images/colaboradores/   -> máx. 256px de lado largo, calidad 80
 *   - public/images/isotipo.png      -> mantiene su tamaño, calidad 85 (conserva transparencia)
 *
 * Solo genera los .webp que faltan (idempotente). No borra los originales.
 * Al terminar imprime un resumen con el peso antes/después por archivo.
 */
import { readdir } from 'node:fs/promises';
import { join, dirname, extname, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES = join(ROOT, 'public', 'images');

const QUALITY = 78;
const COLLAB_QUALITY = 80;
const ISOTIPO_QUALITY = 85;

async function listImages(dir) {
  try {
    return await readdir(dir);
  } catch {
    return [];
  }
}

function webpPath(filePath) {
  const { dir, name } = parse(filePath);
  return join(dir, `${name}.webp`);
}

async function optimize({ filePath, maxWidth, quality }) {
  const outPath = webpPath(filePath);
  const outputExists = (await listImages(dirname(outPath))).includes(parse(outPath).base);
  const before = (await import('node:fs')).statSync(filePath).size;
  if (outputExists) {
    const after = (await import('node:fs')).statSync(outPath).size;
    return { filePath, outPath, before, after, skipped: true };
  }

  const image = sharp(filePath);
  const meta = await image.metadata();

  const pipeline = maxWidth && meta.width > maxWidth
    ? image.resize({ width: maxWidth, withoutEnlargement: true })
    : image;

  await pipeline.webp({ quality }).toFile(outPath);
  const after = (await import('node:fs')).statSync(outPath).size;
  return { filePath, outPath, before, after, skipped: false };
}

function fmt(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

const results = [];

for (const sub of ['hitos', 'colaboradores']) {
  const dir = join(IMAGES, sub);
  const files = await listImages(dir);
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const config = sub === 'hitos'
        ? { maxWidth: 1600, quality: QUALITY }
        : { maxWidth: 256, quality: COLLAB_QUALITY };
      results.push(await optimize({ filePath: join(dir, file), ...config }));
    }
  }
}

const isotipo = join(IMAGES, 'isotipo.png');
if ((await listImages(IMAGES)).includes('isotipo.png')) {
  results.push(await optimize({ filePath: isotipo, maxWidth: null, quality: ISOTIPO_QUALITY }));
}

let totalBefore = 0;
let totalAfter = 0;
for (const r of results) {
  totalBefore += r.before;
  totalAfter += r.after;
  const action = r.skipped ? 'ya existe ' : 'creado    ';
  console.log(`${action} ${r.outPath.replace(IMAGES, 'public/images')}  ${fmt(r.before)} -> ${fmt(r.after)}`);
}

const pct = totalBefore ? Math.round((1 - totalAfter / totalBefore) * 100) : 0;
console.log('\n--- Resumen ---');
console.log(`Archivos: ${results.length}`);
console.log(`Total: ${fmt(totalBefore)} -> ${fmt(totalAfter)}  (-${pct}%)`);