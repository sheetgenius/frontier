---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-planning-tool-off-by-default-permission-profile-persistence-extended-to-tui-turns-cd-and
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.151.0
    precision: github_release
  - url: https://github.com/openai/codex/releases/tag/rust-v0.152.0
    precision: github_release
---
# 2026-09-21-codex-planning-tool-off-by-default-permission-profile-persistence-extended-to-tui-turns-cd-and

Planning tool off by default; permission-profile persistence extended to TUI turns, `/cd`, and remote resume. 0.151.0 keeps restored permission profiles across TUI turns and stops `/cd` from weakening sandbox restrictions. Before this, the 0.149.0 `/cd` command could loosen the sandbox. 0.152.0 restores the saved working directory on resume and keeps filesystem permissions through client metadata updates. 0.154.0 preserves saved permissions on remote resume/fork. 0.152.0 disables the `update_plan` tool by default (`tools.update_plan.enabled = true` re-enables it). That is scaffolding the harness removed. 0.151.0 also counts nested subagent tokens toward root goal budgets (#41183).

Channel: tagged-release. Half: both. Date: 2026-08-29 (0.151.0), 2026-09-01 (0.152.0), 2026-09-09 (0.154.0).

Operator consequence: If you use `/cd` on 0.149.x/0.150.x, upgrade. Plan-mode UIs or scripts that expect `update_plan` events must opt in on >=0.152.0. Goal budgets on multi-agent runs now include subagent tokens, so budgets set before 0.151.0 will trip earlier.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.151.0
- https://github.com/openai/codex/releases/tag/rust-v0.152.0
