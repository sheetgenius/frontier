---
schema_version: bitter.frontier_profile.v0
profile_id: hermes-agent
label: Hermes Agent
owner: Nous Research
source_contract: sources/hermes-agent.yml
homepage: https://hermes-agent.nousresearch.com/docs
docs: https://hermes-agent.nousresearch.com/docs
tagline: "A personal agent that answers on twenty-plus messaging platforms and lets a model do the approving by default. The floor is v2026.9.7: every earlier tag runs a repository's git config on your host before the first prompt."
compared_with:
  - paperclip
x:
  project: NousResearch
  maintainers:
    - handle: Teknium
      name: Teknium
repo: https://github.com/NousResearch/hermes-agent
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: gitspawn-fixed-v2026-9-7
    finding_id: 2026-09-21-hermes-agent-ghsa-7x36-8jrh-v4pw-a-copied-repo-s-git-config-could-run-code-on-the-host-before-any-promp
    last_verified: 2026-09-23
    status: active
  - id: computer-use-unapproved
    finding_id: 2026-09-21-hermes-agent-computer-use-ran-destructive-desktop-actions-unapproved-on-every-non-cli-host-until-v2026
    last_verified: 2026-09-23
    status: active
  - id: turn-cap-unlimited
    finding_id: 2026-09-21-hermes-agent-agent-max-turns-default-flipped-from-500-to-unlimited-in-v2026-8
    last_verified: 2026-09-23
    status: active
  - id: unattended-mode-deny
    finding_id: 2026-09-21-hermes-agent-unattended-platforms-webhook-msgraph-webhook-api-server-now-deny-dangerous-commands-by-def
    last_verified: 2026-09-23
    status: active
  - id: deny-list-in-containers
    finding_id: 2026-09-21-hermes-agent-approvals-deny-now-applies-inside-isolated-containers-v2026-9
    last_verified: 2026-09-23
    status: active
  - id: multiplex-profile-leak
    finding_id: 2026-09-21-hermes-agent-multiplex-profiles-leaked-allow-all-allowlists-vault-secrets-and-files-across-profiles-unt
    last_verified: 2026-09-23
    status: active
  - id: webhook-route-colon
    finding_id: 2026-09-21-hermes-agent-ghsa-2fmg-cjqm-hhrj-a-weak-webhook-route-could-inherit-a-privileged-sibling-s-toolsets-fix
    last_verified: 2026-09-23
    status: active
  - id: approval-gate-integrity-v2026-9-21
    finding_id: 2026-09-21-hermes-agent-approval-gate-integrity-cluster-in-v2026-9-21-breaker-attribution-smart-approval-silence
    last_verified: 2026-09-23
    status: active
  - id: vault-and-real-profile-browsing
    finding_id: 2026-09-21-hermes-agent-capability-real-profile-browsing-password-blind-vault-sha-pinned-plugin-catalog
    last_verified: 2026-09-23
    status: active
  - id: oneshot-footprint-and-curator-builtins
    finding_id: 2026-09-21-hermes-agent-capability-and-defaults-in-v2026-9-21-skills-auto-load-stream-json-one-shot-footprint-cura
    last_verified: 2026-09-23
    status: active
  - id: delegation-docs-match-config
    finding_id: 2026-09-21-hermes-agent-delegation-docs-now-agree-with-config-250-10-from-v2026-9
    last_verified: 2026-09-23
    status: active
  - id: three-approval-fixes-in-v2026-8-19
    finding_id: 2026-09-21-hermes-agent-carry-forward-the-three-approval-fixes-reached-v2026-8-19-on-2026-08-21-confirmed
    last_verified: 2026-09-23
    status: active
  - id: approval-guardrails-tagged-v2026-8-3
    finding_id: 2026-08-03-hermes-approval-guardrails-and-runaway-caps-reach-a-tag
    last_verified: 2026-09-23
    status: active
  - id: skill-scan-on-pull-tagged
    finding_id: 2026-08-20-hermes-git-pull-skill-scan-reached-v2026-8-18
    last_verified: 2026-08-20
    status: active
  - id: steer-stop-and-update-honesty-tagged
    finding_id: 2026-08-20-hermes-steer-stop-and-update-honesty-reached-v2026-8-18
    last_verified: 2026-08-20
    status: active
  - id: delegation-docs-stale-at-v2026-8-18
    finding_id: 2026-08-20-hermes-delegation-docs-still-say-50-and-3-at-v2026-8-18
    last_verified: 2026-09-23
    status: retired
  - id: cli-execute-code-and-yolo-toggle-unreleased
    finding_id: 2026-08-20-hermes-cli-execute-code-approval-and-yolo-toggle-still-unreleased
    last_verified: 2026-09-23
    status: retired
  - id: curator-autonomous-skill-maintenance
    finding_id: 2026-05-06-hermes-curator-and-service-surfaces
    last_verified: 2026-05-06
    status: active
  - id: self-improvement-loop-background-review
    finding_id: 2026-05-06-hermes-curator-and-service-surfaces
    last_verified: 2026-05-06
    status: active
  - id: gateway-service-restart-readiness
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: long-term-memory-session-key
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: pluggable-model-provider-modules
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: active
  - id: kanban-durable-multiagent
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: goal-persistent-cross-turn
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: security-redaction-on-by-default
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: platform-channel-allowlists
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: active
  - id: mistralai-quarantine-graceful-disable
    finding_id: 2026-05-12-hermes-mistralai-quarantine-response
    last_verified: 2026-05-12
    status: active
  - id: pypi-distribution-and-lazy-install
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: native-windows-beta
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: hermes-proxy-credential-router
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: honcho-identity-mapping
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: credential-pool-isolation-fallback
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: supply-chain-advisory-checker
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: active
  - id: v0-15-multi-agent-and-docker-optin
    finding_id: 2026-05-29-hermes-agent-patch-release
    last_verified: 2026-06-03
    status: active
  - id: v0-17-fail-closed-wave-tagged
    finding_id: 2026-06-23-hermes-v0.17.0-reach-release
    last_verified: 2026-06-23
    status: active
  - id: mcp-persistence-0day-mitigation-main-unreleased
    finding_id: 2026-06-23-hermes-0day-mitigation-wave-main-unreleased
    last_verified: 2026-09-23
    status: retired
  - id: managed-etc-hermes-scope
    finding_id: 2026-06-23-hermes-managed-scope-etc-hermes
    last_verified: 2026-06-23
    status: active
  - id: background-fanout-subagents-no-wallclock
    finding_id: 2026-06-23-hermes-background-async-subagents-tagged
    last_verified: 2026-09-23
    status: retired
posture_basis:
  capability:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-23-hermes-v0.17.0-reach-release
    - 2026-06-23-hermes-background-async-subagents-tagged
  accessibility:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-23-hermes-v0.17.0-reach-release
  governance:
    - 2026-05-06-hermes-curator-and-service-surfaces
    - 2026-05-07-hermes-gateways-skills-and-service-operation
    - 2026-05-12-hermes-tenacity-kanban-and-security
    - 2026-05-12-hermes-mistralai-quarantine-response
    - 2026-05-27-hermes-v0.14.0-foundation-release
    - 2026-06-23-hermes-0day-mitigation-wave-main-unreleased
    - 2026-06-23-hermes-managed-scope-etc-hermes
    - 2026-06-23-hermes-background-async-subagents-tagged
stance:
  use_for: "A self-hosted personal agent that lives in Slack, Telegram, Discord, email and a dozen other platforms, with delegation, a Kanban board for multi-worker jobs, and skills it maintains itself. Headless use is now practical: v2026.9.21 adds stream-json output and a lean one-shot mode for wrapping Hermes as an engine."
  avoid_for: "Any tag before v2026.9.7 in a directory you did not create or clone yourself. Unattended runs on default config: the parent has no turn cap and a model, not you, answers flagged commands. Real-login browsing and vault-backed payments on any profile you would not hand a stranger; there is no per-site allowlist."
  watch_next: "Publication of GHSA-7x36 and GHSA-2fmg with stated affected ranges; a tag carrying the post-window pre_tool_call approve-hook fix (30b38d13); whether the promised move of bundled memory providers to the plugin market changes what a default install contains."
---

# Hermes Agent

Hermes is on this watchlist because it pushes authority further from the
keyboard than anything else we track. It answers on more than twenty
messaging platforms, delegates to fleets of subagents, curates its own
skills, and since v0.19.0 (July 2026) a language model rather than a person
answers its flagged commands by default. Nous
[reports pointing it](https://x.com/NousResearch/status/2099984561451028913)
at its own million-line codebase with 1,393 subagents. The project ships a stable tag
roughly weekly, and one tag is often a thousand commits or more.

## Where it stands, 2026-09-21

**Channel.** Install a date tag. The newest is
[v2026.9.21](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21)
(v0.21.4), the seventh stable in four weeks, and every one descends
cleanly from the last. Hermes Cloud agents auto-update to the newest tag and
Docker images build from each one. Most release bodies are rollups that defer
their notes to a later release, so read the tag, not the headline.

**The floor is v2026.9.7.** Every tag through v2026.8.31 runs system git
against the session directory before any prompt, tool call or trust gate, and
that git honored the repository's own config. A folder delivered with its
`.git` intact (a zip, a synced drive) could set `core.fsmonitor` or a diff
driver and run code as you with nothing on screen.
[Commit f6234d00](https://github.com/NousResearch/hermes-agent/commit/f6234d00c5d59450adea1d7edd30ad3859375c79)
pins those keys inert. Project-skill trust never gated this path. The
advisory, GHSA-7x36, was still unpublished at window close.

**If you run it on a gateway, go to v2026.9.21.** Four more fixes land on
that path. Until v2026.9.14,
[computer use ran destructive desktop actions with no approval](https://github.com/NousResearch/hermes-agent/commit/3e066dfedd2e3dbbf39607b32f760417b51c0ec3)
on every host except the interactive CLI: Telegram, Slack, cron, the API
server. If you enabled it there, audit what it did. Until v2026.9.11, a
multi-profile gateway
[read the default profile's allow-all and allowlists for every bot](https://github.com/NousResearch/hermes-agent/commit/cbd03e6e4ca143c1d5c2db881320afb85783c30b)
and handed its vault secrets to secondary MCP servers. Until v2026.9.7,
[your `approvals.deny` list was skipped](https://github.com/NousResearch/hermes-agent/commit/1c37b9c45772fe284af0179df41f2b366cb6b0e9)
inside Docker and the remote backends, although config calls it unbypassable
even under `--yolo`. Until v2026.9.21, a webhook route named with a colon
[inherited its privileged sibling's tools](https://github.com/NousResearch/hermes-agent/commit/9345c67854f6ef1ef4f68ac4b9c3ae266ecceccf).

**Who approves.** `approvals.mode` is still
[`smart` at v2026.9.21](https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L1647-L1657):
a guardian model reviews each flagged command, with a 300-second timeout and a
denial breaker at three. The operator policy, the breaker and
`hermes approvals suggest` shipped in
[v2026.8.3](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.3).
v2026.9.21 settles the question of what happens when the guardian fails:
[it escalates to you or the pattern gate](https://github.com/NousResearch/hermes-agent/commit/262825db74ff6c9d2d4a678cc47931bcb4b8b027),
never approves, and a silent or stalled guardian now logs at WARNING. The same
tag fixes a
[command scanner that stayed off until restart](https://github.com/NousResearch/hermes-agent/commit/cc295509b412f76785ecf548a7cf0a7d2a4e285f)
after one crash, and stops reporting a withdrawn prompt as "User denied". Set
`approvals.mode` yourself rather than inheriting it.

**Unattended means deny.** From
[v2026.8.31](https://github.com/NousResearch/hermes-agent/commit/ef71f2cad8b43628594a34f24755e726cc316432),
webhook and API-server sessions refuse dangerous commands instantly instead
of stalling for the full timeout. Do not flip `unattended_mode` to `approve`
to make a job pass: that hands every flagged command to whoever holds the
webhook secret. Use `command_allowlist` pattern keys, honored unattended from
v2026.9.21.

**Nothing stops a busy parent.** Since v2026.8.19
[`agent.max_turns` defaults to unlimited](https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L53-L60),
because the old cap of 500 truncated long tasks silently. Each subagent keeps
250 iterations, up to ten run at once, and the delegation docs
[now say so](https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/website/docs/user-guide/features/delegation.md#L344).
On an unattended install, set `agent.run_budget_seconds` or a turn cap. The
bound is otherwise your bill.

**The new grants are the big ones.** v2026.8.27 can
[browse with your real Chromium logins](https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L423-L442),
and v2026.9.11 can sign in and pay from 1Password, Bitwarden or its own vault
without the secret entering model context. Both are off by default. The
review question moves from "what command will it run" to "which accounts may
it act on", and the config has no per-site allowlist to answer it with.

**Headless got cheaper.**
[v2026.9.21](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21)
adds `--format stream-json`, and a `-q` run stops authoring skills and caps
delegation at two. The curator
[no longer archives unused bundled skills](https://github.com/NousResearch/hermes-agent/commit/1b8e4c513d6a55c6a6bdf8779b43544456cb89ef)
after 30 days. If yours
vanished after an update, that was the cause.

## What is unresolved

- Neither advisory (GHSA-7x36, GHSA-2fmg) is published, so affected ranges
  are our reading of git ancestry, not a vendor statement.
- On 2026-09-22 a commit on main,
  [30b38d13](https://github.com/NousResearch/hermes-agent/commit/30b38d139b1fd91670e3b5bd88cd50f71287a12f),
  fixed a shell `pre_tool_call` hook whose documented `approve` output ran the
  tool with no prompt while `hermes hooks doctor` stayed green. v2026.9.21
  has the defect. If you gate tools with shell hooks, test yours.
- The lead engineer
  [wrote on 2026-09-17](https://x.com/Teknium/status/2100645382552428963)
  that Hermes will lean "more like Pi, and less like OpenClaw". What a default
  install sheds is not yet in a tag.
- There is still no SSO or role mapping. The managed `/etc/hermes` scope
  pins config per host; it is not identity.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
