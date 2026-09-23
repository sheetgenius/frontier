---
schema_version: bitter.frontier_profile.v0
profile_id: cursor
label: Cursor
owner: Anysphere
source_contract: sources/cursor.yml
homepage: https://cursor.com
docs: https://cursor.com/docs/cli/overview
changelog: https://cursor.com/changelog
tagline: "A closed editor, CLI and cloud-agent product that is turning into a fleet manager, read from its changelog and docs because the GitHub repo is only a bug tracker."
compared_with:
  - claude-code
  - antigravity
  - github-copilot-cli
  - grok-build
surface_class: closed_source_release_notes
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: github-tracker-is-not-source
    last_verified: 2026-09-23
    status: open_question
    note: "github.com/cursor/cursor is a README, a security policy and a bug tracker. Its advisory list is the only vendor security channel; the editor and agent source are not public."
  - id: changelog-mixes-surfaces
    last_verified: 2026-09-23
    status: retired
    note: "Settled for 2026-08-20..2026-09-21: every main-changelog entry was a cloud-agent or Origin change; the CLI has its own changelog."
  - id: cli-build-unnoted-no-digest
    finding_id: 2026-09-21-cursor-cli-install-channel-serves-an-unnoted-build-no-digest-and-the-cli-changelog-stops-at-08
    last_verified: 2026-09-23
    status: active
  - id: projects-coordinator-beta
    finding_id: 2026-09-21-cursor-projects-a-coordinator-that-spawns-agents-on-its-own-beta-cloud-only
    last_verified: 2026-09-23
    status: active
  - id: self-hosted-what-leaves
    finding_id: 2026-09-21-cursor-self-hosted-machines-the-headline-says-execution-stays-in-your-network-the-docs-list-what
    last_verified: 2026-09-23
    status: active
  - id: mcp-hook-server-identity
    finding_id: 2026-09-21-cursor-hooks-beforemcpexecution-gains-server-identity-and-the-doc-tells-allowlist-hooks-to-deny
    last_verified: 2026-09-23
    status: active
  - id: start-from-scratch-origin
    finding_id: 2026-09-21-cursor-cloud-agents-without-an-scm-start-from-scratch-writes-to-origin-by-default
    last_verified: 2026-09-23
    status: active
  - id: no-advisory-sandbox-claim
    finding_id: 2026-09-21-cursor-no-in-window-security-advisory-despite-a-public-sandbox-escape-claim
    last_verified: 2026-09-23
    status: active
  - id: grok-bot-separate-product
    finding_id: 2026-09-21-cursor-grok-bot-a-separate-teammate-product-now-documented-inside-cursor-s-docs-and-bundled-in
    last_verified: 2026-09-23
    status: active
  - id: models-pool-openai-cutoff-undated
    finding_id: 2026-09-21-cursor-economics-cursor-models-pool-and-bundling-undated-doc-state
    last_verified: 2026-09-23
    status: active
stance:
  use_for: "Teams already in the Cursor editor or cloud agents who want a dated read of what the vendor says shipped, surface by surface. The terminal agent is the `agent` CLI from cursor.com/install; pin the versioned build and record your own checksum."
  avoid_for: "Anyone who must audit enforcement in source. Running the CLI on untrusted repos on the strength of its macOS sandbox while a public git escape claim sits unanswered. Self-hosted workers adopted for data residency without reading what the docs say leaves."
  watch_next: "An advisory or CLI changelog line on the git fsmonitor sandbox claim; a dated end for OpenAI models on the models page; whether Projects gains a spend cap or approval control; whether the CLI changelog catches up with the builds the installer serves."
---

# Cursor

Cursor is here because people already run it and because the wrappers on
this watchlist, Omnigent among them, route work onto it. It is closed.
[github.com/cursor/cursor](https://github.com/cursor/cursor) holds a README,
a security policy and an issue tracker, not the editor or the agent. What
can be read is the [changelog](https://cursor.com/changelog), the docs, the
install script and the advisory list. You can date an announcement that
way. You cannot trace a permission claim to code, so a local probe is the
only way to learn whether a control binds.

The short read for 2026-09-21: the product is moving from an editor with an
agent toward a service that runs agents for you, in its cloud or on your
machines. The CLI you install is newer than anything its changelog
describes, and a public sandbox-escape claim has no vendor answer yet.

## Where it stands, 2026-09-21

**Four surfaces, four stories.** The editor, the `agent` CLI, cloud agents
and Origin (Cursor-hosted git) ship on different pages. Every main-changelog
entry in the window was a cloud-agent or Origin change. The CLI moved on its
own changelog, and as the runtime for self-hosted workers. Write down which
surface an entry names before you write down the feature.

**Channel.** `curl https://cursor.com/install | bash` resolved build
`2026.09.18-9a7762b` when checked on 23 September. The
[CLI changelog](https://cursor.com/docs/cli/changelog) stops at a 26 August
release, so the build you get is 23 days newer than any note about it. The
script pipes the tarball into `tar` with no checksum step, and the vendor
publishes no digest. To pin, download the versioned URL yourself, record
the sha256, and treat `agent --version` plus that URL as your ship record.

**Projects: a model decides how many agents to start.**
[Projects](https://web.archive.org/web/20260913123011/https://cursor.com/changelog/projects),
in beta since 10 September, gives a coordinator its own cloud computer, and
the coordinator "creates and manages agents on your behalf, running as many
in parallel as the work needs." Subscriptions let it start work from Slack
messages, PR activity, CI runs or a schedule, and it can start a local
agent on your laptop. The docs name no spend cap, approval gate or
concurrency limit. A Slack channel wired to a Project turns everyone who
can post there into someone who can start work, prompt injection included.
Not available on Enterprise plans or with legacy Privacy Mode.

**Self-hosted machines keep less at home than the headline says.** The
[2 September entry](https://web.archive.org/web/20260903052248/https://cursor.com/changelog/self-hosted-machines)
says tool execution stays "entirely in your own network." The docs section
"What leaves your network" is narrower: the checkout, build cache and local
credentials stay, but file contents, terminal output, diffs, screenshots,
local MCP results and artifacts go to Cursor, the artifacts to a
Cursor-managed S3 bucket you can block. The agent loop and model calls stay
in Cursor's cloud. Workers run from `agent worker start`, so a CLI upgrade
is a worker upgrade.

**Fix your MCP allowlist hooks.** Between 20 August and 2 September the
[hooks docs](https://web.archive.org/web/20260902233313/https://cursor.com/docs/hooks)
added `mcp_server_name` to the MCP hook input and now tell allowlist hooks
to treat a missing or unexpected name as a deny. A hook that matches on
`command` can be sidestepped by a server launched from a different path.
Match on server name plus tool name, and fail closed when the field is
absent on older builds. Enterprise-managed hooks now also run on
self-hosted workers.

**Your code may land on Cursor's git.** Since 27 August, cloud agents
[no longer need a forge](https://web.archive.org/web/20260901121134/https://cursor.com/changelog/start-from-scratch):
"Start from scratch" creates an Origin repository in the background. If
your organisation requires code on its own SCM, check the admin setting.

**Security channel: silent.** The
[advisory list](https://github.com/cursor/cursor/security/advisories) has
nothing newer than 14 July. On 15 September a researcher
[posted](https://x.com/matviy/status/2099872739758874805) a macOS CLI
sandbox escape through a git `core.fsmonitor` variant, after an earlier fix,
and says the vendor acknowledged it. No primary surface confirms or dates a
fix. Until an advisory or a CLI changelog line names it, assume the sandbox
does not cover git that the harness runs, and keep untrusted repositories
off the CLI.

**Grok Bot is not the CLI.** Cursor's docs now carry
[Grok Bot](https://cursor.com/docs/grok-bot.md), a separate desktop and iOS
product of named bots sharing one persistent cloud computer, included with
paid Cursor plans. Its terms say bots "must not be treated as separate
security boundaries." Network allowlists, enforced review and audit logs
are Enterprise-only, and with no policy set, egress is allow-all. Admins
should decide whether to allow it before members find it. It is also not
xAI's Grok Build.

**The model supply.** SpaceX
[agreed in June](https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html)
to buy Cursor's parent, Anysphere, and press reports put the close at 14
August. Cursor's [models page](https://cursor.com/docs/models-and-pricing.md) now gives a
separate, larger included-usage pool to its own and SpaceXAI models. On 29
August Cursor's CEO
[said](https://x.com/mntruell/status/2093532254006063557) OpenAI plans to
block Cursor users from its models "in three months." No primary source we
found gives the date, and the models page still lists OpenAI models with no
end date. If a workflow depends on GPT-family models, inventory it now.

## What is unresolved

- Whether the git fsmonitor sandbox escape is fixed, and in which CLI build.
- When, and whether, OpenAI models leave Cursor. The CEO's statement is one
  party's account; a dated line on the models page would settle it.
- Whether Projects gets a usage ceiling or a per-Project approval control.
- Which CLI build first emits `mcp_server_name` to hooks. The docs do not
  say.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
