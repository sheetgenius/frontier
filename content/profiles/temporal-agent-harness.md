---
schema_version: bitter.frontier_profile.v0
profile_id: temporal-agent-harness
label: Temporal Agent Harness
owner: temporal-community
source_contract: sources/temporal-agent-harness.yml
homepage: https://github.com/temporal-community/temporal-agent-harness
docs: https://github.com/temporal-community/temporal-agent-harness/tree/main/docs/internal
tagline: "A workflow-engine vendor's agent harness that makes the human approval a durable object, shipped with an approvals server that listens on every interface and asks for no login."
compared_with:
  - omnigent
  - openhands
  - codex
repo: https://github.com/temporal-community/temporal-agent-harness
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: approvals-server-no-login
    finding_id: 2026-09-21-temporal-agent-harness-the-packaged-server-binds-0-0-0-0-with-no-authentication-main-adds-wildcard-cors
    last_verified: 2026-09-23
    status: active
  - id: always-allowlists-the-tool
    finding_id: 2026-09-21-temporal-agent-harness-in-the-coding-example-opencode-always-maps-to-remember-true-which-allow-lists-the-tool-by
    last_verified: 2026-09-23
    status: active
  - id: caller-policy-wins
    finding_id: 2026-09-21-temporal-agent-harness-the-caller-s-agentconfig-approval-policy-wins-over-the-agent-s-default-dangerously-skip
    last_verified: 2026-09-23
    status: active
  - id: tags-re-pointed
    finding_id: 2026-09-21-temporal-agent-harness-tags-0-3-0-and-0-4-0-were-re-pointed-after-their-release-pages-went-live-the-wheel-came
    last_verified: 2026-09-23
    status: active
stance:
  use_for: "Teams already running Temporal who want an agent whose approvals, tool calls and turns survive a crash and replay exactly. The approval policy and event stream are readable in the repo rather than inferred."
  avoid_for: "Anything reachable from a network you do not control while running the packaged server at 0.4.0 defaults. Production use of any kind: every release is flagged prerelease, and the hosting org disclaims support."
  watch_next: "A tag that binds loopback by default or adds authentication; #137 (first-class messages) reaching a tag; whether decision-model auto-approval lands in a release; whether Temporal Cloud history retention is documented for agent payloads."
---

# Temporal Agent Harness

The Temporal Agent Harness is on this watchlist because of what it makes
durable. When the model asks for a tool the policy does not auto-approve, the
call parks as a workflow wait. It survives a crash, can sit for days, and
dispatches from where it stopped when a person decides. Every turn and
decision lands in workflow history and can be replayed. It is the first
entry built by a workflow-engine vendor rather than a model lab or an agent
author.

## Where it stands, 2026-09-21

**Channel.** Four GitHub releases in twelve days, 0.1.0 (4 September) through
0.4.0 (15 September), every one flagged prerelease. PyPI carries only 0.3.0
and 0.4.0. The 0.3.0 and 0.4.0 tags were re-pointed after their release pages
went live, and the wheels came from a manual dispatch that skips the
workflow's tag-and-version check. Pin the wheel, and cite
[commit e4bde4be](https://github.com/temporal-community/temporal-agent-harness/tree/e4bde4beb078d7ec3432c84b71e64e1efd554752)
rather than the tag name.

**The approvals server has no login.** At 0.4.0 the packaged
[`serve` command](https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/cli.py#L121)
defaults to `0.0.0.0`, and the
[web app](https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/web/app.py#L281-L310)
exposes session listing, approval, callback results and operator commands,
including one that skips every approval, with no authentication. Run it with
`--host 127.0.0.1` or behind an authenticating proxy. Main adds wildcard CORS.

**"Always" means the tool.** In the coding example, OpenCode's "always"
answer posts `remember=true`, which allow-lists the tool by name. One
"always" on bash approves every later bash command, whatever the dialog
showed.

**The policy is the caller's.** A caller's `AgentConfig.approval_policy`
overrides the agent author's default, a skip-all layer exists, and relaxing
the live policy releases calls already waiting.

**Durability has an edge.** "No double-run tool calls" holds for completed
activities on replay. A tool interrupted mid-run runs again under Temporal's
default retry, and nothing in the harness enforces idempotency. Tool inputs,
outputs and reply text all go into workflow history with no codec.

**Main is ahead of the wheel.** #137 on main replaces the operator-command
channel with first-class messages, and the README on main documents it. The
wheel does not have it.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
