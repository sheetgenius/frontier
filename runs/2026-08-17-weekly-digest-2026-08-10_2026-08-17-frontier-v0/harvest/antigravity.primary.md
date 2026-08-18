---
schema_version: bitter.frontier_harvest.v0
provider: antigravity
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/antigravity.yml
channels_present: [tagged-release, docs-only]
window_volume: 7 material changes, 2 capability-bearing, 5 defect-bearing, 4 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- antigravity (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. 1.1.12 discloses that --mode was ignored entirely in headless runs -- plan mode never applied in CI

- **Date:** 2026-08-11
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api .../releases/tags/1.1.12 -> prerelease:false, draft:false, published_at 2026-08-11T01:26:58Z. gh api .../git/ref/tags/1.1.12 -> commit f7519c9084190ed421e89dd81c63970b5177c9ef, which appears on main in the windowed commits API as 'docs: add changelog for 1.1.12 (#775)'. CHANGELOG.md at that SHA has '## 1.1.12' as its top section with the entry verbatim.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** 'Fixed `--mode` being ignored in headless `-p` runs, where a valid value such as `accept-edits` or `plan` was never applied and an unrecognized value produced no warning at all.' Class: silent failure of an operator-supplied safety control. An operator running `agy -p --mode plan` in CI, believing the agent was restricted to planning, was running in whatever mode the persisted config resolved to, with no warning even when the value was garbage. The same release also fixed startup diagnostics -- including the `--mode` warning itself -- being swallowed into the log file instead of printed, so the failure had no visible symptom.

**Operator consequence.** This is the upgrade-now item. If any pipeline invoked `agy -p --mode plan` or `--mode accept-edits` before 2026-08-11, the flag did nothing: re-audit what those runs were actually permitted to do rather than what the flag said. Upgrade to 1.1.12 or later and re-verify by passing a deliberately invalid `--mode` value -- you should now get a warning on the terminal, which is itself the proof that startup diagnostics reach you. This continues the arc from 1.1.4 (2026-07-18), which disclosed that headless runs had honoured no persisted settings.json policy at all; the headless permission path has now failed in three separate ways across four weeks.

## 2. 1.1.12 lets the headless agent settle its own questions instead of asking

- **Date:** 2026-08-11
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Tag 1.1.12 -> f7519c9084190ed421e89dd81c63970b5177c9ef, stable tag, commit on main. Entry verbatim in the release body and in CHANGELOG.md pinned at that SHA.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12
- **Half:** capability | security-relevant | **Confidence:** medium

**What changed.** 'Improved headless `-p` runs so the agent settles a choice itself where it would otherwise ask, instead of stalling on a question nobody is there to answer.' That is the whole description on the only surface that carries it. Which choices, and by what rule, are not stated; there is no code to read and no doc page covers it -- the vendor's headless doc still says only that 'a tool that requires approval it cannot obtain is soft-denied: the run continues, exits 0, and prints a notice to stderr', which describes the prior behaviour rather than this one.

**Operator consequence.** This is the same widening the prior window recorded, moved from interactive into automation: the scope of a decision the operator used to make has been transferred to the model, in the mode where no human is watching. Watch it and instrument it -- run headless jobs with `--output-format stream-json` and read the event stream to see which choices the agent is now making for itself, because the soft-deny notice on stderr that you may be alerting on will no longer fire for those. Do not treat 'it did not ask' as 'it did not need to'.

## 3. 1.1.13 fixes a model-driven path traversal in define_subagent -- no advisory, no CVE

- **Date:** 2026-08-14
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api .../releases/tags/1.1.13 -> prerelease:false, draft:false, published_at 2026-08-14T02:26:19Z. The 1.1.13 section is present in CHANGELOG.md at commit fbf22703a9c4bda0758b5bace0ab3142746780a9 ('docs: add changelog for 1.1.13 (#791)', on main, 2026-08-14) -- NOT at the commit the 1.1.13 tag points to; see the tag-drift entry. gh api .../security-advisories returns []; .github/SECURITY.md returns 404.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** 'Fixed `define_subagent` using a model-supplied agent name directly as a directory name, so a name containing `..` could write its `agent.md` outside the conversation's artifact directory; names are now validated at both the tool and the handler.' Class: path traversal yielding an arbitrary file write, with the traversal string supplied by the model rather than by the user -- i.e. reachable from anything that can influence model output, including tool results and fetched content. It was shipped as one bullet among twenty in a routine release, with no advisory, no CVE or GHSA, and no security surface on the repository to publish one on.

**Operator consequence.** Upgrade to 1.1.13 or later. If you ran subagent definition on earlier versions in a session that ingested untrusted content, check for stray `agent.md` files outside the conversation artifact directory. The broader consequence is the one to carry: this product has no security-advisory channel -- the advisories endpoint is empty and there is no SECURITY.md -- so a path-traversal fix and a spelling fix arrive in the same undifferentiated bullet list. If you need to know when Antigravity patches a vulnerability, you must diff the changelog yourself; nothing will page you.

## 4. 1.1.13 stops extracting an executable ripgrep into /tmp without integrity checks

- **Date:** 2026-08-14
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Tag 1.1.13 is stable (prerelease:false), published 2026-08-14T02:26:19Z; the '## 1.1.13' changelog section carrying this entry is in CHANGELOG.md at main commit fbf22703a9c4bda0758b5bace0ab3142746780a9. Entry also verbatim in the 1.1.13 release body.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** 'Improved embedded ripgrep reliability and security by saving extracted binaries to the user cache directory instead of /tmp. Added content-addressed SHA-256 verification and atomic renaming to guarantee binary integrity and prevent concurrent execution races.' Class: local binary planting plus a TOCTOU execution race. Until 1.1.13 the CLI unpacked an executable it then ran into a world-writable shared temporary directory with no integrity check, so any local process able to write that path could substitute the binary the agent would execute. Pair this with 1.1.6 (2026-07-24), which granted the sandbox read access to the system temporary directory by default.

**Operator consequence.** Upgrade. On shared or multi-tenant hosts -- CI runners especially -- treat pre-1.1.13 runs as having executed an unverified binary from a shared path, and rotate anything that agent could have touched if you have reason to suspect the host. Going forward the extracted binary is content-addressed by SHA-256 in the user cache directory, which is the first integrity check this distribution has published for anything it executes; note that the installer itself still documents no checksum, signature, or version pin for the `agy` binary you curl-pipe to bash.

## 5. 1.1.13 adds GEMINI_API_KEY auth and a custom base URL, routing around the sign-in eligibility gate

- **Date:** 2026-08-14
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Tag 1.1.13, prerelease:false, published_at 2026-08-14T02:26:19Z; the entry is the first bullet of the '## 1.1.13' section in CHANGELOG.md at main commit fbf22703a9c4bda0758b5bace0ab3142746780a9, and the first bullet of the 1.1.13 release body. Corroborated on the second official surface, https://antigravity.google/changelog?tab=cli, which lists 1.1.13 at August 14, 2026.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
- **Half:** capability | **Confidence:** high

**What changed.** 'Added support for `GEMINI_API_KEY`, so the CLI can run against the Gemini API directly without signing in. Set `modelProvider: "gemini"` in `settings.json`, export `GEMINI_API_KEY`, and point `GOOGLE_GEMINI_BASE_URL` at a custom endpoint if you need one. The banner and `/help` show `Gemini API key` as the credential, and `/logout` explains that it comes from the environment rather than appearing to end a session.' This closes the loop on the account-eligibility gate that 1.1.7 disclosed on 2026-07-26: sign-in, and therefore tier eligibility, is no longer required to run the binary. Issue #78, opened 2026-05-21 asking for exactly this for headless environments, is still open as of 2026-08-17.

**Operator consequence.** Try it if the eligibility gate has been blocking you, and understand what you are trading: subscription-tier quota for metered API billing, and an identity-bound session for a long-lived environment variable that `/logout` explicitly will not clear. Two operational notes. First, `GOOGLE_GEMINI_BASE_URL` means this closed binary will now talk to an endpoint you choose, which is the only handle an operator has ever had for observing its traffic -- worth a proxy if you want to see what it sends. Second, an API key in the environment of a CI job is readable by anything else in that job, including the agent itself.

## 6. The tag named 1.1.13 does not contain the 1.1.13 changelog -- three tag pairs in the 1.1.x line collide

- **Date:** 2026-08-14
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** gh api .../git/ref/tags/1.1.12 and .../git/ref/tags/1.1.13 both return commit f7519c9084190ed421e89dd81c63970b5177c9ef. curl of raw.githubusercontent.com/.../1.1.13/CHANGELOG.md returns a file whose top section is '## 1.1.12'. The full tag listing shows the same collision at 1.1.8 == 1.1.9 (03e095ac3619, top section '## 1.1.8') and 1.1.2 == 1.1.3 (b27d51dbe52b, top section '## 1.1.2'). The commit that does carry the 1.1.13 changelog, fbf22703a9c4bda0758b5bace0ab3142746780a9, is the commit the 1.1.14 tag points to. Release created_at vs published_at explains the mechanism: the 1.1.13 release object was created 2026-08-11T01:26:06Z (the 1.1.12 commit's timestamp) and published 2026-08-14T02:26:19Z, so the tag was cut against the then-current main.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
- **Half:** defect | **Confidence:** high

**What changed.** Antigravity's git tags do not identify the versions they name. The tag `1.1.13` and the tag `1.1.12` are the same commit; https://github.com/google-antigravity/antigravity-cli/blob/1.1.13/CHANGELOG.md shows 1.1.12's notes. The same collision has occurred twice before in this minor line (1.1.8/1.1.9, 1.1.2/1.1.3). Release *bodies* are correct and match the changelog verbatim -- the defect is in the tag refs, which is precisely the surface a receipt-keeping operator is told to pin to. Note also that this repository has no code: the tree at fbf22703 is `.github`, `CHANGELOG.md`, `README.md`, a demo gif and `examples`, /languages returns {} and /license 404s. So even a correct tag would establish only when a markdown file landed.

**Operator consequence.** Do not pin an Antigravity receipt to a tag ref or to a `/blob/<tag>/` URL -- for three versions in this line it resolves to the previous release's notes. Pin to the release page (`/releases/tag/1.1.13`), whose body is correct, or to a `/blob/<sha>/CHANGELOG.md` URL you resolved yourself. And do not run `git tag --contains` against this repository expecting it to mean anything about shipped code: there is none. For a publication whose central rule is released-is-not-merged, this is the boundary case where the vendor has made the question unanswerable from the outside -- the honest statement is 'the vendor published these notes under this version number on this date', not 'this commit shipped'.

## 7. 1.1.12 fixes silent loss of settings persistence and a forced re-login from a slow keyring

- **Date:** 2026-08-11
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Tag 1.1.12 -> f7519c9084190ed421e89dd81c63970b5177c9ef (stable, prerelease:false), commit on main dated 2026-08-11T01:26:06Z; both entries verbatim in the release body and in CHANGELOG.md pinned at that SHA.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.12
- **Half:** defect | **Confidence:** high

**What changed.** 'Fixed corruption of `config.json` by writing user config atomically, so a crash or a concurrent writer can no longer leave a truncated file that silently breaks settings persistence.' And: 'Fixed the CLI giving up on a slow OS keyring after one second and falling back to empty storage, which forced a re-login; it now waits five seconds, as every other keyring operation already did.' The first matters more than it reads: `config.json` is where 1.1.11 had just centralised plugin enablement, and a silently truncated config means your persisted policy stops applying without telling you. 1.1.13 continues the same cluster -- trajectory truncation destroying nearly all of a long conversation's history, unbounded conversation-database growth on every background wake, and transcript corruption when a background message raced context compaction.

**Operator consequence.** Upgrade, then verify your `config.json` and `settings.json` actually parse and contain what you expect -- a pre-1.1.12 crash may have left them truncated, and the symptom is your policy quietly not applying rather than an error. If you keep long-running or background-woken sessions, expect some pre-1.1.13 conversation state to be lost or unparseable and do not rely on those transcripts as an audit record.

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
