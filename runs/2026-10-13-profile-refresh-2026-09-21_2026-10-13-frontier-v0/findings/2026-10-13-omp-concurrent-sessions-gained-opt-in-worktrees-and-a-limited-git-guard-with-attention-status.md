---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-concurrent-sessions-gained-opt-in-worktrees-and-a-limited-git-guard-with-attention-status
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/0c8a3a0a30eed995aa27893327fd9b450eb9a6ba
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/098abb906b5b70c244b0a45c00d646e9bf2cf997
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.8.6
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.8.7
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L104-L128
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L677
    precision: tagged_commit_file
---
# 2026-10-13-omp-concurrent-sessions-gained-opt-in-worktrees-and-a-limited-git-guard-with-attention-status

Concurrent sessions gained opt-in worktrees and a limited git guard, with attention status on by default. Sessions can start in separate worktrees and keep them at exit. The embedded shell's git builtin can reject stash, hard reset and overwriting checkout/switch/restore; the guard defaults off, excludes path-invoked git, pty, services and other programs, and has a conflict-resolution exception. It is not checkout-wide confinement. OSC 7501 status defaults on and reports working, waiting, done or failed with the question; collab list also exposes busy state.

Channel: tagged-release. Half: capability. Date: 2026-09-22 (v18.2.10); 2026-10-08 (v18.8.6); 2026-10-09 (v18.8.7).

Operator consequence: Set worktree.onStart: create or ask for parallel repository work, and consider bash.gitGuard for the embedded-shell path. Use terminal status or collab busy data to find sessions needing a decision. Verify conflict handling and do not rely on the guard for arbitrary processes.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/0c8a3a0a30eed995aa27893327fd9b450eb9a6ba
- https://github.com/can1357/oh-my-pi/commit/098abb906b5b70c244b0a45c00d646e9bf2cf997
- https://github.com/can1357/oh-my-pi/releases/tag/v18.8.6
- https://github.com/can1357/oh-my-pi/releases/tag/v18.8.7
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L104-L128
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L677
