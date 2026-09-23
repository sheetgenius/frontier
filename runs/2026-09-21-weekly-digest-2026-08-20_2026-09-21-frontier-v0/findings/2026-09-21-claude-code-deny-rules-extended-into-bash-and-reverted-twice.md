---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-deny-rules-extended-into-bash-and-reverted-twice
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.260
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.273
    precision: github_release
  - url: https://github.com/anthropics/claude-code/blob/8187baaaafb3/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-claude-code-deny-rules-extended-into-bash-and-reverted-twice

2.1.259 (2026-09-02) applied Read() deny rules to Bash arguments; 2.1.260 (2026-09-03) reverted it because it denied npm run build under a Read(./**/build/**) rule. 2.1.268 (2026-09-10) checked deny rules on Bash lines the checker cannot analyze such as eval and env -C; 2.1.273 (2026-09-15) reverted that because it denied time -p make build. Around those, seven other non-binding cases closed: parentheses in a rule path dropped the rule and left read-only folders writable (2.1.260); one bad pattern broke every file edit (2.1.260); rules on symlinked directories such as /tmp did not match real paths (2.1.268); tee wrote past Edit() deny (2.1.269); a !-prefixed rule leaked across settings sources (2.1.269); wildcards and unrecognized options hid the file (2.1.271); and cd or subshell chains skipped blockReadsOutsideWorkingDirectories in bypass and auto mode (2.1.271, 2.1.273).

Channel: tagged-release (2.1.259 through 2.1.274). Half: defect.

Operator consequence: At 2.1.278 a Read() deny binds on file tools, Grep and Glob, Bash redirects and recognized readers, tee targets, wildcard expansions and symlinked spellings. It does not bind on arbitrary Bash arguments or on lines the checker cannot analyze; those prompt. If a deny rule exists to keep .env out of a shell, test cat < .env, tac .env, eval "cat .env" and time cat .env on the build you run. Stable 2.1.267 has the 2.1.260 revert and nothing from 2.1.268 onward.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.260
- https://github.com/anthropics/claude-code/releases/tag/v2.1.273
- https://github.com/anthropics/claude-code/blob/8187baaaafb3/CHANGELOG.md
