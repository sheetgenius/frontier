---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-github-skill-packages-ship-in-stable-automatic-future-instruction-refresh-reaches-canary
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1005.0/docs/guides/agent-developer/skills-store.md#L121-L205
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/473c80d13f2b63fb142b58a6273c0679cb65bd7a/doc/plans/2026-10-12-project-repository-skills.md#L3-L30
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/d432dc7fa355c526a64a43c03120806c11d47b71
    precision: commit
  - url: https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
    precision: official_docs
---
# 2026-10-13-paperclip-github-skill-packages-ship-in-stable-automatic-future-instruction-refresh-reaches-canary

GitHub skill packages ship in stable; automatic future instruction refresh reaches canary. Stable imports commit-pinned complete GitHub skill packages with supporting files and executable modes, manual refresh and retained active/pinned content. Import does not run scripts, hooks, installs or builds. October 13 canary adds project-attachment import and roughly five-minute automatic refresh. New executions use the latest installed version; resumed/pinned executions keep their snapshot. Existing manual sources gain automatic updates; legacy project attachments require explicit adoption. The pinned acceptance record reports a real GitHub marker update used by an unchanged routine, plus authorization/restart checks. That is vendor-recorded acceptance, not a new run here.

Channel: mixed (manual packages tagged-release; automatic refresh preview-or-beta, canary only). Half: both. Date: 2026-10-06 (manual packages); 2026-10-13 (automatic refresh).

Operator consequence: Review repository ownership, selections and automatic-update preferences before adopting canary. A repository commit can then change future instructions without a manual Refresh click. Per-execution snapshots support reproducibility; they do not mean every upstream update received a human approval. Keep stable manual-refresh behavior separate from the canary automation.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1005.0/docs/guides/agent-developer/skills-store.md#L121-L205
- https://github.com/paperclipai/paperclip/blob/473c80d13f2b63fb142b58a6273c0679cb65bd7a/doc/plans/2026-10-12-project-repository-skills.md#L3-L30
- https://github.com/paperclipai/paperclip/commit/d432dc7fa355c526a64a43c03120806c11d47b71
- https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
