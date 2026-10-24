---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-current-state-cursor-s-hosted-agent-sessions-are-built-to-be-refused-review-approvals-whil
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: medium
evidence:
  - url: https://web.archive.org/web/20261024093422/https://cursor.com/docs/origin/agents
    precision: official_docs
  - url: https://web.archive.org/web/20261007190558/https://cursor.com/docs/api/origin/mcp
    precision: official_docs
  - url: https://web.archive.org/web/20261024094355/https://cursor.com/docs/api/origin/mcp
    precision: official_docs
  - url: https://web.archive.org/web/20261024094434id_/https://cursor.com/docs/api/origin/mcp/tools.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024093206/https://cursor.com/docs/release-notes/cloud-agents#oct-12-2026
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-current-state-cursor-s-hosted-agent-sessions-are-built-to-be-refused-review-approvals-whil

Current state: Cursor's hosted agent sessions are built to be refused review approvals, while Grok Bot can approve through the Origin MCP server without a confirmation prompt. The public docs describe a cloud agent as acting with the user's access. The shipped client shows a narrower design: the cloud-agent VM receives a session scoped to specific repositories and scopes, the CLI blocks merges sent with anything broader (merging through the scoped session itself remains possible, subject to rulesets), and the server is expected to refuse that session's approvals. Grok Bot, a separate computer-use product, can approve through MCP as the member it serves, with no confirmation flag on the approve tool. Who may approve therefore depends on which Cursor product holds the session, not on the word "agent".

Channel: docs-only (MCP and agents docs), with client evidence from Origin CLI stable artifacts 2026.10.13-14-06-43-ea1dfe5 and 2026.10.23-18-47-36-f52be1e. Half: both. Date: posture read 2026-10-24 (MCP text already present in the 2026-10-07 capture; CLI guards present in both the 13 and 23 October stable bundles).

Operator consequence: Do not assume agents cannot approve on Origin. Whether an approval made via Grok Bot counts toward required approvals or code-owner review is undocumented; test it on a scratch repository before letting members who are required reviewers use Grok Bot on Origin, or require group approvals from people who do not. Point read-only agents at `https://api.origin.cursor.com/mcp/readonly`. Reviewers can no longer rely on a `[bot]` suffix to spot app-written commits; check the actor type instead. Server enforcement of the scoped session was not tested here.

## Receipt
- https://web.archive.org/web/20261024093422/https://cursor.com/docs/origin/agents
- https://web.archive.org/web/20261007190558/https://cursor.com/docs/api/origin/mcp
- https://web.archive.org/web/20261024094355/https://cursor.com/docs/api/origin/mcp
- https://web.archive.org/web/20261024094434id_/https://cursor.com/docs/api/origin/mcp/tools.md
- https://web.archive.org/web/20261024093206/https://cursor.com/docs/release-notes/cloud-agents#oct-12-2026
- https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
