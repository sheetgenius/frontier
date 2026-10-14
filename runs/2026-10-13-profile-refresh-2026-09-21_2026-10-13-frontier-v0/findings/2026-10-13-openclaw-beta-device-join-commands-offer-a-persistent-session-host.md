---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-beta-device-join-commands-offer-a-persistent-session-host
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/a14032f93c4729181e4163f0ba485edf9c18518e
    precision: commit
  - url: https://github.com/openclaw/openclaw/compare/a14032f9...v2026.10.5-beta.3
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/pull/168623
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3
    precision: github_release
---
# 2026-10-13-openclaw-beta-device-join-commands-offer-a-persistent-session-host

Beta device-join commands offer a persistent session host. The recommended CLI/Control UI join command now includes --service and --session-host, offering a background node service that can run agent sessions. A command-only service alternative remains and the UI shows the full consent flags. This is a changed suggestion for new joins, not silent activation of every existing node; session hosting remains a device-local choice in the pasted command and the runtime default is unchanged.

Channel: preview-or-beta, 2026.10.5-beta.3. Half: both. Date: 2026-10-10 merge, 2026-10-13 beta publication.

Operator consequence: Decide whether a joined device should persist in the background and host sessions before copying the suggested command. Use session hosting only inside the trusted shared Gateway infrastructure appropriate to that device. Stable 10.3 does not contain this suggestion change.

## Receipt
- https://github.com/openclaw/openclaw/commit/a14032f93c4729181e4163f0ba485edf9c18518e
- https://github.com/openclaw/openclaw/compare/a14032f9...v2026.10.5-beta.3
- https://github.com/openclaw/openclaw/pull/168623
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3
