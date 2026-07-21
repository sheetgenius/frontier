---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-hermes-agent-path-traversal-fix-model-supplied-tool-call-ids-could-es
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/55929
    precision: merged_pr
---
# 2026-07-01-hermes-agent-path-traversal-fix-model-supplied-tool-call-ids-could-es

Path-traversal fix: model-supplied tool-call IDs could escape the tool-result storage directory (channel: main-unreleased, 2026-06-30). Operator consequence: P1 type/security fix (sweeper:risk-security-boundary). Untrusted tool_call.id values were interpolated directly into file paths (f"{storage_dir}/{tool_use_id}.txt"), so an ID like ../../etc/cron.d/x could write outside the storage dir; shell quoting did not stop path traversal. New _safe_result_filename() in tools/tool_result_storage.py collapses unsafe chars, strips leading/trailing dots, and hashes on normalization. Operators running Hermes with untrusted or model-driven tool loops should re-audit and pull main (merge SHA 0ea3861) or wait for the next tag; this is a sandbox-escape-class boundary fix, not yet in v2026.6.19. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/55929
