---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-extended-stable-moved-to-a-july-line-that-predates-every-fix-above
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.7.35
    precision: github_release
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.5/docs/install/development-channels.md
    precision: tagged_commit_file
---
# 2026-09-21-openclaw-extended-stable-moved-to-a-july-line-that-predates-every-fix-above

Extended-stable moved to a July line that predates every fix above. The product now offers an LTS-labelled channel whose promise is "critical security updates". Its current build lacks the approved-exec binding, the workspace-boundary fix, and the sandbox-stop fix (sections 1 to 3, by code check and ancestry). It also shipped two unstable builds to npm in three days before the one it kept.

Channel: tagged-release (extended-stable dist-tag). Half: defect. Date: 2026-09-10 (v2026.6.35), 2026-09-18 / 09-20 (v2026.7.33 / v2026.7.34 npm, tags only), 2026-09-21 (v2026.7.35 release).

Operator consequence: "LTS" is not "more secure" here. If you pick extended-stable to reduce churn, you give up the 2026.8.1 approval and boundary fixes. Pin an exact version and read each advisory's backport status. Evidence that settles it: an extended-stable tag where `compare <tag>...ab5611f0` returns behind, or where `system-run-mutable-file-operand.ts` exists.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.7.35
- https://github.com/openclaw/openclaw/blob/v2026.9.5/docs/install/development-channels.md
