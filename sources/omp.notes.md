# OMP (Oh My Pi) Source Notes

Added 2026-08-17. MIT, TypeScript with a Rust core, `can1357/oh-my-pi`, ~25.5k
stars and ~2.5k forks at intake, repo created 2025-12-31. Its own description:
"A coding agent with the IDE wired in." The README states plainly: "Fork of Pi by
@mariozechner." Landing copy claims 60+ providers, 31 built-in tools, 14 LSP
operations, 28 DAP operations, and roughly 80k lines of Rust.

## Why it is on the watchlist

Because of the relationship, not the feature list.

Pi is already tracked here as `pi-coding-agent`. OMP is what happens when a fork
outruns the project it forked, and it produces a naming collision an operator
cannot resolve from a version string:

| | package | latest |
|---|---|---|
| upstream Pi | `@earendil-works/pi-coding-agent` | 0.84.2 (2026-08-14) |
| OMP | `@oh-my-pi/pi-coding-agent` | 17.3.5 (2026-08-16) |

Same package basename, different scope, seventeen majors apart, both actively
published in the same week. This publication spent the 2026-08-03 issue on a
release line renumbered below its own predecessor, where anything sorting by
version rather than date read the newer release as a downgrade. This is that
failure mode from the other direction, and it is why OMP belongs on the
watchlist rather than in the adjacent index: an adjacent-tool entry cannot carry
a handling rule, and this needs one.

Note also that the README's fork link points at `badlogic/pi-mono`, the
pre-migration upstream. Pi's canonical repo is now `earendil-works/pi`. Both
sides of this pair have moved, and the public breadcrumbs have not caught up.

## What is checkable

- **The channels are already split.** At intake, tags `v17.3.6` and `v17.3.7`
  exist with no GitHub release behind them; the newest GitHub release is
  `v17.3.5`; npm `latest` is 17.3.5. The tag series runs ahead of what anyone
  installs. There are four install paths to choose between, and a finding must
  name which was used:

      curl -fsSL https://omp.sh/install | sh
      brew install can1357/tap/omp
      bun install -g @oh-my-pi/pi-coding-agent
      nix run github:can1357/oh-my-pi

- **Release velocity is roughly 1.3 per day.** v17.2.10 through v17.3.7 landed
  between 2026-08-06 and 2026-08-17. At that rate the changelog is the only
  tractable read, and the upgrade contract is the open question.
- **LSP and DAP are the capability story.** This agent drives a language server
  and a live debugger rather than only editing text. A workspace-level rename
  that propagates through re-exports before anything hits disk is a real
  widening of what a terminal agent operates. The corresponding question is what
  confines a debugger session, and whether it routes around whatever the tool
  permission layer would otherwise decide.
- **Hindsight memory and time-traveling rules load behaviour from stored state.**
  That is the exact shape of defect this publication keeps finding, most recently
  in the Gemini CLI a2a case where a guard read workspace trust from inside the
  workspace it was guarding. What writes that state, and whether a repository
  under review can write it, is worth a probe rather than a reading.
- **Relay sessions** put a live session behind a link and a QR code so a
  teammate can `omp join` or open it in a browser. Who operates the relay, who
  can join, and what it retains are unanswered.
- **Contribution policy is in flux.** PRs were vouch-gated; the README says the
  requirement is "temporarily open to everyone" as a trial. With ~1,500 open
  issues and one maintainer, the review gate on 80k lines of Rust is a fair
  question, but only becomes a finding when something concrete turns on it.

## Handling rules

- **Tier 2, weekly.** Do not promote on release velocity, and do not promote a
  feature merely because upstream Pi lacks it.
- **Do not launder findings between OMP and Pi in either direction.** A
  behaviour observed in OMP is a fact about OMP unless the code path is shown to
  be shared. An upstream Pi change is not an OMP change until it lands in a tag
  OMP publishes. `upstream_pi_behaviour_assumed_to_hold_in_omp` is in the
  contract's rejected evidence.
- **Say which one you tested.** With two live packages sharing a basename, "pi"
  alone is never an adequate referent in a finding or in public prose.

## Comparison set

`pi-coding-agent` first and always, since half the value of this entry is the
diff between them. Then `openclaw` and `claude-code` for the terminal-agent
bracket, and `openhands` for the version-ordering precedent set on 2026-08-03.
