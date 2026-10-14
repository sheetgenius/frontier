---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-graders-and-unattended-runs-restricted-left-gaps-until-2-1-290-and-2-1-295-background-comm
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L123
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L996
    precision: tagged_commit_file
  - url: https://code.claude.com/docs/en/cli-reference
    precision: official_docs
---
# 2026-10-13-claude-code-graders-and-unattended-runs-restricted-left-gaps-until-2-1-290-and-2-1-295-background-comm

Graders and unattended runs: --restricted left gaps until 2.1.290 and 2.1.295; background commands now time out. `--restricted` and an explicit `--tools` list did not strip built-in tools that register after launch until 2.1.295. Restricted sessions opened the cross-session messaging socket until 2.1.290; an `@`-mention could also read outside the working directories through a link changed mid-read until 2.1.290, and a parent's `--setting-sources` restriction did not reach spawned teammates or background sessions until 2.1.281. Background commands gained a time limit in 2.1.285, 30 minutes by default and 2 hours at most, which 2.1.288 narrowed to unattended sessions; on stable it still applies to interactive sessions. `--permission-prompts none` is unchanged.

Channel: tagged-release (2.1.281 and 2.1.285 on stable; 2.1.288 onward latest only). Half: defect. Date: 2026-09-23 (2.1.281), 2026-09-29 (2.1.285), 2026-10-02 (2.1.288), 2026-10-05 (2.1.290), 2026-10-06 (2.1.292), 2026-10-08 (2.1.295).

Operator consequence: On stable 2.1.287 neither `--restricted` nor an explicit `--tools` list removes a built-in tool that registers after launch; pin graders to 2.1.295 or later and keep a sandbox or deny rules behind them. CI jobs that start long builds with `run_in_background` are killed at 30 minutes unless they set `timeout` (up to 2 hours), and interactive users on stable see the same until 2.1.288 reaches stable. Adapters that read the end of a `-p` run can expect background commands to finish before exit on latest.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L123
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L996
- https://code.claude.com/docs/en/cli-reference
