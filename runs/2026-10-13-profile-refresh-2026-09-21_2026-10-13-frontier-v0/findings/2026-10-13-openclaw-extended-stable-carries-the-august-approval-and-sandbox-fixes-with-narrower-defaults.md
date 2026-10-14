---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-extended-stable-carries-the-august-approval-and-sandbox-fixes-with-narrower-defaults
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.33
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.35
    precision: github_release
  - url: https://github.com/openclaw/openclaw/compare/ab5611f0...v2026.8.35
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/blob/v2026.8.35/src/infra/system-run-mutable-file-operand.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.8.35/src/config/types.tools.ts#L505-L524
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.8.35/extensions/diagnostics-prometheus/src/service.ts#L980-L1015
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.8.35/extensions/discord/src/send.emojis-stickers.ts#L27-L79
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/install/development-channels.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-rx8p-qcpv-c7vr
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-xvwp-wmh2-fq48
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-5x6q-wg56-rxg8
    precision: official_docs
---
# 2026-10-13-openclaw-extended-stable-carries-the-august-approval-and-sandbox-fixes-with-narrower-defaults

Extended-stable carries the August approval and sandbox fixes with narrower defaults. Extended-stable moved from the July line to an 8.2-based August line ending at 2026.8.35. It inherits byte-bound exec approval, the symlink-then-`..` validation fix and sandbox child-tree reaping from 8.1. Unlike the main stable line, 8.35 documents agent-to-agent messaging disabled and session visibility limited to the agent. It is gateway-only and requires a foreground update; extended-stable never applies automatically. Backport notes name three advisories whose version ranges still match this monthly version: scope-limited metrics scraping in the Prometheus plugin, Discord guild-asset uploads outside the sender's media roots, and Discord voice speaker-owner confusion. The Prometheus scope check and Discord asset-policy routing were independently traced in the release tree. Full voice speaker-ownership coverage was not traced. The first two advisories name separate plugin packages, not interchangeable core-package defects.

Channel: tagged-release, extended-stable 2026.8.35. Half: both. Date: 2026-09-28 (8.33 npm publication; GitHub 2026-09-29), 2026-10-01 (8.34 npm), 2026-10-02 (8.35).

Operator consequence: An operator still on 7.35 can explicitly install `openclaw@2026.8.35` or run `openclaw update --channel extended-stable` to obtain the inherited fixes with narrower August defaults. Later-fix coverage must be checked in the release tree; absent main SHAs and absent note bullets do not establish absence after squashed backports. Record a package-specific scanner exception only after confirming the installed plugin and backported mechanism. The September 9.33 preparation branch is not an installable release; read its defaults if it eventually ships.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.33
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.35
- https://github.com/openclaw/openclaw/compare/ab5611f0...v2026.8.35
- https://github.com/openclaw/openclaw/blob/v2026.8.35/src/infra/system-run-mutable-file-operand.ts
- https://github.com/openclaw/openclaw/blob/v2026.8.35/src/config/types.tools.ts#L505-L524
- https://github.com/openclaw/openclaw/blob/v2026.8.35/extensions/diagnostics-prometheus/src/service.ts#L980-L1015
- https://github.com/openclaw/openclaw/blob/v2026.8.35/extensions/discord/src/send.emojis-stickers.ts#L27-L79
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/install/development-channels.md
- https://github.com/openclaw/openclaw/security/advisories/GHSA-rx8p-qcpv-c7vr
- https://github.com/openclaw/openclaw/security/advisories/GHSA-xvwp-wmh2-fq48
- https://github.com/openclaw/openclaw/security/advisories/GHSA-5x6q-wg56-rxg8
