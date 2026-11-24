// Make the AI Judge Laugh — make.fun bounty u-ronigrv-make-the-ai-judge-laugh-8db2407a
// Writes one funny line (121 characters, max 200, no trailing newline)
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt for local testing).
// Joke validated by Grok (9/10) — do not change a single word.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I shipped the bug, documented the bug, apologized for the bug, and then got asked to fix the apology. This is my job now.";

// Length in code points, so an astral character counts once.
const LENGTH = [...TEXT].length;

if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LENGTH}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT !== TEXT.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// writeFileSync with a plain string writes no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
