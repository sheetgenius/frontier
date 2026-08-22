---
schema_version: bitter.frontier_profile.v0
profile_id: gemini-cli
label: Gemini CLI
owner: Google
source_contract: sources/gemini-cli.yml
homepage: https://github.com/google-gemini/gemini-cli
docs: https://google-gemini.github.io/gemini-cli/docs/
tagline: "The consumer service is gone and the repo is not. Stable runs about two weeks behind its own security merges."
compared_with:
  - antigravity
x:
  project: geminicli
  maintainers:
    - handle: ntaylormullen
      name: N. Taylor Mullen
repo: https://github.com/google-gemini/gemini-cli
surface_class: open_source_commits
evidence_floor: commit_diff_reviewed
status: active_watch
last_updated: 2026-08-20
last_full_review: 2026-08-20
claims:
  - id: v0-56-0-stable-is-two-chore-commits
    finding_id: 2026-08-20-gemini-cli-v0-56-0-is-stable-and-two-chore-commits-past-v0-55-1
    last_verified: 2026-08-20
    status: active
  - id: enableagents-false-loads-builtins-on-0-56-0
    finding_id: 2026-08-20-gemini-cli-enableagents-false-still-loads-builtins-on-0-56-0
    last_verified: 2026-08-20
    status: active
  - id: git-env-hardening-preview-only
    finding_id: 2026-08-20-gemini-cli-git-env-hardening-is-preview-not-0-56-0
    last_verified: 2026-08-20
    status: active
  - id: consumer-service-retired-2026-06-18
    finding_id: 2026-07-01-gemini-cli-consumer-service-retired
    last_verified: 2026-07-01
    status: active
  - id: oss-repo-active-enterprise-serving
    finding_id: 2026-07-01-gemini-cli-consumer-service-retired
    last_verified: 2026-07-01
    status: active
  - id: memory-reviewable-patch
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: memory-private-allowlist
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: workspace-trust-visible-mcp
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: workspace-trust-headless-enforcement
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: shell-safety-evals
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: shell-tools-allowlist
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: subagents-approval-mode-aware
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: subagent-protocol-pluggable
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: session-invocation-protocols-stable
    finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
    last_verified: 2026-05-27
    status: active
  - id: agent-registration-first-wins
    finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
    last_verified: 2026-05-27
    status: active
  - id: auto-modes-merged
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: policy-engine-in-acp
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: auto-edit-shell-redirect-approval
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: session-export-import
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: session-resume-reliability
    finding_id: 2026-05-12-gemini-session-resume-reliability
    last_verified: 2026-05-12
    status: active
  - id: agent-execution-stopped-json
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: long-horizon-goal-primitive
    last_verified: 2026-05-11
    status: open_question
    note: "No supporting finding exists. Tracked as open_question because the absence is itself the operating fact: Gemini CLI has shipped no first-class long-horizon goal/mission/outcome primitive through 2026-05-12, and operators relying on long-horizon intent persistence must build it externally."
  - id: v0-45-0-mcp-blacklist-and-policy-resilience
    finding_id: 2026-06-03-gemini-cli-v0-45-0-release
    last_verified: 2026-06-03
    status: active
  - id: antigravity-migration-funnel-stable
    finding_id: 2026-06-23-gemini-antigravity-migration-to-stable
    last_verified: 2026-06-23
    status: active
  - id: antigravity-banner-uncapped-stable
    finding_id: 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
    last_verified: 2026-06-23
    status: active
  - id: skill-path-traversal-fix-preview-only
    finding_id: 2026-06-23-gemini-skill-path-traversal-stranded-in-preview
    last_verified: 2026-06-23
    status: active
    channel: preview-or-beta
    note: "Open security exposure on stable. The skill install/link/uninstall path-traversal fix (commit bca5667fc / PR #27767) is NOT in any stable release as of 2026-06-23 -- second consecutive window stranded. It is an ancestor of v0.48.0-preview.0 only (`compare v0.48.0-preview.0...bca5667fc` -> status behind; `compare v0.47.0...bca5667fc` -> status diverged, ahead_by 7, behind_by 2). Stable users on v0.47.0 remain exposed: a malicious .skill package can write outside the skills directory. Channel = preview-or-beta; do NOT assert the fix as shipped to stable. NOT re-verified in the 2026-07-02..2026-07-27 window; five stable tags have shipped since, so treat this note as stale rather than as a current channel reading."
posture_basis:
  capability:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-05-12-gemini-session-resume-reliability
    - 2026-05-27-gemini-session-invocation-protocols-stable
  accessibility:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    - 2026-06-23-gemini-antigravity-migration-to-stable
    - 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
  governance:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-05-12-gemini-session-resume-reliability
    - 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    - 2026-06-23-gemini-skill-path-traversal-stranded-in-preview
  succession:
    - 2026-06-23-gemini-antigravity-migration-to-stable
    - 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
stance:
  use_for: "Teams that want agent state as reviewable material -- memory patches approved before they stick, sessions exported and moved between machines, a structured end-of-run signal for CI -- running v0.51.0 or later. Workspace trust enforces in headless mode, which is what makes unattended and CI use defensible here at all."
  avoid_for: "Any deployment where the stable channel has to be the patched channel. Stable ran roughly two weeks behind its own security merges all window: on 2026-07-08 the stable tag carried none of the security batch that a preview published 46 minutes earlier did, a zero-click a2a-server remote-code-execution fix reached preview only, and an ADC cleartext-credential fix reached nightly only. Specifically, do not run the a2a-server backend against workspaces you do not control on v0.52.0 or earlier, and do not use the shipped docs to decide whether your account tier still has access."
  watch_next: "When PR 28470 (a2a-server RCE) and PR 28517 (ADC HTTPS enforcement) reach stable, and whether the roughly two-week preview-to-stable interval is policy or drift; whether the maxSessionTurns default lands at 15 and starts truncating long agent runs; whether the eight-account contributor set and the auto-closing LLM triage bot narrow the project further; and whether the versioned docs ever record that consumer authentication ended."
---

# Gemini CLI

## Operator Read

As of 2026-08-20, npm latest is
[v0.56.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0):
two chore commits past v0.55.1, not a descendant of the retry/TTL work,
and a drop of the Cloud Workstations OAuth redirect that v0.55.1 has.
`experimental.enableAgents: false` still loads built-in subagents
([registry.ts at the tag](https://github.com/google-gemini/gemini-cli/blob/v0.56.0/packages/core/src/agents/registry.ts)).
Git subprocess env neutralization is in
[v0.57.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.0),
not in latest. docs/changelogs/latest.md at the v0.56.0 tag still
opens at v0.54.0.

The obituaries were wrong and the release channel is the real story. Google ended
consumer Google-account access for the unpaid and Google One tiers on 2026-06-18,
and the public conversation concluded from that the tool was dead. The repository
says otherwise: `archived: false`, 35 merged pull requests, three stable tags, and
near-daily nightlies inside the 2026-07-02 to 2026-07-27 window, including the
largest security release the project has shipped.

The thing an operator should actually plan around is that **stable is
structurally about two weeks behind Gemini CLI's own security merges.** That is
not a one-off. On 2026-07-08 the stable tag `v0.50.0` contained none of the
pending security batch, while `v0.51.0-preview.0`, published 46 minutes earlier,
contained all of it. The five boundary fixes that landed in
[`v0.51.0`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0)
took between 9 and 20 days each from merge to stable. At window close a zero-click
remote-code-execution fix for the a2a-server backend was in preview and not
stable, and a fix preventing Application Default Credentials from crossing plain
HTTP was in neither -- nightly only.

The good news for anyone carrying our prior warnings: **both open carry-forwards
closed.** The memory-import symbolic-link escape and the `@file` path hardening
are in stable as of `v0.51.0`. That release is the upgrade floor for anyone
running Gemini CLI against repositories they do not control.

And one thing to stop trusting entirely: the shipped documentation. At the
`v0.52.0` tag, `authentication.mdx` still lists consumer free-tier accounts as
eligible, with no mention anywhere in the file of the discontinuation, the
successor, or the date. The only notice is a banner injected by the website, still
in the future tense more than a month after the event. A public post named the
cutoff 13 days before the product acknowledged it at runtime, which means X has
been more accurate than the versioned docs for over 25 days.

## Channel posture: stable trails its own security work

Channel is resolved by git ancestry against the dereferenced tag commit, not by
version number or date. Registry state at window close, from the
[npm dist-tags](https://registry.npmjs.org/@google/gemini-cli): `latest` =
`0.52.0`, `preview` = `0.53.0-preview.0`, `nightly` =
`0.54.0-nightly.20260727.g3818efbbf`.

### What reached stable

[`v0.51.0`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0)
(2026-07-16) is the security release of the window and carries five boundary fixes
at once, each `ahead` against `v0.51.0` and `diverged` against `v0.50.0`:

| fix | PR | merged | merge to stable |
| --- | --- | --- | --- |
| case-insensitive sensitive-path blocklist, plus VS Code approval prompt | [27966](https://github.com/google-gemini/gemini-cli/pull/27966) | 2026-06-26 | 20 days |
| defensive path resolution for `@file` at-references | [28053](https://github.com/google-gemini/gemini-cli/pull/28053) | 2026-06-30 | 16 days |
| symbolic-link directory escape in the memory import processor | [28233](https://github.com/google-gemini/gemini-cli/pull/28233) | 2026-07-01 | 15 days |
| `~/.gitconfig` made read-only in the macOS sandbox | [28221](https://github.com/google-gemini/gemini-cli/pull/28221) | 2026-07-06 | 10 days |
| strip thoughts from scrubbed history turns | [27971](https://github.com/google-gemini/gemini-cli/pull/27971) | 2026-07-07 | 9 days |

Two of those are the carry-forwards this profile has tracked since 2026-07-01.
The memory-import escape is
[confirmed present in `v0.51.0` by ancestry](https://github.com/google-gemini/gemini-cli/compare/ff00dacd9f33d9842cfc3b5d6c53a1b2cbc44636...v0.51.0)
and absent from `v0.50.0`. Both are closed. Stable operators can stop avoiding
untrusted `GEMINI.md` memory imports once they are on `v0.51.0`; anyone pinned to
`v0.49.0` or `v0.50.0` is still exposed.

[`v0.52.0`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)
(2026-07-22) is a reliability and tier-messaging release rather than a security
one. Fifteen merges; the operator-relevant ones are plan-mode write policy
simplified to support relative paths
([28398](https://github.com/google-gemini/gemini-cli/pull/28398)), a runtime
notice when the account has no consumer Code Assist tier
([28304](https://github.com/google-gemini/gemini-cli/pull/28304)), enriched
shared-project quota errors, a2a-server task cancellation that now aborts the
execution loop, `write_file` and `replace` no longer routing JSON and IPYNB
through LLM correction
([28223](https://github.com/google-gemini/gemini-cli/pull/28223)), and
`google-auth-library` at 10.9.0. If your automation drives plan mode with relative
paths, 28398 changes the write policy it was written against.

### The day stable was less patched than preview

`v0.50.0` and `v0.51.0-preview.0` were published 46 minutes apart on 2026-07-08.
The preview carried the whole pending security batch. The
[stable](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0) carried
none of it -- its notes list four changes, three of them CI and release plumbing
plus one tool-registry discovery feature -- because the release branch was cut
before those commits landed on `main`.

Taking the newest stable tag on the day it appears is not the same as taking the
newest fixes. That sentence is the whole channel posture for this provider.

### What is stranded right now

**A zero-click a2a-server RCE fix, preview only.**
[PR 28470](https://github.com/google-gemini/gemini-cli/pull/28470) merged
2026-07-21 and states it "reworks the a2a-server backend to prevent zero-click
Remote Code Execution (RCE) and environment poisoning in untrusted workspaces."
The escalation it closes is precise and worth understanding: an attacker plants
`GEMINI_CLI_TRUST_WORKSPACE=true` inside a malicious `.gemini/.env`, so an
untrusted workspace self-validates its own trust before the trust check runs. The
fix defers `loadEnvironment()` until after workspace trust is evaluated, ignores
workspace-level `.env` and `.gemini/.env` entirely when the workspace is
untrusted, and adds per-task environment isolation via `AsyncLocalStorage` and a
`process.env` proxy. Ancestry: `diverged` against `v0.52.0`, `ahead` against
[`v0.53.0-preview.0`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0).
If you run the a2a-server backend against workspaces you do not control, the
stable channel did not carry this at window close.

**An ADC cleartext-credential fix, nightly only.**
[PR 28517](https://github.com/google-gemini/gemini-cli/pull/28517) merged
2026-07-24 and adds a protocol check during `GoogleCredentialsAuthProvider`
initialization so Application Default Credentials access and identity tokens,
including broad-scope `cloud-platform` tokens, cannot be transmitted over plain
HTTP. It is `diverged` against both `v0.52.0` and `v0.53.0-preview.0`, and
`ahead` only against the 2026-07-27 nightly. Neither the `latest` nor the
`preview` dist-tag carries it. Enforce HTTPS at the network layer rather than
waiting for the binary.

**A breaking default queued in preview.**
[PR 28429](https://github.com/google-gemini/gemini-cli/pull/28429) moves the
`maxSessionTurns` default from `-1` (unlimited) to `15` turns per user request,
and adds alternating-pattern detection that halts an A-B-A-B tool-call cycle at
the fifth alternation. The stated threat is an infinite ReAct loop and quota-drain
denial of service driven by indirect prompt injection in workspace files. It is a
reasonable mitigation and it will silently truncate long legitimate agent runs
when it lands. Set `maxSessionTurns` explicitly now rather than inherit the
changed default.

**A sandbox profile whose meaning changes without its name changing.**
[PR 28424](https://github.com/google-gemini/gemini-cli/pull/28424) rewrites the
macOS Seatbelt `permissive-open` and `permissive-proxied` profiles to begin with
`(deny default)` plus an explicit allow-list. The default profile selector is
unchanged, so the configuration you wrote still selects `permissive-open` and
`permissive-open` no longer permits what it did. Preview only. Test before
upgrading.

### No advisory, for any of it

The repository's security-advisories endpoint returned an **empty list** on
2026-07-27, and no CVE was assigned to any in-window change. Every severity word
above comes from a pull request title or body. An operator who wants to know
whether their installed version is exposed has exactly one method available:
resolve ancestry themselves.

## The repo is maintained, and it is narrowing

The standing question from the 2026-06-24 to 2026-07-01 digest -- whether Google
keeps the open-source repo alive now that the consumer service is gone -- is
answered yes, with a qualification.

Alive: [`archived: false`](https://api.github.com/repos/google-gemini/gemini-cli),
Apache-2.0, `pushed_at` 2026-07-27, 35 merged pull requests and 35 commits on
`main` in the window, three stable tags, three previews, near-daily nightlies, and
the largest security release in the project's recent history.

Narrowing, in two specific ways. All 35 in-window merges came from **eight
accounts**, seven human plus the release bot; no merge in the window came from
outside that set. And **eight of the 35** build `tools/caretaker-agent/`, a Cloud
Run service for automated GitHub issue triage. In-window caretaker work includes
the [LLM triage orchestrator](https://github.com/google-gemini/gemini-cli/pull/28345),
[posting a comment before auto-closing an issue](https://github.com/google-gemini/gemini-cli/pull/28411),
and
[sanitizing and wrapping issue titles in `untrusted_context`](https://github.com/google-gemini/gemini-cli/pull/28352)
-- a prompt-injection defense for the triage bot's own input, which is a nice
detail and also a reminder of what the bot is. File bugs expecting machine triage
first, and expect an LLM to be able to close them.

One number deserves a correction to the optimistic reading. Merged-PR counts run
80, then 21, then 35 across the last three windows, which looks like a rebound.
Those windows are 26, 14, and 25 days long, so the per-day rate is roughly 3.1,
then 1.5, then 1.4. Normalized, velocity did not recover after the consumer
shutdown. It held at about half the pre-shutdown rate.

Minor but real: the `@google/gemini-cli` registry document carries a stray
dist-tag literally named `false`, pointing at a May 2026 nightly. Pin explicit
versions in lockfiles.

## Documentation is the least accurate surface here

`docs/get-started/authentication.mdx`, pinned at the
[`v0.52.0` tag commit](https://github.com/google-gemini/gemini-cli/blob/d14583b926769bd98f807cdc6b1ca50e91ae26ec/docs/get-started/authentication.mdx),
describes eligible accounts as including "free tier accounts ... such as Gemini
Code Assist for individuals" and instructs Google AI Pro and Ultra subscribers to
sign in with their subscription account. A search of that file at the tag for
`antigravity`, `june 18`, `discontinu`, `replaced`, `unpaid`, `google one`, and
`deprecat` returns no match. The versioned docs shipped with the current stable
contain no notice that consumer service ended.

The [rendered site](https://geminicli.com/docs/get-started/authentication/) does
carry a banner, and it is still in the future tense: Gemini CLI "will be replaced
by Antigravity CLI on June 18th," more than a month after June 18th. That text is
not in the repository at the tag, so it is injected by the site rather than
versioned with the code.

What the product does instead is tell you at runtime.
[PR 28304](https://github.com/google-gemini/gemini-cli/pull/28304), in `v0.52.0`,
adds a notice when the account has no consumer Code Assist tier, steering the user
to set `GOOGLE_CLOUD_PROJECT` for the Vertex AI path. That is the first in-product
receipt for a change that took effect on 2026-06-18, and a public post had named
the date and the successor 13 days earlier.

The operator rule is blunt: do not use the shipped Gemini CLI docs to determine
whether your tier still has access. Try the login.

## Managed succession, now completed

The earlier reading of an in-product funnel steering free-tier users toward
Antigravity CLI has resolved into a finished event rather than a trajectory. The
[migration funnel](https://github.com/google-gemini/gemini-cli/pull/27765) and the
[uncapped transition banner](https://github.com/google-gemini/gemini-cli/pull/27676)
reached stable in v0.47.0; the service they were steering away from ended on
2026-06-18; and the runtime now handles the consequence directly. Two notes
survive as posture rather than as news. The steered install was a pipe-to-shell of
a remote script presented inside a trusted CLI, which normalizes unverified remote
installs from inside an agent. And the scope was always the unpaid and Google One
tiers, not paid Google Cloud or Vertex paths, which is why the tool is still a
reasonable enterprise choice.

*Findings: `2026-06-23-gemini-antigravity-migration-to-stable`,
`2026-06-23-gemini-antigravity-banner-uncapped-in-stable`,
`2026-07-01-gemini-cli-consumer-service-retired`.*

## Authority and state surfaces

The durable capability read, unchanged in substance this window.

**State you can inspect.** The
[Auto Memory](https://github.com/google-gemini/gemini-cli/commit/a7beb890d093e2cf66ed1ac8debff690b75e1f6d)
inbox proposes durable memory updates as patches you review before they stick,
with private patches behind a
[tightened allowlist](https://github.com/google-gemini/gemini-cli/commit/7fb5146c6b084888b38dea05af6a4e95ea48810a)
separating personal from project scope. A session
[exports to a file and imports via flag](https://github.com/google-gemini/gemini-cli/commit/3805640530a9),
so session state is a serializable artifact rather than ambient context, and
[resume works on legacy formats](https://github.com/google-gemini/gemini-cli/pull/26577)
with failures surfacing as errors instead of silently starting fresh. For
non-interactive callers, `AgentExecutionStopped` emits as
[structured JSON](https://github.com/google-gemini/gemini-cli/commit/469092a72cbe368b69df25c0caeefbc911b6d6fd).

**Authority that follows headless and delegated runs.**
[Workspace trust enforces in headless mode](https://github.com/google-gemini/gemini-cli/commit/dba9b9a0ff5a43a5d40d554b944db3e2ce99d5b6),
so `--non-interactive` no longer skips the trust prompt silently, and
[trust state is visible](https://github.com/google-gemini/gemini-cli/commit/a38f393af77c0ccf50da10d73c84cfb594dd8175)
in the MCP listing. Shell execution carries
[safety evals](https://github.com/google-gemini/gemini-cli/commit/82f6ea5b61a6321748d81a62d34c62bf7d2c9fa2)
plus a
[core-tools allowlist](https://github.com/google-gemini/gemini-cli/commit/27927c55e5b4947df0f2e853971c170000429dec)
in the policy engine. Subagents are
[approval-mode aware](https://github.com/google-gemini/gemini-cli/commit/40b384de2c1d251c9d13a6359216a9e6cff5a254),
so delegated work inherits the active posture rather than escaping it.

Worth holding against this window's a2a-server finding: workspace trust is the
control most of the above rests on, and PR 28470 closed a path where an untrusted
workspace could vouch for itself. The primitive is sound; its edges are still
being found.

**Delegation protocols.** As of
[v0.44.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0),
`LocalSessionInvocation` and `RemoteSessionInvocation` ship as the
session-invocation protocols, and agent registration is first-wins
prioritize-project. Where a remote invocation actually runs is still undocumented,
so treat delegated workflows as testable but do not put the remote path into
production until Google names a destination.

**Autonomy defaults.** v0.44.0 collapsed the fan of Auto variants into a single
Auto mode and added shell-redirect auto-approval in `AUTO_EDIT`; PolicyEngine
integrates into ACP sessions, framed as a deadlock fix, with the structural effect
that enforcement reaches the protocol-session layer. Operators who came from an
earlier Auto variant still have to re-audit what the merged mode treats as safe,
because the release notes never enumerated which prior constraint survived.

*Posture basis: `2026-05-07-gemini-reviewable-memory-and-trust`,
`2026-05-11-gemini-subagent-protocol-and-session-portability`,
`2026-05-12-gemini-session-resume-reliability`,
`2026-05-27-gemini-session-invocation-protocols-stable`,
`2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp`,
`2026-06-03-gemini-cli-v0-45-0-release`.*

## Open questions

What this window answered:

- **Do the memory-import symlink escape and the `@file` hardening reach stable?**
  Yes, both, in `v0.51.0` on 2026-07-16, 15 and 16 days after merge. Both
  carry-forwards are closed.
- **Is Google still maintaining the open-source repo?** Yes. 35 merges, three
  stable tags, and the window's largest security release, against a contributor
  set of eight accounts and a per-day merge rate holding at roughly half the
  pre-shutdown level.
- **Was the preview-to-stable lag a one-time artifact?** No. It is the provider's
  normal operating shape, measured at 9 to 20 days on the fixes that did land and
  open-ended on the ones that did not.

Still open:

- **When do PR 28470 and PR 28517 reach stable, and is the interval policy or
  drift?** A stated support policy would resolve it. Absent one, an operator has
  to resolve ancestry themselves, per fix, per release.
- **Did the skill-path-traversal fix (`bca5667fc` / PR #27767) ever reach a stable
  tag?** This window's harvest did not re-check it, and five stable tags have
  shipped since the last reading. The claim note is stale rather than current; do
  not cite it as an open exposure without re-resolving ancestry against `v0.52.0`.
- **Where do remote session invocations actually run?** `RemoteSessionInvocation`
  has been stable as a protocol since v0.44.0 with no documented runtime target.
- **What is the PolicyEngine-in-ACP default posture** -- per-session enforcement by
  default, or only when an operator has configured a policy?
- **Is `AUTO_EDIT` shell-redirect auto-approval gated by workspace trust, by the
  shell-tools allowlist, or by a separate decision?**
- **Does Gemini CLI offer a first-class long-horizon primitive** (goal, mission,
  outcome) beyond in-session todos and memory? Memory captures facts, not intent.
  No accepted finding establishes one, and this window produced nothing that
  changes the answer. Tracked as `long-horizon-goal-primitive`.
- **What state crosses the wire on session export?** Whether accepted memory
  patches, approval-mode state, or active MCP connections are included is still
  undocumented.
- **Does the caretaker agent's auto-close path have a human appeal route?** An LLM
  that can close issues is a triage policy with no published escalation contract.

For research-lens open questions (preview and nightly harvest treatment, security
advisory handling), see `sources/gemini-cli.yml#discovery`.

## What to watch next

- **The preview-to-stable interval on the two stranded fixes.** These are the
  concrete tests: does the a2a-server RCE fix land in `v0.53.0`, and does the ADC
  HTTPS enforcement skip preview or wait a full cycle? Two data points would turn
  an observed lag into a documented one.
- **`maxSessionTurns` at 15.** When it reaches stable, long agent runs start
  ending at fifteen turns without an obvious cause. Watch for the release that
  carries it and for whether the notes say so plainly.
- **The Seatbelt profile rename problem.** `permissive-open` meaning something
  materially different while keeping its name is the kind of change that produces
  support tickets rather than upgrade notes.
- **Whether the versioned docs ever record the consumer shutdown.** More than a
  month of a future-tense site banner over a docs file that still describes the
  retired path is the surface most likely to mislead a new user.
- **Whether the contributor set widens or narrows further,** and how much of the
  merge volume the caretaker agent accounts for. Eight accounts and a triage bot is
  a maintainable project; it is not a community one.
- **Whether any GitHub security advisory is ever published.** Months of boundary
  fixes with an empty advisory list is a disclosure posture, not an accident.
- Documentation or schema for the session-export file format, and further
  structured non-interactive output beyond `AgentExecutionStopped`.

## Profile Hygiene

This profile follows the profile discipline defined in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim has an
inline source link; posture sections may interpret freely but cite finding IDs
when naming a specific feature, behavior change, or cross-project comparison.
Cross-project editorial belongs in the weekly digest, not here. Git history is the
audit trail; removed claims live in the diff log.

Note on this revision. The 2026-07-02 to 2026-07-27 material is carried in prose
with pinned receipts and is not registered in the `claims:` block. Every channel
statement above was resolved by GitHub compare against the dereferenced tag
commit, and release dates are `published_at` timestamps from the API rather than
rendered HTML. One registered claim,
`skill-path-traversal-fix-preview-only`, was not re-verified in this window and is
flagged as stale in its own note rather than silently carried forward as current.
