---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-main-enables-plugin-management-in-standard-mode-without-removing-approval
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/edde4a066776798c68e0c2750adf19b149a8c49f
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/bundle/web-app/presets/standard.patch.yml
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/boot/plugin-manager/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/README.md
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-main-enables-plugin-management-in-standard-mode-without-removing-approval

Main enables plugin management in Standard mode without removing approval. Standard exposes `tool-plugin-manager` when a profile context exists, joining Creator on main. Every tool action still requires Full access or approval for that call. Lower sandbox modes with policy `never`, rejection, cancellation or an unavailable approval channel prevent execution. Installed Host code still runs in-process outside the workspace sandbox. Rc.2 and rc.3 retain the narrower Creator default.

Channel: main-unreleased. Half: both. Date: 2026-10-21.

Operator consequence: Source-build users can delegate plugin setup without first selecting Creator, but must decide which persistent profile changes to authorize. Inspect the package and resulting composition rather than reading a visible tool as blanket mutation permission. More agent-visible setup does not remove the deliberate admission decision.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/edde4a066776798c68e0c2750adf19b149a8c49f
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/bundle/web-app/presets/standard.patch.yml
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/boot/plugin-manager/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/README.md
