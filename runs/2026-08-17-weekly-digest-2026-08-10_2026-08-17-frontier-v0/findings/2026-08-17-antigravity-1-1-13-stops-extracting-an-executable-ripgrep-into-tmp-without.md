---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-antigravity-1-1-13-stops-extracting-an-executable-ripgrep-into-tmp-without
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
    precision: github_release
---
# 2026-08-17-antigravity-1-1-13-stops-extracting-an-executable-ripgrep-into-tmp-without

1.1.13 stops extracting an executable ripgrep into /tmp without integrity checks.

'Improved embedded ripgrep reliability and security by saving extracted binaries to the user cache directory instead of /tmp. Added content-addressed SHA-256 verification and atomic renaming to guarantee binary integrity and prevent concurrent execution races.' Class: local binary planting plus a TOCTOU execution race. Until 1.1.13 the CLI unpacked an executable it then ran into a world-writable shared temporary directory with no integrity check, so any local process able to write that path could substitute the binary the agent would execute. Pair this with 1.1.6 (2026-07-24), which granted the sandbox read access to the system temporary directory by default.

Channel: tagged-release. Ancestry: Tag 1.1.13 is stable (prerelease:false), published 2026-08-14T02:26:19Z; the '## 1.1.13' changelog section carrying this entry is in CHANGELOG.md at main commit fbf22703a9c4bda0758b5bace0ab3142746780a9. Entry also verbatim in the 1.1.13 release body.

Operator consequence: Upgrade. On shared or multi-tenant hosts -- CI runners especially -- treat pre-1.1.13 runs as having executed an unverified binary from a shared path, and rotate anything that agent could have touched if you have reason to suspect the host. Going forward the extracted binary is content-addressed by SHA-256 in the user cache directory, which is the first integrity check this distribution has published for anything it executes; note that the installer itself still documents no checksum, signature, or version pin for the `agy` binary you curl-pipe to bash.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
