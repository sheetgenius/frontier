---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-local-model-turns-handle-prompt-loading-and-laptop-sleep-without-treating-them-as-a-dead
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/518ce272b922ab24048696b3b2d322633ef7e6d1
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/chat_completion_local.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/sleep_clock.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/local_runtime/catalog.json
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.3
    precision: github_release
---
# 2026-10-24-hermes-agent-local-model-turns-handle-prompt-loading-and-laptop-sleep-without-treating-them-as-a-dead

Local-model turns handle prompt loading and laptop sleep without treating them as a dead server. Managed local requests stream prompt-reading progress, avoid a non-streamed fallback that cannot be cancelled, and use awake-time accounting for local stalls. A healthy local server gets a recovery attempt after a breaker trip. Windows memory admission accounts for free commit and prompt-cache size; status probes avoid loading a model merely to inspect it. Compression can extend its fence while newly read prompt tokens prove progress, without reopening a closed fence. The newer catalog includes Nemotron 3.5 Bolt and fitting DFlash draft configurations. These are executable integration paths in source, not verification of advertised benchmark scores or an OEM preload.

Channel: tagged-release. Half: both. Date: 2026-10-15.

Operator consequence: On a local-model laptop, test a long prompt, sleep/wake, cancellation, memory pressure, and unload behavior after upgrading. Distinguish active prompt ingestion from a stalled request before restarting it. This lets the harness handle more of the local runtime lifecycle, but hardware fit and actual quality/throughput remain deployment measurements. The claimed 63.44 benchmark and fivefold speedup are not adopted here.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/518ce272b922ab24048696b3b2d322633ef7e6d1
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/chat_completion_local.py
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/sleep_clock.py
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/local_runtime/catalog.json
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.3
