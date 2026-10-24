---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-fresh-zsh-fish-installations-receive-missing-shell-configuration
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/442439183d679880c9e68cafbd1f8fbaec1a78f8
    precision: commit
  - url: https://opencode.ai/v2/install
    precision: official_docs
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/install
    precision: tagged_commit_file
---
# 2026-10-24-opencode-fresh-zsh-fish-installations-receive-missing-shell-configuration

Fresh zsh/Fish installations receive missing shell configuration. [Commit 442439183d679880c9e68cafbd1f8fbaec1a78f8](https://github.com/anomalyco/opencode/commit/442439183d679880c9e68cafbd1f8fbaec1a78f8) creates a missing zsh/Fish config file when PATH modification is enabled, writes the PATH entry when possible and tells the operator to reload the shell. First v2.1.2, absent from v2.1.1. The [live V2 installer](https://opencode.ai/v2/install), read only as bytes at 2026-10-24T10:38:46.623852Z, is identical to [v2.1.4:install](https://github.com/anomalyco/opencode/blob/v2.1.4/install). SHA-256: `bfa0e5cd55b0447acdb1becbd3be1854277b5f8025742bd23ebf91bc01aa8ee8`. No script was executed.

Channel: tagged-release. Half: defect. Date: 2026-10-21.

Operator consequence: Operators on a fresh shell can distinguish a successful install that needs PATH reload from a missing binary; this also makes the installer's configuration-file write an explicit part of the installation contract.

## Receipt
- https://github.com/anomalyco/opencode/commit/442439183d679880c9e68cafbd1f8fbaec1a78f8
- https://opencode.ai/v2/install
- https://github.com/anomalyco/opencode/blob/v2.1.4/install
