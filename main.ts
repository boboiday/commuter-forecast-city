import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good morning, Umbrella Falls: 14°C, rain falling sideways. Umbrellas are decorative today — the bus is 20 minutes late, and so are you.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`forecast must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
