---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-bash-checks-deny-and-ask-rules-were-skipped-under-sandbox-auto-allow-dangerous-rm-now-time
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L603
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1476
    precision: tagged_commit_file
  - url: https://code.claude.com/docs/en/permissions#bash-rule-limits
    precision: official_docs
---
# 2026-10-13-claude-code-bash-checks-deny-and-ask-rules-were-skipped-under-sandbox-auto-allow-dangerous-rm-now-time

Bash checks: deny and ask rules were skipped under sandbox auto-allow; dangerous rm now times out to a deny. With sandbox auto-allow on, a deny or ask rule did not bind when the command was preceded by a bare variable assignment before a separate command (`X=1; rm -rf build`) or an env-var prefix with an expanded value (`TZ="$HOME" rm -rf build`), fixed in 2.1.289. Sandboxed Monitor commands skipped their permission prompt under sandbox auto-allow until 2.1.290. A recursive `rm` of command-substitution output ran unprompted in auto and bypass mode until 2.1.281, and a dangerous `rm` lost its always-ask safeguard behind a `~` redirect until 2.1.287 and inside `bash -c` until 2.1.288. In bypass and auto mode the dangerous-rm prompt now denies after two minutes unanswered, so unattended runs continue instead of hanging. The deny scope the profile described is unchanged: neither reverted extension came back.

Channel: tagged-release (2.1.281 to 2.1.287 on stable; 2.1.288 onward latest only). Half: defect. Date: 2026-09-23 (2.1.281), 2026-09-25 (2.1.283), 2026-09-29 (2.1.285), 2026-10-01 (2.1.287), 2026-10-02 (2.1.288), 2026-10-03 (2.1.289), 2026-10-05 (2.1.290), 2026-10-09 (2.1.296).

Operator consequence: If your policy is sandbox auto-allow plus deny rules, stable 2.1.287 still skips them after `X=1; rm -rf build` or `TZ="$HOME" rm -rf build`: use disposable test targets and add both shapes to your deny tests and run it on both channels. Keep the two-minute deny on for unattended bypass sessions; it is the vendor's answer to a prompt nobody will see. Deny rules stay a guard on named reads and writes; the sandbox or a container is the boundary.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L603
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1476
- https://code.claude.com/docs/en/permissions#bash-rule-limits
