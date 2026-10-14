---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-the-experimental-plugin-and-server-stack-left-the-coding-agent-the-durable-harness-now-shi
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.0.0/packages/agent/CHANGELOG.md#L7
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/commit/7fd478a2e888ebc28869566f33a186303d372838
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/7472cda0d6e51dfbf53c03f46b47aa42ac64bf64
    precision: commit
  - url: https://github.com/earendil-works/pi/releases/tag/v1.2.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/env/README.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-the-experimental-plugin-and-server-stack-left-the-coding-agent-the-durable-harness-now-shi

The experimental plugin and server stack left the coding agent; the durable harness now ships separately as experimental Pi Durable. Both plugin items on the profile's watch list are closed, though not as it expected. In 1.0.0, `pi-agent-core` shrank to `Agent`, the agent loop, the proxy stream and their types. The harness, sessions, compaction, skills, and the `./node` and `./harness/*` subpaths are gone, and the changelog says "Use `@earendil-works/pi-durable` for durable sessions". That breaking note is in packages/agent/CHANGELOG.md L7 at v1.0.0, not in the GitHub release body. 1.2.0 then deleted the experimental server, client and plugin stack along with its source-only exports. The facet design and its `telemetry(permission(sandbox(coreBash)))` composition no longer exist anywhere in the tree. Their successor is Pi Durable, a crash-resumable conversation, task and document runtime built on pi-ai and chord. It offers subagents and child tasks as library patterns, a per-call execution environment, and `beforeTool` hooks that can block a call ("Needs approval", README L139). The README calls it experimental (L3), and Earendil's "Pi Durable" post (2026-10-01, https://earendil.com/posts/pi-durable/) says it "does not replace the Pi coding agent." A new `pi-env` package deploys a remote execution daemon over SSH for it.

Channel: tagged-release (removals in v1.0.0 and v1.2.0). @earendil-works/pi-durable is a separate npm package documented as experimental.. Half: both. Date: 2026-10-01.

Operator consequence: SDK embedders who import harness APIs from `@earendil-works/pi-agent-core` break on 1.0.0. They should move to `pi-durable`, which is experimental, or to the coding agent's own SDK. Migrate consumers of `pi-client`, `pi-protocol` and `pi-server`: their source packages were removed in 1.2.0; their npm latest versions remain 1.1.0, and no successor release was found. No npm deprecation notice was found for these names. This establishes no promise about future patches. Stop watching for a facet host in the CLI. The extension API is the only supported extension surface. The nearest thing to a permission wrapper in the project is now Pi Durable's hooks plus its execution environments, in a package that promises no stability.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.0.0/packages/agent/CHANGELOG.md#L7
- https://github.com/earendil-works/pi/commit/7fd478a2e888ebc28869566f33a186303d372838
- https://github.com/earendil-works/pi/commit/7472cda0d6e51dfbf53c03f46b47aa42ac64bf64
- https://github.com/earendil-works/pi/releases/tag/v1.2.0
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/env/README.md
