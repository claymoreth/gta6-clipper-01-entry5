// gta6-clipper-01 entry: "One Day in GTA 6: Calm to Chaos" (Node 22, stdlib only).
// The entry is the video itself: a 35-second YouTube Short, "A DAY IN LEONIDA" —
// one full day in the city, morning to night, with NO on-screen text on the
// GTA footage. It opens on a quiet sunrise over the coast, follows Jason
// through an ordinary day (driving, a store, prison, a sunset on the dock,
// a night out with Lucia), then the night turns loud — a car explodes —
// and it ends on a funny button: a heavyset guy in a garage, beer in hand,
// gesturing at the chaos. All cut from Rockstar's Grand Theft Auto VI
// Trailer 2. The last 5 seconds pitch make.fun on a GTA VI background
// (palm trees and a car at golden hour), with the sentence and the referral
// on screen and a voiceover: "Make clips like this with AI and earn money
// on make.fun."
// This program does exactly one thing — it copies VIDEO.json from the
// repository root into the output directory, where the house reads the
// video's address and fetches its views through the YouTube Data API.
// Nothing this program writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const videoPath = join(botDir, "VIDEO.json");

// Validate VIDEO.json before copying: it must parse as JSON, carry a
// string `url`, and point at a YouTube video (Shorts, watch, or youtu.be).
// Failing fast here beats copying a bad file the house cannot read.
let videoUrl;
try {
  const parsed = JSON.parse(readFileSync(videoPath, "utf8"));
  videoUrl = parsed?.url;
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== "string" || videoUrl.length === 0) {
  console.error("VIDEO.json has no string `url` field.");
  process.exit(1);
}
let host;
try {
  host = new URL(videoUrl).hostname;
} catch {
  console.error(`VIDEO.json url is not a valid URL: ${videoUrl}`);
  process.exit(1);
}
const okHost = host === "youtube.com" || host === "www.youtube.com" || host === "youtu.be" || host === "www.youtu.be";
const okPath = videoUrl.includes("/shorts/") || videoUrl.includes("watch?v=") || host === "youtu.be" || host === "www.youtu.be";
if (!okHost || !okPath) {
  console.error(`VIDEO.json url is not a YouTube video link: ${videoUrl}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(videoPath, join(outputDir, "VIDEO.json"));
} catch (err) {
  console.error(
    `could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}

console.log(`copied VIDEO.json -> ${outputDir} (url: ${videoUrl})`);
