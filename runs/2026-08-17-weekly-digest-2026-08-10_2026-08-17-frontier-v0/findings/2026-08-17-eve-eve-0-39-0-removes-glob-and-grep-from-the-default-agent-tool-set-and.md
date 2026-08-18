---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-39-0-removes-glob-and-grep-from-the-default-agent-tool-set-and
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.39.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-39-0-removes-glob-and-grep-from-the-default-agent-tool-set-and

eve 0.39.0 removes glob and grep from the default agent tool set and lets a child session inherit the parent's live sandbox.

`glob` and `grep` are removed from the default agent tool set; agents opt back in by exporting `defineGlobTool()` or `defineGrepTool()` from the corresponding tool file. Separately, a child can now return `parent.sandbox` from a `defineSandbox` callback, reusing the dispatching parent's live sandbox across agent sessions so parent and child see the same files, processes, workspace and sandbox home. A child that selects `parent.sandbox` cannot also declare managed workspace or skill resources; eve rejects that configuration before execution and requires either removing those resources or giving the child its own sandbox.

Channel: tagged-release. Ancestry: Same stable tag as above. `gh api 'repos/vercel/eve/compare/eve%400.38.3...eve%400.39.0'` returned b285784 267a59a 73d381e 24f6c06 4c1bd80 4af3b1e 7a8f43b e8da571 99eb632 00c0a26 7a140d4 2c99a4a, which contains both 4c1bd80 (tool-set removal) and e8da571 (parent.sandbox reuse)  --  both in the history of eve@0.39.0, prerelease=false per `gh api repos/vercel/eve/releases`.

Operator consequence: Check your agents' search behaviour after upgrading past 0.39.0  --  a coding agent that silently loses `glob` and `grep` degrades into reading whole files or shelling out, which shows up as cost and latency rather than as an error. Re-export the tools explicitly if you want them. The shared-sandbox option is the one to think carefully about: parent and child seeing the same files, processes and home directory removes the handoff cost of delegation and removes the isolation boundary in the same move. eve refuses the obviously wrong combination up front, which is good design, but it cannot refuse the case where you wanted a child to be unable to touch the parent's workspace. Choose per delegation, not globally.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.39.0
