---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-browser-pairing-uses-a-private-file-instead-of-credential-bearing-process-arguments
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/fb08d790a901870455c35bc437dae2c9cc9bc523
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/browser-handoff.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/browser-open.ts
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-browser-pairing-uses-a-private-file-instead-of-credential-bearing-process-arguments

Browser pairing uses a private file instead of credential-bearing process arguments. A separate local OS user on a default-procfs host could read the one-time pairing URL from the opener command line and redeem owner bootstrap first. Dashboard/onboarding now write a redirect document using POSIX private modes or Windows owner-only creation, pass only its non-secret path to the opener, and schedule cleanup. This avoids putting the secret in opener argv; it does not hide credentials deliberately printed or copied by the owner.

Channel: tagged-release. Half: defect. Date: 2026-10-18.

Operator consequence: Upgrade before browser bootstrap on shared hosts. Keep OS-user separation and avoid copying credential-bearing URLs into shared logs; the private browser handoff covers its own launch path, not every way to disclose a credential.

## Receipt
- https://github.com/openclaw/openclaw/commit/fb08d790a901870455c35bc437dae2c9cc9bc523
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/browser-handoff.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/browser-open.ts
