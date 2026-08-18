---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-computer-use-gets-a-non-yolo-path-to-attach-to-your-signed-in
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/86342
    precision: merged_pr
---
# 2026-08-17-hermes-agent-computer-use-gets-a-non-yolo-path-to-attach-to-your-signed-in

Computer-use gets a non-YOLO path to attach to your signed-in browser.

Until this landed, attaching the typed `cua_browser_*` route to a user's real signed-in browser profile always failed closed in standard mode, and the only escape hatch was full session YOLO. The PR adds three graded rungs, all live-verified against a real cua-driver 0.19.3 binary rather than from docs: a one-time `computer_use.grant_existing_profile: true` config opt-in that appends cua's `--grant existing-profile`; a `bounded` permission mode launching a private per-session daemon with `--session-policy <path> --approve-session-policy` against a reviewed manifest, failing loudly at session start if the manifest is missing; and a `hermes computer-use browser-approve --pid` interactive token passthrough that refuses non-interactive terminals, so a model genuinely cannot mint it. `unrestricted` is deliberately not a config value  --  it stays bound to the explicit per-session YOLO toggle. Notably the live probe found the published cua docs wrong: the documented `--capability-manifest` spelling is rejected by the real binary.

Channel: tagged-release. Ancestry: merge_commit_sha 20cf326bd117e66b0c3a0385dcad20a53f19d6f2; compare/20cf326b...v2026.8.16 -> status=ahead, ahead_by=195, behind_by=0 (ancestor of stable tag v2026.8.16).

Operator consequence: If you wanted browser automation against a logged-in profile and were refusing to run session YOLO to get it, this is the change to test. Use the bounded manifest rung, not the config grant, when the browser holds real sessions: the grant is a standing permission, the manifest is a reviewed one. And take the docs-vs-binary mismatch as the warning it is  --  verify cua flag names against your installed driver, not against dev.trycua docs.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/86342
