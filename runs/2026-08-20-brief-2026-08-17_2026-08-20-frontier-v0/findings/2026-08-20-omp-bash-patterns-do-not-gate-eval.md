---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-omp-bash-patterns-do-not-gate-eval
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v17.3.8
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/blob/v17.3.8/docs/approval-mode.md
    precision: tagged_commit_file
---
# 2026-08-20-omp-bash-patterns-do-not-gate-eval

v17.3.8 (2026-08-19T11:11:02Z) documents that `bash.patterns` gates the bash tool only. `eval` can spawn a shell via subprocess (`subprocess.run(["bash", "-c", ...])`, `Bun.$`, and the rest), so a `bash.patterns` deny does not apply to the same command through eval. Under yolo, eval's exec tier resolves to allow. Issue #8838 is an operator report: a headless session deleted files via eval after bash was approval-gated. Closing it requires `tools.approval.eval` of prompt or deny alongside `bash.patterns`. v17.4.0 then makes eval cells backgroundable like bash, which widens the same ungated surface. This is the Oh My Pi fork, not Pi Coding Agent.

Channel: tagged-release. Half: defect | security-relevant.

Operator consequence: do not treat `bash.patterns` as a shell policy. Pair it with `tools.approval.eval`. Upgrade to 17.3.8 for the `rm` classifier and compaction hardening; those are a different hole.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v17.3.8
- https://github.com/can1357/oh-my-pi/blob/v17.3.8/docs/approval-mode.md
