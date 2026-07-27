# Journal: 2026-07-02..2026-07-27 mega-digest + X-native overhaul

Read CHARTER.md first. Append every meaningful decision here so a cold start
loses nothing.

## 2026-07-27

- Session opened. Window 2026-07-02..2026-07-27 (25 days), the longest the
  publication has run. Last published window closed 2026-07-01.
- Scope confirmed with the editor: one mega-digest plus an overhaul making the
  publication X-native. The conversation layer becomes first-class.
- GA4 restored ahead of the session (G-H0F0J0EBHP) with a CSP that actually
  permits it; the prior install was blocked by CSP and collected nothing.
- Hermes/Grok lane validated live: grok-4.5 over the X subscription, preflight
  green, one real harvest returned 21 well-formed leads.
- Launching wave 1 of the X sweep (tier-1 sources) in background.

## Context strategy for the long run

The `/loop` prompt is the one artifact that arrives uncompacted on every
re-entry, so it carries the full operating brief rather than a pointer to it:
goal and stop condition, the doctrine, the editor's definition of good, the
baseline versions the window advances from, and the hard-won operational facts
(hermes invocation, the bash 3.2 empty-array trap, the three CSP files that must
stay identical, UTC run-dir naming). CHARTER.md remains the authoritative long
form on disk; the prompt is the anti-drift copy that survives compaction.

Goal primitive set: the session runs against a named stop condition (digest +
X-native overhaul shipped green on the branch) with explicit anti-stall rules,
rather than an open-ended "make progress."

## Publishing unblocked; a production finding while verifying the deploy

Editor authorized merging to main freely: the publication is primarily for our
own consumption, open and public as funnel, low stakes on publishing. Publishing
is therefore now IN the goal, not a gate. Merged and pushed main (5189cf9),
carrying GA4, the Hermes/Grok lane, the humanizer skill, the 2026-06-24 X-social
run, and the ASCII hygiene sweep.

While verifying the deploy, found that frontier.bitter.sh serves NONE of its
security headers. `site/public/_headers` and `_headers.json` declare CSP, HSTS,
X-Frame-Options, Referrer-Policy, and Permissions-Policy; both files ship into
`dist/`; and the edge returns none of them on `/`, `/digests/`, `/about/`, or
`/rss.xml`. `/_headers` itself 404s, so the platform consumes it rather than
serving it, but does not apply what it declares. Response carries
`x-served-by: radicchio-static-interceptor` and `x-static-fallback: true`.

Two corrections to earlier claims in this session, both mine:

- The repo's security posture is aspirational, not live. `static-headers.test.mjs`
  only asserts the two declaration files agree with each other; nothing verifies
  the headers are served. Configured is not enforced.
- The claim that the previously removed GA tag "was CSP-blocked and collected
  nothing" is unsupported. With no CSP served in production, that tag would have
  worked, so historical data may exist in the property. The CSP widening shipped
  for GA remains correct and harmless, and becomes load-bearing whenever the
  platform starts honoring the file.

Queued as a follow-up, not chased now: ask whether Radicchio applies `_headers`
at all, and add a check that asserts served headers rather than file parity.

## Emerging thesis candidate: documented is not enforced

The Gemini CLI and Antigravity primary harvest returned a pattern sharp enough to
be the window's argument, and it is the natural successor to the channel-split
story the last three issues told.

"Released is not merged" asks whether the fix is in the binary you run. This
window asks a harder question: **the control surface an operator reads is not the
control surface that executes.**

Evidence so far, all receipted:

- Antigravity 1.1.4 (2026-07-18): headless `-p` runs did not honor `settings.json`
  permissions, file access, sandbox mode, auto-execution, or artifact review AT
  ALL. Every governance control an operator configured was inert in exactly the
  mode CI uses. That is the hard upgrade floor for unattended use.
- Antigravity hardened and loosened the same gate in two days: 1.1.0 made
  diff-review the default before writes, 1.1.1 let the allowlist bypass it.
- Antigravity 1.1.7's GitHub release body truncates its own changelog item,
  dropping the clause explaining that ineligible accounts could bypass a check the
  interactive UI enforces. For a closed-source tool the changelog IS the evidence
  surface, and its two official surfaces disagree with each other.
- Gemini stable runs structurally about two weeks behind its own security merges.
  A zero-click a2a-server RCE fix reached preview only; an ADC cleartext
  credential fix is in neither stable nor preview. On 2026-07-08 the stable was
  less patched than a preview published 46 minutes earlier.
- Gemini's shipped docs at the v0.52.0 tag still describe consumer auth as live,
  with a banner in future tense over a month after the service was discontinued.

Why it matters on the Amdahl lens: when the read surface and the run surface
disagree, human attention stops being spent on direction and starts being spent
re-verifying that the controls you configured actually bind. That is a pure
attention tax, and it is invisible until someone tests it.

Contrary evidence to hunt before committing to this: eve is the governance-first
counterexample and may show the opposite. Check whether any provider's documented
posture matched its runtime exactly, and say so if it did.

Note for the X lane: this thesis is exactly where social evidence earns its place.
Practitioners hit inert controls in CI long before a changelog admits it. Look for
posts reporting the headless-permissions failure, the maxSessionTurns truncation,
and Gemini preview-versus-stable confusion.

## The running story resolved, and it cuts against us

OpenHands broke its OSS freeze. Six open-source tags between 2026-07-06 and
2026-07-09 (1.9.0 through 1.11.0), draining the enterprise/ACP/sandbox backlog
that sat on main across two prior windows. The gap from 1.8.0 was 25 days 22
hours. CVE-2026-44681 (the unauthenticated authlib open redirect) shipped in
1.9.0, so it is no longer main-only, and self-hosters have a supported tag.

This publication spent three issues warning that self-hosters were stranded on a
frozen 1.8.0 while cloud tenants got patched, and framed it as a billing boundary
hardening into structure. It resolved. Report that plainly and prominently: a
warning that came good is exactly the kind of thing a publication is tempted to
bury, and burying it would be the dishonest move.

It also disciplines the window's thesis. "Documented is not enforced" stays the
argument, but the channel gap is demonstrably not permanent, so the piece must
not imply providers are on a one-way slide away from open channels. The honest
shape: the read-versus-run gap is the new problem; the merged-versus-released gap
is one a provider just closed under pressure.

Carry both. The counter-current is not a footnote, it is the evidence that the
lens is a question and not a verdict.

## The thesis is now cross-provider and overwhelming

Codex and Claude Code returned findings that turn "documented is not enforced"
from a suggestive pattern into the window's clear argument, receipted across four
providers.

Claude Code, and this is the sharpest case in the window: a batch of
permission-check bypasses was fixed in v2.1.214 on 2026-07-18. The rules that did
not bind include `Edit(src/**)` auto-approving a nested `dir/` anywhere in the
tree, a Windows PowerShell 5.1 bypass, Bash fd-redirect forms failing open,
commands over 10,000 characters running unprompted, zsh subscripts treated as
inert, `help` and `man` auto-approving, remote prompts proceeding before local
confirmation, and docker/Podman daemon-redirect flags. An operator who wrote
`Edit(src/**)` believed they had scoped write access to one directory. They did
not.

And the fix did not reach the channel most people run. At window close the
`stable` endpoint served 2.1.212 (2026-07-17) while `latest` served 2.1.220
(2026-07-25). Anyone on `stable`, the Homebrew cask, or the apt/dnf/apk stable
suite had none of it. Both gaps in one case: the rule did not bind, and the fix
that made it bind was not in the channel you install from.

Supporting, same pattern, other providers:

- Zero security advisories were published for either project in 25 days during
  which eight Claude Code releases fixed authority boundaries. Newest GHSA on
  anthropics/claude-code is 2026-06-25; openai/codex has one, from 2025. The
  advisory process fired zero times while the boundary was repeatedly repaired.
- Claude Code managed settings were auto-consented in non-interactive runs before
  v2.1.207: remote managed settings from `claude -p` or the SDK were recorded as
  consented without the consent dialog ever appearing.
- Worktree and directory isolation leaked three separate ways in eleven days
  (v2.1.210 git-mutating commands against the main checkout, v2.1.216
  `git -C`/`--git-dir`/`GIT_DIR` redirection, v2.1.217 uncanonicalized symlinked
  working directories).
- Codex rust-v0.145.0 silently rewrites the operator's exec policy file on first
  session start, stripping exact `allow` entries from `rules/default.rules`. The
  legacy engine was deleted, not deprecated.
- Codex's entire network-authority hardening wave is preview-only, in no stable
  tag, resolved by ancestry rather than date.

The shape of the argument: an operator's control surface is a set of promises
made in config files and docs. This window, at four providers, those promises
were not what executed, and in most cases nothing announced the discrepancy. No
advisory, no consent dialog, no note that your policy file was rewritten.

Editorial note on fairness: the harshest finding in this window is about Claude
Code, an Anthropic product, and the drafting agent is Claude. Report it exactly
as the receipts support, with no softening. The trust firewall is only worth
anything when it costs something. Same standard applies in the other direction:
do not sharpen it for show either.

Title candidates (must be an argument a reader could dispute): "The Rule You
Wrote", "Nobody Told You It Stopped Binding", "Configured, Not Enforced".
Leading candidate for the lede: `Edit(src/**)`, because it is one line an
operator actually types and believed was a boundary.

## The gun fired: eve, the governance-first counterexample, did not bind either

This is the evidence cutting against the house thesis that THESIS.md promises to
publish and that this publication has never once produced in eleven issues.

eve is the publication's standing counterexample: the platform-hosted,
human-in-the-loop-first vendor whose controls, we wrote in "Patched for Whom,"
were "the ones you could actually run." This window, inside that product:

1. A declined budget gate did not bind. 0.21.0 (2026-07-07) guaranteed a
   delegation tree "can never outspend the budget configured at its root."
   0.27.1 (2026-07-22) fixed the fact that declining a child's prompt let the
   parent retry that child against a fresh quota share. For fifteen days, "Stop"
   was a hiccup rather than a boundary.
2. Denied approvals rendered as successful. 0.26.1 (2026-07-20) made the dev TUI
   show rejected tool approvals as denied "instead of successful." The operator's
   only window onto the decision displayed its inverse.
3. Stale approvals could authorize. 0.25.0 (2026-07-17) states "a stale approval
   never authorizes the earlier tool call" as a new guarantee, which means it was
   not one before.
4. Approving did not run the tool. 0.24.2 (2026-07-14) fixed approvals from
   channels like Linear leaving a dangling call. The gate failed open in both
   directions inside a single window.

This kills the comfortable version of the story. The read-versus-run gap is not
self-hosters being sloppy while platforms are safe. It reached the vendor that
sells governance as the product. Any framing that lets platform-hosted
governance off the hook is now unsupported by our own receipts, and the previous
issue's axis needs revisiting rather than repeating.

## And eve also supplies the constructive answer

The same window, same vendor: 0.22.5 tightened `maxSubagentDepth` to 1, then
0.23.0 deleted the knob entirely and replaced it with a structural root-only
constraint. A governance-first vendor concluded that a tunable policy number was
worse than an architectural invariant.

That is the closing verdict the window has been asking for. If the problem is
that configured controls do not bind, the fix is not more configuration. It is
fewer knobs and more invariants: a control that cannot be misconfigured because
it is not a setting. Every case in this issue is a promise made in a config file
that the runtime did not keep. eve's answer is to stop making the promise in a
config file.

Other supporting material from this batch:

- eve 0.22.3 closed an RCE-class path where a `---js` frontmatter fence in a
  NETWORK-FETCHED OpenAPI spec was eval()'d. No CVE, no advisory, one patch-note
  bullet. Same silence pattern as Claude Code's eight authority releases.
- flue's marketing sells a product main deleted: flueframework.com still badges
  "1.0 Beta" and headlines Workflows, while main removed workflows entirely with
  no compatibility stubs and no replacement for code-first entrypoints
  (b814b82b, +60,306/-95,918). Plus a telemetry privacy inversion: trace content
  including prompts, tool arguments and results, and exception stacks is now
  captured by default, with "installing an instrumentation is the consent."
- heypi has the harvest's strongest enforcement contract (approvals fail closed,
  the audit write is a precondition for execution) but the identity half is
  advisory: omit both `admins` and `approvers` and any actor who can reach the
  approval UI may respond, with only a startup warning. Non-loopback admin binds
  were unauthenticated until 2026-07-21.
- eve's released-is-not-merged gap is essentially zero (main is 3 docs-only
  commits ahead of the last of 34 tags). Worth crediting explicitly: on the
  channel question, eve is the model.

## Editor's sequencing for the rest of the session

Recorded so the phases do not blur:

1. Coverage pass: thorough and meticulous. Finish all 14 sources on both lanes.
2. Editorial and presentation: write it, and build the X-native design.
3. Then REREAD everything and do synthesis properly: form a hypothesis and a
   high-level read of how these frameworks are unfolding and what it implies.
   Synthesis is a separate deliberate pass over the assembled record, not
   something assembled incrementally while harvesting.
4. Key players: begin tracking the people, not only the projects. @doodlestein
   (Jeffrey Emanuel, Agent Flywheel) is the seed; docs/doodlestein-agency-study.md
   is the existing precedent for person-level analysis. The X lane surfaces
   individuals naturally: maintainers, prolific builders, sharp critics. A
   publication that reads the conversation layer should know who is in it.

## Correcting my own entry above: the OpenHands freeze did not resolve, it reopened

Earlier in this journal I wrote that the OSS freeze "broke" and the running story
"resolved." That was premature and the digest must not repeat it.

What actually happened: the freeze broke on 2026-07-06 with 1.9.0, six tags
landed in four days through 1.11.0 on 2026-07-09, and then it closed again. No
OSS tag since 2026-07-09. `main` is 50 commits ahead of 1.11.0 while six cloud
tags shipped in the same period.

The mechanism is pinned, and it is the sharpest single artifact in the harvest:
PR #15217, "chore(main): release 1.12.0", has been open in DRAFT since
2026-07-09 with `mergeable_state=clean`, while cloud release PRs merged normally
throughout. The OSS release is not blocked on a problem. It is sitting there,
clean and mergeable, undrafted for eighteen days.

And the same shape recurred with a new advisory. vite CVE-2026-53571
(GHSA-fx2h-pf6j-xcff, HIGH, CVSS 7.5) is an unauthenticated arbitrary file read
that bypasses `server.fs.deny` through Windows NTFS `::$DATA` streams, exposing
`.env` files and TLS keys. Merged 2026-07-16, shipped in cloud-1.47.0 and
1.47.1, in no OSS tag. `frontend/package.json` at 1.11.0 pins vite 7.3.2, inside
the vulnerable range; cloud-1.47.1 pins 7.3.5.

Do not overclaim a correction where none is owed. On the authlib CVE the
previously published text said the fix "sits on main after cloud-1.40.0,
untagged," which the ancestry confirms. The new nuance is that OSS 1.9.0 was the
first tag on ANY line to carry it, about ten minutes before cloud-1.41.0, and it
was main-only for seven days rather than weeks. That complicates the
cloud-patches-first reading without contradicting what we printed. Say it as a
sharpening, not a retraction, and do not manufacture a ledger entry for it.

## The purest case of the thesis in the whole harvest

OpenHands' own docs still ship `docker.openhands.dev/openhands/openhands:1.8`
and call it "the most recent stable release." Last version bump was 6087832ee on
2026-06-10. A self-hoster following the official install instructions today
inherits every one of the 21 advisories that 1.9.0 closed.

That is "documented is not enforced" with nothing left to interpret. The document
is not merely out of step with the runtime; it actively instructs the reader into
a known-vulnerable build.

## Two counterweights, both worth crediting

- Agent Zero: `compare/v2.6...main` returns `status=identical`. Zero
  main-unreleased work, four tags in the window. On the channel question it is
  the cleanest source in the harvest, alongside eve (3 docs-only commits ahead of
  34 tags). Name them; the argument is stronger when it admits who is doing it
  right. Caveat to carry: v2.5 added secret masking and v2.6 deliberately
  narrowed it to API-key and login/password shapes, so non-credential-shaped
  values in `usr/.env` are no longer redacted.
- Paperclip: the harvest's most rigorous piece of verification. GHSA-x8hx-rhr2-9rf7
  is Critical (CVSS 9.6), a drive-by RCE via DNS rebinding against the default
  `local_trusted` mode. Rather than trusting advisory metadata, the researcher
  probed the source: `shouldEnablePrivateHostnameGuard` in `server/src/app.ts`
  was `authenticated && private` at v2026.318.0 (vulnerable, matching the
  advisory) and became `private && (local_trusted || authenticated)` at
  v2026.416.0. Fixed three months before disclosure. A Critical CVSS number that
  does not describe any shipping version is exactly the kind of thing this
  publication exists to check.

## Hermes and OpenClaw: the argument gets its sharpest single case

Hermes flipped approvals from human to model by default. PR #62661 sets
`approvals.mode: smart` for default configs; ancestry puts it in v2026.7.20
(2026-07-20) and not in v2026.7.7. Then within seven days Hermes merged the
policy override, the consecutive-denial circuit breaker, `approvals suggest`, and
the docker-daemon-redirect and recursive-rm detectors. Every one of those is
main-unreleased.

That is the line: **the release that flipped the default is the one without the
guardrails that were built for it.** An operator who upgraded to the current tag
moved their approval decision from a human to a classifier and did not receive
the circuit breaker, the override, or the detectors that make that safe. This is
the window's best Amdahl case too, and it points the opposite way from the
usual: the human gate was not overwhelmed, it was removed by default.

Hermes' egress firewall repeats the shape with a twist: #30179 merged
2026-07-04T20:29:24Z, was reverted by #58489 twelve minutes later, and the
REVERT is what shipped in v2026.7.20. It re-landed on main 2026-07-24. The
strongest sandbox credential-containment control Hermes has is in no tag.

OpenClaw supplies three more, and one of them is methodological:

- Its stable tag is not cut from main. v2026.7.1 points at 2d2ddc43d; the stable
  line forked from main on 2026-07-08T18:19:05Z and took 215 of its own commits,
  none carrying PR numbers. A PR merged to main on 2026-07-10 is NOT in a tag
  published 2026-07-13. Date reasoning gives the wrong answer here. This is the
  cleanest possible vindication of the house rule that channel is resolved by
  ancestry and not by date, and it belongs in the piece as evidence that the rule
  earns its keep.
- The GitHub releases page is a false view of what OpenClaw ships. `npm install
  openclaw` yields 2026.7.1-2, an untagged respin published 2026-07-18 with no
  git tag, no GitHub release, no notes and no gitHead; two respins went out 28
  minutes apart. Tags v2026.7.2-beta.4 and beta.5 exist with no GitHub release,
  and there is an undocumented extended-stable line at 2026.6.33. A harvest that
  trusted the releases API would have reported beta.3 and been nine days stale.
- A confirmed workspace sandbox escape is in no release on any channel. PR
  #113405 (merged 2026-07-27): `sub/up/../outside/secret.txt` with `sub/up -> ..`
  reads a planted sibling file while `assertSandboxPath` returns SUCCESS. The
  check says yes while the escape works, which is the thesis in one function
  call. Maintainers state it is defence-in-depth only and the TOCTOU window stays
  open, so report it at exactly that scope.
- Also a privilege escalation still not in stable after 13 days: PR #107403
  fixes channel-allowlist membership being treated as global command ownership,
  permitting owner-gated /allowlist and /config mutations, with a real
  before/after proof.

Backlog asymmetry worth a line: Pi has 2 commits unreleased, Hermes 1712,
OpenClaw 2110 on top of a stable line that forked mid-window.

## Fixed a defect in our own record

`sources/pi-coding-agent.yml` was watching `@mariozechner/pi-coding-agent`,
frozen at 0.73.1 since 2026-05-07, while the live package moved to
`@earendil-works/pi-coding-agent` (0.82.1). We were watching an abandoned name,
so the source read as static for eleven weeks and we missed the protobufjs fix.
Corrected the contract with a dated note explaining the miss.

This is worth saying out loud in the digest's uncertainty section rather than
quietly fixing. The publication spent this window documenting providers whose
stated surfaces did not match their shipping reality, and its own source contract
had the same defect. That is not an embarrassment to hide; it is the argument
demonstrating itself, and admitting it is what earns the right to make it.

## Session reframed: search and learning, editorial product as output

The editor is stepping away overnight and wants the session to run as an extended
orchestrated research effort, not a checklist. Charter updated with a standing
research agenda and a P0-P4 backlog deep enough that finishing any one item is
not a reason to stop.

The load-bearing question added to the agenda, because it is the entire
justification for the X lane: what did the conversation know before the changelog
admitted it? If practitioners reported a broken gate weeks before a release note
acknowledged it, that is the strongest argument this publication can make for
reading the conversation layer at all, and this window's material is unusually
well suited to answering it.

Sleep prevention active (caffeinate, AC power) so the loop survives the night.
The loop dies if the terminal session closes; nothing I can do about that from
inside.

## X sweep complete at 14/14; post cards rebuilt

All fourteen sources swept. Total social claims across the window: see
social/*.raw.md. eve and flue relaunched successfully after wave 2.

P1 design pass, first iteration. Rebuilt SocialPostEmbed.astro from a research
artifact into an actual post card. The design idea that makes it Frontier rather
than a screenshot of X: **where a real post shows likes and reposts, this shows
how far the claim has been verified.** The form is borrowed; the social proof is
replaced by evidentiary proof, which is the only kind this publication trades in.

Specifics: avatar monogram derived from the handle so no remote image is ever
fetched, name and @handle in the identity block, the X glyph as an inline SVG,
the post text as the visual hero at 1.09-1.14rem, and a status row across a
hairline rule carrying one of four tones -- confirmed (green), refuted (red),
open (bitter gold), context (muted). Confirmed and refuted also take a 2px left
border so the strongest verdicts are legible at a glance while scrolling.
Light and dark are both handled through the existing token system, with the dark
variants of the status colors lightened for contrast on the night ground.

Static by construction: no embed script, no remote avatar, no network call at
render time. It cannot leak a request to X and cannot violate the CSP.

Verified rendering in the built output on the 2026-06-24 X-social run page.

## Agent failure, routed around

The paperclip/agent-zero/heypi/agent-flywheel cross-check agent died mid-task on
an expired login before writing any output. Per anti-stall rule 2 this is logged
and relaunched rather than treated as a blocker. The other three cross-check
agents are unaffected and still running.

## P3: fixed the dangling profile reference; corrected my own claim about the jsonl

Repointed all 12 `RESEARCH_CONTRACT.md#profile` references across 11 profiles to
`METHOD.md#the-object-grammar`, which is where the profile object is actually
defined. That file was renamed to METHOD.md long ago and an earlier pass caught
only some of the footers, so eleven of fourteen public profiles cited a document
that does not exist. First flagged in the deep assessment weeks ago; now closed.

Correcting an earlier claim of mine in the process. I twice described
`data/frontier_signals.jsonl` as "dead" and queued it for deletion. It is not
dead. `site/src/lib/frontier.ts:392`, `site/scripts/check-integrity.mjs:27`, and
`site/scripts/og-cards.mjs:146` all read it, and its twelve records are the
earliest published signals, rendering as live pages (/signals/2026-05-06-worker-native-goals/
and siblings). Deleting it would have removed real pages from the site.

The right description is not "dead file" but "superseded input format still
serving the first two runs." Leaving it in place and noting it. This is the
second time this session that a confident claim of mine about the repo did not
survive contact with the code, after the security-headers case. Both were caught
by checking before acting, which is the argument for checking before acting.

## The "conversation knew first" hypothesis mostly FAILED, and that is the finding

The premise behind the X lane was that practitioners hit broken things before
changelogs admit them. Tested against 55 adjudicated claims on codex and
claude-code, it holds ONCE.

The single case: @thsottiaux posted 2026-07-13 that the GPT-5.6 Sol context limit
had been reverted from 372k to 272k after unintended usage drain. rust-v0.144.6,
published 2026-07-18, "corrected their context windows to 272,000 tokens." Same
number, same models, same direction, five days earlier, and the post explains a
change the release note only records.

Everything else fails, and the reason is structural: the tracker accounts post
2 to 7 minutes AFTER the GitHub release they summarize. The lane buys latency,
not foresight. On Claude Code the conversation never got ahead of the changelog
once, because Anthropic publishes same-day and there is no public commit stream
to run ahead of.

Do not bury this and do not stretch the one case into a trend. A negative result
honestly reported is worth more than a flattering one, and it forces the real
question: if the conversation does not know first, what is it actually for?

## What the conversation IS for, on this evidence

Three things, all receipted, and they are better than precognition:

1. **It is the only running summary when the vendor stops writing one.** Claude
   Code's What's New stopped at Week 29, so the conversation became the sole
   narrative covering v2.1.214 through v2.1.220. It filled v2.1.220's one-line
   release note with a stdin fix lifted from the Agent SDK changelog. When the
   official digest goes dark, the crowd writes the changelog, imperfectly.

2. **It reliably misinterprets, and the misinterpretation is publishable.** Users
   reporting since ~2026-07-19 that auto mode "still constantly asks for file-edit
   permissions" are describing v2.1.214 NARROWING Edit(src/**) to <cwd>/src. They
   filed a fix as a bug. The correct operator action is auditing allow rules, not
   waiting for a patch. A publication that reads both surfaces can say that; a
   reader watching only one cannot.

3. **It is confidently wrong in ways a receipt settles.** The 2026-07-20 PSA that
   "auto mode is mostly bypass permissions with less risk" is refuted on its
   premise by v2.1.211, which fixed auto mode OVERRIDING a PreToolUse hook's
   `ask` decision. Under the bypass flag the hook is not consulted and the
   operator knows; under auto mode it was consulted and overruled, and the
   operator did not. And a 2026-07-26 complaint that competitors "at least expose
   a fast mode" is refuted by v2.1.219 two days earlier documenting /fast, whose
   own note that Opus 4.7 was removed from fast mode proves the feature predates
   the complaint.

## The finding that reframes the whole issue

**Zero of 20 codex social claims mention any authority change.** Not the
rules/default.rules rewrite in rust-v0.145.0. Not the removal of "don't ask
again." Not denial text reaching the model. Not that the entire network-authority
wave is alpha-only.

The conversation talks about models, context windows, pricing, and features. The
changelog records authority changes without explaining them. Neither talks about
whether the control actually binds.

That is the unifying thesis for this issue, and it earns the publication's
existence in one line: the conversation covers capability, the changelog covers
shipping, and NOBODY is watching enforcement. Both vendors even shipped a
security PRODUCT this window (Codex Security plugin 07-17, Claude Security plugin
beta 07-22) while publishing zero security ADVISORIES across eight releases that
repaired authority boundaries.

Title candidates strengthen accordingly: "Nobody Is Watching the Gap",
"The Rule You Wrote", "Capability, Shipping, Enforcement: Pick Two".

## Note on a flagged subagent output

The harness flagged instruction-shaped text in the codex/claude-code cross-check.
It is benign: the string is a Claude Code CLI flag name quoted inside editorial
analysis comparing auto mode to bypass-permissions mode. Treated as reporting,
not as a directive. Worth remembering that any lane ingesting public text can
carry instruction-shaped strings, and the harness caught it correctly.

## The lede is found: Antigravity's selective silence

The strongest single artifact in the harvest, and it carries both halves of the
issue at once.

On 2026-07-16 @shengzheyao announced that Antigravity 1.1.3 fixed headless `-p`
runs "silently auto-approving" permissioned tools. Two days later, 1.1.4
(2026-07-18) states that headless runs only THEN began honoring persisted
settings.json policies "including permissions, file access, sandbox mode,
auto-execution, and artifact review."

So the 07-16 announcement sat on top of total non-enforcement in that exact mode.
The vendor's own changelog refutes the vendor's own X post, 48 hours later.

And 1.1.4 got no post at all.

That is not an isolated omission. Five of nine Antigravity releases in the window
produced NO maintainer or official post: 1.0.16, 1.1.1, 1.1.2, 1.1.4, 1.1.7.
Those five are precisely the releases that loosened a control or admitted one had
not been binding. 1.1.1 let the allowlist bypass diff-review. 1.1.4 admitted
headless honored nothing. 1.1.7 truncates its own changelog clause about
ineligible accounts bypassing a check. Meanwhile every release that hardened
something got a post within minutes to hours.

Whether that is deliberate or simply the ordinary gravity of good news traveling
faster does not change the operator consequence, and the piece should say so
plainly without imputing motive: **an operator following the vendor's own X
account sees the hardening and never the loosening.** The cross-check file holds
the timing table.

This is the lede. It is one concrete case, it contains a reversal, the cost is
visible inside it, and it earns the window's argument without needing to be told.

## Two more findings that sharpen the frame

The conversation is blind to release-channel asymmetry. Zero of 24 OpenHands
claims mention the OSS tag freeze, the draft release PR #15217, the install docs
still pointing at 1.8, or CVE-2026-53571 being cloud-only. Combined with zero of
20 codex claims mentioning any authority change, the pattern is consistent across
providers: the crowd tracks capability, never channel, never enforcement.

A structural rule falls out of it, worth stating as method: with no OpenHands OSS
tag after 1.11.0 (2026-07-09), every "OpenHands shipped X" claim dated later is
false on the open-source line BY CONSTRUCTION. That silently reclassifies five
claims in the set, none of which carried a channel qualifier. The sharpest
instance is @repojournal reporting a real fix as "v1.37.1," a version that does
not exist on the OpenHands line.

Counterweight for fairness: on Gemini the conversation was RIGHT and the docs were
wrong. @codewith_ahsan named the exact 2026-06-18 consumer cutoff and the
Antigravity replacement on 2026-07-09; the first in-product receipt is PR 28304 in
v0.52.0 on 2026-07-22, thirteen days later. And authentication.mdx at that tag
still lists consumer free-tier eligibility, so X has been more accurate than the
shipped versioned docs for over three weeks. When the docs rot, the conversation
is the better source. Say it.

## Digest published, and immediately owed a correction

Shipped "Assume the Rule Does Not Bind" at 7623aac. Then the pattern-history
research landed and it corrects the piece's framing on its central question.

The finding: **permanent-but-newly-measured. Not emerging, not accelerating.**
Three receipts, each closing an easier answer:

1. The pattern is in issue one. Gemini CLI v0.41.0 shipped "workspace trust in
   headless mode" inside the 2026-04-22..05-06 window and Frontier reported it as
   a feature. It was a fix: before it, configured workspace trust did not bind in
   exactly the mode CI uses. The pattern predates the lens and we missed it.
2. This is the THIRD time it has led a digest. "The Policy You Wrote Wasn't the
   Policy You Had" (2026-06-03) has a body section titled "The enforcement gap"
   and a lede counting six ways across six makers. "Protected on Paper"
   (2026-06-23) has "The authority that didn't bind." A piece calling this new is
   refuted by its own back catalogue.
3. Normalized, the rate is FLAT and this window is the LOWEST since the instrument
   stabilized: 3.7 cases per 100 source-days against a peak of 11.7. The series
   from 2026-05-28 excluding briefs runs 11.7, 7.5, 4.3, 6.0, 3.7. What is unusual
   about this window is its size, 350 source-days, not its density.

The instrumentation caveat is the strongest single result and it must be in the
piece. The measured rate quadrupled in the exact cycle the instrument became
about nine times more sensitive, with the watchlist held constant: the 05-27 run
harvested 11 findings, the 06-03 run harvested 99 using 85 agents, and its own
audit says it "ran hot." That run produced the digest that first named the
pattern. The variable that moved was the instrument.

Deeper and worse: the pattern is only observable retrospectively, through the fix.
An unenforced control emits nothing. Every count is a count of vendor disclosures
we happened to notice. So **Claude Code carries the most rows because Anthropic
writes them down.** A vendor that ships the same bug silently scores zero. That
inverts the naive reading of the piece and has to be said plainly.

What IS new is the class of surface, not the frequency. Through June nearly every
case was a permission rule inside a running binary. This window adds failures of
the read surface itself: docs pinning a vulnerable image, a release body
truncating its own security clause, marketing selling a deleted subsystem, an
advisory channel silent across eight authority-fixing releases.

Prior art, so we stop inventing synonyms: incomplete mediation (Saltzer and
Schroeder 1975; CWE-638, CWE-424), CWE-693's ignored-mechanism branch, vacuity
(Kupferman and Vardi 2003, the only literature naming the operator's misbelief),
and fail-open (CWE-636). NOT TOCTOU for the general case, though the OpenClaw
assertSandboxPath case genuinely is TOCTOU, so it must not be used as the
counterexample. Not configuration drift, which presumes a binding that decayed;
here there was never a binding.

Also arXiv:2607.13718 (July 2026) independently documents Claude auto-approving
despite a "Needs approval" setting. That answers the reader who suspects we found
this because we went looking.

And a direct correction to my own draft: eve is CONFIRMATION, not revelation. It
had a Class A instance on 2026-07-01 and a flagged approval-surface caveat on
2026-06-17. The honest line is "survived a harder test," not "we discovered this."

Revising the digest now. Publishing first and correcting second is the right order
when the correction is this substantive; the alternative was sitting on a finished
piece for an hour.

## P4 done: the publication stopped shipping the failure it reports on

Confirmed the edge serves zero declared security headers on every path checked
(/, /digests/, /og.png, /rss.xml). Radicchio consumes public/_headers without
applying it; the file itself 404s, so it is being read as configuration and
ignored rather than served as content. The declaration files are correct. They
are simply not enforced.

I cannot fix the platform from here. What I can fix is the repository claiming a
control it does not have, which is precisely the defect this window's digest
spends four thousand words on. Added site/scripts/check-served-headers.mjs, which
fetches the live site and asserts the SERVED response against what
public/_headers declares, across four paths chosen to cover distinct handling (a
prerendered page, a nested route, a static asset, a generated endpoint) because a
platform can apply rules to one class and not another. Advisory by default,
--strict for a scheduled audit. Wired as `npm run check:served-headers`.

Also put a warning at the top of static-headers.test.mjs, since that file is what
a future reader would trust: everything it asserts is one declaration file
against another, which proves internal consistency and nothing about
enforcement. That is the vacuity case from the digest's own prior-art section,
sitting in our own test suite.

The site is not less secure than it was an hour ago. It is exactly as secure and
now honestly described.

## P2 shipped: the people layer exists

New public artifact type at /people/, seeded with @doodlestein (Jeffrey Emanuel).
Data in content/people/<handle>.md, loaders listPeople/getPerson in frontier.ts,
routes at /people/ and /people/<handle>/, styling deliberately plainer than a
provider profile because the subject is a person and the design should not
editorialize about them. Linked from primary nav and the About page's reading
guide.

The governing rule is stated on the page itself, not just in the run artifacts:
every link is a receipt for what a person SAID on the date shown, never a receipt
for what is true of any software. Where a statement can be checked against a
primary source, the check sits beside it and the primary source wins. No conduct
claims, no motive inference.

Two qualifications carried, both narrow and both receipted. He described ACFS as
free and open-source; the tagged LICENSE is "MIT with OpenAI/Anthropic Rider" and
withholds the grant from named parties, which is what OSD clause 5 excludes, so
the unqualified label does not hold against the license text. Stated as a bounded
observation about a document, with no opinion on enforceability or motivation.
And the posts describe main while the documented install delivers the June 26
tag, 73 commits behind, where the safe-mode sudo gap is still open.

The page's center is his own word: he called his file-reservation layer
"advisory." That is the most precise term anyone used about a coordination
control this window, offered unprompted by the person who built it, in a window
where we documented control after control that did not bind. Most of what the
field calls a guardrail is advisory in exactly that sense and almost nobody says
so.

Why this belongs in the publication rather than in a notebook: the digest argues
that nobody is watching enforcement. Emanuel is watching it, out loud, and using
the honest word. Tracking people is how you notice that.

## P3: eight profiles refreshed to the window

antigravity, claude-code, codex, eve, gemini-cli, hermes-agent, openclaw, and
openhands now carry last_updated and last_full_review of 2026-07-27. The digest's
findings propagate into the dated posture pages, so a reader who follows a link
from the issue into a profile no longer lands on a June read.

Verified myself rather than trusting the agents' reports: no new finding_id was
introduced in any of the four uncommitted files, so nothing dangles. The one
claims-block change flagged by an agent is exactly what it said it was, a
staleness qualifier appended to an existing gemini-cli note recording that the
skill path-traversal item was not re-verified this window and five stable tags
have shipped since. Carrying "open security exposure on stable" forward silently
would have been a false current reading. Good catch by that agent and the right
call.

Two profiles did the hardest work. eve now opens by naming our own correction
rather than burying it, and holds both truths: four gates that did not hold, and
the best channel discipline on the watchlist. It also argues something worth
keeping, that the count of fixes is the price of eve being legible rather than
proof it is worse than quieter vendors. openhands carries an explicit
self-correction that we framed the authlib fix as cloud-ahead-of-OSS when
ancestry shows OSS 1.9.0 was the first tag on any line to carry it. antigravity
went from a 5KB stub to 22KB, which it earned by being the window's lede.

## Operational lesson: do not run concurrent agents in one repo

Three profile agents working the same checkout collided in two ways. One ran
`git stash` to isolate a build failure and swept up two siblings' in-progress
work; it recovered everything and reported the incident honestly, and I confirmed
the stash list is empty and nothing was lost. Separately, concurrent `astro build`
runs against a shared site/dist produced missing-chunk errors on unrelated pages,
which look exactly like content defects and are not.

Both failures were recoverable and neither reached the published site, but the
pattern is clearly unsafe. Parallel research agents are fine: they read the world
and write to separate files. Parallel EDITING agents in one working tree are not.
Serializing the remaining six profile refreshes.

## P1 complete: one card design, used everywhere

SocialReceiptCards rendered its own grid -- kind label, byline, excerpt, summary,
why it matters, verification needed, status, tags, caveat, each as a labelled
field. It carried the data correctly and read like a spreadsheet of somebody's
posts. Two card designs for the same artifact was the real defect.

It is now a thin wrapper around SocialPostEmbed in a new `research` mode. One
card design across the publication: the post is the hero, the status line answers
how far the claim was checked, and the two fields a run page owes a reader that an
editorial embed does not (why it matters, what would settle it) sit beneath the
post in subordinate type rather than competing with it. Tags render as quiet
pills. Laid out as a feed at one measure, not a two-column grid: a grid of
quotations forces the eye to choose and makes short posts look like filler.

Verified on the 2026-06-24 run page: three cards render confirmed, four render
unverified, and the tones are visually distinct at a glance while scrolling.

That closes P1. The X presentation is now genuinely designed rather than bolted
on, and the same component serves editorial embeds and research surfaces.

## P3 profile freshness complete: all 14 current

paperclip, agent-zero, pi-coding-agent, heypi, flue, and agent-flywheel refreshed
by a single serialized agent. No stash, no reset, no concurrent builds, no
incidents. The serialization lesson held.

Verified independently rather than on report: zero new finding_ids across all
six, claims and posture_basis blocks byte-identical to HEAD in every file, all
fourteen profiles now at last_updated 2026-07-27, all ASCII clean, integrity
clean, build clean.

Every profile in the publication is now a current dated posture rather than a
June read wearing a July link. That closes the freshness half of P3.

Notable in this batch:

- paperclip resolves the canary-lane question as dead and carries the advisory
  arithmetic in full: Critical 9.6 against a condition fixed 97 days before
  disclosure, with the declared vulnerable range pointing at an npm line
  abandoned in March. It also names the two places authority EXPANDED, which is
  the fair counterweight to a profile that otherwise reads as vindication.
- agent-zero leads with the structural credit (compare/v2.6...main identical)
  before naming the subtraction nobody noticed: v2.5 added .env masking and v2.6
  narrowed it to credential shapes. Zero social hits for mask, redact, secret, or
  .env. The best-behaved project on the watchlist quietly removed a protection
  and the field did not register it.
- pi states our own defect plainly and once, without dwelling: we watched an
  abandoned package name and read Pi as static for eleven weeks.
- heypi corrects its own baseline in the first line ("It did not hold"), concedes
  the strongest enforcement contract in the harvest in full, and only then names
  the identity hole. That is the right order and worth keeping as a model.
- agent-flywheel links to /people/doodlestein/, so the person layer and the
  project layer now reference each other.

The artifact_version bump to 4 on agent-flywheel is correct convention: it
carries a dated revision footer, so the version should move with it.

## Corrections ledger: the eve reversal is logged

Checked whether the ledger records readings or only facts before deciding. It has
precedent for framing corrections: the Gemini entry logs "framed as prospective"
becoming "the consumer service was already discontinued," under kind other-fact
with verdict "under-called -> corrected." So a reversed reading belongs.

Entered the eve correction, which is the most consequential the publication has
made. Before: "the platform side was the one whose controls you could actually
run." After: four gates that did not bind, itemized with dates. The verdict field
carries the part that matters, which is that evidence complicating the reading
existed in our own record when we published it -- a comparable eve instance dated
2026-07-01 and an approval-surface caveat flagged 2026-06-17. We did not lack the
evidence. We drew the contrast too cleanly.

## The oldest digest: closing the item as a decision, not a fix

Third time this session a confident claim of mine did not survive checking, after
the security headers and the "dead" jsonl.

I have twice described the oldest digest as carrying internal "worker-native"
framing on the public surface. It does not. The prose is clean -- a grep for
worker-native, product framing, and pipeline vocabulary across the body returns
nothing. The string survives only in four signal IDs, and the titles those IDs
carry are ordinary reader-facing sentences ("Persistent goals move coding agents
beyond single sessions").

So what remains is the identifier layer, and identifiers are supposed to be
immutable. Renaming them would break permanent URLs, require rewriting the jsonl
and the digest's references, and buy nothing a reader would notice, because a
reader sees the title and not the slug. The earlier scrub already did the work
that mattered; I was reading its residue as unfinished.

Decision: leave the IDs. Item closed as considered and declined rather than
carried forward as debt. Removing it from the backlog.

## I published a broken build, and the fix is procedural not just textual

The eve ledger entry's verdict text contained "published: a comparable eve
instance," and an unquoted YAML scalar containing ": " parses as a nested
mapping. The corrections page failed to render.

The content error is trivial. The process error is not: I wrote the build and the
push into one chained command without gating the push on the build's exit code,
so a build that exited 1 was followed immediately by a push to main, which
auto-deploys. The corrections page was briefly unrendered on the live site.
Caught it in the same turn and fixed forward in a few minutes, since the content
was right and only the quoting was wrong.

Worth naming precisely because of what this publication just spent four thousand
words on. I had a control -- "validate before pushing" -- written into the
charter, the loop prompt, and AGENTS.md. It did not bind, because nothing
enforced it: the shell ran the next command regardless. A rule that lives in a
document and not in the mechanism is exactly the failure mode of the issue I
published tonight, reproduced by its author within the hour.

The fix is the one the digest recommends. Not a firmer intention: a structure
where the wrong thing cannot happen. From here, every publish is gated on the
build's exit status in the same command (`if [ $BUILD -eq 0 ]; then ... else do
not push`), which is how the corrected version above was published. Do not write
`build; push` as a sequence again.
