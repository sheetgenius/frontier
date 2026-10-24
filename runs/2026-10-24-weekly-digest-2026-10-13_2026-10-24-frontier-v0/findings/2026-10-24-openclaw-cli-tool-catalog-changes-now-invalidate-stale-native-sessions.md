---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-cli-tool-catalog-changes-now-invalidate-stale-native-sessions
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/4057f94e2692f5cc274e97770d79f01402c25af9
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/cli-session.ts#L37-L48
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/cli-session.ts#L319-L328
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/issues/175670
    precision: official_docs
---
# 2026-10-24-openclaw-cli-tool-catalog-changes-now-invalidate-stale-native-sessions

CLI tool-catalog changes now invalidate stale native sessions. Previously a resumed CLI could retain an old tool catalog after OpenClaw changed its available tools, including after restart. The current reuse policy invalidates the native binding when the stable tool-name fingerprint changes, because the loopback bridge cannot notify a resumed CLI to refresh its catalog. A later refinement excludes transient caller-surface tools from that fingerprint so ordinary completion/context changes do not unnecessarily discard native continuity.

Channel: tagged-release. Half: defect. Date: 2026-10-24.

Operator consequence: Test 10.7 with the actual Claude CLI/OpenClaw restart and tool-change workflow before retaining manual session-reset workarounds. This repairs a concrete source of missing tools and wasted turns. It does not establish that the separate social benchmark's deadline misses, image failures, or unsolicited commits all had this cause, nor does it diagnose standalone Claude Code.

## Receipt
- https://github.com/openclaw/openclaw/commit/4057f94e2692f5cc274e97770d79f01402c25af9
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/cli-session.ts#L37-L48
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/cli-session.ts#L319-L328
- https://github.com/openclaw/openclaw/issues/175670
