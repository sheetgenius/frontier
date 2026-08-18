---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-37-0-exposes-vercel-sandbox-drives-as-mountable-storage-for-live
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.37.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-37-0-exposes-vercel-sandbox-drives-as-mountable-storage-for-live

eve 0.37.0 exposes Vercel Sandbox Drives as mountable storage for live session sandboxes.

Vercel Sandbox Drives are exposed, and authors can mount them when creating live session sandboxes. The same release changes CLI entry behaviour: running `eve` with no command initializes the current directory when no eve project is present and starts development when one is detected, and `eve init` now asks whether to scaffold a non-empty current directory in place or create a named subdirectory, with in-place scaffolds preserving unrelated files and overwriting generated paths.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.37.0 published 2026-08-13T21:04:29Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.36.0...eve%400.37.0'` returned fe691aa 456c0a5 c77c661 7ab7d97 d6ac2d2 d0bb6af 9032e9f, containing the minor-change commit fe691aa  --  in the history of the stable tag eve@0.37.0.

Operator consequence: Watch rather than adopt. A mountable drive is the piece that lets state outlive a single sandbox session, which is the difference between an agent that re-clones and re-installs every run and one that keeps a warm workspace  --  but it binds you to the Vercel sandbox backend specifically, and the contract's open question about which of the three backends (Vercel, Microsandbox, Docker) are first-class is now answered in Vercel's favour by this asymmetry. Separately, note the CLI behaviour change before you run `eve` in a populated directory expecting a no-op: a bare `eve` now scaffolds.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.37.0
