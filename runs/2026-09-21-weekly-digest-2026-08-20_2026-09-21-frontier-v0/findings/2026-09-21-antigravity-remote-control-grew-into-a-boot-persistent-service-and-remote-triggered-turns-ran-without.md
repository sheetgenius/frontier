---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-remote-control-grew-into-a-boot-persistent-service-and-remote-triggered-turns-ran-without
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-antigravity-remote-control-grew-into-a-boot-persistent-service-and-remote-triggered-turns-ran-without

Remote Control grew into a boot-persistent service, and remote-triggered turns ran without the session's permission mode until 1.2.6. Capability: a machine can now be left reachable for remote agent control across reboots. Defect: before 1.2.6 (the note gives no start version; `--remote-control` already existed at 1.1.19), a turn started remotely did not carry the local session's permission mode, cycle mode, or outside-workspace grants. The note does not say what it ran under instead.

Channel: tagged-release. Half: both. Date: 2026-09-03 (tunnel hardening), 2026-09-10 (service), 2026-09-18 (permission fix).

Operator consequence: Do not run the 1.2.0 background service below 1.2.6; if you used Remote Control before 1.2.6, treat remote-triggered turns in that span as having run under an unknown permission posture and review their transcripts. On >= 1.2.6, `remote-control status` belongs in your host inventory: it is a persistent inbound control path. Prefer the session-scoped form unless you need reboot survival.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md
