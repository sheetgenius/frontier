---
schema_version: bitter.frontier_profile.v0
profile_id: gemini-cli
label: Gemini CLI
owner: Google
source_contract: sources/gemini-cli.yml
homepage: https://github.com/google-gemini/gemini-cli
docs: https://google-gemini.github.io/gemini-cli/docs/
tagline: "Discontinued for consumers on June 18; the open-source repo still ships for whoever's left."
compared_with:
  - antigravity
x:
  project: geminicli
  maintainers:
    - handle: ntaylormullen
      name: N. Taylor Mullen
repo: https://github.com/google-gemini/gemini-cli
surface_class: open_source_commits
evidence_floor: commit_diff_reviewed
status: active_watch
last_updated: 2026-07-01
last_full_review: 2026-06-03
claims:
  - id: consumer-service-retired-2026-06-18
    finding_id: 2026-07-01-gemini-cli-consumer-service-retired
    last_verified: 2026-07-01
    status: active
  - id: oss-repo-active-enterprise-serving
    finding_id: 2026-07-01-gemini-cli-consumer-service-retired
    last_verified: 2026-07-01
    status: active
  - id: memory-reviewable-patch
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: memory-private-allowlist
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: workspace-trust-visible-mcp
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: workspace-trust-headless-enforcement
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: shell-safety-evals
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: shell-tools-allowlist
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: subagents-approval-mode-aware
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: subagent-protocol-pluggable
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: session-invocation-protocols-stable
    finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
    last_verified: 2026-05-27
    status: active
  - id: agent-registration-first-wins
    finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
    last_verified: 2026-05-27
    status: active
  - id: auto-modes-merged
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: policy-engine-in-acp
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: auto-edit-shell-redirect-approval
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-05-27
    status: active
  - id: session-export-import
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-05-11
    status: active
  - id: session-resume-reliability
    finding_id: 2026-05-12-gemini-session-resume-reliability
    last_verified: 2026-05-12
    status: active
  - id: agent-execution-stopped-json
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-05-07
    status: active
  - id: long-horizon-goal-primitive
    last_verified: 2026-05-11
    status: open_question
    note: "No supporting finding exists. Tracked as open_question because the absence is itself the operating fact: Gemini CLI has shipped no first-class long-horizon goal/mission/outcome primitive through 2026-05-12, and operators relying on long-horizon intent persistence must build it externally."
  - id: v0-45-0-mcp-blacklist-and-policy-resilience
    finding_id: 2026-06-03-gemini-cli-v0-45-0-release
    last_verified: 2026-06-03
    status: active
  - id: antigravity-migration-funnel-stable
    finding_id: 2026-06-23-gemini-antigravity-migration-to-stable
    last_verified: 2026-06-23
    status: active
  - id: antigravity-banner-uncapped-stable
    finding_id: 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
    last_verified: 2026-06-23
    status: active
  - id: skill-path-traversal-fix-preview-only
    finding_id: 2026-06-23-gemini-skill-path-traversal-stranded-in-preview
    last_verified: 2026-06-23
    status: active
    channel: preview-or-beta
    note: "Open security exposure on stable. The skill install/link/uninstall path-traversal fix (commit bca5667fc / PR #27767) is NOT in any stable release as of 2026-06-23 -- second consecutive window stranded. It is an ancestor of v0.48.0-preview.0 only (`compare v0.48.0-preview.0...bca5667fc` -> status behind; `compare v0.47.0...bca5667fc` -> status diverged, ahead_by 7, behind_by 2). Stable users on v0.47.0 remain exposed: a malicious .skill package can write outside the skills directory. Channel = preview-or-beta; do NOT assert the fix as shipped to stable."
posture_basis:
  capability:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-05-12-gemini-session-resume-reliability
    - 2026-05-27-gemini-session-invocation-protocols-stable
  accessibility:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    - 2026-06-23-gemini-antigravity-migration-to-stable
    - 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
  governance:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-05-12-gemini-session-resume-reliability
    - 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    - 2026-06-23-gemini-skill-path-traversal-stranded-in-preview
  succession:
    - 2026-06-23-gemini-antigravity-migration-to-stable
    - 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
stance:
  use_for: "Teams that want to review what an agent remembered before it sticks; operators moving sessions between machines or running unattended in CI, where workspace trust now actually enforces in headless mode."
  avoid_for: "Standardizing free/unpaid-tier (Google One / Gemini Code Assist for individuals) workflows on Gemini CLI expecting an indefinite first-party home -- as of v0.47.0 stable, Google is steering that tier toward the successor Antigravity CLI from inside the tool. Also avoid relying on third-party .skill installs on stable, where the path-traversal fix has not shipped for two windows. And avoid production multi-agent fan-out that needs a real remote backend -- the remote subagent protocol ships with tests but no observed target; assume in-process today, plan for remote later."
  watch_next: "Whether the Antigravity migration funnel hardens further (defaulted, or extended past free/unpaid tiers) or stalls; when the skill path-traversal fix finally reaches a stable tag; where the remote subagent infrastructure actually lands -- Google-hosted or operator-controlled -- and how aggressively the shell-validation allowlist tightens past pattern-matching."
---

# Gemini CLI

## Operator Read

Gemini CLI is turning agent state into explicit, reviewable operating
material: memory, trust, sessions, output contracts, and subagent
boundaries are becoming things an operator can inspect, move, and police,
while remote delegation and long-horizon intent remain unproven. The
direction is consistent -- make hidden context into named state -- and
the gap is where that state lives once it leaves the local process.

Two things shifted the standing read as of v0.47.0 stable, and both cut
against treating Gemini CLI as a settled first-party Google CLI. First,
this is no longer an unconditionally durable home for the free/unpaid
tier: Google has shipped, to stable, an in-product funnel that steers
Google One and Gemini Code Assist for individuals users toward a
*successor* product, Antigravity CLI. Read it as managed succession for
that tier, not deprecation of the tool overall, and provision
accordingly. Second, the channel split is now a trust fact: a skill-path
security fix has been preview-only for two consecutive windows while the
migration funnel reached stable, so what an operator runs (stable) and
what is fixed (preview) diverge in a way that matters for third-party
skill installs.

## State Becomes Reviewable

Read what an agent wants to remember before it sticks. The
[Auto Memory](https://github.com/google-gemini/gemini-cli/commit/a7beb890d093e2cf66ed1ac8debff690b75e1f6d)
inbox proposes durable updates as patches with a canonical contract
surfaced through docs, settings schema, memory commands, inbox UI, local
executor behavior, skill extraction, and evals. Private memory patches
sit behind a [tightened allowlist](https://github.com/google-gemini/gemini-cli/commit/7fb5146c6b084888b38dea05af6a4e95ea48810a)
separating personal-scope memory from project-scope.

Move sessions between machines as data, not state. An operator can
[export a session to a file and import it via flag](https://github.com/google-gemini/gemini-cli/commit/3805640530a9) -- session state is a serializable artifact, not ambient context. Session
resume is now
[reliable for legacy session formats](https://github.com/google-gemini/gemini-cli/pull/26577):
legacy chat JSON appears in `/resume` and `--list-sessions`, and
`--resume <sessionId>` failures surface an error instead of silently
starting fresh. If you've archived sessions, the resume path now works
on them; if you depended on silent-fresh-on-failure, your error path
needs revisiting.

When you call Gemini CLI from CI or any non-interactive caller, parse the
end-of-run signal. `AgentExecutionStopped` emits as
[structured JSON](https://github.com/google-gemini/gemini-cli/commit/469092a72cbe368b69df25c0caeefbc911b6d6fd),
giving callers a stable parse target instead of free-form output.

## Authority Follows Headless And Delegated Runs

Non-interactive contexts no longer bypass workspace trust by being
non-interactive.
[Workspace trust enforces in headless mode](https://github.com/google-gemini/gemini-cli/commit/dba9b9a0ff5a43a5d40d554b944db3e2ce99d5b6)
through a new trust-utility module and CI-workflow integration. If you've
been relying on `--non-interactive` to silently skip the trust prompt,
that path is closed -- run the trust grant explicitly or fail loudly.
[Trust state is also visible](https://github.com/google-gemini/gemini-cli/commit/a38f393af77c0ccf50da10d73c84cfb594dd8175)
in the MCP listing UX so the boundary is inspectable, not implicit.

Shell command execution carries
[safety evals](https://github.com/google-gemini/gemini-cli/commit/82f6ea5b61a6321748d81a62d34c62bf7d2c9fa2)
on the path between the agent and the host, and shell validation now uses
a [core-tools allowlist](https://github.com/google-gemini/gemini-cli/commit/27927c55e5b4947df0f2e853971c170000429dec)
in the policy engine -- explicit allowed-tool mapping in addition to
pattern-based evals.

## Subagents Are A Boundary, And Now Have A Stable Remote Surface

Subagents are
[approval-mode aware](https://github.com/google-gemini/gemini-cli/commit/40b384de2c1d251c9d13a6359216a9e6cff5a254) -- delegated work inherits the active approval posture rather than escaping
it. As of
[v0.44.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0)
(stable, 2026-05-27), `LocalSessionInvocation` and `RemoteSessionInvocation`
ship as the session-invocation protocols, replacing the prior preview-only
state of the abstraction. The "tests but no observed remote target" gap
from the 2026-05-11 finding closed at the protocol layer; **where the
remote target actually runs** (Google-hosted, operator-hosted, both)
remains undocumented. Agent registration also moves to first-wins
prioritize-project -- when the same agent name is defined at multiple
scopes, project wins.

Treat delegated workflows as testable against v0.44.0 stable; do not
yet depend on the remote path for production until Google documents
where remote invocations run.

## Default-On Autonomy

[v0.44.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0)
collapses the prior fan of Auto variants into a single Auto mode
and adds shell-redirect auto-approval in `AUTO_EDIT`. PolicyEngine
integrates into ACP sessions (framed as a deadlock fix; the
structural effect is that enforcement reaches the protocol-session
layer). Operators on previous Auto variants must re-audit what the
consolidated Auto mode treats as safe -- the release notes do not
enumerate which prior-mode constraint survived the merger.
`AUTO_EDIT` users should explicitly decide whether shell-redirect
auto-approval is acceptable for their environment; redirects are a
write surface if the agent is steered toward sensitive paths.

## Managed Succession For The Free Tier

Gemini CLI now steers some of its own users toward a successor product
from inside the tool. The
[Antigravity migration funnel](https://github.com/google-gemini/gemini-cli/pull/27765)
reached **stable v0.47.0** (commit `452356027`, ancestor of the stable
tag): `/help install antigravity` and a `migrate` command print a
platform-aware install command, and a built-in `antigravity-support`
skill auto-fires whenever a user "asks questions, seeks help, or
requests instructions related to installing, setting up, or migrating
to Antigravity CLI." The skill hands the user a `curl ... | bash` (or
PowerShell `irm ... | iex`) one-liner that installs the `agy` binary.
Two authority notes: the steered install is a pipe-to-shell of a remote
script presented inside a trusted CLI surface, normalizing unverified
remote installs from inside the agent; and the steering points at a
*different* product. This is a product-posture signal -- read Gemini CLI
as entering a managed succession for the affected tier, not as a settled
indefinite home for it.

The intrusiveness escalated in the same release. The "Gemini CLI is
transitioning to the new Antigravity CLI ..." banner's five-show cap
was [deliberately bypassed by keyword](https://github.com/google-gemini/gemini-cli/pull/27676)
(commit `f40498db6`, ancestor of stable v0.47.0): a new
`|| activeText.includes('Antigravity')` clause exempts the transition
banner from `DEFAULT_MAX_BANNER_SHOWN_COUNT`, so it shows **every
session** with no way to age it out. Precision on scope: the affected
audience is the **free/unpaid tier** -- Google One and Gemini Code
Assist for individuals -- per the PR's own validation note ("Log in with
a free tier account 5 or more times ..."); paid tiers are not the
target. Operators standardizing free/unpaid-tier workflows on Gemini CLI
should expect an unavoidable every-session reroute nag and plan for the
managed-succession direction rather than against it.

*Findings: `2026-06-23-gemini-antigravity-migration-to-stable`,
`2026-06-23-gemini-antigravity-banner-uncapped-in-stable`.*

## A Security Fix Stranded In Preview

A skill-path security fix that an operator running stable does **not**
have. The skill install/link/uninstall
[path-traversal fix](https://github.com/google-gemini/gemini-cli/commit/bca5667fc)
(commit `bca5667fc` / PR #27767) is, for the **second consecutive
window**, in no stable release. It is present only on the preview
channel: it is an ancestor of `v0.48.0-preview.0`
(`compare v0.48.0-preview.0...bca5667fc` → `status: behind`) but
diverged from stable v0.47.0 (`compare v0.47.0...bca5667fc` →
`status: diverged, ahead_by 7, behind_by 2`). Do not read this as
shipped: channel is **preview-or-beta only**. The operator consequence
is concrete -- a malicious `.skill` package can write outside the skills
directory on stable v0.47.0, so treat third-party skill installs as
untrusted until the carrying stable tag lands. Two stable releases
(v0.46.0, v0.47.0) have now shipped without this fix while a growth
funnel went through the same gate to stable; the channel-priority
contrast is the operating fact.

*Findings: `2026-06-23-gemini-skill-path-traversal-stranded-in-preview`.*

*Posture basis: `2026-05-07-gemini-reviewable-memory-and-trust`,
`2026-05-11-gemini-subagent-protocol-and-session-portability`,
`2026-05-12-gemini-session-resume-reliability`,
`2026-05-27-gemini-session-invocation-protocols-stable`,
`2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp`,
`2026-06-23-gemini-antigravity-migration-to-stable`,
`2026-06-23-gemini-antigravity-banner-uncapped-in-stable`,
`2026-06-23-gemini-skill-path-traversal-stranded-in-preview`.*

## Open Questions

- When does the skill-path-traversal fix reach a stable tag, and how
  wide is the managed succession? The fix has been preview-only for two
  windows; whether the carrying stable lands next cycle, and whether the
  Antigravity funnel stays scoped to free/unpaid tiers or expands, both
  decide the operator posture.
- Where do remote session invocations actually run? `RemoteSessionInvocation`
  is stable in v0.44.0 as a protocol but the runtime target -- Google-hosted, operator-hosted, or both -- is undocumented. Until
  Google names a destination, production callers cannot adopt the
  remote path with confidence.
- What is the PolicyEngine-in-ACP default posture? Per-session
  enforcement by default, or only when an operator has configured a
  policy? The "deadlock fix" framing in the release notes
  understates the structural shift.
- `AUTO_EDIT` shell-redirect auto-approval: is the new approval
  gated by workspace trust, by the existing shell-tools allowlist,
  or a separate decision?
- Does Gemini CLI offer a first-class long-horizon primitive (goal,
  mission, outcome) beyond in-session todos and memory? Memory captures
  facts, not intent. No accepted finding establishes such a primitive as
  of 2026-05-27. The 2026-05-13 → 2026-05-27 cycle did not produce a
  finding that resolves this either way; status remains
  `open_question`. Tracked in the `claims:` block as
  `long-horizon-goal-primitive`.
- What state crosses the wire on session export? The export commit
  introduces the file but does not document whether accepted memory
  patches, approval-mode state, or active MCP connections are included.

For research-lens-level open questions (preview/nightly harvest treatment,
security advisory handling), see `sources/gemini-cli.yml#discovery`.

## What To Watch Next

- The actual remote runtime target of `RemoteSessionInvocation` once
  one ships or is named.
- How PolicyEngine-in-ACP interacts with operators using Gemini CLI
  *as* an ACP server (e.g., behind OpenHands' ACP UI). Whether the
  PolicyEngine still applies when Gemini is being fronted is the
  composition question.
- Whether the `AUTO_EDIT` shell-redirect auto-approval expands to
  other shell verbs or remains bounded to redirects.
- Further structured non-interactive output beyond `AgentExecutionStopped`,
  especially for sub-agent lifecycle and approval prompts.
- Whether the memory-inbox pattern extends to other state classes (skills,
  goals, session recaps).
- Documentation or schema for the session-export file format.
- Stable-channel arrival of changes currently visible only in preview or
  nightly -- specifically the skill install/link/uninstall path-traversal
  fix (`bca5667fc` / PR #27767), stranded in preview for two windows.
- Whether the Antigravity migration funnel hardens further (defaulted,
  made non-dismissable beyond the banner, or extended past the
  free/unpaid tier) or stalls -- the managed-succession trajectory for
  Gemini CLI's free tier.
- Policy-engine work that changes how operators express trust beyond
  workspace-level grants.

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`:
every concrete claim has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite
finding IDs when naming a specific feature, behavior change, or
cross-provider comparison. Cross-provider editorial belongs in the weekly
digest, not here. Git history is the audit trail; removed claims live in
the diff log.
