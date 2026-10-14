---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-3-0-makes-the-local-sandbox-actually-kill-a-timed-out-command-s-whole-process-group
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/node/local-env.ts#L95-L107
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/packages/runtime/src/node/local-env.ts#L96-L105
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L13-L16
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/sandboxes.md#L115-L172
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/issues/809
    precision: official_docs
---
# 2026-10-13-flue-2-3-0-makes-the-local-sandbox-actually-kill-a-timed-out-command-s-whole-process-group

2.3.0 makes the local sandbox actually kill a timed-out command's whole process group. On an `exec()` timeout or abort, `local()` sends SIGTERM to the command's process group and schedules SIGKILL two seconds later. Until 2.3.0 that SIGKILL was cancelled whenever the shell exited first, so a group member that ignored SIGTERM survived. In the report, that process kept editing files after the agent had been told the command timed out. The SIGKILL now fires regardless. Unchanged at v2.3.0: the docs say `local()` has "no isolation, by design" (sandboxes.md L115), and most remote provider SDKs keep running a cancelled command in the background (L172).

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: If agents run commands through `local()` with timeouts (coding agents, CI tasks), upgrade to 2.3.0. Before it, the files on disk after a timeout could differ from what the agent and your logs believed. The fix shipped as a changelog line with no advisory. It does not make `local()` a boundary, so keep it inside a container or VM you already trust. On remote sandboxes, assume a timed-out command may still be running unless the provider supports cancellation (the docs name Vercel and Mirage). E2B users should run `flue update sandbox e2b` so failing commands return an exit code instead of a bare rejection.

## Receipt
- https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/node/local-env.ts#L95-L107
- https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/packages/runtime/src/node/local-env.ts#L96-L105
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L13-L16
- https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/sandboxes.md#L115-L172
- https://github.com/withastro/flue/issues/809
