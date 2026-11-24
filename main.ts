// One Line of Earned Pride — make.fun program/v1 entry.
// Writes a single line of quiet, earned pride to /output/entry.txt.
// Deterministic: no clock, no randomness, no network. Exit 0 always.
// The line is 1–240 characters: a small person finishing a long,
// hard thing — her grandmother's forty-year quilt — in one quiet scene.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "At midnight, Mara threaded the last stitch into the quilt her grandmother had started forty years ago, and held it up to the lamp like a small sunrise.";

function main(): void {
  try {
    const outPath = "/output/entry.txt";
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, LINE + "\n", "utf8");
  } catch (err) {
    // Never fail the run: report and still exit 0 with what we can write.
    console.error("entry write failed:", err);
    try {
      mkdirSync("/tmp", { recursive: true });
      writeFileSync("/tmp/entry.txt", LINE + "\n", "utf8");
    } catch {
      // Nothing more we can do; exit 0 regardless.
    }
  }
}

main();
