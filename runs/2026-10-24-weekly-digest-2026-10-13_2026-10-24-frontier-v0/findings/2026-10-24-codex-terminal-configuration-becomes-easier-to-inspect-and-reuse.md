---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-terminal-configuration-becomes-easier-to-inspect-and-reuse
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.163.0
    precision: github_release
  - url: https://github.com/openai/codex/commit/dcd9e954598cd5e9f80570204896d779c60c1ecd
    precision: commit
  - url: https://github.com/openai/codex/commit/0884c8047af8b02df31da8c622110a724c6b3cbc
    precision: commit
  - url: https://github.com/openai/codex/releases/tag/rust-v0.164.0
    precision: github_release
---
# 2026-10-24-codex-terminal-configuration-becomes-easier-to-inspect-and-reuse

Terminal configuration becomes easier to inspect and reuse. The terminal gets [searchable `/config`, `/keymap`, and daemon controls that warn before a restart and reconnect afterward](https://github.com/openai/codex/releases/tag/rust-v0.163.0). In 0.164.0, [ten `/presets` slots, inline model/reasoning/speed and permission selection, and Kitty/Sixel image previews](https://github.com/openai/codex/releases/tag/rust-v0.164.0) reduce repeated menu navigation. These are terminal capabilities, not evidence that every desktop UI has the same controls.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Save deliberate evaluation and work settings as presets, then inspect the resolved settings when resuming or switching server. Native image previews can shorten visual review in supported terminals. Keep the distinction between a convenient setting selector and a managed policy boundary.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.163.0
- https://github.com/openai/codex/commit/dcd9e954598cd5e9f80570204896d779c60c1ecd
- https://github.com/openai/codex/commit/0884c8047af8b02df31da8c622110a724c6b3cbc
- https://github.com/openai/codex/releases/tag/rust-v0.164.0
