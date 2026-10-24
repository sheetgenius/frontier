---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-sandboxed-cron-and-delegated-children-need-api-models-until-host-cli-guards-ship
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/7abbf8507aa2fc52952621a497ece0e019b2748e
    precision: commit
  - url: https://github.com/openclaw/openclaw/commit/a19f1bf9eb6e5b22343c144a387a945d2cbc3525
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/a19f1bf9eb6e5b22343c144a387a945d2cbc3525/src/agents/command/attempt-sandbox-cli-admission.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/subagents/spawn/subagent-spawn-child-plan.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/cron/isolated-agent/run-admission.ts
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-sandboxed-cron-and-delegated-children-need-api-models-until-host-cli-guards-ship

Sandboxed cron and delegated children need API models until host-CLI guards ship. An inherited child model, fallback, or runtime override can choose a local CLI whose native tools run as the Gateway OS user outside the configured Docker sandbox while diagnostics classify the session as sandboxed. Main rejects these CLI candidates at cron admission, hidden/visible spawn admission, and a delegated-run backstop. It does not containerize CLI execution. The documented spawn restrictions remain available at 2026.10.7. For sandboxed scheduled or delegated work, explicitly select an embedded/API-backed model and inspect inherited subagent models, fallbacks, and runtime overrides. Main contains additional guards against resolving such work to a host-executed CLI; current stable and beta.3 do not contain those guards. A sandbox classification or `sandbox: require` is not proof that these CLI paths run inside the container.

Channel: main-unreleased. Half: defect. Date: 2026-10-23.

Operator consequence: Use API/embedded child and scheduled models and inspect `agents.entries.<id>.subagents.model`, `agents.defaults.subagents.model`, payload models, fallbacks, and pinned runtime overrides. Changing only the parent primary model is insufficient when a child default outranks it. Keep unrelated operators on separate Gateways and OS boundaries. Wait for these exact guards in a published release before relying on automatic refusal.

## Receipt
- https://github.com/openclaw/openclaw/commit/7abbf8507aa2fc52952621a497ece0e019b2748e
- https://github.com/openclaw/openclaw/commit/a19f1bf9eb6e5b22343c144a387a945d2cbc3525
- https://github.com/openclaw/openclaw/blob/a19f1bf9eb6e5b22343c144a387a945d2cbc3525/src/agents/command/attempt-sandbox-cli-admission.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/subagents/spawn/subagent-spawn-child-plan.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/cron/isolated-agent/run-admission.ts
