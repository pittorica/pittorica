import { existsSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';

/**
 * @file clean.mjs
 * @description Recursively deletes 'dist' and 'build' directories from the current working directory.
 */

const TARGET_DIRECTORIES = new Set(['dist', 'build']);
const IGNORE_DIRECTORIES = new Set(['node_modules', '.git']);

/**
 * Deletes specified directories recursively starting from a base path.
 * @param baseDir - The starting directory path.
 */
const cleanProject = (baseDir) => {
  if (!existsSync(baseDir)) return;

  const entries = readdirSync(baseDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(baseDir, entry.name);

    if (entry.isDirectory()) {
      // Logic check: if it's a target, delete it. Otherwise, recurse.
      if (TARGET_DIRECTORIES.has(entry.name)) {
        console.log(`Removing: ${fullPath}`);
        rmSync(fullPath, { recursive: true, force: true });
      } else if (!IGNORE_DIRECTORIES.has(entry.name)) {
        cleanProject(fullPath);
      }
    }
  }
};

// Execution starting point
console.log('Starting cleanup process...');
cleanProject(process.cwd());
console.log('Cleanup finished.');
