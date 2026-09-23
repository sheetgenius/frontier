---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-architecture-posture-unchanged-at-both-newest-pins-no-privileged-core-any-row-replaceable
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/docs/architecture.md
    precision: tagged_commit_file
---
# 2026-09-21-deepseek-harness-architecture-posture-unchanged-at-both-newest-pins-no-privileged-core-any-row-replaceable

Architecture posture unchanged at both newest pins: no privileged core, any row replaceable; `never` still decided before waterfall. Nothing on the carry-forward question. The approval row, the sandbox-policy row, and the new Web auth all remain replaceable by the thing they limit, if that thing can write a patch. What moved is who can write patches: 0.1.6-alpha.2 adds a Plugins page that installs and enables plugins live from the Web UI, and removes Creator mode's dynamic Cordis tools in favor of Plugin Manager installs.

Channel: preview-or-beta. Half: neither (posture). Date: 2026-09-10 (rc), 2026-09-17 (alpha).

Operator consequence: `--dump-config` is still the security document. On the alpha line, anyone holding a Web session (section 2) can install a plugin, and a plugin can replace the approval row. Review the Plugins page as an admin surface, not a settings page.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/docs/architecture.md
