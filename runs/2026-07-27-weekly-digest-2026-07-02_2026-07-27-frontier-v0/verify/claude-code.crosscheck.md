# Cross-check -- claude-code

Window: 2026-07-02 to 2026-07-27. Adjudicated 2026-07-27.

Inputs: `social/claude-code.raw.md` (35 claims) against
`harvest/claude-code.primary.md` (24 findings across 22 releases, `v2.1.199` to
`v2.1.220`, channel resolved from the published `stable` and `latest`
endpoints).

Governing rule: a post is a receipt for what was said, never for what is true.

The conversation did not get ahead of the Claude Code changelog once in 35
claims. Anthropic's own accounts announce on the same day the release publishes,
community accounts trail by days, and the product ships no source repository, so
there is no commit stream for anyone to run ahead of -- this lane buys no lead
time on this source. What it did supply is a summary where the vendor stopped
writing one: the official What's New digest ends at Week 29 and never covers
`v2.1.214` through `v2.1.220`, which is precisely the stretch holding the
permission-bypass batch, two worktree-escape fixes, the nested-subagent reversal,
and Opus 5. Into that vacuum the conversation put a limits-and-spend pain cluster
(nine of 35 claims), a set of plugin, course, and artifact claims that no primary
surface in the window mentions, and two confident assertions about permission
posture that the release notes contradict outright. It also, once, described a
real behavior change correctly and got the diagnosis exactly backwards: the auto-
mode file-edit prompts users started noticing around 2026-07-19 are `v2.1.214`
working, not `v2.1.214` broken. That one claim is the most useful thing the lane
produced on this source, and it needed a receipt to be readable at all.

**Verdict key.** `confirmed` -- a primary receipt supports the claim as bounded,
with any unbacked detail named in the note. `partial` -- the primary supports
part of it and a decision-bearing part must be narrowed or dropped. `refuted` --
a primary receipt contradicts it. `unconfirmed` -- no primary either way; still a
lead. `social_fact` -- the claim is about the conversation itself (sentiment,
adoption, stated intent, a public exchange); the post is the receipt for that and
for nothing else. Receipts cite the harvest section number plus the release tag
or probe; full URLs are in `harvest/claude-code.primary.md`.

Buckets: 1 confirmed, 6 partial, 2 refuted, 13 unconfirmed, 13 social_fact.

## The conversation knew first

Nothing on this source clears the bar cleanly. One qualified case, and the reason
there is only one is itself a finding.

**Qualified: the bundled `claude-api` skill. Post leads the only naming receipt
by 2 days.**

- Post: 2026-07-22, `@ClaudeDevs`,
  <https://x.com/ClaudeDevs/status/2080009531065852378>
  (claim `claude-code-managed-agents-subagents-cookbook-2026-07-22`), which names
  a built-in `claude-api` skill.
- Receipt: 2026-07-24, `v2.1.219`: "The bundled `claude-api` skill now defaults to
  Claude Opus 5 with a migration path from Opus 4.8."
  <https://github.com/anthropics/claude-code/releases/tag/v2.1.219>
- Interval: **2 days.**
- What keeps it qualified: "now defaults to" implies the skill predates the
  release, so the receipt confirms the skill exists without establishing that
  2026-07-24 was its first appearance. No earlier primary surface in the window
  names it. Treat as a lead confirmed, not a scoop.

**Why there are no others, and why that matters.** Three structural reasons, all
receipted. First, `@claudeai` and `@ClaudeDevs` are first-party: the Opus 5 thread
and the release that carries Opus 5 are the same calendar day, so the post is a
second publication channel, not advance knowledge. Second, Claude Code publishes
no source repository (harvest, "Method and channel resolution") -- there is no
`main` for the conversation to read early, which is the mechanism that produced
every genuine lead on the Codex side. Third, the community accounts in this set
are reactive by construction: they report symptoms after upgrades. The only lead
available here is over the *digest*, not the changelog, and the conversation took
it -- it was the running commentary on eight releases that Anthropic never
summarized. See Divergences for how well it did with that job.

## Divergences

**D1. The crowd's auto mode and the changelog's auto mode point in opposite
directions.** `claude-code-auto-mode-psa-less-risk-than-bypass-2026-07-20` urges
readers to turn auto mode on as bypass-with-less-risk. The receipts, in order:
`v2.1.208` (2026-07-14) notes that catastrophic removals such as `rm -rf ~`
wrapped in `$(...)`, backticks, or `<(...)` "now prompt under
`--dangerously-skip-permissions` and auto mode" -- so until that release they did
not. `v2.1.211` (2026-07-15) fixed auto mode overriding a `PreToolUse` hook's
`ask` decision for unsandboxed Bash. `v2.1.210` (2026-07-14) records that the
auto-mode permission classifier defaults to Sonnet 5 for external sessions.
`v2.1.218` (2026-07-22), two days after the PSA, moved the dangerous-`rm`,
background-`&`, and suspicious-Windows-path checks out of permission dialogs
entirely and handed them to that classifier, and stopped plan-mode-with-auto from
prompting on Bash the static analyzer cannot prove read-only. The direction of
travel across the window is auto mode absorbing decisions that used to reach a
human. The PSA describes it as the safe option in the same fortnight the product
made it structurally more bypass-like.

**D2. "Prompt injection near zero" against four injection repairs in the same
window, with no advisory.**
`claude-code-auto-mode-prompt-injection-defense-quote-2026-07-25` circulates a
near-zero efficacy figure for Auto Mode plus other defenses. The window's primary
record: `v2.1.205` (2026-07-08) stopped fabricated in-transcript approvals from
being acted on; `v2.1.210` (2026-07-14) hardened the Agent tool against indirect
prompt injection via content a subagent read, and fixed the `ultracode` keyword
opt-in firing on webhook payloads and relayed PR comments; `v2.1.211` (2026-07-15)
stopped tool inputs visually altering approval messages through bidirectional-
override, zero-width, and look-alike quote characters. Four injection-class paths
closed in eight days, every one as a changelog line, zero GitHub Security
Advisories published (harvest #24). The efficacy number has no published method,
and this source publishes no surface on which it could be checked. Adjacent
inversion worth carrying: Anthropic announced a Claude Security plugin beta on
2026-07-22, in a window where its own advisory feed stayed empty across eight
authority-repairing releases. OpenAI did the same thing five days earlier. Both
vendors shipped security as a product while publishing nothing through the
channel a patch process listens to.

**D3. The crowd called a fix a bug, and the fix is the story.**
`claude-code-auto-mode-still-prompts-file-edits-2026-07-26` reports that for about
a week auto mode has been constantly asking for file-edit permissions. "About a
week" before 2026-07-26 is 2026-07-19. `v2.1.214` published 2026-07-18 and
narrowed single-segment `dir/**` allow rules so `Edit(src/**)` matches only
`<cwd>/src` instead of every `src/` in the tree -- the release note says this
class of rule had been auto-approving writes to nested directories anywhere. The
prompts are the blast radius of an operator's own rules snapping back to what they
literally say. Anyone reading only the conversation would file a bug; anyone
reading the receipt would audit their allow rules, which is the action the release
note asks for.

**D4. Claude Code has a fast mode, and the complaint says it does not.**
`claude-code-slowness-vs-fast-mode-complaint-2026-07-26` says competitors "at
least expose a fast mode." `v2.1.219`, published two days earlier, documents fast
mode at $10/$50 per Mtok and states that `/fast` now applies to Opus 5 and Opus
4.8 -- and the phrasing "Opus 4.7 was removed from fast mode" establishes that
`/fast` predates the release, so the refutation holds on either channel. The
receipted explanation for feeling behind is different and better than the one the
post gives: at window close `stable` served `2.1.212` while `latest` served
`2.1.220`, eight releases and eight days apart, so an operator on the default
change-control channel genuinely did not have Opus 5, and did not have the
permission fixes either.

**D5. The version vacuum got filled from the wrong changelog.**
`claude-code-agent-sdk-and-cli-version-lockstep-2026-07-26` reports a stdin fix
for background tasks shipping alongside `v2.1.219`/`v2.1.220`. `v2.1.220`'s entire
release note is "Bug fixes and reliability improvements" (harvest #22), and no
Claude Code primary in the window mentions stdin. The detail is coming from the
Agent SDK's notes and being attributed to the CLI. This is what the Week 29 digest
cutoff produces: when the last eight releases have no editorialized summary and
the newest one is a single unauditable line, the conversation reconstructs the
contents from an adjacent package, and the reconstruction is not checkable.

**D6. Maintainer intent on review automation was reversed by the product two days
later.** `claude-code-bcherny-auto-mode-multi-agent-surfaces-2026-07-17` describes
automated code and security review defaults. `v2.1.215` (2026-07-19) reads in
full: "Claude no longer runs the `/verify` and `/code-review` skills on its own;
invoke them with `/verify` or `/code-review` when you want them." `v2.1.218`
(2026-07-22) made `/deep-research` manual-only as well. If the digest carries the
maintainer's framing without the receipt, it tells operators that review is
getting more automatic in the exact week it stopped being automatic at all.

**D7. `/checkup` was described by a maintainer and appears in no release note in
the window.** `claude-code-checkup-command-bcherny-2026-07-08` describes a
`/checkup` flow that cleans unused skills, MCPs, and plugins, dedups `CLAUDE.md`,
disables slow hooks, updates Claude Code, enables auto mode, and pre-approves
frequent read-only denials. None of the 22 releases from `v2.1.199` to `v2.1.220`
announces it, and the harvest cannot rule out that it predates the window because
there is no source repository to read. Carry it forward: if `/checkup` surfaces in
a later release note, this becomes a conversation-knew-first with a long interval,
and the interval is worth having.

**D8. Cost-driven routing advice meets a receipted credential leak.**
`claude-code-free-provider-routing-repo-claim-2026-07-25` promotes a third-party
repo that routes Claude Code traffic to free providers. `v2.1.203` (2026-07-07)
fixed background and agent-view sessions dropping a shell-exported
`ANTHROPIC_BASE_URL`, "which sent API keys to the default endpoint and failed with
401." Anyone who followed routing advice of this shape on a build older than
`2.1.203` and ran a background agent sent their gateway key to `api.anthropic.com`
before the 401 told them anything was wrong. The conversation's cost pressure and
the changelog's credential handling are the same story from two ends.

## Claim-by-claim

| claim_id | verdict | primary receipt | note |
| --- | --- | --- | --- |
| claude-code-life-sciences-hackathon-2026-07-02 | social_fact | the post itself | First-party event promotion naming Claude Code. Adoption signal only; no product or version content to check. |
| claude-code-creators-path-to-tag-2026-07-02 | social_fact | the post itself | Published conversation with named maintainers; the post is the receipt for the conversation. The Claude Fable 5 availability in Claude Tag is a separate product claim with no primary in this harvest. |
| claude-code-platform-api-rate-limits-raised-2026-07-02 | unconfirmed | none | Platform API quotas are not a Claude Code surface and appear nowhere in the release record. Do not let this migrate into a Claude Code session-limit claim; that is the exact conflation the limits cluster is already making. |
| claude-code-build-history-feature-page-2026-07-06 | social_fact | the post itself | Origin narrative. No capability content. |
| claude-code-checkup-command-bcherny-2026-07-08 | unconfirmed | none | No release from `v2.1.199` to `v2.1.220` announces `/checkup`. Absence here is not disproof -- Claude Code publishes no source repository, so a pre-window command is unobservable. See D7; flagged for the next window. |
| claude-code-fable5-access-and-weekly-limits-extension-2026-07-12 | social_fact | the post itself | First-party announcement of model access and a temporary weekly-limit uplift. The post is a receipt that Anthropic said it; no primary surface publishes enforced quotas, so it cannot be a receipt that the quota moved. |
| claude-code-usage-limit-pain-codex-comparison-2026-07-14 | social_fact | the post itself | Comparative quota experience, unfalsifiable by design. Cluster context only. |
| claude-code-free-course-agentic-loop-skills-2026-07-14 | unconfirmed | none | Third-party report of an Anthropic course. Not in the release or docs harvest. Confirm the URL before citing curriculum content. |
| claude-code-token-usage-cut-claim-2026-07-14 | unconfirmed | none | The ~90 percent figure has no disclosed method and no primary. Two receipted token-waste findings sit next to it and are not the same thing: `v2.1.208` fixed `/release-notes` "Show all" injecting the whole changelog into every subsequent request and cut transcript size up to 79x, and `v2.1.211` fixed a prompt-caching regression billing the trailing system block as fresh input on Bedrock, Vertex, Mantle, and Foundry. Cite those; drop the percentage. |
| claude-code-artifacts-mcp-connectors-2026-07-15 | unconfirmed | none | Artifacts appear nowhere in the Claude Code release record for the window. The claim may be about Claude artifacts rather than Claude Code; resolve the product boundary before it becomes a Claude Code capability line. |
| claude-code-creator-loops-not-direct-prompts-2026-07-16 | social_fact | the post itself | Second-hand quote, so the post is a receipt for the quoting and not for the saying. Keep attribution hedged until the original utterance is paired. |
| claude-code-paid-plan-limit-burn-complaint-2026-07-16 | social_fact | the post itself | Spend narrative. Publishable as conversation. |
| claude-code-bcherny-auto-mode-multi-agent-surfaces-2026-07-17 | partial | harvest #6, #7, #9 (`isolation: 'worktree'`), #22 and #12 (dynamic workflows, `workflowSizeGuideline`), #8, #13, #14 (auto mode), #17 and #19 (agent view) | Worktree-isolated subagents, dynamic workflows, auto mode for permissions, and the agent view all exist in the primary record. `/loop`, `/batch`, Desktop, mobile, and Tag have no receipt in this source's window. "Automated code/security review defaults" is contradicted two days later by `v2.1.215` -- see D6. |
| claude-code-setup-plugin-community-report-2026-07-17 | unconfirmed | none | No release or docs receipt for `claude-code-setup` or the `claude-plugins-official` marketplace slug. Repeated on 2026-07-25 by a second account, which adds circulation, not evidence. |
| claude-code-fable5-plan-access-followup-2026-07-18 | social_fact | the post itself | Restatement of the 2026-07-12 access and limits announcement. Same standing. |
| claude-code-kimi-code-cli-clone-claim-2026-07-20 | unconfirmed | none | Competitor claim, out of scope for this harvest. Belongs to an ecosystem lane, not a Claude Code finding. |
| claude-code-auto-mode-psa-less-risk-than-bypass-2026-07-20 | refuted | harvest #8 -- `v2.1.211`; harvest #14 -- `v2.1.218`; harvest #17 -- `v2.1.208`; harvest #7 -- `v2.1.210` | Refuted on its premise, that auto mode's guardrails are a strict superset of bypass's. `v2.1.211` records auto mode overriding a `PreToolUse` hook's `ask` decision for unsandboxed Bash. Under `--dangerously-skip-permissions` the hook is not consulted and the operator knows; under auto mode it was consulted and overruled, and the operator did not. `v2.1.218`, two days after the PSA, moved dangerous-`rm`, background-`&`, and suspicious-Windows-path decisions out of dialogs into a Sonnet 5 classifier. Not refuted: that some classifier is more than no classifier. See D1. |
| claude-code-paid-limits-unusable-complaint-2026-07-20 | social_fact | the post itself | Limits-pain cluster. Publishable as conversation only. |
| claude-code-desktop-ios-simulator-beta-2026-07-21 | unconfirmed | none | First-party beta announcement for a desktop surface this harvest does not cover. No CLI release note carries it. Beta scope, OS requirements, and plan gating all unchecked. |
| claude-code-pro-plan-single-prompt-limit-burn-2026-07-22 | social_fact | the post itself | Single-run anecdote. No quota specification is derivable from it. |
| claude-code-security-plugin-beta-2026-07-22 | unconfirmed | none | First-party announcement; no release note in the window mentions a Claude Security plugin, and what "scan" covers is unstated. Publish only alongside the receipted fact that the same window carried zero advisories and eight authority-repairing releases -- see D2. |
| claude-code-managed-agents-subagents-cookbook-2026-07-22 | partial | harvest #11 -- `v2.1.219` | The built-in `claude-api` skill is confirmed, by a receipt published 2 days after the post -- the one qualified knew-first above. The managed-agents cookbook and the managed-agents feature set have no primary here. |
| claude-code-trq212-design-frontend-workflow-2026-07-23 | social_fact | the post itself | Maintainer's stated experience. `/design` appears in no Claude Code release note in the window; the Claude Design and Claude Code product boundary is unresolved and should not be blurred in prose. |
| claude-code-opus-5-live-in-product-2026-07-24 | partial | harvest #11 -- `v2.1.219` | Confirmed: `claude-opus-5` as the default Opus model, 1M context, fast mode at $10/$50 per Mtok, `/fast` applying to Opus 5 and Opus 4.8, and the `claude-api` skill defaulting to Opus 5 with a migration path from Opus 4.8. Not in the release note: a high-effort default. Same-day post and release, interval 0. Channel caveat that belongs with any Opus 5 line: `stable` served `2.1.212` at window close, so this was not live for stable-channel operators. |
| claude-code-system-prompt-slim-doctor-trq212-2026-07-24 | partial | harvest #19 -- `v2.1.203` | `/doctor` is confirmed to exist: `v2.1.203` removed the startup "claude command missing or broken" warnings "in favor of `/doctor` and `/status`." The ~80 percent system-prompt reduction with no eval loss is a maintainer utterance and is structurally unverifiable through this lane -- Claude Code ships no source repository and publishes no eval. Carry it as intent, never as measurement. |
| claude-code-vs-codex-alternating-preference-2026-07-25 | social_fact | the post itself | Low-specificity sentiment. Cluster context only. |
| claude-code-free-provider-routing-repo-claim-2026-07-25 | unconfirmed | none | Third-party repo, user count and safety claims unverified. Pair with `v2.1.203`, which fixed background and agent-view sessions dropping a shell-exported `ANTHROPIC_BASE_URL` and sending API keys to the default endpoint -- see D8. Do not endorse. |
| claude-code-auto-mode-prompt-injection-defense-quote-2026-07-25 | unconfirmed | none | The efficacy figure has no published method and no surface to check it against. The receipted counterweight is four injection-class repairs in eight days (`v2.1.205`, `v2.1.210` twice, `v2.1.211`) and zero advisories -- see D2. Second-hand quote; do not attribute the number without the original post. |
| claude-code-setup-plugin-install-string-2026-07-25 | unconfirmed | none | Restates the 2026-07-17 setup-plugin claim with an install string. Corroborates circulation, not the plugin. Verify the marketplace slug before any install investigation. |
| claude-code-agent-sdk-and-cli-version-lockstep-2026-07-26 | partial | harvest #11, #12 -- `v2.1.219`; harvest #22 -- `v2.1.220` | The versions exist and the dates hold: `v2.1.219` published 2026-07-24, `v2.1.220` 2026-07-25. The stdin fix for background tasks appears in no Claude Code primary -- `v2.1.220`'s entire note is "Bug fixes and reliability improvements." Agent SDK versions are not in this source contract. See D5. |
| claude-code-compatible-fugu-ultra-interface-2026-07-26 | unconfirmed | none | Third-party compatibility claim about someone else's release. Not an Anthropic surface; "Claude Code-compatible" has no defined meaning in any primary here. |
| claude-code-auto-mode-still-prompts-file-edits-2026-07-26 | confirmed | harvest #2 -- `v2.1.214` | Confirmed as bounded: since roughly 2026-07-19, auto mode prompts for file edits it previously auto-approved. The receipt is `v2.1.214`, published 2026-07-18, which narrowed single-segment `dir/**` allow rules so `Edit(src/**)` matches only `<cwd>/src` rather than every `src/` in the tree. The behavior is the fix landing, not a regression. `v2.1.207` is a second contributing receipt: auto mode stopped reading `autoMode` from repo-resident `.claude/settings.local.json`. See D3. |
| claude-code-stop-hook-telegram-notify-2026-07-26 | social_fact | the post itself | User-shared hook configuration. The hook surface is amply confirmed elsewhere in the harvest (`DirectoryAdded` in `v2.1.219`, `PreToolUse` in `v2.1.211`, agent frontmatter hooks in `v2.1.218`), but this specific config is adoption texture, not a product claim. |
| claude-code-slowness-vs-fast-mode-complaint-2026-07-26 | refuted | harvest #11 -- `v2.1.219` | Refuted on the bounded factual assertion that Claude Code does not expose a fast mode. `v2.1.219`, published 2026-07-24, two days before the post, documents fast mode at $10/$50 per Mtok and `/fast` applying to Opus 5 and Opus 4.8; "Opus 4.7 was removed from fast mode" establishes `/fast` predates the release, so it existed on `stable` `2.1.212` too. The slowness experience itself remains a social fact. See D4 for the channel-divergence explanation the post was reaching for. |
| claude-code-open-source-skills-licensing-tension-2026-07-26 | partial | harvest, "Method and channel resolution" -- reproducible probe | The premise is confirmed by primary observation: `anthropics/claude-code` carries release tags, the changelog, and the issue tracker but no default branch with product code, which is why `main-unreleased` is not an observable channel for this source. The prior accidental open-sourcing anecdote and the skills reuse-licensing reading have no primary and stay journal-only; both are reputational and conduct claims. |
