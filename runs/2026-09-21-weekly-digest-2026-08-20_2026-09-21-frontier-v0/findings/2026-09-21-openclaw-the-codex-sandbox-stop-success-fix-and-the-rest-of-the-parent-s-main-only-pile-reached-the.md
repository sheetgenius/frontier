---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-the-codex-sandbox-stop-success-fix-and-the-rest-of-the-parent-s-main-only-pile-reached-the
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/fd8326c5bf6fcf063fd1ac0d9e87bf032fbfa2dc
    precision: commit
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
    precision: github_release
---
# 2026-09-21-openclaw-the-codex-sandbox-stop-success-fix-and-the-rest-of-the-parent-s-main-only-pile-reached-the

The Codex sandbox stop-success fix and the rest of the parent's main-only pile reached the same tags. The fix touches `extensions/codex/src/app-server/sandbox-exec-server/*` (commit file list): it reaps the process tree before reporting termination. It ships in the `@openclaw/codex` plugin published in lockstep at each version. The capability items from the parent (per-session read-only/guarded/workspace/full modes, forge credential kept on the Gateway) are installable on stable from 2026-08-31.

Channel: tagged-release (not in extended-stable). Half: both. Date: 2026-08-24 / 2026-08-31.

Operator consequence: On 2026.8.1+ a successful Codex sandbox stop means the tree is gone. Before 8.1, and on extended-stable, it did not. Operators can now plan around "cloud worker finishes, Gateway opens the draft PR, worker never holds the token".

## Receipt
- https://github.com/openclaw/openclaw/commit/fd8326c5bf6fcf063fd1ac0d9e87bf032fbfa2dc
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
