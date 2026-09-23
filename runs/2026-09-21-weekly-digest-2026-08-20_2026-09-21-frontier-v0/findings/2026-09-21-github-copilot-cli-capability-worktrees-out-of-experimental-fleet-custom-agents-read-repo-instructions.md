---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-capability-worktrees-out-of-experimental-fleet-custom-agents-read-repo-instructions
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L137
    precision: tagged_commit_file
  - url: https://github.com/github/docs/commit/d33e22cae269
    precision: commit
---
# 2026-09-21-github-copilot-cli-capability-worktrees-out-of-experimental-fleet-custom-agents-read-repo-instructions

Capability: worktrees out of experimental, `--fleet`, custom agents read repo instructions. `/worktree`, `/move`, and `--worktree` work without experimental mode (1.0.85, L137); `worktreePathTemplate` controls where they go (1.0.87, L5). Custom agents can opt into AGENTS.md, copilot-instructions.md and CLAUDE.md with `include-custom-instructions: true` (1.0.86, L31). Plugin-contributed agents can be selected and run (1.0.85, L109). Docs describe `--fleet` for parallel sub-task fan-out from `-p`, not supported with `--acp`.

Channel: tagged-release (1.0.85, 1.0.86, 1.0.87); docs-only for --fleet. Half: capability. Date: 2026-09-15 to 2026-09-21.

Operator consequence: Try: parallel worktree sessions are now a supported path, not an experiment. `--fleet` is a doc claim with no version pin; confirm with `copilot --help` on your installed version before building CI on it.

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L137
- https://github.com/github/docs/commit/d33e22cae269
