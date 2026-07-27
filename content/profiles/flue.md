---
schema_version: bitter.frontier_profile.v0
profile_id: flue
label: Flue
owner: withastro
source_contract: sources/flue.yml
homepage: https://www.flueframework.com
docs: https://github.com/withastro/flue/blob/main/CHANGELOG.md
tagline: "Tagged nothing this window while its default branch deleted workflows, the CLI, and the entire run surface. The marketing site still sells all three."
x:
  project: flueai
repo: https://github.com/withastro/flue
surface_class: open_source_commits
evidence_floor: commit
status: active_watch
last_updated: 2026-07-27
last_full_review: 2026-07-27
claims:
  - id: virtual-sandbox-default
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: model-harness-separation
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: headless-deployable-target
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: skills-markdown-first
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-06-23
    status: active
  - id: skills-typescript-native
    finding_id: 2026-06-23-flue-defineskill-typescript-skills
    last_verified: 2026-06-23
    status: active
  - id: skill-naming-ascii-spec
    finding_id: 2026-06-23-flue-skill-naming-ascii-spec
    last_verified: 2026-06-23
    status: active
  - id: connector-agent-install
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-05-12
    status: active
  - id: first-party-connector-ecosystem
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-06-23
    status: active
  - id: one-zero-beta-line
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-06-23
    status: active
  - id: durable-recoverable-execution
    finding_id: 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    last_verified: 2026-06-23
    status: active
  - id: durable-streams-transport
    finding_id: 2026-06-23-flue-event-index-decoupled-from-stream-offset
    last_verified: 2026-06-23
    status: active
  - id: actions-orchestration-primitive
    finding_id: 2026-06-23-flue-workflows-rebuilt-on-actions
    last_verified: 2026-06-23
    status: active
  - id: define-naming-unification
    finding_id: 2026-06-23-flue-define-naming-unification
    last_verified: 2026-06-23
    status: active
  - id: run-unified-through-http-app
    finding_id: 2026-06-23-flue-run-unified-through-http-app
    last_verified: 2026-06-23
    status: active
  - id: run-observability-private-by-default-staged
    finding_id: 2026-06-23-flue-workflow-runs-private-by-default
    last_verified: 2026-06-23
    status: active
  - id: flue-logs-removed-staged
    finding_id: 2026-06-23-flue-logs-removed-typed-run-apis
    last_verified: 2026-06-23
    status: active
  - id: run-observability-history
    finding_id: 2026-05-12-flue-initial-profile-and-observability-wave
    last_verified: 2026-06-23
    status: stale
  - id: v090-breaking-migration
    finding_id: 2026-06-01-flue-v090-major-refactor
    last_verified: 2026-06-03
    status: active
posture_basis:
  capability:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
    - 2026-06-23-flue-workflows-rebuilt-on-actions
    - 2026-06-23-flue-defineskill-typescript-skills
  accessibility:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-define-naming-unification
    - 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
  governance:
    - 2026-05-12-flue-initial-profile-and-observability-wave
    - 2026-06-23-flue-workflow-runs-private-by-default
    - 2026-06-23-flue-logs-removed-typed-run-apis
    - 2026-06-23-flue-workflows-rebuilt-on-actions
stance:
  use_for: "Vite shops willing to track an unreleased branch, and anyone studying what a framework does when it concludes its central primitive was wrong. What you can install today is `v1.0.0-beta.9` (2026-06-30): workflows, the CLI, the dev console, the first-party connector ecosystem, and durable recoverable execution. It is a coherent product. It is also the product main has already deleted."
  avoid_for: "Anyone who needs a deterministic, code-first orchestration entrypoint -- main removed the no-model `run()` body with no v1 replacement, so every job must pass through a model. Anyone with a synchronous request/response integration: `?wait=result` and the SDK `prompt()` are gone on main and agent prompts always return a 202. Anyone shipping traces to a backend who has not explicitly set `content: false`. And anyone reading flueframework.com as a description of the project."
  watch_next: "Whether the 2.0 rewrite gets a tag at all, and whether the marketing site is corrected before it does; whether trace content returns to off-by-default or the 'installing an instrumentation is the consent' theory holds; whether a deterministic code-first entrypoint comes back in some form; and whether the reply-attribution fix -- which could return another submission's answer -- ever reaches an installable version."
---

# Flue

## Operator Read

Flue is a TypeScript framework for building autonomous agents from the Astro
organization, [Apache-2.0 licensed](https://github.com/withastro/flue/blob/main/LICENSE),
built around an explicit "Agent = Model + Harness" split. That framing is why
Bitter Frontier watches it: the question has always been what an operator
controls, what the framework owns, and how evidence of agent work reaches a
human.

This window answered a version of that question nobody asked. **Flue published
no tag and no release between 2026-07-02 and 2026-07-27.** The seven
`v1.0.0-beta.3` through `v1.0.0-beta.9` tags all date 2026-06-23 to 2026-06-30,
before the window opened, and `v1.0.0-beta.9` is still what an operator installs.
Meanwhile nine commits landed on `main` and zero pull requests merged. One of
those nine, [`b814b82b`](https://github.com/withastro/flue/commit/b814b82b2ce45dc941c77bb010140070e1bd48d5)
on 2026-07-24, is titled `v2.0.0-nightly.202607240825` and carries
**+60,306 / -95,918 lines across more than 300 files**. That single commit is an
architectural rewrite that deletes workflows, the run surface, the CLI's build
commands, file-based routing, and the terminal console.

The commit count fell from 69 in the prior seven-day window to 9 in this
twenty-five-day one, while the magnitude of change went up by an order of
magnitude. Neither signal is visible from the tag list, which has not moved since
June 30.

> **Channel reality.** Every finding below is `main-unreleased`. Flue still
> publishes **zero GitHub Releases**, so a CHANGELOG pinned to a commit SHA is
> the receipt surface. And note the version string carefully:
> `v2.0.0-nightly.202607240825` exists only as a *commit subject*. No git tag
> with that name exists. "Flue is on 2.0" is unreceipted; what is receipted is
> that main carries a 2.0.0-nightly marker while the newest tag reads
> 1.0.0-beta.9.

## The marketing site sells what main deleted

As fetched 2026-07-27, [flueframework.com](https://flueframework.com/) badges the
project "1.0 Beta -- Read the announcement," headlines Workflows as a capability
("Run structured automations where your code guides agent reasoning from a clear
input to a finished result"), and describes Flue as a programmable TypeScript
harness with no mention of Vite.

On [main](https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md),
workflows are gone and Flue is a Vite plugin.

This publication spent the window documenting surfaces that disagree with the
runtime: documentation pinning a vulnerable image, a release body truncating its
own security clause, an advisory range pointing at a dead package line. Flue is
the cleanest specimen of the class. An operator evaluating it from the homepage
today is being sold a central primitive the maintainers have already removed with
no compatibility stubs. Nothing here is deceptive -- a marketing site describing
the newest tag is describing the newest tag, which is exactly what a marketing
site should do. The trap is that on this project the newest tag is now four weeks
behind a rewrite that contradicts it.

## What main removed

**Workflows, outright.** Quoting the CHANGELOG: `defineWorkflow`, `invoke`, run
stores and run event streams, the `/runs/:runId` and `POST /workflows/:name`
routes including `?wait=result`, `listRuns` and `getRun`, the SDK
`client.workflows` and `client.runs` namespaces, the React workflow hooks, and
the dev-console run UI are all deleted, **with no compatibility stubs**.
Conversations are now the only durable unit: a workflow becomes an agent with the
job as a model-callable `defineAction` in its `actions: [...]`.

The sentence that should stop an operator is the next one. **A deterministic
code-first entrypoint -- the old no-model `run()` body -- has no v1
replacement.** There is now no way to run deterministic orchestration in Flue at
all. Every job passes through a model.

That is a real architectural position and it may even be the right one for what
Flue is becoming. It is also a capability removal with no migration target, in a
project whose homepage still advertises the capability.

**The CLI's build path.** `flue dev` and `flue build` are removed. Adoption now
means adding `flue()` from a new `@flue/vite` package to `vite.config.ts`, and
`vite dev` and `vite build` own the deployable application. The CLI slims to
`run`, `init`, `add`, `update`, and `docs`, with `flue run` rewritten as
transport-free local execution. `@flue/dev-console`, the terminal chat TUI, is
deleted, with the stated reason that it "is not a direction Flue is investing
in." The deployment membrane is now someone else's build tool: a lower floor for
Vite shops, and the end of Flue as a standalone runnable for everyone else.

**File-based routing.** `src/agents/*`, `src/workflows/*`, and `src/channels/*`
no longer create routes or registrations; `app.ts` is the route map, and an agent
module joins the application through a `'use agent'` directive as its first
statement. Watch the consequence: the agent's durable storage identity derives
from the **file basename**, generating one `Flue<PascalName>Agent` Durable Object
class per marked file on Cloudflare, with duplicate basenames a build error.
Renaming a file is a storage-identity change and therefore a data-migration
event, expressed through wrangler's `renamed_classes`. Renames are not free on
this design, and nothing in the ordinary developer reflex will tell you that.

**Synchronous replies.** Direct agent prompts are fire-and-forget only. The
`?wait=result` mode on agent HTTP POSTs is removed and prompts always return a
202 admission. The SDK's `prompt()` is gone and `wait()` resolves `void`; callers
read the reply from the conversation transcript through `history()` or the live
stream. A remote abort is now distinguishable from a failure --
`FlueExecutionError.failure` reports `'aborted'` rather than `'failed'` -- which
is a genuine improvement. Every synchronous request/response integration against
Flue nonetheless breaks.

## The telemetry inversion

This is the change most likely to surprise someone who upgrades without reading.

Trace content is now **captured by default**. Both adapters --
`createOpenTelemetryInstrumentation()` and the native Cloudflare
`createCloudflareTracing()` -- emit conversation content
(`gen_ai.input/output.messages`, system instructions, tool definitions,
arguments, and results) unless you pass `content: false`. Exception messages and
stacks ship by default through the same gate. The public content surface
collapses to `content?: false | { transform }`, and the removed controls are
named in the CHANGELOG: `GenAIContentPolicy` as a public type, `enabled`,
`inline`, `externalContent`, `limits`, and the `diagnostic` callback.

The stated theory is that **installing an instrumentation with `instrument(...)`
is the consent**, and a `transform` is the policy hook.

Take that argument seriously for a moment, because it is not absurd. An operator
who wires a tracing backend into an agent framework has plausibly decided to
observe the agent. Simplifying five knobs into one boolean and one transform is
the knob-deletion instinct that this publication praised elsewhere this window.

The problem is the direction of the default. Deleting a knob is a good move when
the remaining shape is the safe one. Here the remaining shape is the permissive
one: prompts, tool arguments, tool results, system instructions, and exception
stacks flow to a third-party backend unless the operator knows to turn them off.
Consent inferred from an installation is not consent to the most sensitive
payload the system handles. If you upgrade past `b814b82b` and do not set
`content: false`, your trace backend becomes a copy of every conversation.

*Findings: `2026-06-23-flue-workflow-runs-private-by-default`,
`2026-06-23-flue-logs-removed-typed-run-apis`.*

## A correctness bug worth knowing about

From the same unreleased section: a joined submission's reply is now resolved
through its settlement's derived linkage instead of by recency. Previously a
delivery that joined a busy response read "the conversation's last assistant
message" as its reply, which **silently returned a later submission's answer once
the conversation moved on**. The recency fallback now applies only to legacy
settlements that predate attempt stamping.

On a busy conversation, Flue could hand a caller a different submission's answer
and nothing would signal the mismatch. That is a correctness failure in the one
thing an agent API has to get right, and the fix exists only on `main`. An
operator running `v1.0.0-beta.9` still has the bug. Related work in the same
section settles dangling tool calls deterministically at submission
terminalization ([commit `c5e7ef4598`](https://github.com/withastro/flue/commit/c5e7ef4598),
2026-07-04), so a `task` tool call can no longer rest as "still running" forever
in history projections, and conversations already left dangling self-heal on
their next prompt.

## Storage is still disposable, twice over

The unreleased section contains two separate persisted-storage breaks. Schema v5
rejects stores written by earlier versions at open with
`PersistedSchemaVersionError`, which must be cleared. Schema v8 renames the
dispatch-receipts `dispatch_id` column to `submission_id` and rejects stores
written by v7 or earlier. Neither has a migration, and the CHANGELOG describes
both as "consistent with the pre-1.0 reset-only policy."

That phrase sits on top of a tag that reads **1.0.0-beta.9**. Anyone who read "1.0
beta" as a durability commitment should read it again: conversation history is
still explicitly disposable, and the project says so twice in one unreleased
section.

## What you can still install

The tagged product has not changed since 2026-06-30 and it remains coherent, so
here is the collapsed version of what `v1.0.0-beta.9` gives you.

A [virtual sandbox](https://github.com/withastro/flue/blob/main/README.md) by
default, backed by just-bash with an in-memory filesystem and no container, with
container sandboxes (Daytona, e2b) and a `cloudflareSandbox()` available, plus
[`sandbox: 'local'`](https://github.com/withastro/flue/commit/c7d278eb) when the
agent genuinely needs `gh`, `git`, and `npm` and the CI runner is your isolation
boundary. A first-class harness object from `init()` that resolves sandbox,
model, skills, role, and deployment target in one place, with
[`configureProvider()`](https://github.com/withastro/flue/commit/f0de1814) for
routing traffic through an enterprise gateway. Markdown skills under
`.agents/skills/` plus a TypeScript-native `defineSkill()` path at parity with
them. A [first-party connector ecosystem](https://github.com/withastro/flue/commit/05f9d478f5)
of 15-plus `@flue/*` channel and persistence packages for verified HTTP ingress.
[Durable, recoverable execution](https://github.com/withastro/flue/commit/05f9d478f5)
on a built-in SQLite store over the Durable Streams transport. And
[shell environment values redacted from session history](https://github.com/withastro/flue/commit/850fdcee)
before persistence, which matters if you hold sessions written before v0.4.1.

*Findings: `2026-05-12-flue-initial-profile-and-observability-wave`,
`2026-06-23-flue-1.0-beta.1-and-beta.2-tags`,
`2026-06-23-flue-defineskill-typescript-skills`.*

## Open questions

Answered this window, and one of them answered strangely:

- **Will the staged private-by-default run observability and the `flue logs`
  removal ship as written?** Moot. The `## Unreleased` section this profile
  flagged in June is absent from the CHANGELOG at `v1.0.0-beta.9`, and the
  rewrite then deleted `/runs/:runId`, run event streams, and `client.runs`
  outright. There is no longer a run surface to make private. The question this
  profile carried for two windows was resolved by demolition rather than by
  decision.
- **Is the 1.0-beta line convergence motion toward GA?** No. It was convergence
  motion toward a rewrite. Read that as a caution about inferring intent from
  release-cadence shape.

Still open:

- Will the 2.0 rewrite be tagged, and will the marketing site be corrected before
  or after it is? Right now the public description and the default branch
  describe different products.
- Does a deterministic code-first entrypoint return in some form? Removing the
  no-model `run()` body with no replacement makes the model mandatory for every
  job, which is a strong architectural claim to ship without a migration target.
- Does trace content go back to off-by-default, or does "installing an
  instrumentation is the consent" hold? This is the single decision that
  determines whether Flue is safe to instrument in a regulated environment.
- How should an operator monitor Flue for security-relevant fixes at all? There
  is no advisory channel, no GitHub Releases, and security fixes land as ordinary
  CHANGELOG lines -- and the reply-attribution bug shows the class of defect that
  can hide there.
- What is the review model for third-party connectors, now that first-party
  `@flue/*` packages sit alongside the coding-agent-installs-the-adapter path?
- `sandbox: 'local'` still gives agents direct host access. What guardrail exists
  below the CI runner?

## What to watch next

- **Whether a tag appears.** Everything interesting about Flue right now is
  unreleased, and until something is tagged the project has two incompatible
  public faces.
- **Whether the homepage catches up.** The gap between flueframework.com and
  `main` is the most legible "released is not merged" trap on the watchlist, and
  closing it is a one-afternoon job.
- **The telemetry default.** Off-by-default to on-by-default on prompts and tool
  results is the kind of change that usually gets revisited once someone's
  compliance team reads the trace.
- **Whether the Vite bet pays.** Making the build tool the deployment membrane
  lowers adoption cost for one ecosystem and raises it for everyone else; the
  next window should show which effect dominates.
- **Whether commit velocity returns.** Nine commits and zero merged pull requests
  in twenty-five days, with one of them carrying the whole rewrite, is a
  development pattern that says something about how this project is being built.

## Profile hygiene

This profile follows the discipline in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the
prose carries an inline source link, and posture sections cite finding IDs when
naming a specific feature, behavior change, or cross-project comparison.

Note on receipts. Flue publishes no GitHub Releases, so the canonical surface is
`CHANGELOG.md` pinned to a commit SHA, and version bumps are recorded as release
commits and git tags. Everything from the 2026-07-02 to 2026-07-27 window is
cited against the CHANGELOG at
[`b814b82b`](https://github.com/withastro/flue/blob/b814b82b2ce45dc941c77bb010140070e1bd48d5/CHANGELOG.md)
and is **`main-unreleased`** without exception -- no tag was cut in the window.
Citations are at `commit` and CHANGELOG precision because individual diffs have
not all been reviewed; the README is cited at `official_docs` precision for
architectural claims.

Note on this revision. The `claims:` block is unchanged and holds the register
through the June 2026 windows. Several of those claims describe surfaces the
2026-07-24 rewrite deletes on `main` -- the workflow and Actions orchestration
entries, the run-observability entries, and the `flue logs` entry in particular.
They remain accurate for the installable tag `v1.0.0-beta.9` and should be read
as **tagged-state claims about a line main has moved past**, not as descriptions
of current `main`. The new material is carried in prose only.
