---
schema_version: bitter.frontier_profile.v0
profile_id: eve
label: eve
owner: Vercel
source_contract: sources/eve.yml
homepage: https://eve.dev
docs: https://eve.dev/docs
tagline: "Vercel's durable agent framework ships everything it merges, including its approval bugs. The floor for a shared channel is 0.52.5, and 0.59.1 lets a model do the approving."
repo: https://github.com/vercel/eve
surface_class: open_source_releases
evidence_floor: release_note
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: queue-auth
    finding_id: 2026-09-21-eve-cross-principal-authority-queued-messages-from-different-users-ran-under-the-last-sender
    last_verified: 2026-09-23
    status: active
  - id: byok-key
    finding_id: 2026-09-21-eve-credential-exposure-byok-provider-key-served-from-eve-v1-info-chatgpt-login-stored-in-plai
    last_verified: 2026-09-23
    status: active
  - id: auto-approval
    finding_id: 2026-09-21-eve-auto-a-model-can-now-approve-tool-calls
    last_verified: 2026-09-23
    status: active
  - id: approval-integrity-once-keys
    finding_id: 2026-09-21-eve-approval-integrity-three-ways-an-approval-could-authorize-the-wrong-thing-closed-in-window
    last_verified: 2026-09-23
    status: active
  - id: queue-binds-at-0-63-0
    finding_id: 2026-09-21-eve-carry-forward-turnpolicy-queue-binds-on-slack-and-custom-channels-at-0-63-0-default-is-sti
    last_verified: 2026-09-23
    status: active
  - id: trace-content-defaults
    finding_id: 2026-09-21-eve-trace-content-defaults-flipped-four-times-0-55-0-recorded-anonymous-content-for-a-day
    last_verified: 2026-09-23
    status: active
  - id: deployed-self-modification
    finding_id: 2026-09-21-eve-self-modification-is-no-longer-development-only-a-deployed-mode-edits-a-git-checkout-and
    last_verified: 2026-09-23
    status: active
  - id: chat-channel-approvals
    finding_id: 2026-09-21-eve-chat-channel-approvals-private-slack-dm-routing-telegram-and-chat-sdk-hitl-pending-approva
    last_verified: 2026-09-23
    status: active
  - id: breaking-execution-model
    finding_id: 2026-09-21-eve-breaking-capability-moves-persistent-subagents-by-default-one-workflow-sessions-workflow
    last_verified: 2026-09-23
    status: active
  - id: npm-versions-without-tags
    finding_id: 2026-09-21-eve-channel-facts-npm-published-three-versions-with-no-git-tag-latest-is-0-64
    last_verified: 2026-09-23
    status: active
  - id: turnpolicy-queue-did-not-bind-until-0-39-3
    finding_id: 2026-08-20-eve-0-39-3-restores-turnpolicy-queue-after-silent-steer-fallback
    last_verified: 2026-09-23
    status: active
  - id: duplicate-pending-approvals-closed-in-0-39-1
    finding_id: 2026-08-20-eve-0-39-1-stops-duplicate-tool-calls-while-approval-pending
    last_verified: 2026-08-20
    status: active
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
    last_verified: 2026-09-23
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
  use_for: "TypeScript teams who want an agent defined as a directory of reviewable files, running on a durable runtime where approvals, human questions and subagents survive a crash or a redeploy. Also the clearest reference on the watchlist for reading what broke: eve ships what it merges, so its patch notes are the record."
  avoid_for: "Any version before 0.52.5 on a channel more than one person can talk to. `auto()` on a tool whose wrong call you cannot undo. Anything that needs a stable API: sessions, subagents and background tools all broke on minor versions in September."
  watch_next: "Whether 0.64.0's relaxed local self-modification guard stays; whether eve ever issues an advisory for a security fix; whether `auto()` gets a documented false-negative story or a local evaluator option."
---

# eve

eve is Vercel's open-source TypeScript framework for durable agents, and it
is on this watchlist because it treats human approval as a runtime primitive
rather than the caller's problem. An agent is a directory of files you can
read in review. Runs survive crashes, redeploys and human pauses on Vercel's
Workflow SDK. And eve ships everything it merges, so when its gates break,
the patch notes say so on the day.

## Where it stands, 2026-09-21

**Channel.** Pin
[eve@0.63.0](https://github.com/vercel/eve/releases/tag/eve%400.63.0), the
last of 47 tags in the four weeks to 19 September, each descending cleanly
from the one before. Three npm versions (0.51.1,
0.52.0, 0.52.1) were
[published with no git tag](https://www.npmjs.com/package/eve?activeTab=versions);
skip them, because there is no source to review. `eve@beta` is a stale
pre-launch line. Do not install it. eve publishes no security advisories;
every fix below arrived as an ordinary patch bullet.

**The floor is 0.52.5, and 0.56.0 is better.** This corrects our own earlier
advice. Two earlier issues told operators to set `turnPolicy: "queue"`, and
the setting does bind on Slack and custom channels
[at 0.63.0](https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/execution/session/input-queue.ts#L322-L331).
But until
[0.52.5](https://github.com/vercel/eve/pull/3172), queued messages from
different people in one thread were merged into a single turn and ran with the
last sender's user-scoped connections. Alice asks, Bob asks, and Alice's
request runs as Bob. Background subagents stayed bound to the right caller
only from 0.56.0. If you queued on a shared channel between 0.39.3 and 0.52.5,
audit what user-scoped connections did from those threads. Queue remains
opt-in per channel; the default is steer.

**Rotate the BYOK key.** Before 0.52.5, a deployment built on the BYOK
scaffold
[served the owner's provider API key](https://github.com/vercel/eve/pull/3203)
from `GET /eve/v1/info` to any caller the channel admitted, anonymous web chat
included. Upgrading does not un-copy a key.

**An approval could authorize the wrong call.** Before
[0.50.0](https://github.com/vercel/eve/pull/2923), approving one of several
pending calls that shared a `once()` key could silently approve the rest while
their cards were still open. Before 0.44.1, a redeploy with edited source
could replay a parked approval against a different tool. Before 0.52.2,
input-scoped keys on dynamic tools collapsed to tool-wide keys on replay. All
three are closed at 0.63.0.

**A model can now approve.**
[`auto()`](https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/human-in-the-loop.md),
new in 0.59.1, asks an evaluation model to call each tool call `clear` or
`caution`, and only caution or a failed review reaches a person. Failures fail
closed to you. Two things the docs say plainly and the pitch does not: the
tool input leaves your deployment for the evaluator's provider, and a tool
with no `approval` field behaves like `never()`. Use it where a wrong "clear"
is recoverable. Your attention moves from every call to the classifier's
misses, which nobody reports to you.

**A parked approval is not a brake.** Since 0.45.0, tools stay available in
follow-up turns while an earlier approval waits. If you relied on a pending
card to pause the agent, add an explicit block. For Slack, 0.54.5's
`approvalChannel` can send approval requests to the requester's DM and fails
closed if it cannot resolve who that is.

**Traces are a policy you must set.** The default for what content lands in
hosted traces changed four times in the window, and
[0.55.0 recorded anonymous conversations](https://github.com/vercel/eve/pull/3365)
for about a day. If you ran it with anonymous channels, purge that interval. A
provider registered with `capture: "content"` gets everything regardless of
audience.

**The agent can edit its own repo.** Self-modification now has a
[deployed mode](https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/self-modification/mode.ts),
off unless you configure it. It edits a disposable checkout and opens a draft
pull request for principals your `authorize` callback admits. It cannot merge
or deploy. That callback and the GitHub credential's scope are the whole
boundary, so keep branch protection on.

**Do not roll back across 0.57.0.** Sessions now run inside one owning
workflow, and the
[release note](https://github.com/vercel/eve/releases/tag/eve%400.57.0) says
to retire live sessions before crossing that boundary. 0.63.0 removed
`TaskExec` and `postMessage`. This is a 0.x line and it behaves like one.

**The durable idea.** On 2026-07-13,
[eve@0.23.0](https://github.com/vercel/eve/releases/tag/eve%400.23.0)
deleted `maxSubagentDepth` and made the built-in agent tool root-only, so the
limit became a shape the system cannot take rather than a number it promises
to honor. Most of the defects above are promises the runtime did not keep.
The knob it deleted cannot have that bug.

## What is unresolved

- eve@0.64.0, published 2026-09-22, lets
  [any caller admitted to a dev server](https://github.com/vercel/eve/pull/3590)
  invoke local source editing; the PR says operators must now protect the
  server. Unpinned npm lands there. Stay on 0.63.0 or firewall `eve dev`.
- No conformance or authority test suite exists, so confirming that a denial
  binds in your deployment means writing the test yourself.
- How far eve runs off Vercel's hosting, given the Vercel-shaped credential
  path, is still unmeasured.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
