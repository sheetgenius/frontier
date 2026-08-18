---
schema_version: bitter.frontier_harvest.v0
provider: codex
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/codex.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 8 material changes, 4 capability-bearing, 6 defect-bearing, 6 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- codex (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. 0.146.1 hotfix backports safer permission defaults for cyber-specialty models

- **Date:** 2026-08-05
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/openai/codex/compare/rust-v0.146.0...rust-v0.146.1 returns exactly 2 commits, the first being 7558bede75dd7f9ed96c4ff00ccc6b28ded01159 '[0.146] Backport safer cyber-model auto-review defaults (#37057)'. rust-v0.146.1 is a non-prerelease GitHub release (prerelease=false, published_at 2026-08-05T15:55:06Z) and npm shows 0.146.1 published 2026-08-05T16:00:31Z.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.146.1
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** A single-purpose stable hotfix on the 0.146 line, cherry-picking #37055. The model catalog now carries an optional `modelSpecialty` field through `model/list`; when a newly selected model carries the `cyber` specialty, an active TUI thread is defaulted to workspace-write permissions with on-request approval, using automatic review when available and otherwise leaving the human as reviewer. The full-access warning for cyber models is strengthened and a notice is shown when auto review is applied. Explicitly configured permission requirements are respected, and explicitly selected permissions survive reasoning-setting changes.

**Operator consequence.** Upgrade if you run cyber-capable models: this is the only stable release carrying the fix on the 0.146 line, and it changes the default permission posture on model switch rather than requiring config. If you pin permissions explicitly in config, verify your requirement is still honoured after the switch, because the defaulting logic now reaches into an active thread. Superseded two days later by 0.147.0, so 0.146.1 is only relevant to operators who cannot move off 0.146.

## 2. 0.147.0 ships portable Agent Plugins and simultaneously fences their runtime

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/openai/codex/compare/rust-v0.146.0...rust-v0.147.0 --paginate returns 344 commits including 2b5bdcf67547860f2e5c5a605009a70026796b2b 'Support portable Agent Plugins throughout installation (#36544)' and 56b82e676cc56ccd550362fc5055c76ba3445849 'Enforce Agent Plugin runtime boundaries (#37027)'. rust-v0.147.0 is prerelease=false, published_at 2026-08-07T01:41:49Z; npm dist-tag latest=0.147.0.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.147.0
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Portable Agent Plugins can now be installed and searched across local, personal, workspace, and remote catalogs. In the same tag, #37027 bounds what a plugin can reach: Agent Plugin manifests are tracked through plugin, skill, and MCP loading; only direct-child skills are discovered; app and hook capabilities are excluded; MCP data is isolated; MCP configuration files that are non-regular or resolve outside the plugin root are rejected; model-visible skill instructions, plugin instructions, MCP descriptions, schemas, individual tools, and the aggregate plugin MCP tool set are all size-bounded; and MCP/OAuth redirects are stopped when an Agent Plugin sends configured or authorization headers. #36967 skips symlinks during plugin install and #36037 denies network access outright when an allow-amendment fails.

**Operator consequence.** Try it, but audit before you distribute. A remote plugin catalog is a new supply-chain surface pointed at your agent's tool namespace; the boundary work in the same tag is a signal that OpenAI shipped the distribution mechanism and the containment together rather than after an incident. Operators running workspace or remote catalogs should confirm which scope a plugin came from and that legacy (non-Agent-Plugin) plugins in their fleet are not silently exempt from the new fencing, because the manifest tracking explicitly preserves legacy behaviour for legacy formats.

## 3. `--approve-for-me` puts a model, not a human, in the approval seat

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds exactly one match: b7a61066081644e0d8b2c0b4dbfd7408ac1514df 'Add an `--approve-for-me` CLI flag (#36373)'. PR #36373 merged 2026-07-31T18:28:24Z; first non-prerelease tag containing it is rust-v0.147.0.
- **Receipt:** https://github.com/openai/codex/pull/36373
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** A new `--approve-for-me` flag on the interactive and `exec` commands routes approval requests through automatic review instead of prompting the operator. It sets `approval_policy="on-request"` with the `workspace-write` sandbox, and propagates across root, `exec`, `resume`, and `fork` argument handling while preserving later subcommand permission overrides.

**Operator consequence.** Watch, and decide deliberately before enabling it in CI. This is the flag that converts Codex's approval prompt from a human checkpoint into a model checkpoint on a single command-line switch, and it also silently pins the sandbox to workspace-write. If your governance story rests on 'a person approved every escalation', add `--approve-for-me` to whatever you lint agent invocations with. Note the ordering trap: subcommand permission overrides still win, so the effective policy is not always what the flag implies.

## 4. `codex exec --full-auto` removed outright in 0.147.0

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds 1c5f336c4057f1724fc0dc1cb27f971a9fc887bc 'Remove legacy `--full-auto` handling from `codex exec` (#36054)'. PR #36054 merged 2026-07-30T01:22:46Z; first non-prerelease tag containing it is rust-v0.147.0. The 0.147.0 release body lists it under Chores.
- **Receipt:** https://github.com/openai/codex/pull/36054
- **Half:** defect | **Confidence:** high

**What changed.** The deprecated `--full-auto` flag is gone from `codex exec`. The release notes direct operators to `--sandbox workspace-write` instead.

**Operator consequence.** Adapt now. Any CI job, Makefile, cron, or wrapper script still passing `codex exec --full-auto` breaks on upgrade to 0.147.0 or later. This is filed under Chores in the release notes rather than as a breaking change, so it will not announce itself to anyone reading the headline sections. Grep your automation for the string before you bump.

## 5. Codex now demands an explicit trust decision for unfamiliar project directories

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds 17801b42062f63cf492f3db5df039b6b90779872 'Prompt before trusting local project directories (#36960)'. PR #36960 merged 2026-08-04T19:49:38Z; first non-prerelease tag containing it is rust-v0.147.0.
- **Receipt:** https://github.com/openai/codex/pull/36960
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** TUI onboarding gains a directory-trust step with trust-and-continue or quit. The PR states the reason plainly: trusting a directory enables project-local config, hooks, and exec policies, which increases exposure to prompt injection. Trust is applied at the Git repository root when the session starts in a subdirectory, the decision is persisted, and config is reloaded before continuing. If trust cannot be persisted the prompt stays up and the config error is shown. Remote workspaces and projects with an explicit trust level skip the prompt. #37132 separately enforces managed authentication requirements locally before credentials are used.

**Operator consequence.** Expect a new interactive gate and plan for it in headless contexts. Cloning an untrusted repo and running Codex in it no longer silently activates that repo's hooks and exec policies. Scripted or containerised first-runs that assumed a prompt-free start will now block, so pre-seed an explicit trust level for directories you intend to automate. The security framing is worth reading directly: OpenAI is treating repo-local Codex config as an injection vector, not a convenience.

## 6. Bearer tokens and secrets redacted from displayed commands and replayed history

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds fcf636a41dbcd8372ad64301b7092621a155747b 'Redact secrets from app-server command execution items (#36893)' and a match for (#36908) 'Improve bearer token secret redaction'. Both merged 2026-08-04; first non-prerelease tag containing them is rust-v0.147.0.
- **Receipt:** https://github.com/openai/codex/pull/36908
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** #36893 redacts secrets from app-server command-execution items. #36908 widens bearer-token redaction to credentials containing URL-safe and base64-style characters, optional padding, and horizontal whitespace after the scheme, and redacts the bearer credential before the narrower OpenAI and AWS key patterns run so the whole credential is replaced rather than partially. The PR states the defect explicitly: the previous pattern could leave part of the credential visible after redaction.

**Operator consequence.** Re-audit any transcripts, rollout files, or app-server logs captured on 0.146.x or earlier. This is a disclosure defect, not a hardening nicety: partially-redacted bearer tokens were being rendered into displayed commands and replayed conversation history, which means they are sitting in whatever you archived. Upgrade to 0.147.0 and treat previously exported session history as potentially credential-bearing.

## 7. Opt-in MCP 2026-07-28 protocol support lands in stable

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds be2e4afcd7392339d6adbaf0d31b26316bcaa2ab 'Add MCP 2026-07-28 discovery support (#35724)' and a match for (#35725) 'Complete MCP 2026 client support'. Also in that range: (#35742) non-blocking optional MCP startup, (#36001) rmcp upgraded to 3.0.0. First non-prerelease tag containing them is rust-v0.147.0.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.147.0
- **Half:** capability | **Confidence:** high

**What changed.** Codex adds opt-in support for the MCP 2026-07-28 protocol revision, including paginated discovery (`server/discover`), multi-round requests, and non-blocking server startup so unrelated tools can run while MCP servers come up. The MCP SDK (rmcp) moves to 3.0.0. Related work in the same tag routes MCP OAuth through configured HTTP clients (#35806, #35814) and restricts hosted MCP credentials to local environments (#36306).

**Operator consequence.** Test against your MCP servers before relying on it, and note it is opt-in, so nothing changes until you turn it on. The interesting operator consequence is the startup change rather than the protocol version: optional MCP servers no longer block a turn, which means a broken or slow server degrades quietly instead of failing loudly. If you were using MCP startup failure as your signal that a tool is unavailable, that signal is now weaker.

## 8. Network-authority hardening continued after 0.146.0 but stayed alpha-only all window

- **Date:** 2026-08-06
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** grep for (#37211) over the rust-v0.146.0...rust-v0.147.0 compare commit list returns 0; the same grep over the rust-v0.147.0...rust-v0.148.0-alpha.21 list returns 7a0e974e08c798d1e8d59d407aeb6e24db1313af 'Harden network proxy MITM authorization (#37211)' dated 2026-08-06T03:57:10Z. Per-tag compares show it first reachable in rust-v0.148.0-alpha.1 (prerelease). Later alpha-only companions: eea28321ad67a109550f9285a3597c76a2635be1 'Harden network proxy credential brokerage (#38049)' (2026-08-11) and 357696c5e7127525a9259d3dcfa0574516b1fe84 'Route network access through the shared approval pipeline (#38299)' (2026-08-13). No non-prerelease tag after rust-v0.147.0 contains any of them.
- **Receipt:** https://github.com/openai/codex/commit/7a0e974e08c798d1e8d59d407aeb6e24db1313af
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** #37211 states the problem directly: MITM hooks authorize requests before the upstream server parses them, so a path that can be decoded or normalized into a different resource must not match an allowlist entry. It rejects ambiguous hook paths (traversal segments, backslashes, malformed percent encodings, encoded separators and percent signs) and blocks plain-HTTP proxy requests for hosts whose policy always requires MITM, recording the decision as `mitm_required`. Tests cover encoded traversal through repository allowlists and absolute-form HTTPS sent to the HTTP proxy. #38049 hardens credential brokerage in the same proxy, and #38299 folds network access into the shared approval pipeline. A companion cyber-model control, #37190, interrupts a cyber-specialty model's turn after a single Guardian denial rather than letting it retry to the normal threshold.

**Operator consequence.** Watch, and do not assume your network allowlist is path-safe on 0.147.0. This reads as an allowlist-bypass class fix -- parser-differential path confusion against the proxy's authorization hook, plus a plain-HTTP path around mandatory inspection -- and it is not in any stable release as of 2026-08-17. Operators who rely on Codex's network policy as a real boundary rather than a speed bump should treat repository allowlist entries with encodable separators as untrusted until 0.148.0 cuts, and should not read the prior window's 'network-authority wave reached stable' as meaning the work is finished.

## Researcher lane notes

Read sources/codex.yml before touching the open web, as required. Read-only throughout: no files written to the repo, no git mutations, no site build. All work via gh api, npm view, curl -I, and WebFetch.

CHANNEL METHOD. Every channel call was made by ancestry, never by date. The repo squash-merges with the PR number in the subject line and rewrites SHAs from an internal monorepo (commits carry GitOrigin-RevId trailers), so PR merge_commit_sha values do NOT appear in the public history -- I verified this and abandoned that approach. The reliable test is to enumerate `gh api repos/openai/codex/compare/<tag-A>...<tag-B> --paginate` and grep the commit subjects for `(#NNNNN)`. I built two commit inventories this way: rust-v0.146.0...rust-v0.147.0 (344 commits) and rust-v0.147.0...rust-v0.148.0-alpha.21 (422 commits). A PR present in the first is tagged-release; present only in the second is preview-or-beta, because no non-prerelease tag exists after rust-v0.147.0. Prerelease status was read from the `prerelease` field on each GitHub release, not inferred from the version string.

THE SHAPE OF THIS WINDOW. w1 carried everything: two stable tags on 2026-08-05 and 2026-08-07. w2 carried nothing installable -- 324 commits, twenty-one alpha builds, zero stable releases, npm `latest` frozen at 0.147.0 since 2026-08-07. This is a clean instance of the rule this publication is built on, and it is worth saying plainly in the digest: a reader following openai/codex commits during 10 -- 17 August saw Guardian V2, proxy MITM hardening, and three feature removals land, none of which any operator could install.

GAPS AND THINGS I COULD NOT RESOLVE, recorded rather than guessed:
1. The documentation migration date is unresolved. developers.openai.com/codex and /codex/changelog both return 308 to learn.chatgpt.com, verified by curl, but I found no primary source dating the move. That change is reported with confidence: low and a date string that says "unresolved" rather than a fabricated one. It also means sources/codex.yml has two stale primary_surface URLs -- a contract-maintenance item for the coordinator, not something I can fix from a read-only lane.
2. Alpha release bodies are empty. Every 0.148.0-alpha GitHub release body is literally "Release 0.148.0-alpha.N" -- there are no alpha release notes. Everything I report about the alpha line comes from commit subjects and PR bodies, which is weaker evidence than a release note and is why the config-lockfile removal is marked medium confidence. Any digest claim about what 0.148.0 will contain should be hedged accordingly: these are merged commits on an unreleased line, and OpenAI has revert latitude until the tag cuts.
3. A prior-window date to keep straight. The task brief described the network-authority wave as "reaching stable 0.146.0 on 2026-08-03". 0.146.0 was actually published 2026-07-29 (GitHub 01:42:51Z, npm 01:45:57Z); 2026-08-03 was the previous window's closing boundary. The prior finding file states 2026-07-29 correctly in its body, so this is a brief-summary artifact, not an error in the published record. No correction needed, but do not let 2026-08-03 propagate into new prose as a release date.
4. Guardian V2 internals are visible only through commit subjects and test descriptions. I can evidence that it classifies tool actions, records risk scores on threads, and can compel automatic review for high-risk actions (#38569); I cannot evidence what model performs the sampling, what the risk thresholds are, or whether an operator will be able to pin or inspect them. Do not let the digest imply otherwise.
5. Ordering caution on `--approve-for-me`: PR #36373 states that later subcommand permission overrides are preserved, so the flag does not unconditionally determine the effective policy. If the digest describes it, describe it as routing approvals through automatic review and pinning workspace-write by default, not as a guaranteed final say.

BOTH HALVES PRESENT. Capabilities: portable Agent Plugins with catalog search, `--approve-for-me`, opt-in MCP 2026-07-28, cross-harness `/import`, and (alpha) Guardian V2 and a durable user-message queue. Defects: bearer-token under-redaction, cyber-model permission defaults, proxy MITM path confusion, and three removals. Marked in capability_or_defect per change; five are flagged security_relevant, none required a CVE.

## Surfaces checked

- GitHub releases: gh api repos/openai/codex/releases --paginate (full list, 2026-07-21 through 2026-08-17)
- GitHub tags/ancestry: gh api repos/openai/codex/compare/rust-v0.146.0...rust-v0.147.0 (344 commits), .../compare/rust-v0.146.0...rust-v0.146.1 (2 commits), .../compare/rust-v0.147.0...rust-v0.148.0-alpha.21 (422 commits), plus per-alpha compares for alpha.1/5/6
- GitHub release bodies for rust-v0.146.1, rust-v0.147.0, rust-v0.148.0-alpha.1, rust-v0.148.0-alpha.21
- GitHub PRs #35724, #35725, #36037, #36054, #36373, #36544, #36893, #36908, #36960, #36967, #37027, #37055, #37057, #37132
- GitHub security advisories: gh api repos/openai/codex/security-advisories (only GHSA-w5fx-fh39-j5rw / CVE-2025-59532 from 2025; outside window)
- npm registry: npm view @openai/codex dist-tags time (latest=0.147.0, alpha=0.148.0-alpha.21)
- Official changelog: https://developers.openai.com/codex/changelog -> 308 -> https://learn.chatgpt.com/docs/changelog
- Official docs: https://developers.openai.com/codex -> 308 -> https://learn.chatgpt.com/docs
