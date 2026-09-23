---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-cursor-no-in-window-security-advisory-despite-a-public-sandbox-escape-claim
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/cursor/cursor/security/advisories
    precision: official_docs
---
# 2026-09-21-cursor-no-in-window-security-advisory-despite-a-public-sandbox-escape-claim

No in-window security advisory, despite a public sandbox-escape claim. Nothing on the advisory channel. Lane C holds a 2026-09-15 researcher post (https://x.com/matviy/status/2099872739758874805) claiming a Cursor CLI macOS sandbox escape via a git `core.fsmonitor` variant after an earlier fix, with vendor acknowledgement. No primary surface confirms or dates a fix.

Channel: docs-only (negative result). Half: defect. Date: window.

Operator consequence: Watch: an advisory on cursor/cursor or a CLI changelog line naming git or fsmonitor settles it. Until then, treat the CLI sandbox on macOS as not covering git invoked by the harness, and do not run the CLI against untrusted repos on the strength of the sandbox alone. This is the same bug class as Copilot CLI's GHSA-9ccr-r5hg-74gf (patched there in 1.0.43).

## Receipt
- https://github.com/cursor/cursor/security/advisories
