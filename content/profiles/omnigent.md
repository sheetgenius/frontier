---
schema_version: bitter.frontier_profile.v0
profile_id: omnigent
label: Omnigent
owner: omnigent-ai
source_contract: sources/omnigent.yml
homepage: https://omnigent.ai
docs: https://omnigent.ai/docs
tagline: "The first meta-harness on this watchlist: a governance layer over the coding agents it drives, whose spend cap is enforced before the call and is a downgrade gate rather than a ceiling."
compared_with:
  - paperclip
  - openhands
  - hermes-agent
repo: https://github.com/omnigent-ai/omnigent
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-08-20
last_full_review: 2026-08-03
claims:
  - id: v0-10-0-multi-sandbox-shared-editor-approval
    finding_id: 2026-08-20-omnigent-v0-10-0-adds-multi-sandbox-and-keeps-shared-editor-approval
    last_verified: 2026-08-20
    status: active
  - id: worktree-guard-inert-on-windows
    finding_id: 2026-08-03-omnigent-worktree-guard-inert-on-windows-runners
    last_verified: 2026-08-03
    status: active
  - id: spend-cap-is-a-downgrade-gate
    finding_id: 2026-08-03-omnigent-spend-cap-is-a-downgrade-gate-not-a-ceiling
    last_verified: 2026-08-03
    status: active
  - id: cost-gate-fails-closed-on-unpriced-models
    finding_id: 2026-08-03-omnigent-spend-cap-is-a-downgrade-gate-not-a-ceiling
    last_verified: 2026-08-03
    status: active
  - id: router-picks-harness-and-model
    finding_id: 2026-08-03-omnigent-v070-routing-picks-the-harness
    last_verified: 2026-08-03
    status: active
  - id: stateful-policies-shipped-in-tag
    finding_id: 2026-08-03-omnigent-stateful-policies-claim-checks-out-in-the-tag
    last_verified: 2026-08-03
    status: active
---

# Omnigent

Every other project on this watchlist is a harness. Omnigent sits above them:
an open-source meta-harness that orchestrates Claude Code, Codex, Cursor and Pi,
shipping policies, spend caps and access controls on top of harnesses that
already carry their own permission systems.

That stacking is why it is here. This publication's standing argument is that a
control which exists only as an intention is not a control, and a meta-harness is
the hardest version of that test, because two governance layers now have a claim
on the same action.

## Where it stands, 2026-08-03

**Channel.** Pre-1.0 and shipping continuously. `v0.7.0` was published
2026-07-27T22:40Z and is the newest tag; more than a hundred commits landed on
the default branch in the following week. The tag-to-tag diff carries far more
than the release note, so anything read here is read at a tag ref rather than on
main unless stated.

**Its spend cap enforces before the call, and is not a ceiling.** Read at
`v0.7.0`, `cost_budget` gates cumulative session spend at the request phase --
"before the LLM turn, so text-only turns are budgeted too" -- and at the
tool-call phase, "the point a native `PreToolUse` hook can block before the
action runs." That settles the question the source contract opened with: it
enforces rather than reconciles.

The catch is what `max_cost_usd` does when reached. It "forces a model
downgrade" rather than stopping the session, denying only while the session runs
a model in the operator-supplied `expensive_models` list, and the module says so
directly: "the budget becomes a 'downgrade gate,' not a hard stop." An operator
who sets the number expecting spend to end there has configured the point at
which the work continues more cheaply.

The gate does close its own worst failure mode. A model with no catalogue pricing
never writes a cost to the session, which would score it at zero and let it run
unbounded; instead the gate fails closed when token usage is present and priced
cost is absent, denying and asking the operator to switch to a priced model. It
also notes that a single expensive turn can overshoot between checks.

**Its only write confinement for unsandboxed workers did not bind on Windows.**
`worktree_guard` reasoned in POSIX terms but normalised with `os.path`, which is
`ntpath` on Windows and rewrites forward slashes to backslashes, so the
absolute-path arm was inert on a Windows runner: `/etc/passwd` cleared the
backslash guard, became `\etc\passwd`, and returned ALLOW, as did paths into
another worker's tree. Filed 2026-08-01, fixed 2026-08-03 with `posixpath`
normalisation, a drive-letter arm, and four ALLOW-to-DENY cases pinned by tests
run on Windows 11. The fix is on main; `v0.7.0` predates it.

**Its router now picks the harness.** `v0.7.0` ships an "Auto - smart routing"
option that "lets the router pick both harness and model from your task", and
smart routing "activates automatically from your `llm:`/`routing:` config (no
`OMNIGENT_SMART_ROUTING` env var)". On a meta-harness this is the governance
question in shipped form: the layer an action lands under can change without the
operator choosing it per action.

**A vendor claim that checked out.** Its official account described stateful
policies making dynamic session-context decisions at server, agent and session
level, with a Session Risk Score built in. `policies/builtins/risk_score.py` is
present at the `v0.7.0` tag. The claim was accurate and shipped.

## Operator posture

Use it as the coordination and spend layer it is, and read its policy modules
rather than its parameter names. `max_cost_usd` needs `expensive_models` beside
it to mean anything. If you run unsandboxed implementer worker specs on Windows,
run main or wait for the next tag before trusting worktree confinement.

Do not treat a finding observed through Omnigent as a finding about the harness
underneath. Adapter lag and policy-layer defects belong to the wrapper.

## Open questions

- When an Omnigent policy and the wrapped harness's own permission system
  disagree, which one refuses? Still no public answer, and it remains the most
  interesting open item on the watchlist.
- Does the offloadable dictation worker send audio off the operator's
  infrastructure? `v0.7.0` says audio "never leaves your server" while describing
  the transcription engine as offloadable to a remote worker.
- What does the cost gate do when `expensive_models` is empty or does not match
  the running model?
- Sandboxed Linux agents now trust CA roots under the system `capath` to reach
  hosts behind a corporate MITM proxy. The reason is stated; the blast radius is
  not.

## Comparison

Closest to **Paperclip**, and the contrast is the useful part: Paperclip manages
an organisation of agents it owns, Omnigent orchestrates agents it does not.
**OpenHands** and **Hermes Agent** also position above a single coding loop, but
both ship the loop as well. Omnigent is the only source here whose entire product
is governance over somebody else's agent.
