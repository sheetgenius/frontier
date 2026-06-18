// Build-time Open Graph (social card) generation for Bitter Frontier.
//
// Renders one 1200x630 branded PNG per page (home, each digest, each provider
// profile, each signal) with satori (JSX-ish -> SVG) + @resvg/resvg-js
// (SVG -> PNG). Cards are emitted into dist/og/ by scripts/gen-og.mjs and wired
// into each page's <meta property="og:image"> by src/layouts/Base.astro.
//
// The og path for a page mirrors that page's URL path (see ogPathForUrlPath in
// src/lib/og.ts), so this generator and the layout stay in lockstep without a
// shared manifest:
//   /digests/<slug>/  -> og/digests/<slug>.png
//   /profiles/<slug>/ -> og/profiles/<slug>.png
//   /signals/<id>/    -> og/signals/<id>.png
//   /                 -> og/home.png

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import matter from "gray-matter";
import YAML from "yaml";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_DIR = path.resolve(SCRIPT_DIR, "..");
const REPO_ROOT = process.env.BITTER_FRONTIER_ROOT
  ? path.resolve(process.env.BITTER_FRONTIER_ROOT)
  : path.resolve(SITE_DIR, "..");

const FONTS_DIR = path.join(SITE_DIR, "src", "fonts");

// ---- Brand palette (kept in sync with site/src/styles/global.css) ----
const COLOR = {
  ground: "#f7f2e8",
  ink: "#19150f",
  muted: "#756d62",
  line: "#ded5c7",
  bitter: "#806119",
};

// ---------------------------------------------------------------------------
// Data loading (standalone — does not import the TS site lib).
// Mirrors the slug/title/date conventions in src/lib/frontier.ts.
// ---------------------------------------------------------------------------

function isDir(p) {
  return fs.existsSync(p) && fs.statSync(p).isDirectory();
}

function readFrontmatter(file) {
  return matter(fs.readFileSync(file, "utf8")).data;
}

function readYaml(file) {
  return YAML.parse(fs.readFileSync(file, "utf8"));
}

function isoDate(value) {
  if (value == null) return undefined;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

const SOURCE_LABELS = {
  "agent-zero": "Agent Zero",
  "claude-code": "Claude Code",
  codex: "Codex",
  flue: "Flue",
  "gemini-cli": "Gemini CLI",
  "hermes-agent": "Hermes Agent",
  openclaw: "OpenClaw",
  openhands: "OpenHands",
  paperclip: "Paperclip",
  "pi-coding-agent": "Pi Coding Agent",
};

function sourceLabel(id) {
  return SOURCE_LABELS[id] ?? id;
}

function listDigests() {
  const dir = path.join(REPO_ROOT, "content", "digests");
  if (!isDir(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .map((f) => {
      const data = readFrontmatter(path.join(dir, f));
      return { slug: f.replace(/\.md$/, ""), data };
    });
}

function listProfiles() {
  const dir = path.join(REPO_ROOT, "content", "profiles");
  if (!isDir(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const data = readFrontmatter(path.join(dir, f));
      return { slug: f.replace(/\.md$/, ""), data };
    });
}

function dateFromSignalId(id) {
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(id);
  return m ? m[1] : undefined;
}

function listSignals() {
  const seen = new Map();
  const runsDir = path.join(REPO_ROOT, "runs");
  if (isDir(runsDir)) {
    const runDirs = fs
      .readdirSync(runsDir)
      .map((name) => path.join(runsDir, name))
      .filter((d) => isDir(d))
      .sort((a, b) => path.basename(b).localeCompare(path.basename(a)));
    for (const runDir of runDirs) {
      const file = path.join(runDir, "signals", "frontier-signals.yml");
      if (!fs.existsSync(file)) continue;
      const yaml = readYaml(file);
      for (const signal of yaml?.signals ?? []) {
        if (!signal.id || seen.has(signal.id)) continue;
        const sources = Array.isArray(signal.sources)
          ? signal.sources
          : signal.source
            ? [signal.source]
            : [];
        seen.set(signal.id, {
          id: signal.id,
          title: signal.title ?? signal.id,
          date: dateFromSignalId(signal.id),
          sources,
        });
      }
    }
  }
  const jsonl = path.join(REPO_ROOT, "data", "frontier_signals.jsonl");
  if (fs.existsSync(jsonl)) {
    for (const line of fs.readFileSync(jsonl, "utf8").split(/\n+/)) {
      if (!line.trim()) continue;
      let signal;
      try {
        signal = JSON.parse(line);
      } catch {
        continue;
      }
      if (!signal.id || seen.has(signal.id)) continue;
      const sources = Array.isArray(signal.sources)
        ? signal.sources
        : signal.source
          ? [signal.source]
          : [];
      seen.set(signal.id, {
        id: signal.id,
        title: signal.title ?? signal.id,
        date: dateFromSignalId(signal.id),
        sources,
      });
    }
  }
  return Array.from(seen.values());
}

// ---------------------------------------------------------------------------
// Card entries. `ogPath` is the path under dist/og/ (without extension) and
// must equal what src/lib/og.ts derives from the page URL.
// ---------------------------------------------------------------------------

export function cardEntries() {
  const entries = [];

  // Homepage.
  entries.push({
    ogPath: "home",
    eyebrow: "BITTER FRONTIER",
    title: "Coding agents are changing faster than operating policy.",
    footer: "frontier.bitter.sh",
    footerRight: "Field notes for agent operators",
  });

  // Digests.
  for (const digest of listDigests()) {
    const title = digest.data.title ?? digest.slug;
    const end = isoDate(digest.data.window?.end);
    entries.push({
      ogPath: `digests/${digest.slug}`,
      eyebrow: (digest.data.series ?? "Weekly digest").toUpperCase(),
      title,
      footer: "frontier.bitter.sh",
      footerRight: end ? `Digest · ${end}` : "Digest",
    });
  }

  // Provider profiles.
  for (const profile of listProfiles()) {
    const label = profile.data.label ?? sourceLabel(profile.slug);
    const updated = isoDate(profile.data.last_updated);
    const owner = profile.data.owner;
    entries.push({
      ogPath: `profiles/${profile.slug}`,
      eyebrow: "PROVIDER PROFILE",
      title: label,
      footer: "frontier.bitter.sh",
      footerRight: [owner, updated ? `updated ${updated}` : null]
        .filter(Boolean)
        .join(" · "),
    });
  }

  // Signals.
  for (const signal of listSignals()) {
    const src = signal.sources[0] ? sourceLabel(signal.sources[0]) : null;
    entries.push({
      ogPath: `signals/${signal.id}`,
      eyebrow: "SIGNAL",
      title: signal.title,
      footer: "frontier.bitter.sh",
      footerRight: [src, signal.date].filter(Boolean).join(" · "),
    });
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Rendering. satori takes a plain element tree (no JSX needed) + font data and
// returns SVG; resvg rasterizes to PNG at exactly 1200x630.
// ---------------------------------------------------------------------------

const WIDTH = 1200;
const HEIGHT = 630;

// satori needs static TTF/OTF (it cannot read woff2 or variable fonts), so the
// cards use static Manrope instances (400/700, instantiated from the variable
// brand woff2) for the title/body and static IBM Plex Mono (400/600) for the
// eyebrow/footer — the same Manrope + IBM Plex Mono voices the live site uses.
let _fonts;
function loadFonts() {
  if (_fonts) return _fonts;
  _fonts = [
    {
      name: "Manrope",
      data: fs.readFileSync(path.join(FONTS_DIR, "Manrope-Static-Regular.ttf")),
      weight: 400,
      style: "normal",
    },
    {
      name: "Manrope",
      data: fs.readFileSync(path.join(FONTS_DIR, "Manrope-Static-Bold.ttf")),
      weight: 700,
      style: "normal",
    },
    {
      name: "IBM Plex Mono",
      data: fs.readFileSync(path.join(FONTS_DIR, "IBMPlexMono-Regular.ttf")),
      weight: 400,
      style: "normal",
    },
    {
      name: "IBM Plex Mono",
      data: fs.readFileSync(path.join(FONTS_DIR, "IBMPlexMono-SemiBold.ttf")),
      weight: 600,
      style: "normal",
    },
  ];
  return _fonts;
}

// Pick a title font size so the headline fits without overflow. satori does the
// real line wrapping inside a fixed-width box; this just steps the size down for
// longer titles and hard-truncates anything absurdly long.
function titleSizing(title) {
  const len = title.length;
  let fontSize;
  if (len <= 26) fontSize = 86;
  else if (len <= 42) fontSize = 72;
  else if (len <= 64) fontSize = 60;
  else if (len <= 92) fontSize = 50;
  else fontSize = 44;

  // Hard cap so a pathological title can never run off the card. The wrap box is
  // ~1016px wide; allow enough characters for up to four lines at the chosen
  // size, then ellipsize.
  const maxChars = Math.floor((1016 / (fontSize * 0.52)) * 4);
  let text = title;
  if (text.length > maxChars) text = text.slice(0, maxChars - 1).trimEnd() + "…";

  const lineHeight = fontSize <= 50 ? 1.18 : 1.1;
  return { fontSize, lineHeight, text };
}

function div(style, children) {
  return {
    type: "div",
    props: {
      style: { display: "flex", ...style },
      children,
    },
  };
}

function span(text, style) {
  return {
    type: "div",
    props: { style: { display: "flex", ...style }, children: text },
  };
}

function cardTree(entry) {
  const { fontSize, lineHeight, text } = titleSizing(entry.title);

  return div(
    {
      width: WIDTH,
      height: HEIGHT,
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: COLOR.ground,
      padding: "72px 92px",
      fontFamily: "Manrope",
      // Subtle hairline frame inside the bleed.
      border: `1px solid ${COLOR.line}`,
    },
    [
      // Eyebrow / wordmark — IBM Plex Mono, letterspaced (the brand label voice).
      div({ alignItems: "center" }, [
        span(entry.eyebrow, {
          fontFamily: "IBM Plex Mono",
          color: COLOR.bitter,
          fontSize: 23,
          fontWeight: 600,
          letterSpacing: "0.22em",
        }),
      ]),

      // Headline block: gold rule + title in heavy Manrope (weight-driven, the
      // bitter.sh display voice).
      div({ flexDirection: "column", marginTop: 8, marginBottom: 8 }, [
        div({ width: 96, height: 4, backgroundColor: COLOR.bitter, marginBottom: 36 }, []),
        span(text, {
          color: COLOR.ink,
          fontSize,
          fontWeight: 700,
          lineHeight,
          letterSpacing: "-0.022em",
          // Constrain the wrap box so long titles wrap instead of overflowing.
          maxWidth: 1016,
        }),
      ]),

      // Footer: site + section/date, separated by a thin rule. The site name is
      // the IBM Plex Mono wordmark voice; the meta stays Manrope.
      div({ flexDirection: "column" }, [
        div({ width: "100%", height: 1, backgroundColor: COLOR.line, marginBottom: 20 }, []),
        div({ alignItems: "center", justifyContent: "space-between", width: "100%" }, [
          span(entry.footer, {
            fontFamily: "IBM Plex Mono",
            color: COLOR.ink,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }),
          entry.footerRight
            ? span(entry.footerRight, {
                color: COLOR.muted,
                fontSize: 24,
                fontWeight: 400,
              })
            : span("", {}),
        ]),
      ]),
    ],
  );
}

// Lazily import the heavy deps so a module consumer that only wants cardEntries()
// (e.g. a count) doesn't pay for them.
let _satori;
let _Resvg;
async function ensureRenderers() {
  if (!_satori) _satori = (await import("satori")).default;
  if (!_Resvg) _Resvg = (await import("@resvg/resvg-js")).Resvg;
}

export async function renderCard(entry) {
  await ensureRenderers();
  const svg = await _satori(cardTree(entry), {
    width: WIDTH,
    height: HEIGHT,
    fonts: loadFonts(),
  });
  const resvg = new _Resvg(svg, {
    fitTo: { mode: "width", value: WIDTH },
    font: { loadSystemFonts: false },
  });
  return resvg.render().asPng();
}

export const OG_DIMENSIONS = { width: WIDTH, height: HEIGHT };
