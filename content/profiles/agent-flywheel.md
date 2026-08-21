---
schema_version: bitter.frontier_profile.v0
profile_id: agent-flywheel
label: Agent Flywheel
owner: Jeffrey Emanuel (Dicklesworthstone)
source_contract: sources/agent-flywheel.yml
homepage: https://agent-flywheel.com/
repo: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup
tagline: "The durable product is the operating loop, not any one agent inside it -- but the loop you can install is a month behind the one its author describes."
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
artifact_version: 4
first_published: 2026-07-02
last_updated: 2026-08-20
last_full_review: 2026-07-27
claims:
  - id: optional-ee-fmd-pi-pfr-on-main
    finding_id: 2026-08-20-agent-flywheel-optional-ee-fmd-pi-pfr-stack-on-main-no-new-tag
    last_verified: 2026-08-20
    status: active
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
  use_for: "Rebuildable VPS experiments where a complete multi-agent operating loop is worth more than a tightly restricted host, and where the operator will pin and inspect the installer before running it. Also worth studying as method: the artifact ladder from plan to task graph to claimed task to closeout is the clearest public account of multi-agent coordination on this watchlist. What you install is still v0.7.0, tagged 2026-06-26."
  avoid_for: >-
    Do not treat v0.7.0 safe mode as a complete production boundary, and note
    that no tag closed the gap in the 2026-07-02 to 2026-07-27 window.
    <a href="/findings/2026-07-02-agent-flywheel-passwordless-sudo-vibe-default/">On
    a fresh host it does not create ACFS's own passwordless-sudo rule, but it
    does not revoke an existing rule</a>, and the
    <a href="/findings/2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases/">shared
    shell config still defines dangerous Claude and Codex shortcuts and routes
    Antigravity through the locked always-proceed launcher</a>. Production,
    shared, long-lived, or credential-rich hosts need those surfaces removed or
    independently governed. Because switching modes is not remediation, the only
    reliable rollback is rebuilding the host -- which is also why the local
    laptop path circulating in the conversation drops the premise that made the
    posture defensible. Potentially covered users should also
    <a href="/findings/2026-07-02-agent-flywheel-openai-anthropic-license-rider/">review
    the project's OpenAI/Anthropic license rider</a> before adoption.
  watch_next: "Whether a next tag lands at all, and whether it mechanically gates the dangerous aliases and the Antigravity policy, detects or removes an ACFS sudoers rule left by an earlier vibe installation, and pins bundled agent versions and channels. Whether the CHANGELOG starts recording released versions again -- it still has no v0.7.0 heading. Whether the internal VERSION file begins carrying a pre-release marker for accumulated work. And whether the coordination, memory, and safety tools reduce total human attention rather than moving it into new dashboards."
---

# Agent Flywheel

## Operator Read

Agent Flywheel is not another coding agent. It is an attempt to make the whole
operating loop installable: a fresh Ubuntu VPS gets a shell, language runtimes,
[Claude Code, Codex CLI, Antigravity CLI, and the surrounding coordination
stack](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md)
from one scripted front door. That is real systems work, and the idea behind it
is more interesting than the installer: durable state lives in plans, a
dependency graph, coordination threads, reservations, tests, and memory, and the
provider agents are workers inside that system rather than the system itself.

The whole read for the 2026-07-02 to 2026-07-27 window is a gap. **ACFS shipped
no tagged release.** It is still holding at
[`v0.7.0`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0),
tagged 2026-06-26, six days before the window opened. Meanwhile `main` moved
[73 commits ahead of that tag and zero behind](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.7.0...d652882b6ed6266dfd1b1d4df83e16f870799c91),
67 of them inside the window. The internal `VERSION` file reads `0.7.0` at
[the tag](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/VERSION)
and `0.7.0` at
[main](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/d652882b6ed6266dfd1b1d4df83e16f870799c91/VERSION),
so the project is not carrying even a pre-release marker for a month of
accumulated work.

The operator consequence is one sentence and it governs everything else on this
page: **`curl | bash` against ACFS today installs the 2026-06-26 tree**, no
matter how busy the repository looks or how current the public conversation
sounds.

Frontier reads this source at its tags, its tagged docs, and its official site.
The 67 in-window commits were inspected only to establish the channel picture
above; their contents are not cited as posture, because citing a moving `main`
would describe a system nobody is running.

## The Flywheel, Not The Fleet

The tagged methodology separates a planning substrate from a three-tool execution
core. Multiple frontier models help produce and criticize a serious markdown
plan. [`br` turns the plan into explicit tasks and dependencies, `bv` routes
agents toward the highest-leverage ready work, and Agent Mail carries claims,
reservations, progress, and handoffs](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.7.0/docs/methodology/THE_FLYWHEEL_CORE_LOOP.md).
The result is a useful artifact ladder: plan, task graph, ready task, claimed
task, implementation, verification, closeout, next task.

That makes ACFS a clear test of both the [Bitter Lesson](/bitter-lesson/) and
[Amdahl's law](/amdahls-law/): build around improving, replaceable general
agents, then spend scarce human attention on the intent and exceptions that
should stay serial. Claude, Codex, and Antigravity can improve or trade places
without taking the plan, work graph, or coordination record with them. The
durable advantage lives one level up, in how work is represented and recovered.
It is bitter-pilled engineering, and an Amdahl Maxing bet: the method puts the
human near whole-system intent and planning, then lets agents claim and execute
bounded work without a person relaying every message. The tagged swarm lesson
makes that concrete --
[one task ID joins task state, the Agent Mail thread, file reservations, commit
messages, and closeout](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.7.0/acfs/onboard/lessons/22_swarm_coordination.md).

That does not prove the whole loop is faster. It shows a serious attempt to
remove the human from the liaison role rather than merely producing code faster,
which remains the reason this project is worth watching at all.

## The author's own word for the coordination layer

On 2026-07-25 the project's author
[described the file-reservation and concurrency mechanism in Agent Mail as
**advisory**](https://x.com/doodlestein/status/2080966833830539655) -- his word,
unprompted and without defensiveness.

That is worth recording carefully, in both directions. It is the plainest
statement of this window's governing pattern, made by the person who built the
mechanism: a coordination layer that documents an intention rather than enforcing
a boundary. This publication spent the window finding controls that read like
boundaries and were not, mostly by reading what vendors later repaired. Here
somebody just said it.

And the receipt is for the statement, not for the behavior. Agent Mail is one of
the related-portfolio repositories that Frontier reads as context rather than
harvesting weekly, so the mechanism itself was not probed. A strong quotation and
a weak product fact. Treat "advisory" as the author's accurate self-description
of design intent, and if you are running parallel agents against shared files,
verify what happens when two of them want the same file at once.

## Where safe mode stops, still

The load-bearing choice is `vibe` mode, and the standing question this profile
has carried was whether the next tag would close the gap. There is no next tag,
so the answer is that nothing changed and the v0.7.0 boundary is what operators
run.

The README describes safe mode as keeping standard agent confirmations while
avoiding passwordless sudo. The narrower implementation fact is that the user
setup library
[writes `NOPASSWD:ALL` only when `MODE` is `vibe`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L4862-L4874).
On a fresh host where no other rule grants it, a safe-mode run does not create
ACFS's `/etc/sudoers.d/90-ubuntu-acfs` file. It also does not revoke anything: it
will not remove a rule left by an earlier vibe install, and it will not remove
passwordless sudo configured elsewhere.

The confirmation boundary is incomplete in the same way. The tagged installer
[deploys and sources the same ACFS zsh configuration in both modes](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L5209-L5237),
and that file unconditionally
[defines `cc` with `--dangerously-skip-permissions`, `cod` with
`--dangerously-bypass-approvals-and-sandbox`, and `agy` through the locked
wrapper](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/acfs/zsh/acfs.zshrc#L526-L532).
An operator can invoke the provider CLIs without those shortcuts, but the
documented mode boundary and the installed shell behavior do not fully agree.

The practical consequence, unchanged and now a month older: **switching modes is
not remediation.** A machine that was ever run in vibe mode still carries
ACFS-written passwordless sudo after a later safe-mode run, and the only reliable
rollback is rebuilding the host.

That is exactly why the project's own front page framing matters. Fetched
2026-07-27, [agent-flywheel.com](https://agent-flywheel.com/) still states the
posture in its own words: "Passwordless sudo with dangerous flags enabled for
maximum velocity on throwaway VPS environments." Disposability is the whole
safety argument, and the disclosure is honest. It is also the premise that a
local Mac or Linux install quietly drops, because on a laptop there is no VPS to
rebuild.

## Antigravity as a policy file

The Antigravity wrapper is where the assembly-layer problem becomes concrete. The
tagged launcher
[writes pinned settings](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py)
including `toolPermission: always-proceed`, `artifactReviewPolicy:
always-proceed`, `enableTerminalSandbox: false`, and `allowNonWorkspaceAccess:
true`. It invokes the real `agy` with `--dangerously-skip-permissions` and
filters user-provided model, sandbox, and dangerous-skip overrides before doing
so. The manifest's verification block
[expects those settings](https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/acfs.manifest.yaml)
to be present.

The same wrapper wires a Destructive Command Guard pre-tool hook. Read it
closely: malformed hook input, a missing command, an unavailable or timed-out
`dcg`, and output that does not produce a blocking decision all
[end in `allow`](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/scripts/lib/agy_locked.py#L41-L133).
DCG is a useful guard in normal operation. It is not a hard stop when the guard
cannot reach a clean blocking decision, which is the fail-open shape this
publication documented across the field this window. The v0.7.0 release notes do
record repairing the DCG stack, so the component is real and maintained; what is
unmeasured is its coverage.

## A receipt-hygiene defect that explains a real complaint

ACFS's own CHANGELOG **never recorded v0.7.0**. There is no `## [v0.7.0]` heading
at
[the tag](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/CHANGELOG.md)
or at
[main](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/d652882b6ed6266dfd1b1d4df83e16f870799c91/CHANGELOG.md).
The `## [Unreleased]` section still compares `v0.6.0...HEAD` and is annotated
"427 commits since v0.6.0 (2026-02-02 through 2026-03-21). Internal version
bumped to 0.7.0 in `729822e`." So the changelog describes the shipped v0.7.0
content as unreleased, under a date range ending three months before the tag was
cut and four months before the current main.

This is small and it has a real cost. Two community accounts complained during
the window that they could not find a cohesive list of what the system is made of
or map how the components fit. That is not a skill issue; an operator trying to
reconstruct what `v0.7.0` contains genuinely cannot use the changelog, because
the changelog says that work has not shipped. The GitHub Release notes are the
only usable record, which is precisely why this source's contract names the tag
and its release as the receipt surface.

## The license boundary

The tagged repository does not carry an ordinary MIT grant. Its
["MIT License (with OpenAI/Anthropic Rider)"](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/LICENSE)
defines Restricted Parties as "OpenAI, L.L.C.; Anthropic, PBC; any of their
respective Affiliates; and any person or entity acting directly or indirectly on
behalf of, for the benefit of, or under the direction of any of the foregoing,"
and states that "no rights are granted to any Restricted Party."

That is a material adoption constraint in a project whose purpose is configuring
Claude Code and Codex, and it is worth one precise sentence rather than a
paragraph of interpretation. The code is public and the grant is MIT-shaped for
everyone outside the named class. Withholding the grant from named persons is the
condition excluded by
[clause 5 of the Open Source Definition](https://opensource.org/osd), so an
unqualified "open source" description does not hold against the tagged text. That
is a factual statement about a license file and nothing more: Frontier offers no
view on the rider's enforceability and imputes no motive to its author. If you or
your organization might be covered, read the tagged license and get your own
advice before installing or redistributing.

## The repository-count receipt

The clean receipt for the account-level outlier is not the author's README or
public repository count. It is Robbes et al.,
["Agentic Very Much! Adoption of Coding Agent in New GitHub Projects"](https://arxiv.org/abs/2606.07448v1),
submitted 2026-06-05, whose
[versioned source bundle](https://arxiv.org/src/2606.07448v1) sets
`dicklesworthstone` to 110 repositories with detected coding-agent traces against
Microsoft's 97 in the same newer-project top-35 figure.

That is a scoped statement about one paper's detection method and study sample,
not a measure of code quality or useful outcomes. It is still a remarkable
account-level outlier, and it makes the operator's methods worth studying. It
does not establish that Agent Flywheel caused the repository count, that the
repositories were useful, or that one account is an organization-equivalent
software producer.

## The cost model

The project's attributed figures are unchanged across the window. Fetched
2026-07-27, [agent-flywheel.com](https://agent-flywheel.com/) lists Cloud VPS at
$40-56/month, Claude Max at $200/month (or $400 for power users), ChatGPT Pro at
$200/month, and an "Estimated Monthly Total: $440 - $656/month." Anchor any cost
discussion to that figure rather than to informal community estimates, and treat
it as the project's example stack and budget, not as market pricing or a
technically enforced minimum.

One number not to repeat in either direction: the tool count. The official site
says "30+ modern developer tools" and a community post says roughly 20. Neither
is an independent count, and this harvest did not enumerate.

## The conversation around it

Thirteen of the twenty-two harvested posts about this project in the window are
the author's own. He is the clearest case on the watchlist of a person whose
running commentary is more informative than the release notes, which is why
Frontier now maintains a page for him at
[/people/doodlestein/](/people/doodlestein/).

Two receipted qualifications an operator should carry when reading that lane.
First, the posts describe `main` -- the complete guide, the Cursor integration,
the service work -- while the documented `curl | bash` install delivers the
2026-06-26 tag. Nothing said is false; it simply describes a system the reader
cannot install by following the link in the same post. Second, the "free and
open-source" description is qualified by the tagged license rider above.

There is a third thing worth naming because it is unusual. On this source the
conversation *diagnosed correctly from the outside* before we confirmed the
mechanism from the inside: the complaints about component discoverability landed
five to seven days before our probe found the changelog defect that explains
them. That is not early warning -- the defect predates both posts -- but it is a
reminder that user confusion is often a receipt for a documentation failure
rather than a skill gap.

## What Frontier is watching

The standing profile stays bounded to ACFS releases, tagged documentation, and
the official site, so weekly coverage stays precise. The operating method cannot
be understood from the installer alone, so Frontier's comparative work reads a
selected set of core-loop projects -- Rust Agent Mail, `br`, `bv`, NTM, CASS and
CM, DCG, and SLB -- each through its own pinned receipts rather than through a
vague claim about a portfolio.

Answered this window:

- **Did the next tag close the safe-mode gap?** No, because there is no next tag.
  The question carries forward unchanged, and the exposure is a month older.
- **Is the license rider still in force at the tag?** Yes, unchanged.
- **Is the attributed cost model still current?** Yes, unchanged on the official
  site across the window.

Still open:

- Will a tag land, and will it gate the dangerous aliases and the Antigravity
  always-proceed policy behind safe mode?
- Will an installer ever detect or remove an ACFS sudoers rule left by an earlier
  vibe-mode run? Until it does, mode-switching remains a change of intent rather
  than a change of privilege.
- Will the CHANGELOG record a released version again? Two windows of
  discoverability complaints have a single documentary cause.
- Will `VERSION` carry a pre-release marker while work accumulates? Seventy-three
  commits under an unchanged version string is the state that makes "which
  Flywheel are we talking about" unanswerable from the artifact.
- Does the advisory file-reservation system become enforcing, and what does it do
  today when two agents claim the same file?
- And the standing one: do the Flywheel's durable artifacts, coordination rules,
  and feedback loops increase verified progress per unit of human attention? That
  is the test worth learning from, and no receipt in this window advances it
  either way.

