---
schema_version: bitter.frontier_profile.v0
profile_id: omnigent
label: Omnigent
owner: omnigent-ai
source_contract: sources/omnigent.yml
homepage: https://omnigent.ai
docs: https://omnigent.ai/docs
tagline: "A meta-harness that governs Claude Code, Codex and a dozen other agents it does not own, and that now answers some of their safety prompts for them."
compared_with:
  - paperclip
  - openhands
  - hermes-agent
repo: https://github.com/omnigent-ai/omnigent
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: policy-outage-falls-through
    finding_id: 2026-09-21-omnigent-governance-layering-on-policy-server-outage-native-claude-codex-tool-calls-now-defer-to
    last_verified: 2026-09-23
    status: active
  - id: bundle-advisories
    finding_id: 2026-09-21-omnigent-three-bundle-upload-advisories-published-2026-09-16-all-fixed-in-v0-14-0-by-one
    last_verified: 2026-09-23
    status: active
  - id: pre-answers-harness-prompts
    finding_id: 2026-09-21-omnigent-omnigent-now-answers-wrapped-harnesses-safety-prompts-and-flips-their-approval-routing
    last_verified: 2026-09-23
    status: active
  - id: shared-editor-approval-not-narrowed
    finding_id: 2026-09-21-omnigent-carry-forward-shared-editor-approval-did-not-narrow-adjacent-editor-powers-did-two-of-them
    last_verified: 2026-09-23
    status: active
  - id: spend-gate-before-next-call
    finding_id: 2026-09-21-omnigent-carry-forward-spend-caps-are-gated-before-the-next-call-on-already-reconciled-spend-the
    last_verified: 2026-09-23
    status: active
  - id: root-budgets-skip-native-descendants
    finding_id: 2026-09-21-omnigent-budgets-did-not-reach-native-descendants-in-any-in-window-tag-scheduled-task-caps-attach
    last_verified: 2026-09-23
    status: active
  - id: acp-result-fail-open-usage-flag
    finding_id: 2026-09-21-omnigent-carry-forward-acp-result-phase-fail-open-unchanged-usage-page-still-flag-gated
    last_verified: 2026-09-23
    status: active
  - id: policy-engine-hardening
    finding_id: 2026-09-21-omnigent-policy-engine-hardening-spawn-bounds-persist-sub-agents-enforce-their-own-guardrails-verdi
    last_verified: 2026-09-23
    status: active
  - id: v0-10-0-multi-sandbox-shared-editor-approval
    finding_id: 2026-08-20-omnigent-v0-10-0-adds-multi-sandbox-and-keeps-shared-editor-approval
    last_verified: 2026-08-20
    status: retired
  - id: worktree-guard-inert-on-windows
    finding_id: 2026-08-03-omnigent-worktree-guard-inert-on-windows-runners
    last_verified: 2026-09-23
    status: retired
  - id: v0-10-0-usage-page-off-parent-gates-unchanged
    finding_id: 2026-08-20-omnigent-v0-10-0-usage-page-off-parent-gates-unchanged
    last_verified: 2026-08-20
    status: retired
  - id: deny-tag-push-in-v0-10-0
    finding_id: 2026-08-20-omnigent-deny-tag-push-reaches-v0-10-0
    last_verified: 2026-09-23
    status: active
  - id: spend-cap-is-a-downgrade-gate
    finding_id: 2026-08-03-omnigent-spend-cap-is-a-downgrade-gate-not-a-ceiling
    last_verified: 2026-09-23
    status: active
  - id: cost-gate-fails-closed-on-unpriced-models
    finding_id: 2026-08-03-omnigent-spend-cap-is-a-downgrade-gate-not-a-ceiling
    last_verified: 2026-09-23
    status: active
  - id: router-picks-harness-and-model
    finding_id: 2026-08-03-omnigent-v070-routing-picks-the-harness
    last_verified: 2026-08-03
    status: active
  - id: stateful-policies-shipped-in-tag
    finding_id: 2026-08-03-omnigent-stateful-policies-claim-checks-out-in-the-tag
    last_verified: 2026-08-03
    status: active
stance:
  use_for: "Running several coding agents under one set of policies, sandboxes and spend gates, on v0.14.0, with each harness's own permission mode set as if Omnigent were absent."
  avoid_for: "Granting edit on a shared session whose runner is your workstation on any tag through v0.14.0; treating max_cost_usd as a ceiling; treating a root-session budget as covering native child sessions."
  watch_next: "Whether v0.15.0 (tagged 22 September) carries the editor shell-proxy and inherited-budget fixes as the PRs describe; whether shared-session approvals ever narrow below any editor; whether the docs, not only PR bodies, document which layer refuses."
---

# Omnigent

Everything else on this watchlist is a harness. Omnigent sits on top of them:
an open-source meta-harness that drives Claude Code, Codex, Cursor, Pi and
others, and lays its own policies, sandboxes and spend caps over harnesses
that already have permission systems of their own. That makes it the
sharpest test of whether a control that exists on paper binds in practice,
because two governance layers claim the same tool call.

The short read for 2026-09-21: install v0.14.0, because on every earlier tag
anyone who can upload an agent bundle to an unsandboxed runner can reach a
host shell. Do not hand out edit rights on a session your workstation runs.
Then assume the wrapped harness's
own permission mode is your last line, because Omnigent increasingly hands
decisions back to it or answers them for it.

## Where it stands, 2026-09-21

**Channel.** Four stable tags in the window, v0.11.0 through
[v0.14.0](https://github.com/omnigent-ai/omnigent/releases/tag/v0.14.0)
(15 September), none flagged prerelease. PyPI carries only stables; daily
`.dev` and rc tags exist on GitHub and nowhere an ordinary install looks.
CHANGELOG.md at v0.14.0 stops at v0.13.0, so the release page is the only
place its notes live. v0.15.0 landed on 22 September, after this read, and
has not been checked here.

**Upgrade first.** Three advisories published 16 September, all fixed by one
[PR in v0.14.0](https://github.com/omnigent-ai/omnigent/pull/7457), all
needing an authenticated user who can upload an agent bundle. The critical
one,
[GHSA-598r](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-598r-29w2-g93q),
let a terminal's working directory escape the workspace to an unconfined host
shell when `sandbox.type` is `none`.
[GHSA-q5jc](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-q5jc-8hqr-9hm4)
is the uncomfortable one: the policy-handler allowlist was skipped for one
YAML shape, so a `function:` policy imported and ran arbitrary Python at
session start. The governance layer was the way in. Single-user local
installs are outside the stated threat model; any server that accepts
bundles from more than one person is not.

**Which layer refuses.** The question this profile has asked from the start now
has an answer for one case. From v0.13.0, if the Omnigent policy server is
unreachable, native Claude Code and Codex tool calls
[return no opinion](https://github.com/omnigent-ai/omnigent/pull/6429) and
the harness's own dialog decides. Prompt submission still fails closed. In
normal operation an Omnigent deny still blocks. If the harness underneath is
in a bypass or auto mode, an outage means nothing asks. Keep a harness-native
deny list for anything that must never run.

**Omnigent now answers for the harness.** Since v0.12.0 it pre-accepts
Claude Code's bypass-permissions consent dialog whenever a launch requests
bypass, through an invocation-local settings file, and the PR says org
policy is still checked first. Since
[v0.13.0](https://github.com/omnigent-ai/omnigent/pull/5864) the default
codex-native stance sends escalated Codex approvals, such as an
out-of-workspace write, to Codex's automatic reviewer instead of you. A
scheduled task set to Bypass runs Claude Code with no consent prompt and
nobody watching. Behavior seen through Omnigent belongs to the pair, not to
the harness alone.

**Shared sessions: any editor approves, and any editor has a shell.** At
v0.14.0
[the approval route](https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/server/routes/sessions/routes/elicitations.py)
still accepts any user with edit rights. Worse, on every tag through v0.14.0
the environment shell proxy accepted edit rights too, so an editor could run
commands on the owner's machine outside every policy and approval gate. The
fix, [#7619](https://github.com/omnigent-ai/omnigent/pull/7619), merged
17 September and first shipped in v0.15.0. Read-only shares served `.env`
and key files verbatim until v0.13.0 made that an owner opt-in.

**Spend caps are a gate on the next call, not a meter.**
[`cost.py` at v0.14.0](https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/policies/builtins/cost.py)
checks cumulative spend before each turn and tool call, but spend is only
counted at turn boundaries, so the turn that crosses the cap finishes.
`max_cost_usd` is, in the module's own words, a "downgrade gate": it denies
only while an `expensive_models` model is running. Leave that list empty or
omit it for a hard stop. Unpriced models fail closed. Since v0.13.0 a
sub-agent cap attached by the orchestrating model asks for approval to lift
it instead of refusing. Two gaps sit on top of that. On every in-window tag
a root-session budget did not bind native child sessions with no policies of
their own ([#7369](https://github.com/omnigent-ai/omnigent/pull/7369), in
v0.15.0). Scheduled-task caps attach non-fatally, so if the policy store is
down the session "proceeds uncapped."

**Quieter fixes worth knowing.** Before v0.14.0 the `spawn_bounds` fan-out
cap reset on every deployed tool call and did not bind. Before v0.13.0,
output policies on runner-relayed claude-sdk sessions let denied text stream
and persist. A retried approval could run arguments other than the ones a
human reviewed until v0.14.0.

**What did not move.** ACP delegated file I/O (qwen, goose) still
[fails open on the result phase](https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/inner/qwen_executor.py);
a denied write is not undone, so the call phase is the only gate that binds.
The Usage page is still off unless `OMNIGENT_FEATURES=usage_page`.
`deny_tag_push` still defaults true.

**Capability.** New harnesses (Antigravity, Grok Build, Jcode, Devin as a
child session), libkrun microVM and Kubernetes sandbox providers, and git
acting as the user's own account inside the sandbox. Every bundle advisory
above is scoped to unsandboxed runners, so the microVM provider is the cheap
mitigation if you ran `sandbox.type: none` for speed.

## What is unresolved

- Whether v0.15.0 contains the editor shell-proxy, session-bundle and
  inherited-budget fixes as described. The PRs say yes; nobody here has read
  the tag.
- Whether a scheduled task's Bypass mode passes through any Omnigent policy
  before launch.
- What `max_cost_usd` does when `expensive_models` is non-empty but does not
  list the running model.
- Whether the offloadable dictation worker sends audio off your
  infrastructure. The v0.7.0 notes said audio "never leaves your server"
  while describing a remote transcription worker.
- The layering answer lives in PR bodies; the docs site did not resolve to
  content when checked.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
