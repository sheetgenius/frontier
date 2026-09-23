# Exemplar pass ledger: deep cold read, 2026-09-23

Scope: every public artifact. That is 16 digests, 2 features, 21 profiles and 7
wire issues. Each was scored against the 13-point bar in
`.claude/skills/exemplar-pass/SKILL.md`, and against EDITORIAL.md's digest,
feature and profile bars. The read came first and the scoring second. No artifact
was edited.

Bar key: 1 title argues. 2 lede is a case. 3 receipts ride the words. 4 one home
per fact. 5 brief is a standfirst. 6 provider notes judge or die. 7 reader
vocabulary. 8 no template refrains. 9 uncertainty scoped. 10 severity without
sneer. 11 lens sharpens. 12 comparison earned. 13 pulse. Also P = profile bar:
a dated posture, not a notebook. F = feature bar.

## 1. Ranked worst-first

| # | Artifact | Grade | Fails |
|---|---|---|---|
| 1 | content/profiles/hermes-agent.md | D | P, 4, 9, 7 (contradicts itself on what is tagged) |
| 2 | content/profiles/agent-flywheel.md | D | P, 4, 9 (body built on a tag that never installed) |
| 3 | content/profiles/eve.md | D | P, 4 (current read gives advice the 09-21 issue corrects) |
| 4 | content/profiles/codex.md | D | P, 4, 7, 9 |
| 5 | content/profiles/claude-code.md | D | P, 4, 7 |
| 6 | content/profiles/openclaw.md | D | P, 4, 7 |
| 7 | content/profiles/flue.md | D | P, 4 |
| 8 | content/digests/2026-04-23_2026-05-07-frontier-rollup-expanded.md | D | 1, 4, 6, 7, 8, 11, 13, digest bar 2/4/7 |
| 9 | content/profiles/agent-zero.md | D | P, 4, 9 |
| 10 | content/profiles/openhands.md | D | P, 7, 4 |
| 11 | content/profiles/gemini-cli.md | D | P, 4, 7 |
| 12 | content/profiles/antigravity.md | D | P, 4 (listed as a bar exemplar in SKILL.md; it no longer is one) |
| 13 | content/profiles/paperclip.md | D | P, 4, 7 |
| 14 | content/profiles/pi-coding-agent.md | C | P, 4, 7 |
| 15 | content/digests/2026-05-12-weekly.md | C | 1, 6, 8, self-defence, known misfiling left in |
| 16 | content/digests/2026-05-13_2026-05-27-weekly.md | C | prime constraint (hindsight), 7, 8 |
| 17 | content/digests/2026-04-22_2026-05-06-frontier-rollup.md | C | 1, prime constraint (hindsight), 8 |
| 18 | content/digests/2026-08-17_2026-08-20-weekly.md | C | 4, 5, 6, 8, 3 |
| 19 | content/profiles/cursor.md | C | P, 7, 4 (conflicts with the digest on a date) |
| 20 | content/profiles/omnigent.md | C | P, 4 (open question answered above it, still listed open) |
| 21 | content/profiles/deepseek-harness.md | C | P, 4 |
| 22 | content/profiles/omp.md | C | P, 4 |
| 23 | content/digests/2026-05-28_2026-06-03-weekly.md | C+ | 4, 6, 8, 7 |
| 24 | content/digests/2026-06-04_2026-06-16-weekly.md | C+ | 4, 5, 6, 8, 7 |
| 25 | content/digests/2026-06-23_2026-06-24-weekly.md | C+ | 2, 7, 8, 4 |
| 26 | content/wire/2026-07-29.yml | C+ | 4, 7, 8, 10 |
| 27 | content/wire/2026-08-17.yml | C+ | 7, 8, self-reference |
| 28 | content/wire/2026-08-20.yml | C+ | 4, 7, 8 |
| 29 | content/digests/2026-06-16_2026-06-23-weekly.md | B- | 2, 4, 5, 6, 7 (listed as a bar exemplar in SKILL.md) |
| 30 | content/digests/2026-08-10_2026-08-17-weekly.md | B- | 5, 6, 7, self-defence, both halves thin |
| 31 | content/digests/2026-08-03_2026-08-10-weekly.md | B | 1 (gotcha streak), 5, 6, 7, 8 |
| 32 | content/digests/2026-07-01_2026-07-02-weekly.md | B | 8, 9 (self-defence in uncertain) |
| 33 | content/digests/2026-07-02_2026-07-27-weekly.md | B | 7, 8, self-defence (methods appendix in the issue) |
| 34 | content/wire/2026-08-10.yml | B | 7, 8 |
| 35 | content/wire/2026-08-03.yml | B | 8 |
| 36 | content/wire/2026-07-22.yml | B | 4, 7, 8 |
| 37 | content/features/2026-08-23-codex-the-body-not-the-pencil.md | B | F (length, shape), 8, 12 |
| 38 | content/profiles/github-copilot-cli.md | B | P (intake-state paragraph is stale), 7 |
| 39 | content/profiles/grok-build.md | B | P (same), 7 |
| 40 | content/profiles/heypi.md | B | 7; honest single dated posture (07-27, and 09-21 says no change) |
| 41 | content/digests/2026-06-24_2026-07-01-weekly.md | B+ | 2, 6, 8 origin, dash density (listed as a bar exemplar in SKILL.md) |
| 42 | content/digests/2026-07-27_2026-08-03-weekly.md | B+ | 7, 8, dash density |
| 43 | content/wire/2026-09-22.yml | A- | 7 (minor) |
| 44 | content/profiles/temporal-agent-harness.md | A- | minor |
| 45 | content/digests/2026-08-20_2026-09-21-weekly.md | A- | 3, 6, 8 (minor) |
| 46 | content/features/2026-08-23-oh-my-pi-without-the-pi.md | A | none material |

Surface-level defect noticed on the way: `content/digests/index.md` lists the
07-27 issue as "The Newest Thing You Can Install". The published title is
"Newer, Numbered Lower".

## 2. Defects, quoted, with rewrite direction

### The profile class (ranks 1-7, 9-14, 19-22)

These profiles share one failure. The 2026-09-21 cycle put a one-paragraph
"Where it stands, 2026-09-21" on top of each July body and left that body in
place. The Operator Read, the stance frontmatter (use_for, avoid_for and
watch_next, which render), the Open questions and the What to watch sections
still describe late July or 20 August. On most of these pages the dated current
read is under 100 words of a 2,300-3,300-word body. Where the old body and the
new paragraph disagree, the old body gives the current advice. Profile hygiene
blocks in six profiles say "The `claims:` block is unchanged from 2026-06-23",
yet each of those blocks now carries 2026-09-21 claims.

**profiles/hermes-agent.md (D).** It contradicts itself in adjacent paragraphs.
- Operator Read: "The smart-approval policy override, denial circuit breaker, and egress firewall this profile previously called untagged are ancestors of v2026.8.3 ... That sentence is retired."
- Next paragraph: "were all merged after the tag. None of them is in a release. **The binary that moved the decision off the human is the binary without the guardrails.**"
- Then: "It re-landed on main on 2026-07-24 and is still untagged."
- What To Watch: "Whether the smart-approval containment wave ... reaches a tag" and "Whether the egress firewall re-land is tagged." Both were answered at v2026.8.3.
- Also: "the in-window pin is v2026.8.18", and "1712 commits separate the newest tag from main". Current is v2026.9.21.
- Backstage vocabulary: "35 public claims about Hermes we adjudicated", "the set we harvested", "claims promoted from individual findings", "consolidated harvest and cross-check artifacts".
- Direction: rebuild the page around v2026.9.21 (GitSpawn fix floor, unlimited turn cap, computer-use approval fix). Collapse the July approvals story into one dated paragraph. Delete every retired "untagged" sentence.

**profiles/agent-flywheel.md (D).** The top of the page corrects the body, but the body was never revised.
- Top: "Earlier text on this page that treats v0.7.0 as the cut operators run is wrong on that point. The current tag is v0.9.0."
- Body: "**`curl | bash` against ACFS today installs the 2026-06-26 tree**", "It is still holding at `v0.7.0`", "switching modes is not remediation ... now a month older", "Did the next tag close the safe-mode gap? No, because there is no next tag."
- Tagline: "the loop you can install is a month behind the one its author describes."
- Backstage: "harvesting weekly", "this harvest did not enumerate", "Thirteen of the twenty-two harvested posts".
- Direction: re-read safe mode, the aliases and the Antigravity policy at v0.9.0 and state them as current. Keep the license, the repo-count and the method sections, which are durable. A person-adjacent page cannot leave a known-false install claim in its body.

**profiles/eve.md (D).** The current advice is advice our own newest issue corrects.
- Operator Read: "[`eve@0.39.3`] is the cut that makes `turnPolicy: queue` bind again ... If you set that field, 0.39.3 is the first tag that actually queues."
- The 09-21 digest says: "until 0.52.5, queued messages from different users ran as one turn under the last sender's authorization. Upgrade before relying on that advice."
- Also: "Status: ... The in-window pin is eve@0.42.0", and "Current capability state ... what follows is the state at `eve@0.27.6`". Current is 0.63.0.
- Watch: "Whether 0.39.3 actually queues on Slack and custom channels".
- Direction: lead with the 0.52.5 floor and the `auto()` model approver. Keep "eve deleted the knob" as the durable idea. Retire the per-release gate chronology to a single dated paragraph.

**profiles/codex.md (D).** It has three dated layers ("Where it stands, 2026-09-21", an Operator Read from 08-20, and "Earlier operator read (through 2026-07-21)"), and the bulk of the page is the third.
- "**Last material change: `rust-v0.149.0`, 2026-08-20. npm `latest` is 0.149.0.**" The page's own top says 0.155.1.
- "no `0.146` stable tag existed at window close ... Accept the alpha channel deliberately or treat Codex network policy as unhardened." 0.146.0 went stable on 07-29, per the 07-27 digest.
- Watch: "Whether a `0.146` stable tag lands".
- Tagline: "Guardian V2 is in 0.148.0."
- Backstage: "The source contract asked", "`surface_class` holds at `mixed_official_docs` ... two consecutive cycles with no semantics-heavy claim anchorable above `release_note` precision", "per-source harvest and cross-check artifacts". A visible relative path: "[METHOD.md](../../METHOD.md#the-object-grammar)".
- Direction: rewrite to 0.155.1. Cover the Guardian V2 default, the hotfix model change, and App Server as the only integration now that mcp-server is gone. Cut the July upgrade hazards to one line each, or retire them.

**profiles/claude-code.md (D).**
- "**Last material change: `v2.1.214`, 2026-07-18 ... At window close it was not in the `stable` channel.**" The top of the page says stable is 2.1.267.
- avoid_for: "At the 2026-07-27 window close `stable` served 2.1.212".
- Open question: "What is actually in `v2.1.220`?". Watch: "Whether `stable` ever receives `2.1.214`+".
- Hygiene: "The `claims:` block is unchanged from 2026-06-23." The block contains four 2026-09-21 claims.
- Direction: the current read is the server-side classifier default, the stable pointer that jumps, and the second GitSpawn path. The July permission-repair catalogue becomes one dated paragraph.

**profiles/openclaw.md (D).**
- avoid_for: "that fix is in no release on any channel". Body: "on every current OpenClaw release, on every channel, the workspace boundary is a hygiene measure". The top says the fixes shipped in 2026.8.1.
- "As of 2026-07-27, `npm install openclaw` gives `2026.7.1-2`". The stated latest is now 2026.9.5.
- Backstage: "consolidated harvest and cross-check artifacts", "the release-note evidence floor this profile uses", "`preview-or-beta`".
- Direction: the current trap is the `extended-stable` tag on 2026.7.35, which lacks the fix, plus 75 advisories in one day. Build the read around that.

**profiles/flue.md (D).**
- "**Flue published no tag and no release**", "Flue still publishes **zero GitHub Releases**", "`v1.0.0-beta.9` is still what an operator installs". The top says six stables to 2.1.0, released per package on GitHub.
- The whole "What you can still install" section describes beta.9.
- Direction: re-read at 2.1.0. Does the telemetry default still capture content? Does a deterministic entrypoint exist? Is the marketing site still wrong? Retire the July "main-unreleased" framing.

**profiles/agent-zero.md (D).**
- "**Is `main` safe to run?** Yes, and definitively: `main` is byte-identical to the newest tag. There is no unreleased-fix exposure on this project."
- The 08-10 digest reports a CVE-2026-4308 SSRF fix "undone by a refactor" across every stable tag from v1.19 through v2.8. The profile body never mentions it and still praises the release discipline. The top also says "The `ready` branch carries secret-substitution and browser fixes in no tag."
- "> **Current release**: `v2.6`". Current is v2.12.
- Direction: lead with v2.12 and the security ledger kept in place of advisories. Put the lost-and-restored SSRF fix where the channel praise now sits.

**profiles/openhands.md (D).**
- "As of 2026-08-20 the installable tag is v1.14.0". "Watch for a `1.12.0` tag, and count the days from 2026-07-09". The 07-27 digest reports the line renumbered to v1.x; v1.20.0 is current.
- Backstage: "This is the schema-shape question recorded in amendment-006", "the ancestry proof for that lives in the run's harvest", and visible finding IDs ("*Findings: `2026-06-23-openhands-channel-posture`.*").
- Direction: the current read is the Docker runtime being ignored before v1.20.0, and profiles becoming enforceable scopes. The 1.12.0 freeze story is history.

**profiles/gemini-cli.md (D).**
- "As of 2026-08-20, npm latest is v0.56.0". The stance watch_next asks when PR 28470 reaches stable. v0.57.0 carried it.
- "**Did the skill-path-traversal fix ... ever reach a stable tag?** This window's harvest did not re-check it". *Patched for Whom* already records it: "reached stable in v0.49.0".
- Visible internal paths and IDs: "see `sources/gemini-cli.yml#discovery`", "*Posture basis: `2026-05-07-gemini-reviewable-memory-and-trust`, ...*".
- Direction: the current read is that Google calls the tool deprecated and won't patch Plugin4Shell, alongside hardening-only stables. That changes the stance itself, from "reasonable enterprise choice" to "check the deprecation".

**profiles/antigravity.md (D).** SKILL.md names it as a bar exemplar. It is now a three-layer notebook.
- Operator Read: "Stay on 1.1.16 if you need the last documented cut." The top says: "Use 1.1.20 or later for the settings.json fix."
- "Governance Boundaries ... What an operator actually configures, as of 1.1.7".
- Direction: rebuild on 1.2.7 (three prompts loosened, three tightened, remote turns ignoring the permission mode until 1.2.6). Keep "The Mode You Could Not Watch" as one dated paragraph. Amend SKILL.md's exemplar list.

**profiles/paperclip.md (D).**
- "> **Current floor**: `v2026.722.0`". "As of 2026-08-20 the default install is still v2026.817.0". The top says 916.1, with a plaintext-credential fix that requires key rotation.
- "We searched all fourteen social files in this cycle's sweep for `advisor`, `CVE` ..."
- Direction: the floor is v2026.916.x plus key rotation, and new agents can hire agents by default. The 97-day Critical becomes one paragraph.

**profiles/pi-coding-agent.md (C).**
- "### 2026-08-22 The package you can install is still `v0.84.2` ... Do not install that branch." The top says the rewrite is tagged at v0.85.0 and npm is at 0.87.0.
- "The refusal still holds" is argued at v0.82.1, and the page never mentions the `AGENTS.override.md`-before-trust defect (08-03 digest).
- Backstage: "`sources/pi-coding-agent.yml` watched ...". Keep the confession, which is good ("it is the largest error in the record and it is ours"), but drop the path.
- Direction: re-read the refusal at the rewritten harness. The HarnessTax cost result belongs in the current read.

**profiles/cursor.md (C).**
- Tagline: "harvested from the changelog". Body: "The next harvest has to say which surface moved." ("At intake the changelog led with a 19 August 2026 entry").
- Where it stands: "OpenAI proposed ending Cursor's access to its models on 12 November." The 09-21 digest's uncertain list says "no primary source we found gives the date". Two artifacts disagree about one fact.
- "This is Claude Code's floor, not Codex's." A cold reader cannot parse this.
- Direction: settle the date question in one place, then write the operator read in plain words.

**profiles/omnigent.md, deepseek-harness.md, omp.md (C).** These are dated stacks. The newest section sits on top, which is better than the big profiles, but the retired facts below it are never retired.
- Omnigent, Open questions: "When an Omnigent policy and the wrapped harness's own permission system disagree, which one refuses? Still no public answer". The 09-21 section above it gives the answer: calls fall through to the harness dialog.
- DeepSeek: "Loopback binding is the entire access control". Since 0.1.2 the Web UI requires a login. It also still lists "Whether the public repository is a mirror" as unresolved, which 09-21 settled.
- OMP: the lead table still reads "Pi 0.84.2 / OMP 17.3.5". "Observation 17.4.2 is the next day." is ungrammatical and reads as backstage.
- Direction: keep one current section plus a short "Earlier" list. Delete answered questions.

### Digests and features graded C or D, plus serious B defects

**digests/2026-04-23_2026-05-07-frontier-rollup-expanded.md, "The Harness Leaves The Chat Box" (D).**
- Title (1): a trend label in Title Case, not an argument.
- Catalog, not argument (digest bar 4): "OpenClaw is the corrective ... Its fortnight is setup recovery, stale plugin repair, Discord voice behavior, Telegram reactions, WhatsApp identity mapping, OAuth labels, progress previews, chat drafts, install recovery, and group allowlists".
- Metaphor without mechanism (13): "OpenClaw the front door ..., Agent Zero the machine room, Paperclip the management floor, OpenHands the whole leased office."
- Taxonomy headings: "State becomes product", "The visible computer", "The control plane arrives".
- Methods footer (7, self-defence): "*How this was read: this is a commit-harvest window ... its v0 source contract defines no public commit stream ... until a release-note review.*"
- The only voices are two vendor announcements. There is no Operator Brief upgrade list, no provider notes, no closing verdict. It also covers nearly the same window as "What Shaped the Run".
- Direction: consider folding it into the 04-22 rollup as its eight-project appendix, or rewrite it around the Agent Zero browser case with one argument.

**digests/2026-05-12-weekly.md, "Governance Becomes Enforcement" (C).**
- Title (1) states a trend, not a claim a reader can dispute.
- Provider notes as changelogs (6): "**Claude Code (v2.1.139)** adds `settings.autoMode.hard_deny` ... The `continueOnBlock` option ... API key auth now disables Remote Control, `/schedule`, and claude.ai MCP connectors"; "**OpenClaw** ... Memory auto-promotion is now bounded ... Transcript reads are now streaming; peak memory ... dropped roughly 90%"; "**Pi coding agent (v0.74.0)** ... JSONC parsing for `models.json` is new".
- Known misfiling left in: "Workspace trust now enforces in headless mode". The 07-27 digest ("We filed it as a feature. It was a fix.") and EDITORIAL both call this a misfiling. The 04-22 rollup was corrected and this one was not.
- Self-defence: "We did not reproduce either. Both are single runs ... we are carrying them together because that is what the evidence actually looks like." Also: "Publishing only the one that agrees with this publication's own argument would have been the easier and worse choice." The whole section "One claim we are not making" is self-defence.
- Refrain (8): "It is there to be the last thing awake." The 05-28 issue has "If you are asleep, the rule is the only thing awake."
- Direction: retitle to the Hermes/Paperclip completion-gate argument. Correct the headless-trust line as a labelled correction. Cut the provider notes to one line each.

**digests/2026-05-13_2026-05-27-weekly.md, "Auto Stops Asking" (C).**
- Window truth (prime constraint): "What that announcement set in motion executed on June 18, when consumer Gemini CLI stopped serving requests ... Our issue for that window carries the day itself." And "a downgrade in another, and this publication has spent every issue since documenting which one." Both are post-window hindsight in a May issue.
- Backstage (7): "The cleanest 'what is the receipt?' answer this cycle", "**Flue (Tier 2; ...)**". The frontmatter comment reads "per amendment-005 decomposition guidance".
- Refrains (8): "Same primitive, three surfaces." (brief), "One idea, three doors", "three different doors, one idea."
- Misfiled reference: Hermes PyPI distribution and the `hermes proxy` feature sit under "Breaking changes, before you upgrade".
- Direction: remove the June 18 hindsight and end the Google section at the May 19 announcement and the objection. Retire the doors refrain.

**digests/2026-04-22_2026-05-06-frontier-rollup.md, "What Shaped the Run" (C).**
- Window truth: "Three months later Google's closed-source replacement fixed headless mode honouring no configured policy at all -- same vendor, same failure, in the successor product. That line is where *Rules Became Judgment* starts." The correction itself is legitimate ("That middle item is filed here as a capability and it is a repair"). The follow-on sentence is hindsight narrative that goes beyond the correction.
- Bar-1 anti-example in the body: "coding agents are becoming less like chat boxes and more like working environments". SKILL.md cites exactly this as the example of a non-argument.
- Refrain: "Four harnesses, four names, one function", "Five tools, five names for permission".
- Direction: keep the correction and cut the forward narrative. Retitle as a claim, for example about who decides what a goal remembers.

**digests/2026-08-17_2026-08-20-weekly.md, "The Classifier Is Off" (C).**
- Brief (5): the thesis runs four sentences. Upgrade entries are paragraphs holding several decisions each, for example the Codex entry: "... 381 commits in 0.148.0, 242 more in 0.149.0 ... Search configs for `untrusted` ... Config lockfiles are gone in 0.148.0. https://github.com/openai/codex/releases/tag/rust-v0.149.0". Bare URLs appear in seven of the eight watch items (3).
- One home per fact (4): the OMP 17.4.0 tokenizer break appears in the brief, "The gate moved three different ways", Breaking changes, and Provider notes. The Hermes "docs still say 50 and 3" appears in the brief, not_promoted and Provider notes.
- Refrains (8): "Shipped is not on. Merged is not shipped. Those two sentences are the whole brief." "Both can be true at once." "The gate moved three different ways". "The drought broke" appears twice.
- Duplicate quote and card of the same post back to back: `[[q:mitsuhiko-pi-dev-branch]]` then `<!--card:mitsuhiko-pi-dev-branch-->`.
- Provider notes as fragments: "**DeepSeek Harness.** rc.8. Still prerelease. Still a plugin gate."
- Direction: a three-sentence thesis, one decision per brief line, and every fact given a single home. Cut the refrain couplet.

**digests/2026-05-28_2026-06-03-weekly.md (C+).**
- One home (4): each brief upgrade line comes back as a 60-120-word paragraph in "Security advisories, before you upgrade". For example, the Claude Code 2.1.160-162 cluster appears in the lede, "The enforcement gap", the advisories and the provider notes.
- Refrains: "at least six ways this week, across six different makers"; "Four different shapes, the same underlying shift".
- Backstage: "**Flue (Tier 2; v0.8.1-v0.9.2)**", "the highest-consequence caveat this cycle".
- Filler (slop test): "The rest was plumbing, a Gemini CLI editor-spam-loop fix, MiniMax M3 support in OpenClaw, and OpenTelemetry tracing in Flue."
- Direction: collapse the advisories into the brief. Keep the lede and the closing couplet ("A rule you have written is a belief. A rule you have tested is a control.").

**digests/2026-06-04_2026-06-16-weekly.md (C+).**
- Refrain, verbatim across two issues: "which is the half of the frontier that decides whether any of the authority work above ever gets used" (line 297). 06-16 line 264 has "is exactly the half of the frontier that decides whether any of the authority work above ever gets used".
- Order error: "Gemini CLI's skill path-traversal fix, in the advisories above". The advisories are below.
- Watch items are abstractions, not evidence (EDITORIAL: "'Watch' is not an action until it names the evidence"). Examples: "The authority build-out is structural, not cosmetic ... Watch whether per-action consent is being replaced ..." and "watch whether Gemini CLI enters managed decline."
- Provider notes as changelogs: "**Codex (CLI 0.137.0-0.140.0, app 26.602-26.609, iOS 1.2026.153)** pushed computer use outward (CDP developer mode, Windows per-app controls, three new regions) ...". "Tier 2" appears again.
- Direction: keep the "theater" lede. Cut the advisories to a reference list. Rewrite the watch items as named evidence.

**digests/2026-06-23_2026-06-24-weekly.md, "Governance, Sold Separately" (C+).**
- Lede (2) opens on a category: "The interesting thing about an agent is not that it can act. It is who, if anyone, gets to say no before it does."
- Backstage (7): "joins the watchlist as the governance-shell calibration source", "3-point Show HN at first harvest", "we check again next issue", "**Flue (Tier 2; ...)**".
- One home across issues: the hunvreus burnout post is carded here and quoted in the 06-16 issue with the same framing ("He was releasing three projects at once" appears in both).
- Direction: open on the heypi approvals sentence ("approval does not make every tool call require approval"), which is the case. Strip the backstage terms.

**digests/2026-06-16_2026-06-23-weekly.md, "Protected on Paper" (B-; a SKILL.md exemplar).**
- Lede (2) opens on a definition: "A control can exist in three places that are not the same as your machine."
- One home (4): Paperclip v2026.618.0 is in the brief, the advisories and the provider notes. The Hermes campaign appears in the lede, the brief uncertain list, the advisories, "A caveat on the Hermes campaign" and the provider notes.
- Brief entries run to 80 words each with several decisions. A watch item opens "The release-channel gap is the story to track, not a one-window artifact".
- Direction: it keeps its title and closing couplet. Open on the Claude Code depth-cap case, and give each fact one home.

**digests/2026-08-10_2026-08-17-weekly.md, "The Gate Is a Plugin" (B-).**
- Self-defence: "An earlier draft of this issue said the Codex work was uninstallable. That was wrong and our own verification caught it". Also: "We are reporting that he said it, not promoting it into a product fact." And a section that justifies its own existence: "This is the reference half of the window, and it is the operator brief's business more than the argument's."
- Backstage: "we wrote one question into its source contract". not_promoted: "The carry-forward from two issues ago resolved ... Answered in the thread check rather than promoted".
- Thesis runs six sentences. "## Reference" is a taxonomy heading. Provider notes are one catalog paragraph.
- Direction: cut the draft confession and the self-justifying section. The "What became possible" half needs a real section; today it is only the AGENTS.md coda.

**digests/2026-08-03_2026-08-10-weekly.md, "You Approved Something Else" (B).**
- Provider notes (6, 7): "Agent Zero, Flue, eve, heypi, agent-flywheel and the two newest sources are covered in the run's findings." Also: "closing the carry-forward from the last issue".
- Refrains: "Both things are true at once, and that is the week." "That inversion is the week in one sentence." "the whole argument in a sentence". "Two other projects shipped the same lesson from different angles."
- Self-defence: "We should be careful here, because it is tempting to promote that into more than it is."
- Thesis runs six sentences.

**digests/2026-07-02_2026-07-27-weekly.md, "Rules Became Judgment" (B).** The lede and verdict are strong. One defect is serious.
- Methods appendix inside the issue (EDITORIAL "Ablate self-defence"): the section "What the conversation is good for" ("Of 55 claims adjudicated on Codex and Claude Code ... The lane buys latency, not foresight"). Also: "Hermes has zero fully confirmed social claims and 1,712 commits". Also: "We searched all thirteen social files". The footer reads "*This issue adds a public X sweep as a standing part of the cycle ... holds the harvest, the cross-checks, and the claims we declined.*"
- Refrain: "Same vendor. Same failure. Same mode of operation." It reuses the rollup's "same vendor, same failure".

**features/2026-08-23-codex-the-body-not-the-pencil.md (B).**
- F: 2,673 words against a 1,200-2,000 bar. It adds a "What we expect next" forecast section, which is not in the feature shape, and "Sixteen months, measured" is a stats catalog.
- Refrains: "Three moves, one design." "Three deletions, three different jobs". "Different projects, one emerging grammar".
- Comparison (12) is decorative: "[A fork of Pi is rewriting itself to escape its upstream]; [DeepSeek Harness makes the approval path a plugin]; Codex deletes its defaults and keeps its constraints." None of the three changes the Codex operator's read.
- Direction: cut to about 1,900 words. Drop the forecasts or move them to what_would_settle_it. Keep "They deleted the default rulebook and kept the walls."

## 3. Cross-archive defect classes

### Template refrains (bar 8)

- **"The window/week in one X"**: 07-01..07-02:101 "That is the whole window in one reply."; 07-27..08-03:90 "That is the window in one artifact."; 08-03..08-10:125 "That inversion is the week in one sentence."; 08-03..08-10:204 "the whole argument in a sentence"; 08-17..08-20:195 "Those two sentences are the whole brief."; 05-12:325 "That is the whole argument."; 07-02..07-27:142 "the whole argument compressed into one function call".
- **"Same X, N different Y" / "N things, one Z"**: 04-22 rollup:92 "Four harnesses, four names, one function"; 04-22:104 "Five tools, five names for permission"; 05-12:89 "Different teams, different architectures, one direction"; 05-13:56 "Same primitive, three surfaces."; 05-13:218,252 "One idea, three doors" / "three different doors, one idea"; 05-28:96 "six ways ... across six different makers"; 05-28:222 "Four different shapes, the same underlying shift"; 06-24:91 "Same wave, four different answers"; 07-01:173 "The four changes move human attention to four different boundaries"; 07-27..08-03:352 "four projects broke it in four different ways"; 08-17:198 "The gate moved three different ways"; Codex feature:46,75,215 "Three moves, one design", "Three deletions, three different jobs", "Different projects, one emerging grammar".
- **"Both can be true"**: 07-27..08-03:52,233 "those can both be true and mean different things" and "Both can be true and mean different things"; 08-03..08-10 thesis "Both things are true at once, and that is the week."; 08-17:261 "Both can be true at once."; 08-20..09-21:165 "Both statements can be true".
- **"The same lesson"**: 08-03..08-10:129 "Two other projects shipped the same lesson from different angles."; 08-10:135 heading "The same lesson, from two projects that were not in the argument".
- **"The half of the frontier that decides..."**, verbatim: 06-04:297 and 06-16:264.
- **"The last/only thing awake"**: 05-12:330 and 05-28:180.
- **"Merged is not shipped"** couplets: 06-16:403 "Merged is a place. Shipped is a place."; 08-17:195 "Shipped is not on. Merged is not shipped."
- **"Rated, patched, paid for, never announced."**: 07-02..07-27:286, repeated verbatim in wire/2026-07-29 (GitPwned take).
- **Advisory-feed refrain**: 08-03 "which is worth noting if you track advisory feeds to decide your own exposure"; 08-10 "If you track advisories to decide whether you are exposed"; 08-20..09-21 "an advisory feed would not have told you to upgrade"; also codex.md "a vulnerability feed would have told you nothing" and claude-code.md "a vulnerability feed showed nothing".
- **Wire "X half" / "not an agent story" / "Recorded because"**: 07-22 "Not an agent story, and that is why it is here."; 08-03 "Not an agent story on its face, and that is the point."; 08-20 "Not a harness changelog. It is the kind of item this lane exists to catch"; 07-29 "The capability half of the scaffolding story"; 08-03 "The capability half of the same week."; 08-10 "The mechanical half of the same argument."; 08-17 "The distribution half of the story"; "Recorded because" in 08-17 (twice) and 08-20.
- **Quote then card of the same post** (the reader sees one quotation twice): 07-01..07-02 (mikeyoon), 07-02..07-27 (antigravity-1-1-3), 08-03..08-10 (lydia-dsp-doesnt-check), 08-10..08-17 (mitsuhiko-inspired), 08-17..08-20 (mitsuhiko-pi-dev-branch).

### Gotcha-title streaks (EDITORIAL: "Four consecutive ones are a posture")

- May-July: "The Policy You Wrote Wasn't the Policy You Had" -> "Who's Allowed to Say Yes" -> "Protected on Paper" -> "Governance, Sold Separately" -> "Patched for Whom". That is four indictment-shaped titles in five.
- August: "Newer, Numbered Lower" -> "You Approved Something Else" -> "The Gate Is a Plugin" -> "The Classifier Is Off". Four consecutive. "Before the First Turn" breaks the streak.

### Recurring pipeline vocabulary on the public surface (bar 7)

- "harvest": in digests 06-23..06-24, 07-02..07-27 and 04-23 rollup; in 11 profiles (claude-code, codex, openhands, cursor tagline, agent-zero, antigravity, openclaw, agent-flywheel, hermes, gemini, paperclip).
- "carry-forward" / "promoted": in rendered not_promoted reasons (08-10, 08-17: "missed the stable promotion") and in bodies (08-03 "closing the carry-forward"; 08-10 "not promoting it into a product fact"; 08-03 "tempting to promote that").
- "Tier 2": 05-13, 05-28, 06-04, 06-16, 06-23..06-24. "calibration source": 06-23..06-24.
- "source contract": 08-10 digest; profiles deepseek, pi, antigravity, omnigent, codex. "amendment-005/006": 05-13 frontmatter comment, openhands.md.
- "adjudicated", "social files", "the sweep", "lane", "corpus", "check list", "intake": 07-02..07-27; wire 07-22, 07-29, 08-10, 08-17; profiles openhands, claude-code, hermes, paperclip, cursor, grok, copilot.
- Visible finding IDs and internal paths: italic "*Findings: `...`*" and "*Posture basis: `...`*" blocks in eve, openhands, openclaw, hermes, gemini, flue, agent-zero, pi. There is `sources/gemini-cli.yml#discovery` and `sources/pi-coding-agent.yml`, and `../../METHOD.md` relative links in 10 profiles.

### Provider notes that are changelog lists (bar 6)

- 05-12: every entry (Claude Code, OpenClaw, Paperclip, Agent Zero, Gemini, Pi).
- 05-28: Codex ("added named permission profiles with custom-config display, remote-exec API-key host registration, and an optional Face ID lock"), Hermes, OpenClaw/Paperclip/Agent Zero.
- 06-04: Claude Code, Codex, Paperclip.
- 06-16: Hermes ("iMessage via Photon, WhatsApp Cloud API, SimpleX, Raft"), OpenHands.
- 06-24: Paperclip, Antigravity, Codex.
- 07-27..08-03: Gemini ("shipped `v0.53.0` and `v0.53.1` stable and a `v0.54.0` preview line, while nightlies ran daily"), eve ("tagged more than a dozen times").
- 08-10: the whole section is one catalog paragraph.
- 08-17: Omnigent, Gemini, DeepSeek fragments.
- 08-20..09-21: count-as-judgment notes: "**Paperclip.** Six stables, and 292 canary tags.", "**Codex.** Fourteen stables.", "**Hermes Agent.** Seven stables.", "**eve.** 47 tags.", "**Flue.** Back after a quiet month, with changesets and per-package releases."

### Profiles that have become notebooks (profile bar)

Dated read layers are counted as the current "Where it stands" plus older dated Operator Reads or stacked sections. Body words exclude frontmatter. In the big profiles the current section is about 60-100 words, roughly 3 percent of the body.

| Profile | Dated layers | Body words | Current read contradicts body? |
|---|---|---|---|
| codex | 3 (09-21, 08-20, through 07-21) | 2,730 | yes |
| gemini-cli | 3 (09-21, 08-20, 07-27) | 2,922 | yes |
| hermes-agent | 3 (09-21, 08-20, 07-20/27) | 2,637 | yes, and within the body |
| openhands | 3 (09-21, 08-20, 07-27) | 3,103 | yes |
| eve | 3 (09-21, 08-20, 07-27) | 3,271 | yes (advice) |
| antigravity | 3 (09-21, 08-20, 07-27) | 2,720 | yes |
| paperclip | 3 (09-21, 08-20, 07-22) | 2,786 | yes |
| pi-coding-agent | 3 (09-21, 08-22, 07-27) | 2,481 | yes |
| deepseek-harness | 3 stacked "Where it stands" | 740 | yes (login, mirror) |
| omnigent | 3 stacked | 1,080 | yes (open question) |
| omp | 3 stacked | 789 | yes (lead table) |
| claude-code | 2 (09-21, 07-27) | 2,768 | yes |
| openclaw | 2 (09-21, 07-27) | 2,262 | yes |
| agent-zero | 2 (09-21, 07-27) | 2,768 | yes |
| flue | 2 (09-21, 07-27) | 2,266 | yes |
| agent-flywheel | 2 (09-23 correction, 07-27) | 2,296 | yes (correction banner) |
| heypi | 1 (07-27) | 2,426 | no; 09-21 digest says no change |
| cursor, copilot, grok | 1 + "at intake" paragraph | 305-389 | partly |
| temporal-agent-harness | 1 | 375 | no |

## 4. Where the conversation layer is thin

- **04-22 rollup**: two vendor posts and a vendor card. No practitioners on goals or memory.
- **04-23 rollup expanded**: zero cards. Two vendor quotes. It argues about "the operator" without quoting one.
- **05-12**: six quotes, all long-run or harness-comparison complaints. No builder on the Kanban or `/goal` gates the issue is about.
- **05-13..05-27**: Auto-mode-default-on is the headline and no operator who lived through the flip is quoted. The voices are about Gemini's retirement and skills bloat.
- **05-28..06-03**: no builder voice on skills-as-governed-state (Paperclip, OpenClaw workshop). The quotes are about cost and permission prompts.
- **06-04..06-16**: the authority build-out has no practitioner. Quotes cluster on Fable 5 vibes and the Gemini exit.
- **06-16..06-23**: no operator on the enforcement gaps (depth cap, Agent() rules). The heypi burnout card is reused from the next issue.
- **06-23..06-24**: the heypi argument has no heypi user. One relayed OpenAI-engineer clip is unsourced.
- **06-24..07-01**: zero cards. The channel-split argument is asserted about self-hosters without one self-hoster quoted.
- **07-01..07-02**: thin but adequate. There is no operator on background push-to-PR, the headline change.
- **07-02..07-27**: rich (16 quotes), but weighted toward prosecution, as EDITORIAL notes. There is no builder voice in "The scaffolding dissolved" beyond two operators.
- **07-27..08-03**: no Windows or OpenHands operator hit by the version-order break. No voice on the headline case at all.
- **08-03..08-10**: vendor-heavy (three Lydia posts). One critic. No operator who runs the classifier day to day.
- **08-10..08-17**: good maintainer exchange. There is no voice from anyone who installed a DeepSeek plugin, and none on the Agent Zero SSRF regression.
- **08-17..08-20**: five quotes. No voice on Agent Zero ACP or the browser (the "became possible" half). No operator who enabled Guardian V2.
- **08-20..09-21**: the strongest layer in the archive (20 quotes, builders and skeptics). Thin spots: no Hermes, OpenClaw or eve operator on the fix-routing section, and no OpenHands user on the Docker runtime being ignored.
- **Feature, Codex**: 10 of 16 quotes are OpenAI staff. There is no App Server embedder and no enterprise approver quoted on the review-routing decision.
- **Feature, OMP**: balanced, with both maintainers and operators on both sides. Optional: an extension author facing the port.

## 5. Current exemplars

1. **features/2026-08-23-oh-my-pi-without-the-pi.md.** It is the only artifact that follows its bar's shape end to end. The lede puts a receipted event in the first sentence. The thread is quoted in order with principals on cards. The tree is read separately. The dispute is settled line by line ("Zechner is right for the channel operators install, and the Bun that the rewrite is getting out from under is OMP's"). The action sits in one place, the lens answers both questions, and it closes on a couplet: "The fork is leaving the upstream. The name is staying."
2. **digests/2026-08-20_2026-09-21-weekly.md, "Before the First Turn".** The title is an argument. The lede is a no-model exploit with a fix date. It carries both halves on the same receipts: "The capability story of the month is subtraction" sits beside the pre-turn breaks. The lens earns its place ("the part worth building is the part the next model cannot absorb: the boundary, the installer, and the startup path"). It quotes builders and skeptics, corrects its own earlier advice, and ends on a verdict. Remaining flaws: count-only provider notes and bare URLs in the brief.
3. **digests/2026-07-27_2026-08-03-weekly.md, "Newer, Numbered Lower".** The case is a version number that went down. The reversal lives inside it ("Nothing here is concealed and nobody was careless"). It praises a real disclosure ("the disclosure is better than the defect is bad") and hits the right register on the spend cap ("You have set the point at which the work continues more cheaply"). The verdict resolves the title.

Profile-bar specimen: **profiles/temporal-agent-harness.md** is one dated posture, current and short, with every claim receipted, and it states "Dated, not evergreen". Every large profile should take this shape.

Bar amendment candidate for SKILL.md. Two of its named exemplars have slipped. "Protected on Paper" and "Patched for Whom" both open on a definition or category. The Antigravity profile is now a three-layer notebook. Replace them with the three above plus the Temporal profile. Consider adding a profile rule to the bar: "a dated update replaces the Operator Read and stance, it is not prepended to them."

## Iteration log

- 2026-09-23 iteration 1: profile class raised to the bar (ranks 1-7, 9-14, 19-22, 38-40). Bar amended with point 14.
- 2026-09-23 iteration 2: digest class raised (ranks 8, 15-18, 23-25, 29-33, 41-42). 11 corrections logged.
- 2026-09-23 iteration 3: enrichment across 14 issues, Codex feature, 7 wire issues. Remaining below-bar items: none known; next sweep should re-rank.
