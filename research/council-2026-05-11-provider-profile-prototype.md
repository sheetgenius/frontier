# Council Question: Provider Profile Prototype (Gemini CLI)

## Context

Bitter Frontier is a research-and-publication surface watching frontier
coding-agent harnesses (Codex, Claude Code, Gemini CLI, Hermes, Pi, OpenClaw,
Paperclip, Agent Zero, OpenHands). The repo's durable artifact chain today is:

```
source material -> finding -> signal -> digest -> backstage note -> run artifact
```

`AGENTS.md` and `RESEARCH_CONTRACT.md` are the steering documents. House rule:

```
No frontier claim without an operator consequence.
No operator consequence without a receipt.
No signal unless it can change the next action.
```

## Proposed Change

Add a new durable object: a **provider profile** - one evergreen Markdown file
per watched source (e.g. `content/profiles/gemini-cli.md`) that aggregates
current capability state and editorial posture, with per-claim receipts that
cite the accepted finding which established or last refreshed each claim.

Profiles become part of the standard pipeline:

```
profiles (read for grounding)
  -> source contracts
  -> source material
  -> findings
  -> accepted signals
  -> weekly digest
  -> profiles (update)
  -> backstage note
  -> QA
  -> static publication
```

Two stated design decisions:

1. Profile updates are a **separate editorial pass after the digest**, not
   auto-derived from accepted findings. Reason: multiple findings often
   collapse into one current-state claim, and that flattening is editorial.
2. **Per-claim receipts**: every concrete claim cites a finding ID and a
   `last_verified` date. This gives a free changelog and a staleness signal.

## The Prototype

Below is the first prototype, `content/profiles/gemini-cli.md`. It is
grounded only in the one accepted Gemini-CLI finding from the
2026-05-07 commit-harvest run (`2026-05-07-gemini-reviewable-memory-and-trust`)
plus the source contract.

```markdown
---
schema_version: bitter.frontier_profile.v0
profile_id: gemini-cli
label: Gemini CLI
owner: Google
source_contract: sources/gemini-cli.yml
homepage: https://github.com/google-gemini/gemini-cli
docs: https://google-gemini.github.io/gemini-cli/docs/
status: active_watch
last_updated: 2026-05-11
last_full_review: 2026-05-07
contributing_findings:
  - 2026-05-07-gemini-reviewable-memory-and-trust
---

# Gemini CLI

Gemini CLI is the calibration source for a high-velocity open-source terminal
agent backed by a large model vendor. It is watched for release-channel
behavior, memory and context handling, authority surfaces (sandboxing,
workspace trust, permissions), tool and extension reach, IDE and CI
integrations, and the cadence of preview versus stable channels.

This profile is grounded only in accepted findings. Each claim names the
finding that established or last refreshed it. A claim with no recent finding
is either uncited or moved to `Open Questions`.

## Current Capability State

### Memory

- Memory is being shaped as a reviewable patch, not an invisible append. The
  Auto Memory inbox proposes durable updates with a canonical patch contract
  surfaced through docs, settings schema, memory commands, inbox UI, local
  executor behavior, skill extraction, and evals.
  *Receipt: `2026-05-07-gemini-reviewable-memory-and-trust` - verified 2026-05-07.*
- Private memory patches operate under a tightened allowlist, separating
  personal-scope memory from project-scope memory.
  *Receipt: `2026-05-07-gemini-reviewable-memory-and-trust` - verified 2026-05-07.*

### Authority And Trust

- Workspace trust state is visible in the MCP listing UX, making the trust
  boundary inspectable rather than implicit.
  *Receipt: `2026-05-07-gemini-reviewable-memory-and-trust` - verified 2026-05-07.*
- Shell command execution carries safety evals on the path between the agent
  and the host shell.
  *Receipt: `2026-05-07-gemini-reviewable-memory-and-trust` - verified 2026-05-07.*
- Subagents are approval-mode aware, so delegated work inherits the active
  approval posture rather than escaping it.
  *Receipt: `2026-05-07-gemini-reviewable-memory-and-trust` - verified 2026-05-07.*

### Output Contracts

- AgentExecutionStopped now emits as structured JSON, giving non-interactive
  callers a parseable end-of-run signal.
  *Receipt: `2026-05-07-gemini-reviewable-memory-and-trust` - verified 2026-05-07.*

## Posture

### Capability Lens

Gemini CLI is building agent-side state as an operating surface rather than as
hidden context. The memory-inbox pattern is the clearest expression: the
agent proposes, the operator decides, the patch lands.

### Accessibility Lens

The reviewable-memory pattern raises accessibility because it makes a
historically opaque mechanism inspectable. Workspace trust visibility in the
MCP list works similarly: authority that would otherwise be implicit becomes
nameable. Accessibility impact is medium, not high.

### Governance Lens

The combination of workspace trust, allowlisted private memory, shell-safety
evals, and approval-mode-aware subagents is a coherent authority story for an
otherwise highly permissive harness.

## Open Questions

- Should nightly and preview releases be harvested into findings, or only
  used as adapter-probe canaries?
- Which security advisories should be treated as direct signals even when
  they do not change public docs?
- Does the harness offer a first-class long-horizon primitive (goal,
  mission, outcome) beyond in-session todos and memory? Memory captures
  facts, not intent. No accepted finding establishes such a primitive as of
  2026-05-07.

## What To Watch Next

- Further structured non-interactive output beyond AgentExecutionStopped.
- Whether the memory-inbox pattern extends to other state classes (skills,
  goals, session recaps).
- Stable-channel arrival of changes currently visible only in preview or
  nightly.
- Any policy-engine work that changes how operators express trust beyond
  workspace-level grants.

## Profile Hygiene

- Every claim above must cite the finding that established or last refreshed
  it. A claim older than two harvest cycles without a refreshing finding
  should be re-verified or removed.
- This profile is updated only after a weekly digest accepts findings about
  Gemini CLI. It is not hand-edited from model memory, release-note
  paraphrase, or third-party summary.
- Posture sections are editorial and may be rewritten as the lens evolves,
  but every concrete claim inside them must trace back to an accepted
  finding.
```

## What I Want The Council To Pressure-Test

1. **Format viability**: Does this shape generalize across nine providers,
   or will some providers (e.g. closed-source ones like Claude Code without a
   public commit stream) force a different format?
2. **Discipline**: Is the per-claim receipt format (italic line under each
   bullet) the right tradeoff between auditability and readability? Or
   should receipts be footnoted, or kept in YAML frontmatter instead?
3. **Duplication risk**: The profile mirrors parts of the source contract
   (`discovery.open_questions`, `notes`) and parts of the latest digest
   (capability framing). Where should the canonical truth live for each
   field, and how do we prevent drift between profile, source contract, and
   digest?
4. **Pipeline placement**: Is "read profiles for grounding" at harvest start
   the right move, or does it bias the harvester toward confirming what we
   already wrote? Counter-argument: without it, the harvester re-discovers
   known facts as if they were new.
5. **Posture section discipline**: Posture sections are editorial. Should
   they cite findings on every clause, or is the looser standard ("concrete
   claims must trace back") sufficient?
6. **Failure modes**: What does this format degrade into after twelve
   months of weekly updates? Identify the most likely failure mode and the
   smallest doctrine change that would prevent it.

Push back specifically and concretely. Generic praise is not useful. If the
format is wrong, say which constraint would break it.
