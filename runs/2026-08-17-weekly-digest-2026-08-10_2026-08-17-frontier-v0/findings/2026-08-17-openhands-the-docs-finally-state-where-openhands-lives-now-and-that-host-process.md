---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-the-docs-finally-state-where-openhands-lives-now-and-that-host-process
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/docs/blob/53ac00f3d127cbef311681f929a92dc65b019d54/openhands/usage/agent-canvas/architecture.mdx
    precision: official_docs
---
# 2026-08-17-openhands-the-docs-finally-state-where-openhands-lives-now-and-that-host-process

The docs finally state where OpenHands lives now  --  and that host-process mode has no container isolation.

The tracking issue (OpenHands/docs#686, opened 2026-08-04) states the new boundaries plainly: OpenHands/OpenHands is now the home of Agent Canvas; OpenHands/agent-canvas is an archival pointer; OpenHands/legacy preserves the prior monorepo snapshot; OpenHands/enterprise is now private; the previous frontend is deprecated in favor of Agent Canvas. PR #688 rewrites the docs to match and adds a canonical architecture page that separates Agent Canvas (React browser client, 'not an agent runtime or sandbox') from Agent Server (execution, in OpenHands/software-agent-sdk), Automation Server (OpenHands/automation), and the workspace or sandbox that 'defines which files, processes, credentials, and networks an agent can access'. Its execution table says of host-process mode, verbatim: 'Agent Server and tools run directly on the backend host without container isolation. If the backend is remote, that host -- not the browser's machine -- is the execution boundary.'

Channel: docs-only. Ancestry: OpenHands/docs PR #688, merge commit 53ac00f3d127cbef311681f929a92dc65b019d54, merged 2026-08-12T19:24:22Z, 24 files, +1659/-1058, approved by jpelletier1 2026-08-12T14:39:32Z after review rounds from enyst, DevinVinson and smolpaws. Content read at the pinned merge commit, not at main. Docs-only channel: this is the documentation repository; no code surface in OpenHands/OpenHands changed with it. Repo-visibility claims verified independently: gh api repos/OpenHands/enterprise and repos/OpenHands/runtime-api both return 404; OpenHands/agent-canvas and OpenHands/legacy both return archived=true in gh api orgs/OpenHands/repos.

Operator consequence: Re-audit your mental model and your threat model. Two things changed under operators without a code release: the repository you were watching is now a different product, and the isolation guarantee you may have assumed from 'it runs in Agent Canvas' does not exist  --  Canvas is a browser client, and in host-process mode the agent runs on the backend host with no container between it and the filesystem. If you self-host, confirm which backend mode you are actually in before deciding what the agent can reach. Also note the docs' own boundary: Sandbox Server is now described as community-driven and explicitly not a core or supported Agent Canvas backend.

## Receipt
- https://github.com/OpenHands/docs/blob/53ac00f3d127cbef311681f929a92dc65b019d54/openhands/usage/agent-canvas/architecture.mdx
