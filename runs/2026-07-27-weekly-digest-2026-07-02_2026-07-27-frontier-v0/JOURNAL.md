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
