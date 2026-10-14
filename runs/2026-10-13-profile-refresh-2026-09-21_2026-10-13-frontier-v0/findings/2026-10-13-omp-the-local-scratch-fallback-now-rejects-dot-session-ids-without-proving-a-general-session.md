---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-the-local-scratch-fallback-now-rejects-dot-session-ids-without-proving-a-general-session
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/3751293a941cef28aa8c67fc0809e3109874eeda
    precision: commit
---
# 2026-10-13-omp-the-local-scratch-fallback-now-rejects-dot-session-ids-without-proving-a-general-session

The local scratch fallback now rejects dot session IDs without proving a general session-store traversal. The local:// temporary fallback-root sanitizer now rejects session IDs . and .. instead of allowing a path component to resolve outside that fallback session root. The inspected test supplies no artifacts directory. This supports a fallback-root containment fix, not remote exploitability or traversal of every persisted session directory.

Channel: tagged-release. Half: defect. Date: 2026-10-06 (v18.7.0).

Operator consequence: Use v18.7.0 or later for this inspected local-root fix. Keep assessments confined to that path unless caller-control and persisted-session evidence establishes a wider exposure.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/3751293a941cef28aa8c67fc0809e3109874eeda
