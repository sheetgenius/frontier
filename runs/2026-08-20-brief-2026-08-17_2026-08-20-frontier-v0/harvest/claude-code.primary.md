---
schema_version: bitter.frontier_harvest.v0
provider: claude-code
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/claude-code.yml
channels_present: [tagged-release]
window_volume: 4 in-window npm versions, 2 security-relevant, 1 capability
lane: primary sources, coordinator from official changelog + npm times
---

# Harvest -- claude-code (primary sources)

Punctuation is ASCII. Closed source: channel is npm + official changelog. 2.1.234 is 2026-08-17 overlap (parent). 2.1.239 is 2026-08-21 OUT.

npm times (year confirmed):
- 2.1.234 2026-08-17T18:19:13Z (overlap)
- 2.1.235 2026-08-18T18:24:10Z
- 2.1.236 2026-08-19T18:45:14Z
- 2.1.237 2026-08-19T23:57:54Z
- 2.1.238 2026-08-20T18:01:54Z
- 2.1.239 2026-08-21T17:18:54Z OUT

dist-tags at observation: latest=2.1.239 (OUT), stable=2.1.231, next=2.1.239. At window close, latest in-window is 2.1.238.

Versions between stable 2.1.231 and in-window latest 2.1.238, listed not subtracted: 2.1.232, 2.1.233, 2.1.234, 2.1.235, 2.1.236, 2.1.237, 2.1.238. Seven releases. 2.1.230 still does not appear in the npm time map.

## 1. 2.1.235: Shift+Tab in a permission comment field granted session-wide edit

- **Date:** 2026-08-18
- **Channel:** `tagged-release` (npm 2.1.235)
- **Ancestry evidence:** https://code.claude.com/docs/en/changelog label 2.1.235 description August 18, 2026: "Fixed Shift+Tab inside the permission prompt's comment field approving the edit and granting session-wide edit permission instead of closing the field." npm time 2026-08-18T18:24:10.210Z.
- **Receipt:** https://code.claude.com/docs/en/changelog
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** A keystroke meant to leave a comment field was treated as an approval plus a session-wide edit grant.

**Operator consequence.** Upgrade past 2.1.235. If you used the permission comment field on 2.1.234, assume a session-wide edit grant may have been stored; inspect `/permissions`.

## 2. 2.1.236: macOS sandbox wildcard read-deny now binds; auto mode stops trusting a repo's "clean" git status

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** changelog 2.1.236 August 19, 2026. npm 2026-08-19T18:45:14Z. "Sandbox: on macOS, wildcard read-deny rules (e.g. `**/.env`) now take precedence inside allowed read regions, cover matched directories' contents, and can't be bypassed by renaming the denied file." Auto mode: Monitor allow rules set aside; classifier defaults restored on Bedrock/Vertex/Foundry; git status check can no longer be fooled by `status.showUntrackedFiles=no`.
- **Receipt:** https://code.claude.com/docs/en/changelog
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** A deny of `.env` on macOS actually denies. Auto mode no longer treats a repo that hides untracked files as clean.

**Operator consequence.** Upgrade to 2.1.236+ if you rely on `**/.env` denies on macOS or on auto mode. This is the cut that makes those rules bind.

## 3. 2.1.238: MCP headersHelper is trust-gated and no longer inherits credential env from project files

- **Date:** 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** changelog 2.1.238 August 20, 2026. npm 2026-08-20T18:01:54Z. "MCP `headersHelper` in a project `.mcp.json`, and inline MCP servers in project or `--add-dir` agent files, now require that folder's trust dialog to have been accepted (also under `claude -p`). MCP `headersHelper` from a project `.mcp.json`, plugin, or agent file runs without inherited credential env vars; user, managed and claude.ai-scope helpers now run from the Claude config dir." Also marketplace headersHelper that mints HTTP headers.
- **Receipt:** https://code.claude.com/docs/en/changelog
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** A project file can no longer mint MCP headers with your credential environment until you trust the folder. That is a capability (headersHelper) with a gate.

**Operator consequence.** Upgrade to 2.1.238. If you used project `.mcp.json` headersHelper before this, those helpers now need trust and will not see inherited creds.

## 4. Official /design skill announced on overlap day; weekly limit bump extended

- **Date:** 2026-08-17 and 2026-08-18
- **Channel:** `docs-only` (X official posts; changelog may lag)
- **Ancestry evidence:** https://x.com/ClaudeDevs/status/2089471692762673408 2026-08-17 /design skill research preview. https://x.com/ClaudeDevs/status/2089798442306711646 2026-08-18 weekly limits +50% through August 31. Discovery only until capture. Changelog 2.1.234-238 does not headline /design in the coordinator read of the fetched page.
- **Receipt:** https://x.com/ClaudeDevs/status/2089471692762673408
- **Half:** capability | **Confidence:** medium (social official; needs changelog/docs pin before a signal)

**What changed.** Anthropic announced a design skill. Limits stay raised.

**Operator consequence.** Try `/design` if you are on latest. Do not treat the limit bump as permanent; the post says capacity may be tight.

## Researcher lane notes

stable dist-tag is 2.1.231 (published 2026-08-13, parent window). Conservative channel still sits seven in-window-countable releases behind 2.1.238. 2.1.237 changelog date says August 20; npm time is 2026-08-19T23:57:54Z. Prefer npm for channel date.

## Surfaces checked

- https://code.claude.com/docs/en/changelog (fetched 2026-08-21, versions 2.1.239 back through 2.1.223)
- npm view @anthropic-ai/claude-code dist-tags and time
