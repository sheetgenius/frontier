---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-typing-into-an-escalated-terminal-now-needs-approval-by-default-from-0-158
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.158.0
    precision: github_release
  - url: https://github.com/openai/codex/pull/47799
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L203
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1291-L1294
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/pull/49353
    precision: merged_pr
  - url: https://github.com/openai/codex/releases/tag/rust-v0.161.0
    precision: github_release
---
# 2026-10-13-codex-typing-into-an-escalated-terminal-now-needs-approval-by-default-from-0-158

Typing into an escalated terminal now needs approval by default from 0.158.0. When the agent writes to the stdin of a running process, Codex now compares the process's retained launch permissions and the current policy and asks for review when the process runs with a sandbox bypass, additional agent permissions, or policy that drifted since launch (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L1-L5 and L190-L203); runtime-only grants such as plugin metrics no longer trigger it (#48073). Empty polls and non-TTY Ctrl-C are exceptions; not every stdin call is reviewed. Before 0.158.0, a process approved once to run outside the sandbox, such as a shell or REPL, accepted further typed input without review. With auto-review on, Guardian reviews these `WriteStdin` actions like other approvals. 0.161.0 adds that an approved filesystem escalation can grant broader writes "while retaining the sandbox, denied reads, and network policy" and tracks escalated terminals so later `write_stdin` calls still need review (#49353), and binds grants to the turn that requested them so background code-mode cells keep their own permissions (#49880).

Channel: tagged-release. Half: both. Date: 2026-09-28 (0.158.0); 2026-10-07 (0.161.0).

Operator consequence: Expect more prompts, or more auto-review calls, in sessions that drive interactive escalated processes (ssh sessions, database shells, REPLs); this is a deliberate gate, not noise. App-server clients and scripts that pipe input into escalated terminals must now handle an approval request. On 0.161.0 and later, approving an escalation such as a `git pull` can widen writes without dropping deny-read globs over secrets.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.158.0
- https://github.com/openai/codex/pull/47799
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L203
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1291-L1294
- https://github.com/openai/codex/pull/49353
- https://github.com/openai/codex/releases/tag/rust-v0.161.0
