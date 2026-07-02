---
schema_version: bitter.frontier_profile.v0
profile_id: agent-flywheel
label: Agent Flywheel
owner: Dicklesworthstone
source_contract: sources/agent-flywheel.yml
homepage: https://agent-flywheel.com/
repo: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup
tagline: "The installer is the control plane."
compared_with:
  - claude-code
  - codex
  - antigravity
  - heypi
surface_class: tagged_release_and_official_site
evidence_floor: tagged_release
status: active_watch
last_updated: 2026-07-02
last_full_review: 2026-07-02
claims:
  - id: v0-7-0-intake-tag
    finding_id: 2026-07-02-agent-flywheel-v0-7-0-tagged-release
    last_verified: 2026-07-02
    status: active
  - id: three-agent-vps-assembly-layer
    finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    last_verified: 2026-07-02
    status: active
  - id: claude-and-codex-dangerous-aliases
    finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    last_verified: 2026-07-02
    status: active
  - id: passwordless-sudo-vibe-default
    finding_id: 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
    last_verified: 2026-07-02
    status: active
  - id: antigravity-always-proceed-wrapper
    finding_id: 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
    last_verified: 2026-07-02
    status: active
  - id: dcg-antigravity-hook-fails-open
    finding_id: 2026-07-02-agent-flywheel-dcg-hook-fail-open
    last_verified: 2026-07-02
    status: active
  - id: cost-model-self-reported-in-tagged-web-source
    finding_id: 2026-07-02-agent-flywheel-costs-pinned-web-source
    last_verified: 2026-07-02
    status: active
  - id: solo-author-velocity-paper-scope
    finding_id: 2026-07-02-agent-flywheel-arxiv-solo-author-velocity
    last_verified: 2026-07-02
    status: active
posture_basis:
  capability:
    - 2026-07-02-agent-flywheel-v0-7-0-tagged-release
    - 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    - 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
  accessibility:
    - 2026-07-02-agent-flywheel-v0-7-0-tagged-release
    - 2026-07-02-agent-flywheel-costs-pinned-web-source
    - 2026-07-02-agent-flywheel-arxiv-solo-author-velocity
  governance:
    - 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    - 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
    - 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
    - 2026-07-02-agent-flywheel-dcg-hook-fail-open
stance:
  use_for: "Disposable VPS experiments where velocity matters more than preserving a tight local authority boundary, and where the operator is willing to pin and read the installer before running it."
  avoid_for: "Production, shared, local, long-lived, or credential-rich machines unless safe mode is deliberate and the sudoers, aliases, credentials, and agent settings are audited first."
  watch_next: "Whether safe mode becomes the beginner path; whether bundled agent versions/channels become pinned; whether DCG, SLB, and coordination tools enforce or advise at each agent boundary; and whether the cost model changes."
---

# Agent Flywheel

## Operator Read

Agent Flywheel is not another coding agent. It is the assembly layer above several
of them. At the `v0.7.0` intake tag, ACFS presents itself as a complete bootstrap
for a fresh Ubuntu VPS: one installer, a modern shell, language runtimes, and
[three AI coding agents: Claude Code, Codex CLI, and Antigravity CLI](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md).
That is why it belongs on the watchlist. Bitter already tracks what the individual
harness vendors ship. Agent Flywheel tracks a different authority question: what
happens when a third party chooses the defaults for several tier-1 harnesses at
once.

The profile has a hard scope fence. The covered surfaces are the
`agentic_coding_flywheel_setup` repository at release/tag/docs precision and
`agent-flywheel.com`. The author's wider portfolio is rejected evidence. The
velocity phenomenon is real enough to receipt once, but it is not a license to
free-harvest 180-plus other repositories.

*Findings: 2026-07-02-agent-flywheel-v0-7-0-tagged-release,
2026-07-02-agent-flywheel-arxiv-solo-author-velocity.*

## What The Installer Decides

The load-bearing choice is `vibe` mode. The README says full vibe mode is
[recommended for throwaway VPS environments](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md),
while safe mode keeps standard confirmations and does not enable passwordless
sudo. In the files, that trade is mechanical. `acfs/zsh/acfs.zshrc`
[aliases Claude Code](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/acfs/zsh/acfs.zshrc)
with `--dangerously-skip-permissions`, aliases Codex with
`--dangerously-bypass-approvals-and-sandbox`, and routes Antigravity through the
`agy-locked` wrapper. The user setup library
[writes `NOPASSWD:ALL`](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/user.sh)
for the target user in `/etc/sudoers.d/90-ubuntu-acfs`.

That is not a hidden trap; the project describes it as the fast path. But it
means the operator is not merely installing tools. They are accepting a bundle's
view of what the tools should be allowed to do. On a disposable VPS, that is a
coherent trade. On a durable machine, it is a bad default wearing the costume of
convenience.

*Findings: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases,
2026-07-02-agent-flywheel-passwordless-sudo-vibe-default.*

## Antigravity As A Policy File

The Antigravity wrapper is where the assembly-layer problem becomes concrete.
The tagged launcher
[writes pinned settings](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py)
including `toolPermission: always-proceed`,
`artifactReviewPolicy: always-proceed`, `enableTerminalSandbox: false`, and
`allowNonWorkspaceAccess: true`. It invokes the real `agy` with
`--dangerously-skip-permissions` and filters user-provided model, sandbox, and
dangerous-skip overrides before doing so. The manifest's verification block
[expects those settings](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/acfs.manifest.yaml)
to be present.

The same wrapper wires a Destructive Command Guard pre-tool hook for Antigravity.
Read closely: if `dcg` is unavailable or times out, the hook
[emits `allow` with a fail-open reason](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py).
That makes DCG a useful guard in normal operation. It does not make DCG a hard
stop under failure.

*Findings: 2026-07-02-agent-flywheel-antigravity-locked-always-proceed,
2026-07-02-agent-flywheel-dcg-hook-fail-open.*

## The Cost Model

The tagged web app source makes the economic posture explicit. It says the target
operator is willing to invest
[about `$500/month` in AI subscriptions](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/apps/web/app/page.tsx),
then lists Cloud VPS at `$40-56/month`, Claude Max at `$200/month`, ChatGPT Pro
at `$200/month`, and an estimated total of `$440-656/month`. Treat those as the
project's own current cost claims, not as independent market pricing.

The accessibility claim is therefore narrow and useful: ACFS may make the stack
easier to assemble for a determined individual, but it does not make agentic
coding cheap, centrally governed, or safe by default. It makes a paid personal
operating cell reproducible.

*Finding: 2026-07-02-agent-flywheel-costs-pinned-web-source.*

## The Velocity Receipt

The clean receipt for the solo-author-velocity angle is not the author's README
or public repository count. It is Robbes et al.,
["Agentic Very Much! Adoption of Coding Agent in New GitHub Projects"](https://arxiv.org/abs/2606.07448),
submitted 2026-06-05. The arXiv source bundle renders the newer-project top-35
organization figure with `dicklesworthstone` leading at 110 adoptions, and its
organization table sets Microsoft's newer-project repository count to 52. The
paper text says this single developer created more repositories with coding-agent
traces than Microsoft during the study period.

That is a scoped statement about one paper's measurement of coding-agent traces in
GitHub projects. It is strong enough to explain why Agent Flywheel is watched. It
is not a standing invitation to turn the author's portfolio into the source.

*Finding: 2026-07-02-agent-flywheel-arxiv-solo-author-velocity.*
