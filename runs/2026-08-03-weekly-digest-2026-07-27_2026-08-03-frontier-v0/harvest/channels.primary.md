# Primary harvest -- channel state, 2026-07-27..2026-08-03

Every claim below is resolved to a channel. Where a repository is inspectable,
channel is decided by **git ancestry**, not by date.

## Carry-forward checks from the 2026-07-27 run

The prior manifest carried five. All five are answered.

| Carried item | Answer | Channel reached |
|---|---|---|
| OpenHands tags its open-source line again | **yes, five times** -- but see the renumbering below | stable |
| Hermes approval guardrails reach a tag | **yes** | stable tag `v2026.8.3` |
| OpenClaw sandbox-assertion fix reaches any channel | **beta only** | `preview-or-beta` |
| Codex network-authority wave leaves alpha | **yes** | stable `rust-v0.146.0` |
| Gemini zero-click a2a-server fix reaches stable | **yes** | stable `v0.53.0` |

Three of the five reached a channel an operator installs. That is the window's
positive half and it is not a small one: last window these were the outstanding
merged-but-unreleased controls.

---

## 1. OpenHands: the version number went backwards on the same line

Verified, and the mechanism is documented by the project itself.

- The OpenHands agent line last tagged **`1.11.0`** on 2026-07-09T19:37:16Z
  (preceded by `1.10.0`, `1.9.3`, `1.9.2` -- an unprefixed series).
- In this window the repository published **`v1.6.1`** (2026-07-28T17:16:43Z),
  **`v1.7.0`** (07-29), **`v1.7.1`**, **`v1.7.2`** (both 07-30) and **`v1.8.0`**
  (2026-07-30T17:07:53Z), which GitHub marks **Latest**.
- `v1.6.1`'s body is entirely
  [`OpenHands/agent-canvas`](https://github.com/OpenHands/agent-canvas) content:
  "fix(release): recover npm publish after tombstoned 1.6.0", and a changelog
  link to `agent-canvas/compare/v1.6.0...v1.6.1`.
- The same body states the provenance in the project's own words:

      Migrated from https://github.com/OpenHands/agent-canvas/releases/tag/v1.6.1
      to seed Agent Canvas release history in OpenHands/OpenHands.
      This release migration was performed by an AI agent (OpenHands) on behalf
      of the user.

- `OpenHands/agent-canvas` is **archived** (last push 2026-07-27T15:06:55Z), and
  described as "OpenHands Agent Canvas is a Open Source AI coding platform."
- From **`v1.7.0`** onward the releases are cut from `OpenHands/OpenHands`
  itself -- every PR in `v1.7.0`'s body is an `OpenHands/OpenHands` PR (#16092,
  #16095, #16097, #16099, #16113, #16122, #16129, #16133, #16134, #16152,
  #16154, #16169, #16183) -- while continuing the Agent Canvas number series and
  carrying its `AGENT_CANVAS_DOCKER_START` marker. One of those PRs is
  [#16133](https://github.com/OpenHands/OpenHands/pull/16133),
  `ci: disable tag publish triggers for release migration`, so the migration's
  effect on publish automation was anticipated and handled.
- **Same git line, confirmed by ancestry.**
  `compare/1.11.0...v1.8.0` returns `status: ahead, ahead_by: 903, behind_by: 0`.
  `v1.8.0` contains everything `1.11.0` contained plus 903 commits.

**So: 903 commits forward in history, roughly three minor versions backward in
number, on one line -- and the release page's "Latest" now sorts below a release
from three weeks earlier.**

Operator consequence, concrete and checkable: anything that compares versions
rather than dates -- a package manager constraint, a Renovate or Dependabot
rule, a pinned container tag, an internal "are we current?" check -- reads
`1.11.0 > 1.8.0` and treats the newer release as a downgrade. Automated update
paths that gate on version ordering will not take it.

**Both halves.** The consolidation is real work done in the open: two products
folded into one repository and one release train, each migrated release
carrying a sentence saying where it came from and that an agent performed the
move, with publish triggers deliberately disabled during it. The side effect is
that the version number stopped being monotonic on that line.

**Not claimed:** no security impact, no concealment. The provenance is stated in
every migrated body.

Also in-window, in `v1.7.0`:
[`fix(security): authenticate WebSockets outside URLs`](https://github.com/OpenHands/OpenHands/pull/16095)
-- moving WebSocket authentication out of the URL, where it would otherwise
reach logs and referrers. Stable.

## 2. Claude Code: a ten-day silence after a near-daily cadence

Two independent surfaces agree.

- The published changelog's newest entry is **2.1.220**, dated July 25, 2026.
  Nothing dated inside this window.
- The npm registry for `@anthropic-ai/claude-code` shows the last publish as
  **2.1.220 at 2026-07-24T23:11:21Z**, and `dist-tags.latest` still resolves to
  it. The five preceding publishes were 2.1.216 (07-20), 2.1.217 (07-21),
  2.1.218 (07-22), 2.1.219 (07-24T16:11) and 2.1.220 (07-24T23:11).

A tool that had been shipping most days published nothing for ten days. Recorded
as a cadence fact with two receipts. **No cause is asserted** -- nothing in the
public record states one, and guessing at one would be exactly the sort of claim
this publication declines to make.

Operator consequence: the newest installable Claude Code remains 2.1.220, so
2.1.219's permission and sandbox fixes are still the current floor; automation
that expects a weekly bump did not fire.

## 3. Gemini CLI: the workspace that trusted itself (fix reached stable)

- [PR #28470](https://github.com/google-gemini/gemini-cli/pull/28470),
  `fix(a2a-server): enforce workspace trust and task isolation to prevent RCE`,
  merged 2026-07-21T16:54:15Z, commit `c776c665b0`.
- Shipped in **stable [`v0.53.0`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0)**,
  2026-07-28T21:45:42Z. `v0.53.1` followed 2026-07-31.

The PR describes the defect plainly: the a2a-server backend loaded workspace
environment files before evaluating workspace trust, so an attacker could place
`GEMINI_CLI_TRUST_WORKSPACE=true` inside a malicious `.gemini/.env` "to
self-validate their own untrusted workspace before trust is checked." The stated
class is **zero-click remote code execution** and environment poisoning in
untrusted workspaces.

The fix defers `loadEnvironment()` until after `checkPathTrust`/`setIsTrusted`,
ignores workspace-level `.env` and `.gemini/.env` entirely when the workspace is
untrusted (falling back to the user's home directory), and adds task-level
environment and process isolation via `AsyncLocalStorage` and a `Proxy` on
`process.env`. The PR states this "aligns the a2a-server backend's security
model with the existing secure implementation in the CLI frontend."

The shape is the cleanest example this publication has yet recorded of a guard
consulting the thing it guards: the trust decision was read out of the directory
whose trustworthiness was in question.

## 4. Codex: the network-authority wave reached stable

**[`rust-v0.146.0`](https://github.com/openai/codex/releases/tag/rust-v0.146.0)**,
2026-07-29T01:42:51Z, stable. Last window this work was alpha-only.

Landed in the tag, among others: exec-server network policy callback types and
their enablement (#34620, #34770), routing exec-server HTTP through the
configured proxy policy (#35023), propagating resolved proxy policy through auth
routing (#34649) and auth refreshes (#34655), allowing explicitly permitted
loopback proxy targets (#34603), skipping missing paths in filesystem sandbox
entries (#34598), shell approval keys as path URIs (#34806), fixing network
access rendering in sandbox prompts (#34811), and preserving plugin attribution
across command approvals (#35029).

Four of the wave's items are **Windows-specific sandbox work**: routing Windows
sandbox proxy traffic by restricting SID (#34613), hardening Windows elevated
sandbox startup (#34629), preserving Windows sandbox proxy settings in guardian
sessions (#35036), and reliably terminating sandboxed process trees (#34624).

The window also carried heavy prerelease traffic: `0.146.0-alpha.13/.14` and
seven `0.147.0-alpha.*` builds between 07-27 and 08-03, the newest
`0.147.0-alpha.1.2` on 2026-08-03T17:22:05Z. Alpha is not a channel an operator
should be told to run.

## 5. Hermes: the approval guardrails reached a tag

**[`v2026.8.3`](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.3)**
(v0.20.0), 2026-08-03T16:57:52Z. Preceded by the rollup patch `v2026.7.30`
(v0.19.1), 2026-07-30T23:45:37Z.

Every item the prior window carried is now in a tag, in the release's own words:
`hermes approvals suggest` mines approval history into allowlist proposals; an
operator-customizable `approvals.smart_policy`; a consecutive-denial circuit
breaker that "stops a misbehaving loop cold"; profile-correct desktop pairing
approvals; and "a new approval gate for docker/podman daemon-redirect commands"
(#72259, #72186, #72203, #74446, #71092).

**This repairs a gap this publication named.** The 2026-06-04..06-16 issue
recorded that Hermes removed its default 600-second subagent wall-clock timeout
in the same week it shipped fire-and-forget background subagents, leaving
runaway detection to heartbeat staleness alone. `v0.20.0` adds
**session-wide runaway-loop caps for `web_search` and `delegate_task`**
([#66600](https://github.com/NousResearch/hermes-agent/pull/66600)), credited in
the notes as Claude Code-inspired. Thread check, step 6.

Also tagged: Tier-3 credential reads scoped, CVE dependency pins refreshed
(cryptography, starlette, python-multipart), hindsight env file mode `0600`
(#75888, #72362).

Scale note for the profile: the v0.19.1 body states that since v0.19.0 on
July 20 the default branch took "~2,789 commits, ~4,748 files changed, ~442,000
insertions, ~392,300 deletions."

## 6. OpenClaw: the sandbox fix stopped at beta

- [PR #113405](https://github.com/openclaw/openclaw/pull/113405),
  `security fix(agents): close symlink-then-.. workspace boundary bypass in
  assertSandboxPath`, merged 2026-07-27T07:16:00Z, commit `cc027149e553`.
- Ancestry: contained in **`v2026.7.2-beta.5`** (2026-07-28T03:23:12Z) and the
  later betas `-beta.6` (08-01) and `-beta.7` (08-02).
- **Not** contained in the latest stable, **`v2026.7.1`**, published
  2026-07-13T22:33:14Z -- which predates the merge.

So the answer to the carried-forward question is: it reached a channel, and the
channel is beta. No stable OpenClaw release shipped in this window at all. An
operator on stable still does not have the fix, one week after it merged and
two windows after the bypass was first recorded.

## 7. Pi: a command that prints your credentials

**[`v0.83.0`](https://github.com/earendil-works/pi/releases/tag/v0.83.0)**,
2026-07-29T22:30:33Z, stable.

New: `pi auth print-api-key` and `pi auth print-bearer-token`, described as
"credential export for external clients ... with automatic OAuth refresh and
minimum-validity enforcement." Also headless OpenRouter sign-in over SSH, and
Claude Opus 5 through GitHub Copilot with a 1M context window.

**Open, do not assert:** whether these commands are reachable by the agent's own
shell tool without an approval gate. In a harness that can run shell commands,
a first-class command that prints a live credential to stdout is the
confused-deputy shape -- but the gating is what decides it, and the release note
does not say. This needs the docs and the permission surface checked before any
claim is made. Recorded as a question, not a finding.

Breaking: bundled TypeBox upgraded to 1.3.7, removing `Type.Base`,
`Type.Awaited`, `Type.Promise`, `Type.AsyncIterator`, `Type.Iterator`,
`Type.Options` and `Value.Mutate`. Extensions using them must migrate (#7243).

## 8. Agent Zero: an operator got a stop button

**[`v2.8`](https://github.com/agent0ai/agent-zero/releases/tag/v2.8)**,
2026-08-01T15:50:00Z, and `v2.7`, 2026-07-27T14:08:22Z. Both stable.

`v2.8` ships a **stop button and a `/stop` API** -- "cancel a running agent
context without deleting it," available programmatically. A supervisory control
that an operator or a supervising process can reach, in a tagged release. This
is a capability-half item: most of what this publication records is authority
being added to constrain an agent before it acts; this is the ability to stop
one that already is.

`v2.7` adds project-scoped HTTP and SOCKS proxy settings for the internal Docker
browser, including bypass rules and optional authentication, passed through
Playwright's native proxy option.

Version note for the profile: Agent Zero was at `v1.20` when this publication
last wrote about it in June; the line moved to `v2.x` on 2026-06-26 (`v2.1`) and
has tagged eight times since.

## 9. Sources with no release in the window

- **Paperclip** -- no release published between 2026-07-27 and 2026-08-03.
- **Flue** -- no release in the window.
- **heypi** -- no release in the window; the project cuts tags rather than
  GitHub releases, as recorded at intake.
- **Antigravity CLI** -- three releases in-window: `1.1.8` (2026-07-28T00:59:10Z),
  `1.1.9` (07-31), `1.1.10` (2026-08-03T15:45:42Z, Latest). Contents still to be
  read; recorded here so the cadence is on the record.
- **eve** -- extremely high release velocity: `0.27.9` through `0.29.5`, twelve
  or more tags between 2026-07-28 and 2026-08-02.
