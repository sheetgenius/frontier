---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-omp-omp-added-an-exact-path-extension-allowlist-that-bypasses-ambient
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v17.2.10
    precision: github_release
---
# 2026-08-10-omp-omp-added-an-exact-path-extension-allowlist-that-bypasses-ambient

OMP added an exact-path extension allowlist that bypasses ambient discovery.

A `--trusted-extension <absolute-path>` CLI flag loads an exact extension-module allowlist and bypasses ambient extension discovery entirely. The same release carries a breaking change: the re-exported `zod` API is replaced by an omptype-backed compatibility facade (`@oh-my-pi/omptype/zod`), so plugins keep the Zod-style builder interface but real Zod-specific APIs are gone.

Channel: tagged-release. Ancestry: Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.2.10, published_at 2026-08-06T12:28:54Z, prerelease=false; tag v17.2.10 -> 43c1b245e79f845c7ed7c692b79b4acd0f5c56af; npm published 17.2.10 at 2026-08-06T12:33:09Z. Changelog entry pinned at https://github.com/can1357/oh-my-pi/blob/v17.2.10/packages/coding-agent/CHANGELOG.md.

Operator consequence: Try `--trusted-extension` if you run OMP against repositories you do not control. Ambient extension discovery walks configured roots, and OMP's rule discovery already reads in-workspace config (`.omp` rules, plus Cursor, Windsurf, Cline and GitHub rule providers, per docs/rulebook-matching-pipeline.md at v17.3.5), so a repository under review has surface to influence agent behaviour by default. An explicit absolute-path allowlist is the flag that closes the extension half of that. Adapt any plugin importing Zod-specific APIs before upgrading.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v17.2.10
