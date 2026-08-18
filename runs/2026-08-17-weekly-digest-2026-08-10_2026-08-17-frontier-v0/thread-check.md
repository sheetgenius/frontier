# Thread check, both catch-up windows

One question asked of everything in 2026-08-03..2026-08-17: does anything here
complete, contradict, or repair something a previous issue claimed? Recorded
including the answers that are "nothing".

## It corrects us

**The Paperclip profile says "the dormant npm line" and the line was never
dormant.** `content/profiles/paperclip.md` carries it twice, once in
`watch_next` and once as an open question about whether a dormant distribution
channel gets retired or left to rot. The canary lane has 1,058 tags running
continuously from 2026-03-17 to 2026-08-18, and the npm packument shows 1,110
canary publishes on the 2026.x line with no gap.

The cause is worth publishing alongside the fix, because it will recur. Those
tags live under slash-prefixed namespaces, and the flat repository tag listing
does not surface them. We read a listing that was structurally incapable of
showing the thing we then reported as absent. "Not in the listing I checked" was
written down as "dormant".

This goes to the corrections ledger, the profile line changes, and the general
rule it produces is: absence of evidence from an enumeration endpoint is not
evidence of absence until you have established that the endpoint enumerates the
thing you are looking for.

## It completes

**OpenHands passed 1.11.0 a second time, and nothing broke.** The 2026-08-03
issue led on a release line that had been seeded with an archived project's
history and was cutting on that number series, so a version marked Latest sorted
below a release three weeks older. The open question was what the automation
would do when it reached a number it had already published. It reached it on
2026-08-07 and the collision did not fire, because the second one carries a `v`
prefix and the first does not. The thing that saved it was a naming convention,
not a check.

**Omnigent's worktree_guard fix reached a tag in about ten hours.** The prior
window recorded it sitting on the default branch six days after a release. It
merged and shipped in v0.8.0 the same day. Recorded because carry-forward checks
that resolve well are the ones nobody writes down.

## It contradicts nothing, and that is the answer

**Omnigent's spend cap is still a downgrade gate rather than a hard stop.** The
policy module is byte-comparable between v0.7.0 and v0.9.0 apart from a lint
sweep that changes no semantics. The prior finding stands unchanged, and the
check is closed as confirmed rather than left open.

## It got worse

**Pi's ungated credential commands went from two to three.** The 2026-08-03
carry-forward asked whether the existing two were gated from the agent's own
shell tool. They are not, and a third now prints a live provider credential to
stdout. A carry-forward check can resolve in the wrong direction and this one
did.

**OpenClaw's workspace-boundary fix has now been beta-only for 21 days**, and
the stable line that moved during the catch-up moved without it.

## It rhymes across the two windows

The defect that opens the first issue -- an approval prompt that could be shown
less than what ran -- appears again in the second window in an unrelated
codebase, where the bytes approved and the bytes executed could differ. Two
products, two weeks, one shape. That is the sentence the first issue earns and
the second one pays off, and it is the reason these are two issues rather than
one: the pattern is only visible because the windows are separate.

Said once, forward-facing, in the second issue. Not as a section, and not as
penance.
