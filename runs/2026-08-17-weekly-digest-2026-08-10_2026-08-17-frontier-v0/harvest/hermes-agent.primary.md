---
schema_version: bitter.frontier_harvest.v0
provider: hermes-agent
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/hermes-agent.yml
channels_present: [docs-only, tagged-release, main-unreleased]
window_volume: 17 material changes, 11 capability-bearing, 7 defect-bearing, 7 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- hermes-agent (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Three stable tags in fourteen days, with release notes that describe nothing

- **Date:** 2026-08-17
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** GET repos/NousResearch/hermes-agent/releases returned v2026.8.13 (v0.20.1, 2026-08-13), v2026.8.16 (v0.20.2, 2026-08-16) and v2026.8.16.2 (v0.20.3, published 2026-08-17T18:43:27Z), all prerelease:false, draft:false. The code in each is genuinely tagged; the *notes* are the docs-only surface at issue. Each body states only aggregate counts and says 'Full curated release notes for this window will ship with v0.21.0'.
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16.2
- **Half:** neither | **Confidence:** high

**What changed.** Between v0.20.0 (v2026.8.3) and v0.20.3 (v2026.8.16.2) the project cut three stable tags covering, by its own count, ~1,444 + ~967 + ~250 commits and ~656 + ~397 + ~125 merged PRs. None of the three release bodies itemizes a single change beyond a one-paragraph prose gloss; all three defer the actual changelog to an unshipped v0.21.0. v0.20.3's paragraph is the only one naming specific work (MCP 2.x, Bot Mode, Cua Driver 0.20, cron self-heal).

**Operator consequence.** Do not treat `hermes update` on these tags as a readable upgrade. An operator who needs to know what moved must diff the compare ranges and read merged PRs directly -- the release page will not tell them. Watch for v0.21.0; until it lands, pin a tag and audit by PR rather than by release note.

## 2. A hijacked upstream repo pulled the blender MCP entry out of the catalog

- **Date:** 2026-08-10
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 5b8cbd5ef2891eca3cf414306ca8e6ec8a3bf118; compare/5b8cbd5e...v2026.8.13 -> status=ahead, ahead_by=546, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/83404
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** The `blender` MCP catalog entry and the `blender-mcp` optional skill were removed after the upstream maintainer (@sidahuj) publicly reported his GitHub account compromised and his repos' ownership stripped on 2026-08-08. Hermes verified independently rather than taking the report on faith: ahujasid/blender-mcp and ahujasid/ableton-mcp both 301-redirect to a fresh org (MCPBlender, created 2026-08-08T11:33Z) pushing new commits, and the raw addon.py URL the docs pointed at now 404s. The reasoning for removal over a warning is the shape of the bridge: the stdio server half is safe (the pin `blender-mcp==1.6.4` is a pre-compromise PyPI release, sdist sha256 re-verified byte-identical), but the Blender addon half is arbitrary Python running inside Blender that ships in no PyPI artifact and was only ever distributed from the now-attacker-controlled repo. Cross-references in unreal-mcp and kanban-video-orchestrator were cleaned so no dangling links point at attacker-controlled code.

**Operator consequence.** If you installed the blender MCP bridge before 2026-08-10, re-fetch nothing and re-audit the addon.py currently loaded in your Blender -- that is the half with no trustworthy source. The transferable lesson: a catalog entry is only as safe as its least-packaged half, and a PyPI pin proves nothing about a component distributed by git URL.

## 3. Shareable profile archives finally get a secret scrub

- **Date:** 2026-08-10
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha fafbdd25ad0e81758df8d30ef34aceb1a8add647; compare/fafbdd25...v2026.8.13 -> status=ahead, ahead_by=515, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/83458
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Profile export now force-runs `agent.redact.redact_sensitive_text(..., force=True)` over the staged copy before writing the .tar.gz -- the same pass as `hermes sessions export --redact`. `force=True` deliberately ignores `security.redact_secrets` and HERMES_REDACT_SECRETS so share archives stay scrubbed even when live redaction is off. The live profile on disk is never rewritten, and symlinks to text files are materialised only when redaction actually changes content, so the scrub cannot follow a link back into the source tree. The PR is explicit about the remaining gap: this is secret-pattern scrubbing, not general PII -- names, emails and paths in prose still ship.

**Operator consequence.** Upgrade before you share another profile. Then still open the archive: the scrub is pattern-based on secret shapes only, so a credential in an unusual format, and every name, email and internal path in your SOUL.md prose, is still in the tarball you hand someone.

## 4. Fifteen out of fifteen destructive Windows commands passed approval silently

- **Date:** 2026-08-12
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha e1caf88c6ca62e364d4599a53c097b10c70ffb03; compare/e1caf88c...v2026.8.13 -> status=ahead, ahead_by=424, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/84428
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Probed live against the branch's parent, 15 of 15 destructive Windows commands cleared the approval system with no prompt: `Remove-Item -Recurse -Force`, `del /s /q`, `rd /s /q`, `iwr ... | iex`, `taskkill /F`, `Stop-Process -Force`, `Format-Volume`, `diskpart`, `icacls ... /grant Everyone:(F)`, `del C:\Users\me\.ssh\id_rsa`, `cipher /w`, `vssadmin delete shadows`, `bcdedit /set`, `reg delete`. Two root causes: the DANGEROUS_PATTERNS list was POSIX-shaped, and the command normalizer stripped backslashes as shell escapes, so `C:\Users\me\.ssh` reached the matcher as `C:Usersme.ssh` and no path rule could ever fire. The fix adds a Windows destructive tier (every pattern requiring the destructive flag or verb, so `reg query`, `sc query`, plain `del file.txt` do not prompt) plus a Windows-path detection variant emitted before normalization eats the backslashes. The patterns live in the main list, not a win32-gated tier, because a Linux-hosted Hermes can drive a Windows box over SSH. 48 test cases: 27 destructive flagged, 13 benign not flagged, 5 credential-path cases in both separator spellings, 4 POSIX-escape non-regressions.

**Operator consequence.** This is the sharpest single finding in the window. If you ran Hermes against a Windows host -- natively or over SSH from Linux -- on v0.20.0 or earlier, your approval rail was not covering the commands that destroy a machine, including shadow-copy deletion and boot-config edits. Upgrade to v0.20.1+ and re-audit any Windows session transcript from before 2026-08-12.

## 5. Delegated subagents can each get their own git worktree

- **Date:** 2026-08-13
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 6ee58f4088e70798b51e001ab79adaec3b34fa4a; compare/6ee58f40...v2026.8.13 -> status=ahead, ahead_by=274, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/84942
- **Half:** capability | **Confidence:** high

**What changed.** `delegation.worktree_isolation: true` (default false) gives each delegated child a worktree at `<repo>/.worktrees/subagent-<id>` on branch `hermes-subagent/subagent-<id>`, branched from HEAD, so parallel children stop contending for one working copy and the parent's checkout stays untouched. Children commit in their own worktree and the lead reviews and merges each branch. Worktrees with no commits and a clean tree are auto-pruned; anything holding work is kept. Scope guards are tight: git repos and the local terminal backend only -- non-git dirs, docker/ssh/modal backends, unborn HEAD or any git failure fall back silently to today's shared workspace rather than erroring. Result entries gain a `worktree` field only when isolation engaged, so the default-off wire shape is byte-identical. The PR documents it as a clean-room implementation from Meta Muse Code's published behaviour (dev.meta.ai docs), with no code referenced.

**Operator consequence.** Turn it on if you fan out edit-capable children across one repo -- this is the difference between parallel subagents and parallel corruption. Note the silent degradation: on a docker or SSH backend you get shared-workspace behaviour with no error and no `worktree` field, so verify the field is present before you assume isolation held.

## 6. delegate_task learns to list, steer and stop its own running children

- **Date:** 2026-08-13
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 2a26693e22f43f29319be15d12433c95a4eaf6a8; compare/2a26693e...v2026.8.13 -> status=ahead, ahead_by=160, behind_by=0 (ancestor of stable tag v2026.8.13).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/85232
- **Half:** capability | **Confidence:** high

**What changed.** Three new actions on the existing tool rather than three new tools: `action='list'` shows this conversation's children, `action='steer'` redirects one mid-run without stopping it, `action='stop'` ends one early. Ownership is enforced by a `_delegate_parent_ref` weakref chain so a conversation can only control its own spawn tree. Control actions never consume the per-turn subagent spawn cap and stay usable once the cap is hit -- the PR notes that is exactly when `stop` matters most. Steering rides the existing `steer_subagent()` registry and is delivered at the child's next tool boundary, with missed steers surfacing as `missed_steer` in the completion entry; `stop` halts at the next iteration boundary and the partial result still re-enters as a normal completion. Live E2E shows a child echoing STEER-ACK mid-essay and switching topics. Documented the same day in #85462.

**Operator consequence.** Try it: a running fan-out stops being fire-and-forget. The governance read is more interesting than the ergonomic one -- a parent agent can now interrupt its own children, so your kill switch is no longer only a human at the TUI. Check that your audit trail captures `steer` and `stop` calls as decisions, because they are.

## 7. The per-subagent tool-call budget jumps 50 to 250, and a migration rewrites your config to match

- **Date:** 2026-08-14
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 50d98fc1f3d49d7a7b522eaa7f4553cd864a0218; compare/50d98fc1...v2026.8.16 -> status=ahead, ahead_by=743, behind_by=0 (ancestor of stable tag v2026.8.16).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/86506
- **Half:** capability | **Confidence:** high

**What changed.** `delegation.max_iterations` default goes 50 -> 250 (`_config_version` 35 -> 36), with `DEFAULT_MAX_ITERATIONS` in delegate_tool.py kept in sync. The reasoning: leaf agents spend ~15-20 turns on reconnaissance before producing output, then ran out of budget mid-task and returned 'completed but unfinished' summaries (exit_reason=max_iterations while status=completed). The load-bearing part is `_migrate_to_36`, which on update lifts any config pinned at *exactly* the old default 50 to 250 -- because config values, once written, are not overwritten by default changes, so every existing install would otherwise sit at 50 forever. Deliberate overrides at any other value are preserved; an unset key inherits 250 at read time. The PR states its own risk: the cap is per child and children run concurrently, so this raises worst-case fan-out cost, with `delegation.child_timeout_seconds` (default 0 = off) as the only wall-clock backstop.

**Operator consequence.** This is a spend change disguised as a default change, and it will apply to you on `hermes update` unless your config holds a non-50 value. If you deliberately inherited 50, write an explicit number down before upgrading -- the migration cannot tell an inherited default from a considered one. Combined with the concurrency raise, worst-case per-batch tool calls go from 150 to 2,500.

## 8. Concurrent delegated children default 3 to 10, by the same migration mechanism

- **Date:** 2026-08-15
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha ce996d40577c242dc04cc6d66e827dcdf8daa569; compare/ce996d40...v2026.8.16 -> status=ahead, ahead_by=502, behind_by=0 (ancestor of stable tag v2026.8.16).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/86745
- **Half:** capability | **Confidence:** high

**What changed.** `delegation.max_concurrent_children` default 3 -> 10 (`_config_version` 36 -> 37), with `_migrate_to_37` lifting configs pinned at exactly 3 on update and preserving deliberate non-3 values -- the same pattern as #86506 one day earlier. The chosen value is explicitly tuned to sit at or below the existing high-cost advisory threshold (`>10`) so the new default never trips the project's own cost warning. Floor stays 1; there is no ceiling. The PR concedes the trade directly: each child consumes API tokens independently, so this is a throughput and latency win paid for in parallel spend.

**Operator consequence.** Read this together with the iteration raise: within 24 hours the shipped delegation envelope widened roughly 16x, and both changes reach existing installs through a config migration rather than waiting for anyone to opt in. If you run Hermes on a metered key, set explicit values for both keys before your next update and watch your first fan-out bill. Note also the deliberate design of picking 10 so the default stays under the warning threshold -- the guardrail was moved to fit the default, not the other way round.

## 9. Computer-use gets a non-YOLO path to attach to your signed-in browser

- **Date:** 2026-08-15
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 20cf326bd117e66b0c3a0385dcad20a53f19d6f2; compare/20cf326b...v2026.8.16 -> status=ahead, ahead_by=195, behind_by=0 (ancestor of stable tag v2026.8.16).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/86342
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Until this landed, attaching the typed `cua_browser_*` route to a user's real signed-in browser profile always failed closed in standard mode, and the only escape hatch was full session YOLO. The PR adds three graded rungs, all live-verified against a real cua-driver 0.19.3 binary rather than from docs: a one-time `computer_use.grant_existing_profile: true` config opt-in that appends cua's `--grant existing-profile`; a `bounded` permission mode launching a private per-session daemon with `--session-policy <path> --approve-session-policy` against a reviewed manifest, failing loudly at session start if the manifest is missing; and a `hermes computer-use browser-approve --pid` interactive token passthrough that refuses non-interactive terminals, so a model genuinely cannot mint it. `unrestricted` is deliberately not a config value -- it stays bound to the explicit per-session YOLO toggle. Notably the live probe found the published cua docs wrong: the documented `--capability-manifest` spelling is rejected by the real binary.

**Operator consequence.** If you wanted browser automation against a logged-in profile and were refusing to run session YOLO to get it, this is the change to test. Use the bounded manifest rung, not the config grant, when the browser holds real sessions: the grant is a standing permission, the manifest is a reviewed one. And take the docs-vs-binary mismatch as the warning it is -- verify cua flag names against your installed driver, not against dev.trycua docs.

## 10. Hermes moves to the MCP 2.x SDK

- **Date:** 2026-08-17
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha e0ce06e358d8e493846d4fb2d7465fbf6995c9c2; compare/e0ce06e3...v2026.8.16.2 -> status=ahead, ahead_by=106, behind_by=0 (ancestor of stable tag v2026.8.16.2).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/88180
- **Half:** both | **Confidence:** high

**What changed.** `mcp==1.28.1` -> `mcp==2.0.0` plus `httpx2==2.7.0` across the dev, mcp and computer-use extras; `FastMCP` -> `mcp.server.MCPServer` on both server entrypoints. The interesting part is the failure class it cleans up: a `mcp_field()` dual-name reader now covers every snake_case/camelCase model field, defusing silent `getattr(x, "camelCase", default)` traps that had been producing empty tool schemas, missed `is_error`, and dropped `structured_content`. The `MCP-Protocol-Version` header is now seeded from the handshake version the body actually speaks rather than the latest. Streamable-HTTP transport arity is accepted for both SDK generations. Back-compat E2E confirms the new client still registers and calls against a legacy mcp==1.28.1 FastMCP server -- catalog servers stay on 1.x.

**Operator consequence.** Upgrade path is clean for consumers but this is a dependency-floor move: anything in your environment pinning `mcp<2` or `httpx<2` will now conflict. Check your extras before `hermes update`. If you ever saw an MCP server register with empty tool schemas or lose structured content, this is likely the cause and it is now fixed.

## 11. MCP servers with no handshake now connect: the 2026-07-28 stateless protocol

- **Date:** 2026-08-17
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 382060f02277c6404d4f0f1ff4df1f5c974a26b8; compare/382060f0...v2026.8.16.2 -> status=ahead, ahead_by=57, behind_by=0 (ancestor of stable tag v2026.8.16.2).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/88299
- **Half:** capability | **Confidence:** high

**What changed.** A `_negotiate_session()` choke point on all four transport call sites (stdio, SSE, new HTTP, legacy HTTP) implements a per-server `protocol` key: `auto` (default) tries the legacy handshake first and falls back to `server/discover` when the server rejects it as modern-only (-32022/-32601, classified structurally then by substring, deliberately not by isinstance on SDK exception types); `stateless` probes discover-first; `legacy` disables the fallback. Handshake-first auto means zero extra round-trips and zero behaviour change for the existing fleet. Alongside it: SEP-2549 `ttlMs`/`cacheScope` from tools/list are now bound to the lazy-startup schema cache, so TTL'd entries expire and force a live re-probe while hint-less pre-2026 entries keep never-expires; SEP-837 declares `application_type: native` in OAuth client metadata; RFC 9207 `iss` validation and issuer-keyed credentials were verified already native in SDK 2.0 rather than reimplemented. `SamplingHandler` is marked upstream-deprecated on a 12-month window -- functional, but closed to new capability.

**Operator consequence.** Nothing to do for existing servers -- auto mode is handshake-first by design. Do act on two things: if you run an MCP server that caches tool lists, you can now publish ttlMs and Hermes will honour it, and if you built anything on MCP sampling, start planning off it inside twelve months.

## 12. A failed git probe was deleting delegated subagents' uncommitted work and reporting it as 'nothing produced'

- **Date:** 2026-08-17
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 4323c67dcc6048fc8e311cdff7600d3d6a17807f; compare/4323c67d...v2026.8.16.2 -> status=ahead, ahead_by=23, behind_by=0 (ancestor of stable tag v2026.8.16.2).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/88419
- **Half:** defect | **Confidence:** high

**What changed.** With `delegation.worktree_isolation: true`, `finalize_subagent_worktree()` pre-seeded its payload with `commits: 0, dirty: False`, then ran `git rev-list --count` and `git status --porcelain`, which only overwrote those values on a zero exit. A non-zero exit left the optimistic defaults in place and the prune condition read them as *proven* clean -- running `git worktree remove --force` and `git branch -D`. Untracked and uncommitted child work was irrecoverable, and the entry even reported `pruned: true`. Worse, the failure case was byte-identical to 'the child did nothing', and the only failure signal was a `logger.warning` that the sole consumer -- the parent agent reading the serialized delegate_task entry -- cannot read. The fix fails closed on inspection uncertainty, stamps `inspection_failed: True` with a note naming the worktree and branch, aligns the caller's fallback payload to the same shape, and closes a second fail-open path where a missing `base_commit` meant the rev-list probe never ran at all. Validated by reproducing the destruction on main @ 979ca57a50 with real git repos and no mocks.

**Operator consequence.** If you enabled `worktree_isolation` between its arrival on 2026-08-13 and this fix on 2026-08-17, delegated work may have been destroyed while the run reported success. Check `<repo>/.worktrees/` and `git branch --list 'hermes-subagent/*'` for what survived, and upgrade to v0.20.3 before turning the flag on again. This is the sharpest example in the window of a capability and its data-loss defect shipping four days apart under the same minor version.

## 13. Plugin install and update now security-scan the tree before it can run

- **Date:** 2026-08-17
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 9d139320d46b2e6f1df52f06eccdd37ff323efb7; compare/9d139320...v2026.8.16.2 -> status=ahead, ahead_by=140, behind_by=0 (ancestor of stable tag v2026.8.16.2).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/80728
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** `hermes plugins install` and `hermes plugins update` previously cloned and activated arbitrary git repos completely unscanned -- and plugins run Python in-process with the agent, with full access to its environment, making them a more dangerous surface than the hub skills Hermes already scanned. A new `tools/plugin_guard.py` runs the existing skills_guard threat-pattern engine over the temp clone before it is moved into `~/.hermes/plugins/`, and re-scans after `hermes plugins update`. Verdicts: `safe` installs silently, `caution` prints findings and requires `Install anyway? [y/N]` or `--force`, `dangerous` is blocked and `--force` does not override. The plugin adaptation exempts the `requires_env` pattern on code files (plugins legitimately read their own API keys) while still enforcing it on docs and config files where it reads as an injection or social-engineering signal; foreign credential-store access (~/.ssh, ~/.aws, ~/.hermes/.env), reverse shells, destructive commands, persistence, obfuscated execution and symlink escapes stay at full strength. On by default, opt out via `plugins.scan_on_install: false`. A false-positive audit over all 60 bundled plugins returned 57 safe, 3 caution, 0 dangerous. The PR credits Claude Cowork's skill and plugin scanning as the inspiration and tabulates how the two policies differ -- notably Cowork's is off by default as an Enterprise setting where Hermes ships it on.

**Operator consequence.** You get this on upgrade with no action. Do check `plugins.scan_on_install` is not disabled in a config you inherited, and re-run `hermes plugins update` across anything you installed before v0.20.3 -- those trees were never scanned. Note the scanner is static pattern matching, not an LLM review: it catches shapes, not intent.

## 14. Repos can vendor their own skills, behind a per-repo trust gate

- **Date:** 2026-08-17
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha f891d702dfeb5351f8020e621ee257c40bffa0a8; compare/f891d702...v2026.8.16.2 -> status=ahead, ahead_by=3, behind_by=0 -- merged 18:39Z, tagged 18:43Z, an ancestor of stable tag v2026.8.16.2 by four minutes.
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/88566
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Sessions started inside a git checkout now source skills from `<root>/.hermes/skills/` and `<root>/.agents/skills/` as the highest-precedence tier, so a repo can ship its own skills without profile-global config and same-named bundled skills are overridden inside the repo rather than silently shadowing the vendored ones. Loading is gated at discovery time by an explicit per-repo trust decision (`hermes skills trust` / `untrust`, stored in `skills.trusted_project_dirs`), and the PR states the reason plainly: skills are executable procedure documents, so OpenCode-style automatic loading from any cloned repo is a prompt-injection vector. An untrusted repo contributes nothing to the index, `skills_list`, `skill_view`, slash commands or backend mounts -- the only surface is a one-line banner notice. cwd and the trust list resolve once at agent build and the resolved tier is part of the skills-prompt cache key, so the system prompt stays byte-stable and there are no mid-session rescans. The PR credits community feedback (masoria on Discord) and cites OpenCode's and Codex's repo-local skill sourcing, with Codex's trusted-projects gate as the model followed.

**Operator consequence.** Adopt this for shared repos -- it is the right shape: opt-in per repo, gated at discovery rather than at use, and nothing leaks into the prompt before you say yes. The failure mode to watch for is trust-once-then-pull, which the follow-up below addresses and which is NOT in this tag.

## 15. The gap in that trust gate -- a git pull could inject a skill into an already-trusted repo -- is fixed only on main

- **Date:** 2026-08-17
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** merge_commit_sha 6e22d265835fe035e648f53b9f28d772037566f0, merged 2026-08-17T21:06:17Z into main. GET repos/NousResearch/hermes-agent/compare/6e22d265...v2026.8.16.2 -> status=behind, i.e. the newest stable tag is BEHIND this commit and does not contain it. The tag was created 2026-08-17T18:43:23Z, roughly 2h23m before the merge. No later tag exists as of 2026-08-17.
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/88643
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** The follow-up to #88566 names the hole its predecessor left: trust via `hermes skills trust` is a repo-level decision made once, but the repo's skill content changes with every pull -- the hub install path scans, a checkout did not, so a `git pull` could inject a malicious skill into an already-trusted repo with no scan anywhere. This PR runs every project SKILL.md dir through `skills_guard.scan_skill_cached`, the same scanner as hub installs, with the cache under `~/.hermes/cache/project_skill_scans/` and explicitly never inside the repo; a `dangerous` verdict quarantines and a scanner failure fails closed. `iter_project_skill_files()` becomes the single iteration chokepoint so no consumer can bypass the gate. It also makes non-interactive surfaces (cron, API, ACP) inherit the human's trust decision by project identity via TERMINAL_CWD rather than prompting or auto-trusting -- untrusted or no workdir loads nothing, and it never prompts. Tests include a real malicious fixture scoring `dangerous` on six findings including prompt_injection_ignore and hermes_env_access.

**Operator consequence.** This is the entry that matters for the publication's central rule. Project-local skills are in a stable tag; the scan that keeps a trusted repo trustworthy across pulls is not. If you turn on project skill discovery on v0.20.3, you are running the tier without its quarantine -- trust only repos you control, and re-check for a tag containing 6e22d265 before you widen that.

## 16. Bot Mode ships bundled and on by default, and the bot-to-bot protocol moves into the core system prompt

- **Date:** 2026-08-17
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** merge_commit_sha 8236b417713dd3f4a6bea0ff26cc5f64a1d3b8c4; compare/8236b417...v2026.8.16.2 -> status=ahead, ahead_by=204, behind_by=0 (ancestor of stable tag v2026.8.16.2).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/87886
- **Half:** capability | **Confidence:** high

**What changed.** The Hermes-Bot-Mode plugin, previously a standalone install, is now bundled in the desktop app and enabled by default (live-disable via Settings -> Plugins). More consequential than the bundling: the bot-to-bot messaging protocol moves out of user SOUL.md files and into a core stable-tier system-prompt section, so it covers every session of every profile -- including headless `hermes -p <bot> chat` sessions that teammates start. A `tools/bot_mode_probe.py` gates the injection behind `agent.bot_mode_protocol` (default on) and keeps it silent unless a profile carries `ui_meta['hermes-bots']` or already has the legacy SOUL section; the section is cached per process+home and byte-stable across rebuilds, adding +916 bytes only on a managed home. `profiles.list` gains a `bot_mode_protocol` capability flag so the plugin can stop writing to SOUL.md on gateways that support it. Related work the same day added cross-machine bot DMs (`hermes peer`, #88725) and Discord-style group chats.

**Operator consequence.** Watch this one rather than adopt it. A default-on plugin that injects an inter-agent messaging protocol into every session's system prompt is a meaningful change to what your agents are told they can do, even when you never open the Bots panel. Verify `agent.bot_mode_protocol` and check whether your profiles carry the ui_meta key; if you run headless bot profiles, the protocol is now in their prompt too.

## 17. The delegation docs still document the defaults that were replaced three days earlier

- **Date:** 2026-08-17
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** Read at the pinned tag: website/docs/user-guide/features/delegation.md @ v2026.8.16.2 line 445 reads `max_iterations: 50  # Max turns per child (default: 50)` and line 446 `# max_concurrent_children: 3  # Parallel children per batch (default: 3)`; line 120 states 'Maximum concurrency: 3 tasks by default'; line 361's cost warning is computed as 3x3x3=27. Confirmed live on the deployed docs at https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation (HTTP 200, same figures). The shipped defaults at that same tag are 250 and 10 per PRs #86506 and #86745.
- **Receipt:** https://github.com/NousResearch/hermes-agent/blob/v2026.8.16.2/website/docs/user-guide/features/delegation.md#L445
- **Half:** defect | **Confidence:** high

**What changed.** Both delegation default raises updated `config_defaults.py`, `delegate_tool.py`, `config_migrations.py` and `cli-config.yaml.example`, but not the delegation feature page. At the newest stable tag the docs -- in-tree and deployed -- tell an operator that each child gets 50 turns and three run at once, and the page's own cost warning multiplies out to 27 concurrent leaf agents at max_spawn_depth 3. The real figures at that tag are 250 turns, 10 concurrent children, and 1,000 leaf agents at the same depth. The same page correctly documents worktree isolation and live steering, so this is a partial miss rather than a stale page.

**Operator consequence.** Do not size your delegation budget from the docs. Read `config_defaults.py` at the tag you are running, or dump your effective config after upgrading -- the numbers the documentation gives you are off by 5x and 3.3x, and the cost warning it prints is off by a factor of 37.

## Researcher lane notes

Volume caveat, stated up front: this source moved at roughly 2,660 commits and ~1,180 merged PRs across the fourteen-day window, per the project's own counts in the three release bodies. This harvest is a selection, not a census. I searched merged PRs across the contract's high-signal patterns (mcp, cron, sandbox, approval, permission, security, memory, skill, subagent, delegate, bot mode, teammate) and read the full bodies of the 22 that looked decision-bearing. Material I saw and deliberately left out as below the bar or as detail folded into a reported entry: cron scheduler self-heal (EMFILE recovery #88335, wedged-job re-arm #88339, last_fire_error surfacing #88555, continuity=true #80774), the desktop MCP surface consolidation wave (#87525, #87572, #87576, #87579, #87581), PYTHONHOME/PYTHONPATH subprocess ownership hardening (#88285), the memory tool being hidden from cron agents where it had always failed at runtime (#79762), delegation truncation marking (#86641), and the ~20-skill bundled-skills authoring sweep (#82030 and siblings).

Channel discipline: every reported SHA was resolved by ancestry, not by date, using the GitHub compare API -- `GET /repos/NousResearch/hermes-agent/compare/<merge_commit_sha>...<tag>`, reading `status` and `behind_by`. status=ahead with behind_by=0 proves the commit is an ancestor of that tag; the one main-unreleased entry (#88643) returned status=behind against v2026.8.16.2, proving the newest stable tag does not contain it. All 27 releases in the repo are prerelease:false -- this project ships no rc/beta/nightly channel, so "preview-or-beta" is not an available classification here and no entry uses it.

Timing note worth carrying: the newest stable tag v2026.8.16.2 was created 2026-08-17T18:43:23Z, and main is 144 commits ahead of it by the end of the window. Two of the most operator-relevant items land on either side of that four-minute-to-two-hour boundary -- project-local skill discovery (#88566, merged 18:39Z, in the tag by four minutes) and its scan quarantine (#88643, merged 21:06Z, not in any tag). That is the cleanest illustration of the released-is-not-merged rule this source has produced.

Gaps recorded honestly. (1) The repo publishes no GitHub security advisories -- `GET /repos/NousResearch/hermes-agent/security-advisories` returned an empty array -- so no CVE or GHSA exists for the Windows approval bypass (#84428), the Docker mount leak (#82731), or the secret-leak paths (#81675, #83458). Those are maintainer-authored PR receipts only; there is no canonical advisory to link and I have not invented one. The blender supply-chain removal (#83404) likewise has no advisory: the primary evidence is the maintainer's own public report plus Hermes's independent verification of the 301 redirects to the MCPBlender org, which I could not re-verify myself without following links into attacker-controlled infrastructure and chose not to. (2) The three release bodies in the window contain no itemized changes, so I could not use release notes as a source of truth for anything and read PRs instead -- which also means anything that moved without a searchable keyword in its PR title is invisible to this pass. (3) Contributor-facing figures quoted in entries (commit counts, PR counts, false-positive audit results, test pass counts) are the project's own self-reported numbers from release and PR bodies; I did not independently recount them and they are attributed as claims, not verified as facts. (4) Discord is cited as the origin of two findings (#82731 by lpha3ch0, #88566 via masoria) inside maintainer-authored PR bodies; I did not visit Discord and treat the PR body as the receipt, per the contract's rejection of unsourced social claims.

## Surfaces checked

- sources/hermes-agent.yml (source contract, read first)
- https://github.com/NousResearch/hermes-agent/releases (GitHub releases API, 27 releases enumerated)
- https://github.com/NousResearch/hermes-agent/tags (tags API, 33 refs; prerelease vs stable checked)
- GitHub merged-PR search over 2026-08-03..2026-08-17 across contract high-signal patterns (mcp, cron, sandbox, approval, permission, security, memory, skill, subagent, delegate, bot mode, teammate)
- GitHub compare API for ancestry proof on every reported SHA
- repos/NousResearch/hermes-agent/security-advisories (returned [] -- no repo-published GHSA in window)
- default-branch commits after the newest stable tag (compare v2026.8.16.2...main, 144 commits ahead)
- https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation (deployed docs)
- In-tree docs at tag: website/docs/user-guide/features/delegation.md @ v2026.8.16.2
