# How Bitter Frontier works

Bitter Frontier is a weekly, receipted brief on the agentic-coding frontier: the
coding agents and the harnesses around them, read through one question. What
changed, and what does it cost the people who run these tools.

## The rule

Three commitments shape everything published here.

- **No claim without a receipt.** Every statement of fact links to a primary
  source (a changelog entry, a commit, a release, a pull request) that a reader
  can open and check.
- **No signal without a consequence.** A change earns your attention only if it
  changes what you should do: upgrade, re-audit, try, watch, or ignore. That
  consequence is read at two altitudes, the operator's (what to reconfigure or
  patch) and the frontier's (what just became possible, and who can now reach
  it), held to the same receipt discipline.
- **Released is not merged.** A fix on a default branch is not a fix in the
  binary you run. We resolve and state the release-channel status of every
  security-relevant change, because telling you that you are protected when you
  are not is the worst thing this publication could do.

## The objects

The publication is file-backed, built from small reviewable units, and the
distinctions between them are load-bearing.

- **Finding** is one source-backed observation of what changed, with its receipt.
  Most findings never go further.
- **Signal** is a finding we accept because it can change an operator's next
  action. Signals are far rarer than findings; the gap is the editing, and it is
  the point.
- **Digest** is the weekly synthesis across every watched provider, on a fixed
  shape: what changed, why it matters, what to try, what to watch, what remains
  uncertain. This is the thing to read.
- **Profile** answers "what is this tool right now," refreshed each cycle.
- **Run artifact** is the reproducible record of how a cycle was produced: what
  was read, what was found, what was accepted, how the receipts were verified.

A **source contract** sits behind all of it, naming where we watch a project and
what counts as evidence there.

## The voice

Source-backed, operator-first, skeptical, allergic to hype, and clear about what
it does not know. Not a release-note bot, not a vendor blog. When a change is a
marketing claim dressed as news, it says so. When something is uncertain, it
says that too.

## How to read it

Start with the weekly digest. It always runs the same five beats above, so you
can read top to bottom or jump straight to "what to try." Follow any claim's link
to its receipt if you want to verify it yourself. The profiles tell you where
each tool stands today; the run artifacts show the work.

## Who makes it

Bitter Frontier is published by [Bitter](https://bitter.sh), which builds
infrastructure for running AI agents in production. Bitter works in this space,
which is why it reads the field this way, and it keeps its own product out of the
analysis.

## Contributing

Corrections and coverage gaps are welcome as pull requests. The receipts are
open to everyone. The editorial judgment, what becomes a signal and what the
week's synthesis says, stays with the maintainers. See
[CONTRIBUTING.md](./CONTRIBUTING.md).
