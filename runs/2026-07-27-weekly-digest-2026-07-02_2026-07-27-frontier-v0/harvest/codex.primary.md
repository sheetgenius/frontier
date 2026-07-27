# Harvest -- codex (primary sources)

Window: 2026-07-02 to 2026-07-27. Harvested 2026-07-27.

Source contract: `sources/codex.yml`. Surfaces used: official changelog, official
docs, GitHub releases/tags/commits/PRs, npm registry, reproducible local probes.

## Method and channel resolution

Channel was resolved by git ancestry against the `openai/codex` tag graph, not by
date:

- `tagged-release` -- the commit is an ancestor of a non-prerelease tag
  (`rust-v0.143.0` through `rust-v0.145.0`).
- `preview-or-beta` -- the commit is an ancestor of `rust-v0.146.0-alpha.10.1`
  (the newest prerelease at window close) but of no stable tag.
- `main-unreleased` -- the commit is on `main` and in no tag at all.

Ancestry probe used: `gh api repos/openai/codex/compare/<base>...<head> --jq .status`.
At window close `main` was 221 commits ahead of `rust-v0.145.0` (HEAD
`95637f7056835fea66bdd0044414af480fc0fd74`), and `rust-v0.146.0-alpha.10.1` was
210 commits ahead of the same base. By SHA the two sets share 207 commits, leaving
14 main-only and 3 alpha-branch-only. The 3 alpha-only commits are two release
version bumps plus one cherry-pick of #35364, which also exists on `main` under a
different SHA -- so exactly one of the 14 "main-only" commits is in the preview
tag by content while diverging by SHA. That caveat is flagged where it applies;
every other channel call below is a clean ancestry result.

Stable tags published in window (9): `rust-v0.143.0`, `rust-v0.144.0`,
`rust-v0.144.1`, `rust-v0.144.2`, `rust-v0.144.3`, `rust-v0.144.4`,
`rust-v0.144.5`, `rust-v0.144.6`, `rust-v0.145.0`.
Prerelease tags published in window: 44 (`rust-v0.143.0-alpha.33` through
`rust-v0.146.0-alpha.10.1`).

---

## 1. The Codex changelog and docs surfaces moved hosts

**What changed.** Every `developers.openai.com/codex/*` URL in `sources/codex.yml`
now answers `308 Permanent Redirect` to `learn.chatgpt.com/docs/*`. The docs home
`developers.openai.com/codex/` redirects to `/codex`, which itself redirects to
`https://learn.chatgpt.com/docs`. Individual doc pages resolve as
`https://learn.chatgpt.com/docs/<page>` (for example `/docs/sandboxing`,
`/docs/permission-modes`, `/docs/permissions`, `/docs/agent-approvals-security`,
`/docs/enterprise/governance`). The published `llms.txt` index has **not** been
rewritten and still lists `developers.openai.com/codex/*.md` URLs.

**Receipt.** Reproducible local probe, run 2026-07-27:

```
$ curl -sI https://developers.openai.com/codex/changelog
HTTP/2 308
location: https://learn.chatgpt.com/docs/changelog
```

Canonical changelog: <https://learn.chatgpt.com/docs/changelog>
Docs index: <https://learn.chatgpt.com/docs/llms.txt>

**Event date.** Observed 2026-07-27 (the redirect carries no origin date; the
`Codex joins the ChatGPT desktop app` entry of 2026-07-09 is the product event it
follows).

**Release channel.** Not applicable -- documentation surface, not a build.

**Operator consequence.** Update `sources/codex.yml` `primary_surfaces` to the
`learn.chatgpt.com` host, and stop treating a `developers.openai.com` Codex link
as a stable receipt. The changelog page has no visible per-entry permalinks in
its rendered HTML; the RSS feed at
<https://learn.chatgpt.com/docs/changelog/rss.xml> is the only source of per-entry
anchors (for example `#codex-2026-07-09-app`), and those anchors do resolve on the
new host.

---

## 2. Carry-forward: `0.143.0` left alpha and reached a stable tag

**What changed.** The previous digest recorded Codex stable at `rust-v0.142.5`
with the `0.143.0` line alpha-only (`rust-v0.143.0-alpha.31` / `alpha.32`).
`rust-v0.143.0` was published as a non-prerelease tag on 2026-07-08. Everything in
the previous window's `0.143.0` preview channel is now runnable on stable.

**Receipt.** <https://github.com/openai/codex/releases/tag/rust-v0.143.0>
Prior-window baseline: <https://github.com/openai/codex/releases/tag/rust-v0.142.5>

**Event date.** 2026-07-08 (GitHub API `published_at` 2026-07-08T01:31:10Z).

**Release channel.** `tagged-release` (was `preview-or-beta` at previous window
close).

**Operator consequence.** If you deliberately stayed on `rust-v0.142.5` waiting
for the `0.143.0` alpha to settle, the wait is over -- but the stable line then
moved four more times in nine days, so plan the jump to `rust-v0.145.0` rather
than to `0.143.0`.

---

## 3. Automatic compaction can no longer be disabled

**What changed.** The `auto_compaction` feature flag and its generated config
schema entry were deleted. Unconditional pre-turn, model-switch, and mid-turn
automatic compaction are restored. `--disable auto_compaction` no longer
suppresses it. Manual `/compact` is unchanged.

**Receipt.** <https://github.com/openai/codex/pull/29815>
Shipped in <https://github.com/openai/codex/releases/tag/rust-v0.143.0>

**Event date.** Merged 2026-06-24; first stable tag 2026-07-08.

**Release channel.** `tagged-release` (`rust-v0.143.0`).

**Operator consequence.** Stop believing you can hold a long-horizon Codex thread
at full context by disabling auto-compaction. If your workflow depended on
`--disable auto_compaction` to keep an audit-complete transcript in the live
context window, move that guarantee to the rollout files, not to the flag.

---

## 4. Remote plugins on by default, with npm as a marketplace source

**What changed.** Remote plugins are enabled by default. The plugin catalog gained
npm marketplace sources, richer catalog rows, and visible remote/local versions.
Marketplace source admission requirements and a runtime marketplace source policy
were added, and locally curated plugins are ignored when the remote catalog is
active.

**Receipt.** <https://github.com/openai/codex/releases/tag/rust-v0.143.0>
Enablement: <https://github.com/openai/codex/pull/30297>
npm sources: <https://github.com/openai/codex/pull/29375>
Admission requirements: <https://github.com/openai/codex/pull/29753>
Runtime policy enforcement: <https://github.com/openai/codex/pull/29691>
Local-curated override: <https://github.com/openai/codex/pull/29765>

**Event date.** 2026-07-08.

**Release channel.** `tagged-release` (`rust-v0.143.0`).

**Operator consequence.** A default-on remote plugin catalog with npm as a source
is a supply-chain surface that was previously opt-in. Before upgrading past
`rust-v0.142.5`, decide your marketplace source policy and verify it is enforced
at runtime, not just at install; and check whether local curated plugins you rely
on are being shadowed by the remote catalog.

---

## 5. Auth and Responses traffic route through system proxies (PAC/WPAD)

**What changed.** Codex can resolve macOS and Windows system proxy configuration,
including PAC and WPAD, and route both authentication and Responses API traffic
through it. Responses WebSockets keep the low-latency transport while respecting
system proxies and custom certificate authorities. Managed MITM CA private keys
are kept in proxy memory rather than written out.

**Receipt.** Windows resolver: <https://github.com/openai/codex/pull/26708>
macOS resolver: <https://github.com/openai/codex/pull/26709>
Responses routing: <https://github.com/openai/codex/pull/31335>
WebSocket proxy preservation: <https://github.com/openai/codex/pull/31441>
Proxy-aware WebSocket connector: <https://github.com/openai/codex/pull/31622>
MITM CA key handling: <https://github.com/openai/codex/pull/29013>

**Event date.** 2026-07-08 (`rust-v0.143.0`) and 2026-07-09 (`rust-v0.144.0`).

**Release channel.** `tagged-release`.

**Operator consequence.** On a managed laptop with a WPAD-published proxy, Codex
auth and model traffic will now traverse your inspecting proxy where it previously
may not have. Verify the CA chain and confirm with your network team what that
proxy logs, before this lands via auto-update.

---

## 6. Approval surface changes: `OnFailure` removed, sandbox flag renamed

**What changed.** The `AskForApproval::OnFailure` enum variant was deleted
(deprecated since #11631). Separately, the canonical sandbox flag became
`--permission-profile` (singular); `--permissions-profile` survives only as a
hidden backwards-compatible alias.

**Receipt.** <https://github.com/openai/codex/pull/28418>
<https://github.com/openai/codex/pull/30095>
Both shipped in <https://github.com/openai/codex/releases/tag/rust-v0.143.0>

**Event date.** 2026-07-08.

**Release channel.** `tagged-release` (`rust-v0.143.0`).

**Operator consequence.** Grep your `config.toml` and CI wrappers for an
`on-failure` approval policy -- it no longer exists. The flag rename is
compatible today, but the old spelling is now hidden and undocumented, so migrate
scripts to `--permission-profile` rather than relying on an alias with no
deprecation clock.

---

## 7. `AGENTS.md` and skills can authorize delegation

**What changed.** The multi-agent v2 prompt was updated so that `AGENTS.md` and
skills are treated as places that can explicitly authorize delegation to
subagents.

**Receipt.** <https://github.com/openai/codex/pull/30274>
Shipped in <https://github.com/openai/codex/releases/tag/rust-v0.143.0>

**Event date.** Merged 2026-06-26; first stable tag 2026-07-08.

**Release channel.** `tagged-release` (`rust-v0.143.0`).

**Operator consequence.** A repository-resident file now carries weight in a
delegation decision. Treat `AGENTS.md` and checked-in skills as authority-bearing
artifacts subject to code review, not as documentation.

---

## 8. Dependency security advisories closed in `rust-v0.143.0`

**What changed.** Bundled OpenSSL moved to 3.6.3; Hono and fast-uri were updated
for advisories; quick-xml advisories were addressed; crossbeam-epoch was updated
for RUSTSEC-2026-0204. esbuild moved to 0.28.1.

**Receipt.** OpenSSL: <https://github.com/openai/codex/pull/29487>
Hono / fast-uri: <https://github.com/openai/codex/pull/29650>
quick-xml: <https://github.com/openai/codex/pull/30941>
crossbeam-epoch (RUSTSEC-2026-0204): <https://github.com/openai/codex/pull/31308>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.143.0>

**Event date.** 2026-07-08.

**Release channel.** `tagged-release` (`rust-v0.143.0`).

**Operator consequence.** If your SBOM scanner flags Codex on any of these, the
fix is `rust-v0.143.0` or later. No GitHub Security Advisory was published on
`openai/codex` in this window -- the only advisory on that repo remains
GHSA-w5fx-fh39-j5rw from 2025-09-19, so a GHSA-driven patch process would have
seen nothing here.

---

## 9. New `writes` app-approval mode

**What changed.** A `writes` app-approval mode was added: declared read-only
actions are allowed, and writes prompt.

**Receipt.** <https://github.com/openai/codex/pull/30482>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.144.0>

**Event date.** 2026-07-09 (GitHub API `published_at` 2026-07-09T16:47:12Z).

**Release channel.** `tagged-release` (`rust-v0.144.0`).

**Operator consequence.** This is the middle setting many teams were hand-rolling.
Test it before granting it: the boundary depends on an app *declaring* an action
read-only, which is a claim made by the app, not a property Codex verifies.

---

## 10. MCP authentication elicitation is on by default

**What changed.** MCP tools can request authentication interactively without an
experimental opt-in. ChatGPT-hosted MCP servers can explicitly use session
authentication. Nested MCP authentication startup errors are classified, and
reauthentication-required failures are surfaced.

**Receipt.** Elicitation by default: <https://github.com/openai/codex/pull/28772>
Session auth for hosted servers: <https://github.com/openai/codex/pull/29733>
Reauth surfacing: <https://github.com/openai/codex/pull/29877>
Releases: <https://github.com/openai/codex/releases/tag/rust-v0.144.0>,
<https://github.com/openai/codex/releases/tag/rust-v0.143.0>

**Event date.** 2026-07-08 and 2026-07-09.

**Release channel.** `tagged-release`.

**Operator consequence.** An MCP server can now put an auth prompt in front of a
user mid-run without you having enabled anything. Decide whether your MCP
allowlist is the control, because the opt-in no longer is.

---

## 11. Hosts can inject Codex authentication, and logins can redirect to a hosted page

**What changed.** App-server hosts can provide Codex authentication at runtime,
and successful logins can be redirected to a hosted success page. External auth
resolution was unified and `ExternalAuth` now returns `CodexAuth`.

**Receipt.** Externally provided auth: <https://github.com/openai/codex/pull/31274>
Hosted success redirects: <https://github.com/openai/codex/pull/28745>
Unified resolution: <https://github.com/openai/codex/pull/31421>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.144.0>

**Event date.** 2026-07-09.

**Release channel.** `tagged-release` (`rust-v0.144.0`).

**Operator consequence.** If you embed Codex behind your own app-server, you can
now own the credential path -- and so can anyone else who controls the host
process. Audit which host is allowed to supply auth and where the login redirect
terminates.

---

## 12. Device-code login phishing warning

**What changed.** Device-code login warnings were rewritten to explain how to
recognize and stop a phishing attempt.

**Receipt.** <https://github.com/openai/codex/pull/31648>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.144.0>

**Event date.** 2026-07-09.

**Release channel.** `tagged-release` (`rust-v0.144.0`).

**Operator consequence.** Device-code flows are the standing phishing vector for
CLI agents. The upgrade improves the copy your users see; it does not remove the
flow. Keep the out-of-band rule that nobody should ever read a device code aloud
to a stranger.

---

## 13. Guardian auto-review prompting was shipped, then rolled back

**What changed.** `rust-v0.144.0` shipped updated automatic-review prompting with
"clearer instructions and a focused tool set" (#31480). `rust-v0.144.2` reverted
it, restoring the previous Guardian auto-review policy, request format, and tool
behavior. `rust-v0.144.3` and `rust-v0.144.4` are empty releases with no
user-facing changes.

**Receipt.** Change: <https://github.com/openai/codex/pull/31480>
Revert: <https://github.com/openai/codex/pull/32672>
Releases: <https://github.com/openai/codex/releases/tag/rust-v0.144.2>,
<https://github.com/openai/codex/releases/tag/rust-v0.144.3>,
<https://github.com/openai/codex/releases/tag/rust-v0.144.4>

**Event date.** 2026-07-09 (shipped), 2026-07-13 (reverted 04:39:22Z),
2026-07-13 (`0.144.3`, 06:12:19Z), 2026-07-14 (`0.144.4`).

**Release channel.** `tagged-release` throughout.

**Operator consequence.** If you benchmarked Codex auto-review between 2026-07-09
and 2026-07-13, you measured a prompting configuration that no longer exists.
Re-run any auto-review eval on `rust-v0.144.2` or later. Do not read
`0.144.3`/`0.144.4` as safety patches -- the notes say plainly there were no
user-facing changes.

---

## 14. Dangerous-command detection expanded (forced `rm`), twice

**What changed.** `rust-v0.144.5` expanded `is_dangerous_command`, covering more
forced `rm` forms, and gives clearer rejection reasons when a command is denied.
The same hardening appears independently on the `0.145.0` line.

**Receipt.** Backport: <https://github.com/openai/codex/pull/33455>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.144.5>
Line-`0.145` version: <https://github.com/openai/codex/pull/33464>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>

**Event date.** 2026-07-16 (GitHub API `published_at` 2026-07-16T02:54:48Z) and
2026-07-21.

**Release channel.** `tagged-release` (`rust-v0.144.5`, `rust-v0.145.0`).

**Operator consequence.** This is the one unambiguous command-safety fix on the
stable line in this window. If you are pinned anywhere below `rust-v0.144.5`, the
older forced-`rm` forms are still accepted. Upgrade or add your own deny rules --
this shipped with no CVE and no GHSA, so a vulnerability feed will not tell you.

---

## 15. GPT-5.6 context windows corrected to 272,000 tokens

**What changed.** `rust-v0.144.6` refreshed bundled instructions for GPT-5.6 Sol,
Terra, and Luna and corrected their context windows to 272,000 tokens. The Bedrock
GPT-5.6 catalog and display names were added and then renamed across
`rust-v0.143.0` and `rust-v0.144.0`.

**Receipt.** <https://github.com/openai/codex/releases/tag/rust-v0.144.6>
Backports: <https://github.com/openai/codex/pull/33972>,
<https://github.com/openai/codex/pull/34009>
Bedrock catalog: <https://github.com/openai/codex/pull/30285>
Display names: <https://github.com/openai/codex/pull/31636>

**Event date.** 2026-07-18 (GitHub API `published_at` 2026-07-18T13:51:52Z).

**Release channel.** `tagged-release` (`rust-v0.144.6`).

**Operator consequence.** If you sized prompts, chunking, or compaction
thresholds against the pre-`0.144.6` bundled context window for GPT-5.6, your
budget was wrong. Re-derive it from 272,000.

---

## 16. Multi-agent v2 marked stable, with settings unified under `agents`

**What changed.** `rust-v0.145.0` marks multi-agent v2 stable. Multi-agent
settings are unified under an `agents` key. Sub-agent model overrides, reasoning
levels, and concurrency are configurable; spawned-agent models are restricted to
the active backend; agent roles are restored on reload; parent-owned sub-agent
threads are read-only in the TUI. `rust-v0.144.0` had already added a warning when
Ultra reasoning is selected with high multi-agent concurrency.

**Receipt.** Stability: <https://github.com/openai/codex/pull/34383>
Settings unification: <https://github.com/openai/codex/pull/33550>
Model overrides: <https://github.com/openai/codex/pull/32749>
Backend restriction: <https://github.com/openai/codex/pull/32751>
Configured defaults: <https://github.com/openai/codex/pull/33631>
Role restore: <https://github.com/openai/codex/pull/33657>
Ultra concurrency warning: <https://github.com/openai/codex/pull/31621>
Releases: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>,
<https://github.com/openai/codex/releases/tag/rust-v0.144.0>

**Event date.** 2026-07-21 (GitHub API `published_at` 2026-07-21T18:21:04Z).

**Release channel.** `tagged-release` (`rust-v0.145.0`).

**Operator consequence.** Multi-agent v2 is no longer experimental, so its
configuration is now something you own. Move any multi-agent config to the
`agents` key, set an explicit sub-agent model and concurrency, and price the fan-
out before enabling it -- the release itself ships a warning that Ultra plus high
concurrency burns usage quickly.

---

## 17. `/import` pulls Claude Code and Cursor setup into Codex

**What changed.** `/import` was expanded to migrate settings, MCP servers,
plugins, sessions, commands, hooks, subagents, and project-scoped memories from
Cursor and Claude Code. Plugin install failure subtypes are preserved during
import; imported agent memory keeps its scope and provenance; the CLI reports
itself as the external agent config import source.

**Receipt.** Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>
Plugin import: <https://github.com/openai/codex/pull/31672>
Commands to skills: <https://github.com/openai/codex/pull/33411>
Cursor support: <https://github.com/openai/codex/pull/33426>
Memory migration: <https://github.com/openai/codex/pull/33444>
Memory scope/provenance: <https://github.com/openai/codex/pull/33683>
Docs: <https://learn.chatgpt.com/docs/import>

**Event date.** 2026-07-21.

**Release channel.** `tagged-release` (`rust-v0.145.0`).

**Operator consequence.** This copies another agent's *authority configuration*
into Codex in one step -- MCP servers, hooks, subagents, and plugin/marketplace
entries. The Codex doc says to review imported setup, calling out "Tool
restrictions or permissions in imported skills and agents" and "MCP server
settings that use custom authentication, headers, environment variables, or
transports." Treat `/import` output as an untrusted config diff and review it
before running a turn, not after.

---

## 18. Full access always requires confirmation; "don't ask again" removed

**What changed.** Selecting full access now always opens the confirmation dialog
when user-reviewed approvals are active, regardless of
`notices.hide_full_access_warning`. The persistent "don't ask again" option and
its acknowledgement events were removed.

**Receipt.** <https://github.com/openai/codex/pull/32989>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>

**Event date.** Merged 2026-07-14; tagged 2026-07-21.

**Release channel.** `tagged-release` (`rust-v0.145.0`).

**Operator consequence.** Any runbook that told users to tick "don't ask again"
for full access is now wrong. Stop believing `notices.hide_full_access_warning`
suppresses the prompt -- it does not, and a scripted flow that expected no dialog
will hang.

---

## 19. Approval rejection reasons now reach the model

**What changed.** `ReviewDecision::Denied` carries a rejection string. Specific
rejection reasons are preserved through command, patch, network, MCP, delegated,
and automatic approval flows and returned to the model in tool results. Invalid
approval responses are distinguished from user declines, and oversized rejection
messages are truncated before entering model context.

**Receipt.** <https://github.com/openai/codex/pull/34400>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>

**Event date.** Merged 2026-07-20; tagged 2026-07-21.

**Release channel.** `tagged-release` (`rust-v0.145.0`).

**Operator consequence.** What a reviewer types into a denial is now model-visible
context. Tell approvers that the rejection box is a prompt, not a private note,
and keep secrets and internal ticket text out of it.

---

## 20. Hook surface grows: `SessionEnd`, spill limits, and plugin hook trust

**What changed.** A `SessionEnd` hook event was added for thread teardown
(app-server archive, delete, idle unload, graceful shutdown), with the transcript
flushed first and a bounded budget: output is advisory, default timeout one
second, configured timeouts capped at three seconds, async hooks forced
synchronous with a warning. Hook context spill limits became configurable, and
completed hook warnings surface in TUI headers. Separately, hooks from
materialized workspace plugins are now recorded as trusted after a successful
plugin refresh, with the trust write serialized against config mutations and left
untrusted on failure or account change.

**Receipt.** `SessionEnd`: <https://github.com/openai/codex/pull/33895>
Spill limits: <https://github.com/openai/codex/pull/34393>
Hook warnings in header: <https://github.com/openai/codex/pull/34416>
Plugin hook trust: <https://github.com/openai/codex/pull/32301>
Hook command tracing: <https://github.com/openai/codex/pull/31501>
Windows hook quoting: <https://github.com/openai/codex/pull/33926>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>

**Event date.** 2026-07-21.

**Release channel.** `tagged-release` (`rust-v0.145.0`).

**Operator consequence.** `SessionEnd` is a real teardown hook, but its budget is
three seconds hard-capped -- do not put a network flush or an audit upload behind
it. The plugin-hook trust change is the one to review: installing or updating a
remote workspace plugin can now cause its hooks to be recorded as trusted without
a separate prompt.

---

## 21. Legacy exec policy engine removed, and a one-time migration rewrites your rules file

**What changed.** The `codex-execpolicy-legacy` crate, its default policy, and
its tests were deleted, along with the legacy matcher reference in the exec policy
documentation. Separately, on session startup Codex now removes exact `allow`
entries from `rules/default.rules` for command prefixes it no longer suggests as
policy amendments, records the migration in `.sandbox_migration` so it runs once,
and skips the migration when user and project exec policy rules are ignored. The
protected prefix list was expanded across shells, interpreters, package runners,
and destructive or privilege-related commands. Managed exec policy is preserved
after rules parse errors, and exec-policy warnings are emitted for freshly loaded
thread config.

**Receipt.** Engine removal: <https://github.com/openai/codex/pull/32093>
Rules migration: <https://github.com/openai/codex/pull/34271>
Managed policy preserved on parse error: <https://github.com/openai/codex/pull/31188>
Fresh-config warnings: <https://github.com/openai/codex/pull/31253>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>

**Event date.** Engine removal merged 2026-07-10; migration merged 2026-07-20;
both tagged 2026-07-21.

**Release channel.** `tagged-release` (`rust-v0.145.0`).

**Operator consequence.** Upgrading to `rust-v0.145.0` will edit
`rules/default.rules` on the next session start. Back up that file first, diff it
after the first run, and check `.sandbox_migration` exists. If your sandbox policy
is under version control or config management, expect drift -- and if you relied
on the legacy engine's matcher semantics, they are gone, not deprecated.

---

## 22. Windows sandboxing moved into the exec server; elevated sandbox required for network proxies

**What changed.** Windows sandboxing is supported in the exec server. The elevated
Windows sandbox is now required for, and selected for, network proxies. Windows
filesystem helper consoles are hidden, sandbox setup requests are coalesced,
metadata path creation inside the sandbox is avoided, and inherited ACEs are
ignored when refreshing Windows write roots. `rust-v0.144.0` had already fixed
Windows sandbox sessions being unable to delete files in writable roots and
granted access to the managed primary runtime.

**Receipt.** Exec-server Windows sandboxing: <https://github.com/openai/codex/pull/34423>
Elevated sandbox requirement: <https://github.com/openai/codex/pull/32857>
Elevated sandbox selection: <https://github.com/openai/codex/pull/33445>
Hidden helper consoles: <https://github.com/openai/codex/pull/32849>
Inherited ACEs: <https://github.com/openai/codex/pull/34392>
Writable-root deletion: <https://github.com/openai/codex/pull/31138>
Primary runtime access: <https://github.com/openai/codex/pull/31574>
Releases: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>,
<https://github.com/openai/codex/releases/tag/rust-v0.144.0>

**Event date.** 2026-07-09 and 2026-07-21.

**Release channel.** `tagged-release`.

**Operator consequence.** Windows operators using a managed network proxy now need
the elevated sandbox path. If your fleet blocks elevation, test before rolling out
`rust-v0.145.0` -- the proxy enforcement and the sandbox are now coupled.

---

## 23. Memories stabilized and enabled for paginated threads

**What changed.** The memories feature flag was stabilized. Memories are enabled
for paginated threads. Memory consolidation artifacts are validated before
success, the consolidation workspace roots are rebound, and parent sandbox
enforcement is preserved during consolidation.

**Receipt.** Flag stabilization: <https://github.com/openai/codex/pull/31804>
Paginated-thread memories: <https://github.com/openai/codex/pull/34386>
Artifact validation: <https://github.com/openai/codex/pull/32193>
Workspace rebinding: <https://github.com/openai/codex/pull/32197>
Sandbox enforcement during consolidation: <https://github.com/openai/codex/pull/32441>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>

**Event date.** 2026-07-21.

**Release channel.** `tagged-release` (`rust-v0.145.0`).

**Operator consequence.** Codex now retains cross-session memory by default on the
stable line. Decide where those artifacts live and whether they are in scope for
your data-retention policy, before an agent writes something you cannot explain in
an audit.

---

## 24. Prompt cache keys moved to session IDs, and cache-write tokens are metered

**What changed.** Session IDs are used for prompt cache keys. Prompt cache write
token usage is tracked, and cache-write tokens were added to the raw response
schema and TypeScript envelopes. Exact per-response usage is exposed in raw
app-server events. Workspace spend controls are honored in rate-limit handling.

**Receipt.** Cache keys: <https://github.com/openai/codex/pull/33035>
Cache-write tracking: <https://github.com/openai/codex/pull/33454>
Raw schema: <https://github.com/openai/codex/pull/33500>
Exact per-response usage: <https://github.com/openai/codex/pull/32985>
Spend controls: <https://github.com/openai/codex/pull/33187>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>

**Event date.** 2026-07-21.

**Release channel.** `tagged-release` (`rust-v0.145.0`).

**Operator consequence.** Cost attribution changed shape. If you compute Codex
spend from app-server events, add the cache-write token field before comparing a
`rust-v0.145.0` bill to a `rust-v0.144.x` one, or your delta is an artifact of
new fields rather than new usage.

---

## 25. Editing a prompt or retrying a safety-buffered turn now branches the thread

**What changed.** Editing an earlier prompt, or retrying a turn that was
safety-buffered, creates a contextual branch that preserves the original
conversation, attachments, and mention bindings. Interrupted prompts stay in
conversation history. Forks of paginated threads are rejected. Approvals reviewer
identity is preserved when forking threads.

**Receipt.** Branch on edit: <https://github.com/openai/codex/pull/33201>
Retry on fork: <https://github.com/openai/codex/pull/33207>
Context preservation: <https://github.com/openai/codex/pull/33211>
Interrupted prompts retained: <https://github.com/openai/codex/pull/33198>
Paginated fork rejection: <https://github.com/openai/codex/pull/33109>
Reviewer preserved on fork: <https://github.com/openai/codex/pull/34664>
Release: <https://github.com/openai/codex/releases/tag/rust-v0.145.0>

**Event date.** 2026-07-21. (Reviewer-on-fork #34664 merged 2026-07-22 and is
`preview-or-beta`, not in `rust-v0.145.0`.)

**Release channel.** `tagged-release` (`rust-v0.145.0`) except #34664, which is
`preview-or-beta`.

**Operator consequence.** Editing a prompt no longer destroys the prior branch.
If your review process assumed "the transcript is what happened", it now needs to
account for sibling branches -- a reviewer reading one branch has not read the
session.

---

## 26. Codex became part of the ChatGPT desktop app

**What changed.** The changelog entry of 2026-07-09 states: "Codex is now part of
the ChatGPT desktop app on macOS and Windows. Existing Codex app users can update
as usual and keep their projects, settings, and workflows." The same entry lists
PR Chat for GitHub pull request reviews, direct Markdown and code editing, custom
domain support for Sites, faster Computer Use with GPT-5.6, and clearer full-access
warnings. The 2026-07-23 entry adds GPT-Live-powered ChatGPT Voice across Chat,
Work, and Codex in the desktop app, and multi-folder local projects with a
designated primary folder used for chats, Git operations, and automatic feature
discovery. The CLI shipped ChatGPT-branded Desktop app build support in
`rust-v0.145.0`.

**Receipt.** <https://learn.chatgpt.com/docs/changelog#codex-2026-07-09-app>
<https://learn.chatgpt.com/docs/changelog#codex-2026-07-23-app>
Feed with permalinks: <https://learn.chatgpt.com/docs/changelog/rss.xml>
CLI-side support: <https://github.com/openai/codex/pull/33901>

**Event date.** 2026-07-09 and 2026-07-23 (RSS `pubDate` `Thu, 09 Jul 2026` and
`Thu, 23 Jul 2026`).

**Release channel.** `tagged-release` for the CLI-side change
(`rust-v0.145.0`). The desktop app itself ships on the ChatGPT desktop release
train (26.707, 26.715) with no public tag or commit -- receipt quality is
changelog-only.

**Operator consequence.** Codex is no longer a separable install decision on
macOS and Windows -- allowing the ChatGPT desktop app now allows Codex. If your
endpoint policy enumerates approved binaries, re-check it. Multi-folder local
projects widen the blast radius of a Codex session to more than one repository
root at a time.

---

## 27. Preview-only: the network and proxy policy hardening wave

**What changed.** A coordinated set of network-authority changes landed after
`rust-v0.145.0` and is present only on the `rust-v0.146.0-alpha` line:

- Keyed shell environment policy filters (#34590)
- Explicitly permitted loopback proxy targets (#34603)
- Windows sandbox proxy traffic routed by restricting SID (#34613)
- Hardened Windows elevated sandbox startup (#34629)
- Hardened managed proxy setup for sandboxed executions (#34641)
- Proxy policy propagated through auth routing and refreshes (#34649, #34650, #34655)
- Exec-server network policy callback types and enablement (#34620, #34770)
- Execution environments initialized with the final HTTP policy (#34995)
- Exec-server HTTP routed through the configured proxy policy (#35023)
- Windows sandbox proxy settings preserved in guardian sessions (#35036)
- Hardened network approval cancellation and concurrency (#35267)

**Receipt.** Representative pinned commits (all verified ancestors of
`rust-v0.146.0-alpha.10.1`, none ancestors of `rust-v0.145.0`):
<https://github.com/openai/codex/commit/7442f5f9323d> (#34590),
<https://github.com/openai/codex/commit/2497972808e7> (#34603),
<https://github.com/openai/codex/commit/999a715089a6> (#34613),
<https://github.com/openai/codex/commit/a26f219f6788> (#34629),
<https://github.com/openai/codex/commit/c5eb33aed12d> (#34641),
<https://github.com/openai/codex/commit/63fe5a6b71d4> (#35267)
Prerelease tag: <https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10.1>

**Event date.** 2026-07-21 through 2026-07-25 (commit dates
2026-07-21T18:23:26Z through 2026-07-25T00:10:48Z).

**Release channel.** `preview-or-beta`. Ancestry check:
`7442f5f9323d...rust-v0.145.0` reports `diverged`;
`7442f5f9323d...rust-v0.146.0-alpha.1` reports `ahead`.

**Operator consequence.** The most substantial network-authority work of the
window is not on stable. If you rely on Codex network egress policy for
containment, `rust-v0.145.0` is what you are running and this wave is not in it.
Either accept the alpha channel deliberately or treat Codex network policy as
unhardened until a `0.146` stable tag exists.

---

## 28. Preview-only: trusted plugin script attribution

**What changed.** Command executions can be attributed to trusted plugin scripts,
and that attribution is preserved across command approvals.

**Receipt.** <https://github.com/openai/codex/commit/5bdbd3ee90d7> (#35016),
<https://github.com/openai/codex/commit/84fa68b429f1> (#35020),
<https://github.com/openai/codex/commit/9fc4e5a7aaf0> (#35029)
Prerelease tag: <https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10.1>

**Event date.** 2026-07-23 (2026-07-23T21:50:17Z through 2026-07-23T23:13:59Z).

**Release channel.** `preview-or-beta` (verified: `5bdbd3ee90d7...rust-v0.145.0`
reports `diverged`; `5bdbd3ee90d7...rust-v0.146.0-alpha.10.1` reports `ahead`).

**Operator consequence.** The provenance you want on an approval dialog -- "which
plugin asked for this" -- exists only in preview. On stable, an approval prompt
does not tell you which plugin script originated the command.

---

## 29. Preview-only: new switches to disable specific tools

**What changed.** Switches were added to disable the `update_plan` tool (#35054),
the multi-agent wait tool (#34887), and the in-process code-mode host fallback
(#35266). Shell approval keys moved to path URIs (#34806), and MCP tool prefixes
can be omitted per server (#34991).

**Receipt.** <https://github.com/openai/codex/commit/fb4e6ba2f492> (#35054),
<https://github.com/openai/codex/commit/4462b9deef21> (#34887),
<https://github.com/openai/codex/commit/cba0e2701c9e> (#35266),
<https://github.com/openai/codex/commit/a59a419afa34> (#34806),
<https://github.com/openai/codex/commit/74e9d7efc416> (#34991)

**Event date.** 2026-07-22 through 2026-07-25.

**Release channel.** `preview-or-beta`.

**Operator consequence.** The code-mode fallback switch is the notable one: on
stable, if the external code-mode host is unavailable, Codex silently falls back
to the embedded V8 runtime (shipped in `rust-v0.144.1`). Only the alpha line lets
you turn that fallback off. Note also that #34806 changes shell approval key
shape, so previously remembered approvals may not match after a `0.146` upgrade.

---

## 30. Main-unreleased: administrators can disable in-app updates

**What changed.** A stable, default-enabled `in_app_updates` requirements-only
feature was added. Administrators can disable in-app updates through `[features]`
in `requirements.toml`. The policy is exposed through `configRequirements/read`
and included in the config schema.

**Receipt.** <https://github.com/openai/codex/pull/35537>
Pinned commit: <https://github.com/openai/codex/commit/95637f7056835fea66bdd0044414af480fc0fd74>

**Event date.** 2026-07-27 (merged 2026-07-27T02:18:29Z; commit
2026-07-27T02:16:11Z). This was `main` HEAD at harvest.

**Release channel.** `main-unreleased`. Ancestry:
`95637f705683...rust-v0.146.0-alpha.10.1` reports `diverged` -- it is in no tag,
stable or prerelease.

**Operator consequence.** The managed control that would let an enterprise pin
Codex versions from `requirements.toml` exists in no shipped build. Do not plan a
rollout around it yet; keep using OS-level package management to hold a version.

---

## 31. Main-unreleased: plugin MCP allowlist semantics changed

**What changed.** Plugin MCP servers are left unchanged when every plugin
requirement omits `mcp_servers`. An explicitly empty `mcp_servers` allowlist
continues to mean deny-all.

**Receipt.** <https://github.com/openai/codex/pull/35280>
Pinned commit: <https://github.com/openai/codex/commit/4c43465133428898aa84f0bfc02c306ed65fb66a>

**Event date.** 2026-07-25 (commit 2026-07-25T02:09:11Z).

**Release channel.** `main-unreleased` (in no tag; not in
`rust-v0.146.0-alpha.10.1`).

**Operator consequence.** The distinction between "omitted" and "empty" in a
plugin MCP allowlist is being made explicit. If you wrote a requirements file
assuming an omitted `mcp_servers` key blocks everything, verify against your
actual build -- and write the empty list explicitly if deny-all is what you meant.

---

## 32. Main-unreleased: remaining main-only commits

**What changed.** Twelve further commits sit on `main` in no tag at window close
(14 main-only total, minus #35537 and #35280 covered above). The
operator-relevant ones: exec-server network policy requests handled in the client
(#35359), the MCP server recursion limit raised (#35414), and generated system
skills ignored by the skills watcher (#35408). One of the 14, #35364 (bound Code
Mode metadata compatibility headers, `5c36e869c1a7`), was cherry-picked onto the
alpha branch as `27c0bb330bac` and so is in `rust-v0.146.0-alpha.10.1` by content
even though it diverges from that tag by SHA.

**Receipt.** <https://github.com/openai/codex/commit/3a08af44b2a4> (#35359),
<https://github.com/openai/codex/commit/61a44880a85d> (#35414),
<https://github.com/openai/codex/commit/62fd410384cc> (#35408)
Compare base: <https://github.com/openai/codex/compare/rust-v0.145.0...main>
(`main` HEAD at harvest: `95637f7056835fea66bdd0044414af480fc0fd74`)

**Event date.** 2026-07-25 through 2026-07-27.

**Release channel.** `main-unreleased`.

**Operator consequence.** Nothing to act on. Recorded so the next window can tell
whether these reached the `0.146` line or were reverted.

---

## 33. npm distribution: two dist-tags are more than a year stale

**What changed.** Observed npm dist-tags for `@openai/codex` at harvest:

```
beta    0.1.2505172116
native  0.1.2505291658
latest  0.145.0
alpha   0.146.0-alpha.10.1
```

**Receipt.** Reproducible local probe, run 2026-07-27:
`curl -s https://registry.npmjs.org/@openai/codex | jq '.["dist-tags"]'`
Package page: <https://www.npmjs.com/package/@openai/codex>

**Event date.** Observed 2026-07-27. `latest` = `0.145.0` matches the stable tag
of 2026-07-21; `alpha` = `0.146.0-alpha.10.1` published 2026-07-25T20:33:52Z.
Registry publish timestamps for the stale tags: `0.1.2505172116` at
2025-05-18T04:20:43Z and `0.1.2505291658` at 2025-05-30T00:10:01Z.

**Release channel.** `latest` tracks `tagged-release`; `alpha` tracks
`preview-or-beta`; `beta` and `native` track builds published in May 2025.

**Operator consequence.** `npm install -g @openai/codex@beta` installs a build
published 2025-05-18, not a recent prerelease. If any of your install docs or
Docker images reference `@beta` or `@native`, they are pinning a fourteen-month-old
binary with none of this window's command-safety work. Use an explicit version or
`@latest`.

---

## Not found / negative results

- **No GitHub Security Advisory** was published on `openai/codex` in the window.
  The repository's only advisory remains GHSA-w5fx-fh39-j5rw (2025-09-19).
  Every security-relevant fix above shipped as a release note line only.
- **No `0.146` stable tag** existed at window close. The newest prerelease was
  `rust-v0.146.0-alpha.10.1` (2026-07-25T20:29:03Z).
- **The changelog page exposes no per-entry permalinks in rendered HTML.** Only
  the RSS feed carries anchors, and it still emits `developers.openai.com` URLs
  that 308 to the new host.
