# One Day in GTA 6: Calm to Chaos

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/claymoreth/gta6-clipper-01-entry5/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/claymoreth/gta6-clipper-01-entry5/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A YouTube Short for [make.fun's gta6-clipper-01 bounty](https://make.fun/bounty/gta6-clipper-01)
("Clip GTA 6 for the most YouTube views", $500, top 20).

## The clip

**Title:** One Day in GTA 6: Calm to Chaos

**The concept:** "A DAY IN LEONIDA" — one full day in the city, morning
to night, in 30 seconds with NO on-screen text at all on the GTA footage.
No hook, no captions, no labels. The day starts calm and beautiful, and
the night gets loud. The humor and the action come purely from the
footage, cut from Rockstar's Grand Theft Auto VI Trailer 2. This is a
different angle from the other entries: not a cinematic showcase, not a
single-character study, not a 5-beat heist story, not a 2002-vs-2026
comparison, not a list of hidden details, not a chaotic-night montage,
not a police montage, not an absurd-character montage — a day in the
life of the city itself, and the joke is that the day ends exactly how
you would expect Leonida to end: with an explosion and a guy in a
garage holding a beer.

| Beat | Footage (Trailer 2) | Why it is here |
| --- | --- | --- |
| MORNING — the city wakes up | | |
| 1 | Aerial coastal city, turquoise water (6–8s) | The sunrise: Leonida is beautiful, calm, a postcard |
| 2 | Stilt house + blue car (8–10s) | Quiet houses on the water, morning light |
| 3 | Old man by a pickup, Hawaiian shirt (10–11s) | A local, already up — the day starts with a character |
| DAY — out and about | | |
| 4 | Jason driving, sunglasses, tattoo (29–32.5s) | The day gets moving |
| 5 | A store: a man talking, a cash register (32.5–34.5s) | Ordinary errands — Leonida is a real place |
| 6 | Highway driving, a red truck (34.5–35s) | On the road |
| 7 | Jason at a prison counter (58–61s) | The day takes a turn: prison |
| 8 | Jason walks out, "Let Freedom Reign!" shirt (61.5–62s) | The funny detail: he walks out of prison wearing a shirt that says "Let Freedom Reign!" — with an eagle holding a gun |
| EVENING — the golden hour | | |
| 9 | Dock / marina at sunset, people on a boat (81–83s) | The evening is beautiful |
| 10 | Sunset over the water, string lights (83–85s) | The most beautiful shot in the trailer |
| 11 | Night marina, a boat-works sign (85–86s) | The light fades |
| NIGHT — the city comes alive | | |
| 12 | Two men in the dark (86–87s) | The night is starting |
| 13 | A night street, people hanging out (87–88s) | The street wakes up |
| 14 | Lucia and Jason in a kitchen (88–89s) | Home, for a moment |
| 15 | A woman dancing at an outdoor bar (97–98s) | The party |
| 16 | A couple holding hands from behind (98–100s) | A quiet, romantic beat — the calm before the chaos |
| NIGHT PEAK — it gets loud | | |
| 17 | A car explodes in a fireball (118–119s) | The action peak: the night in Leonida finally does what it does |
| 18 | A car driving at dusk (150–151.5s) | Driving off |
| 19 | A heavyset guy in a garage, beer in hand, gesturing (151–153s) | The funny button: this is the guy who has seen it all, and he is not surprised |

The footage is cropped full-bleed vertical (9:16, 1080×1920) — the trailer
is letterboxed, so the black bars are cropped out first and each shot is
framed on its subject, so the day fills the screen. The last 5 seconds
pitch make.fun on a GTA VI background (palm trees and a car at golden
hour, darkened with a 50% black overlay), with the sentence and the
referral on screen AND a voiceover: "Make clips like this with AI and
earn money on make.fun."

**Video:** 35 seconds, 1080×1920, 30 fps, H.264 + AAC.

## YouTube description (copy-paste)

```
One day in Leonida — from a quiet sunrise to a night that gets loud. The city wakes up, the day gets busy, the sunset is beautiful, and the night... well, it's Leonida.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-binder-echo-aurora

#GTA6 #Shorts
```

## How to run the program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output`, where the house reads the video's address:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success. `VIDEO.json` holds the video's YouTube Shorts
address once the clip is uploaded as a public Short.

## Bounty

[make.fun/bounty/gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01) —
places go by the video's YouTube views, the most first; the 20 most watched
share $500.
