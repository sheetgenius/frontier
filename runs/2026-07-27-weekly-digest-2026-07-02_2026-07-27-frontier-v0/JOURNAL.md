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
