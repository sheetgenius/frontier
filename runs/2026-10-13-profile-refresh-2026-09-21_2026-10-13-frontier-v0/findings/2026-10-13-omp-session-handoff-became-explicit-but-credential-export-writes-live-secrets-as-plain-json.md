---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-session-handoff-became-explicit-but-credential-export-writes-live-secrets-as-plain-json
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/3df76b1c6f1a92c9f64196701321be26045f329d
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/session.ts#L1-L8
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/session.ts#L66-L69
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/auth.ts#L202-L225
    precision: tagged_commit_file
---
# 2026-10-13-omp-session-handoff-became-explicit-but-credential-export-writes-live-secrets-as-plain-json

Session handoff became explicit, but credential export writes live secrets as plain JSON. omp session pack/unpack transfers a session with artifacts and image blobs; moved marks the source copy so resuming it forks. Missing blobs are warned about rather than invented. omp auth export/import transfers stored sign-ins separately. Export writes plain JSON to stdout, including OAuth refresh tokens, refuses remote-broker configuration, and warns that refresh-token rotation on the destination may sign out the source machine.

Channel: tagged-release. Half: both. Date: 2026-10-12 (v18.10.0).

Operator consequence: Treat auth output as live credentials. Use a protected transfer path, not an ordinary transcript or an assumed encrypted backup. Mark the session source moved after a deliberate handoff, and account for possible source sign-out.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/3df76b1c6f1a92c9f64196701321be26045f329d
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/session.ts#L1-L8
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/session.ts#L66-L69
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/auth.ts#L202-L225
