---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-main-improves-cancellation-export-and-large-stream-handling-while-changing-durable-apis
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/27cc6bfc0c2ca0bfdd983d3db4c992a2bfae9cc6
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/9359adf0c6df974b2059b597e632a14cf1942c30
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/f715a15c101ca8a44d759bceeb7ec2a51024c81c
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/bdb151774ed6bef2b5676bbff4669f20a0c233fe/packages/durable/CHANGELOG.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/bdb151774ed6bef2b5676bbff4669f20a0c233fe/packages/coding-agent/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-main-improves-cancellation-export-and-large-stream-handling-while-changing-durable-apis

Main improves cancellation, export and large-stream handling while changing Durable APIs again. On main, macOS bash abort stops the process group before killing it to reduce the race in which a following command starts during teardown. This is best-effort and retains kill fallbacks; it is not an atomic freeze. HTML exports gain system prompt/tool history and a large-session blank-page fix. Streamed arguments are parsed incrementally, partial Durable commits append instead of repeatedly copying growing strings, and slow document/view/task-graph watchers coalesce pending operations; event watches retain their separately documented event/snapshot behavior. Durable gains a read-only viewer mode, but custom storage must adopt a new synchronous `adopt(seq)` callback contract; watch end reasons and state-getter APIs also change. Device-code login can open/copy after confirmation, unsupported-architecture tool downloads stop choosing x86-64, and managed updates stop passing the redundant `--min-release-age=0` flag. These are pending changes, not 1.4 capabilities.

Channel: main-unreleased. Half: both. Date: 2026-10-24.

Operator consequence: Keep these as next-release acceptance cases. Review cancellation against a command list, exports against disclosure policy, and custom storage/watch adapters against the new contracts before upgrading a source-based host. Incremental streams and coalesced updates can remove frontend performance workarounds, but the published performance numbers remain author measurements, not independently rerun results. Pin a source snapshot if deliberately evaluating main; the pace of breaking Durable changes is itself a cost for the ecosystem in section 10.

## Receipt
- https://github.com/earendil-works/pi/commit/27cc6bfc0c2ca0bfdd983d3db4c992a2bfae9cc6
- https://github.com/earendil-works/pi/commit/9359adf0c6df974b2059b597e632a14cf1942c30
- https://github.com/earendil-works/pi/commit/f715a15c101ca8a44d759bceeb7ec2a51024c81c
- https://github.com/earendil-works/pi/blob/bdb151774ed6bef2b5676bbff4669f20a0c233fe/packages/durable/CHANGELOG.md
- https://github.com/earendil-works/pi/blob/bdb151774ed6bef2b5676bbff4669f20a0c233fe/packages/coding-agent/CHANGELOG.md
