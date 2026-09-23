---
schema_version: bitter.frontier_profile.v0
profile_id: deepseek-harness
label: DeepSeek Harness
owner: deepseek-ai
source_contract: sources/deepseek-harness.yml
homepage: https://deepseek.com/harness/en/
docs: https://github.com/deepseek-ai/deepseek-harness/tree/master/docs
tagline: "A frontier lab's own agent harness where everything is a plugin, including the approval gate, now with a Web login and still no stable release."
compared_with:
  - codex
  - claude-code
  - gemini-cli
  - omnigent
repo: https://github.com/deepseek-ai/deepseek-harness
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: web-ui-login
    finding_id: 2026-09-21-deepseek-harness-the-web-ui-now-requires-authentication-on-every-api-request-the-host-fence-comment-still
    last_verified: 2026-09-23
    status: active
  - id: still-prerelease
    finding_id: 2026-09-21-deepseek-harness-still-no-non-prerelease-tag-the-project-split-into-an-rc-line-and-an-alpha-line-and-npm
    last_verified: 2026-09-23
    status: active
  - id: any-row-replaceable
    finding_id: 2026-09-21-deepseek-harness-architecture-posture-unchanged-at-both-newest-pins-no-privileged-core-any-row-replaceable
    last_verified: 2026-09-23
    status: active
  - id: more-data-to-deepseek
    finding_id: 2026-09-21-deepseek-harness-more-outbound-data-to-deepseek-by-default-the-session-log-upload-flipped-on-in-the-alpha
    last_verified: 2026-09-23
    status: active
  - id: gates-removed-by-default
    finding_id: 2026-09-21-deepseek-harness-defaults-that-removed-human-gates-public-webfetch-without-per-request-approval-web-termina
    last_verified: 2026-09-23
    status: active
  - id: bubblewrap-escape-safety-md
    finding_id: 2026-09-21-deepseek-harness-security-fixes-a-bubblewrap-escape-via-proc-safety-md-now-says-nothing-is-audited
    last_verified: 2026-09-23
    status: active
  - id: default-model-v4-1-flash
    finding_id: 2026-09-21-deepseek-harness-default-model-moved-to-deepseek-v4-1-flash-default-wire-protocol-moved-to-messages-on-alph
    last_verified: 2026-09-23
    status: active
  - id: upgrade-breaks
    finding_id: 2026-09-21-deepseek-harness-breaking-changes-an-operator-hits-on-upgrade
    last_verified: 2026-09-23
    status: active
  - id: acp-headless-remote
    finding_id: 2026-09-21-deepseek-harness-capability-half-what-an-operator-can-do-now-that-they-could-not-on-2026-08
    last_verified: 2026-09-23
    status: active
  - id: gate-is-a-plugin
    finding_id: 2026-08-17-deepseek-harness-everything-is-a-plugin-including-the-components-that-enforce-the-limits
    last_verified: 2026-09-23
    status: active
  - id: web-ui-unauthenticated
    finding_id: 2026-08-17-deepseek-harness-nothing-authenticates-the-web-ui-on-127-0-0-1-3080-and-the-api-fence
    last_verified: 2026-08-20
    status: retired
  - id: plugins-are-unsandboxed-in-process
    finding_id: 2026-08-17-deepseek-harness-a-dsh-plugin-is-an-unsandboxed-in-process-module-with-no-permission
    last_verified: 2026-08-18
    status: active
  - id: one-channel-and-it-is-a-prerelease
    finding_id: 2026-08-17-deepseek-harness-the-whole-project-ships-to-exactly-one-channel-and-it-is-a
    last_verified: 2026-08-20
    status: retired
  - id: runs-rival-models-and-harnesses
    finding_id: 2026-08-17-deepseek-harness-deepseek-s-own-harness-ships-a-supported-path-to-run-openai-and
    last_verified: 2026-09-23
    status: active
  - id: rc-8-still-plugin-gate
    finding_id: 2026-08-20-deepseek-harness-still-prerelease-gate-still-a-plugin-ui-still-unauthenticated
    last_verified: 2026-08-20
    status: retired
stance:
  use_for: "Evaluating DeepSeek models inside the lab's own harness, and studying a fully composable agent where the security layout is printed by --dump-config. Pin 0.1.5-rc.2; try ACP and headless NDJSON there."
  avoid_for: "Any machine you care about without a disposable VM around it, which is the vendor's own advice. The alpha line with default settings against the official API. The experimental Auto review package, anywhere."
  watch_next: "A first non-prerelease tag, and whether it makes the approval gate privileged over plugins; who moves npm latest and when; whether the Bubblewrap escape gets an advisory; whether the alpha session-log upload default reaches an rc."
---

# DeepSeek Harness

A frontier model lab shipped its own agent harness, which puts it beside
Codex, Claude Code and Gemini CLI: the organisation that trains the model
also decides what its agent may do with your machine. DeepSeek's answer is
unusual. Everything is a plugin, including the parts that say no, and the
harness ships a supported path to run rival models and drive rival
harnesses. A model vendor that makes its harness model-agnostic is telling
you where it thinks the durable layer is.

The short read for 2026-09-21: still a preview, now with a real Web login,
and the alpha line sends DeepSeek more about your sessions than the rc line
does. Pin the rc, set the telemetry switches, and put it in a VM.

## Where it stands, 2026-09-21

**Channel.** Sixteen tags in the window and not one stable. The project now
runs two preview lines: release candidates, newest
[0.1.5-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.2)
(10 September), and faster alphas, newest 0.1.6-alpha.2 (17 September). The
README's `npx @deepseek-ai/dsh web` installs whatever npm `latest` points at,
which on 23 September was 0.1.5-rc.2. The publish script never sets
`latest`, so somebody moved it by hand and the registry does not say when.
Pin `@0.1.5-rc.2` explicitly. The public repository is a mirror: its merge
commits cite pull requests that do not exist publicly, so a gap in the
public history proves nothing about work done.

**The Web UI has a login.** Since 0.1.2 every `/api` request
[needs authentication](https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/client/connection/src/rpc-host.ts):
a one-time token in the printed launch URL becomes a signed cookie good for
30 days, and loopback gets no exemption. Before 0.1.2, anything that could
reach the port could drive the agent, so upgrade any exposed rc.8 or 0.1.1
install. Treat the launch URL as a credential; it sits in your terminal
scrollback.

**The gate is still a plugin.**
[architecture.md at 0.1.6-alpha.2](https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/docs/architecture.md)
still says "There is no privileged core to patch" and that any row can be
replaced. The approval row, the sandbox-policy row and the new Web auth are
all rows. One exception is documented: the `never` approval policy is
decided before the plugin chain runs. When last read in August, a plugin
was unsandboxed in-process code with no permission declaration. On alpha a new Plugins
page installs them live from the Web UI. Anyone holding a Web session can
therefore install something that replaces the approval row. `--dump-config`
remains the security document; read it after every upgrade.

**More goes to DeepSeek by default.** On the rc line, requests to the
official API carry your enabled plugin names and versions, and
feedback-triggered telemetry is on (it was off at rc.8). On alpha,
[`session-log-deepseek`](https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/packages/session/session-log-deepseek/src/index.ts)
flipped to enabled, and its records include your working directory path.
Set `DSH_TELEMETRY_DISABLED=1`, disable `plugin-package-inventory-deepseek`,
and on alpha set `session-log-deepseek` to `enabled: false` before the first
request. Custom and third-party providers are unaffected.

**Gates that went away.** Since 0.1.2-rc.1, public WebFetch is on by default in
every surface, with no per-request approval. The default `workspace-write` sandbox does not
confine network, so that is an exfiltration path with SSRF protection and
nothing else. On alpha, the Web UI's terminal runs as your system user
regardless of sandbox mode, so an exposed Web session is a real shell. And
alpha adds an
[experimental Auto review](https://github.com/deepseek-ai/deepseek-harness/blob/ddefc45fbc7f8e46dd73185e68295696d1297887/packages/experimental/auto-review/README.md):
one model review, then the call runs with full access. Unload the plugin and
live sessions migrate to full access with no reviewer at all. Remove the
reviewer and you keep the access it was supervising.

**The vendor says the sandbox is advisory.** 0.1.1-rc.1 fixed a Linux
Bubblewrap escape through `/proc/<pid>/root` with a
[release-note line](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.1-rc.1)
and no advisory. Treat sandboxed runs on rc.8 and earlier as unconfined. A
new SAFETY.md says the project "has not undergone a security audit" and
that approval prompts and sandboxing "do not guarantee isolation." Take it at
its word.

**Upgrade costs.** 0.1.5-rc.1 moved the default model to DeepSeek-V4.1-Flash
unless your config pins one; pin it if you compare runs across versions. It
also moved sessions to a format older builds cannot read, so back up
`$DSH_HOME` first. The SQLite session backend is gone as of 0.1.2-rc.1;
export on 0.1.1 or earlier before upgrading. Plugins written for rc.8 need
porting. On alpha, the default wire protocol is now Messages, a hard-coded
official `baseURL` breaks, and a failed hot reload is no longer rolled back.

**What you gain.** Full ACP support, headless mode that emits NDJSON and
resumes by session id, per-subagent model choice, and a default subagent
limit of eight live children at depth one. The Claude Code and Codex
subagent wrappers still default to non-interactive modes (`dontAsk` and
`never`), so a delegated call does not come back to you for approval.

## What is unresolved

- Whether a first stable tag makes the approval gate privileged over
  plugins, or ships the same waterfall.
- Whether the Bubblewrap escape gets an advisory or a commit anyone can
  point to.
- Whether the Web auth refuses a loopback request without the cookie in
  practice. The code says 401; nobody here has probed it.
- Which of English or Chinese documentation is normative when they drift.
- What an operator inherits from Cordis, the third-party framework the
  plugin model comes from, and who ships a fix when it breaks.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
