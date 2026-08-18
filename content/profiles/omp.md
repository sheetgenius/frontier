---
schema_version: bitter.frontier_profile.v0
profile_id: omp
label: OMP (Oh My Pi)
owner: can1357
source_contract: sources/omp.yml
homepage: https://omp.sh/
docs: https://omp.sh/docs
tagline: "A fork of Pi that outran the project it forked, publishing 17.x against upstream's 0.8x under the same package basename, with a language server and a live debugger wired in."
compared_with:
  - pi-coding-agent
  - openclaw
  - claude-code
repo: https://github.com/can1357/oh-my-pi
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-08-18
last_full_review: 2026-08-18
claims:
  - id: write-broker-in-unreleased-tags
    finding_id: 2026-08-17-omp-omp-tags-v17-3-6-and-v17-3-7-carry-an-extension-hook-that-brokers
    last_verified: 2026-08-18
    status: active
  - id: blind-approval-fixed-twice
    finding_id: 2026-08-17-omp-omp-s-always-ask-approval-prompt-opened-before-the-diff-rendered-fixed
    last_verified: 2026-08-18
    status: active
---

# OMP (Oh My Pi)

OMP is on this watchlist because of a relationship rather than a feature list.
Pi is already tracked here, OMP says in its README that it is a fork of Pi, and
the fork has outrun the project it forked in a way no operator can resolve from a
version string.

| | package | version |
|---|---|---|
| Pi | `@earendil-works/pi-coding-agent` | 0.84.2 |
| OMP | `@oh-my-pi/pi-coding-agent` | 17.3.5 |

Same basename, different scope, seventeen majors apart, both published in the
same week. This publication spent its 2026-08-03 issue on a release line
renumbered below its own predecessor. This is that failure mode from the other
direction, and an adjacent-tool entry could not carry the handling rule it needs.

## Where it stands, 2026-08-18

**Channel, and it is split.** Tags `v17.3.6` and `v17.3.7` exist with no
GitHub release behind them; the newest release and the npm `latest` tag are both
`v17.3.5`. Four install paths exist -- an install script piped to a shell, a
Homebrew tap, a global Bun install, and a Nix flake -- and on the day of this
review only the flake reached the newest tag. Name the path when you report a
version of this project.

**What is in those unreleased tags matters.** v17.3.6 adds extension hooks that
let a handler service a filesystem write or delete after the native path refused
it with a permission error. The mechanism is legitimate and guarded: the path is
symlink-resolved, an unresolvable destination is not brokered, and the issuing
session is identified. It is also a documented route by which an operating-system
denial becomes an extension-mediated allow, which makes the handler's allowlist
the real filesystem boundary for any host that registers one.

**Approval.** The always-ask prompt opened before large edit previews finished
rendering, so an operator was asked to approve a diff they could not see. Fixed
in v17.3.13, then reopened through a tool's wire-level alias and fixed again six
days later. Two fixes for one hole is a fact about the surface area, not about
carelessness.

**Capability.** The reason to read it closely is that it drives a language server
and a live debugger rather than only editing text, which is a genuine widening of
what a terminal agent operates. Hindsight memory and time-traveling rules load
behaviour from stored state, which is the shape of defect this publication keeps
finding elsewhere.

## Fork discipline

Findings are not laundered between OMP and Pi in either direction. A behaviour
observed in OMP is a fact about OMP unless the code path is shown to be shared,
and an upstream Pi change is not an OMP change until it lands in a tag OMP
publishes. The maintainer has stated publicly that the fork has not followed Pi
since around March; that statement is reported here as something he said, and it
is consistent with the divergence visible in the two version lines.

## What is unresolved

- Whether tag-ahead-of-release becomes this project's normal state or was a
  two-day gap.
- Whether the four install paths ever agree on a given day.
- Who operates the session relay, and what it retains.
- What the review gate is on a single-maintainer project carrying roughly 80,000
  lines of Rust, now that the pull-request vouch requirement is lifted on a
  stated trial.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0/), and this page says what was true on the
date at the top. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md)
for the evidence contract.
