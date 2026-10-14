---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-git-sync-encryption-re-export-and-configured-webhook-deduplication-reach-stable
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/automation/commit/b43294c09eb439f2e6f4045761fae9b43d8664ac
    precision: commit
  - url: https://github.com/OpenHands/automation/pull/563
    precision: merged_pr
  - url: https://github.com/OpenHands/automation/commit/d6fe90e5238f1c093f91d00db9dafa7fdd8c60eb
    precision: commit
  - url: https://github.com/OpenHands/automation/releases/tag/1.18.0
    precision: github_release
  - url: https://github.com/OpenHands/automation/releases/tag/1.19.1
    precision: github_release
---
# 2026-10-13-openhands-git-sync-encryption-re-export-and-configured-webhook-deduplication-reach-stable

Git Sync encryption re-export and configured webhook deduplication reach stable. An API-configured Git Sync encryption-key change now marks every org export dirty, and plaintext generated files count as stale under encryption. Previously enabling encryption could leave existing prompts/scripts readable at repository HEAD. The repair does not rewrite Git history; a sync already running with the old key and env-only key changes remain documented gaps. Custom webhook sources gain an optional event_id_header to identify and deduplicate repeated deliveries. With no configured header the previous behavior remains: repeated deliveries can create duplicate work.

Channel: tagged-release. Half: both. Date: 2026-10-05 (automation 1.18.0); 2026-10-09 (1.19.1); Canvas bundles October 6 and 12.

Operator consequence: After enabling or rotating encryption, inspect repository HEAD for ciphertext and account for an already-running sync; separately handle sensitive history. Configure the provider's stable delivery-ID header before assuming retries deduplicate. The human test moves to exported state and duplicate-run counts, not a settings checkbox.

## Receipt
- https://github.com/OpenHands/automation/commit/b43294c09eb439f2e6f4045761fae9b43d8664ac
- https://github.com/OpenHands/automation/pull/563
- https://github.com/OpenHands/automation/commit/d6fe90e5238f1c093f91d00db9dafa7fdd8c60eb
- https://github.com/OpenHands/automation/releases/tag/1.18.0
- https://github.com/OpenHands/automation/releases/tag/1.19.1
