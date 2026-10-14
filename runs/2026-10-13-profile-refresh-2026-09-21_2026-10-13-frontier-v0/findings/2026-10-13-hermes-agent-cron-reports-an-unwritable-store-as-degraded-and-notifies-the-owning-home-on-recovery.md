---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-cron-reports-an-unwritable-store-as-degraded-and-notifies-the-owning-home-on-recovery
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/759b1c34adb5c1be2ac5eeea50d6b2f4f52c9d7a
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/91fc7badafd2ab345aec8b4ac64c06460f30c017
    precision: commit
---
# 2026-10-13-hermes-agent-cron-reports-an-unwritable-store-as-degraded-and-notifies-the-owning-home-on-recovery

Cron reports an unwritable store as degraded and notifies the owning home on recovery. Previously store-write failures were mainly log warnings while ticks retried work that could not be durably recorded. The scheduler now keeps an in-memory degraded record with outage time and distinct skipped runs, throttles write probes, and clears state on a successful save. The gateway sends failure/recovery notices to the owning home's channels, honoring warning opt-outs.

Channel: tagged-release (first stable v0.21.6). Half: both. Date: 2026-10-07.

Operator consequence: On v0.21.6+, inspect cron status and notices for disk-space, read-only-mount or permissions failures. Confirm that the owning home has a usable notification channel and has not opted out. This makes skipped work inspectable; it does not guarantee exactly-once execution.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/759b1c34adb5c1be2ac5eeea50d6b2f4f52c9d7a
- https://github.com/NousResearch/hermes-agent/commit/91fc7badafd2ab345aec8b4ac64c06460f30c017
