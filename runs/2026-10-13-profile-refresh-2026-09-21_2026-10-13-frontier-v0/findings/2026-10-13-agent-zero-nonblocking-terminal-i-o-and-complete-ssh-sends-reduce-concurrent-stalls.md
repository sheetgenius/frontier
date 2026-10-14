---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-nonblocking-terminal-i-o-and-complete-ssh-sends-reduce-concurrent-stalls
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/c58061f0ee05fbc6ad10d6cbe25980b55969b47c
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/ad5bebbea53fc8827ba542364f6bd50e2c04cbfe
    precision: commit
---
# 2026-10-13-agent-zero-nonblocking-terminal-i-o-and-complete-ssh-sends-reduce-concurrent-stalls

Nonblocking terminal I/O and complete SSH sends reduce concurrent stalls. POSIX PTY reads now use nonblocking descriptors and writes buffer partial bytes cooperatively, so a full terminal or stale readiness event does not block the shared loop in the old way. An incomplete cancelled POSIX send discards its shell; a fully drained send retains state. SSH uses sendall through asyncio.to_thread instead of ignoring Channel.send's partial-send count. Cancelling an in-flight SSH send closes that connection and intentionally discards its shell state, preventing partial input from contaminating later commands.

Channel: tagged-release. Half: both. Date: 2026-10-13 (first stable; commits entered history 2026-10-06).

Operator consequence: Re-test concurrent shell jobs and long heredocs on v2.14. Expect interrupted SSH sends to lose shell state; restart dependent work deliberately. The mechanism supports improved concurrency and command integrity, not a guarantee that every browser or terminal hang is fixed.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/c58061f0ee05fbc6ad10d6cbe25980b55969b47c
- https://github.com/agent0ai/agent-zero/commit/ad5bebbea53fc8827ba542364f6bd50e2c04cbfe
