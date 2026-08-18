---
schema_version: bitter.frontier_harvest.v0
provider: antigravity
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/antigravity.yml
channels_present: [tagged-release]
window_volume: 4 material changes, 2 capability-bearing, 4 defect-bearing, 2 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- antigravity (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. 1.1.11 discloses that a malformed allowlist entry auto-approved every command

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/google-antigravity/antigravity-cli/releases/tags/1.1.11 returns prerelease:false, draft:false, target_commitish:main, published_at 2026-08-07T02:35:23Z. gh api .../git/ref/tags/1.1.11 resolves to commit 1d853acd23f2b0fc55da42377aab1a05f5e34aa8, which is on main (listed by the commits API for the window). CHANGELOG.md fetched at that pinned SHA has '## 1.1.11' as its top section and the entry verbatim. CAVEAT ON ANCESTRY: the repo tree at fbf22703 contains only .github, CHANGELOG.md, README.md, agy-cli-demo.gif and examples; /languages returns {} and /license returns 404. Ancestry here proves when the changelog commit landed, not that any binary derives from it.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** The 1.1.11 changelog states: 'Fixed an allowlist entry that tokenizes to zero command words -- `command(time)`, a comment-only entry, or an empty compound such as `()` -- matching every command and silently auto-approving anything the agent ran; such an entry now matches nothing.' Class: permission/authorization bypass. Per the vendor's own permissions doc, `command` rules match by whitespace-separated token prefix; an entry that tokenizes to zero words therefore matched the empty prefix, i.e. everything. A second entry in the same release, 'Fixed commands being auto-approved while the session was in request-review or strict permission mode', says the two strictest modes were independently not binding.

**Operator consequence.** Upgrade to 1.1.11 or later, then re-audit every `permission.allow` list you have ever written for entries that tokenize to zero command words -- a stray comment line, an empty `()`, or a bare `command(time)`-shaped entry. On any version before 2026-08-07, treat a session that carried such an entry as having run with no command gate at all, and treat request-review and strict mode on those versions as advisory rather than enforcing. Read agent transcripts from that period rather than assuming the prompt log is complete.

## 2. 1.1.11: MCP admin controls were skipped for the first five minutes of every session

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Same tag 1.1.11 -> commit 1d853acd23f2b0fc55da42377aab1a05f5e34aa8, stable (prerelease:false). Entry present verbatim in both the release body and CHANGELOG.md pinned at that SHA.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** 'Fixed admin controls being skipped for MCP servers at startup, where a fetch made before authentication cached "admin controls not applicable" and allowed every server for the next five minutes, and fixed the built-in Chrome DevTools MCP server being blocked outright by admin controls.' Class: policy-enforcement bypass with a bounded window. The organisation's administrator controls over which MCP servers may load were computed before the user was authenticated, and the negative answer was cached, so every configured MCP server was permitted for five minutes after launch.

**Operator consequence.** If you rely on Google Cloud administrator controls to restrict which MCP servers your developers can load, that control did not bind for the first five minutes of each session before 1.1.11. Upgrade, and if your MCP inventory includes anything you disallowed at the admin layer, check whether it was reachable during that window. Note the same release also unblocked the built-in Chrome DevTools MCP server, which admin controls had been blocking outright -- so the fix moves in both directions and your effective MCP surface changes on upgrade.

## 3. 1.1.11: print mode answered interactive slash commands as prose, reporting work it had not done

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Tag 1.1.11 -> 1d853acd23f2b0fc55da42377aab1a05f5e34aa8, stable tag on main; entry verbatim in the release body and in CHANGELOG.md at that SHA.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
- **Half:** both | **Confidence:** high

**What changed.** Two paired entries. Capability: 'Added non-interactive answers for the read-only slash commands in print mode, so `-p "/usage"`, `/quota`, `/credits`, `/model`, `/effort` and `/skills` emit one tab-separated record per line -- or a structured payload under `--output-format json` and `stream-json` -- without starting an agent turn, spending quota, or leaving a conversation behind.' Defect: 'Added an explicit refusal for the remaining interactive-only slash commands in print mode, which previously fell through as literal prompt text and let the model answer as though the command had run, so `-p "/clear"` reported the context cleared while nothing was cleared; each now fails with the flag or subcommand that replaces it.'

**Operator consequence.** If you have scripts that shell out to `agy -p "/something"`, audit them: before 1.1.11 an interactive-only command was fed to the model as text and the model confidently reported success. Any automation that trusted that output was reading a hallucinated confirmation. After upgrading, the read-only set is genuinely free to poll -- it costs no quota and leaves no conversation -- and everything else fails loudly with the flag that replaces it.

## 4. 1.1.11 makes config.json the sole owner of plugin enablement, so a plugin can no longer disable itself under you

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Tag 1.1.11 -> 1d853acd23f2b0fc55da42377aab1a05f5e34aa8, stable, on main; entry verbatim in release body and pinned CHANGELOG.md.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.11
- **Half:** both | **Confidence:** high

**What changed.** 'Improved plugin enable and disable so `config.json` is the only place enablement lives, seeded once from each plugin's manifest, which stops a plugin that later ships "disabled": true from switching itself off under someone who was already running it and stops a shipped-default change from moving every user on the next release.' Before this, a plugin author's manifest could flip the enabled state of an already-installed plugin on the operator's machine at upgrade time.

**Operator consequence.** This is a control-plane hardening worth noting on a watchlist that tracks who owns your configuration: after 1.1.11 the enablement decision is yours and is seeded from the manifest exactly once. If you previously saw a plugin silently turn itself off (or a fleet-wide default change on an upgrade) and could not explain it, that is the cause. No action beyond upgrading, but re-check `config.json` after the upgrade to confirm the seeded state matches what you intended.

## Researcher lane notes

Three stable releases landed inside the window -- 1.1.11 (2026-08-07, w1), 1.1.12 (2026-08-11, w2), 1.1.13 (2026-08-14, w2) -- on the same roughly three-day cadence the source has held since June. All are non-prerelease, all target main.

WHICH SURFACE EACH CLAIM STANDS ON, per the coordinator's brief. Every version-pinned claim above stands on TWO surfaces that agree verbatim: the GitHub release body and the CHANGELOG.md section fetched at a pinned commit SHA (1d853acd for 1.1.11; f7519c90 for 1.1.12; fbf22703 for 1.1.13). Dates are independently corroborated on a second official surface, https://antigravity.google/changelog?tab=cli, which lists 1.1.11 = Aug 7, 1.1.12 = Aug 11, 1.1.13 = Aug 14, 2026. Unlike 1.1.7 last window, no release body in this window was found truncated relative to CHANGELOG.md. Claims about permission/sandbox/settings SEMANTICS stand on antigravity.google/docs pages, which are a different and weaker surface -- see the caveat below. The one claim standing on an operator report rather than a vendor surface (issue #742) is labelled as such and used only as corroboration.

GAP 1 -- DOCS CANNOT BE DATED. The docs pages under antigravity.google/docs render reliably now, which is an improvement over the source notes' expectation, and I read /cli/permissions, /cli/sandbox, /cli/settings, /cli/subagents and /cli/headless in full. But they carry no version stamp, no last-updated date, and no history I can reach. I therefore report ZERO docs-only changes for this window: I can tell you what the docs say today, and I have used that for the carry-forward answers, but I cannot tell you whether any sentence in them changed between 2026-08-03 and 2026-08-17. Do not let any doc quote above be read as an in-window change.

GAP 2 -- THE DOCS ALREADY LAG THE CODE. The headless doc states 'By default, the CLI respects the permission mode in your settings' and does not mention --mode at all -- while 1.1.12 disclosed on 2026-08-11 that --mode was ignored in exactly that mode. The sandbox doc states that all terminal tools trigger an approval prompt -- while 1.1.11 disclosed on 2026-08-07 that commands were auto-approved even in strict mode. Both doc statements are, as of 2026-08-17, descriptions of behaviour the vendor's own changelog says did not hold. This is a Rule 4 hazard specific to this source: the doc is not a weaker version of the changelog, it is sometimes contradicted by it.

GAP 3 -- ANCESTRY IS STRUCTURALLY UNAVAILABLE HERE, AND THE TAGS ARE WRONG. This repository ships no code (tree = .github, CHANGELOG.md, README.md, a gif, examples; /languages = {}; /license = 404). Every channel:tagged-release above therefore means 'a stable, non-prerelease tag was published for this version and the notes are reachable at a pinned commit', NOT 'this commit is the shipped binary'. Worse, the tag refs themselves are unreliable: tags 1.1.12 and 1.1.13 resolve to the same commit f7519c90, and https://raw.githubusercontent.com/.../1.1.13/CHANGELOG.md returns a file topping out at '## 1.1.12'. The same collision exists at 1.1.8/1.1.9 and 1.1.2/1.1.3. The mechanism is visible in the release objects' created_at vs published_at: the 1.1.13 release object was created 2026-08-11T01:26:06Z and published three days later, so its tag was cut against the then-current main. Consequence for this publication's own practice: pin Antigravity receipts to /releases/tag/<v> or to a self-resolved /blob/<sha>/ URL, never to a /blob/<tag>/ URL.

BOUNDARY CASES. (a) 1.1.10 was published 2026-08-03T15:45:42Z, which falls inside w1, but the 2026-08-03 issue already reported it as the prior window's closing release; I have not re-reported it, though its two governance items -- the .git directory downgraded to read-only inside the sandbox, and blocked network requests going unrecorded when the command itself exited 0 -- belong to the same arc and are worth a backward reference if the digest wants one. (b) 1.1.14 was published 2026-08-18T04:10:43Z, one day AFTER the window closes, and I have marked it 'outside'; I include it only because its out-of-workspace read-only narrowing directly answers a standing carry-forward about the 1.1.3 out-of-workspace write auto-approval. It had not appeared on the vendor's own changelog site when I checked.

BOTH HALVES. The capability half of this window is real and I have not let the defect detector crowd it out: Vim modal editing across the prompt and comment editors with full vim.* keybinding scopes (1.1.11); non-interactive answers for eleven read-only slash commands plus --output-format json/stream-json on the models and agents subcommands, which together make agy genuinely scriptable without spending quota (1.1.11, 1.1.12); disable-slash-command frontmatter for skills; a raised per-session tool-declaration ceiling for heavy MCP setups; and GEMINI_API_KEY direct-API auth (1.1.13). The defect half is dominated by one theme, and it is the theme the prior window predicted: FOUR separate disclosures in eight days that a permission control was not binding -- the zero-token allowlist wildcard, auto-approval under request-review and strict mode, MCP admin controls skipped for five minutes at startup, and --mode ignored entirely in headless runs. Each was announced as a one-line fix in an undifferentiated bullet list with no advisory. The publication's standing observation about this source holds and hardens: capability ships with a name and a paragraph; the admission that a gate was open ships as a bullet.

NOTHING INVENTED. No CVE or GHSA exists for any item above -- the repository's security-advisories endpoint returns an empty array and there is no SECURITY.md, so the path traversal and the /tmp binary-planting fix have no canonical advisory to link and I have not manufactured one. Issue #78 (Gemini API key auth for headless, opened 2026-05-21) remains open despite 1.1.13 shipping the feature; that is a housekeeping lag, not a signal, and I did not promote it to a change.

## Surfaces checked

- https://github.com/google-antigravity/antigravity-cli/releases (GitHub Releases API, 30 most recent)
- https://github.com/google-antigravity/antigravity-cli/blob/fbf22703a9c4bda0758b5bace0ab3142746780a9/CHANGELOG.md (pinned to SHA, full 461-line file)
- git refs/tags for 1.1.11, 1.1.12, 1.1.13, 1.1.14 plus the full tag list (SHA resolution for ancestry)
- repos/google-antigravity/antigravity-cli commits on main, since=2026-08-03 until=2026-08-18
- repos/google-antigravity/antigravity-cli git tree at fbf22703 (repo contents), /languages, /license
- repos/google-antigravity/antigravity-cli/security-advisories (returned []), .github/SECURITY.md (404)
- GitHub issue search repo:google-antigravity/antigravity-cli created:2026-08-03..2026-08-17 (76 issues), issue #742, issue #78
- https://antigravity.google/changelog?tab=cli (vendor-hosted changelog, second official surface)
- https://antigravity.google/docs/cli/permissions
- https://antigravity.google/docs/cli/sandbox
- https://antigravity.google/docs/cli/settings
- https://antigravity.google/docs/cli/subagents
- https://antigravity.google/docs/cli/headless
- https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
