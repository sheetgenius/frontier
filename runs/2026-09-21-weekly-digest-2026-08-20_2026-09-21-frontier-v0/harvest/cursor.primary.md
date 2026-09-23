---
schema_version: bitter.frontier_harvest.v0
provider: cursor
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/cursor.yml
channels_present: [docs-only, preview-or-beta, tagged-release]
window_volume: 3 dated main-changelog entries (08-27, 09-02, 09-10), 1 CLI-changelog entry (08-26), 1 install-channel CLI build (2026.09.18-9a7762b), 0 in-window advisories, 8 material items
lane: primary sources, researcher from cursor.com/changelog + docs/cli/changelog + docs .md endpoints + install script + Wayback captures
---

# Harvest -- cursor (primary sources)

Punctuation is ASCII. Closed source. First full cycle; no parent harvest. Baseline is the 2026-08-21 intake profile (top changelog entry 2026-08-19, "Cloud Agents and Cursor Harness Improvements"; that entry and 2026-08-17 Origin are pre-window and not re-reported).

Channel vocabulary for this source. Cursor's main changelog (https://cursor.com/changelog) is dated and carries no version string, so an entry is a vendor note with no pinable artifact: labeled `docs-only` unless the entry says beta (`preview-or-beta`). The one versioned artifact is the CLI build the install script resolves; it is labeled `tagged-release` in the sense the contract allows (a named, dated, downloadable build), not a git tag. Receipts are the live URL plus a Wayback capture where one exists. Docs pages carry no dates; a doc change is dated only where two Wayback captures bracket it.

Identity check: github.com/cursor/cursor was not harvested as source (tracker only). Its security-advisory list was read as the vendor advisory channel: newest advisory is GHSA-p9g2-cr55-cw9c, 2026-07-14; none in window.

A new identity object appeared in the window: Grok Bot (item 7). It is documented under cursor.com/docs and sold with Cursor plans, but it is not the editor, the `agent` CLI, cloud agents, or Origin.

## 1. CLI: install channel serves an unnoted build; no digest, and the CLI changelog stops at 08-26

- **Date:** build 2026-09-18 (tarball Last-Modified 2026-09-18T22:42:21Z); last CLI changelog entry 2026-08-26
- **Channel:** `tagged-release` (install-script build) vs `docs-only` (CLI changelog)
- **Ancestry evidence:** `curl https://cursor.com/install` (2026-09-23) resolves `2026.09.18-9a7762b` (script lines 78, 85, 110, 130-131) and downloads `https://downloads.cursor.com/lab/2026.09.18-9a7762b/${OS}/${ARCH}/agent-cli-package.tar.gz`. `curl -I` on darwin/arm64: 200, content-length 176832653, last-modified Fri, 18 Sep 2026 22:42:21 GMT, etag "10e78aaf15f22747dc7feab07431d0c3-22" (S3 multipart etag, not a content hash). `grep -ciE 'sha256|checksum|verify'` on the script = 0. https://cursor.com/docs/cli/changelog.md top section is "August 26, 2026 release"; next is August 11.
- **Receipt:** https://cursor.com/install ; https://cursor.com/docs/cli/changelog ; no Wayback capture of the install script in window
- **Half:** defect | **Confidence:** high

**What changed.** The CLI changelog records one in-window release (08-26: `agent persist` sessions that survive disconnect, `/detach`, `agent persist attach|list|stop`; self-hosted workers share the live desktop with `--computer-use --share-desktop`; `agent worker controller` wakes hibernated workers via a `--spawn` hook). The build the install script hands out at window close is dated 2026-09-18, 23 days newer than any CLI note. The script pipes `curl | tar` with no checksum, then symlinks `~/.local/bin/agent` and `~/.local/bin/cursor-agent` to the versioned directory.

**Operator consequence.** Answers the contract's open question: there is a pinable version string (`2026.09.18-9a7762b`, also the directory name under `~/.local/share/cursor-agent/versions/`) and a stable download URL per version, but no vendor digest. To pin, download the versioned URL yourself and record your own sha256. Do not assume the CLI changelog describes what `curl | bash` installed today; `agent --version` plus the resolved URL is the only honest ship record.

## 2. Projects: a coordinator that spawns agents on its own, beta, cloud-only

- **Date:** 2026-09-10
- **Channel:** `preview-or-beta` ("available in beta and rolling out to all users")
- **Ancestry evidence:** changelog entry dated Sep 10, 2026 at /changelog/projects; Wayback 20260913123011. Docs page https://cursor.com/docs/agent/projects first captured 20260918074921, changed again by 20260922133501 (digests differ; the second capture is OUT of window).
- **Receipt:** https://web.archive.org/web/20260913123011/https://cursor.com/changelog/projects ; https://cursor.com/docs/agent/projects.md
- **Half:** capability | **Confidence:** high on the vendor text; not probed

**What changed.** A Project runs on its own cloud computer, keeps a shared set of context files that sync to every cloud and local machine its agents use, and has a coordinator that "creates and manages agents on your behalf, running as many in parallel as the work needs" (the changelog says "thousands of subagents"). Subscriptions let the coordinator act on Slack messages, PR activity, CI runs, or a schedule "without waiting for your prompt." When something needs testing locally, the coordinator starts a local agent on your machine. Docs: not available on Enterprise plans or with Privacy Mode (Legacy), because Projects store code in the cloud.

**Operator consequence.** Surface is cloud agents plus the editor's Agents Window, not the CLI. The authority shift is that a model, not the human, decides how many agents to start and when; the docs name no spend cap, approval gate, or concurrency limit for the coordinator (searched projects.md for approv|permission|limit|spend|usage: only the Enterprise exclusion). Watch: whether a usage ceiling or per-Project approval control appears. Before connecting a Slack channel as a subscription, treat every message in it as a prompt that can start work, including prompt injection from anyone who can post there. The local-agent hop means a cloud coordinator can cause execution on your laptop.

## 3. Self-hosted machines: the headline says execution stays in your network; the docs list what leaves

- **Date:** 2026-09-02
- **Channel:** `docs-only`
- **Ancestry evidence:** changelog entry "Self-hosted machines" dated Sep 2, 2026; Wayback 20260903052248. Docs https://cursor.com/docs/cloud-agent/self-hosted changed across 20260818213805, 20260902233330, 20260903052227, 20260904164551, 20260919095630 (distinct digests; not diffed line by line).
- **Receipt:** https://web.archive.org/web/20260903052248/https://cursor.com/changelog/self-hosted-machines ; https://cursor.com/docs/cloud-agent/self-hosted.md (section "What leaves your network")
- **Half:** both | **Confidence:** high on both texts

**What changed.** Changelog: cloud agents can run on "My Machines" (one laptop or VM) or team pools (named, auto-scaling, hibernating queues of workers), including on Lambda, Coder, Cloudflare, Daytona, Modal, Namespace, Vercel, and E2B; self-hosted workers get computer use on Linux and Mac. The marketing sentence is that tool execution stays "entirely in your own network." The docs are narrower: the checkout, build cache, and machine-local credentials stay local, but during a run the worker sends Cursor file contents, terminal output, diffs, screenshots, local MCP results, and routing metadata, and uploads artifacts to Cursor-managed S3 (`cloud-agent-artifacts.s3.us-east-1.amazonaws.com`, blockable). Workers start with `agent worker start` from the CLI and hold an outbound HTTPS connection; no inbound ports.

**Operator consequence.** Test before adopting for a data-residency reason: the agent loop and model calls remain in Cursor's cloud, and anything the agent reads or prints leaves. Block the artifact bucket if screenshots or logs are sensitive. The CLI is the worker runtime here, so a CLI upgrade is also a worker upgrade.

## 4. Hooks: beforeMCPExecution gains server identity, and the doc tells allowlist hooks to deny on missing names

- **Date:** between 2026-08-20 and 2026-09-02 (bracketed by captures)
- **Channel:** `docs-only`
- **Ancestry evidence:** Wayback https://cursor.com/docs/hooks captures 20260820212459 and 20260902233313 (distinct digests). Diff of flattened text: MCP hook input adds `mcp_server_name` (the server key from mcp.json) and `mcp_server_url` (HTTP/SSE only); `command` is now described as the stdio launch string that "can differ between installs"; new text "A hook that allows anything it does not recognize should treat a missing or unexpected `mcp_server_name` as a deny." Also added: self-hosted workers (Pools and My Machines) run command-based project hooks, and on Enterprise also team and enterprise-managed hooks; `sessionStart`/`sessionEnd` fire on worker claim and release.
- **Receipt:** https://web.archive.org/web/20260820212459/https://cursor.com/docs/hooks vs https://web.archive.org/web/20260902233313/https://cursor.com/docs/hooks
- **Half:** both | **Confidence:** high that the doc changed; which binary first emits `mcp_server_name` is not stated

**What changed.** Before, a hook could only tell which MCP server a call targeted by matching a URL or a free-form command string. Now there is a stable server key.

**Operator consequence.** Re-audit any MCP allowlist hook: if it matches on `command`, it can be evaded by a server launched with a different path or via `${CURSOR_PLUGIN_ROOT}` expansion. Switch to `mcp_server_name` + `tool_name`, and fail closed when the field is absent (older client builds). Enterprise-managed hooks now reach self-hosted workers, so a managed hook is a control on those machines too.

## 5. Cloud agents without an SCM: Start from scratch writes to Origin by default

- **Date:** 2026-08-27
- **Channel:** `docs-only`
- **Ancestry evidence:** changelog entry "Start from scratch, without a repo" dated Aug 27, 2026; Wayback 20260901121134.
- **Receipt:** https://web.archive.org/web/20260901121134/https://cursor.com/changelog/start-from-scratch
- **Half:** capability | **Confidence:** high on the vendor text

**What changed.** Cloud agents no longer require GitHub or another SCM. Choosing "Start from scratch" makes Cursor create an Origin repo "in the background"; "Create repo" later names it private or internal. Cursor port-forwards the cloud agent's live environment to the browser for preview; a connected Vercel account can publish a live URL.

**Operator consequence.** Surface is cloud agents plus Origin. This is the first entry where agent output lands on Cursor-hosted git by default rather than on the operator's forge. Origin is a storage location, not a permission model (contract). If your org requires code to live on your own SCM, Origin is opt-out for Enterprise admins per the 08-17 launch, so confirm your org's setting; for everyone else, work started this way lives on Cursor's host until you move it.

## 6. No in-window security advisory, despite a public sandbox-escape claim

- **Date:** window
- **Channel:** `docs-only` (negative result)
- **Ancestry evidence:** `gh api repos/cursor/cursor/security-advisories` sorted by published: newest GHSA-p9g2-cr55-cw9c and GHSA-v4xv-rqh3-w9mc (2026-07-14), GHSA-whx2-4gvm-m3r3 (2026-07-06). Nothing published 2026-08-20..2026-09-21. The CLI changelog 08-26 entry names no sandbox fix.
- **Receipt:** https://github.com/cursor/cursor/security/advisories
- **Half:** defect | **Confidence:** high on the absence

**What changed.** Nothing on the advisory channel. Lane C holds a 2026-09-15 researcher post (https://x.com/matviy/status/2099872739758874805) claiming a Cursor CLI macOS sandbox escape via a git `core.fsmonitor` variant after an earlier fix, with vendor acknowledgement. No primary surface confirms or dates a fix.

**Operator consequence.** Watch: an advisory on cursor/cursor or a CLI changelog line naming git or fsmonitor settles it. Until then, treat the CLI sandbox on macOS as not covering git invoked by the harness, and do not run the CLI against untrusted repos on the strength of the sandbox alone. This is the same bug class as Copilot CLI's GHSA-9ccr-r5hg-74gf (patched there in 1.0.43).

## 7. Grok Bot: a separate teammate product now documented inside Cursor's docs and bundled in Cursor plans

- **Date:** docs nav entry between 2026-08-20 and 2026-09-02; docs page first captured 2026-09-03; terms page first captured 2026-09-03. x.ai/bot product page predates the window (captured 2026-08-11).
- **Channel:** `docs-only`
- **Ancestry evidence:** the 20260820212459 hooks capture has no Grok Bot section in the docs sidebar; the 20260902233313 capture adds "Grok Bot / Overview / Get Started / Use Cases / Work with Grok Bot / Settings / Teams and Enterprise". CDX: cursor.com/docs/grok-bot first 20260903052235; cursor.com/en-US/terms/grok-bot first 20260903193829; cursor.com/download/bot first 20260904184404. Cursor's site nav links "Grok Bot" to https://x.ai/bot.
- **Receipt:** https://cursor.com/docs/grok-bot.md ; https://cursor.com/docs/grok-bot/security.md ; https://cursor.com/help/grok-bot/plans.md ; https://cursor.com/en-US/terms/grok-bot
- **Half:** both | **Confidence:** high on identity; plan-inclusion date not pinned

**What changed.** Per Cursor's docs, Grok Bot is a desktop and iOS app for named "Bots" that work on a persistent cloud computer (browser, filesystem, terminal). All of a user's Bots share one computer and its files, browser sessions, and logins; the docs say to treat anything on it as available to every Bot, and the terms say Bots "must not be treated as separate security boundaries" and that deleting a Bot may not delete shared files, sessions, credentials, or routines. Access is included with every paid individual Cursor plan and Cursor Teams, or via a linked SuperGrok / X Premium+ account, with weekly usage. Controls: Enterprise-only network allowlist (no policy = allow all), Enterprise-only enforced Auto-review (a review model over shell, plugin, computer-use, and delegation actions), Enterprise-only audit logs and Action Recording (off by default). Bots act as the signed-in member; connector OAuth tokens stay on Cursor's backend.

**Operator consequence.** Identity: Grok Bot is not the `agent` CLI, not cloud agents, not the editor, and not xAI's Grok Build CLI. A Latent Space review of "Grok Bot" is about this product. For Cursor admins, the change is that a paid Cursor seat now carries a general-purpose computer-use agent with default allow-all egress and no Auto-review enforcement unless you are on Enterprise. Decide whether to allow it before members discover it.

## 8. Economics: Cursor Models pool and bundling (undated doc state)

- **Date:** not datable from primary surfaces
- **Channel:** `docs-only`
- **Ancestry evidence:** https://cursor.com/docs/models-and-pricing.md at 2026-09-23: Pro, Pro Plus, and Ultra carry two usage pools; the "Cursor Models" pool (Grok 4.7, Grok 4.6, Grok 4.5, Composer 2.5) has "significantly more included usage." Grok 4.6 listed at $2 input / $6 output per M tokens, "Jointly trained by Cursor and SpaceXAI." OpenAI models remain listed (many "Hidden by default"). The Grok 4.6 launch post (2026-08-12) and "joining-spacex" post (2026-08-14) are pre-window.
- **Receipt:** https://cursor.com/docs/models-and-pricing.md
- **Half:** both | **Confidence:** medium (no date for when Grok 4.7 entered the pool)

**What changed.** No dated in-window pricing entry exists on the changelog. Lane C holds claims that OpenAI announced ending Cursor's model access with a proposed 12 November cutoff (https://x.com/mntruell/status/2093532254006063557, 2026-08-29) and that a SuperGrok Heavy bundle allowance was cut. Neither appears on a Cursor primary surface I could read; the models page still lists OpenAI models with no end date.

**Operator consequence.** Watch: a models-page end date or changelog line for OpenAI models settles the cutoff. If your Cursor workflows depend on GPT-family models, inventory them now; the only primary signal is that the vendor's included-usage pool favors its own and SpaceXAI models.

## Release ledger

| Item | Surface | Date | Version / pin | Beta flag |
|---|---|---|---|---|
| CLI changelog "August 26, 2026 release" | `agent` CLI | 2026-08-26 | none stated | no |
| Changelog "Start from scratch, without a repo" | cloud agents + Origin | 2026-08-27 | none | no |
| Changelog "Self-hosted machines" | cloud agents + CLI worker | 2026-09-02 | none | no |
| Changelog "Cursor Projects" | cloud agents + editor | 2026-09-10 | none | beta |
| Install-script build | `agent` CLI | 2026-09-18 (tarball Last-Modified) | 2026.09.18-9a7762b | n/a |

No main-changelog entry between 2026-09-11 and 2026-09-21 (page 1 of /changelog at 2026-09-23 tops at Sep 10). Only one CLI build is observable; earlier in-window builds cannot be enumerated because the script is not archived and there is no index of `downloads.cursor.com/lab/`.

## Researcher lane notes

Contract questions settled this window. (1) Which surface moved: all three main-changelog entries are cloud-agent or Origin surfaces; the CLI moved on its own changelog (08-26) and as the worker runtime for self-hosted machines. None of the 08-19 `/goal` or subagent-VM sentences was restated for the CLI. (2) Pinable CLI version: yes as a string and URL, no as a vendor digest (item 1). (3) What `/sandbox` isolates: docs `reference/sandbox.md` (undated) say network is default-deny with private ranges and 169.254.169.254 blocked; `disableTmpWrite` defaults false. No in-window change could be dated. The sudo-password question is not addressed by any in-window surface.

Omnigent: no in-window Cursor surface mentions it; nothing to attribute.

## Surfaces checked

- https://cursor.com/changelog (page 1, fetched 2026-09-23; entries 09-10, 09-02, 08-27, 08-19, 08-17) and entry pages via Wayback
- https://cursor.com/docs/cli/changelog.md (sections Aug 26, Aug 11, Jul 20 and older)
- https://cursor.com/install (resolved 2026.09.18-9a7762b; no checksum step) and HEAD on the darwin/arm64 tarball
- cursor.com/sitemap.xml and cursor.com/docs/sitemap.xml (to find cli/changelog, grok-bot, sdk/changelog)
- docs .md: agent/projects, cloud-agent/self-hosted, reference/sandbox, cli/reference/permissions, models-and-pricing, grok-bot, grok-bot/security, grok-bot/computers, help/grok-bot/plans; terms/grok-bot
- Wayback CDX for docs/hooks, docs/cloud-agent/self-hosted, docs/agent/projects, docs/cli/acp, docs/grok-bot, terms/grok-bot, download/bot, x.ai/bot, changelog entry URLs; diffed docs/hooks 20260820212459 vs 20260902233313
- cursor.com/blog post dates (all recent posts 2026-07-20..2026-08-14, pre-window)
- `gh api repos/cursor/cursor/security-advisories` (advisory channel only; tree not read)

## Not reached

- A local `agent --version` or any sandbox or hook probe (did not install).
- Earlier in-window CLI builds: no archive of the install script, no bucket index.
- Line-level diff of docs/cloud-agent/self-hosted and docs/reference/sandbox across the window (the 08-03 sandbox capture did not decode to comparable text).
- x.ai/bot live page (Cloudflare 403 to curl); used Wayback 20260812102557 only to confirm the product pre-dates the window.
- Primary confirmation of the OpenAI model cutoff or the SuperGrok bundle change.
