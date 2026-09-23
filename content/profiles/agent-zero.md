---
schema_version: bitter.frontier_profile.v0
profile_id: agent-zero
label: Agent Zero
owner: agent0ai
source_contract: sources/agent-zero.yml
homepage: https://www.agent-zero.ai/
docs: https://www.agent-zero.ai/p/docs/
tagline: "An agent with a real computer, where main is the tag and the maintainers now keep their own security ledger. ACP still ships with host write and exec switched on."
x:
  project: Agent0ai
repo: https://github.com/agent0ai/agent-zero
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: telegram-webhook
    finding_id: 2026-09-21-agent-zero-v2-12-fixes-an-unauthenticated-telegram-webhook-that-let-anyone-forge-allowed-user-prompts
    last_verified: 2026-09-23
    status: active
  - id: acp-defaults-unchanged
    finding_id: 2026-09-21-agent-zero-carry-forward-acp-defaults-unchanged-at-v2-11-and-v2-12-ssrf-tests-intact-blob-changed-for
    last_verified: 2026-09-23
    status: active
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
  - id: ssrf-fix-lost-and-restored
    finding_id: 2026-08-17-agent-zero-ssrf-fix-for-cve-2026-4308-was-silently-lost-in-a-plugin-refactor-and
    last_verified: 2026-09-23
    status: active
  - id: scoped-tool-policy
    finding_id: 2026-08-17-agent-zero-agent-zero-v2-9-makes-tool-mcp-and-skill-access-a-scoped-policy
    last_verified: 2026-08-17
    status: active
  - id: whatsapp-imap-fixes
    finding_id: 2026-09-21-agent-zero-v2-12-also-fixes-whatsapp-media-path-traversal-file-overwrite-in-the-container-and-an-imap
    last_verified: 2026-09-23
    status: active
  - id: host-folders-in-webui
    finding_id: 2026-09-21-agent-zero-v2-12-exposes-connected-cli-and-launcher-host-folders-in-the-webui-files-panel
    last_verified: 2026-09-23
    status: active
  - id: chat-completions-default-context-doctor
    finding_id: 2026-09-21-agent-zero-v2-11-makes-chat-completions-the-default-model-transport-breaking-and-adds-context-doctor
    last_verified: 2026-09-23
    status: active
  - id: plugin-hooks-policy-prompts
    finding_id: 2026-09-21-agent-zero-v2-12-makes-plugin-lifecycle-go-through-hooks-py-and-removes-disabled-capabilities-from
    last_verified: 2026-09-23
    status: active
  - id: ready-branch-untagged-fixes
    finding_id: 2026-09-21-agent-zero-the-ready-branch-carries-secret-substitution-and-browser-cross-chat-fixes-that-are-in-no
    last_verified: 2026-09-23
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
  use_for: "Work where the agent needs a desktop: a real browser, a document session, a terminal that remembers what it did. Operators who want the build they install to be the build the notes describe, since main is identical to v2.12. Projects that need a revocable tool, MCP and skill surface that holds through subagents (v2.9 and later)."
  avoid_for: "ACP at its v2.12 defaults, which ship always on with host read-write and host code execution. Any pre-v2.12 install with a Telegram bot on a reachable port. Treating an IMAP From whitelist as sender authentication. Connecting the A0 CLI or Launcher to writable host folders when the WebUI login is shared. Any build from v1.19 through v2.8 that fetches untrusted URLs through document query."
  watch_next: "v2.13, and whether it carries the ready-branch secret-substitution fix (aa8e1c042a); whether ACP's host write and exec defaults change; whether the security ledger is joined by GitHub advisories; whether v2.12 still shares one browser sign-in profile across chats."
---

# Agent Zero

Agent Zero gives an agent a whole computer: a real browser, a desktop session,
a terminal and a filesystem, all inside a long-lived Docker container. It is on
this watchlist because that is the widest authority any entry hands a model by
default. The useful questions are where the container boundary sits and who
can move it.

## Where it stands, 2026-09-21

**Channel.** Latest is
[v2.12](https://github.com/agent0ai/agent-zero/releases/tag/v2.12) (9
September), after [v2.11](https://github.com/agent0ai/agent-zero/releases/tag/v2.11)
(27 August). The Docker `latest` image is v2.12, and `main` is identical to the
tag. Nothing is merged and left unreleased. The `ready` branch is 76 commits
ahead, is in no tag, and is the only preview there is. The `development` branch
is 514 commits behind and stale, so do not read it as a channel. The repo
publishes no GitHub security advisories.

**Clean channel discipline did not keep a fix in place.** On 29 May 2026 a
[plugin refactor](https://github.com/agent0ai/agent-zero/commit/6ccbae071228ee8146a62d402343f7bd67f5cf63)
gave document query its own fetcher and quietly dropped the CVE-2026-4308 SSRF
guard. Every stable from v1.19 through v2.8 shipped without it, until
[v2.9 restored it](https://github.com/agent0ai/agent-zero/commit/b40874e7c03775c53989e206769e33ff23a4384e)
on 12 August. The only disclosure was one line in the release notes. At v2.12
the guard code has not changed since v2.10, and the
[three SSRF tests](https://github.com/agent0ai/agent-zero/blob/v2.12/tests/test_document_query_plugin.py)
are still there. The test file's hash changed for unrelated prompt assertions,
so a tool that pins by blob hash will flag it. If you carry local patches
across Agent Zero's plugin churn, diff your security call sites. Do not assume
a CVE you already patched is still patched.

**Upgrade to v2.12 if a Telegram bot is configured.** Before
[675f6e7ccd](https://github.com/agent0ai/agent-zero/commit/675f6e7ccd), the
webhook skipped session auth and CSRF, and it checked the secret only if one
was set. Anyone who could reach the HTTP port could post as an allowed Telegram
user. The agent then ran that prompt with its normal terminal and
code-execution tools. The maintainers'
[security ledger](https://github.com/agent0ai/agent-zero/blob/v2.12/security-review/LEDGER.md)
rates it High and claims no host escape. Treat that bot's history before v2.12
as possibly injected. Webhook bots with no valid secret now refuse to start.
Installs without Telegram were never exposed.

**The same release closes two more doors.** First, a WhatsApp sender outside
the allowlist could write files outside the media cache, because media was
saved before any sender filter ran and the path came from the sender's own
filename. The ledger's proof of concept overwrote an extension module in a
container that runs as root. The maintainers call that conditional code
execution in the container, not on the host.
[e2ed92b277](https://github.com/agent0ai/agent-zero/commit/e2ed92b277) fixes it.
Second, an IMAP sender check that relied on a regex could be passed with a
multi-mailbox From
([c565f72845](https://github.com/agent0ai/agent-zero/commit/c565f72845)). The
updated docs make the point that matters on every version: a From whitelist is
not sender authentication.

**ACP still ships wide open.** At v2.12 the bundled ACP bridge is
[`always_enabled`, with host read-write and host code execution on by default](https://github.com/agent0ai/agent-zero/blob/v2.12/plugins/_a0_acp/default_config.yaml).
Nothing changed in two releases. Turn it off unless you want an editor-hosted
endpoint that can write to and run code on the host.

**The WebUI reaches host folders.** From v2.12, when the A0 CLI or Launcher is
connected, the WebUI file browser can list, upload, download and edit the host
folders that connector exposes
([4777c14d82](https://github.com/agent0ai/agent-zero/commit/4777c14d82)). You
still set scope in the CLI or Launcher, where host access has lived since v2.5.
The WebUI login now works as a credential for those files, not only the agent.

**Authority is a policy, and the prompt follows it.** Since
[v2.9](https://github.com/agent0ai/agent-zero/releases/tag/v2.9), tool, MCP and
skill access resolve through one project- and profile-aware policy. It is
enforced at execution and inherited by subagents. Assert an actual denial
through a subagent rather than reading the settings screen. v2.12
[stops advertising disabled capabilities](https://github.com/agent0ai/agent-zero/commit/3400beccac)
in the system prompt, so audit the policy, not the prompt. Plugin setup and
cleanup now go through `hooks.py`, but that change touches only guidance files,
so an old `execute.py` plugin may still run.

**Two upgrade surprises in v2.11.** Model transport defaults to Chat
Completions. That is a breaking change for any provider that depended on the
implicit Responses path, so re-test custom and gateway providers. Context
Doctor repairs malformed tool-call JSON before dispatch, which means the call
that ran may differ from what the model emitted. Compare both when you audit.

**What is waiting on `ready`.** Branch-only commits fix nested secret
substitution in parallel tool calls
([aa8e1c042a](https://github.com/agent0ai/agent-zero/commit/aa8e1c042a)) and
stale browser state leaking across chats. On v2.12, do not rely on secret
placeholders nested inside parallel tool-call arguments.

**Why use it anyway.** The workcell is still the most complete on the
watchlist: a persistent Playwright browser, desktop control that targets
elements by structure with a screenshot check after each action, and
host-computer control through a leased, scoped Launcher. Clean releases and a
checked-in ledger with a proof of concept for each fix beat most of the field
on paperwork. They do not replace an advisory feed, and your dependency
tooling will not see any of it.

## What is unresolved

- The direction of the secret-unmasking leak that aa8e1c042a fixes was not
  settled from the diff. A v2.13 tag containing it closes the practical
  question.
- Whether v2.12 still shares one browser sign-in profile across chats. That
  was true at v2.10 and has not been rechecked.
- The permission model on the WebUI host-folder panel comes from commit
  messages. It has not been tested live.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
