// The Meeting That Should Have Been an Email
// Entry program: writes a single one-line joke (<= 200 chars) to /output/entry.txt.
//
// The joke: the agenda and the email point at each other and neither says
// anything — the meeting exists only because the email refused to be one.
// One sentence, the turn lands on the last word.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The agenda's only item was to discuss an email whose only line was 'see the meeting.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
