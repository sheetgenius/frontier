---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-digitalocean-web-bridge-defaults-on-only-in-the-closing-main-ancestry
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/0cb2fa70d76d9bca284359ec7f9116d1c7ad16f4
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/blob/0cb2fa70d76d9bca284359ec7f9116d1c7ad16f4/scripts/mars-web-bridge.mjs
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/0cb2fa70d76d9bca284359ec7f9116d1c7ad16f4/scripts/static-server.mjs
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/compare/v1.27.1...0e9ce191390f535347ff17055038c45eeef3fedf
    precision: git_compare
---
# 2026-10-13-openhands-digitalocean-web-bridge-defaults-on-only-in-the-closing-main-ancestry

DigitalOcean web bridge defaults on only in the closing main ancestry. The browser bridge mounts by default rather than requiring MARS_WEB=1; MARS_WEB=0 is an explicit opt-out, and a non-loopback mount without a key is still refused. The static server supplies its configured session key rather than the HTML-injection policy's stripped value. The bridge holds DigitalOcean tokens in memory and can operate session lifecycle, so this is a changed credential-bearing server surface. Electron and subordinate static servers may explicitly disable the duplicate bridge. Stable v1.27.1 retains the opt-in.

Channel: main-unreleased. Half: both. Date: 2026-10-13T16:35:29Z.

Operator consequence: If testing closing main, review bridge exposure and opt out explicitly where it is unnecessary. For stable installs, retain MARS_WEB=1 when the browser integration is intended. Watch the next tag's pinned bridge and static-server policy before treating this default as released.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/0cb2fa70d76d9bca284359ec7f9116d1c7ad16f4
- https://github.com/OpenHands/OpenHands/blob/0cb2fa70d76d9bca284359ec7f9116d1c7ad16f4/scripts/mars-web-bridge.mjs
- https://github.com/OpenHands/OpenHands/blob/0cb2fa70d76d9bca284359ec7f9116d1c7ad16f4/scripts/static-server.mjs
- https://github.com/OpenHands/OpenHands/compare/v1.27.1...0e9ce191390f535347ff17055038c45eeef3fedf
