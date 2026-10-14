---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-18-10-4-removed-omp-codex-code-mode-and-corrected-cross-model-compaction-and-devin-window
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/7b2bd46db7e175abc09b0d37004bf5dc8ccd0962
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4
    precision: github_release
---
# 2026-10-13-omp-18-10-4-removed-omp-codex-code-mode-and-corrected-cross-model-compaction-and-devin-window

18.10.4 removed OMP Codex Code Mode and corrected cross-model compaction and Devin window defaults. OMP removed Codex Code Mode and providers.openai-codex.codeMode/codeModeDirectTools; Codex models now use the full direct tool surface in this harness. The release also fixes Claude refusing a session snapcompacted under another reasoning model by reading a reasoning-free archive variant. OMP's Devin catalog now defaults affected long-context-priced models to their 272K or 200K threshold, with larger windows requiring extended context. These are OMP integration and catalog changes, not claims independently verified about provider products.

Channel: tagged-release. Half: both. Date: 2026-10-13 (v18.10.4).

Operator consequence: Remove the obsolete OMP Code Mode settings and recheck direct-tool policy. Use v18.10.4 for the stated cross-model session fix. Decide whether to enable extended context on affected Devin entries rather than assuming the old larger window.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/7b2bd46db7e175abc09b0d37004bf5dc8ccd0962
- https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4
