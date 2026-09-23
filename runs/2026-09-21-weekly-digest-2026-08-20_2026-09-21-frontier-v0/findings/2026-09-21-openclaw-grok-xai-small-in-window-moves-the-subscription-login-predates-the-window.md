---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-grok-xai-small-in-window-moves-the-subscription-login-predates-the-window
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
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.4/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-openclaw-grok-xai-small-in-window-moves-the-subscription-login-predates-the-window

Grok/xAI: small in-window moves; the subscription login predates the window. OpenClaw's primary record shows no new Grok integration or Grok-specific distribution change in the window. It shows usage display for SuperGrok accounts, OAuth catalog continuity, and Grok added as a target for the triage-handoff workflow. Running OpenClaw on a SuperGrok subscription without an API key has been possible since 2026.5.17. v2026.9.5 also makes the macOS app default to the web experience (#148808 et al.). That is the nearest primary item to a "MacBook simplicity" framing, and it is not Grok-specific.

Channel: tagged-release. Half: capability. Date: 2026-09-03, 2026-09-08, 2026-09-19.

Operator consequence: Ignore for the approval story. If the Writing lane uses the Latent Space piece, the primary anchor is "subscription OAuth since May, usage display since 2026.9.1", not a new integration.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.1
- https://github.com/openclaw/openclaw/blob/v2026.9.4/CHANGELOG.md
