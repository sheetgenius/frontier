---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-distribution-one-prompt-install-a-linux-desktop-app-a-linux-update-channel
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.1
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.2
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/linux-stable
    precision: github_release
---
# 2026-09-21-openclaw-distribution-one-prompt-install-a-linux-desktop-app-a-linux-update-channel

Distribution: one-prompt install, a Linux desktop app, a Linux update channel. A fresh `npx openclaw@latest` detects existing Claude Code or Codex logins and API keys, verifies them live, and opens the web dashboard. The full wizard becomes "Custom setup". Linux joins macOS and Windows with a tray app.

Channel: tagged-release. Half: capability. Date: 2026-09-01 (v2026.8.2), 2026-09-03 (v2026.9.1), 2026-09-19 (`linux-stable` pointer).

Operator consequence: This answers the contract's approachability questions with a concrete surface. The terminal wizard is no longer the default path. Watch how the dashboard shows the widened defaults from section 7 to a first-run user. If it does not show them, this is convenience that hides authority.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.1
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.2
- https://github.com/openclaw/openclaw/releases/tag/linux-stable
