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
tagline: "The hardening is on alpha. The stable upgrade edits your policy file."
compared_with:
  - claude-code
  - gemini-cli
x:
  project: OpenAICodexCli
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-07-27
last_full_review: 2026-07-27
claims:
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
  use_for: "Teams who want OpenAI's read on long-running goals, permission profiles, and visible authority state, and who will own the configuration that state now implies: an explicit sub-agent model and concurrency under the `agents` key, a marketplace source policy for a remote plugin catalog that is on by default with npm as a source, and a retention answer for memories that are now on by default on stable. Codex remains editorially useful as a directional indicator of how one large closed-source vendor shapes these surfaces -- directional, not predictive."
  avoid_for: "Do not upgrade to rust-v0.145.0 without first backing up `rules/default.rules`; it strips exact `allow` entries from that file on the next session start and records `.sandbox_migration` so it happens silently and once. Do not rely on Codex network egress policy for containment on stable -- the entire network and proxy hardening wave is `rust-v0.146.0-alpha` only, with no stable tag as of 2026-07-27. Do not install `@openai/codex@beta` or `@native`; both dist-tags still point at May 2025 builds. And do not treat Codex as a separable endpoint decision on macOS or Windows: it ships inside the ChatGPT desktop app, so allowing that app allows Codex."
  watch_next: "Whether a `0.146` stable tag lands and carries the network-authority wave intact, whether the `in_app_updates` requirements-only feature that would let an administrator pin Codex versions ever leaves `main`, and whether trusted-plugin-script attribution on approval dialogs reaches stable. The managed `requirements.toml` distribution and signing model is still undocumented while more policy keeps being routed through it."
---

# Codex

## Operator Read

**Last material change: [`rust-v0.145.0`](https://github.com/openai/codex/releases/tag/rust-v0.145.0),
2026-07-21. It edits your exec policy file the first time you start a session.**

Back up `rules/default.rules` before you upgrade. On session startup
`rust-v0.145.0` [removes exact `allow` entries](https://github.com/openai/codex/pull/34271)
from that file for command prefixes Codex no longer suggests as policy
amendments, records the migration in `.sandbox_migration` so it runs once, and
skips itself only where user and project exec policy rules are already ignored.
Diff the file after the first run and confirm `.sandbox_migration` exists. If
your sandbox policy lives in version control or configuration management, expect
drift you did not author. The same release
[deletes the legacy exec policy engine](https://github.com/openai/codex/pull/32093)
outright -- the crate, its default policy, and its documentation reference are
gone, not deprecated, so any dependence on its matcher semantics ends here.

The second thing to know is where the hardening went. This window's substantial
network-authority work -- keyed shell environment policy filters, explicitly
permitted loopback proxy targets, Windows sandbox proxy traffic routed by
restricting SID, hardened elevated-sandbox startup and managed proxy setup for
sandboxed executions, network approval cancellation and concurrency -- exists
only on the
[`rust-v0.146.0-alpha`](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10.1)
line. Channel here was resolved by git ancestry against the `openai/codex` tag
graph rather than by date, and no `0.146` stable tag existed at window close. If
you rely on Codex network egress policy for containment, `rust-v0.145.0` is what
you are running and this wave is not in it. Accept the alpha channel
deliberately or treat Codex network policy as unhardened.

Two distribution facts change how you install and how you cite. Every
`developers.openai.com/codex/*` URL now returns a 308 to
[`learn.chatgpt.com/docs/*`](https://learn.chatgpt.com/docs/changelog), so a
`developers.openai.com` Codex link is no longer a stable receipt; the rendered
changelog exposes no per-entry permalinks, and the
[RSS feed](https://learn.chatgpt.com/docs/changelog/rss.xml) is the only source
of anchors. And the [`@openai/codex` npm dist-tags](https://www.npmjs.com/package/@openai/codex)
are not what they look like: `latest` is `0.145.0` and `alpha` is
`0.146.0-alpha.10.1`, but `beta` points at a build published 2025-05-18 and
`native` at one from 2025-05-30. `npm install -g @openai/codex@beta` installs a
fourteen-month-old binary with none of this window's command-safety work. If a
Dockerfile or an install doc of yours references either tag, it is pinning
2025.

Codex also stopped being a separable install decision. As of
[2026-07-09](https://learn.chatgpt.com/docs/changelog#codex-2026-07-09-app) it is
part of the ChatGPT desktop app on macOS and Windows, so an endpoint policy that
enumerates approved binaries now needs re-checking: allowing that app allows
Codex. The
[2026-07-23 entry](https://learn.chatgpt.com/docs/changelog#codex-2026-07-23-app)
adds multi-folder local projects with a designated primary folder driving chats,
Git operations, and automatic feature discovery, which widens a session's blast
radius past a single repository root. Both are changelog-only claims; the
desktop app ships on a release train with no public tag or commit, which is a
lower receipt quality than the CLI's and should be said rather than smoothed
over.

Underneath the upgrade hazards, the direction is unchanged and the state got
less optional. Codex is OpenAI's bet on a stateful agent control plane rather
than a terminal prompt, and this window
[automatic compaction lost its off switch](https://github.com/openai/codex/pull/29815)
(the `auto_compaction` feature flag and its config schema entry were deleted;
`--disable auto_compaction` no longer suppresses it),
[memories were stabilized](https://github.com/openai/codex/pull/31804) and are on
by default on the stable line,
[remote plugins became default-on](https://github.com/openai/codex/pull/30297)
with npm as a marketplace source, and multi-agent v2 went
[stable](https://github.com/openai/codex/pull/34383) with its settings unified
under an `agents` key. Watch Codex as one large vendor's directional read on
where closed-source coding agents go. The cross-project reading of this window is
in [Rules Became Judgment](/digests/2026-07-02_2026-07-27-weekly/).

## Run Codex Differently

Treat [`/import`](https://learn.chatgpt.com/docs/import) output as an untrusted
configuration diff. `rust-v0.145.0` expanded it to migrate settings, MCP
servers, plugins, sessions, commands, hooks, subagents, and project-scoped
memories from Cursor and Claude Code in one step. That is another agent's
authority configuration entering yours. OpenAI's own doc calls out reviewing
tool restrictions and permissions in imported skills and agents, and MCP server
settings using custom authentication, headers, environment variables, or
transports. Review before you run a turn, not after.

Move multi-agent configuration under the `agents` key and price the fan-out
before enabling it. Multi-agent v2 is stable with sub-agent model overrides,
reasoning levels, and concurrency configurable, spawned-agent models restricted
to the active backend, agent roles restored on reload, and parent-owned
sub-agent threads read-only in the TUI. `rust-v0.144.0` ships a warning for
exactly the expensive combination: Ultra reasoning at high multi-agent
concurrency.

Tell approvers that the rejection box is a prompt.
[`ReviewDecision::Denied` now carries a rejection string](https://github.com/openai/codex/pull/34400),
preserved through command, patch, network, MCP, delegated, and automatic
approval flows and returned to the model in tool results. Whatever a reviewer
types is model-visible context; keep secrets and internal ticket text out of it.

Expect the transcript to branch.
[Editing an earlier prompt or retrying a safety-buffered turn](https://github.com/openai/codex/pull/33201)
creates a contextual branch preserving the original conversation, attachments,
and mention bindings, and interrupted prompts stay in history. If your review
process assumed the transcript is what happened, a reviewer reading one branch
has not read the session.

Do not put an audit upload behind `SessionEnd`. The
[new teardown hook](https://github.com/openai/codex/pull/33895) fires on
app-server archive, delete, idle unload, and graceful shutdown with the
transcript flushed first, but its output is advisory, its default timeout is one
second, configured timeouts are capped at three, and async hooks are forced
synchronous with a warning.

Re-derive two budgets. GPT-5.6 Sol, Terra, and Luna context windows were
[corrected to 272,000 tokens](https://github.com/openai/codex/releases/tag/rust-v0.144.6)
in `rust-v0.144.6`, so any prompt sizing, chunking, or compaction threshold set
against the earlier bundled figure was wrong. And cost attribution changed
shape: [prompt cache keys moved to session IDs](https://github.com/openai/codex/pull/33035)
and [cache-write token usage is now tracked](https://github.com/openai/codex/pull/33454)
in the raw response schema and app-server events. Add the cache-write field
before comparing a `0.145.0` bill against a `0.144.x` one, or the delta is new
fields rather than new usage.

Grep your `config.toml` and CI wrappers for two removals.
[`AskForApproval::OnFailure`](https://github.com/openai/codex/pull/28418) no
longer exists, and
[`--permission-profile`](https://github.com/openai/codex/pull/30095) (singular)
is the canonical flag; `--permissions-profile` survives only as a hidden
backwards-compatible alias with no deprecation clock. Migrate rather than lean
on the alias.

## Authority On Stable

Full access always confirms now.
[Selecting it opens the confirmation dialog](https://github.com/openai/codex/pull/32989)
whenever user-reviewed approvals are active, regardless of
`notices.hide_full_access_warning`, and the persistent "don't ask again" option
and its acknowledgement events were removed. Any runbook that told users to tick
that box is wrong, and a scripted flow expecting no dialog will hang.

Two defaults moved toward more surface rather than less.
[MCP authentication elicitation is on by default](https://github.com/openai/codex/pull/28772),
so an MCP server can put an auth prompt in front of a user mid-run without you
having enabled anything -- your MCP allowlist is the control now, because the
opt-in is not. And the remote plugin catalog is
[default-on with npm marketplace sources](https://github.com/openai/codex/pull/29375),
with [admission requirements](https://github.com/openai/codex/pull/29753) and a
[runtime source policy](https://github.com/openai/codex/pull/29691), and locally
curated plugins ignored while the remote catalog is active. Decide your
marketplace source policy, verify it is enforced at runtime rather than at
install, and check whether local plugins you depend on are being shadowed.

Repository-resident files now carry authority. The multi-agent v2 prompt was
updated so
[`AGENTS.md` and skills can explicitly authorize delegation](https://github.com/openai/codex/pull/30274)
to subagents, which makes them code-review artifacts rather than documentation.
Separately, hooks from materialized workspace plugins are
[recorded as trusted after a successful plugin refresh](https://github.com/openai/codex/pull/32301),
with the trust write serialized against config mutations and left untrusted on
failure or account change -- so installing or updating a remote workspace plugin
can cause its hooks to become trusted without a separate prompt.

The [`writes` app-approval mode](https://github.com/openai/codex/pull/30482) is
the middle setting many teams were hand-rolling: declared read-only actions are
allowed, writes prompt. Test it before granting it. The boundary depends on an
app *declaring* an action read-only, which is a claim the app makes, not a
property Codex verifies.

The one unambiguous command-safety fix on the stable line is
[expanded `is_dangerous_command` coverage of forced `rm` forms](https://github.com/openai/codex/pull/33455),
with clearer rejection reasons, backported to `rust-v0.144.5` and present
independently on the `0.145` line. If you are pinned below `rust-v0.144.5` the
older forms are still accepted. It shipped with no CVE and no GHSA:
`openai/codex` published no advisory in the window, and the repository's only
advisory remains one from 2025-09-19, so a vulnerability feed would have told
you nothing.

Windows and managed-laptop operators have two couplings to test. The
[elevated Windows sandbox is now required for and selected for network proxies](https://github.com/openai/codex/pull/32857),
and [Windows sandboxing moved into the exec server](https://github.com/openai/codex/pull/34423);
if your fleet blocks elevation, test before rolling out `rust-v0.145.0`, because
the proxy enforcement and the sandbox are now coupled. And Codex can resolve
[macOS](https://github.com/openai/codex/pull/26709) and
[Windows](https://github.com/openai/codex/pull/26708) system proxy
configuration, including PAC and WPAD, and routes both authentication and
Responses traffic through it. On a managed laptop with a WPAD-published proxy,
model traffic will now traverse your inspecting proxy where it previously may
not have. Verify the CA chain and confirm with your network team what that proxy
logs, before this lands via auto-update.

One credential-path change is worth an explicit owner:
[app-server hosts can supply Codex authentication at runtime](https://github.com/openai/codex/pull/31274)
and successful logins can redirect to a hosted success page. If you embed Codex
behind your own app-server you can own the credential path -- and so can anyone
else who controls the host process. Audit which host may supply auth and where
the login redirect terminates.

## What Ships Only In Preview

Channel matters more than usual on this source right now. Everything below was
resolved by git ancestry against the tag graph, not by publication date.

**Preview only** (`rust-v0.146.0-alpha`, no stable tag at window close): the
entire network and proxy policy hardening wave described above;
[trusted plugin script attribution](https://github.com/openai/codex/commit/5bdbd3ee90d7),
which means that on stable an approval prompt does not tell you which plugin
script originated the command; and switches to disable the `update_plan` tool,
the multi-agent wait tool, and the
[in-process code-mode host fallback](https://github.com/openai/codex/commit/cba0e2701c9e).
That last one is the operator-relevant one: on stable, if the external code-mode
host is unavailable, Codex silently falls back to the embedded V8 runtime
shipped in `rust-v0.144.1`, and only the alpha line lets you turn the fallback
off. Note also that
[shell approval keys moved to path URIs](https://github.com/openai/codex/commit/a59a419afa34)
on that line, so previously remembered approvals may not match after a `0.146`
upgrade.

**Main-unreleased** (in no tag, stable or prerelease): a default-enabled
[`in_app_updates` requirements-only feature](https://github.com/openai/codex/pull/35537)
letting administrators disable in-app updates through `[features]` in
`requirements.toml`, and an explicit distinction between an
[omitted and an empty `mcp_servers` allowlist](https://github.com/openai/codex/pull/35280)
for plugin MCP servers. The managed control that would let an enterprise pin
Codex versions from `requirements.toml` exists in no shipped build. Do not plan
a rollout around it; hold versions with OS-level package management.

## Open Questions

- **Partly resolved: which surface is canonical when they disagree.** The source
  contract asked which GitHub releases, tags, and npm versions to trust. For npm
  the answer is now receipted: `latest` tracks the stable tag and `alpha` tracks
  the newest prerelease, but `beta` and `native` are frozen at May 2025 builds
  and are not release channels in any useful sense. GitHub tags resolved by
  ancestry remain canonical; npm dist-tags are not.
- **Partly resolved: multi-agent delegation reach.** June's question was whether
  the app-server-only disabled / explicit-request / proactive delegation gate
  would surface an end-operator equivalent. Operators now get stable
  configuration under the `agents` key -- sub-agent model, reasoning level,
  concurrency, restored roles -- but the three-mode authority gate itself is
  still an app-server client config, so end-operator exposure still depends on
  the client.
- **What is the distribution and signing model for managed
  `requirements.toml`?** Still undocumented, and the question grew: the in-app
  update kill switch and the plugin MCP allowlist semantics are both being
  routed through that file while nothing states whether it is repo-rooted,
  org-rooted through a central distribution mechanism, signed against tampering,
  or watched at runtime.
- **Does the exec policy migration run again, and is anything recoverable?**
  `.sandbox_migration` is described as making the rewrite run once. Whether a
  later release adds a second migration, and whether stripped `allow` entries
  are recoverable from anything other than your own backup, is not stated
  anywhere in the release record.
- **Where do memories live, and who owns them?** Memories are stabilized and
  enabled for paginated threads on the stable line. Which artifacts persist,
  where, and whether they fall inside a data-retention policy is an operator
  question the release notes do not answer.
- Profile inheritance semantics: does a derived profile only *add* to the base,
  or can it *subtract*? Subtraction is the harder and safer feature; the release
  notes still do not say. Runtime profile-refresh consistency under in-flight
  tool calls is likewise unspecified.
- Rollout token-budget tightness under real multi-agent load: the cap aborts at
  the next usage-accounting boundary with no cross-thread interrupt, so an
  expensive in-flight call can still complete past the line.
- For remote computer use after Mac lock, whether an operator can narrow the
  permission per-task, per-tool, or per-domain beyond the documented short-lived
  authorization, relock-on-input, and covered-display safeguards is still
  unanswered.
- Chronicle (screen-context memory) and the Developer-mode "controlled" Chrome
  DevTools Protocol boundary were last checked on 2026-06-23 and were open then.
  Neither appeared in this window's primary harvest in either direction, so
  nothing here should be read as a fresh check on them.
- `surface_class` holds at `mixed_official_docs`. This window produced abundant
  PR-level receipts for semantics-heavy behavior -- the exec policy rules
  migration, the network hardening wave, plugin hook trust -- so the
  classification is still earning its keep. The standing migration trigger is
  unchanged: two consecutive cycles with no semantics-heavy claim anchorable
  above `release_note` precision.

## What To Watch Next

- Whether a `0.146` stable tag lands, and whether it carries the network and
  proxy hardening wave intact.
- Whether `in_app_updates` reaches a tag. It is the managed control an
  enterprise would use to hold a version, and it currently exists only on
  `main`.
- Whether trusted plugin script attribution reaches stable, closing the gap
  where an approval dialog cannot name the plugin that asked for the command.
- Adoption of `requirements.toml` outside OpenAI's own enterprise customers.
  Distribution and trust model decisions will emerge through adopters, not
  changelog entries.
- Whether the default-on remote catalog produces meaningful third-party
  distribution mass, and what admission policy actually gets enforced at
  runtime rather than at install.
- Whether `learn.chatgpt.com` gains per-entry permalinks in rendered HTML, or
  whether the RSS feed stays the only anchor source. The published `llms.txt`
  index still lists `developers.openai.com/codex/*.md` URLs.
- Guardian auto-review prompting, shipped in `rust-v0.144.0` and
  [reverted in `rust-v0.144.2`](https://github.com/openai/codex/pull/32672). Any
  auto-review benchmark run between 2026-07-09 and 2026-07-13 measured a
  configuration that no longer exists; `0.144.3` and `0.144.4` are empty
  releases and should not be read as safety patches.
- Whether the ChatGPT desktop app train ever publishes tags or commits. Its
  claims are changelog-only today, which is a materially weaker receipt than the
  CLI's.

## Profile Hygiene

This profile follows the profile discipline defined in
[METHOD.md](../../METHOD.md#the-object-grammar): posture sections may interpret
freely, but every concrete claim carries an inline link to the release, pull
request, or documentation page it rests on. Cross-project editorial belongs in
the weekly digest, not here. Git history is the audit trail; removed claims live
in the diff log.

The `claims:` block is unchanged from 2026-06-23. The 2026-07-27 research cycle
published its record as per-source harvest and cross-check artifacts rather than
individual finding files, so this window's material is carried in the prose with
inline receipts on the claim-bearing words instead of new `claims:` entries.

The `docs` and `changelog` links above were moved to `learn.chatgpt.com` because
the previous `developers.openai.com` URLs now answer 308.
