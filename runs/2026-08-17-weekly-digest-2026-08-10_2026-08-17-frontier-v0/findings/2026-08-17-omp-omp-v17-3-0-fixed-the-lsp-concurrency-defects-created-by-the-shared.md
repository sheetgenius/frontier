---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omp-omp-v17-3-0-fixed-the-lsp-concurrency-defects-created-by-the-shared
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0
    precision: github_release
---
# 2026-08-17-omp-omp-v17-3-0-fixed-the-lsp-concurrency-defects-created-by-the-shared

OMP v17.3.0 fixed the LSP concurrency defects created by the shared-language-server capability it shipped ten days earlier.

The v17.3.0 changelog lists, under one line: concurrent sessions sharing backend overlays, stale document overlays after workspace edits, incorrect transactional edit advertisements, unhandled snippet placeholders in rust-analyzer, and failure to restore overwritten targets during failed file renames. Separately, LSP `diagnostics` was reporting success when every language server had failed. The overlay-sharing and stale-overlay defects are the direct consequence of `lsp.shared` broker-multiplexed language servers, shipped in v17.2.5 on 2026-08-03. The same release adds Astral `ty` as a fallback Python LSP server behind pyright/basedpyright/pylsp, first-party Nix support with reproducible source builds and NixOS/Home Manager modules, and removes the global `advisor.subagents` setting as a breaking change with automatic migration to `task.agentAdvisor`.

Channel: tagged-release. Ancestry: Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0, published_at 2026-08-13T07:02:57Z, prerelease=false; tag v17.3.0 -> 326d24bd40d9858e24e1036ae739c27c72eeb543. npm published 17.3.0 at 2026-08-13T07:06:31Z. Changelog section pinned at https://github.com/can1357/oh-my-pi/blob/v17.3.0/packages/coding-agent/CHANGELOG.md.

Operator consequence: Upgrade if you used `lsp.shared` between 2026-08-03 and 2026-08-13. A shared language server handing a stale document overlay to a second session means the agent reasoned about a file that no longer looks like that, and `diagnostics` reporting a clean workspace when every server crashed means a green check that proves nothing. Neither is visible from the transcript. If you have LSP-gated work from that window, re-run diagnostics on it. Adapt any config carrying `advisor.subagents`, though the migration is automatic.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0
