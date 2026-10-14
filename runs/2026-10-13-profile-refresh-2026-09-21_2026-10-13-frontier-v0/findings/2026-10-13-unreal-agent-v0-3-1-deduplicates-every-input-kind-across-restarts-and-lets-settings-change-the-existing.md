---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-deduplicates-every-input-kind-across-restarts-and-lets-settings-change-the-existing
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/commit/31f4fdadc54dd5061ae33959bc151d1b649c3a31
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.2.0/harness/sessionstore/localfile/state.go#L286-L318
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/inbox/local.go#L16-L31
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/inbox/inbox.go#L58-L63
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/README.md
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-v0-3-1-deduplicates-every-input-kind-across-restarts-and-lets-settings-change-the-existing

v0.3.1 deduplicates every input kind across restarts and lets settings change the existing client's model mid-session. The inbox drops any input whose ID it has already seen (local.go L73-L74), and after a restart it learns which IDs it has seen from the session file. Through v0.2.0 that seeding kept only external inputs. Control inputs (hard stop, stop-when-idle, heartbeat, settings) and crash inputs written before a restart were therefore accepted again if a host redelivered them with the same ID, even though the README promises deduplication "of external, control, and crash inputs" (README L15). The v0.3.0 Go tag and v0.3.1 binary release seed every kind. A settings input can change the existing client's model ID, compaction threshold and output cap mid-session, and an in-flight model request restarts when settings change. This does not change the configured provider or credentials. A system-prompt setting appeared and was removed before any tag, so no released session carries one.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: If you embed the library and deliver inputs at least once (through a queue or a retrying webhook), move to v0.3.x. On v0.1.x and v0.2.0, a redelivered hard stop could stop a resumed session a second time, or an older reasoning-effort setting could be applied again after a crash. CLI users are not exposed, because the runner mints a fresh UUID for each of its own control inputs. There is also a new authority to account for: anyone who can write to a session's inbox can now switch its model.

## Receipt
- https://github.com/unreallabsai/unreal-agent/commit/31f4fdadc54dd5061ae33959bc151d1b649c3a31
- https://github.com/unreallabsai/unreal-agent/blob/v0.2.0/harness/sessionstore/localfile/state.go#L286-L318
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/inbox/local.go#L16-L31
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/inbox/inbox.go#L58-L63
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/README.md
