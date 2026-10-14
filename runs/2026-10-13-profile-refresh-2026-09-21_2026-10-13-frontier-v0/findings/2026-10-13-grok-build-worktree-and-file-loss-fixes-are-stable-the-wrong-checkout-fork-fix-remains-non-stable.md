---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-worktree-and-file-loss-fixes-are-stable-the-wrong-checkout-fork-fix-remains-non-stable
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.54.external.md?generation=1791844061749505
    precision: official_docs
---
# 2026-10-13-grok-build-worktree-and-file-loss-fixes-are-stable-the-wrong-checkout-fork-fix-remains-non-stable

Worktree and file-loss fixes are stable; the wrong-checkout fork fix remains non-stable. The vendor documents multiple ways parallel-worktree operations could delete or revert work and corrections available in stable 1.0.52. The wrong-checkout fork correction is announced only in non-stable 1.0.54 at the cutoff. Worktree isolation and correct command working-directory selection are separate obligations.

Channel: tagged-release (1.0.50 and stable 1.0.52); preview-or-beta (available non-stable 1.0.54). Half: defect. Date: 2026-10-06..2026-10-12.

Operator consequence: Use 1.0.52 for the stable deletion/write fixes. Avoid -w -r or /fork into worktrees containing valuable uncommitted work until the fork fix reaches stable, or confirm pwd in the fork before writes. Removal scripts must handle refusal on in-use/unsaved trees. A larger non-stable version is not an automatic upgrade recommendation.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.54.external.md?generation=1791844061749505
