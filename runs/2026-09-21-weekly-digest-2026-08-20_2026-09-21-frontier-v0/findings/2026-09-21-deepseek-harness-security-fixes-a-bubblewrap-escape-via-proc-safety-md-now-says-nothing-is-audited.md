---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-security-fixes-a-bubblewrap-escape-via-proc-safety-md-now-says-nothing-is-audited
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.1-rc.1
    precision: github_release
---
# 2026-09-21-deepseek-harness-security-fixes-a-bubblewrap-escape-via-proc-safety-md-now-says-nothing-is-audited

Security fixes: a Bubblewrap escape via /proc; SAFETY.md now says nothing is audited. On Linux, rc.8 and 0.1.0 builds let a sandboxed process reach the host filesystem through another process's `/proc/<pid>/root`. The fix shipped as a release-note line with no advisory.

Channel: preview-or-beta. Half: defect. Date: 2026-08-21 (fix), 2026-08-27 (notice).

Operator consequence: Anyone on rc.8 or rc.7 with the Linux Bubblewrap sandbox should upgrade to >= 0.1.1-rc.1 and treat earlier sandboxed runs as unconfined. Read SAFETY.md as the vendor's own posture: the sandbox is advisory. A disposable VM is the recommended boundary, in their words.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.1-rc.1
