#!/usr/bin/env node
// Build a single minified JSON bundle containing every Pure Data object's
// documentation, so the reference page can hydrate in one fetch instead of
// ~1,150 lazy fetches. GitHub Pages serves text/json with gzip on the wire,
// so further compression isn't worth the complexity.
//
// Usage: node scripts/build-reference-data.mjs <plugdata-checkout> <output-dir>

import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const [, , srcRoot, outDir] = process.argv;
if (!srcRoot || !outDir) {
  console.error('Usage: build-reference-data.mjs <plugdata-checkout> <output-dir>');
  process.exit(2);
}

const DOC_PREFIX = 'Resources/Documentation';
const docsRoot = join(srcRoot, DOC_PREFIX);

async function* walkJson(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkJson(p);
    else if (entry.isFile() && entry.name.endsWith('.json')) yield p;
  }
}

const objects = {};
const originCounts = {};
let count = 0, skipped = 0;

for await (const file of walkJson(docsRoot)) {
  const rel = relative(docsRoot, file).split(sep).join('/'); // normalise on Windows
  const slash = rel.indexOf('/');
  if (slash < 0) { skipped++; continue; }                    // top-level files (none expected)
  const origin = rel.slice(0, slash);
  const filename = rel.slice(slash + 1);
  if (filename.includes('/')) { skipped++; continue; }       // nested dirs (also none expected)
  const name = filename.replace(/\.json$/, '');
  const key = origin + '/' + name;
  let data;
  try {
    data = JSON.parse(await readFile(file, 'utf8'));
  } catch (e) {
    console.error(`! parse error in ${rel}: ${e.message}`);
    skipped++;
    continue;
  }
  objects[key] = data;
  originCounts[origin] = (originCounts[origin] || 0) + 1;
  count++;
}

const generatedAt = new Date().toISOString();
const bundle = { generatedAt, count, objects };
const minified = JSON.stringify(bundle); // no whitespace at all
const meta = {
  generatedAt,
  count,
  bytes: Buffer.byteLength(minified),
  origins: originCounts,
};

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'reference-data.json'), minified);
await writeFile(join(outDir, 'reference-data.meta.json'), JSON.stringify(meta, null, 2) + '\n');

const kb = (meta.bytes / 1024).toFixed(1);
console.log(`✓ bundled ${count} objects (${skipped} skipped) → ${kb} KiB minified`);
for (const [o, n] of Object.entries(originCounts).sort()) console.log(`    ${o}: ${n}`);
