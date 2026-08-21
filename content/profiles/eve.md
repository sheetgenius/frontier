---
schema_version: bitter.frontier_profile.v0
profile_id: eve
label: eve
owner: Vercel
source_contract: sources/eve.yml
homepage: https://eve.dev
docs: https://eve.dev/docs
tagline: "Ships everything it merges, and spent this window repairing the approval gate that is its whole pitch."
repo: https://github.com/vercel/eve
surface_class: open_source_releases
evidence_floor: release_note
status: active_watch
last_updated: 2026-08-20
last_full_review: 2026-08-20
claims:
  - id: channel-hitl-metadata-and-credential-redaction
    finding_id: 2026-08-20-eve-0-40-through-0-42-redact-credentials-and-stop-channel-metadata-leaking-into-approvals
    last_verified: 2026-08-20
    status: active
  - id: filesystem-first-agent
    finding_id: 2026-06-17-eve-filesystem-first-agent-model
    last_verified: 2026-06-19
    status: active
  - id: initial-public-release
    finding_id: 2026-06-17-eve-initial-public-release
    last_verified: 2026-06-19
    status: active
  - id: durable-resumable-execution
    finding_id: 2026-06-17-eve-durable-execution-workflow-sdk
    last_verified: 2026-06-19
    status: active
  - id: hitl-approval-gates
    finding_id: 2026-06-17-eve-hitl-approval-gates
    last_verified: 2026-06-19
    status: active
  - id: multi-backend-sandbox
    finding_id: 2026-06-17-eve-multi-backend-sandbox
    last_verified: 2026-06-19
    status: active
  - id: subagents-and-mcp-connections
    finding_id: 2026-06-17-eve-subagents-and-mcp-connections
    last_verified: 2026-06-19
    status: active
  - id: ai-gateway-oidc
    finding_id: 2026-06-17-eve-ai-gateway-oidc
    last_verified: 2026-06-19
    status: active
  - id: fast-beta-velocity
    finding_id: 2026-06-17-eve-fast-beta-velocity
    last_verified: 2026-06-19
    status: active
posture_basis:
  capability:
    - 2026-06-17-eve-initial-public-release
    - 2026-06-17-eve-filesystem-first-agent-model
    - 2026-06-17-eve-durable-execution-workflow-sdk
    - 2026-06-17-eve-multi-backend-sandbox
  accessibility:
    - 2026-06-17-eve-initial-public-release
    - 2026-06-17-eve-filesystem-first-agent-model
  governance:
    - 2026-06-17-eve-hitl-approval-gates
    - 2026-06-17-eve-multi-backend-sandbox
    - 2026-06-17-eve-fast-beta-velocity
stance:
  use_for: "Operators who want a human approval gate, durable and resumable runs, and an agent definition that lives in reviewable files -- and who will test what a denial actually does in their own runtime rather than take the release note for it. Also the clearest reference on the watchlist for channel discipline: 34 tagged releases in 25 days with nothing material sitting unreleased, so the build you install is the build the notes describe."
  avoid_for: "Treating eve's approval gate as a proven boundary because the vendor sells governance. Inside one 25-day window it failed in both directions: a declined budget prompt the parent could retry around, a console that displayed denials as successes, a stale approval that could still authorize an earlier call, and an approval that left the tool unrun. Also still unfit for anything needing a stable API -- this is a 0.x line that removes configuration keys and changes required interfaces on minor versions."
  watch_next: "Whether the 0.23.0 instinct generalizes -- delete the tunable, constrain the shape -- or stays a one-off; whether any further gate defect surfaces now that the four found this window are closed; whether the near-zero merged-to-released gap survives the project getting larger; and when mounted extensions and the remote-agent principal-forwarding surface come out from under the vendor's own instability warning."
---

# Eve

## Operator Read

Eve is Vercel's open-source, filesystem-first TypeScript framework for durable
agents, and for three issues this publication used it as the governance-first
counterexample: the vendor that shipped human-in-the-loop as a load-bearing
runtime primitive rather than as a caller's problem. In
*[Patched for Whom](/digests/2026-06-24_2026-07-01-weekly/)* we wrote that where
self-hosted harnesses left governance fixes on a branch, the platform side
shipped controls you could actually run.

That reading did not survive the 2026-07-02 to 2026-07-27 window. Eve cut
[34 tagged releases](https://github.com/vercel/eve/releases) in 25 days, from
`eve@0.18.2` to
[`eve@0.27.6`](https://github.com/vercel/eve/releases/tag/eve%400.27.6), and four
of them repaired the approval and budget gates that are the product's entire
pitch. They failed in both directions inside the same month: a human "Stop" that
[the parent could retry around](https://github.com/vercel/eve/releases/tag/eve%400.27.1),
a developer console that
[showed denied tool calls as successful](https://github.com/vercel/eve/releases/tag/eve%400.26.1),
a [stale approval that could still authorize](https://github.com/vercel/eve/releases/tag/eve%400.25.0)
the call it no longer matched, and an approval from a chat channel that
[left the tool unrun](https://github.com/vercel/eve/releases/tag/eve%400.24.2).

Concede the other half, because it is just as real and most of the watchlist
cannot claim it. Eve found and fixed all four itself, inside 25 days, on the
public release channel. Its merged-to-released gap is essentially zero: `main`
sits three documentation-only commits ahead of the last tag, so there is no
private queue of unshipped repairs. It closed a code-execution path in
network-fetched OpenAPI specs. It shipped turn cancellation complete, eleven days
after writing down that the trigger did not exist yet. And it did the most
interesting thing any vendor did this window: it
[deleted a governance knob](https://github.com/vercel/eve/releases/tag/eve%400.23.0)
because an architectural invariant enforced the property better than the policy
number had.

So the operator read is not that eve is careless. It is that governance-first is
a design intention, not an enforcement guarantee, and eve is the clearest
available demonstration that those are different things. Buying the gate does not
buy you the boundary. Run eve if you want the primitives -- they are good
primitives -- then spend an hour confirming what a denial does in your own
runtime.

> **Status**: eve remains a public beta under Vercel beta terms. The current
> release is
> [`eve@0.27.6`](https://github.com/vercel/eve/releases/tag/eve%400.27.6)
> (2026-07-25). Breaking changes still arrive on minor versions: `0.20.0` made
> `shutdown()` a required member of `SandboxBackendHandle`, and `0.23.0` removed
> the `limits.maxSubagentDepth` setting outright. Treat the API as unsettled.

## The four gates that did not hold

All four are tagged releases. There is no channel excuse available here, which is
the point: an operator running the current build had each defect, and each fix,
exactly when the tag says.

**A declined budget prompt was not a stop.** On 2026-07-07,
[`eve@0.21.0`](https://github.com/vercel/eve/releases/tag/eve%400.21.0)
introduced a session token-budget gate that pauses for a human instead of
failing, and established a quota tree with an explicit guarantee: a delegated
child receives a share of the parent's remaining quota, a completed child's usage
counts against the parent, and "a delegation tree can never outspend the budget
configured at its root." Fifteen days later,
[`eve@0.27.1`](https://github.com/vercel/eve/releases/tag/eve%400.27.1)
(2026-07-22) fixed the fact that the human answer defeated the guarantee.
Declining a delegated child's prompt now cancels the whole turn tree from the
root, "so the parent can no longer retry the child against a fresh quota share."
For those fifteen days an operator who answered Stop did not stop the spend. The
denial read as a hiccup, and the root-budget invariant was breached by the
one control that was supposed to enforce it.

**The console inverted the decision.**
[`eve@0.26.1`](https://github.com/vercel/eve/releases/tag/eve%400.26.1)
(2026-07-20) reworked the `eve dev` TUI, and inside a large rendering changeset
sits one clause: the interface now "shows rejected tool approvals as denied
instead of successful." The runtime had the authority decision right. The only
surface a human was watching had it backwards. That is an audit-trail failure at
precisely the point the platform sells as its differentiator, and no operator
reading their own console could have caught it.

**A stale approval used to authorize.**
[`eve@0.25.0`](https://github.com/vercel/eve/releases/tag/eve%400.25.0)
(2026-07-17) delivers answers to a question or approval that is no longer pending
as a new user message, and states the rule plainly: "A stale approval never
authorizes the earlier tool call." It is written as a guarantee, which means it
was not one before. Until 2026-07-17 the binding between "the human approved
*this* call" and "*this* call ran" was time-ambiguous, and a late click on an
expired card was a live authorization signal.

**And the gate also failed closed.**
[`eve@0.24.2`](https://github.com/vercel/eve/releases/tag/eve%400.24.2)
(2026-07-14) makes tool approvals resolve before channel context is added to the
next model request, "so approving a tool from channels such as Linear executes
the tool instead of leaving a dangling tool call." A human granted authorization
and the work silently did not happen. Same surface, same window, opposite
failure.

The operator action is unglamorous and it is the only one that produces
knowledge: in your runtime, on your channel, deny a call and confirm it is
recorded as denied and cannot be retried; approve one and confirm it runs.

*Findings: `2026-06-17-eve-hitl-approval-gates`.*

## The counterpart: eve deleted the knob

Three days apart, eve did something almost nobody does. On 2026-07-10,
[`eve@0.22.5`](https://github.com/vercel/eve/releases/tag/eve%400.22.5) tightened
`limits.maxSubagentDepth` from a default of `3` to `1`. On 2026-07-13,
[`eve@0.23.0`](https://github.com/vercel/eve/releases/tag/eve%400.23.0) removed
the setting entirely and replaced it with a shape constraint: the built-in
`agent` tool is root-only, so copies it creates cannot delegate recursively.
Declared subagents can still call their own nested subagents. Not a smaller
number. No number.

Read that against the four defects above. Every one of them is a promise made in
a runtime that the runtime did not keep. A configurable limit is a claim about
behavior, and a claim can be false. An invariant is not a claim; it is a shape
the system cannot take. A governance-first vendor concluding that its own tunable
was the weaker control is the single most transferable idea eve produced this
window, and it is worth stealing whether or not you run eve.

## Channel posture: the gap is essentially zero

Credit where it is due, and it is unusual credit. Eve published 34 non-draft,
non-prerelease GitHub Releases targeting `main` between 2026-07-02 and
2026-07-25, roughly one every seventeen hours. At window close `main` was
[exactly three commits ahead of the last tag](https://github.com/vercel/eve/compare/eve%400.27.6...632605f097c583e6667578a9b296c334f69e9121),
and all three are documentation-only.

Nothing material is sitting unreleased. On a watchlist where the recurring
operator hazard is that the fix you read about is on a branch you cannot install,
eve and Agent Zero are the two projects where "merged" and "shipped" are the same
word. It also means every defect above is legible: because eve ships what it
merges, its release notes are a usable record of what was broken and when, which
is exactly why this profile can be as specific as it is.

One caveat on reading those notes. The corrections arrive as ordinary patch-line
bullets with no severity language, which brings us to the next section.

*Findings: `2026-06-17-eve-fast-beta-velocity`.*

## A code-execution path closed with no advisory

[`eve@0.22.3`](https://github.com/vercel/eve/releases/tag/eve%400.22.3)
(2026-07-09) routed all frontmatter parsing through a single safe-by-default
helper with gray-matter's code-capable engines disabled, so a `---js` or
`---javascript` fence "throws instead of being `eval()`d." The release note is
explicit about what that repaired: only authored markdown was hardened before,
while the eval YAML loader and the OpenAPI spec loader used gray-matter's
defaults and would execute such a fence. "This closes that path for OpenAPI
specs, which are fetched over the network." The same changeset requires `https`
for spec URLs and the resolved base URL, with plain `http` allowed only for
loopback.

Any operator who pointed eve at a third-party OpenAPI spec URL before 2026-07-09
was one hostile fence away from code execution in the agent process. There is no
CVE and no advisory. The urgency is invisible unless you read the changeset,
which is the same disclosure gap this publication found across the field this
window -- eve is not unusual here, it is representative.

## Current capability state

The 0.10 and 0.11 launch-window detail is retired; what follows is the state at
`eve@0.27.6`.

### Filesystem-first agent definition

An agent is
[a directory of files](https://eve.dev/docs/reference/project-layout):
`instructions.md`, `agent.ts`, `tools/`, `skills/`, `channels/`, `schedules/`,
`subagents/`, `connections/`, `sandbox/`, and `hooks/`. The operating context is
inspectable from the directory and changes to it arrive as diffs. This is still
eve's best idea and it has not moved.

*Findings: `2026-06-17-eve-filesystem-first-agent-model`,
`2026-06-17-eve-subagents-and-mcp-connections`.*

### Durable execution, and now a real stop button

Sessions remain [multi-turn, resumable, and crash-safe](https://eve.dev/docs) on
the open-source [Workflow SDK](https://workflow-sdk.dev), spanning tool calls,
delegation, and human pauses. The window added the missing half.
[`eve@0.20.0`](https://github.com/vercel/eve/releases/tag/eve%400.20.0)
(2026-07-05) shipped cooperative `AbortSignal` plumbing and said so honestly:
"no trigger exists yet, so runtime behavior is unchanged until the cancellation
API ships."
[`eve@0.24.4`](https://github.com/vercel/eve/releases/tag/eve%400.24.4)
(2026-07-15) made turns cancellable, settling as a `turn.cancelled` stream event
"never as a failure."
[`eve@0.24.5`](https://github.com/vercel/eve/releases/tag/eve%400.24.5)
(2026-07-16) added `POST /eve/v1/session/:sessionId/cancel` and cancellation of
local, nested, and remote subagent turns when the parent is cancelled. By
[`eve@0.27.4`](https://github.com/vercel/eve/releases/tag/eve%400.27.4)
(2026-07-24) the dev TUI had Esc-to-steer cooperative cancellation. A documented
"not yet wired" closed in eleven days, and aborting a run no longer pollutes
failure metrics or trips a parent's error handling.

*Findings: `2026-06-17-eve-durable-execution-workflow-sdk`.*

### Approver identity and audit trail

Three improvements made an approval traceable to a person rather than to a log
line. [`eve@0.20.0`](https://github.com/vercel/eve/releases/tag/eve%400.20.0)
exposes `callId` on `ToolContext` and `ApprovalContext`, so approval-gated tools
can key records to one identity across proposal, rejection, and execution.
[`eve@0.22.1`](https://github.com/vercel/eve/releases/tag/eve%400.22.1)
(2026-07-08) moved Slack prompts to card blocks so answering one batched request
no longer disables its siblings, and surfaced authorization prompts from local
subagents on the parent channel through nested delegation chains while keeping
the callback scoped to the child session.
[`eve@0.24.0`](https://github.com/vercel/eve/releases/tag/eve%400.24.0)
(2026-07-14) fixed Teams cards to show tool arguments and to "authorize
submissions as the Teams user who clicked the card." Only from 2026-07-14 does a
Teams approval bind to the human who actually clicked it.

### Sandbox lifecycle across three backends

The sandbox is still pluggable across Vercel, Microsandbox, and Docker, and the
backend choice is still a trust choice.
[`eve@0.20.0`](https://github.com/vercel/eve/releases/tag/eve%400.20.0) stops
sandboxes on `SIGTERM` and `SIGINT` for self-hosted production servers across all
backends, which closes a real billing and isolation leak where VMs and containers
outlived the server. It is a **breaking change** for anyone maintaining a custom
backend: `SandboxBackendHandle` gains a required `shutdown()` and the unused
`dispose()` is removed.
[`eve@0.22.1`](https://github.com/vercel/eve/releases/tag/eve%400.22.1) keys
session sandboxes per durable session instead of per deployment, so redeploying
no longer discards a session's `/workspace`.

*Findings: `2026-06-17-eve-multi-backend-sandbox`.*

### Distribution: mounted extensions, fenced by the type system

[`eve@0.22.3`](https://github.com/vercel/eve/releases/tag/eve%400.22.3)
introduced mounted extensions -- tools, connections, skills, instructions, and
hooks packaged as a reusable npm package under `agent/extensions/`, composing
behind a `<namespace>__` prefix. The authority fence is stated in the same
changeset: an extension "cannot declare a sandbox, agent config, schedules, or
limits, or mount other extensions." That is the knob-deletion instinct again --
the trust boundary is in the type system, not in review guidance. Treat the API
as unstable regardless: eve
[deliberately kept the guide out of the docs sidebar](https://github.com/vercel/eve/releases/tag/eve%400.22.4)
"while its API stabilizes," which is a vendor telling you not to build on it yet.

### Identity across deployments

[`eve@0.27.6`](https://github.com/vercel/eve/releases/tag/eve%400.27.6)
(2026-07-25) added `defineRemoteAgent({ forwardPrincipal: true })`, which sends
the dispatching turn's session principal as metadata only, never tokens, and the
receiving deployment opts in through `eveChannel({ trustedForwarders })`. A
receiver that refuses the forwarder "rejects with 403 and the dispatch fails
instead of silently downgrading to the calling service's identity." Hard failure
rather than quiet downgrade is the right default for anyone attributing agent
actions to a real person. AI Gateway OIDC readiness via a Vercel token resolver
remains the credential path, and it remains Vercel-shaped.

*Findings: `2026-06-17-eve-ai-gateway-oidc`.*

### Cost

Two straight cost fixes with numbers attached.
[`eve@0.22.2`](https://github.com/vercel/eve/releases/tag/eve%400.22.2)
(2026-07-09) corrected Anthropic prompt caching that placed the final cache
breakpoint one message too early: fresh tool results were billed as uncached
input every turn and only entered the cache on the following request, "capping
the effective cache hit rate near 50%."
[`eve@0.27.0`](https://github.com/vercel/eve/releases/tag/eve%400.27.0)
(2026-07-21) extended cache-point detection to Anthropic models served through
`@ai-sdk/amazon-bedrock`, which previously "fell through to no caching." If you
ran tool-loop-heavy eve agents before those dates, roughly half your input tokens
were billed at full price, and all of them on the Bedrock path.

## Posture

### Capability lens

Eve's bet is unchanged and it is now better executed: a portable, file-backed
agent definition over a durable runtime. What the window added is the control
half of durability. A run can be paused for a human, cancelled from an HTTP
endpoint, cancelled through the delegation tree, and resumed after a crash, and
none of those settle as failures. That combination is rare, and it is the reason
eve stays on the watchlist despite everything in the section above.

*Findings: `2026-06-17-eve-initial-public-release`,
`2026-06-17-eve-filesystem-first-agent-model`,
`2026-06-17-eve-durable-execution-workflow-sdk`,
`2026-06-17-eve-multi-backend-sandbox`.*

### Accessibility lens

The ceiling is still TypeScript fluency: `agent.ts`, typed tools, and a project
layout assume a developer. The floor is still lowered by the file-backed model --
you can read an agent instead of tracing it. The practical cost this window was
upgrade tax: 34 releases in 25 days, with a required interface change in `0.20.0`
and a removed configuration key in `0.23.0`. Fast shipping and stable APIs are
not the same virtue, and eve has chosen the first.

*Findings: `2026-06-17-eve-initial-public-release`,
`2026-06-17-eve-filesystem-first-agent-model`.*

### Governance lens

This is where the profile changed. Eve still ships more authority surface than
most harnesses: a human gate on tool calls, a budget gate with a root-anchored
quota tree, approver identity bound to the person who clicked, cancellation that
propagates through delegation, an extension boundary enforced by types, and
principal forwarding that fails closed with a 403.

And inside 25 days, four of those controls did not do what they described. The
honest formulation is that eve's governance is unusually ambitious and was, this
window, unusually unfinished -- and that the second fact is only visible because
eve writes down what it repaired and ships it on a public tag. A vendor with the
same defects and quieter release notes would look cleaner in every table we
publish. Do not read the count of fixes as a count of eve's failures relative to
the field; read it as the cost of eve being legible.

The residual is the part an operator carries. Eve tells you a gate exists. It
cannot tell you the gate binds, and this window is the proof that the vendor's
own belief on that question can be wrong for fifteen days at a time.

*Findings: `2026-06-17-eve-hitl-approval-gates`,
`2026-06-17-eve-multi-backend-sandbox`,
`2026-06-17-eve-fast-beta-velocity`.*

## Open questions

What this window answered, so it stops being asked:

- **What the approval surface looks like end to end.** Answered, partly by
  feature and partly by defect. `callId` binds a record across proposal,
  rejection, and execution; Teams and Slack cards bind to the clicking user;
  denials emit as `rejected` and now render as denied in the dev TUI; stale
  answers arrive as a new user message rather than as authorization. The surface
  is real and it was incomplete in four places until this window closed them.
- **Whether the platform side ships controls you can actually run.** Answered
  in the affirmative on channel and in the negative on enforcement. The build is
  the build. The gate was not the boundary.
- **Whether the rapid cadence had settled.** No. It accelerated to 34 releases in
  25 days, still with breaking changes on minors.

Still open:

- Now that four gate defects have been found in one window, what is the actual
  test surface? Eve has no published conformance test or authority test suite an
  operator can run to confirm a denial binds in their own deployment. Absent
  that, "verify it yourself" means writing the harness yourself.
- Does the structural-invariant instinct from `0.23.0` extend? The budget tree,
  the approval lifetime, and the channel-context ordering are all still policy
  and code, not shape. Which of them could be an invariant instead?
- What does the Workflow SDK persist across a crash or a human pause, where, and
  for how long, and does that constrain where eve agents can be hosted and
  recovered?
- How much of eve runs cleanly off Vercel's own hosting, given the
  Vercel-resolver-shaped credential path and the Vercel sandbox backend?
- When do mounted extensions and remote principal forwarding leave the vendor's
  own instability warning, and what is the review posture for a third-party
  extension in the meantime? The type-system fence is a real boundary; the supply
  chain around it is not addressed.
- Why did none of the four gate repairs get an advisory, a severity, or a
  callout? The OpenAPI `eval()` path in `0.22.3` is the sharpest case: an
  RCE-class fix delivered as a patch-release bullet.

## What to watch next

- **Whether a fifth gate defect appears.** Four in one window is either a
  clustered clean-up of a known-shaky surface or the visible part of a longer
  tail. The next window distinguishes them, and it is the single question that
  decides eve's posture here.
- **Whether the knob-deletion pattern repeats.** One structural replacement is an
  anecdote. A second would make it a design philosophy worth naming.
- **Whether the channel gap stays at zero** as the project grows and the pace of
  34 releases per 25 days becomes unsustainable. The discipline is currently
  eve's strongest claim on an operator's trust.
- **Cancellation semantics under load**: `turn.cancelled` propagating cleanly
  through nested and remote subagents is a strong claim, and remote hops plus
  principal forwarding are the least-tested part of it.
- **Whether an API stabilization signal arrives** -- a 1.0, a supported-version
  policy, or an end to removed keys on minor versions.

## Profile hygiene

This profile follows the discipline in `METHOD.md`: every concrete claim in the
prose carries an inline source link, and posture sections cite finding IDs when
naming a specific feature or behavior change.

Note on this revision. The 2026-07-02 to 2026-07-27 material is carried in prose
with pinned release-tag receipts and is not registered in the `claims:` block;
that block continues to hold the launch-window register from 2026-06-17, whose
architectural claims (filesystem-first layout, durable execution, the approval
gate as a primitive, multi-backend sandbox) still hold at `eve@0.27.6`. Eve
publishes tagged GitHub Releases with per-release notes, so version-level claims
are cited at `release_note` precision against the release tag and architectural
claims at `official_docs` precision against the docs. Every release cited here is
a non-draft, non-prerelease GitHub Release targeting `main`, so the channel for
all of it is tagged-release. Eve remains a public beta and moves fast; re-verify
against the current release.
