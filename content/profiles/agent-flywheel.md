---
schema_version: bitter.frontier_profile.v0
profile_id: agent-flywheel
label: Agent Flywheel
owner: Jeffrey Emanuel (Dicklesworthstone)
source_contract: sources/agent-flywheel.yml
homepage: https://agent-flywheel.com/
repo: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup
tagline: "The durable product is the operating loop, not any one agent inside it."
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
artifact_version: 3
first_published: 2026-07-02
last_updated: 2026-07-12
last_full_review: 2026-07-12
claims:
  - id: v0-7-0-intake-tag
    finding_id: 2026-07-02-agent-flywheel-v0-7-0-tagged-release
    last_verified: 2026-07-12
    status: active
  - id: three-agent-vps-assembly-layer
    finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    last_verified: 2026-07-12
    status: active
  - id: dangerous-agent-shortcuts-shared-across-modes
    finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
    last_verified: 2026-07-12
    status: active
  - id: passwordless-sudo-vibe-default
    finding_id: 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
    last_verified: 2026-07-12
    status: active
  - id: antigravity-always-proceed-wrapper
    finding_id: 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
    last_verified: 2026-07-12
    status: active
  - id: dcg-antigravity-hook-fails-open
    finding_id: 2026-07-02-agent-flywheel-dcg-hook-fail-open
    last_verified: 2026-07-12
    status: active
  - id: cost-model-self-reported-in-tagged-web-source
    finding_id: 2026-07-02-agent-flywheel-costs-pinned-web-source
    last_verified: 2026-07-12
    status: active
  - id: individual-account-repository-outlier-paper-scope
    finding_id: 2026-07-02-agent-flywheel-arxiv-solo-author-velocity
    last_verified: 2026-07-12
    status: active
  - id: license-rider-disclosure
    finding_id: 2026-07-02-agent-flywheel-openai-anthropic-license-rider
    last_verified: 2026-07-12
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
  use_for: "Rebuildable VPS experiments where a complete multi-agent operating loop is worth more than a tightly restricted host, and where the operator will pin and inspect the installer before running it."
  avoid_for: >-
    Do not treat v0.7.0 safe mode as a complete production boundary.
    <a href="/findings/2026-07-02-agent-flywheel-passwordless-sudo-vibe-default/">On
    a fresh host it does not create ACFS's own passwordless-sudo rule, but it
    does not revoke an existing rule</a>, and the
    <a href="/findings/2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases/">shared
    shell config still defines dangerous Claude and Codex shortcuts and routes
    Antigravity through the locked always-proceed launcher</a>. Production,
    shared, long-lived, or credential-rich hosts need those surfaces removed or
    independently governed. Potentially covered users should also
    <a href="/findings/2026-07-02-agent-flywheel-openai-anthropic-license-rider/">review
    the project's OpenAI/Anthropic license rider</a> before adoption.
  watch_next: "Whether safe mode mechanically gates the dangerous aliases and Antigravity policy; whether it explicitly detects or removes an ACFS sudoers rule left by an earlier vibe installation; whether bundled agent versions and channels become pinned; and whether the coordination, memory, and safety tools reduce total human attention rather than merely moving it into new dashboards."
---

# Agent Flywheel

## Operator Read

Agent Flywheel is not another coding agent. It is an attempt to make the whole
operating loop installable. At the latest release available for this review,
[`v0.7.0`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0),
ACFS can bootstrap a fresh Ubuntu VPS with a shell, language runtimes,
[Claude Code, Codex CLI, Antigravity CLI, and the surrounding coordination
stack](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md).
That is real systems work. The project takes a fragmented pile of agents,
dependencies, settings, health checks, updates, and onboarding steps and gives
them one scripted front door.

The more important idea sits behind the installer. Agent Flywheel puts durable
state in plans, a dependency graph, coordination threads, reservations, tests,
and memory. The provider agents are workers inside that system. They are not the
system itself. That makes the project a particularly clear test of both the
[Bitter Lesson](/bitter-lesson/) and [Amdahl's law](/amdahls-law/): build around
improving, replaceable general agents, then spend scarce human attention on the
intent and exceptions that should remain serial.

## The Flywheel, Not The Fleet

The tagged methodology separates a planning substrate from a three-tool
execution core. Multiple frontier models help produce and criticize a serious
markdown plan. [`br` turns the plan into explicit tasks and dependencies, `bv`
routes agents toward the highest-leverage ready work, and Agent Mail carries
claims, reservations, progress, and handoffs](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.7.0/docs/methodology/THE_FLYWHEEL_CORE_LOOP.md).
The result is a useful artifact ladder: plan, task graph, ready task, claimed
task, implementation, verification, closeout, next task.

This is bitter-pilled engineering. Claude, Codex, and
Antigravity can improve or trade places without taking the plan, work graph, or
coordination record with them. The durable advantage lives one level up, in how
work is represented and recovered.

It is also an Amdahl Maxing bet. The method puts the human near whole-system
intent and planning, then lets agents claim and execute bounded work without a
person relaying every message. The tagged swarm lesson makes that concrete:
[one task ID joins task state, the Agent Mail thread, file reservations, commit
messages, and closeout](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.7.0/acfs/onboard/lessons/22_swarm_coordination.md).
That does not prove the whole loop is faster. It does show a serious attempt to
remove the human from the liaison role instead of merely producing code faster.

## What `v0.7.0` Actually Changed

The July 2 Frontier intake used `v0.7.0` as its baseline, but the release itself
shipped on June 26. It was an
[update-reliability release](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0),
not the release that introduced every permission choice described below. Its
notes emphasize Agent Mail readiness recovery, DCG update repair, Antigravity
update-path completion, checksum provenance, and a release gate that verified 42
installers. That focus is part of the design achievement: a flywheel assembled
from many moving projects is only useful if the assembly can diagnose, update,
and recover itself.

## Where Safe Mode Stops

The load-bearing choice is `vibe` mode. The README says full vibe mode is
[recommended for throwaway VPS environments](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md),
and describes safe mode as keeping standard agent confirmations while avoiding
passwordless sudo. The narrower implementation fact is that the user setup library
[writes `NOPASSWD:ALL` only when `MODE` is `vibe`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L4862-L4874).
On a fresh host where no other rule grants it, a safe-mode run does not create
ACFS's `/etc/sudoers.d/90-ubuntu-acfs` passwordless-sudo file. This branch does
not revoke access: it does not remove a rule left by an earlier vibe install or
passwordless sudo configured somewhere else. The confirmation boundary is also
incomplete.

The tagged installer
[deploys and sources the same ACFS zsh configuration in both modes](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L5209-L5237).
That file unconditionally
[defines `cc` with `--dangerously-skip-permissions`, `cod` with
`--dangerously-bypass-approvals-and-sandbox`, and `agy` through the locked
wrapper](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/acfs/zsh/acfs.zshrc#L526-L532).
Safe mode therefore avoids creating ACFS's own passwordless-sudo rule on that
run, but it does not guarantee that passwordless sudo is absent, and it does not
remove the dangerous shortcuts. An operator can still invoke the provider CLIs
without those shortcuts, but the documented mode boundary and the installed
shell behavior do not fully agree in `v0.7.0`.

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
Read closely: malformed hook input, a missing command, an unavailable or timed
out `dcg`, and output that does not produce a blocking decision all
[end in `allow`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/scripts/lib/agy_locked.py#L41-L133).
That makes DCG a useful guard in normal operation. It does not make DCG a hard
stop when the guard cannot reach a clean blocking decision.

## The Cost Model

The tagged web app source makes its reference economic posture explicit. It
describes an operator willing to invest
[about `$500/month` in AI subscriptions](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/apps/web/app/page.tsx),
then lists Cloud VPS at `$40-56/month`, Claude Max at `$200/month`, ChatGPT Pro
at `$200/month`, and an estimated total of `$440-656/month`. Treat those as the
project's example stack and budget, not as independent market pricing or a
technically enforced minimum for the installer.

The useful claim is narrower: ACFS makes a multi-provider personal operating cell
repeatably installable. The operator's actual floor depends on which providers,
accounts, and VPS they choose.

## The Repository-Count Receipt

The clean receipt for the account-level repository outlier is not the author's README
or public repository count. It is Robbes et al.,
["Agentic Very Much! Adoption of Coding Agent in New GitHub Projects"](https://arxiv.org/abs/2606.07448v1),
submitted 2026-06-05. In the same newer-project top-35 figure, the
[versioned source bundle](https://arxiv.org/src/2606.07448v1) sets `dicklesworthstone` to 110
repositories with detected coding-agent traces and Microsoft to 97. The paper
text says the individual account created more repositories with those traces
than Microsoft during the study period.

That is a scoped statement about one paper's detection method and study sample,
not a measure of code quality or useful outcomes. It is still a remarkable
account-level outlier. The result makes the operator's methods worth studying;
it does not establish that Agent Flywheel caused the repository count, that the
repositories were useful, or that one account is an organization-equivalent
software producer.

## A License Boundary Worth Reading

The tagged repository does not carry an ordinary MIT grant. Its
["MIT License (with OpenAI/Anthropic Rider)"](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/LICENSE)
withholds the license grant from OpenAI, Anthropic, their affiliates, and people
acting on their behalf. That is a material adoption constraint in a project
that configures Claude Code and Codex. Frontier is not offering a view on the
rider's enforceability. If you or your organization might be covered by its
terms, review the tagged license before installing or redistributing the
project.

## What Frontier Is Watching

The standing profile remains bounded to ACFS releases, tagged documentation, and
the official site so weekly coverage stays precise. The operating method cannot
be understood from the installer alone, however. Frontier's comparative work
therefore reads a selected set of core-loop projects: Rust Agent Mail, `br`,
`bv`, NTM, CASS and CM, DCG, and SLB. Each project enters that work through its
own pinned receipts, not through a vague claim about an entire portfolio.

The open question is whether the Flywheel's durable artifacts, coordination
rules, and feedback loops increase verified progress per unit of human
attention. That is the test worth learning from.

---

*Corrected and revised 2026-07-12 (artifact_version 3): safe mode no longer
appears as a complete standard-confirmation boundary; the arXiv comparison now
uses the like-for-like v1 figure counts, 110 and 97, without attributing the
result to Agent Flywheel; the June 26 intake baseline is separated from the July
1-2 reporting window; and the tagged license rider is disclosed. The profile
was also rebuilt around the tagged Flywheel operating method rather than
treating the project as only a bundle of permission defaults.*
