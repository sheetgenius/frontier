---
schema_version: bitter.frontier_profile.v0
profile_id: agent-zero
label: Agent Zero
owner: agent0ai
source_contract: sources/agent-zero.yml
homepage: https://www.agent-zero.ai/
docs: https://www.agent-zero.ai/p/docs/
tagline: "v2.10 tags the ACP bridge and interactive browser, and the SSRF fix finally has a test."
x:
  project: Agent0ai
repo: https://github.com/agent0ai/agent-zero
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-08-20
last_full_review: 2026-08-20
claims:
  - id: v2-10-acp-browser-ssrf-tests
    finding_id: 2026-08-20-agent-zero-v2-10-tags-acp-and-interactive-browser-and-adds-ssrf-regression-tests
    last_verified: 2026-08-20
    status: active
  - id: native-browser-playwright
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-05-07
    status: active
  - id: linux-desktop-skill-controls
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-05-07
    status: active
  - id: oauth-quota-visibility
    finding_id: 2026-05-07-agent-zero-full-computer-workcell
    last_verified: 2026-05-07
    status: active
  - id: browser-multi-tab-parallel-fanout
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-05-12
    status: active
  - id: odf-first-document-defaults
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-05-12
    status: active
  - id: persistent-desktop-lifecycle
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-05-12
    status: active
  - id: structured-actions-over-coordinates
    finding_id: 2026-05-12-agent-zero-browser-multitab-and-document-formats
    last_verified: 2026-05-12
    status: active
  - id: host-computer-use-remote
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: active
  - id: vision-verification-required
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: active
  - id: platform-native-structural-targeting
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: active
  - id: ephemeral-capture-default
    finding_id: 2026-05-27-agent-zero-host-desktop-with-vision-verification
    last_verified: 2026-05-27
    status: active
  - id: screenshot-durable-storage-reversal
    finding_id: 2026-06-02-agent-zero-screenshot-artifact-durability
    last_verified: 2026-06-03
    status: active
posture_basis:
  capability:
    - 2026-05-07-agent-zero-full-computer-workcell
    - 2026-05-12-agent-zero-browser-multitab-and-document-formats
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
  accessibility:
    - 2026-05-07-agent-zero-full-computer-workcell
    - 2026-05-12-agent-zero-browser-multitab-and-document-formats
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
  governance:
    - 2026-05-07-agent-zero-full-computer-workcell
    - 2026-05-12-agent-zero-browser-multitab-and-document-formats
    - 2026-05-27-agent-zero-host-desktop-with-vision-verification
stance:
  use_for: "Work where the agent genuinely needs a desktop -- a real browser, a LibreOffice session, a terminal that remembers what it did -- and operators who want the build they install to be the build the notes describe. Agent Zero's default branch was byte-identical to its newest tag at window close, which makes it, with eve, one of only two projects on this watchlist where 'merged' and 'shipped' are the same word."
  avoid_for: "Storing non-credential secrets in `usr/.env` on v2.6: masking there is now limited to API-key and login/password shapes, so webhook URLs, internal hostnames, and licence strings can appear in agent output. Running host Computer Use without the A0 Launcher -- v2.5 deleted the Core WebUI gateway menu, so the WebUI can no longer grant or revoke host access. Per-project model presets, removed in v2.5. Pipelines expecting OOXML by default. And treating the `development` or `testing` branches as preview channels; both are hundreds of commits stale."
  watch_next: "Whether the narrowed `usr/.env` redaction gets a documented shape definition an operator can test a secret against, or stays heuristic; whether resumable compaction restores skill text or only the fact that a skill was loaded, which decides whether a skill still constrains behavior after a long run; what scopes which host-browser profile BYOB may drive; and whether Launcher becomes a hard requirement for Computer Use."
---

# Agent Zero

## Operator Read

Agent Zero is still the most complete "visible computer" on the watchlist: a real
browser, a real desktop, a real terminal, handed to an agent and watched. What
changed in the 2026-07-02 to 2026-07-27 window is where the boundary around that
computer sits, and who is allowed to move it.

Start with the credit, because it is the rarest thing in this issue. Agent Zero
shipped four tags -- [`v2.3`](https://github.com/agent0ai/agent-zero/releases/tag/v2.3),
[`v2.4`](https://github.com/agent0ai/agent-zero/releases/tag/v2.4),
[`v2.5`](https://github.com/agent0ai/agent-zero/releases/tag/v2.5), and
[`v2.6`](https://github.com/agent0ai/agent-zero/releases/tag/v2.6) -- and at
window close
[`compare/v2.6...main` returned `identical`](https://github.com/agent0ai/agent-zero/compare/v2.6...main).
Not "three documentation commits ahead." Identical, `ahead_by=0, behind_by=0`.
There is no window in which `main` carries a fix an operator cannot install,
because there is no gap at all. Across a watchlist where the recurring hazard is
a repair stranded on a branch, that is the strongest structural claim any project
here makes, and it is worth stating plainly before anything else.

Two changes moved the isolation boundary in opposite directions. `v2.5` took host
access away from the Core WebUI and gave it to a separate privileged component
with read/write/exec scoping, which is real privilege separation. `v2.3` added
Bring Your Own Browser, which lets the agent drive the browser you are logged into.

And one change quietly removed protection. `v2.5` added masking of runtime
`.env` values in agent output; `v2.6` narrowed it to credential-shaped values
only. Nobody noticed. That is the thing to carry out of this profile.

> **Current release**: `v2.6` (2026-07-23), and `main` is the same commit.
> Baseline at window open was `v2.2` (2026-07-02), so the line moved from the
> `v1.x` series this profile last described into `v2.x` before the window
> started. No repository security advisories are published for
> `agent0ai/agent-zero`.

## The subtraction nobody mentioned

On 2026-07-17,
[commit `55456df29`](https://github.com/agent0ai/agent-zero/commit/55456df29)
shipped in `v2.5` and masked runtime `.env` values across tool results, history,
logs, and streamed output, through the agent-facing SecretsManager. That is a
good control and it was announced.

Two days later,
[commit `fd795bda8`](https://github.com/agent0ai/agent-zero/commit/fd795bda8)
narrowed it. Masking of `usr/.env` values is now limited to API keys and
login/password credentials, on the stated grounds that blanket masking was
corrupting ordinary chat text. That is a defensible engineering reason -- a
redactor that eats legitimate prose is a bug, not a feature. Global and project
secrets remain fully protected.

The operator consequence is narrow and specific. On `v2.6`, a value sitting in
`usr/.env` that is not shaped like an API key or a login/password pair is no
longer redacted from agent output. Webhook URLs with embedded tokens. Internal
hostnames. Licence strings. Database connection fragments. If you put those in
`usr/.env` while running `v2.5` and assumed they were covered, they are not
covered on `v2.6`. Move them to global or project secrets, which still are.

Now the part that generalizes. The `v2.6` summary that circulated publicly lists
five additions and does not include this one. A search of every Agent Zero social
claim in this cycle's sweep for `mask`, `redact`, `secret`, and `.env` returns
zero hits. The conversation reproduces feature lists faithfully and does not
reproduce retractions -- not because anyone lied, but because a release summary
is written from the additions and a removed protection does not look like news.
An operator who tracked Agent Zero through its announcements got the whole window
correctly except for the one change that reduced what the runtime hides from a
model.

## Host access left the WebUI

The largest isolation change of the window is a deletion. Across four days a
Launcher host gateway protocol was added
([`dafe5a33b`](https://github.com/agent0ai/agent-zero/commit/dafe5a33b)), its
access controls polished
([`df6065d5b`](https://github.com/agent0ai/agent-zero/commit/df6065d5b)),
failures made reportable
([`3271ff43e`](https://github.com/agent0ai/agent-zero/commit/3271ff43e)), file
permissions split into read, write, and exec scopes
([`b11a57424`](https://github.com/agent0ai/agent-zero/commit/b11a57424)), and
Computer Use approval routed through the Launcher lease
([`38a594544`](https://github.com/agent0ai/agent-zero/commit/38a594544)). Then
[`4b0c575f0`](https://github.com/agent0ai/agent-zero/commit/4b0c575f0) deleted
the Core WebUI gateway menu and its client-side control store outright, so host
access is owned by A0 Launcher and nothing else. All six are in
[`v2.5`](https://github.com/agent0ai/agent-zero/releases/tag/v2.5).

This is the good version of the pattern this publication kept finding elsewhere
this window. Rather than adding another policy toggle to the surface an agent can
already reach, Agent Zero moved the grant into a separate privileged component
and removed the in-product path that competed with it. `/computer-use` in the
WebUI is now informational and points you at the Launcher or the A0 CLI. You
cannot misconfigure a menu that does not exist.

The cost is equally concrete: an operator running Agent Zero *without* the
Launcher has no in-product way to grant or revoke host access. Whether that makes
the Launcher a hard requirement for Computer Use is not stated in the release
notes, and it is the open question this change creates.

*Findings: `2026-05-27-agent-zero-host-desktop-with-vision-verification`.*

## Bring Your Own Browser punches the other way

[Commit `7298a88fd`](https://github.com/agent0ai/agent-zero/commit/7298a88fd)
(2026-07-04, shipped in `v2.3`) adds host-browser selection: Chrome, Brave,
Opera, Vivaldi, and Chromium-family browsers running on the host machine, rather
than only the containerized browser. Selection is normalized in config, exposed
in Browser Settings from a CLI-advertised inventory, and forwarded through
connector browser operations. A
[follow-up](https://github.com/agent0ai/agent-zero/commit/afa5231a5) refined
endpoint selection to automatic, advertised debug endpoints, or a validated
custom endpoint, and a
[later change](https://github.com/agent0ai/agent-zero/commit/2e32a2f8d) handled
discovery addresses. Per-chat versus shared tab scope is configurable with a
maximum-tabs-per-chat cap.

Read this next to the Launcher work and the pair is instructive. The container
boundary that separated the agent's browsing from your own browser profile is now
optional. An agent pointed at your host browser inherits that browser's live
sessions, cookies, and logged-in accounts -- every service you are currently
authenticated to, without a separate credential grant, because the credential is
already in the cookie jar. Nothing in the release notes describes a scope on
which host-browser profiles the agent may use.

The honest framing is not that BYOB is reckless. It is that the same release
train contains one change that made host access a leased, scoped, separately
owned privilege and another that made a whole class of host authority reachable
through convenience. Those are different trust decisions and an operator should
make them separately.

## Skills became messages, which means they can age out

[`v2.3`](https://github.com/agent0ai/agent-zero/releases/tag/v2.3) stopped
injecting skills as scope-wide prompt pins and started loading them into chat
history instead; the legacy active-skill prompt injection is disabled and its
cleanup code removed. Relevant-skill recall was simplified to structural matching
on the raw user message -- name terms, tag and trigger phrases, description
phrases -- rather than a stopword catalog.

The operator consequence is easy to miss and matters for long runs. Skill text
now consumes context and ages out of the window like any other message. A skill
that was reliably in force for an eight-hour run because it was pinned is no
longer guaranteed to be in force, because it can be compacted away.

`v2.6` supplies a partial mitigation.
[Commit `425cfc283`](https://github.com/agent0ai/agent-zero/commit/425cfc283)
makes chat compaction resumable and secret-safe: authorization, evidence, pending
work, loaded skills, and secret references are preserved in a fixed
resumable-state summary, and the stale context-window cache is cleared after
compaction. That is a genuine improvement -- a long run no longer silently loses
the record of what it was authorized to do.

But read the wording. It preserves *loaded skills*, which is a reference to which
skills were loaded. The release note does not claim the full skill text is
restored, and the difference decides whether a skill still constrains behavior
after compaction or merely appears in a list of things that once did. We are not
asserting it fails; we are saying the note does not answer it, and it is worth a
probe.

## Reliability and breaking changes

**Two guards shipped in `v2.4`.** A configurable circuit breaker limits
consecutive malformed or repeated model outputs, exposes the threshold in Agent
Settings, and shows a clear stop notice when it fires, so a model stuck emitting
broken tool calls stops rather than burning tokens until someone notices. And
chat persistence became crash-safe: serialized chats are written to a temp file,
fsynced, and atomically swapped, so an interrupted save cannot corrupt the
conversation.

**Model presets became one global collection, breaking per-project definitions.**
[`v2.5`](https://github.com/agent0ai/agent-zero/releases/tag/v2.5) removed
project-scoped preset definitions; scope configs now store only a preset name,
with rename and retire propagation across plugin configs, saved chats, and live
contexts, plus a startup migration from a remote or bundled fallback. Any
per-project preset definition is discarded on upgrade. Verify each project
resolves to the model you expect after the migration runs -- and note that the
global default moved twice in eight days, to `google/gemini-3.1-flash-lite` on
OpenRouter in `v2.4` and to `openai/gpt-5.6-terra` on OpenRouter in `v2.5`, which
is a cost-tracking event whether or not you touched a setting.

**Local OpenAI-compatible providers switched transport without opting in.**
[`v2.3`](https://github.com/agent0ai/agent-zero/releases/tag/v2.3) defaults LM
Studio, llama.cpp, Ollama, Ollama Cloud, oMLX, vLLM, Venice, and other compatible
endpoints to chat-completions rather than the Responses API, on the stated
grounds that local Responses implementations are often missing or unstable.
Anything depending on Responses-only behavior against a local endpoint changes
shape on upgrade.

**A real memory leak was closed in `v2.6`.** Terminated local, SSH, and TTY
shells are now detected as definitive command completion with new
`is_terminated` and `get_exit_code` helpers; callables and arguments are released
after completion or cancellation; child tasks are cleaned up; and a stale
traceback retained by Paramiko's optional-import cache -- which was holding the
code-execution tool-loading stack and the first agent object in memory -- was
cleared. If you restart Agent Zero on a schedule to control memory, retest that
assumption on `v2.6`.

## A harness that launches other harnesses

`v2.3` shipped three built-in plugins: `_orchestrator` (adapter status APIs,
settings UI, per-agent skill references), `_commands` (command storage, picker
UI, a bundled canonical command pack, legacy migration), and `_goal` (per-chat
goal storage, a WebUI goal strip, a `/goal` slash command, agent-facing goal
tools). [`v2.4`](https://github.com/agent0ai/agent-zero/releases/tag/v2.4)
registered Gemini CLI as an orchestrator backend with auth detection and headless
workflow support, and refreshes an existing Codex CLI install after self-update.
[`v2.6`](https://github.com/agent0ai/agent-zero/releases/tag/v2.6) collapsed the
separate goal create, get, update, and storage modules into one multi-action
tool.

The direction is worth naming: Agent Zero is becoming a harness-of-harnesses,
launching Codex and Gemini CLI as backends inside its own workcell. Each
registered backend brings its own credential surface and its own authority
model into a container that already has a desktop and, optionally, a lease on
your host.

## Channel reality

`main` is a released version by construction. The branch topology at 2026-07-27:

- `main` -- identical to `v2.6`. This is what to run.
- `ready` -- 7 commits ahead of `main`. The only live preview surface, and there
  is no preview tag.
- `development` -- 220 commits *behind* `main`.
- `testing` -- 676 commits *behind* `main`.

The last two are the trap. An operator who found those branch names in a search
would reasonably read them as pre-release channels; they are stale artifacts.
Nothing in the public conversation mentions them, so nothing misleads -- and
nothing warns either.

Cadence was four tags in fourteen days, with uneven release sizes: 44 and 41
commits for `v2.3` and `v2.5`, 16 and 15 for `v2.4` and `v2.6`. The official
account announced each tag 8 to 18 minutes after publication, four times out of
four. That is a distribution channel, not an early-warning system, and Agent Zero
does not pretend otherwise.

## Still true from earlier windows

Collapsed, because none of it moved and it should not bury the current read. The
architecture registered in this profile's `claims:` block still stands: a
persistent Playwright Chromium with live viewer, screencast, tab management and
stale-context recovery; multi-tab fanout with a `multi` action across tabs;
LibreOffice sessions over Xpra/XFCE; the Linux Desktop skill teaching structured,
app-native, keyboard-first control with positional clicks as a last resort;
[ODF output by default](https://github.com/agent0ai/agent-zero/releases/tag/v1.13)
with OOXML on explicit opt-in; a persistent desktop session across canvas and
modal navigation with confirmation-gated shutdown;
[`computer_use_remote`](https://github.com/agent0ai/agent-zero/releases/tag/v1.17)
driving the host desktop through platform-native structural targeting (AX on
macOS, UIA on Windows, AT-SPI on Linux) with every state-changing action treated
as unverified until a fresh screenshot confirms it; and
[ephemeral, context-scoped screenshot capture](https://github.com/agent0ai/agent-zero/releases/tag/v1.16)
by default, with durable capture requiring an explicit user-initiated shot.

Two of those interact with this window and the interaction is worth one line
each. The vision-verification rule now routes its approvals through the Launcher
lease rather than the WebUI. And the persistent-desktop lifecycle question --
timeouts, storage caps, idle cleanup -- was **not** advanced again this window;
it has now gone unaddressed across three consecutive cycles, which at some point
stops being an oversight and starts being the design.

Agent Zero also remains a Docker-deep install. Browser, desktop, and LibreOffice
all run inside a long-lived container, and getting that container set up is still
the friction that dominates first-run experience -- which is exactly what the
public conversation spent this window arguing about, while the isolation boundary
moved twice underneath it.

*Findings: `2026-05-07-agent-zero-full-computer-workcell`,
`2026-05-12-agent-zero-browser-multitab-and-document-formats`,
`2026-05-27-agent-zero-host-desktop-with-vision-verification`,
`2026-06-02-agent-zero-screenshot-artifact-durability`.*

## Open questions

Answered this window, so they stop being asked:

- **Is `main` safe to run?** Yes, and definitively: `main` is byte-identical to
  the newest tag. There is no unreleased-fix exposure on this project.
- **Where does host authority live?** In A0 Launcher, as a scoped lease with
  read/write/exec file permissions, as of `v2.5`. The Core WebUI can no longer
  grant it.

Still open:

- Does the narrowed `usr/.env` redaction have a documented shape definition an
  operator can test a secret against, or is the API-key and login/password match
  heuristic? Without a published shape, "is this value masked?" is only
  answerable by experiment.
- Does resumable compaction restore skill *text*, or only the fact that a skill
  was loaded? This decides whether a skill still constrains behavior after a long
  run.
- With BYOB pointed at a host browser, what scopes which host-browser profiles
  and sessions the agent may use? Nothing in the notes describes a boundary.
- Is the A0 Launcher now effectively required for Computer Use, or is there a
  supported CLI-only path to grant and revoke host access?
- Is "agents must stop when no screenshot is available" enforced at the tool
  runtime's return shape, or only in the model prompt? Still unprobed, and still
  the difference between a control and a suggestion.
- Is there any session timeout, idle cleanup, or storage limit for the persistent
  Xpra desktop, or does the operator manage cleanup entirely by hand? Unaddressed
  for three cycles.
- Are the parallel executions of the `multi` browser action isolated per tab, or
  do they share Playwright context state?

## What to watch next

- **Whether a shape definition for the narrowed redaction is published.** This is
  the single documentation change that would turn `v2.6`'s masking from a
  guess into a check.
- **Whether the Launcher pattern spreads.** Moving a grant into a separate
  privileged component and deleting the competing in-product path is the
  structural instinct this window rewarded across the field. If Agent Zero
  repeats it for another authority, it is a philosophy rather than a one-off.
- **Whether BYOB gains profile scoping.** Inheriting a live browser session is
  the largest unscoped authority Agent Zero currently offers.
- **Whether the zero-gap channel survives growth.** Four tags in fourteen days
  with `main` at the tag is currently Agent Zero's strongest claim on operator
  trust, and it is the kind of discipline that usually slips as a project gets
  larger.
- **Whether the orchestrator backends bring their own governance.** Launching
  Codex and Gemini CLI from inside the workcell imports each of their authority
  models; nothing yet describes how Agent Zero's controls compose with theirs.

## Profile hygiene

This profile follows the discipline in
[METHOD.md](../../METHOD.md#the-object-grammar): every concrete claim in the
prose carries an inline source link, and posture sections cite finding IDs when
naming a specific feature, behavior change, or cross-project comparison.

Note on this revision. The 2026-07-02 to 2026-07-27 material is carried in prose
with pinned receipts -- release tags plus commit SHAs with ancestry resolved by
compare -- and is **not** registered in the `claims:` block, which continues to
hold the register from the May and June windows. Those architectural claims were
re-read against `v2.6` and still hold. Agent Zero's release notes do not
reference pull request numbers, so per-change receipts are commits rather than
PRs, and version-level claims are cited at `release_note` precision against the
tag. Every change described here is `tagged-release`: `main` was identical to
`v2.6` at harvest, so there is no main-unreleased material to separate.
