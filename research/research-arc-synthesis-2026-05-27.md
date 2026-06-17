---
title: Research arc synthesis — delta 2026-05-14 → 2026-05-27
author: claude-opus-4-7 (synthesizing four parallel delta surveys)
date: 2026-05-27
status: working notes
purpose: ground the next move in what the world did across the agent-receipt landscape and the watchlist between the 2026-05-14 synthesis and today.
---

# Research arc synthesis — delta 2026-05-14 → 2026-05-27

Sixteen calendar days since the prior synthesis. Four parallel subagent surveys ran in this session: an external delta against `research/agent-receipt-spec-survey-2026-05-11.md`, and three watchlist partial-cycle harvests (Group A: Codex / Claude Code / Gemini CLI; Group B: OpenHands / Agent Zero / OpenClaw; Group C: Hermes Agent / Pi / Paperclip / Flue). Outputs landed at:

- `research/agent-receipt-spec-survey-delta-2026-05-27.md` (~590 lines)
- `research/watchlist-harvest-2026-05-13_2026-05-27/group-a.md` (~563 lines)
- `research/watchlist-harvest-2026-05-13_2026-05-27/group-b.md` (~543 lines)
- `research/watchlist-harvest-2026-05-13_2026-05-27/group-c.md` (~278 lines)

What follows is what I now believe is true, where the surveys raise doctrine questions, and what should move next.

## One-paragraph delta

The agent-receipt landscape moved faster than the 2026-05-11 survey modelled. OTel graduated from CNCF on 2026-05-21 and split GenAI semconv into a dedicated repo. The future-tense bucket the baseline named *empty* is still empty as a spec, but the seam is narrowing from above (OTel `gen_ai.*` memory-ops merged, context-selection + memory-systems proposals in flight) and from below (Maestro, 176 stars, framing per-task receipt + verdict ledger). On the watchlist, ten Tier-1+Tier-2 providers produced 47 findings and 28 candidate signals in the 2026-05-13 → 2026-05-27 window, with strong cross-provider threads on (a) default-on autonomy, (b) authority over inputs, (c) policy-in-versioned-files, (d) structural-not-asserted governance, (e) supply-chain hardening. The window contains material for a publishable weekly digest, a profile refresh pass on all ten providers, and two audit-note doctrine questions worth surfacing.

## The receipt-spec landscape — what moved

Five concrete deltas (full detail in the delta survey §2–§7):

1. **OTel split GenAI semconv into `open-telemetry/semantic-conventions-genai`** (created 2026-05-05, formalized by 2026-05-18). Dedicated release workflow, PR dashboard, executable reference scenarios. The contribution surface the baseline named "Phase 3" is now first-class.
2. **OpenTelemetry graduated from CNCF on 2026-05-21.** AWS-cited as "the foundation of trust in AI agents." The past-tense bucket is no longer *converging* — it has *graduated*. Any Bitter posture that depends on OTel-as-default-emit-target hardened.
3. **`gen_ai.*` lifecycle primitives are landing.** PR #140 (memory operation conventions) merged 2026-05-19, establishing `create_memory_store`, `search_memory`, `update_memory`, `delete_memory`, `delete_memory_store` as `gen_ai.operation.name` values. Open + adjacent: #162 compaction, #190 context-selection-evaluated event, #185 evaluation span, #188 invoke_node workflow span, #195 A2A semconv, #200 broader `gen_ai.memory.*` lifecycle proposal opened same day as the delta survey. None is a `lesson` / `correction` / `harness.diff` primitive, but several are two design iterations away.
4. **Proof-tense bucket stratified.** `draft-marques-asqav-compliance-receipts` went `-01` → `-04` in eight days, binding to nine regulatory frameworks plus a counterparty-binding extension. `draft-farley-acta-knowledge-units-00` formalized multi-model deliberation evidence. Microsoft Agent Governance Toolkit shipped v3.6 and v3.7 with `GateRecord`. Naming-collision risk for a Bitter-published spec is now **five neighbours**: Marques ASQAV, Farley ACTA, MS Toolkit, Mastercard AAR / Verifiable Intent, `agentreceipts.ai`.
5. **First tool-level claimant in the future-tense bucket: `ReinaMacCredy/maestro`** (176 stars, MIT). Frames itself as an "agent harness" with a "verdict ledger" and per-task receipt metadata (`summary`, `surprise`, `verifiedBy`). Not a spec. Not governance-backed. But a public artifact with momentum that names the same problem `bitter.macro_run.v0` names.

The delta survey's bottom line: Phase 1 of the agent-receipt-spec proposal **still holds and should accelerate**. Concrete recommended changes:

- Ship in ≤2 weeks, not 1–2 weeks + drift.
- Rename the open envelope from `bitter.run.receipt.v0` to **`operator.run.receipt.v0`** to disambiguate from the five proof-tense neighbours and let third-party adopters (Maestro, OpenHands, AAIF reviewers) take the spec without taking the Bitter brand.
- Add Maestro to the reference-adapter target list (alongside Hermes, OpenHands, Claude Code, Codex, Gemini CLI). Turn the closest tool-layer competitor into the first spec adopter.
- Lead the spec doc with a five-neighbour disambiguation section, not the four-bucket taxonomy.
- Post the OTel SIG `gen_ai.lesson.*` / `gen_ai.harness.diff` sketch in parallel with Phase 1, not after Phase 2.

The new risks the baseline did not model: OTel landing a future-tense primitive under `gen_ai.*` *before* Bitter publishes; Maestro-style tool-layer pattern becoming the cultural default.

## The watchlist — what moved, and what the threads are

Forty-seven findings, twenty-eight candidate signals across ten providers. Per-provider summary:

| Group | Provider | Findings | Candidate signals | Top-level shape of the window |
|---|---|---|---|---|
| A | Codex | 6 | 3 | Goal-mode graduated default-on + remote computer use; `codex exec resume --output-schema`; org-managed `requirements.toml` + profile inheritance; plugin marketplace launch |
| A | Claude Code | 5 | 2 | Auto-mode default-on (2.1.152, posture flip); PowerShell `cd..` bypass + worktree sandbox fixes (de-facto security advisories) |
| A | Gemini CLI | 4 | 2 | Session invocation protocols (`LocalSessionInvocation`, `RemoteSessionInvocation`) stable in v0.44.0; context-files-now-append silent semantic change; PolicyEngine-in-ACP |
| B | OpenHands | 6 | 4 | ACP agent UI fronting Claude Code/Codex/Gemini; org-level LLM profiles + two-tier permissions; enterprise DC integrations (Bitbucket / Jira / Azure DevOps Entra); MCP/ACP env scoped per org member (cross-org leak fix); CVE batch |
| B | Agent Zero | 4 | 3 | Host-machine desktop control with platform-specific structural targeting + required visual verification (v1.17); speech split into independent plugins (breaking, v1.16); skills cap configurable (v1.18) |
| B | OpenClaw | 5 | 3 | Content-boundary hardening (SSRF, sender allowlists pre-dispatch); transcripts promoted to core source provider; reaction-based approvals across Signal/iMessage/WhatsApp; named auth profiles with precedence; realtime steerable Talk runs |
| C | Hermes Agent | 5 | 3 | v0.14.0 "Foundation Release" (808 commits / 633 PRs); `hermes proxy` OpenAI-compatible local proxy; Honcho identity-mapping; sustained Kanban-corruption-hardening |
| C | Pi | 3 | 2 | Supply-chain hardening (v0.75.4 shrinkwrap + lifecycle-script controls + isolated install smoke); `--session-id` + `excludeFromContext` (v0.76.0) |
| C | Paperclip | 4 | 3 | Scoped agent permissions + protected assignments; routine env secrets with `agent < project < routine` precedence; issue document locks; Modal sandbox + ACPX-Claude respecting `~/.claude/settings.json` |
| C | Flue (Tier 2) | 5 | 3 | Persistent `agents/` vs finite `workflows/` category split (v0.8.0 — runs-as-workflow-only); `local()` sandbox factory with env allowlist; Cloudflare Shell sandbox replacing R2 model; OpenAPI + read-only admin sub-app |

The cross-provider threads — these are the digest hooks:

- **Default-on autonomy hits three providers in the same window.** Claude Code 2.1.152 flips Auto to default-on; Gemini CLI v0.44.0 collapses Auto modes and `AUTO_EDIT` adds shell-redirect auto-approval; Codex 26.519 + CLI 0.133.0 graduate Goal-mode default-on across app/IDE/CLI on 2026-05-21. The bridge field between accessibility gain and authority cost (Amendment 004) is exactly the cross-axis tension this thread describes.
- **Authority over inputs is generalising through three different surfaces.** OpenClaw at the inbound-sender layer (allowlists pre-dispatch, prompt-marker spoofing prevention). Agent Zero at the host-runtime layer (vision-verified host actions). OpenHands at the org-member layer (per-member private MCP / ACP env, org-admin LLM profiles). Same primitive, three surfaces — the strongest single thread of the window.
- **Policy lives in versioned, org-managed files.** Codex's `requirements.toml` and Gemini's PolicyEngine-in-ACP both shift policy from per-session flags into versioned configuration consulted by the agent runtime. Control Plane convergence.
- **Structural-not-asserted governance is gaining mechanisms.** Paperclip scoped permissions + issue document locks + protected assignments. Hermes Kanban hallucination gate. Same thesis: "no evidence, no state change" — enforced at the structural layer, not by agent self-report.
- **Supply-chain hardening as parallel motion.** Hermes v0.14.0 ships a supply-chain advisory checker + lazy install + tiered fallback. Pi v0.75.4 ships explicit shrinkwrap + lifecycle-script controls + isolated install smoke. Two providers from different surface classes converge on the same posture in the same two-week window.
- **Runs-as-workflow-only (Flue 0.8.0)** maps cleanly onto Bitter's finding-vs-signal distinction. Persistent agents do not produce runs; workflows do. A clean "what is the receipt?" answer worth examining in backstage.

## Doctrine questions surfaced

The harvest raised three doctrine questions that should be tracked as audit notes — and possibly drafted into `charter/proposed/` amendments — before the next big move:

1. **Release-as-finding vs decompose at signal-promotion.** Hermes v0.14.0 is one release with 808 commits touching distribution, supply chain, performance, native Windows, Zed registry, and multiple new providers. `RESEARCH_CONTRACT.md` defines a finding as a *"source-backed observation of what changed"* — singular. Group C's recommendation, which I endorse: decompose at signal-promotion time, not finding time. Findings can be release-shaped; signals must be operator-consequence-shaped. Draftable as an amendment-005 clarification on finding granularity.
2. **Where do composition findings live?** Paperclip's ACPX-Claude adapter respecting `~/.claude/settings.json` is a claim about *two products' permission systems composing*, not about a single product changing. The current schema (`finding.subject` is a single provider) doesn't have a slot for this. If the pattern recurs (and it will, as more agents wrap or front other agents — OpenHands ACP UI fronting Claude Code/Codex/Gemini is exactly the same shape), the schema needs a `composes: [other_subject]` field or an explicit cross-subject finding kind. Draftable as an amendment-006 proposal.
3. **Claude Code de-facto security advisories without an advisory surface.** 2.1.147 (PowerShell `cd..` bypass), 2.1.148 (worktree sandbox scope bug), 2.1.149 (`forceLoginOrgUUID` enforcement gap) all carry advisory-grade content but Anthropic does not publish them as advisories. `sources/claude-code.yml` names `official_changelog` as priority-1 and has no security advisory surface. Either treat the changelog as the de-facto advisory surface explicitly (with a note in `notes.md`) or add an advisory surface. Source-contract revision, not a charter amendment.

Two adjacent surface-contract issues to record (lower priority than the doctrine questions):

- Claude Code Week 21 and Week 22 `whats-new` digests are not published as of 2026-05-27 despite the changelog being current through 2.1.152 same-day. The official_digest priority-1 surface is two weeks stale. Not a Bitter problem to fix — but harvesters should not block on the digest catching up.
- OpenHands has no tagged release in window, only main-branch work. The current profile's `evidence_floor: release_note` blocks all the in-window work from being promoted to signal until the next release ships. Either accept `commit_diff_reviewed` for OpenHands (consistent with Amendment 003's new precision level) or wait for the next release to consolidate.

## What this implies for the next move

Three workstreams are now ready:

**1. Receipt-spec Phase 1 — the highest-leverage move.** The delta survey is unambiguous: ship `operator.run.receipt.v0` (renamed from `bitter.run.receipt.v0` for adopter neutrality) in ≤2 weeks. Two real risks now exist that did not on 2026-05-11 — OTel landing a future-tense primitive first; Maestro-style tool pattern becoming the cultural default — and both are mitigated by shipping faster, not by adding more design. The schema-shape work is already done internally (`bitter.macro_run.v0`). The blocker is publication, not invention.

**2. Weekly digest for 2026-05-13 → 2026-05-27.** The watchlist harvest has more than enough material. The lead candidates for the digest's thesis paragraph: *default-on autonomy*, *authority over inputs*, *policy in versioned files*. The accessibility_consequence triad and security_consequence triad (Amendment 004) will be load-bearing for at least four signals (Claude Code auto-mode flip, Codex goal-mode-default-on + remote computer use, OpenClaw content-boundary suite, Agent Zero host-desktop with vision verification). Likely also one backstage note since multiple findings touch Bitter directly (OpenHands ACP UI fronting Claude Code/Codex/Gemini is exactly the meta-harness story Amendment 004 names).

**3. Profile refresh pass.** All ten profiles were last reviewed 2026-05-12 or 2026-05-13. The harvest gives the source material for refreshing each profile's claims, posture_basis, Open Questions, and What To Watch Next. Editorial pass per the RESEARCH_CONTRACT's profile doctrine; should be cheap relative to writing the digest because the findings already exist.

These three are not strictly ordered. The receipt-spec ship is the most consequential and the most independent of the others. The digest and profile refresh share source material and should probably move together. The three doctrine questions should be raised as audit notes alongside whichever workstream moves next (probably the digest, since that's where the questions will bite).

The Tier-2 CLI ergonomics launch remains held pending a clean `/Users/c3po/co/bitter` worktree; that is a separate concern from this research arc.

## What I know that I didn't on 2026-05-14

1. **The future-tense seam is narrowing from two sides at once.** Above (OTel SIG #190 context-selection + #200 memory-systems), below (Maestro tool-layer pattern). The baseline assumed 6–12 months of empty bucket. Sixteen days narrowed it to *maybe* four design iterations on the OTel side and *now* on the tool side.
2. **OTel graduation reframes Bitter's emit-target posture.** "Emit OTel for past-tense" was a development-stage bet on 2026-05-11; on 2026-05-27 it's a graduated-CNCF-project bet. The hybrid Option C is a stronger position now than it was when it was proposed.
3. **The watchlist is converging on a smaller number of larger themes.** Sixteen days, ten providers, five strong cross-provider threads (default-on autonomy, authority over inputs, policy in versioned files, structural governance, supply-chain hardening). The frontier is not one winning agent or one winning surface; the frontier is a handful of operator concerns showing up everywhere at once. The Amendment 004 section taxonomy (Control Plane / Runtime / Platform) and cross-cutting axes (authority / evidence / accessibility / security) absorbed the harvest cleanly — every finding had a section_candidate and at least one axis_candidate.
4. **Composition is the next schema pressure.** ACPX-Claude × `~/.claude/settings.json`, OpenHands ACP UI fronting third-party agents, Hermes proxy as OAuth credential router — the pattern recurs. The current finding schema's single-subject assumption will need to grow.

— claude-opus-4-7, 2026-05-27
