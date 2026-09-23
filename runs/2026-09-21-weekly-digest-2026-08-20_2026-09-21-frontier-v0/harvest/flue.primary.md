---
schema_version: bitter.frontier_harvest.v0
provider: flue
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/flue.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased]
window_volume: 57 default-branch commits; 3 lockstep v-tags (v2.0.4, v2.0.5, v2.0.6) then 3 changesets stables (2.0.7, 2.0.8, 2.1.0) and 2 prereleases (2.1.0-next.0, next.1); 5 material changes, 3 capability-bearing, 3 defect-bearing
lane: primary sources, researcher; identity checked (withastro/flue); ends the parent's quiet streak
---

# Harvest -- flue (primary sources)

Punctuation is ASCII. Repo withastro/flue (owner withastro, Apache-2.0 in the
root package.json at @flue/runtime@2.1.0, 8,347 stars, description "The sandbox
agent framework."). Parent baseline: v2.0.3 (2026-08-05), no in-window commits.
This window broke the quiet: the first commit after v2.0.3 is 832ad2eeaf on
2026-08-27, and six stable npm versions shipped between 2026-09-09 and
2026-09-18. npm dist-tags at observation (2026-09-23): @flue/runtime and
@flue/cli latest=2.1.0, next=2.1.0-next.1.

## Release ledger

| Cut | Date (npm @flue/runtime) | Prerelease | Git ref | ahead_by from previous stable |
|---|---|---|---|---|
| v2.0.4 | 2026-09-09T18:40Z | no | tag v2.0.4 cd80df610c | 5 vs v2.0.3 |
| v2.0.5 | 2026-09-11T19:52Z | no | tag v2.0.5 50c9aa6a08 | 1 |
| v2.0.6 | 2026-09-14T12:35Z | no | tag v2.0.6 029b6b59da | 2; v2.0.3...v2.0.6 ahead_by=8, behind_by=0 |
| 2.0.7 | 2026-09-15T14:48Z | no | tag @flue/runtime@2.0.7 dd07a7e3aa | 26 vs v2.0.6; GitHub releases per package begin here |
| 2.0.8 | 2026-09-16T19:08Z | no | tag @flue/runtime@2.0.8 4b4a8e0c87 | 11 |
| 2.1.0-next.0 | 2026-09-18T15:44Z | yes | tag @flue/runtime@2.1.0-next.0 115f52cf93 | |
| 2.1.0-next.1 | 2026-09-18T20:03Z | yes | (npm next dist-tag) | |
| 2.1.0 | 2026-09-18T21:09Z | no | tag @flue/runtime@2.1.0 767e9a848b | 8 vs 2.0.8; v2.0.6...@flue/runtime@2.1.0 ahead_by=45, behind_by=0 |

Each changesets cut creates one GitHub Release per package (28 packages per
cut: runtime, sdk, cli, vite, react, opentelemetry, and channel/store packages
from discord to zendesk). Do not count those as 28 releases; count one cut.
Main at observation is 7 ahead of @flue/runtime@2.1.0 (compare ahead_by=7,
behind_by=0), 4 of them in-window.

## 1. Release channel changed: changesets, per-package GitHub Releases, and a `next` dist-tag

- **Date:** 2026-09-15
- **Channel:** `tagged-release` (process change carried by the 2.0.7 cut)
- **Ancestry evidence:** e33e9b48ad "feat(ci): add changesets (#706)" 2026-09-15T13:22Z and d45e52a5e5 "chore: add changesets for changes since v2.0.6" precede "Version Packages (#707)" dd07a7e3aa, which is the target of tag @flue/runtime@2.0.7. `gh api repos/withastro/flue/releases` now returns GitHub Release objects (prerelease flags set on 2.1.0-next.*), first one @flue/runtime@2.0.7 published 2026-09-15T14:49:07Z. Plain `v*` tags stop at v2.0.6. At @flue/runtime@2.1.0 the root CHANGELOG.md still ends at 2.0.6; packages/runtime/CHANGELOG.md carries 2.1.0.
- **Receipt:** https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.0
- **Half:** both | **Confidence:** high

**What changed.** The contract's receipt rule ("Flue publishes no GitHub
Releases; cite the version-tagged root CHANGELOG.md") is now stale. Releases
exist, per package, and the root changelog froze at 2.0.6. Prereleases ship to
an npm `next` dist-tag.

**Operator consequence.** Pin by `@flue/runtime@X` tags and read
packages/<pkg>/CHANGELOG.md or the per-package release body; the root CHANGELOG
no longer tells you what shipped. Anyone installing `@flue/*@next` gets
prerelease code. Coordinator: the flue contract's changelog surface note needs
updating (not done here; read-only lane).

## 2. 2.0.4 and 2.0.5 were broken publishes; 2.0.6 is the first good cut after v2.0.3

- **Date:** 2026-09-09 to 2026-09-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** Root CHANGELOG.md at tag v2.0.6: 2.0.4 adds "Connection error." as a retryable model error (#629, a5b32a5569); 2.0.5 says 2.0.4 "accidentally shipped raw pnpm `workspace:` dependency specifiers, making affected packages impossible to install outside the workspace" and republishes the lockstep set (#657); 2.0.6 says 2.0.4 and 2.0.5 omitted bundled docs so `flue docs read ...` failed. 1ae1c85dae "fix: pin Hono across the workspace" (closes #591) is in v2.0.6.
- **Receipt:** https://github.com/withastro/flue/blob/v2.0.6/CHANGELOG.md
- **Half:** defect | **Confidence:** high

**What changed.** Three patch cuts in five days, two of them fixing the
packaging of the one before.

**Operator consequence.** Do not pin 2.0.4 (uninstallable outside the
workspace) or 2.0.5 (docs missing). Skip straight to 2.1.0. The episode is
itself the likely cause of finding 1: the maintainers moved to changesets the
day after v2.0.6.

## 3. 2.0.7 fixes harness-tool infinite recursion and lost tool results on abort

- **Date:** 2026-09-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** @flue/runtime@2.0.7 release body (all items attributed to changeset commit d45e52a); underlying commits 21c6240d6b "Prevent recursive harness tool invocation (#561)", 2227864c0e "Repair partial tool batches on abort (#683)", 68dbb37c18 "Resume truncated tool call batches (#548)", 750f1f1143 compaction after terminate-settled runs (#692), 75277392ba overflow-compaction continuation (#600), all dated 2026-09-14 and ancestors of tag @flue/runtime@2.0.7 (dd07a7e3aa is later on the same linear main; v2.0.6...@flue/runtime@2.1.0 behind_by=0).
- **Receipt:** https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.0.7
- **Half:** defect | **Confidence:** high

**What changed.** A harness tool that invoked another harness tool (directly or
indirectly) could recurse without bound. An aborted submission dropped completed
tool results; now completed calls keep outcomes and unexecuted ones record as
interrupted. Truncated tool batches resume instead of erroring. Post-compaction
turns no longer fail with "Cannot continue from message role: assistant".

**Operator consequence.** Upgrade if you compose harness tools or abort
submissions; before 2.0.7 the durable record of an aborted batch was
incomplete, which matters to anyone auditing what a tool actually did.

## 4. 2.1.0: per-tool `timeoutMs`, MCP tool annotations preserved, configurable trace budgets

- **Date:** 2026-09-18
- **Channel:** `tagged-release` (preceded by 2.1.0-next.0 and next.1 `preview-or-beta`)
- **Ancestry evidence:** @flue/runtime@2.1.0 published 2026-09-18T21:08:11Z, prerelease=false, tag SHA 767e9a848b ("Version Packages (#725)"). Minor changes 12464d7 (#726, timeoutMs), 11e1323 (#732, MCP annotations), 4def7b6 (#727, contentBudgetBytes); patch d9e7f5c (#729). compare v2.0.6...@flue/runtime@2.1.0 ahead_by=45, behind_by=0. 2.0.8 (2026-09-16) in the same arc added opt-in Anthropic prompt caching on the Cloudflare binding (`cacheRetention: 'short'|'long'`, default 'none', 3a6242f) and `isDynamicModel()` with a one-time warning because dynamic-template models "silently read as $0" in cost (28e1afe).
- **Receipt:** https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.0
- **Half:** capability | **Confidence:** high

**What changed.** A tool can declare `timeoutMs`; on expiry the harness aborts
the tool's signal and settles a `ToolTimeoutError` the model sees, so one hung
call no longer eats the submission's durability budget. Tools from
`createMcpConnection()` now carry server-sent `annotations` (for example
`destructiveHint`); the release notes state Flue does not change behavior based
on them and the docs call them not a security boundary. Trace content budget
per span is settable.

**Operator consequence.** Try `timeoutMs` on every network-bound tool; it
removes a hand-rolled AbortController wrapper. MCP annotations let your own
approval gate read `destructiveHint`, but they are server-asserted: gate on them
only for servers you trust. If you run Workers AI dynamic models, 2.0.8's warning
is the first signal that your cost dashboards showed $0 for unknown, not free.

## 5. Docs on main: skill `allowed-tools` is guidance, not a security boundary

- **Date:** 2026-09-21
- **Channel:** `main-unreleased`
- **Ancestry evidence:** c5a2a725fe "Document that skill allowed-tools is guidance, not a security boundary (#670) (#746)" 2026-09-21T18:50Z. compare @flue/runtime@2.1.0...c5a2a725fe status=ahead, ahead_by=4: not in any release. Adds a changeset for @flue/cli, @flue/runtime, @flue/sdk patch. At the 2.1.0 tag, packages/runtime/src/types.ts still describes `allowedTools` as "Space-separated pre-approved tools"; the commit rewrites that to "tool names the skill author prefers ... Flue does not enforce it" and adds a Security note to guide/skills.md.
- **Receipt:** https://github.com/withastro/flue/commit/c5a2a725fe
- **Half:** defect (docs) | **Confidence:** high

**What changed.** Behavior did not change; Flue never enforced `allowed-tools`.
What changed is that the shipped type comment called them "pre-approved",
which reads as a permission grant, and main now says plainly it is unenforced.

**Operator consequence.** Re-audit: if any skill in your Flue agent relies on
`allowed-tools` to limit what it can call, it limits nothing on any released
version. Put the restriction in tool code or an approval gate. This matches the
Agent Skills spec's own experimental status for the field and is worth
comparing across harnesses that do enforce it.

## Researcher lane notes

Loaded sources/flue.yml first. Identity: withastro/flue, repo description "The
sandbox agent framework."; landing https://flueframework.com/ (HTTP 200) now
titles itself "Flue -- The Open Agent Framework". Both are marketing framing
and moving pages, not pinned; recorded as positioning only.

Docs-only in-window commits (not separately material): Cloudflare Sandbox page
recast as a copyable prompt for a coding agent (9d649bc, in 2.0.8), Workers Paid
and Docker prerequisites (ee3ad061f2), Cloudflare quickstart fixes (834fa8803a,
832ad2eeaf).

Operator questions settled this window: "Which harness primitives are
stabilizing vs experimental?" -- tool execution bounds and abort semantics
firmed up (2.0.7, 2.1.0); the release process itself was the unstable part
(2.0.4/2.0.5). "Integration surfaces teams should expose": MCP tool annotations
now flow through to the app, explicitly as untrusted hints.

Carry-forward check (flue: any commits, tags, docs or pricing changes):
positive; 57 in-window commits, 6 stable npm versions, 2 prereleases. No pricing
surface exists for Flue (framework, Apache-2.0).

## Observed after window close

- 2026-09-22: d9e2ac0036 records tool payloads of every shape on gen_ai.tool.call.* attributes (#748); 196b433ee4 fixes Changesets changelog module path (#750); 4685436f75 useFlueAgent status streaming after reload (#756). All main-unreleased; OUT.

## Surfaces checked

- gh api repos/withastro/flue (identity, pushed_at 2026-09-22T23:43Z)
- gh api repos/withastro/flue/tags (v2.0.4..v2.0.6 plus @flue/<pkg>@<ver> tags)
- gh api repos/withastro/flue/releases --paginate (per-package releases from 2026-09-15)
- gh api commits since 2026-08-20 until 2026-09-22 (57) and since 2026-09-22 (3)
- gh compare v2.0.3...v2.0.4 (5/0), v2.0.4...v2.0.5 (1/0), v2.0.5...v2.0.6 (2/0), v2.0.6...2.0.7 (26/0), 2.0.7...2.0.8 (11/0), 2.0.8...2.1.0 (8/0), v2.0.3...v2.0.6 (8/0), v2.0.6...@flue/runtime@2.1.0 (45/0), @flue/runtime@2.1.0...main (7/0), @flue/runtime@2.1.0...c5a2a725fe (4/0)
- release bodies @flue/runtime@2.0.7, 2.0.8, 2.1.0; @flue/sdk@2.1.0; @flue/cli@2.1.0
- raw CHANGELOG.md at v2.0.6 and at @flue/runtime@2.1.0; packages/runtime/CHANGELOG.md at @flue/runtime@2.1.0; root package.json license
- commit files for c5a2a725fe and 12464d7767
- npm view @flue/runtime dist-tags and time; npm view @flue/cli dist-tags
- curl https://flueframework.com/ (200)

## Not reached

- Individual release bodies for the 25 channel/store packages per cut (assumed dependency bumps; spot-checked sdk and cli only).
- Diff-level read of #561 recursion guard; relied on the release note and commit title.
