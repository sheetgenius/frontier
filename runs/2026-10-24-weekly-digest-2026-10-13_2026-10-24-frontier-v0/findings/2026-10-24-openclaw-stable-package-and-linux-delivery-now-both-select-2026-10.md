---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-stable-package-and-linux-delivery-now-both-select-2026-10
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/-/package/openclaw/dist-tags
    precision: official_docs
  - url: https://registry.npmjs.org/openclaw/2026.10.7
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.7
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/download/linux-stable/latest.json
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/releases/download/v2026.10.7/latest.json
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.6
    precision: github_release
---
# 2026-10-24-openclaw-stable-package-and-linux-delivery-now-both-select-2026-10

Stable package and Linux delivery now both select 2026.10.7. Npm still selects latest 2026.10.7, beta 2026.10.10-beta.3, and extended-stable 2026.9.33, with no dev tag. GitHub latest is 10.7, prerelease=false, published at 2026-10-24T09:53:46Z. Since the earlier harvest and crosscheck reads, the 10.7 AppImage and DEB were attached and both Linux updater pointers now name 10.7 and source 157d8c2bc3ea2fa183afdc11088e69690bf8e64e. No 10.7 macOS DMG or ZIP appeared in the read inventory; 10.6 retains versioned macOS downloads. Windows Hub and mobile store selectors are not established.

Channel: tagged-release. Half: capability. Date: 2026-10-24.

Operator consequence: Install the CLI/Gateway with `npm i -g openclaw@2026.10.7` using the Node range in section 1. Linux users can select the versioned 10.7 AppImage or DEB; validate updater delivery on their own machine. Do not infer a macOS, Windows, or phone update from npm or Linux publication. No package or desktop binary was installed or byte-audited here.

## Receipt
- https://registry.npmjs.org/-/package/openclaw/dist-tags
- https://registry.npmjs.org/openclaw/2026.10.7
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.7
- https://github.com/openclaw/openclaw/releases/download/linux-stable/latest.json
- https://github.com/openclaw/openclaw/releases/download/v2026.10.7/latest.json
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.6
