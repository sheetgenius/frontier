---
schema_version: bitter.frontier_harvest.v0
provider: eve
label: Eve
owner: Vercel
repo: https://github.com/vercel/eve
tier: 2
window: 2026-07-02..2026-07-27
run: 2026-07-27-weekly-digest-2026-07-02_2026-07-27-frontier-v0
primary_receipt_surface: github_releases
channels_present: [tagged-release, main-unreleased]
window_volume: 34 tagged GitHub Releases in window (eve@0.18.2 .. eve@0.27.6); main 3 commits ahead of the last tag, all docs-only
---

# Harvest -- eve (primary sources)

Quoted release text below is reproduced faithfully in wording, with punctuation
normalized to ASCII per house style.

## Window and channel resolution

Eve published **34 tagged GitHub Releases** between 2026-07-02 and 2026-07-25,
from `eve@0.18.2` to `eve@0.27.6`. Every one is a non-draft, non-prerelease
GitHub Release targeting `main`, so the channel for every finding below is
**tagged-release** unless stated otherwise.

Dates are taken from the GitHub API `published_at` ISO timestamps, not rendered
HTML. Every commit cited was confirmed to be an ancestor of the tag it is
attributed to via `GET /repos/vercel/eve/compare/<commit>...<tag>` returning
status `ahead` (tag ahead of commit == tag contains commit).

- Prior digest baseline closed at `eve@0.19.0`. `eve@0.18.2` (2026-07-02) and
  `eve@0.19.0` (2026-07-02) land on the window's first day and were already
  covered; they are listed for continuity only.
- **main-unreleased is effectively empty.** `main`
  (`632605f097c583e6667578a9b296c334f69e9121`, 2026-07-27) is exactly 3 commits
  ahead of `eve@0.27.6`, and all 3 are docs-only (`docs: explain agent loop and
  sandbox boundary (#1228)`, `Set eve.dev as the project homepage (#1225)`,
  `fix(docs): remove duplicate mobile GitHub link (#1221)`). Nothing material is
  sitting unreleased on eve's main.
  - Receipt: https://github.com/vercel/eve/compare/eve%400.27.6...632605f097c583e6667578a9b296c334f69e9121

---

# EVIDENCE THAT CUTS AGAINST THE HOUSE THESIS

The first four sections are the counter-current material. Eve is the
publication's governance-first counterexample, and this window it shipped a
sustained run of fixes to gates that **did not bind, did not display, or did not
survive a restart**. Every one is a governance defect found and fixed inside the
platform that made human-in-the-loop the load-bearing primitive.

## 1. A declined human budget gate did not bind -- the parent simply retried the child against a fresh quota

**What changed.** On 2026-07-07, `eve@0.21.0` introduced a session token-budget
gate: hitting a session token limit stops failing interactive sessions and
instead pauses for a human. The same release established a quota tree with an
explicit guarantee:

> Delegated subagent sessions now receive a share of the parent's remaining
> token quota at dispatch time -- the remainder split across the batch's
> delegated calls -- instead of a fixed 5M input-token cap, and a completed
> child's usage counts against the parent's quota, so a delegation tree can
> never outspend the budget configured at its root.

On 2026-07-22, `eve@0.27.1` fixed the fact that the human "Stop" answer defeated
that guarantee:

> Declining a session token-budget prompt now cancels the in-flight turn cleanly
> (`turn.cancelled` -> `session.waiting`) instead of completing the session or
> surfacing an error to the delegating parent. Declining a delegated child's
> prompt cancels the whole turn tree from the root, **so the parent can no longer
> retry the child against a fresh quota share**, and stale answers to budget
> prompts are dropped instead of being shown to the model.

**Receipts (pinned).**
- https://github.com/vercel/eve/releases/tag/eve%400.21.0 (changeset `d408d0b`, `da2ec6c`)
- https://github.com/vercel/eve/releases/tag/eve%400.27.1 (changeset `dd1ba23`)

**Dates.** 2026-07-07 (gate introduced), 2026-07-22 (bypass closed).
**Channel.** tagged-release, both.
**Ancestry.** `dd1ba23` confirmed ancestor of `eve@0.27.1`.

**Operator consequence.** For 15 days a human who answered "Stop" to a delegated
child's budget prompt did not stop the spend -- the parent retried the child on a
fresh quota share, so the "can never outspend the root budget" guarantee was
defeated by the human gate itself, and the operator's denial read as a hiccup
rather than a boundary.

## 2. Denied tool approvals were rendered as successful in the operator's own console

**What changed.** `eve@0.26.1` (2026-07-20) reworked the `eve dev` TUI. Inside a
large rendering changeset sits a one-clause correctness fix: the TUI

> shows rejected tool approvals as denied instead of successful.

**Receipt (pinned).** https://github.com/vercel/eve/releases/tag/eve%400.26.1
(changeset `1f04ff7`; confirmed ancestor of `eve@0.26.1`).

**Date.** 2026-07-20.
**Channel.** tagged-release.

**Operator consequence.** Before this release the local console told an operator
that a tool call they had personally denied had succeeded -- the authority
decision was correct in the runtime but inverted on the only surface a human was
watching, which is an audit-trail failure at the exact point the platform sells
as its differentiator.

## 3. A stale approval could still authorize the tool call it no longer matched

**What changed.** `eve@0.25.0` (2026-07-17):

> Deliver stale HITL responses -- answers to a question or approval that is no
> longer pending -- as a new user message, letting the model decide whether the
> old selection still matters. **A stale approval never authorizes the earlier
> tool call.**

**Receipt (pinned).** https://github.com/vercel/eve/releases/tag/eve%400.25.0
(changeset `6a5a36a`; confirmed ancestor of `eve@0.25.0`).

**Date.** 2026-07-17.
**Channel.** tagged-release.

**Operator consequence.** The sentence is written as a new guarantee, which means
it was not one before: a late click on an expired approval card was a live
authorization signal, so the binding between "the human approved *this* call" and
"*this* call ran" was time-ambiguous until 2026-07-17.

## 4. Approving a tool did not run it on several channels

**What changed.** `eve@0.24.2` (2026-07-14):

> Tool approvals now resolve before channel context is added to the next model
> request, so approving a tool from channels such as Linear executes the tool
> instead of leaving a dangling tool call.

**Receipt (pinned).** https://github.com/vercel/eve/releases/tag/eve%400.24.2
(changeset `2c12460`; confirmed ancestor of `eve@0.24.2`).

**Date.** 2026-07-14.
**Channel.** tagged-release.

**Operator consequence.** The gate failed open in the other direction -- a human
granted authorization and the work silently did not happen -- so on affected
channels the approval surface was unreliable in both directions within the same
window.

---

# THE REST OF THE WINDOW

## 5. The configurable subagent depth cap was tightened, then deleted and replaced with a structural constraint

**What changed.** Two moves, three days apart.

- `eve@0.22.5` (2026-07-10): "`limits.maxSubagentDepth` now defaults to `1`
  instead of `3`. Agents that rely on deeper default delegation should set
  `limits: { maxSubagentDepth: 3 }` (or another value) explicitly."
- `eve@0.23.0` (2026-07-13): "Make the built-in `agent` tool root-only, so copies
  created by it cannot delegate recursively. Declared subagents can still call
  their own nested subagents, and **`limits.maxSubagentDepth` has been removed**."

**Receipts (pinned).**
- https://github.com/vercel/eve/releases/tag/eve%400.22.5 (changeset `a325195`)
- https://github.com/vercel/eve/releases/tag/eve%400.23.0 (changeset `e5d142f`)

**Dates.** 2026-07-10, 2026-07-13.
**Channel.** tagged-release, both. `e5d142f` confirmed ancestor of `eve@0.23.0`.

**Operator consequence.** Eve concluded that a tunable depth number was the wrong
control and replaced it with a structural invariant nobody configures -- a
governance-first platform deleting a governance knob because the architecture
enforces the property better than the policy did.

## 6. Turn cancellation: announced as absent, then completed inside the window

**What changed.** A four-step arc that closes a "coming soon" the vendor wrote
down explicitly.

- `eve@0.20.0` (2026-07-05): end-to-end cooperative `AbortSignal` through model
  calls, retries, recovery, compaction, and tool execution. Stated plainly:
  "This is the lowest layer of turn cancellation -- **no trigger exists yet, so
  runtime behavior is unchanged until the cancellation API ships**."
- `eve@0.24.4` (2026-07-15): "Turns are now cancellable" via a durable cancel
  hook settling as a new `turn.cancelled` stream event, "never as a failure."
  Still deferring: "The HTTP cancellation API ships in a following release."
- `eve@0.24.5` (2026-07-16): "Added `POST /eve/v1/session/:sessionId/cancel`",
  plus cancellation of active local, nested, and remote subagent turns when the
  parent is cancelled.
- `eve@0.24.6` (2026-07-16), `eve@0.27.2` (2026-07-23), `eve@0.27.4`
  (2026-07-24): custom channel routes and `ClientSession` gain `cancel()`;
  thread-scoped cancellation in Slack; the dev TUI gains queueing and Esc-to-steer
  cooperative cancellation.

**Receipts (pinned).**
- https://github.com/vercel/eve/releases/tag/eve%400.20.0 (changeset `c233a6a`)
- https://github.com/vercel/eve/releases/tag/eve%400.24.4 (changeset `159d674`)
- https://github.com/vercel/eve/releases/tag/eve%400.24.5 (changeset `20cd9a1`, confirmed ancestor)
- https://github.com/vercel/eve/releases/tag/eve%400.24.6 (changeset `b97f1d1`)
- https://github.com/vercel/eve/releases/tag/eve%400.27.4 (changeset `bbba073`)

**Dates.** 2026-07-05 through 2026-07-24.
**Channel.** tagged-release throughout.

**Operator consequence.** Eve is the rare case where a documented "not yet
wired" shipped complete in 11 days, and it gave operators a stop button that
settles as `turn.cancelled` rather than a failure -- so aborting a run no longer
pollutes failure metrics or trips parent error handling.

## 7. Approver identity became bindable, and approvals became traceable across a delegation chain

**What changed.** Three separate identity/audit improvements to the approval
surface.

- `eve@0.20.0` (2026-07-05): "`ToolContext` and `ApprovalContext` now expose
  `callId`, the tool call id carried by the call's stream events, so
  approval-gated tools can key records to one identity across proposal,
  rejection, and execution."
- `eve@0.22.1` (2026-07-08): Slack HITL prompts move to card blocks and
  "answered-card updates [stay] scoped to the answered request so sibling batched
  approval buttons remain clickable"; separately, authorization prompts from
  local subagents now surface "on the parent channel, including through nested
  delegation chains, while keeping the authorization callback scoped to the child
  session."
- `eve@0.24.0` (2026-07-14): Teams HITL cards fixed to show tool arguments and to
  "authorize submissions as the Teams user who clicked the card."

**Receipts (pinned).**
- https://github.com/vercel/eve/releases/tag/eve%400.20.0 (changeset `f3a05c5`)
- https://github.com/vercel/eve/releases/tag/eve%400.22.1 (changesets `a3efd4b`, `3c6abbf`)
- https://github.com/vercel/eve/releases/tag/eve%400.24.0 (changeset `d194243`)

**Dates.** 2026-07-05, 2026-07-08, 2026-07-14.
**Channel.** tagged-release, all three.

**Operator consequence.** Only from 2026-07-14 does a Teams approval bind to the
identity of the human who actually clicked it, which is the difference between an
audit trail and a log line -- and the batched-approval fix means a reviewer
answering one request no longer disables the buttons on its siblings.

## 8. A remote-code-execution path in network-fetched OpenAPI specs was closed

**What changed.** `eve@0.22.3` (2026-07-09) hardened frontmatter parsing:

> All frontmatter parsing now runs through a single safe-by-default helper with
> gray-matter's code-capable engines disabled, so a `---js` / `---javascript`
> fence throws instead of being `eval()`d. Previously only authored markdown
> (skills, schedules, instructions) was hardened; the eval YAML loader and the
> OpenAPI spec loader used gray-matter's defaults and would execute such a fence.
> **This closes that path for OpenAPI specs, which are fetched over the network.**

The same changeset requires `https` for OpenAPI spec URLs and the resolved base
URL (plain `http` allowed only for loopback during local development).

**Receipt (pinned).** https://github.com/vercel/eve/releases/tag/eve%400.22.3
(changeset `89f13e0`; confirmed ancestor of `eve@0.22.3`).

**Date.** 2026-07-09.
**Channel.** tagged-release.

**Operator consequence.** Any operator who pointed eve at a third-party OpenAPI
spec URL before 2026-07-09 was one hostile `---js` fence away from code execution
in the agent process, and there is no CVE or advisory -- the fix is a patch-release
bullet, so upgrade urgency is invisible unless you read the changeset.

## 9. Cross-deployment principal forwarding shipped with an explicit trust fence

**What changed.** `eve@0.27.6` (2026-07-25):

> `defineRemoteAgent({ forwardPrincipal: true })` sends the dispatching turn's
> session principal (metadata only -- never tokens) on the create-session
> request, and the receiving deployment opts in with
> `eveChannel({ trustedForwarders })`, a predicate over the verified transport
> forwarder. Accepted forwarding replaces the session principal so per-user
> connections, local subagents, and chained remote hops see the original user; a
> receiver that refuses the forwarder (or accepts no forwarded principal)
> **rejects with 403 and the dispatch fails instead of silently downgrading to the
> calling service's identity**.

**Receipt (pinned).** https://github.com/vercel/eve/releases/tag/eve%400.27.6
(changeset `ad0dfa7`; confirmed ancestor of `eve@0.27.6`).

**Date.** 2026-07-25.
**Channel.** tagged-release.

**Operator consequence.** End-user identity now survives a hop between
deployments without passing tokens, and the failure mode is a hard 403 rather
than a quiet downgrade to service identity -- the right default for anyone
attributing agent actions to a real person.

## 10. A prompt-caching bug had been capping effective cache hit rate near 50 percent

**What changed.** `eve@0.22.2` (2026-07-09):

> Fixed Anthropic prompt caching placing the final cache breakpoint one message
> too early. Fresh tool results were billed as uncached input every turn and only
> entered the cache on the following request, capping the effective cache hit
> rate near 50%; the breakpoint now sits on the last message of each request, so
> agentic tool loops get near-full prefix hits.

Related: `eve@0.27.0` (2026-07-21) extended cache-point detection to Anthropic
models served through `@ai-sdk/amazon-bedrock`, which previously "fell through to
no caching."

**Receipts (pinned).**
- https://github.com/vercel/eve/releases/tag/eve%400.22.2 (changeset `4da4d86`)
- https://github.com/vercel/eve/releases/tag/eve%400.27.0 (changeset `707de7f`)

**Dates.** 2026-07-09, 2026-07-21.
**Channel.** tagged-release, both.

**Operator consequence.** This is a straight cost finding with a number attached:
tool-loop-heavy eve agents were paying full input price on roughly half the
tokens they should have been reading from cache, and Bedrock-served Anthropic
users were paying full price on all of them until 2026-07-21.

## 11. Mounted extensions: a new distribution surface with an authority fence

**What changed.** Extensions became a packaging and distribution primitive across
four releases.

- `eve@0.22.3` (2026-07-09) introduced mounted extensions: tools, connections,
  skills, instructions, and hooks packaged as a reusable package mounted under
  `agent/extensions/`, composing under a `<namespace>__` prefix. The authority
  fence is stated in the same changeset: "an extension **cannot declare a
  sandbox, agent config, schedules, or limits, or mount other extensions**."
- `eve@0.22.4` (2026-07-10) deliberately kept the guide out of the docs sidebar
  "while its API stabilizes."
- `eve@0.22.5` (2026-07-10) added `eve extension init` / `eve extension build`.
- `eve@0.25.0` (2026-07-17) moved extensions to separate source and dist roots
  with dist-only publication and capability compatibility metadata.

**Receipts (pinned).**
- https://github.com/vercel/eve/releases/tag/eve%400.22.3 (changeset `fdf56ef`)
- https://github.com/vercel/eve/releases/tag/eve%400.22.4 (changeset `edc93cc`)
- https://github.com/vercel/eve/releases/tag/eve%400.25.0 (changeset `b9bb8b2`)

**Dates.** 2026-07-09 through 2026-07-17.
**Channel.** tagged-release. Note the docs surface is deliberately hidden, so
treat the API as **unstable by the vendor's own statement** despite shipping in
tagged releases.

**Operator consequence.** Third-party eve capabilities are now installable from
npm, and the security-relevant detail is that a mounted extension is structurally
barred from redefining the sandbox, limits, or schedules -- the trust boundary is
in the type system, not in review guidance.

## 12. Sandbox lifecycle and session-scoped workspace persistence

**What changed.**

- `eve@0.20.0` (2026-07-05): sandboxes are stopped on `SIGTERM`/`SIGINT` for
  self-hosted production servers across all backends. **Breaking change** for
  custom sandbox backends: "`SandboxBackendHandle` gains a required `shutdown()`
  and the unused `dispose()` is removed."
- `eve@0.22.1` (2026-07-08): "Session sandboxes are now keyed per durable session
  instead of per deployment, so redeploying no longer discards a session's
  `/workspace` state."
- `eve@0.25.0` (2026-07-17) and `eve@0.21.1` (2026-07-07) closed remaining leak
  paths for dev microsandboxes and one-shot eval runs.

**Receipts (pinned).**
- https://github.com/vercel/eve/releases/tag/eve%400.20.0 (changeset `6f9364a`)
- https://github.com/vercel/eve/releases/tag/eve%400.22.1 (changeset `210f097`)
- https://github.com/vercel/eve/releases/tag/eve%400.21.1 (changeset `0b42ba1`)

**Dates.** 2026-07-05, 2026-07-07, 2026-07-08.
**Channel.** tagged-release, all.

**Operator consequence.** Orphaned sandbox VMs and containers outliving the
server were a real billing and isolation leak before 2026-07-05, and anyone
maintaining a custom sandbox backend has a required interface change to make on
the 0.20.0 upgrade.

---

## Cadence note for the digest

Eve shipped 34 tagged releases in 25 days -- roughly one every 17 hours -- while
carrying **zero** material work on main at the window close. Whatever else the
0.19 -> 0.27 line shows, eve's "released is not merged" gap is essentially nil,
which is the sharpest available contrast with Agent Flywheel (73 commits, no tag)
and Flue (a whole architectural rewrite, no tag) in the same window.
