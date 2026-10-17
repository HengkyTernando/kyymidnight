import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const destination = resolve(projectRoot, "public/vendor");

await mkdir(destination, { recursive: true });
await copyFile(
  resolve(projectRoot, "node_modules/animejs/lib/anime.es.js"),
  resolve(destination, "anime.es.js"),
);
await copyFile(
  resolve(projectRoot, "node_modules/animejs/LICENSE.md"),
  resolve(destination, "animejs-LICENSE.md"),
);
