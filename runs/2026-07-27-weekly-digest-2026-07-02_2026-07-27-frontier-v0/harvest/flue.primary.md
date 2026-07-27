---
schema_version: bitter.frontier_harvest.v0
provider: flue
label: Flue
owner: withastro
repo: https://github.com/withastro/flue
tier: 2
window: 2026-07-02..2026-07-27
run: 2026-07-27-weekly-digest-2026-07-02_2026-07-27-frontier-v0
primary_receipt_surface: CHANGELOG.md (no GitHub Releases; verified length 0)
channels_present: [main-unreleased]
window_volume: 9 commits on main, 0 merged PRs, 0 tags in window
---

# Harvest -- flue (primary sources)

Quoted CHANGELOG text below is reproduced faithfully in wording, with punctuation
normalized to ASCII per house style.

## Window and channel resolution -- READ THIS FIRST

**Flue published no tag and no release inside the window.** The 1.0.0-beta line
that the prior digest tracked ran out *before* the window opened:

| tag | tagged commit | committer date (ISO) |
| --- | --- | --- |
| v1.0.0-beta.3 | `657ebd498ec500e6fc72cf86a050434db8f9b9aa` | 2026-06-23 |
| v1.0.0-beta.4 | `3b6be7779fa573bf9d8e1a6ec213784f15df180b` | 2026-06-23 |
| v1.0.0-beta.5 | `03e4717c24171f7454acf80eb3bc104eea9c701c` | 2026-06-24 |
| v1.0.0-beta.6 | `b7b1449658ba52f2687ff6022ea4e7109bf7dde6` | 2026-06-25 |
| v1.0.0-beta.7 | `54f95e7464507685fc1a9de2af5ac2206690a798` | 2026-06-26 |
| v1.0.0-beta.8 | `8bed938f5921c515eb509efd7818af5be75ec23d` | 2026-06-29 |
| v1.0.0-beta.9 | `607d2613eb181a5e31c28a980847e101207d9fd3` | 2026-06-30 |

All seven predate 2026-07-02. `v1.0.0-beta.9` is the tag Flue is **still**
holding at as of 2026-07-27. Flue continues to publish **zero GitHub Releases**
(verified: `GET /repos/withastro/flue/releases` returns length 0), so CHANGELOG.md
pinned to a commit SHA is the receipt surface, exactly as `sources/flue.yml`
specifies.

**Every finding in this file is therefore `main-unreleased`.** None of it is in a
version any operator can install by tag.

**The Unreleased section is entirely in-window.** At `v1.0.0-beta.9`
(`607d2613`, 2026-06-30) CHANGELOG.md had **no `## Unreleased` section at all**.
The section documented below was created from nothing between 2026-07-02 and
2026-07-24. This was verified by reading CHANGELOG.md at both SHAs.

- Pre-window CHANGELOG: https://github.com/withastro/flue/blob/607d2613eb181a5e31c28a980847e101207d9fd3/CHANGELOG.md
- In-window CHANGELOG: https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md

**The delivery vehicle.** 9 commits landed on main in the window and 0 pull
requests were merged. Eight are small. The ninth,
`b814b82b2ce45dc941c77bb010140070e1bd48d5` (2026-07-24), is titled
**`v2.0.0-nightly.202607240825`** and carries **+60,306 / -95,918 lines** (a net
deletion of ~35,600 lines) across 300+ files. That single commit is the whole
architectural rewrite below.

- Receipt: https://github.com/withastro/flue/commit/b814b82b2ce45dc941c77bb010140070e1bd48d5

Note on the version string: `v2.0.0-nightly.202607240825` appears only as a
**commit subject**. No git tag with that name exists (verified against the full
tag list). Treat "Flue is on 2.0" as unreceipted; what is receipted is that main
carries a 2.0.0-nightly version marker while the newest tag is 1.0.0-beta.9.

---

## 1. The public site still sells the product main deleted

**What changed.** Nothing on the marketing surface, and that is the finding. As
fetched 2026-07-27, https://flueframework.com/ still badges the project
"**1.0 Beta -- Read the announcement**", still advertises Workflows as a headline
capability ("Run structured automations where your code guides agent reasoning
from a clear input to a finished result"), and still frames Flue as a
"programmable TypeScript harness" with no mention of Vite. Main has removed
workflows entirely and turned Flue into a Vite plugin.

**Receipt.** https://flueframework.com/ (official_site, priority 2 surface,
fetched 2026-07-27) against
https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md

**Date.** 2026-07-27 (site state), 2026-07-24 (main state).
**Channel.** Site describes `tagged-release` (v1.0.0-beta.9); the contradicting
work is `main-unreleased`.

**Operator consequence.** An operator evaluating Flue from its homepage today is
being sold workflows, a CLI, and a 1.0 beta line whose central primitive the
maintainers have already deleted on main with no compatibility stubs -- the
single cleanest "released is not merged" trap in this window.

## 2. Workflows are removed outright -- conversations become the only durable unit

**What changed.**

> **Workflows are removed.** `defineWorkflow`, `invoke`, run stores and run event
> streams, the `/runs/:runId` and `POST /workflows/:name` routes (including
> `?wait=result`), `listRuns`/`getRun`, the SDK `client.workflows`/`client.runs`
> namespaces, the React workflow hooks, and the dev-console run UI are all
> deleted, **with no compatibility stubs**. Conversations are the only durable
> unit: a workflow becomes an agent with the job as a model-callable
> `defineAction` in its `actions: [...]` [...]. **A deterministic code-first
> entrypoint (the old no-model `run()` body) has no v1 replacement.**

**Receipt (pinned).** https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md

**Date.** 2026-07-24 (delivered in `b814b82b`).
**Channel.** main-unreleased.

**Operator consequence.** The entire run-observability surface this publication
tracked across two prior windows -- `/runs/:runId`, run event streams,
`client.runs`, the private-by-default runs handler -- no longer exists to be
private or public, and there is now **no way to run deterministic code-first
orchestration in Flue at all**: every job must pass through a model.

## 3. Telemetry inverts from content-off to content-on by default

**What changed.**

> **Trace content is captured by default**, and `@flue/opentelemetry`'s content
> surface collapses to `content?: false | { transform }`. Both trace adapters --
> `createOpenTelemetryInstrumentation()` and the native Cloudflare
> `createCloudflareTracing()` -- now emit conversation content
> (`gen_ai.input/output.messages`, system instructions, tool
> definitions/arguments/results) **unless you pass `content: false`**; installing
> an instrumentation with `instrument(...)` is the consent, and a `transform` is
> the policy hook. [...] **Exception message and stack now ship by default**
> through the same gate.

The removed controls are named: `GenAIContentPolicy` as a public type, `enabled`,
`inline`, `externalContent`, `limits`, and the `diagnostic` callback.

**Receipt (pinned).** https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md

**Date.** 2026-07-24.
**Channel.** main-unreleased.

**Operator consequence.** This is a default-off to default-on privacy inversion
on the most sensitive payload an agent handles -- full conversation content,
system prompts, tool arguments and results, plus exception messages and stacks --
and the vendor's stated theory of consent is that *installing the
instrumentation at all* is the consent. Anyone upgrading past this commit who
does not explicitly set `content: false` will start shipping prompt and tool
payloads into their trace backend.

## 4. Flue stops being a framework with a CLI and becomes a Vite plugin

**What changed.**

> **Flue is now a Vite plugin -- `flue dev` and `flue build` are removed.** Adopt
> Flue by adding `flue()` from the new `@flue/vite` package to `vite.config.ts`;
> `vite dev` and `vite build` own the deployable application.

The CLI "slims to `run`/`init`/`add`/`update`/`docs`", `flue run` is rewritten as
"transport-free local execution", and `@flue/dev-console` (the terminal chat TUI)
is deleted with the stated reason that it "is not a direction Flue is investing
in."

**Receipt (pinned).** https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md

**Date.** 2026-07-24.
**Channel.** main-unreleased.

**Operator consequence.** Flue's deployment membrane is now someone else's build
tool -- adoption means adding a plugin to a Vite config rather than running a
Flue command -- which lowers the integration floor for Vite shops and removes
Flue as a standalone runnable for everyone else.

## 5. File-based routing is replaced by an explicit route map and a `'use agent'` directive

**What changed.**

> **File-based routing is removed -- `app.ts` is the route map.** The
> `src/agents/*`, `src/workflows/*`, and `src/channels/*` directory conventions no
> longer create routes or registrations. An agent module joins the application
> through the `'use agent'` directive (the module's first statement) [...] and
> derives the agent's durable storage identity from the file basename (on
> Cloudflare, one generated `Flue<PascalName>Agent` Durable Object class per
> marked file -- **renaming the file is the storage-identity change** [...];
> duplicate basenames are a build error).

**Receipt (pinned).** https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md

**Date.** 2026-07-24.
**Channel.** main-unreleased.

**Operator consequence.** Durable storage identity is now bound to a filename, so
a routine file rename is a data-migration event on Cloudflare -- expressed
through wrangler's `renamed_classes` -- which is a sharp edge for anyone who
treats renames as free.

## 6. Two reset-only schema breaks in one unreleased section, with no migration

**What changed.** The Unreleased section contains two separate persisted-storage
breaks:

> **Persisted storage is reset-only schema v5.** [...] stores written by earlier
> versions are rejected at open with `PersistedSchemaVersionError` and must be
> cleared. There is no migration, consistent with the pre-1.0 reset-only policy.

and later:

> **Persisted storage is reset-only schema v8.** The dispatch-receipts table's
> `dispatch_id` column is renamed `submission_id` [...]; stores written by schema
> v7 or earlier are rejected at open [...]. There is no migration [...].

**Receipt (pinned).** https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md

**Date.** 2026-07-24 (both entries present in the same Unreleased section).
**Channel.** main-unreleased.

**Operator consequence.** The project is describing itself as "pre-1.0
reset-only" in a section that sits on top of a **1.0.0-beta.9** tag -- so anyone
who read "1.0 beta" as a durability commitment should note that conversation
history is still explicitly disposable, twice over, in the current main.

## 7. Agent prompts become fire-and-forget; the synchronous reply path is deleted

**What changed.**

> **Direct agent prompts are fire-and-forget only.** The `?wait=result`
> synchronous mode on agent HTTP POSTs is removed; agent prompts always return a
> 202 admission.

The SDK's `prompt()` is removed, `wait()` "no longer resolves with a result" (it
resolves `void`), and callers "should read [the reply] from the conversation
transcript via the conversation client's `history()` or the live conversation
stream." A remote abort is now distinguishable from a failure:
`FlueExecutionError.failure` is `'aborted'` rather than `'failed'`.

**Receipt (pinned).** https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md

**Date.** 2026-07-24.
**Channel.** main-unreleased.

**Operator consequence.** Every synchronous request/response integration against
Flue breaks -- there is no supported way to POST a prompt and receive the answer
on the same connection -- and callers must now hold a `submissionId` and re-read
the transcript, which is a durability win and an integration cost at the same
time.

## 8. A reply-attribution bug that returned another submission's answer

**What changed.** From Fixes and Other Changes:

> A joined submission's reply is now resolved through its settlement's derived
> linkage instead of by recency. [...] Previously a delivery that joined a busy
> response read "the conversation's last assistant message" as its reply, which
> **silently returned a later submission's answer once the conversation moved
> on**; that recency fallback now applies only to legacy settlements that predate
> attempt stamping.

Related in the same section: terminalizing a durable submission now settles
dangling tool calls deterministically, so "a `task` tool call can no longer rest
as 'still running' forever in history projections", and conversations already
left dangling "self-heal on their next prompt" (#419).

**Receipt (pinned).** https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md
Earliest in-window commit for the terminalization work:
https://github.com/withastro/flue/commit/c5e7ef4598 ("Settle tool state
deterministically at submission terminalization", 2026-07-04).

**Date.** 2026-07-04 (terminalization commit), 2026-07-24 (reply-linkage entry).
**Channel.** main-unreleased.

**Operator consequence.** On a busy conversation, Flue could hand a caller a
different submission's answer and nothing would signal the mismatch -- a
correctness bug in the one thing an agent API must get right -- and it is fixed
only on main, not in any installable tag.

---

## Cadence note for the digest

Flue's commit count collapsed from 69 in the prior 7-day window to **9 in this
25-day window**, while the content of those 9 commits is the largest breaking
change in the project's history. The velocity signal and the change-magnitude
signal point in opposite directions, and neither is visible from the tag list,
which has not moved since 2026-06-30.
