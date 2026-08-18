---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-antigravity-1-1-11-mcp-admin-controls-were-skipped-for-the-first-five-minutes-of
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
    precision: github_release
---
# 2026-08-10-antigravity-1-1-11-mcp-admin-controls-were-skipped-for-the-first-five-minutes-of

1.1.11: MCP admin controls were skipped for the first five minutes of every session.

'Fixed admin controls being skipped for MCP servers at startup, where a fetch made before authentication cached "admin controls not applicable" and allowed every server for the next five minutes, and fixed the built-in Chrome DevTools MCP server being blocked outright by admin controls.' Class: policy-enforcement bypass with a bounded window. The organisation's administrator controls over which MCP servers may load were computed before the user was authenticated, and the negative answer was cached, so every configured MCP server was permitted for five minutes after launch.

Channel: tagged-release. Ancestry: Same tag 1.1.11 -> commit 1d853acd23f2b0fc55da42377aab1a05f5e34aa8, stable (prerelease:false). Entry present verbatim in both the release body and CHANGELOG.md pinned at that SHA.

Operator consequence: If you rely on Google Cloud administrator controls to restrict which MCP servers your developers can load, that control did not bind for the first five minutes of each session before 1.1.11. Upgrade, and if your MCP inventory includes anything you disallowed at the admin layer, check whether it was reachable during that window. Note the same release also unblocked the built-in Chrome DevTools MCP server, which admin controls had been blocking outright -- so the fix moves in both directions and your effective MCP surface changes on upgrade.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
