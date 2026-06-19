---
schema_version: bitter.frontier_profile.v0
profile_id: gemini-cli
label: Gemini CLI
owner: Google
source_contract: sources/gemini-cli.yml
homepage: https://github.com/google-gemini/gemini-cli
docs: https://google-gemini.github.io/gemini-cli/docs/
repo: https://github.com/google-gemini/gemini-cli
surface_class: open_source_commits
evidence_floor: commit_diff_reviewed
status: active_watch
last_updated: 2026-06-16
last_full_review: 2026-06-03
claims:
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
  - id: antigravity-transition-banner-uncapped
    finding_id: 2026-06-05-gemini-cli-antigravity-transition-banner-uncapped
    last_verified: 2026-06-16
    status: active
  - id: antigravity-cli-migration-path
    finding_id: 2026-06-09-gemini-cli-antigravity-cli-migration-path
    last_verified: 2026-06-16
    status: active
  - id: flash-3-5-ga-routing-to-stable
    finding_id: 2026-06-10-gemini-cli-flash-3-5-ga-routing-to-stable
    last_verified: 2026-06-16
    status: active
  - id: skill-install-path-traversal-fix
    finding_id: 2026-06-15-gemini-cli-skill-install-path-traversal-fix
    last_verified: 2026-06-16
    status: active
posture_basis:
  capability:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-05-12-gemini-session-resume-reliability
    - 2026-05-27-gemini-session-invocation-protocols-stable
  accessibility:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
  governance:
    - 2026-05-07-gemini-reviewable-memory-and-trust
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-05-12-gemini-session-resume-reliability
    - 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    - 2026-06-15-gemini-cli-skill-install-path-traversal-fix
stance:
  use_for: "Teams that want to review what an agent remembered before it sticks; operators moving sessions between machines or running unattended in CI, where workspace trust now actually enforces in headless mode."
  avoid_for: "Production multi-agent fan-out that needs a real remote backend. The remote subagent protocol ships with tests but no observed target: assume in-process today, plan for remote later."
  watch_next: "Where the remote subagent infrastructure actually lands (Google-hosted or operator-controlled), how aggressively the shell-validation allowlist tightens past pattern-matching, and whether the in-product Antigravity-CLI steering (banner in stable, migration tooling in preview) means Gemini CLI is entering managed decline toward a separate successor binary."
---

# Gemini CLI

## Recent activity (2026-06-04 to 2026-06-16)

The window's biggest development is about Gemini CLI's own future, not a
feature. Google began steering users toward a separate successor: an
[Antigravity transition banner](https://github.com/google-gemini/gemini-cli/commit/f40498db6)
was made exempt from the usual five-show display cap and cherry-picked to
stable (v0.45.2/v0.46.0), so it now shows every session it is active, and a
preview build added
[in-product migration commands and a built-in skill](https://github.com/google-gemini/gemini-cli/commit/452356027)
pointing to "Antigravity CLI," a distinct Google agent CLI with its own
binary and installer (an unsigned `curl | bash` installer; fetch-inspect
before running). The marketing is in stable; the migration tooling is preview
only as of June 16. On models, v0.46.0 began
[routing flash workloads to gemini-3.5-flash](https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0)
behind an experiment flag and auth-type logic, so re-baseline any cost or
eval assumptions pinned to the old flash. Security-wise, three
[path-traversal holes in skill install, link, and uninstall](https://github.com/google-gemini/gemini-cli/commit/bca5667fc)
(a malicious `.skill` package could write outside the skills directory or
delete sibling folders) were fixed on main but, as of June 16, are in no
tagged release, stable or preview; treat third-party skill installs as
untrusted until the carrying release ships.

## Operator read

Gemini CLI is turning agent state into explicit, reviewable operating
material: memory, trust, sessions, output contracts, and subagent
boundaries are becoming things an operator can inspect, move, and police,
while remote delegation and long-horizon intent remain unproven. The
direction is consistent (make hidden context into named state), and
the gap is where that state lives once it leaves the local process.

## State becomes reviewable

Read what an agent wants to remember before it sticks. The
[Auto Memory](https://github.com/google-gemini/gemini-cli/commit/a7beb890d093e2cf66ed1ac8debff690b75e1f6d)
inbox proposes durable updates as patches with a canonical contract
surfaced through docs, settings schema, memory commands, inbox UI, local
executor behavior, skill extraction, and evals. Private memory patches
sit behind a [tightened allowlist](https://github.com/google-gemini/gemini-cli/commit/7fb5146c6b084888b38dea05af6a4e95ea48810a)
separating personal-scope memory from project-scope.

Move sessions between machines as data, not state. An operator can
[export a session to a file and import it via flag](https://github.com/google-gemini/gemini-cli/commit/3805640530a9):
session state is a serializable artifact, not ambient context. Session
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

## Authority follows headless and delegated runs

Non-interactive contexts no longer bypass workspace trust by being
non-interactive.
[Workspace trust enforces in headless mode](https://github.com/google-gemini/gemini-cli/commit/dba9b9a0ff5a43a5d40d554b944db3e2ce99d5b6)
through a new trust-utility module and CI-workflow integration. If you've
been relying on `--non-interactive` to silently skip the trust prompt,
that path is closed: run the trust grant explicitly or fail loudly.
[Trust state is also visible](https://github.com/google-gemini/gemini-cli/commit/a38f393af77c0ccf50da10d73c84cfb594dd8175)
in the MCP listing UX so the boundary is inspectable, not implicit.

Shell command execution carries
[safety evals](https://github.com/google-gemini/gemini-cli/commit/82f6ea5b61a6321748d81a62d34c62bf7d2c9fa2)
on the path between the agent and the host, and shell validation now uses
a [core-tools allowlist](https://github.com/google-gemini/gemini-cli/commit/27927c55e5b4947df0f2e853971c170000429dec)
in the policy engine: explicit allowed-tool mapping in addition to
pattern-based evals.

## Subagents are a boundary, and now have a stable remote surface

Subagents are
[approval-mode aware](https://github.com/google-gemini/gemini-cli/commit/40b384de2c1d251c9d13a6359216a9e6cff5a254):
delegated work inherits the active approval posture rather than escaping
it. As of
[v0.44.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0)
(stable, 2026-05-27), `LocalSessionInvocation` and `RemoteSessionInvocation`
ship as the session-invocation protocols, replacing the prior preview-only
state of the abstraction. The "tests but no observed remote target" gap
from the 2026-05-11 finding closed at the protocol layer; **where the
remote target actually runs** (Google-hosted, operator-hosted, both)
remains undocumented. Agent registration also moves to first-wins
prioritize-project: when the same agent name is defined at multiple
scopes, project wins.

Treat delegated workflows as testable against v0.44.0 stable; do not
yet depend on the remote path for production until Google documents
where remote invocations run.

## Default-on autonomy

[v0.44.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0)
collapses the prior fan of Auto variants into a single Auto mode
and adds shell-redirect auto-approval in `AUTO_EDIT`. PolicyEngine
integrates into ACP sessions (framed as a deadlock fix; the
structural effect is that enforcement reaches the protocol-session
layer). Operators on previous Auto variants must re-audit what the
consolidated Auto mode treats as safe: the release notes do not
enumerate which prior-mode constraint survived the merger.
`AUTO_EDIT` users should explicitly decide whether shell-redirect
auto-approval is acceptable for their environment; redirects are a
write surface if the agent is steered toward sensitive paths.

*Posture basis: `2026-05-07-gemini-reviewable-memory-and-trust`,
`2026-05-11-gemini-subagent-protocol-and-session-portability`,
`2026-05-12-gemini-session-resume-reliability`,
`2026-05-27-gemini-session-invocation-protocols-stable`,
`2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp`.*

## Open questions

- Where do remote session invocations actually run? `RemoteSessionInvocation`
  is stable in v0.44.0 as a protocol but the runtime target
  (Google-hosted, operator-hosted, or both) is undocumented. Until
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

## What to watch next

- Whether the Antigravity-CLI steering hardens into a managed succession:
  the [transition banner](https://github.com/google-gemini/gemini-cli/commit/f40498db6)
  is already uncapped in stable, the
  [migration commands and skill](https://github.com/google-gemini/gemini-cli/commit/452356027)
  are in preview, and the destination is a separate binary. Whether trust
  and policy semantics carry over to the successor is the open question.
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
  nightly.
- Policy-engine work that changes how operators express trust beyond
  workspace-level grants.

## Profile hygiene

This profile follows the discipline in `METHOD.md`:
every concrete claim has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite
finding IDs when naming a specific feature, behavior change, or
cross-provider comparison. Cross-provider editorial belongs in the weekly
digest, not here. Git history is the audit trail; removed claims live in
the diff log.
