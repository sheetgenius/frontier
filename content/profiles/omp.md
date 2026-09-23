---
schema_version: bitter.frontier_profile.v0
profile_id: omp
label: OMP (Oh My Pi)
owner: can1357
source_contract: sources/omp.yml
homepage: https://omp.sh/
docs: https://omp.sh/docs
tagline: "A Pi fork that ships daily, drives a debugger and your desktop from one eval cell, and lets the repository you just cloned set its approval policy."
compared_with:
  - pi-coding-agent
  - openclaw
  - claude-code
repo: https://github.com/can1357/oh-my-pi
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: repo-writes-policy
    finding_id: 2026-09-21-omp-a-repository-under-review-can-write-omp-s-policy-project-local-config-and-extensions-load
    last_verified: 2026-09-23
    status: active
  - id: approval-bypasses-18-2-1
    finding_id: 2026-09-21-omp-v18-2-1-closes-a-cluster-of-approval-bypasses-including-one-where-a-missing-context-resolv
    last_verified: 2026-09-23
    status: active
  - id: collab-view-link-could-steer
    finding_id: 2026-09-21-omp-collab-relay-sessions-a-view-only-link-could-steer-the-session-after-a-host-reconnect-fixe
    last_verified: 2026-09-23
    status: active
  - id: eval-orchestration-ungated-by-patterns
    finding_id: 2026-09-21-omp-eval-became-the-orchestration-surface-bash-patterns-still-does-not-gate
    last_verified: 2026-09-23
    status: active
  - id: tags-without-releases
    finding_id: 2026-09-21-omp-channel-tag-ahead-of-release-recurred-three-times-and-one-release-never-reached-npm
    last_verified: 2026-09-23
    status: active
  - id: install-paths-agree-18-2-8
    finding_id: 2026-09-21-omp-the-four-install-paths-agree-on-18-2-8-at-window-close-nix-unpinned-builds-9-commits-past
    last_verified: 2026-09-23
    status: active
  - id: stored-state-fixes-18-2-1
    finding_id: 2026-09-21-omp-stored-state-fixes-cross-project-hindsight-recall-on-move-config-yml-erasure-dotenv-leakag
    last_verified: 2026-09-23
    status: active
  - id: write-broker-in-unreleased-tags
    finding_id: 2026-08-17-omp-omp-tags-v17-3-6-and-v17-3-7-carry-an-extension-hook-that-brokers
    last_verified: 2026-08-18
    status: retired
  - id: write-broker-on-npm-17-3-7
    finding_id: 2026-08-20-omp-v17-3-7-released-the-write-fallback-hook-v17-3-6-still-has-no-release
    last_verified: 2026-08-20
    status: retired
    note: "Channel reading superseded. The write and delete fallback hooks are still in the extension API at v18.2.8; see repo-writes-policy."
  - id: bash-patterns-do-not-gate-eval
    finding_id: 2026-08-20-omp-bash-patterns-do-not-gate-eval
    last_verified: 2026-09-23
    status: active
  - id: blind-approval-fixed-twice
    finding_id: 2026-08-17-omp-omp-s-always-ask-approval-prompt-opened-before-the-diff-rendered-fixed
    last_verified: 2026-08-18
    status: active
stance:
  use_for: "Operators who want an agent that drives a language server, a live debugger, a browser and the desktop, and who run it only on repositories they wrote, on 18.2.1 or later, with eval set to prompt."
  avoid_for: "Opening any repository you did not write: project config and extensions load with no trust check, and the default approval mode is yolo. Relying on bash.patterns as a command boundary. Reusing a Pi extension's trust check as a guard under OMP. Any 18.x below 18.2.1 with approval policies, advisors or the Cursor provider."
  watch_next: "Any project-trust gate in a tagged release; an eval-specific pattern gate or a non-yolo default; a tag or release built from the omp2 Rust tree; whether release-less tags recur after 18.0.3; anything that lets an operator check the my.omp.sh relay's no-retention claim."
---

# OMP (Oh My Pi)

OMP publishes as `@oh-my-pi/pi-coding-agent`, and its README at every tag
still calls it a fork of Pi. The version strings stopped being comparable long
ago: OMP is at 18.x, upstream at 0.8x. The maintainer has said publicly that
the fork stopped following Pi around March. On the question an operator most
needs answered, what a cloned repository can do to you, the two now point in
opposite directions. Everything below was read from `can1357/oh-my-pi`. Where
Pi appears, the Pi file is named, and nothing about one is assumed of the
other.

## Where it stands, 2026-09-21

**Do not open a repository you did not write.** At 18.2.8 OMP's own
[extension types](https://github.com/can1357/oh-my-pi/blob/v18.2.8/packages/coding-agent/src/extensibility/extensions/types.ts#L508-L520)
say project settings and extensions "are already discovered and loaded
unconditionally," and `isProjectTrusted()` "always returns `true`." The
[approval docs](https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/approval-mode.md)
name `yolo` as the default mode and put project config above your global
config. So a clone's `.omp/config.yml` outranks your approval policy, and its
`.omp/extensions` load without asking. Those extensions can register handlers
that service a write or delete after the OS refused it, and from 18.2.1 can
rewrite a tool's arguments. The repository under review is also the one
writing the rules for reviewing it. Before running `omp` in any clone, read
`.omp/config.yml`, `.omp/extensions`, `.omp/settings.json`, and the
`omp.extensions` and `pi.extensions` keys in `package.json`.

The Pi angle is a trap. OMP
[rewrites `@earendil-works/*` imports](https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/extension-loading.md)
onto its own bundled copies. A Pi extension written to consult Pi's trust gate
runs against OMP's shim and is told yes. Upstream Pi, read at v0.87.0, does
have project-trust code. That is a fact about Pi. Under OMP, do not reuse a Pi
extension's trust check as a guard.

**The floor is 18.2.1.** Its
[release notes](https://github.com/can1357/oh-my-pi/releases/tag/v18.2.1)
close four approval bypasses on earlier 18.x. A tool run without an
execute-time context
[resolved to `yolo` with empty policies](https://github.com/can1357/oh-my-pi/pull/11400)
and now fails closed to always-ask. Advisor tools granted `write` or `bash`
ran them regardless of configured approval. Cursor bridge frames skipped the
grep policy, and its native `delete` removed files unwrapped. Read-only
subagents could be handed the process-running `hub` tool. The advisor and
Cursor items rest on the notes alone, and none got an advisory. The same
release
[stopped a view-only collab link from steering a session](https://github.com/can1357/oh-my-pi/commit/156093b9a1de550a553625f16517d180a330be4b)
after a host reconnect, when the relay reissued guest ids and the host kept
the old permissions. Treat any view link issued before 18.2.1 as a control
link. It also keeps Hindsight memory with its project after `/move`, where the
next prompt could recall from the previous client's memory bank, and stops a
malformed `config.yml` being overwritten with your broker tokens in it.

**Eval is where the authority went.** Since 18.1.7 and 18.1.9 one eval cell
can fan work out to pooled subagents, define tools in Python or JavaScript,
and drive the browser and desktop, which replaced their standalone tool
schemas. The
[approval docs at 18.2.8](https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/approval-mode.md#L72)
still say a `bash.patterns` deny does not apply to the same command run
through eval, and under `yolo` that call resolves to allow. A debugger action
other than a read requests `exec`, which `yolo` also allows. The deny list
guards the front door while eval uses the side one. Set
`tools.approval.eval: prompt` or `deny` if you rely on patterns at all.

**Collab links are credentials.** Sessions share through a relay at
`my.omp.sh` that the
[collab docs](https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/collab.md)
say is not distributed for self-hosting. Payloads are sealed with a key in
the URL fragment, and "possession of the link is the trust boundary." That
the relay "keeps no state beyond live connections" is a statement about a
closed service. A guest's prompt runs the host's tools under the host's
approval mode. `collab.autoStart` (18.1.20) can make every session host itself
at startup. Leave it `off`; `control` makes every session steerable by
whoever holds its URL.

**Channel.** Latest is
[18.2.8](https://github.com/can1357/oh-my-pi/releases/tag/v18.2.8), the 45th
release since 20 August, none a prerelease. At close, npm, Bun, Homebrew and
the install script all resolve it. Two caveats. The unpinned Nix flake builds
main, nine commits past the tag and still labelled 18.2.8, so pin
`github:can1357/oh-my-pi/v18.2.8`. And without Bun, the install script
downloads a binary and checks only that it starts. Prefer
[Homebrew](https://github.com/can1357/homebrew-tap/blob/d87d8fd178dee56003281181ac25aa4312bdcfa9/Formula/omp.rb),
which pins sha256, or npm. Tags are not releases here. v17.3.6, v17.4.3,
v17.4.4 and v18.0.2 have no release and no npm artifact, and
[18.1.7](https://github.com/can1357/oh-my-pi/releases/tag/v18.1.7) reached
GitHub and Homebrew but never npm. Report a version from npm, not from
`git tag`.

**The Rust rewrite is not what you install.** The `omp2` branch from our 23
August feature shares no history with 18.2.8, has been quiet since 4
September, and no release comes from it. The shipping line is TypeScript.
From 18.0.0 its README and package metadata name Stencil Labs, Inc.; the
`stencil-hq/omp` repository is not public.

## What is unresolved

- Whether OMP ever adds a project-trust gate, or keeps treating the working
  tree as configuration.
- What the `my.omp.sh` relay retains. Only the maintainer can answer, and the
  source is not published.
- What reviews a 1,294-commit release. Pull requests are still open to
  everyone "as a trial," and CONTRIBUTING asks authors to review every file
  their agent changed.
- Whether `omp2` ships, stalls, or quietly becomes the TypeScript line's
  successor under the same package name.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
or an earlier run named in the claims, and this page says what was true on the
date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
