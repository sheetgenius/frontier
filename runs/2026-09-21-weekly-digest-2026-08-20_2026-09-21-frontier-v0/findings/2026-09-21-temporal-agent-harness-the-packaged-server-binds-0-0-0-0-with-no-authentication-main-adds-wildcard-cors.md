---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-the-packaged-server-binds-0-0-0-0-with-no-authentication-main-adds-wildcard-cors
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/cli.py#L121
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/serve.py#L44
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/app.py#L281-L290
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md#L579-L584
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/d7a55f8855c31eb1a3281d2502f626c8a153aa44
    precision: commit
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/temporal_agent_harness/web/app.py#L152-L160
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-the-packaged-server-binds-0-0-0-0-with-no-authentication-main-adds-wildcard-cors

The packaged server binds 0.0.0.0 with no authentication; main adds wildcard CORS. `temporal-agent-harness serve`, the path the README leads with, listens on every interface with no authentication. Its endpoints approve tool calls (with `remember`), post callback results, send messages, and at 0.4.0 run operator commands including `/approvals skip`. Session ids come from `GET /api/sessions` and tool ids from `/api/attach`. On main, #139 adds wildcard CORS so a tic-tac-toe HTML file opened from disk can call the API. The code comment justifies it because nothing is credentialed. That reasoning misses the point: the uncredentialed endpoints are the authority. With wildcard CORS, any web page the operator visits can make JSON POSTs to the server and read the responses, subject to whatever local-network protections the browser applies. The coding example's shim reaches the agent through this same server (coding_agent/README.md "How it maps to the harness").

Channel: bind default preview-or-beta (0.4.0 wheel); CORS main-unreleased. Half: defect. Date: 0.0.0.0 default present at 0.4.0; CORS added 2026-09-17 in #139 (d7a55f8855).

Operator consequence: Run `serve --host 127.0.0.1` on 0.4.0, and do not run the main-branch server with a coding agent attached. The 0.4.0 wheel has no CORS, but its 0.0.0.0 default exposes approvals to the LAN. Watch the next tag for whether #139's CORS ships, and for a loopback default.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/cli.py#L121
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/serve.py#L44
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/app.py#L281-L290
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md#L579-L584
- https://github.com/temporal-community/temporal-agent-harness/commit/d7a55f8855c31eb1a3281d2502f626c8a153aa44
- https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/temporal_agent_harness/web/app.py#L152-L160
