---
schema_version: bitter.frontier_profile.v0
profile_id: pi-coding-agent
label: Pi Coding Agent
owner: Earendil Works (formerly badlogic / Mario Zechner)
source_contract: sources/pi-coding-agent.yml
homepage: https://pi.dev/
docs: https://pi.dev/docs/latest
tagline: "The minimal harness that matched Claude Code's grade at half the bill in one study. It governs almost nothing itself, so every month the extension you install holds more of your authority."
x:
  maintainers:
    - handle: badlogicgames
      name: Mario Zechner
repo: https://github.com/earendil-works/pi
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: harness-tagged
    finding_id: 2026-09-21-pi-coding-agent-the-dev-harness-reached-main-and-a-tag-in-v0-85-0-its-plugin-surface-was-published-to-npm
    last_verified: 2026-09-23
    status: active
  - id: harnesstax
    finding_id: 2026-09-21-pi-coding-agent-harnesstax-study-same-model-same-success-up-to-five-times-the-cost
    last_verified: 2026-09-23
    status: active
  - id: user-bash-fails-closed
    finding_id: 2026-09-21-pi-coding-agent-user-bash-fails-closed-an-extension-that-routes-commands-into-a-vm-no-longer-falls-back
    last_verified: 2026-09-23
    status: active
  - id: rpc-steer-input-handlers
    finding_id: 2026-09-21-pi-coding-agent-rpc-steer-and-follow-up-no-longer-bypass-extension-input-handlers
    last_verified: 2026-09-23
    status: active
  - id: extension-reach-grew
    finding_id: 2026-09-21-pi-coding-agent-extensions-gained-authenticated-model-calls-and-full-transcript-control-context-handlers
    last_verified: 2026-09-23
    status: active
  - id: bug-upload-radius
    finding_id: 2026-09-21-pi-coding-agent-bug-uploads-diagnostics-and-optionally-the-transcript-to-radius-without-login
    last_verified: 2026-09-23
    status: active
  - id: compaction-docs-match-package
    finding_id: 2026-09-21-pi-coding-agent-compaction-docs-now-match-the-package-session-compact-failed-shipped-in-0-84
    last_verified: 2026-09-23
    status: active
  - id: project-trust-system
    finding_id: 2026-06-08-pi-coding-agent-project-trust-system
    last_verified: 2026-06-16
    status: active
  - id: agents-override-before-trust
    finding_id: 2026-08-10-pi-coding-agent-agents-override-md-lets-any-directory-replace-the-operator-s-context
    last_verified: 2026-08-10
    status: active
  - id: credential-print-commands
    finding_id: 2026-08-03-pi-ships-credential-export-commands
    last_verified: 2026-09-23
    status: active
  - id: default-tools-per-project
    finding_id: 2026-08-17-pi-coding-agent-defaulttools-makes-the-built-in-tool-set-configurable-per-project-the
    last_verified: 2026-08-17
    status: active
  - id: dev-hosts-not-plugins
    finding_id: 2026-08-22-pi-dev-hosts-are-not-plugins-kernel-still-design
    last_verified: 2026-08-22
    status: retired
    note: "Read at the dev branch SHA a17323e5. That branch is gone and its code is in every tag from v0.85.0; see harness-tagged."
  - id: new-harness-on-dev-not-tagged
    finding_id: 2026-08-20-pi-new-harness-lives-on-dev-not-on-a-tag
    last_verified: 2026-08-22
    status: retired
    note: "Superseded. The harness reached a tag in v0.85.0 (2026-09-04)."
  - id: live-docs-compaction-event-not-in-tag
    finding_id: 2026-08-20-pi-live-docs-describe-compaction-event-not-in-0-84-2
    last_verified: 2026-08-20
    status: retired
    note: "Superseded. session_compact_failed shipped in v0.84.3."
  - id: typebox-extension-sdk-validation
    finding_id: 2026-05-06-pi-thin-harness-provider-churn
    last_verified: 2026-05-06
    status: active
  - id: terminating-tool-results
    finding_id: 2026-05-06-pi-thin-harness-provider-churn
    last_verified: 2026-05-06
    status: active
  - id: provider-retry-timeout-controls
    finding_id: 2026-05-07-pi-thin-harness-churn
    last_verified: 2026-05-07
    status: active
  - id: session-dir-env
    finding_id: 2026-05-07-pi-thin-harness-churn
    last_verified: 2026-05-07
    status: active
  - id: earendil-works-package-migration
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-09-23
    status: active
  - id: jsonc-models-json
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: active
  - id: harness-stream-configuration
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: active
  - id: security-hardening-cluster
    finding_id: 2026-06-02-pi-coding-agent-oauth-hardening
    last_verified: 2026-06-03
    status: active
  - id: compaction-event-context
    finding_id: 2026-06-23-pi-extension-compaction-event-context
    last_verified: 2026-06-23
    status: active
  - id: selective-provider-base-entrypoints
    finding_id: 2026-06-23-pi-selective-provider-base-entrypoints
    last_verified: 2026-06-23
    status: active
  - id: mistral-prompt-cache-cost-accounting
    finding_id: 2026-06-23-pi-mistral-prompt-caching
    last_verified: 2026-06-23
    status: active
  - id: dependency-and-session-path-hardening
    finding_id: 2026-06-23-pi-vulnerable-dependency-update
    last_verified: 2026-06-23
    status: active
  - id: no-governance-in-core
    finding_id: 2026-06-23-pi-extension-compaction-event-context
    last_verified: 2026-09-23
    status: open_question
posture_basis:
  capability:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
    - 2026-06-23-pi-extension-compaction-event-context
    - 2026-06-23-pi-selective-provider-base-entrypoints
    - 2026-09-21-pi-coding-agent-harnesstax-study-same-model-same-success-up-to-five-times-the-cost
    - 2026-09-21-pi-coding-agent-extensions-gained-authenticated-model-calls-and-full-transcript-control-context-handlers
  accessibility:
    - 2026-05-06-pi-thin-harness-provider-churn
    - 2026-05-07-pi-thin-harness-churn
    - 2026-05-12-pi-earendil-migration-and-harness-sdk
    - 2026-06-23-pi-selective-provider-base-entrypoints
  governance:
    - 2026-06-08-pi-coding-agent-project-trust-system
    - 2026-08-10-pi-coding-agent-agents-override-md-lets-any-directory-replace-the-operator-s-context
    - 2026-09-21-pi-coding-agent-user-bash-fails-closed-an-extension-that-routes-commands-into-a-vm-no-longer-falls-back
    - 2026-09-21-pi-coding-agent-rpc-steer-and-follow-up-no-longer-bypass-extension-input-handlers
stance:
  use_for: "API-metered coding work where you want the model, not the harness, to spend your money: a small core, per-project tool selection, and a release on npm that is the tag. Embedding an agent in your own UI or runtime where you own the approval and sandbox layer."
  avoid_for: "Anyone who wants built-in approval prompts, subagents, plan mode or MCP; Pi ships none. Running third-party extensions you have not read on 0.86.0 or later, where an extension can spend your provider credentials and rewrite the whole request. Installing the frozen @mariozechner/pi-coding-agent package. Pinning 0.85.0, the broken publish."
  watch_next: "A release note that names the facet host as supported and ships dist/experimental/plugin.js on npm; any permission wrapper in the telemetry(permission(sandbox(coreBash))) composition reaching a tag; a gate or opt-out on pi auth print-api-key; whether non-interactive modes ever get a trust decision."
---

# Pi Coding Agent

Pi, from Earendil Works, is the watchlist's case for doing less. It ships no
approval prompts, no subagents, no plan mode and no MCP, and pushes each of
those to extensions or to a sandbox you bring. On 16 September a UC Berkeley
and Arena study,
[HarnessTax](https://arena.ai/blog/coding-agents-harness-tax), put a price on
that refusal. Holding the model fixed across Claude Code, Codex CLI and Pi,
the harness barely moved task success and moved cost up to fivefold. Claude
Fable 5 solved 97.8 percent of attempts in Claude Code at $1.33 on average and
96.7 percent in Pi at $0.67. That is 30 sampled tasks from each of two
benchmarks, and nothing long-horizon or subscription-billed. Measure your own
tasks before you quote it.

This profile is about `earendil-works/pi` only. OMP, its fork, is a separate
entry, and nothing here was read from the OMP tree.

## Where it stands, 2026-09-21

**Channel.** Install `@earendil-works/pi-coding-agent`. npm `latest` at close
is [0.87.0](https://github.com/earendil-works/pi/releases/tag/v0.87.0), and
every one of the seven tags in the month has a matching release and npm
version, none a prerelease. The old `@mariozechner/pi-coding-agent` name
froze at 0.73.1 in May. Our own record watched that frozen name until 27 July
and read a shipping project as idle. It is the largest error in the record
and it is ours. Check the scope on your install line before the version.
Skip 0.85.0: it accidentally published internal experimental code that broke
SDK imports, and
[0.85.1 pulled it](https://github.com/earendil-works/pi/releases/tag/v0.85.1).

**The rewrite is tagged, not installable.** The harness that lived on the
`dev` branch in August is in every tag from v0.85.0, although v0.85.0's notes
never say so. Its
[plugin design](https://github.com/earendil-works/pi/blob/v0.85.0/packages/agent/docs/plugins.md)
is still labelled a design specification, and from 0.85.1 the
`experimental/plugin` export points at source files npm does not ship. To try
it, build from a tag. Extensions still run through the old extension API. The
design is candid about the boundary: facets "are not a security sandbox," and
a permission layer is meant to wrap the bash tool as
`telemetry(permission(sandbox(coreBash)))`. No such wrapper ships.

**What Pi does govern.** Since
[v0.79.0](https://github.com/earendil-works/pi/releases/tag/v0.79.0) in June,
opening a project asks whether you trust the directory. Two edges matter.
Context files load regardless of that answer, and since v0.84.0 that includes
[`AGENTS.override.md`](https://github.com/earendil-works/pi/pull/7681), which
replaces your `AGENTS.md` for its directory. A cloned repository can swap out
your guidance before you have said yes to anything. And headless modes (`-p`,
`--mode json`, `--mode rpc`) show no trust prompt at all. On repositories you
did not write, grep for the override file or run with `--no-context-files`.
The nearest thing to a permission boundary is `defaultTools`, which picks the
built-in tools per project.

**Extensions now hold more of your authority.**
[v0.86.0](https://github.com/earendil-works/pi/releases/tag/v0.86.0) lets an
extension call any configured provider with your resolved credentials.
[v0.87.0](https://github.com/earendil-works/pi/releases/tag/v0.87.0) lets one
rewrite the whole request, system prompt included, and send it verbatim, or
hide messages from the model while the raw log stays intact. In a harness
whose security model is "extensions are trusted code," installing one is now
closer to granting a login than adding a tool. Grep third-party
extensions for `modelRegistry.stream`, `context_with_system` and
`appendContextEdit` when you upgrade. SDK embedders who assigned
`agent.state.messages` to change context must port to SessionManager on
0.87.0.

**Two extension gates stopped leaking in 0.86.0.** Through 0.85.1, an
extension that routed your `!` shell commands into a VM
[ran them on the host](https://github.com/earendil-works/pi/pull/9662) if its
handler threw. It now fails closed, and handlers that relied on fall-through
must return `undefined`. And RPC `steer` and `follow_up` messages
[bypassed extension `input` handlers](https://github.com/earendil-works/pi/commit/faa9863cb8b54689f1d0c2df9dbab1ee1fa9de19),
so an embedded session gated by an input extension was ungated on those two
commands. Neither got an advisory; the repository still lists only the four
it published on 8 June.

**New egress, off by default.**
[`/bug`](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/src/core/bug-report-upload.ts)
(0.86.0) uploads environment and settings metadata, and optionally the
transcript, to Earendil's Radius gateway without a login. On 0.86.x it
uploaded even in offline mode; 0.87.0 fixed that. In regulated repositories,
use the zip export and read it before sending.

**Still true.** `pi auth print-api-key` prints a live credential to stdout,
and nothing gates it: the command's source is
[unchanged between 0.84.2 and 0.87.0](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/src/cli/auth-command.ts).
Whether the agent's own bash tool can reach it is up to whatever sandbox you
put around Pi. Commands the bash tool runs also receive
[`PI_SESSION_FILE`](https://github.com/earendil-works/pi/blob/v0.82.0/packages/coding-agent/docs/environment-variables.md#bash-tool-session-environment),
a pointer to the full transcript. Compaction handlers written against the live
docs fire from
[0.84.3](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/src/core/agent-session.ts#L583-L584).

## What is unresolved

- When the facet host becomes a supported, installable surface, and whether a
  permission wrapper ships with it or stays a diagram.
- Whether headless runs will ever make a trust decision, or keep loading a
  checkout's context files unasked.
- Whether extensions that can now spend credentials and rewrite requests get
  any review or capability boundary.
- Whether HarnessTax's cost gap holds on long-horizon work, which the study
  did not test.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
or an earlier run named in the claims, and this page says what was true on the
date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
