---
schema_version: bitter.frontier_profile.v0
profile_id: agent-flywheel
label: Agent Flywheel
owner: Jeffrey Emanuel (Dicklesworthstone)
source_contract: sources/agent-flywheel.yml
homepage: https://agent-flywheel.com/
repo: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup
tagline: "A one-command VPS that installs three coding agents and the coordination loop around them, with the permission prompts switched off in either mode. Install v0.9.0; the maintainer says v0.7.0 never installed."
compared_with:
  - claude-code
  - codex
  - antigravity
  - heypi
x:
  maintainers:
    - handle: doodlestein
      name: Jeffrey Emanuel
surface_class: tagged_release_and_official_site
evidence_floor: tagged_release
status: active_watch
artifact_version: 5
first_published: 2026-07-02
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: v0-7-0-never-installed
    finding_id: 2026-09-21-agent-flywheel-v0-8-0-the-maintainer-states-v0-7-0-never-installed-v0-8-0-is-the-first-working-pinned-cut
    last_verified: 2026-09-23
    status: active
  - id: v0-9-0-holds-and-rollback
    finding_id: 2026-09-21-agent-flywheel-v0-9-0-per-tool-holds-smoke-checked-rollback-partial-failure-exit-codes-service-repair
    last_verified: 2026-09-23
    status: active
  - id: safe-mode-not-a-boundary-at-v0-9-0
    finding_id: 2026-09-21-agent-flywheel-carry-forward-safe-mode-is-still-not-a-boundary-at-v0-9-0-dangerous-aliases-unchanged
    last_verified: 2026-09-23
    status: active
  - id: bundled-agents-float
    finding_id: 2026-09-21-agent-flywheel-bundled-agents-still-float-codex-installs-latest-claude-from-the-upstream-installer
    last_verified: 2026-09-23
    status: active
  - id: main-codex-alias-and-plugin-approval
    finding_id: 2026-09-21-agent-flywheel-main-after-v0-9-0-codex-alias-re-pinned-to-gpt-6-astra-ubuntu-26-04-lts-paths-reviewed-plu
    last_verified: 2026-09-23
    status: active
  - id: changelog-and-cost-at-v0-9-0
    finding_id: 2026-09-21-agent-flywheel-contract-watch-items-changelog-records-versions-again-published-cost-figures-unchanged
    last_verified: 2026-09-23
    status: active
  - id: optional-ee-fmd-pi-pfr-on-main
    finding_id: 2026-08-20-agent-flywheel-optional-ee-fmd-pi-pfr-stack-on-main-no-new-tag
    last_verified: 2026-09-23
    status: retired
  - id: v0-7-0-intake-tag
    finding_id: 2026-07-02-agent-flywheel-v0-7-0-tagged-release
    last_verified: 2026-09-23
    status: retired
  - id: three-agent-vps-assembly-layer
    finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    last_verified: 2026-09-23
    status: active
  - id: dangerous-agent-shortcuts-shared-across-modes
    finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    last_verified: 2026-09-23
    status: active
  - id: passwordless-sudo-vibe-default
    finding_id: 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
    last_verified: 2026-09-23
    status: active
  - id: antigravity-always-proceed-wrapper
    finding_id: 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
    last_verified: 2026-09-23
    status: active
  - id: dcg-antigravity-hook-fails-open
    finding_id: 2026-07-02-agent-flywheel-dcg-hook-fail-open
    last_verified: 2026-09-23
    status: active
  - id: cost-model-self-reported-in-tagged-web-source
    finding_id: 2026-07-02-agent-flywheel-costs-pinned-web-source
    last_verified: 2026-09-23
    status: active
  - id: individual-account-repository-outlier-paper-scope
    finding_id: 2026-07-02-agent-flywheel-arxiv-solo-author-velocity
    last_verified: 2026-07-12
    status: active
  - id: license-rider-disclosure
    finding_id: 2026-07-02-agent-flywheel-openai-anthropic-license-rider
    last_verified: 2026-09-23
    status: active
posture_basis:
  capability:
    - 2026-07-02-agent-flywheel-v0-7-0-tagged-release
    - 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    - 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
  accessibility:
    - 2026-07-02-agent-flywheel-v0-7-0-tagged-release
    - 2026-07-02-agent-flywheel-costs-pinned-web-source
  governance:
    - 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    - 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
    - 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
    - 2026-07-02-agent-flywheel-dcg-hook-fail-open
    - 2026-07-02-agent-flywheel-openai-anthropic-license-rider
stance:
  use_for: "A rebuildable VPS where a complete multi-agent loop (plan, task graph, claimed work, closeout) matters more than a restricted host, installed from the v0.9.0 tag and with `acfs hold` used to freeze the agent versions you tested. Also worth studying as method: it is the clearest public account on this watchlist of agents working inside a coordination system rather than being the system."
  avoid_for: "Any host you cannot throw away, including a laptop. Safe mode at v0.9.0 does not remove the permission-skipping aliases or revoke passwordless sudo left by an earlier vibe run, and Antigravity runs through a wrapper that pins always-proceed with the terminal sandbox off. Installing from main, which the maintainer warns can break whenever checksums drift. Anyone who may fall under the OpenAI/Anthropic license rider."
  watch_next: "Whether the next tag carries main's reviewed plugin-install flow with explicit approval, and whether it covers the bundled agents or only third-party plugins; whether any tag gates the aliases and the Antigravity policy behind safe mode; whether the installer ever pins Codex and Claude versions by default."
---

# Agent Flywheel

Agent Flywheel (ACFS) is not a coding agent. It is one scripted front door
that turns a fresh Ubuntu VPS into a working multi-agent shop: Claude Code,
Codex and Antigravity, plus a coordination stack in which durable state lives
in plans, a task graph, message threads and file reservations. The agents are
replaceable workers inside that system. It is on this watchlist because it
bets the loop, not the model, is the product, and because it ships that loop
with the brakes off by design.

## Where it stands, 2026-09-21

**Channel.** Install
[v0.9.0](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.9.0),
tagged 2026-09-04. The release is the install script; there are no assets.
Do not install from main. The maintainer's notes warn it breaks whenever a
covered file lands without regenerated checksums.

**Correction: v0.7.0 never installed.** Until this revision, this page treated
v0.7.0 (2026-06-26) as the cut operators ran. The
[v0.8.0 release notes](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.8.0)
say v0.7.0 failed its own integrity check before doing anything, and that
v0.5.0 was the newest ref that actually installed until v0.8.0 on 2026-08-25.
That is the maintainer's statement; we did not rerun the old install. Our
July reads of v0.7.0's source were accurate about its code, not about what
anyone was running.

**Safe mode is still not a boundary.** At v0.9.0 the shell config defines,
[unconditionally and under the header "dangerously enabled by design"](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/acfs/zsh/acfs.zshrc#L628-L637),
`cc` as Claude with `--dangerously-skip-permissions` and `cod` as Codex with
`--dangerously-bypass-approvals-and-sandbox`. Vibe mode writes a
`NOPASSWD:ALL` sudoers file; a later safe-mode run never removes it. Switching
modes changes intent, not privilege, and the only reliable rollback is a new
host. The whole safety argument is that the VPS is disposable, which the
project says plainly. A laptop install drops that premise.

**One override now works.** Since v0.8.0, `~/.zshrc.local` is sourced last, so
`alias cc='claude'` there actually sticks. On v0.7.0 the shared file re-armed
the aliases on every new shell.

**Antigravity runs as a policy file.** The locked wrapper at v0.9.0
[pins `toolPermission` and `artifactReviewPolicy` to `always-proceed`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/scripts/lib/agy_locked.py#L58-L75),
turns the terminal sandbox off, allows access outside the workspace, and
launches the real `agy` with `--dangerously-skip-permissions`. Its Destructive
Command Guard hook now asks when it cannot parse the input, but when the guard
itself is unavailable or returns garbage it
[still answers allow](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/scripts/lib/agy_locked.py#L150-L202).
The guard helps when it runs, and stops nothing when it does not.

**Versions float; you can now hold them.** The installer pins checksums of the
upstream install scripts, not the agents they fetch: Codex comes from
[`@openai/codex@latest`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/acfs.manifest.yaml#L941)
and Claude from its upstream installer, so two installs of the same tag on
different days can differ. v0.9.0 adds the lever: `acfs hold <tool> --version`
freezes a tool, a fresh install that fails its smoke probe rolls back to the
previous binary, and `acfs update` exits 2 on partial failure. Wire that exit
code into alerting; before v0.9.0 a partial failure looked like success.

**The receipts are legible again.** The CHANGELOG at v0.9.0 has headings for
v0.7.0, v0.8.0 and v0.9.0, which closes the discoverability complaint that it
described shipped work as unreleased. The published budget example is
unchanged at "$440 - $656/month", the project's own example stack rather than
market pricing.

**Main disagrees with the tag on your model.** Five commits after v0.9.0,
[main re-pinned `cod` to gpt-6-astra](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/236c6b07ec);
the tag pins gpt-5.6-sol at xhigh effort, overriding your Codex config either
way. Main is also building a reviewed, checksum-bound plugin installer with
explicit approval. It is the first approval step inside ACFS's own install
flow, and it is in no tag.

**The license is not plain MIT.** The
[rider at v0.9.0](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/LICENSE)
grants no rights to OpenAI, Anthropic, their affiliates, or anyone acting on
their behalf, so an unqualified "open source" description does not hold. We
offer no view on enforceability. If you might be covered, read it before you
install.

## What is unresolved

- The author
  [called Agent Mail's file reservations "advisory"](https://x.com/doodlestein/status/2080966833830539655)
  on 2026-07-25. Nobody has published what happens when two agents claim the
  same file.
- Whether the loop raises verified progress per hour of human attention, or
  moves that attention into new dashboards. No receipt yet settles it either
  way.
- Robbes et al.
  [counted 110 repositories with coding-agent traces](https://arxiv.org/abs/2606.07448v1)
  on the author's account, more than Microsoft's 97 in the same sample. That
  measures activity under one paper's detector, not usefulness, and it does
  not show the Flywheel caused it.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. The Antigravity
wrapper and license were re-read at the v0.9.0 tag on 2026-09-23. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
