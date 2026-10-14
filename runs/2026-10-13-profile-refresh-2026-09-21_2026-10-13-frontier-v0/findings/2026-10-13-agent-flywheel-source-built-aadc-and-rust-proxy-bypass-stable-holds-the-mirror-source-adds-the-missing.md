---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-source-built-aadc-and-rust-proxy-bypass-stable-holds-the-mirror-source-adds-the-missing
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/17609ca34bb5b20acd303ac4ada1ce808f1dd7dc
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L4520-L4575
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L7380-L7411
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L5001-L5023
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-source-built-aadc-and-rust-proxy-bypass-stable-holds-the-mirror-source-adds-the-missing

Source-built aadc and rust_proxy bypass stable holds; the mirror source adds the missing check. The stable cargo source-build helper clones and rebuilds aadc and rust_proxy without a hold check. The October 7 fix checks holds before cloning and records the source revision so an unchanged build can be skipped. It is contained in the mirror source tree but not delivered as an ACFS binary upgrade. Stable Claude/Codex hold checks remain; the generic claim that every tool freezes is false. Binary backups are best-effort and a failed backup leaves no rollback candidate. No build-time saving was measured here.

Channel: preview-or-beta. Half: both. Date: 2026-10-07.

Operator consequence: Verify the updater path for a tool before treating its hold as a freeze. On stable, do not rely on holds to stop aadc/rust_proxy source builds. Check that a usable .prev binary exists before relying on rollback.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/17609ca34bb5b20acd303ac4ada1ce808f1dd7dc
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L4520-L4575
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L7380-L7411
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L5001-L5023
