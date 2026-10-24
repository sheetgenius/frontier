---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-bash-predicates-still-bypass-exec-allowlist-review-on-all-three-published-channels
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/exec-safe-builtins.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/infra/exec-safe-builtins.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.33/src/infra/exec-safe-builtins.ts
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-bash-predicates-still-bypass-exec-allowlist-review-on-all-three-published-channels

Bash predicates still bypass exec allowlist review on all three published channels. Bash can evaluate an array subscript in a quoted `test -v` operand and execute command substitution. The published classifier treats the predicate as safe without checking that operand, so a command can run without its allowlist match or on-miss approval. Main excludes `-v` predicates from safe-builtin treatment and matches builtin names case-sensitively. The commit is dated 2026-10-23T05:29:37Z. Its production-chain probe is maintainer-reported, not executed here.

Channel: main-unreleased. Half: defect. Date: 2026-10-23.

Operator consequence: For POSIX exec allowlists, exclude these predicate forms from admitted work and restrict that work or its host exposure until the exact repair reaches a published version. Do not treat a request to avoid a form as enforcement against adversarial input. Beta.3 and extended 9.33 do not supply this repair. Approval binding after plugin rewrites does not fix shell classification.

## Receipt
- https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/exec-safe-builtins.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/infra/exec-safe-builtins.ts
- https://github.com/openclaw/openclaw/blob/v2026.9.33/src/infra/exec-safe-builtins.ts
