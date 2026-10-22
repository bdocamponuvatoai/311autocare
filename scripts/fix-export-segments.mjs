/**
 * Works around a Next.js static-export bug on Windows.
 *
 * The client router prefetches flat files such as
 * `out/about/__next.about.__PAGE__.txt`, but on Windows `next build` writes
 * them to nested folders (`out/about/__next.about/__PAGE__.txt`) because it
 * joins segment paths with `\`. This script renames them to the flat names.
 * It does nothing when the export is already correct (macOS, Linux, CI).
 */
import { readdir, rename, rm } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("out");
const PREFIX = "__next.";

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(fullPath) : [fullPath];
    }),
  );
  return nested.flat();
}

async function flattenSegmentDirs(dir) {
  let moved = 0;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const fullPath = path.join(dir, entry.name);
    if (!entry.name.startsWith(PREFIX)) {
      moved += await flattenSegmentDirs(fullPath);
      continue;
    }
    for (const file of await listFiles(fullPath)) {
      const segments = path.relative(fullPath, file).split(path.sep);
      await rename(file, path.join(dir, [entry.name, ...segments].join(".")));
      moved++;
    }
    await rm(fullPath, { recursive: true });
  }
  return moved;
}

const moved = await flattenSegmentDirs(OUT_DIR);
if (moved > 0) console.log(`Flattened ${moved} prefetch segment files in out/`);
