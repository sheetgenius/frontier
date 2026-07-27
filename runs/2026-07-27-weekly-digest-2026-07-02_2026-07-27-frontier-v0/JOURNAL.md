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
