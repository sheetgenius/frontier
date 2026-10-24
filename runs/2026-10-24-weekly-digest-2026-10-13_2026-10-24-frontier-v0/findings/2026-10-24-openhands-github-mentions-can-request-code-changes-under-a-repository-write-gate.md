---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-github-mentions-can-request-code-changes-under-a-repository-write-gate
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/extensions/commit/af0a4b816b0b711c79771b91a950726c0c6ed896
    precision: commit
  - url: https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.32.0/package.json
    precision: tagged_commit_file
---
# 2026-10-24-openhands-github-mentions-can-request-code-changes-under-a-repository-write-gate

GitHub mentions can request code changes under a repository-write gate. The monitor defaults to repository-write authorization and `implement` work mode, allowing authorized requests to lead to branch creation, commits, pushes and updates to existing pull requests. The polling script mechanically checks GitHub repository permissions for other authors, but explicit allowlists and the token owner bypass that check; `anyone` bypasses it generally. Work restrictions are agent instructions. The catalog fallback template expresses both its authorization check and work restrictions in the prompt. `reply` is the narrower work mode.

Channel: tagged-release. Half: both. Date: 2026-10-23 (extensions v0.35.0; Canvas v1.32.0).

Operator consequence: Audit the actual deployed monitor definition, bypass list, token scope and work mode before enabling it. Pairing `anyone` with `implement` lets arbitrary commenters request code changes using the automation's token. This can replace manual request-to-branch coordination, but moves the critical human decision to who may start work. Do not infer migration of existing saved bundles or mechanical enforcement of prompt restrictions. No live repository monitor was exercised.

## Receipt
- https://github.com/OpenHands/extensions/commit/af0a4b816b0b711c79771b91a950726c0c6ed896
- https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663
- https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114
- https://github.com/OpenHands/OpenHands/blob/v1.32.0/package.json
