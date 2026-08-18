---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-hermes-agent-docker-sandboxed-sessions-were-sharing-one-container-and-each-other-s
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/82731
    precision: merged_pr
---
# 2026-08-10-hermes-agent-docker-sandboxed-sessions-were-sharing-one-container-and-each-other-s

Docker-sandboxed sessions were sharing one container and each other's repo mounts.

Reported from Discord by lpha3ch0 against a sandboxed security profile: with `container_persistent: false`, all sessions collapsed onto one shared "default" container, and the /workspace bind-mount source was read from the process-global TERMINAL_CWD env var written by the desktop workspace picker  --  which outlives its session. A brand-new chat therefore attached to the previous session's container with the previous session's repo bind-mounted read-write. A second bug had the gateway record the *host* launch dir as session cwd, so every command in the sandbox prefixed `cd /Users/<user>/dev/<repo>` and returned exit 126. The fix keys containers per session, adds a subagent-to-parent container alias registry so children share the parent's sandbox deliberately, and makes `_resolve_task_host_cwd()` the single owner of mount policy across all four env-creation sites, refusing process-global cwd sources under isolation. Default `container_persistent: true` behaviour is unchanged.

Channel: tagged-release. Ancestry: merge_commit_sha e95e13783bc4a17ce97926a4a6b226e6d297abc0; compare/e95e1378...v2026.8.13 -> status=ahead, ahead_by=661, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: If you relied on `container_persistent: false` for per-session isolation before v0.20.1, you did not have it  --  audit what repos were reachable from sessions you believed were sealed. Upgrade, and note that the *default* config was never isolated and still is not: one long-lived shared container remains the default.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/82731
