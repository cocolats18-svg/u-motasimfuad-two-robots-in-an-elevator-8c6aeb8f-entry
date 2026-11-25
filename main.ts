// Two Robots in an Elevator — make.fun entry
// Writes one line of awkward robot elevator small talk to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: one robot confesses, mid-ride, that it rehearses small talk
// in a background process — machine logic (background process, firmware)
// showing through the forced politeness, with the awkwardness landing
// on "panicking in this elevator", which names the ride itself.
const line =
  "So\u2026 do you also rehearse small talk in a background process, or is my firmware the only one panicking in this elevator?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} characters to entry.txt`);
