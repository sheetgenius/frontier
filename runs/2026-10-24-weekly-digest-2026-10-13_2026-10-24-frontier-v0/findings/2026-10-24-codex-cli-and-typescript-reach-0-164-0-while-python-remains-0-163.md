---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-cli-and-typescript-reach-0-164-0-while-python-remains-0-163
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.164.0
    precision: github_release
  - url: https://registry.npmjs.org/@openai%2fcodex
    precision: official_docs
  - url: https://registry.npmjs.org/@openai%2fcodex-sdk
    precision: official_docs
  - url: https://pypi.org/pypi/openai-codex/json
    precision: package_registry
  - url: https://formulae.brew.sh/api/cask/codex.json
    precision: official_docs
---
# 2026-10-24-codex-cli-and-typescript-reach-0-164-0-while-python-remains-0-163

CLI and TypeScript reach 0.164.0 while Python remains 0.163.0. The timed [CLI](https://registry.npmjs.org/@openai%2fcodex) and [TypeScript](https://registry.npmjs.org/@openai%2fcodex-sdk) reads select latest=0.164.0 and alpha=0.165.0-alpha.1; [Python](https://pypi.org/pypi/openai-codex/json) remains 0.163.0 with no 0.164.0 publication observed. Homebrew selects 0.164.0. These are individually timed channel observations, not end-of-day promises; the stable release date is 23 October.

Channel: docs-only. Half: both. Date: 2026-10-24.

Operator consequence: Install the explicit CLI version and check each SDK publication separately. Do not prescribe an unpublished Python 0.164.0 or infer runtime compatibility from matching project names.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.164.0
- https://registry.npmjs.org/@openai%2fcodex
- https://registry.npmjs.org/@openai%2fcodex-sdk
- https://pypi.org/pypi/openai-codex/json
- https://formulae.brew.sh/api/cask/codex.json
