---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-claude-code-subagent-forking-is-on-by-default-a-forked-subagent-inherits-the-full
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-232
    precision: official_changelog
---
# 2026-08-17-claude-code-subagent-forking-is-on-by-default-a-forked-subagent-inherits-the-full

Subagent forking is on by default: a forked subagent inherits the full conversation and prompt cache.

"Subagent forking is now on by default: a `subagent_type: "fork"` subagent inherits the full conversation and prompt cache, and non-teammate agent spawns in interactive sessions now run in the background by default." Two related economics changes landed alongside it. v2.1.229: "Improved workflow fan-outs to stagger same-prefix sibling agents so subsequent agents read the cached prompt prefix instead of re-paying it (`CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS=0` disables)"  --  a fan-out of N agents previously paid the prefix N times because they raced before any of them had written the cache. v2.1.224 removed the 200-subagent-per-session spawn cap entirely: "long-running sessions no longer refuse new agents (concurrency and depth limits still apply)." v2.1.221 also cut auto-mode cost by "reusing the cached conversation prefix across decisions" for permission checks.

Channel: tagged-release. Ancestry: Closed source; npm publish record is the release proof. registry `time[]` gives 2.1.232 = 2026-08-13T21:30:53Z, plain non-prerelease semver, per-version manifest resolves HTTP 200, published under dist-tag `latest`. Not in `stable` (2.1.226). No prerelease tag exists for this  --  it went straight to the default-on state in a stable release.

Operator consequence: Test this if you orchestrate subagents, because the default changed underneath you in two ways at once. A forked subagent now sees the entire parent conversation  --  that is the point, and it is also a context-scoping change: work you had isolated in a subagent by virtue of it starting clean is no longer isolated unless you spawn a non-fork type. Separately, agent spawns now background by default in interactive sessions, so a workflow that assumed a blocking spawn will return control earlier than it used to. The cache-prefix staggering is a straightforward win to leave on; measure your fan-out cost before and after if you run large ones, since re-paying the prefix N times was the previous behaviour.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-232
