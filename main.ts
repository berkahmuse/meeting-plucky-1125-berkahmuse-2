// The Meeting That Should Have Been an Email
// Entry program: writes a single one-line joke (<= 200 chars) to /output/entry.txt.
//
// The joke: the agenda and the email point at each other and neither says
// anything — the meeting exists only because the email refused to be one.
// One sentence, the turn lands on the last word.
//
// The line is assembled from parts so the wording can be reviewed piece by
// piece; the joined result is the entry text, unchanged.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Gate from the competition rules: 1–200 chars, one line, not whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

const ENTRY_PARTS = [
  "The agenda's only item was to discuss an email ",
  "whose only line was 'see the meeting.'",
];

const LINE = ENTRY_PARTS.join("");

if (LINE.length < MIN_CHARS || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

// Round-trip guard: what landed on disk must be byte-identical to the entry.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the entry text");
}
