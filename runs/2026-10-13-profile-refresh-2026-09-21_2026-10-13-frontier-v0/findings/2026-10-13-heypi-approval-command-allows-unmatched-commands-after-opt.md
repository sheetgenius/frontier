---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-approval-command-allows-unmatched-commands-after-opt
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L88-L104
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L165-L176
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/tool-config.ts#L30-L51
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L16-L20
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/Dockerfile#L3-L13
    precision: tagged_commit_file
---
# 2026-10-13-heypi-approval-command-allows-unmatched-commands-after-opt

approval.command() allows unmatched commands after opt-in. approval.command() gates nothing until the tool opts in. Its four block patterns cover rm -rf /, mkfs, shutdown and reboot; thirteen approval patterns cover curl, wget, ssh, scp, rsync, docker, kubectl, terraform, helm, git push, npm publish, pnpm publish and rm -rf. Raw-text regexes then allow everything unmatched with a Safe default reason. git -C . push does not satisfy the git-push regex. Python and gh are absent from the lists but present in the template image; the template can expose an optional GitHub token to these commands.

Channel: preview-or-beta heypi 0.3.0-beta.2. Half: defect. Date: 2026-07-21 (historical beta.0 policy); re-verified for the 2026-10-13 profile.

Operator consequence: Treat the classifier as a convenience filter, not exhaustive authorization. For consequential tools choose approval.always(), or a predicate that asks for everything outside a short known-good set. The predicate receives the current actor, but credential and network controls still belong in the runtime. A textual list cannot establish that equivalent effects through other commands are gated.

## Receipt
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L88-L104
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L165-L176
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/tool-config.ts#L30-L51
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L16-L20
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/Dockerfile#L3-L13
