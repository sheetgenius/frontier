# Council Dossier: macro_8d1245dc-65ad-4f94-a913-38c45cc8a767

## Context
- question_source: file
- question_file: /tmp/bitter-council-prompts/claude-code.md
- cwd: /Users/c3po/co/bitterfrontier
- model_policy: {"codex_model":null,"codex_config":["model_reasoning_effort=xhigh"],"synthesis_codex_model":null,"synthesis_codex_config":["model_reasoning_effort=xhigh"],"claude_model":null,"gemini_model":null,"reviewers":["codex"],"synthesizer":"codex","child_timeout_ms":900000,"name":"claude-code-profile-2026-05-29"}

## Question
# Bitter Frontier — Claude Code profile council pressure-test

## Context

Bitter Frontier (`https://frontier.bitter.sh`) is a research-and-publication
surface watching frontier coding-agent harnesses. The house rule is:

> No frontier claim without an operator consequence.
> No operator consequence without a receipt.
> No signal unless it can change the next action.

The Claude Code profile (`content/profiles/claude-code.md` in the
`bitterfrontier` repo) carries `surface_class: closed_source_release_notes`
and `evidence_floor: release_note`. It is the only profile in this
surface_class. The convergence target for the autonomous loop requires at
least one external-review council pressure-test per surface_class.

This council is that pressure-test for `closed_source_release_notes`. You
are asked to act as an independent reviewer (Codex, xhigh reasoning effort).

## Current stance (paraphrased from the profile)

- **Use it for**: supervising several Claude Code sessions from one screen,
  or setting a completion condition on work that should keep moving after
  the operator leaves the terminal.
- **Avoid it for**: fully offline workflows. Under API-key-only auth, the
  cloud control surfaces (Remote Control, scheduling, claude.ai MCP
  connectors) disable themselves; cloud features require cloud auth.
- **Watch next**: whether autonomous-completion and cloud-review surfaces
  stabilize output schemas a CI pipeline can ingest, and how aggressively
  cloud-only features keep expanding past local-only auth.

## Three claims to pressure-test

Defend or refute each claim below. For each, name either a missed nuance
in the editorial prose or a piece of overclaim, and give one operator-facing
recommendation.

### Claim 1 — "Auto mode default-on is a permission-posture shift, not a UX polish."

The current digest framing (`content/digests/2026-05-13_2026-05-27-weekly.md`)
treats Claude Code v2.1.152's Auto mode flipping from opt-in-with-consent to
baseline as a structural consent-surface removal, not a release-note polish.

Defend or refute: is the editorial framing overweighting a release-note
change that most operators won't notice? Or is it appropriately calling out
a structural consent-surface removal?

### Claim 2 — "The changelog is the de-facto security-advisory surface."

The Claude Code profile and a recently-ratified `sources/claude-code.notes.md`
note both treat the changelog as the de-facto advisory surface — meaning
Anthropic ships security-shape changes (PowerShell allowlist tightening,
git worktree sandbox fixes, enterprise login pinning) as ordinary changelog
entries, and Bitter Frontier promotes them to advisory-equivalent.

Defend or refute: does this promotion over-claim governance authority for a
closed-source project? Or is the discipline correct because operators
read changelogs and don't subscribe to a separate advisory channel?

### Claim 3 — "API-key-only auth turns off the most valuable surfaces."

The profile's `Avoid it for` clause leans on this claim. Concretely: under
API-key-only auth (vs Claude.ai login), Remote Control, scheduling, and
the claude.ai MCP connectors disable themselves.

Defend or refute: is this a temporary product reality that will drift, or
a durable boundary that operators should plan around? If durable, is the
profile's framing under-claiming the implication for enterprise procurement?

## Required answer shape

- Per claim: verdict (sustain / refute / partial), reasoning, operator-facing
  recommendation.
- A single overall verdict on whether the profile's current stance is
  defensible as written for the next refresh cycle.
- Any missed nuance the profile should add.
- Any over-claim the profile should retract.
- Bonus: is `surface_class: closed_source_release_notes` still the right
  classification given that 2026-05-22+ Claude Code release notes mention
  pre-existing security fixes inline?

## Source handles

- Profile: `content/profiles/claude-code.md` in `bitterfrontier`.
- Recent signals: `2026-05-27-claude-code-auto-mode-default-on`,
  `2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes`.
- Source contract: `sources/claude-code.yml` and
  `sources/claude-code.notes.md`.
- Digest: `content/digests/2026-05-13_2026-05-27-weekly.md`.
- House rules: `CHARTER.md`, `RESEARCH_CONTRACT.md`, `AGENTS.md`.

## Quality target

Surface at least one finding the editor should fix, reword, or sharpen in
the next refresh cycle. A no-issues verdict is fine if you reach it with
genuine consideration of each claim — but the convergence target benefits
more from a useful correction than a polite confirmation.

## Research Outputs
- research_codex: ok -> child_runs/research_codex/output.jsonl

## Review Outputs
- review_codex: ok -> child_runs/review_codex/output.jsonl

## Synthesis
I’m using the charterwright skill here because this is a doctrine/evidence pressure-test, not an implementation change. I’ll read the repo artifacts first, then verify any live Anthropic facts against primary sources before giving the operator-facing verdict.The governing rule I’m applying is simple: each challenged claim has to carry a receipt, an operator consequence, and a concrete next action. I’m loading the profile, source contract, digest, and signal artifacts now so the verdict ties to the actual repo text.The live source check adds two useful corrections: the 2026-05-27 facts still hold, but the official changelog has already moved on to 2.1.157 by 2026-05-29. Those later entries reinforce “cloud/autonomy expanding” more than they undermine it, while they also expose one profile wording problem around “most valuable surfaces.”As of source-check, the profile is behind the latest Claude Code changelog: current official docs show 2.1.157 on May 29, 2026, after the profile’s May 27 refresh. I found no substantive `review_codex` disagreement to integrate.

**Claim 1: Auto Mode**
Verdict: **sustain**.

The framing is directionally right. Anthropic’s 2.1.152 changelog says Auto mode no longer requires opt-in consent, and the same release adds `disallowed-tools` plus `MessageDisplay`, so this is a permission-posture change, not just polish. The nuance: this does not prove risky actions stopped gating; it proves the consent ceremony moved out of the default runtime path. The later 2.1.154 and 2.1.157 notes reinforce the direction: dynamic workflows, fewer unnecessary multiple-choice prompts, auto-mode classifier fixes, and less startup permission ceremony. ([code.claude.com](https://code.claude.com/docs/en/changelog)) ([code.claude.com](https://code.claude.com/docs/en/changelog))

Recommendation: keep the signal, but sharpen wording from “autonomy stopped asking” to “baseline consent moved from opt-in runtime ceremony to managed policy and classifier behavior.”

**Claim 2: Changelog As Advisory Surface**
Verdict: **sustain, with a wording guard**.

The promotion is valid as Bitter Frontier discipline, not as a claim that Anthropic officially designated an advisory channel. The changelog contains advisory-shaped entries: PowerShell workspace-boundary bypass, git-worktree sandbox over-scope, and enterprise login restriction enforcement gaps. Operators need those for upgrade decisions. ([code.claude.com](https://code.claude.com/docs/en/changelog))

The overclaim to avoid is “Anthropic has no separate advisory surface” as an absolute unless the source contract records how that absence was verified. Better: “No separate Claude Code advisory surface is named in the current source contract or current official docs reviewed; until one appears, treat advisory-shaped changelog entries as Bitter advisory-equivalent.”

Recommendation: keep `security_advisory: true` for upgrade-blocking changelog fixes, but label it explicitly as Bitter’s advisory-equivalent classification.

**Claim 3: API-Key-Only Auth**
Verdict: **partial**.

The concrete fact is sustained. Anthropic’s changelog says Remote Control, `/schedule`, claude.ai MCP connectors, and notifications are disabled when API-key/token auth is active, even if Claude.ai login also exists. Current docs corroborate this: Remote Control does not support API keys, `/schedule` requires Claude.ai subscription login, claude.ai MCP connectors load only under subscription auth, and API keys take precedence in CLI auth. ([code.claude.com](https://code.claude.com/docs/en/changelog))    

But “most valuable surfaces” is too universal. For API-first CI or local terminal users, API-key auth may still be the valuable path. The durable planning boundary is narrower and stronger: cloud-account-mediated control surfaces require Claude.ai identity, plan entitlements, and sometimes admin toggles.

Recommendation: change the profile’s procurement implication. Enterprise buyers should not assume Console/API procurement unlocks Remote Control, routines, claude.ai connectors, or cloud review workflows; they need Claude.ai account policy, SSO/admin settings, compliance review, and auth-method testing.

**Overall Verdict**
The profile’s stance is defensible for the next refresh cycle, but not as written without one wording fix. Its evidence chain is sound. The main weakness is editorial scope: “most valuable control surfaces” should become “highest-leverage cloud-control surfaces” or “the cloud-control surfaces this profile recommends.”

**Missed Nuance**
Add that API-key-only is not “fully offline.” It is an online API auth path that disables cloud-account control surfaces. Also add that Team/Enterprise Remote Control and routines can depend on admin toggles and compliance settings, not just the operator’s auth method.

**Overclaim To Retract**
Retract or soften: “none is planned at time of writing” in the source notes unless there is a receipt. Also avoid treating Bitter’s advisory-equivalent label as Anthropic governance authority.

**Bonus**
`surface_class: closed_source_release_notes` is still right. The changelog is generated from GitHub `CHANGELOG.md`, but the product remains closed-source and the operational evidence is release-note text, not reviewed source diffs.

## Smallest Implementation Target

Patch `content/profiles/claude-code.md` to replace “most valuable control surfaces” with cloud-control-scoped wording and add one enterprise procurement sentence about Claude.ai auth, admin toggles, and API-key procurement not being sufficient.

## Use
- Treat this dossier as research input, not authority by itself.
- Source-check accepted and rejected claims before launching a worker.
