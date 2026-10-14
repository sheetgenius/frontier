---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-ida-pro-became-agent-operable-owner-only-windows-daemons-require-closing-old-sessions
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/134bcf29595d491fce6c79ec97c737b8a591dc85
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/tools/ida.md#L1-L25
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/ida/settings.ts#L9-L11
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/commit/a608a9ca07c9443634e80d877d61c602099dab91
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/crates/pi-natives/src/ipc/windows.rs#L152-L188
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.10.0
    precision: github_release
---
# 2026-10-13-omp-ida-pro-became-agent-operable-owner-only-windows-daemons-require-closing-old-sessions

IDA Pro became agent-operable; owner-only Windows daemons require closing old sessions. Agents can open binaries, change an IDA database and execute Python in persistent project-shared hosts. ida.enabled defaults true and exposes the tool when a compatible local IDA install is found. list is read tier, exec is exec tier, other actions write; default yolo permits them without an ordinary prompt. v18.10.0 made local IPC owner-only across platforms, including Windows pipes. Old Windows daemons are not reused by the new release. This does not establish an earlier cross-user exploit.

Channel: tagged-release. Half: both. Date: 2026-09-25 (v18.3.1); 2026-10-12 (v18.10.0).

Operator consequence: Decide whether agents should operate your IDA installation: disable ida.enabled or prompt tools.approval.ida. Upgrade Windows hosts and close older OMP sessions; replacing the binary does not retrofit running older daemons.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/134bcf29595d491fce6c79ec97c737b8a591dc85
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/tools/ida.md#L1-L25
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/ida/settings.ts#L9-L11
- https://github.com/can1357/oh-my-pi/commit/a608a9ca07c9443634e80d877d61c602099dab91
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/crates/pi-natives/src/ipc/windows.rs#L152-L188
- https://github.com/can1357/oh-my-pi/releases/tag/v18.10.0
