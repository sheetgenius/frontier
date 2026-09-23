---
schema_version: bitter.frontier_profile.v0
profile_id: codex
label: Codex
owner: OpenAI
source_contract: sources/codex.yml
homepage: https://developers.openai.com/codex/
docs: https://learn.chatgpt.com/docs
changelog: https://learn.chatgpt.com/docs/changelog
repo: https://github.com/openai/codex
tagline: "Fourteen stables in 32 days, one of them a hotfix that changed the default model. The model reviewer, Guardian V2, is still switched off."
compared_with:
  - claude-code
  - gemini-cli
x:
  project: OpenAICodexCli
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: default-model-hotfix
    finding_id: 2026-09-21-codex-default-model-moved-to-gpt-6-astra-in-the-0-153-x-hotfix-train-not-in-a-minor
    last_verified: 2026-09-23
    status: active
  - id: mcp-server-removed
    finding_id: 2026-09-21-codex-codex-mcp-server-removed-app-server-is-the-only-integration-path-and-it-is-officially-expe
    last_verified: 2026-09-23
    status: active
  - id: guardian-v2-still-off
    finding_id: 2026-09-21-codex-guardian-v2-stayed-off-by-default-in-every-stable-of-the-window-carry-forward
    last_verified: 2026-09-23
    status: active
  - id: goal-persistent-validation
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: goal-lifecycle-metrics
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: mcp-memory-spawn
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: session-id-tracking
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: mcp-thread-metadata
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: plugin-share-access-controls
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: linux-sandbox-bundled
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: permissions-approval-tui-visible
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-05-11
    status: active
  - id: plugin-share-role-aware
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-05-11
    status: active
  - id: skills-watcher-app-server
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-05-11
    status: active
  - id: pretooluse-input-rewrite
    finding_id: 2026-05-12-codex-pretooluse-input-rewrite
    last_verified: 2026-05-12
    status: active
  - id: goal-mode-default-on
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-05-27
    status: active
  - id: remote-computer-use-after-lock
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-06-23
    status: active
  - id: chronicle-screen-context-preview
    finding_id: 2026-06-23-codex-eea-uk-swiss-feature-rollout
    last_verified: 2026-06-23
    status: open_question
  - id: developer-mode-cdp-boundary
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-06-23
    status: open_question
  - id: plugin-marketplace-sharing
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-05-27
    status: active
  - id: permission-profile-inheritance
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-05-27
    status: active
  - id: managed-requirements-toml
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-05-27
    status: active
  - id: profile-flag-canonical
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-05-27
    status: active
  - id: remote-exec-apikey-and-bedrock
    finding_id: 2026-06-02-codex-cli-0136-remote-exec
    last_verified: 2026-06-03
    status: active
  - id: sites-plugin-deploy
    finding_id: 2026-06-02-codex-sites-plugin-launch
    last_verified: 2026-06-03
    status: active
  - id: ios-faceid-passcode-lock
    finding_id: 2026-06-02-chatgpt-ios-1-2026-146-face-id
    last_verified: 2026-06-03
    status: active
  - id: environment-scoped-approvals
    finding_id: 2026-06-23-codex-environment-scoped-approvals
    last_verified: 2026-06-23
    status: active
  - id: rollout-token-budget-turn-abort
    finding_id: 2026-06-23-codex-rollout-token-budgets
    last_verified: 2026-06-23
    status: active
  - id: multi-agent-delegation-authority-mode
    finding_id: 2026-06-23-codex-multi-agent-delegation-modes
    last_verified: 2026-06-23
    status: active
  - id: guardian-v2-in-tag-off-by-default
    finding_id: 2026-08-20-codex-0-148-0-cut-stable-guardian-v2-is-in-the-tag-and-off-by-default
    last_verified: 2026-08-20
    status: active
  - id: npm-latest-0-149-0
    finding_id: 2026-08-20-codex-0-149-0-is-npm-latest-and-restores-permission-profile-on-resume
    last_verified: 2026-08-20
    status: retired
  - id: guardian-skips-full-access-and-user-approval
    finding_id: 2026-09-21-codex-guardian-no-longer-runs-in-full-access-or-user-approval-mode
    last_verified: 2026-09-23
    status: active
  - id: untrusted-projects-no-agents-md-no-helpers
    finding_id: 2026-09-21-codex-untrusted-projects-stop-feeding-agents-md-and-startup-stops-running-workspace-helpers-befo
    last_verified: 2026-09-23
    status: active
  - id: python-sdk-external-message
    finding_id: 2026-09-21-codex-python-sdk-0-154-0-external-content-with-tool-level-authority-not-user-authority
    last_verified: 2026-09-23
    status: active
  - id: hardening-without-advisories
    finding_id: 2026-09-21-codex-sandbox-and-credential-hardening-no-advisories
    last_verified: 2026-09-23
    status: active
  - id: fourteen-stables-three-hotfix-trains
    finding_id: 2026-09-21-codex-channel-fourteen-stables-in-32-days-three-hotfix-trains
    last_verified: 2026-09-23
    status: active
  - id: update-plan-off-cd-sandbox-fix
    finding_id: 2026-09-21-codex-planning-tool-off-by-default-permission-profile-persistence-extended-to-tui-turns-cd-and
    last_verified: 2026-09-23
    status: active
  - id: mcp-result-interception-hot-reload
    finding_id: 2026-09-21-codex-hooks-mcp-and-extensions-new-interception-points
    last_verified: 2026-09-23
    status: active
posture_basis:
  capability:
    - 2026-05-07-codex-stateful-control-plane
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-12-codex-pretooluse-input-rewrite
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    - 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    - 2026-06-23-codex-rollout-token-budgets
    - 2026-06-23-codex-multi-agent-delegation-modes
    - 2026-06-23-codex-eea-uk-swiss-feature-rollout
  accessibility:
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    - 2026-06-23-codex-eea-uk-swiss-feature-rollout
  governance:
    - 2026-05-07-codex-stateful-control-plane
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-12-codex-pretooluse-input-rewrite
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    - 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    - 2026-06-23-codex-environment-scoped-approvals
    - 2026-06-23-codex-rollout-token-budgets
    - 2026-06-23-codex-multi-agent-delegation-modes
stance:
  use_for: "Teams that want OpenAI's current harness with its authority model readable in source: trust gating that keeps an untrusted repo's AGENTS.md and startup helpers out, an auto-review reviewer you switch on deliberately, and extension points that can inspect or replace MCP tool results before the model sees them. Pin the version and the model, and it is a well-instrumented tool."
  avoid_for: "Floating `latest` in CI or fleet images: fourteen stables in 32 days, and a hotfix changed the default model. Planning as if a model reviews every call: Guardian V2 is off and Guardian no longer reviews in Full Access. Production embedding on the app server, which OpenAI's changelog says is not supported for production; `codex mcp-server` is gone as of 0.154.0."
  watch_next: "Guardian V2's default in features/src/lib.rs at the next stable tag; the app server losing its experimental label; a docs page saying how Guardian and auto-review usage shows up in user usage views; configs still naming gpt-5.5 before its 14 October retirement from ChatGPT sign-in."
---

# Codex

Codex is on this watchlist because it is the largest model lab's coding agent
whose whole harness ships as open source, tag by tag. When OpenAI moves work
between the model and the machinery around it, the move shows up in
`openai/codex` before it shows up anywhere else. It also runs the fastest
stable train we watch, which is the first thing an operator has to plan
around.

## Where it stands, 2026-09-21

**Channel.** The CLI installs as `@openai/codex` from npm, and `latest` at
window close was
[0.155.1](https://github.com/openai/codex/releases/tag/rust-v0.155.1),
published 18 September. It was the last of
[fourteen stables](https://github.com/openai/codex/releases) cut between 24
August and 18 September, three of them hotfix trains, with each minor carrying
90 to 250 commits. Roughly a hundred alpha tags ran alongside; they are not a
channel to run. Since
[9 July](https://learn.chatgpt.com/docs/changelog#codex-2026-07-09-app) Codex
also ships inside the ChatGPT desktop app on macOS and Windows, so an endpoint
policy that allows that app allows Codex. Pin a version in CI and fleet images
and upgrade on purpose.

**Pin the model too.** With `model` unset, a patch release changed what runs.
[0.153.4](https://github.com/openai/codex/releases/tag/rust-v0.153.4), a
hotfix on 4 September, made `gpt-6-astra` visible in the bundled catalog, and
the picker default moved to it from `gpt-5.6-sol`. From
[0.154.0](https://github.com/openai/codex/releases/tag/rust-v0.154.0), fresh
sessions also follow the server's model defaults unless you override them, so
the effective default no longer lives only in the binary you installed. The
[changelog](https://learn.chatgpt.com/docs/changelog) retires GPT-5.5 from
Codex with ChatGPT sign-in on 14 October. Grep configs, custom agents and
scheduled tasks for it now.

**The reviewer is narrower than its name.** Guardian V2, the model risk
classifier that gates tool calls, is in the binary and
[`default_enabled: false`](https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/features/src/lib.rs#L1593-L1596)
at 0.155.1, as it was in every stable we read this window. Nothing turns it on
for you. The older Guardian approval reviewer
[stays on by default](https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/features/src/lib.rs#L1563-L1566),
but [0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0)
stopped it reviewing confirmation-only actions in Full Access and stopped its
background scoring in User approval mode. Full Access now means what it says.
If you were counting on a model standing behind it, there is none: use
`approval_policy = "on-request"` with `approvals_reviewer = "auto_review"`
instead, which is also what the
[`--approve-for-me`](https://github.com/openai/codex/pull/36373) flag sets up
in one switch. If you do enable Guardian V2, 0.153.0 and later send its
classification events, with thread attribution, to OpenAI's analytics. Check
that against your telemetry policy before flipping the flag.

**Untrusted repositories got quieter.** Since
[0.150.0](https://github.com/openai/codex/releases/tag/rust-v0.150.0) Codex
skips an untrusted project's `AGENTS.md`, and since
[0.154.0](https://github.com/openai/codex/releases/tag/rust-v0.154.0) startup
no longer runs workspace-controlled helpers before trust is decided. Opening a
hostile clone untrusted no longer feeds it instructions or lets it run code at
launch, so run 0.154.0 or later. The cost lands in CI and ephemeral checkouts
where nobody grants trust: a workflow that depends on the repo's `AGENTS.md`
now has to trust the project explicitly. Separately, an explicit
`approval_policy = "untrusted"` has been
[an error since 0.149.0](https://github.com/openai/codex/pull/39630). Search
your configs for it.

**`codex mcp-server` is gone.** 0.154.0 removed the entry point that let
other agents call Codex as an MCP tool; Codex as an MCP client stays. The
documented integration path is now the app server, which the same vendor's
[changelog](https://learn.chatgpt.com/docs/changelog), in its 5 September entry, says "is experimental and isn't supported
for production workloads." Anyone embedding Codex is building on an interface
its owner will not stand behind yet: wrap it, pin it, and treat protocol
changes as breaking. The
[Python SDK 0.154.0](https://github.com/openai/codex/releases/tag/python-v0.154.0)
is the better news here. Its `ExternalMessage` injects content from other
agents or services with tool-level authority, and the release says it "does
not grant user authorization," so a webhook no longer has to pose as the user.
The same release moves hook handlers under `.root`, which breaks code reading
`hook.command`.

**Fixes arrive as bullets.** Between 0.152.0 and
[0.155.0](https://github.com/openai/codex/releases/tag/rust-v0.155.0) Codex
rejected untrusted cloud backend URLs, blocked Windows processes escaping
restricted WSL sandboxes, and hardened brokered shell snapshots against
credential exposure. None got an advisory; the repository's
[advisory list](https://github.com/openai/codex/security/advisories) has
nothing from the window. The Plugin4Shell fix is likewise a single line,
[#34644 in 0.146.0](https://github.com/openai/codex/releases/tag/rust-v0.146.0).
Read the release notes, and on Windows with WSL run 0.155.0 or later.

**Behavior worth knowing before you configure it.** Extensions can inspect or
replace MCP tool results before the model sees them
([0.151.0](https://github.com/openai/codex/releases/tag/rust-v0.151.0)), which
is the right layer for redaction. From 0.154.0, plugin tools, skills and hooks
hot-reload into running sessions after an upgrade, and hooks from workspace
plugins are
[recorded as trusted after a successful refresh](https://github.com/openai/codex/pull/32301),
so a session's hook set is not fixed at start. The text a reviewer types when
rejecting an action
[goes back to the model](https://github.com/openai/codex/pull/34400); keep
secrets and ticket text out of it. `/cd` could loosen the sandbox on 0.149.x
and 0.150.x, fixed in 0.151.0, which also counts subagent tokens against the
root goal budget, so budgets set earlier trip sooner.
[0.152.0](https://github.com/openai/codex/releases/tag/rust-v0.152.0) turned
the `update_plan` tool off by default: scaffolding the harness decided the
current models no longer need.

## What is unresolved

- **Whether Guardian V2 ever defaults on.** It is off at every stable we read.
  Reading `features/src/lib.rs` at the next stable tag settles it.
- **What Guardian costs you.** Guardian V2 now emits vendor-side analytics,
  but no docs page says how Guardian or auto-review usage appears in a user's
  usage or billing views.
- **When the app server becomes supportable.** Until OpenAI drops the
  experimental label, every embedder carries the protocol risk.
- **The "Daybreak" auto-switch.** The live auto-review docs page says
  selecting an approved "Daybreak" model in the desktop app switches
  permissions to Approve for me. We could not date that sentence, and the
  bundled catalog carries only hidden `gpt-daybreak-*` entries from 0.153.0.
  A release note naming the behavior would settle it.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a release, pull request
or docs page linked on its words, and the current read comes from
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/).
This page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
