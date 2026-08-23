# omp2 primary-source check -- 2026-08-23

Purpose: cross-check the X discovery leads in `../social/topic-omp-pi-rust-rewrite.raw.md`
against the trees. Nothing in the sweep is a receipt; everything below was read from
GitHub on 2026-08-23 with `gh api`. Pins are given so a later reader can re-fetch.

## The branch is real, and it is not a branch of OMP

- `can1357/oh-my-pi` has a branch `omp2`. Tip at read time: `ccec31b6`
  (2026-08-23T08:54:59Z). https://github.com/can1357/oh-my-pi/tree/omp2
- `compare/main...omp2` returns "No common ancestor between main and omp2" (HTTP 404).
  omp2 is an orphan history, not a fork point off the TypeScript tree.
- 453 commits, first is `9c85c97b` "Initial commit" 2026-08-08T07:04:58Z. Every one of
  the most recent 300 is authored `can1357` (see `omp2-commits-latest-300.tsv`). Daily
  counts in that sample: 08-14: 8, 08-16: 28, 08-19: 29, 08-20: 30, 08-21: 17,
  08-22: 165, 08-23: 23.
- The 2026-08-08 start date matches the sweep's "started about two weeks earlier"
  (posted 2026-08-21). The single-author history matches "Can doing the work alone."

## What is in it

- `Cargo.toml` at tip: virtual workspace `members = ["crates/*"]`, resolver 3,
  `version = "0.1.0"`, `authors = ["Stencil Labs, Inc."]`,
  `repository = "https://github.com/stencil-hq/omp"`, homepage https://omp.sh/.
- 48 crates under `crates/`: agent app ar ast catalog chat-ui collab core desktop
  docserver driver e2e env envd executor ext grep gui hashline inference macros memory
  oauth proto py rpc sandbox scribe sdk secrets serve settings shell-builtins
  shell-engine shell slopjson snapcompact storage telemetry tool tools tui voice-kokoro
  voice walker webview.
- No `packages/` directory at the tip. The TypeScript tree is absent, not carried.
- `crates/py/Cargo.toml`: package `omp-py`, "Self-contained embedded CPython runtime
  with frozen standard-library and project modules", depends on `pyo3`. This is the
  primary-source form of the "plugins on bundled CPython" claim.
- README at tip, first line under the hero: "A coding agent with the IDE wired in --
  rewritten in Rust." Then: "Pre-release: the workspace is being built up subsystem by
  subsystem; expect renames and breaking changes without notice." The license badge
  links `stencil-hq/omp`. The README references `.plan/feature-map/` as a "pi-parity
  feature map and milestone roadmap"; that path returns 404 at the tip (referenced,
  absent). `npm/pi-coding-agent` exists as a shim containing only `bin/`.
- PHILOSOPHY.md at tip: "first as a growing pile of diffs against Pi, now as omp2, a
  ground-up Rust rewrite"; lesson 1 is "Rust engine; embedded free-threaded Python for
  extensions"; it states "The Python extension SDK was frozen only after waves of
  subagents ported ~80 real extensions against it", with a dated internal quote
  2026-08-20. (The file uses a superscript 2 in "omp2"; the ASCII spelling here is ours.)
  https://github.com/can1357/oh-my-pi/blob/ccec31b6/PHILOSOPHY.md

## What is not in it

- No tag, no GitHub release, no install channel contains omp2. The shipping line is
  still the TypeScript/Bun tree: v17.4.0 (08-20), 17.4.1/17.4.2 (08-21), v18.0.0
  (08-22), 18.0.1 and 18.0.3 (08-23), npm `@oh-my-pi/pi-coding-agent` 18.0.3,
  `packageManager: bun@1.4.0`. Note for Monday: 18.0.0 is a new major since the brief's
  window-close 17.4.0; its notes are incremental (glyph tokenization, `omp render`,
  `omp bench`, pi-natives spellcheck/HighlightStream/TtyWriter), not the rewrite.
- The sweep has Can saying omp2 would wait while he shipped an "OMP blob-broker the
  next day" (08-21). No "blob" or "broker" appears in the v18.0.0 release body. `main`
  has `c821261d` "feat(ai): enabled auth init with broker checks and cleanup" (08-22).
  Treat "blob-broker" as unverified; do not equate it with the auth broker.
- `stencil-hq` is a GitHub org created 2026-06-05 (name "Stencil", blog stencil.so) with
  two public repos: `slab` ("A design language for agents", Rust) and `vibemon`.
  `stencil-hq/omp` is not public. Whether OMP is becoming a Stencil Labs product is a
  question, not a finding; the only receipt is the Cargo metadata above.

## Pi's side

- `earendil-works/pi` `packages/coding-agent/package.json`: `engines.node >=22.19.0`,
  `bin.pi = dist/bundle/cli.js`. Bun appears only in the optional `build:binary` script
  (`bun build --compile ... ./src/bun/cli.ts`) and in `src/bun/` helpers for that
  compiled-binary path. So: the npm channel of Pi runs on Node; Bun is a build option.
  Mario Zechner's "Pi has no Bun dependency" is right for the channel operators
  install; Olek's "Bun bloat" describes OMP's own runtime choice (`packageManager:
  bun@1.4.0` on OMP main), not Pi's.
- Zero `.rs` or `Cargo.toml` files on Pi `main` or `dev` at read time. `earendil-works`
  org's only Rust repo is `clipboard` (pushed 2026-05-28). No sign of a Pi Rust port
  in the trees, consistent with mitsuhiko's post that they do not plan to port Pi to
  Rust.
- Third-party Rust Pis named in the sweep, not verified here:
  https://github.com/Dicklesworthstone/pi_agent_rust (@doodlestein) and a port by
  Domen Kozar that is described as private.

## Identity notes

- OMP maintainer: GitHub `can1357`, name Can Boluk (with umlaut), X `@_can1357`. The
  sweep prompt misnamed him; Grok's coverage note corrected it.
- `@oleksoleksoleks` is described by the sweep as "harness engineering at omp.sh" per
  bio. Not verified outside X. His posts are the public origin of the "Rust rewrite,
  Pi ripped out, Bun replaced by CPython" framing; Can's own posts point at the branch
  and say OMP and Pi "are not associated."
- `omp2` is not: current OMP main's `crates/pi-*` N-API natives (those have 600+
  commits back to at least 2026-06-10 and ship today); not Pi 2 (Armin's harness
  redesign on Pi `dev`, TypeScript); not pi_agent_rust; not grok.com; not HeyPi.

## Status for the editor

Channel: feature branch, orphan, pre-release by its own README. Nothing an operator can
install. Decision-bearing parts if it ships: TS/Bun extensions do not carry over (Python
SDK), the Pi layer is gone (the name stays), and OMP `main` core work is described by
its own team as paused under PRs. The Pi maintainers have publicly disputed the reasons
given for leaving. That dispute is the story; the tree supports both halves of it.
