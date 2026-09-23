---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-breaking-changes-an-upgrader-will-hit
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.3
    precision: github_release
---
# 2026-09-21-openclaw-breaking-changes-an-upgrader-will-hit

Breaking changes an upgrader will hit. 8.1: bundled OpenProse plugin and `/prose` removed. `codex/*` and `openai-codex/*` model refs migrate to `openai/*` via `openclaw doctor --fix`. 9.3: Node 24.16+ or 26.1+ required, and older Node risks SQLite text truncation. Skill Workshop moves to one writable collection per agent, and `skills.workshop.allowSymlinkTargetWrites` is retired. Several plugin SDK removals.

Channel: tagged-release. Half: defect. Date: 2026-08-31 (v2026.8.1), 2026-09-08 (v2026.9.3).

Operator consequence: Upgrade Node before OpenClaw. Run `openclaw doctor --fix` after crossing 8.1.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.3
