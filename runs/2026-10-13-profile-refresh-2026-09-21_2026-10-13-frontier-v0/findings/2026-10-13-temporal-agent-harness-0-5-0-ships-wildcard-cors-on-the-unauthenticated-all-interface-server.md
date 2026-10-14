---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-0-5-0-ships-wildcard-cors-on-the-unauthenticated-all-interface-server
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L176-L184
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/web/app.py#L176-L184
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/cli.py#L149
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L481-L554
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L66
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L235-L268
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L306-L338
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/coding_agent/justfile#L48
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L933-L938
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/d7a55f8855c31eb1a3281d2502f626c8a153aa44
    precision: commit
---
# 2026-10-13-temporal-agent-harness-0-5-0-ships-wildcard-cors-on-the-unauthenticated-all-interface-server

0.5.0 ships wildcard CORS on the unauthenticated all-interface server. #139 added wildcard origins, methods and headers, and 0.5.0 first shipped it. At 0.4.0 the server already bound 0.0.0.0 without authentication; absence of this middleware did not establish categorical browser safety. The unauthenticated routes include approval with remember, callback results, messages and session discovery. GET /api/sessions combines manager sessions with a discovery query capped at 200 workflows; includes a first-message preview when found within the bounded history scan (96 events). The server uses the Temporal connection its profile supplies, including a configured Cloud API key. The middleware permits cross-origin reads and JSON requests when the browser and network allow the page to reach this unauthenticated endpoint. The README describes auth middleware as something a self-hosted application can add. This is source-derived exposure, not a successful live exploit.

Channel: preview-or-beta (0.5.0 and 0.6.0 tags and PyPI wheels; unchanged on main at M). Half: defect. Date: 2026-09-30.

Operator consequence: Treat an allowed network/browser path to these endpoints as approval and message authority. Bind loopback and add authentication plus origin checks in the application or proxy; loopback alone does not reject a cross-origin request that a browser permits. Eleven example justfiles explicitly bind 0.0.0.0. create_agent_harness_app installs the wildcard unconditionally, so a self-hosted app inherits it. Watch for authentication, narrowed origins or a loopback default in a release; none was found at M. No cross-origin probe was run.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L176-L184
- https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/web/app.py#L176-L184
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/cli.py#L149
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L481-L554
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L66
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L235-L268
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L306-L338
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/coding_agent/justfile#L48
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L933-L938
- https://github.com/temporal-community/temporal-agent-harness/commit/d7a55f8855c31eb1a3281d2502f626c8a153aa44
