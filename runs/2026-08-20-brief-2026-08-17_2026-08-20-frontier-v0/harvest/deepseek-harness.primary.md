---
schema_version: bitter.frontier_harvest.v0
provider: deepseek-harness
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/deepseek-harness.yml
channels_present: [preview-or-beta]
window_volume: 3 material changes, 1 capability-bearing, 2 defect/posture, still prerelease
lane: primary sources, coordinator; public repo is a mirror
---

# Harvest -- deepseek-harness (primary sources)

Punctuation is ASCII. Star count is not adoption. Public repo is a mirror (parent).

## 1. Still no non-prerelease tag; rc.8 is the in-window cut

- **Date:** 2026-08-19
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `gh api repos/deepseek-ai/deepseek-harness/releases` first four: dsh-v0.1.1-rc.2 (2026-08-21, OUT), dsh-v0.1.1-rc.1 (2026-08-21, OUT), dsh-v0.1.0-rc.8 (2026-08-19T15:37:57Z, prerelease=true, SHA 141eb6fef83422698aef7a981029e843e8161534), dsh-v0.1.0-rc.7 (2026-08-17, parent pin 99f6f02). No prerelease=false release exists.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.8
- **Half:** neither | **Confidence:** high

**What changed.** The project is still a developer preview. rc.8 is the only in-window tag an operator can name.

**Operator consequence.** Do not treat rc.8 as a stable. `npx @deepseek-ai/dsh` still resolves a prerelease.

## 2. The approval gate is still a plugin a later plugin can prepend to

- **Date:** 2026-08-19
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** docs/architecture.md at SHA 141eb6fef83422698aef7a981029e843e8161534 (rc.8). Opening paragraphs still read: every part of the product is a plugin, including the model adapter, the tool registry, the session log, and the agent loop; there is no privileged core to patch; layers apply to an empty entry list and a patch can replace a row by id or insert new rows; `dsh --profile web --dump-config` prints rows any of which can be replaced. dsh-base still owns "sandbox and approval policy" as the first layer.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/docs/architecture.md
- **Half:** neither (posture unchanged) | **Confidence:** high

**What changed.** The carry-forward question is answered no: the gate is still composable.

**Operator consequence.** Same as parent. Read architecture.md at a pin before installing a plugin.

## 3. The Web UI fence is still not an auth layer; trustedHosts widened the Host grant

- **Date:** 2026-08-19
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** packages/client/connection/src/api-request-trust.ts at SHA 141eb6fe. Header comment still ends: "Network reachability and authentication stay out of scope: binding policy belongs to the webserver config, and this fence is not an auth layer." The file now documents `trustedHosts` as declared authorities (LAN IP literals, exact host:port). That is a Host-header grant, not a login.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/packages/client/connection/src/api-request-trust.ts
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Carry-forward: nothing authenticates the Web UI beyond binding policy plus this Host fence. trustedHosts lets operators declare extra authorities, which is reachability, not authentication.

**Operator consequence.** Do not expose the port. Loopback or a declared trustedHosts entry is still not a password.

## 4. rc.8 capability: Claude Code and Codex subagents as on-demand Profile Bundles with non-interactive permission modes

- **Date:** 2026-08-19
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** At 141eb6fe, both subagent packages declare `"dsh": { "bundle": { "patch": "./cordis.patch.yml" } }`. Default `@deepseek-ai/dsh` closure still omits both. Install is `dsh plugin --profile <name> add @deepseek-ai/dsh-subagent-codex @deepseek-ai/dsh-subagent-claude-code` then restart. Claude Code wrapper run.ts: DEFAULT_CLAUDE_CODE_PERMISSION_MODE = 'dontAsk'; canUseTool immediately denies leftover prompts unless bypassPermissions. Codex wrapper run.ts: DEFAULT_CODEX_PERMISSION_MODE = 'never'. Do not attribute those modes to the wrapped harnesses; the wrapper sets the SDK/app-server fields.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/packages/subagent/subagent-claude-code/src/run.ts
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** The products existed as packages at rc.7. rc.8 makes them installable on demand as Profile Bundles, not in the default closure, with wrapper-owned non-interactive permission modes.

**Operator consequence.** Try only on the rc.8 pin (`npx @deepseek-ai/dsh@0.1.0-rc.8`; observation latest is 0.1.1-rc.2, OUT). Inspect `--dump-config` for permissionMode before first delegation. Default Claude Code subagent is dontAsk. Default Codex subagent is never. bypassPermissions requires an explicit named row.

## Researcher lane notes

dsh-v0.1.1-rc.1/rc.2 published 2026-08-21 are out of window and still prerelease. npm library latest-staleness from parent not re-counted here; coordinator should re-check before a signal.

## Surfaces checked

- GitHub releases and tags
- architecture.md and api-request-trust.ts at 141eb6fe
- rc.8 release body
