---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-seven-main-line-stables-shipped-with-distinct-release-qualification-omissions
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://api.github.com/repos/openclaw/openclaw/releases?per_page=40
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.6
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.7
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.8
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.9
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.1
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.2
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.3
    precision: github_release
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/apps/android/version.json
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/nodes/node-host.md#L177-L191
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-seven-main-line-stables-shipped-with-distinct-release-qualification-omissions

Seven main-line stables shipped with distinct release qualification omissions. Seven main-line stables shipped from 23 September through 13 October. 9.6 explicitly waived stable soak and made three failing CI lanes advisory; its crashing macOS package was rebuilt with the same version on 24 September. 9.7, 9.8 and 9.9 waived Telegram integration checks. 10.1, 10.2 and 10.3 report Telegram beta E2E not supplied. The examined release jobs skipped Android APK production and the checked version file remains 2026.8.2; no app-store inventory was checked. These are distinct waiver, missing-evidence and skipped-build states, not interchangeable failed tests. Update reliability also advanced: 9.7 adds database backups and candidate admission checks, 10.1 adopts immutable installation generations, and 10.3 repairs blocked updates. Since 9.6, eligible packaged headless nodes check hourly, apply while idle, and allow at least 12 hours between activations; extended-stable and other named install types are excluded.

Channel: tagged-release. Half: both. Date: 2026-09-23 through 2026-10-13.

Operator consequence: Pin a production Gateway to 2026.10.3 and read the versioned release's verification block before upgrading. Decide separately whether a node running system.run should self-update; opt out with nodeHost.autoUpdate.enabled false or OPENCLAW_NO_AUTO_UPDATE=1 when required. Treat the checked Android notes as source changes rather than proof of a current store build.

## Receipt
- https://api.github.com/repos/openclaw/openclaw/releases?per_page=40
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.6
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.7
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.8
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.9
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.1
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.2
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.3
- https://github.com/openclaw/openclaw/blob/v2026.10.3/apps/android/version.json
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/nodes/node-host.md#L177-L191
