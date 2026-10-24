---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-the-windows-resume-helper-s-systemroot-fix-is-still-untagged
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c
    precision: commit
  - url: https://github.com/openai/codex/issues/56264
    precision: official_docs
  - url: https://github.com/openai/codex/compare/rust-v0.164.0...970111f6cb62cc02fe36a82ea7d71b37a2889c97
    precision: git_compare
---
# 2026-10-24-codex-the-windows-resume-helper-s-systemroot-fix-is-still-untagged

The Windows resume helper's SystemRoot fix is still untagged. The [merged patch supplies `SystemRoot` when spawning the Windows filesystem helper](https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c). The [reporter describes a desktop resume failure with a bundled 0.163.0-alpha.11.2 CLI](https://github.com/openai/codex/issues/56264), not a controlled reproduction on standalone stable 0.164.0. The patch matches that missing-environment failure mechanism. It has not reached even the newest published preview in this snapshot.

Channel: main-unreleased. Half: defect. Date: 2026-10-23.

Operator consequence: Do not tell affected Windows users that installing 0.164.0 or alpha.1 contains this fix. Record the desktop and bundled CLI versions and the failing helper's error; watch for a tag containing the patch, then retest resume. Main availability is useful triage evidence, not an installable release receipt.

## Receipt
- https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c
- https://github.com/openai/codex/issues/56264
- https://github.com/openai/codex/compare/rust-v0.164.0...970111f6cb62cc02fe36a82ea7d71b37a2889c97
