# Cross-check -- antigravity

Window: 2026-07-02 to 2026-07-27. 38 social claims adjudicated against
`harvest/antigravity.primary.md`. Verdicts: 5 confirmed, 10 partial, 2 refuted,
7 unconfirmed, 14 social_fact.

Antigravity CLI is closed source, so the changelog is the only evidence surface
there is, and the conversation about it turns out to be an echo of that surface
rather than an independent check on it. Every maintainer and official post in the
window **trails its own release page**, by six minutes for `1.1.0`, sixty-nine
minutes for `1.1.3`, thirteen minutes for `1.1.5`, seven hours for `1.1.6`, and
about 22.5 hours for the official account's `1.1.0` announcement. Not one post
predates a release. More consequentially, the posts are selective in a direction:
of the nine releases shipped in 25 days, five produced no maintainer or official
post at all -- `1.0.16`, `1.1.1`, `1.1.2`, `1.1.4`, `1.1.7` -- and those are
precisely the releases that loosened a control or admitted one had not been
binding. `1.1.0`'s review-first default was announced twice by the
maintainer and once by the official account; `1.1.1`, which two days later let the
`permission.allow` allowlist bypass that same gate, was announced nowhere. `1.1.4`,
which disclosed that headless runs had honored **no** persisted `settings.json`
policy at all, was announced nowhere. The answer to the sharpest question this
lane could ask -- did any practitioner hit the `-p` permissions gap in CI before
2026-07-18 -- is **no**. Not one post in the harvest, at any date, describes
headless behavior from the operator side. On the most consequential governance
defect of the window the closed-source changelog was ahead of the crowd, and the
crowd had nothing.

## The conversation knew first

**One case, and it is a partial.**

- Claim: `antigravity-oauth-block-user-report-2026-07-06` (@Teknium), posted
  2026-07-06T02:24:38Z, alleging that Google blocks Antigravity OAuth and Gemini
  CLI OAuth for some accounts.
- First primary receipt that Antigravity CLI gates accounts by eligibility at
  all: the `1.1.7` changelog, published 2026-07-26T00:43:16Z -- "Fixed print mode
  (`-p`) sending a prompt before the account-eligibility check finished, which let
  ineligible accounts bypass the check the interactive UI enforces."
- Interval: **20 days.**
- Receipt: https://github.com/google-antigravity/antigravity-cli/blob/2ae8126db826afb9477bb81f663294f8b5dff84e/CHANGELOG.md

What the receipt confirms and what it does not: it establishes that an
account-eligibility check exists, that the interactive UI enforces it, and that
ineligible accounts are a real category the product denies. It does not confirm
the "bans users" allegation, which stays unconfirmed and journal-only per the
charter. The bounded, publishable form is: a user reported being denied access on
2026-07-06; the vendor's own changelog first acknowledged an enforced
account-eligibility gate 20 days later, and did so only in a bug fix about a way
to bypass it.

Note also that the acknowledgement is doubly buried. It appears in
`CHANGELOG.md` in full, and in the more widely-read GitHub release body
**truncated** -- the release body stops at "...before the account-eligibility
check finished." and drops the clause "which let ineligible accounts bypass the
check the interactive UI enforces." The one primary that vindicates a
20-day-old social claim is the one an operator is least likely to read.

Nothing else qualifies. Every other confirmed or partially confirmed claim in
this file postdates its receipt.

## Divergences

1. **"Review-first out of the box" was true for 48 hours and is still the
   standing belief.** `antigravity-cli-1-1-0-shift-tab-modes-2026-07-08` and
   `antigravity-cli-1-1-0-line-level-diff-review-2026-07-08` are exactly right
   about `1.1.0`: the changelog and release body both state that `request-review`
   is the default execution behavior and "automatically pauses before file write
   operations to display an interactive, line-level diff preview (`f` shortcut)."
   Two days later `1.1.1` states: "Changed the default mode to respect
   `write_file` permissions allowlisted in `settings.json` under
   `permission.allow`, so pre-approved file writes no longer prompt for review."
   Three days after that, `1.1.2` extends allowlist inheritance to nested command
   substitutions, so an `echo` allowlist entry covers whatever `$(...)` inside it
   resolves to. Neither loosening was posted. The conversation's model of the
   product froze on 2026-07-08.
   Receipts: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.0 ;
   .../tag/1.1.1 ; .../tag/1.1.2

2. **A headless fix announced as a fix, refuted by the next release.**
   `antigravity-cli-1-1-3-headless-soft-deny-2026-07-16` accurately reports that
   `1.1.3` stopped headless `-p` runs "hanging or silently auto-approving tools
   that require a permission confirmation." Every itemized change in that post is
   verbatim from the changelog. But `1.1.4`, 48 hours later, states that headless
   runs only then began to "honor persisted `settings.json` policies, including
   `permissions`, file access, sandbox mode, auto-execution, and artifact review."
   Read together: on 2026-07-16 the maintainer announced a headless permissions
   fix that was sitting on top of total non-enforcement of the operator's
   permissions file in that same mode. The post is a receipt for what was said.
   It is not a receipt that headless governance worked, and the vendor's own next
   changelog says it did not.

3. **The disclosed-and-patched claim, applied to Antigravity, does not hold.**
   `antigravity-sandbox-escape-mechanism-summary-2026-07-22` says most disclosed
   sandbox issues are patched. Antigravity's only official evidence surface
   contains no remediation entry for the disclosed class anywhere in the 25-day
   window. In the same week it moved the other way: `1.1.6` (2026-07-24) grants
   read access to the system temporary directory "out of the box, resolved
   correctly per platform, so agents no longer trigger permission prompts when
   reading temporary files" -- a default-widening into a location that routinely
   holds credential caches and session tokens -- and separately fixes sandbox
   error reporting "so blocked actions are recorded even when the network proxy
   is disabled," which means sandbox denials had been going unrecorded in that
   configuration.
   Receipt: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.6

4. **Silence is the pattern, not an accident.** Mapping the nine in-window
   releases against maintainer/official posts:

   | version | published | posted on X | what it disclosed |
   | --- | --- | --- | --- |
   | `1.0.16` | 2026-07-02 | no | pre-tool hook empty-decision handling; fail direction unstated |
   | `1.1.0` | 2026-07-08 | yes (x3) | review-first default; `/fast` removed |
   | `1.1.1` | 2026-07-10 | **no** | allowlist bypasses the review gate |
   | `1.1.2` | 2026-07-13 | **no** | allowlist inherited by nested command substitution |
   | `1.1.3` | 2026-07-16 | yes (x2) | headless auto-approve; out-of-workspace writes auto-approved |
   | `1.1.4` | 2026-07-18 | **no** | headless honored no `settings.json` policy at all; `subagent: false` unenforced |
   | `1.1.5` | 2026-07-21 | yes | `/effort`, model slugs |
   | `1.1.6` | 2026-07-24 | yes (x2) | temp-dir read granted by default; sandbox denials unlogged |
   | `1.1.7` | 2026-07-26 | **no** | `-p` eligibility bypass; disabled plugins still ran hooks; partial compound-command prompts |

   Capability ships with an announcement. Correction ships without one. `1.1.3`
   is the single exception, and its post leads with rendering, clipboard, CPU
   cost, and `/codesearch` before reaching the permissions item.

5. **Config path drift.** `antigravity-cli-1-1-6-markdown-custom-agents-2026-07-24`
   places Markdown custom agents at `~/.gemini/config/agents/<name>/agent.md`.
   The `1.1.6` changelog confirms the Markdown `agent.md` format with YAML
   frontmatter fields `mainAgent`, `subagent`, `hidden`, `inheritMcp`, and
   `commandExecutionPolicy`, but does not state the path. If the maintainer's
   path is right, the successor product writes its configuration under the
   predecessor's dotfile directory -- a lead worth a local probe, not a receipt.

6. **Tier scope overstated.**
   `antigravity-community-tier-cutoff-guide-2026-07-24` extends the 2026-06-18
   cutoff to "individual Code Assist, AI Pro, and AI Ultra." The only primary
   text, the geminicli.com banner, names "Unpaid tier and Google One users." The
   `v0.52.0` shipped docs still instruct Google AI Pro and Ultra subscribers to
   sign in with their subscription account, and
   `antigravity-user-higher-limits-convenience-2026-07-26` reports higher limits
   on Google AI Pro working. The narrower claim
   (`antigravity-community-unpaid-tier-replacement-2026-07-24`) matches the
   banner almost verbatim and is confirmed; the broader one is not.

## Claim-by-claim

| claim_id | verdict | primary receipt | note |
| --- | --- | --- | --- |
| `antigravity-june-recap-async-subagents-2026-07-02` | partial | release train table (harvest) | June is out of window; the count of 11 cannot be checked. The in-window train (nine releases in 25 days, about a three-day cadence) corroborates the shape. Async subagents are corroborated indirectly by `1.1.1` nested-subagent relaying and `1.1.2`'s parallel-subagent data-race fix. |
| `antigravity-cli-1-1-0-shift-tab-modes-2026-07-08` | **confirmed** | https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.0 | `request-review` default plus `default` -> `accept-edits` -> `plan` cycling, verbatim. Post trails the release by six minutes. See Divergence 1: true only until 2026-07-10. |
| `antigravity-cli-1-1-0-line-level-diff-review-2026-07-08` | **confirmed** | `1.1.0` changelog / release body | "interactive, line-level diff preview (`f` shortcut) where users can review, accept, or reject individual code modifications before they are saved to disk", plus a dedicated create-file confirmation preview for `write_to_file`. |
| `antigravity-official-1-1-0-modes-ui-2026-07-09` | **confirmed** | `1.1.0` release body | Accurate but late: the official account trailed its own release by about 22.5 hours. |
| `antigravity-cli-1-1-3-headless-soft-deny-2026-07-16` | partial | `1.1.3` changelog; refuted in part by `1.1.4` | Every itemized change is verbatim. The implied conclusion that headless permission handling was sound is refuted 48 hours later by `1.1.4`. |
| `antigravity-cli-codesearch-command-2026-07-16` | partial | `1.1.3` changelog | `/codesearch` with aliases `/cs` and `/search` confirmed. Regex default, literal-match flags, and file globs are not in the changelog text. |
| `antigravity-cli-1-1-5-effort-model-pin-2026-07-21` | partial | `1.1.5` changelog | `/effort` and `--effort`, "stable, user-facing model slugs" accepted by `--model`, and a `model` option in custom-agent frontmatter defaulting to `inherit` are all confirmed. The status badge and slug-beside-model-name presentation are not. |
| `antigravity-gemini-3-6-flash-live-maintainer-2026-07-21` | partial | `1.1.5` changelog | The `--model <slug>` invocation form is confirmed. Model availability, weekly quota reset, the 17 percent output-token figure, and pricing have no primary on any Antigravity surface. |
| `antigravity-official-gemini-3-6-flash-2026-07-21` | social_fact | none | Publishable as "Google claimed up to 17 percent fewer output tokens," never as the figure. No method receipt exists. |
| `antigravity-official-3-6-vs-3-5-modernization-demo-2026-07-21` | social_fact | none | Vendor head-to-head demo. A receipt that the comparison was made, not that it holds. |
| `antigravity-cli-1-1-6-markdown-custom-agents-2026-07-24` | partial | `1.1.6` changelog | Markdown `agent.md` with YAML frontmatter (`mainAgent`, `subagent`, `hidden`, `inheritMcp`, `commandExecutionPolicy`) confirmed. The `~/.gemini/config/` path, `/copy`, and streaming `/codesearch` are not in the changelog text. |
| `antigravity-agent-switch-auto-fork-2026-07-24` | unconfirmed | none | Auto-fork on mid-conversation agent switch appears in no changelog entry in the window. Maintainer-stated behavior; the post links antigravity.google docs, a surface outside the source contract. |
| `antigravity-community-gemini-cli-transition-link-2026-07-26` | partial | geminicli.com banner (gemini-cli harvest 10) | The transition is real for unpaid and Google One tiers. It is not a product-wide transition: `google-gemini/gemini-cli` cut three stable tags in the same window. |
| `antigravity-community-post-sunset-usage-shift-2026-07-26` | social_fact | none | Single-user adoption anecdote after the consumer transition. |
| `antigravity-community-gemini-cli-finished-ko-2026-07-26` | **refuted** | https://api.github.com/repos/google-gemini/gemini-cli | "Gemini CLI is finished" is contradicted by `archived: false`, `pushed_at` 2026-07-27, 35 in-window merges, and stable tags `v0.50.0`/`v0.51.0`/`v0.52.0`. The annoyance is a social_fact and publishable as such. |
| `antigravity-community-tier-cutoff-guide-2026-07-24` | partial | geminicli.com banner | Confirmed for unpaid and Google One. The extension to individual Code Assist, AI Pro, and AI Ultra has no primary, and the `v0.52.0` shipped docs still describe Pro and Ultra as eligible. |
| `antigravity-community-unpaid-tier-replacement-2026-07-24` | **confirmed** | geminicli.com banner | Matches the banner text almost verbatim: "Gemini CLI will be replaced by Antigravity CLI on June 18th" for "Unpaid tier and Google One users." |
| `antigravity-community-install-scripts-2026-07-24` | **confirmed** | README at `2ae8126db826afb9477bb81f663294f8b5dff84e` | `curl -fsSL https://antigravity.google/cli/install.sh \| bash` and `irm https://antigravity.google/cli/install.ps1 \| iex`, then `agy`, are the documented install paths. Worth pairing with the operator consequence: the README documents no checksum, signature, or version pinning. |
| `antigravity-sandbox-escape-research-roundup-2026-07-26` | unconfirmed | none | No Antigravity advisory exists; the repository has no security-advisory surface and no license. Needs the primary research. |
| `antigravity-sandbox-escapes-weekly-digest-2026-07-25` | unconfirmed | none | Count-specific. Antigravity-specific impact unverifiable from the only available surface. |
| `antigravity-sandbox-escape-mechanism-summary-2026-07-22` | **refuted** | `1.1.6` changelog (2026-07-24) | Scoped to Antigravity: "most disclosed issues are patched" is contradicted by the absence of any remediation entry in the window plus a same-week default-widening (temp-dir read) and the disclosure that sandbox denials were going unrecorded with the proxy disabled. |
| `antigravity-hyrax-sandbox-bypass-writeup-2026-07-22` | unconfirmed | none | Third-party writeup. Antigravity-specific scope and remediation not checkable against the changelog. |
| `antigravity-italian-press-sandbox-bypass-2026-07-23` | unconfirmed | none | Press amplification of the same cluster. Not independent evidence. |
| `antigravity-user-gemini-3-6-flash-impressions-2026-07-26` | social_fact | none | Adoption/quality discourse seed. |
| `antigravity-user-higher-limits-convenience-2026-07-26` | social_fact | none | Quota/UX anecdote. Useful counterweight to the AI Pro cutoff claim above. |
| `antigravity-multi-agent-terminal-farm-2026-07-26` | social_fact | none | Adoption pattern: Antigravity CLI running alongside Claude, Codex, and Grok. |
| `antigravity-user-totally-usable-2026-07-26` | social_fact | none | Minimal positive sentiment. |
| `antigravity-goal-gemini-3-6-quality-gap-2026-07-23` | unconfirmed | none | `/goal` appears in no in-window changelog entry. Feature and quality comparison both unchecked. |
| `antigravity-gori-mcp-install-agy-flag-2026-07-23` | social_fact | none | Third-party MCP installer added an Antigravity target. Ecosystem signal; verify against the gori project. |
| `antigravity-skills-certified-multi-platform-2026-07-26` | unconfirmed | none | Certification method not receipted. Marketing. |
| `antigravity-cloud-code-vs-antigravity-poll-2026-07-26` | social_fact | none | Market-positioning discourse. May blur the Antigravity IDE and CLI surfaces. |
| `antigravity-acp-support-question-2026-07-21` | partial | https://api.github.com/repos/google-gemini/gemini-cli | "Discontinued Gemini CLI" is refuted. ACP support status for `agy` is unconfirmed against the pinned changelog; verify at the linked issue. |
| `antigravity-stale-context-user-pain-2026-07-20` | social_fact | none | Freshness/context complaint. No mechanism claimed; no changelog entry addresses it. |
| `antigravity-all-the-time-negative-2026-07-21` | social_fact | none | Low-detail negative sentiment. |
| `antigravity-1-1-3-reply-quality-complaint-2026-07-16` | social_fact | none | Sentiment in the `1.1.3` reply thread. Notable only as the closest anyone came to reporting a defect before `1.1.4`, and it names none. |
| `antigravity-cli-token-cost-notebooklm-2026-07-25` | social_fact | none | Token-cost pain plus plugin/NotebookLM chatter. |
| `antigravity-forced-migration-ide-fatigue-2026-07-26` | social_fact | none | Migration friction. Mixes IDE and CLI surfaces. |
| `antigravity-oauth-block-user-report-2026-07-06` | partial | `1.1.7` changelog (2026-07-26) | An enforced account-eligibility gate is confirmed 20 days later -- see "The conversation knew first." The "bans users" allegation is unconfirmed and stays journal-only. |
