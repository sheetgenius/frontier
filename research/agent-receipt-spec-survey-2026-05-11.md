# Agent Run Receipt Spec — Internal Survey + External Landscape + Strategic Recommendation

Last revised: 2026-05-11
Status: Draft for internal review (Bitter / BitterFrontier)
Author of record: Michael Ruescher, with Claude Opus 4.7 (1M context). External landscape research conducted by parallel agent on 2026-05-11.

---

## 0. The Question

> Should Bitter define its own agent-run / agent-log / agent-receipt specification, or should we align with an existing standard that has strong momentum and is likely to become the de facto industry standard?

This document surveys what Bitter already has internally, surveys what exists externally (24 specs reviewed), identifies the actual gap, and proposes a strategic posture.

**One-line answer:** No existing spec covers what Bitter has. Existing specs converge in three buckets — past-tense observability (OTel GenAI), proof-tense accountability (W3C VC-style receipts), and manifest-tense declaration (AgentSpec, A2A Agent Cards). Bitter's R5 truth-layer occupies a fourth bucket — future-tense operator-derived corrective signal — that nobody else is filling. The recommendation is hybrid: emit OTel GenAI for past-tense (free interop), publish a small `bitter.run.receipt` v0.1 spec for future-tense (claims the unclaimed surface), then propose extensions to the OTel GenAI SIG once 2-3 months of internal evidence support the shape.

---

## 1. What Bitter Already Has Internally

This section is more substantive than expected. Bitter has been thinking about agent-run capture for a while; the result is a four-layer stack that is genuinely sophisticated relative to the external landscape.

### 1.1 BitterLog — append-only event ledger + bucket objects + annotations

`bitterlog/` is the canonical ingest and evidence identity service. Its README states the rule explicitly:

> *"preserve raw evidence first / parse later"*

Concrete schemas:

**`log_events` table** (Rails / Postgres):
```
id, agent, created_at, digest (unique),
event_type, external_id, level, message,
occurred_at, payload (json), request_id,
run_id, service, source, stream,
tags (json), trace_id, updated_at
```
Indexed on `digest` (unique), `run_id+occurred_at`, `source+external_id`, `source+service+stream+occurred_at`, `trace_id+occurred_at`.

The fields `request_id`, `trace_id` are already OTel-shape compatible. Content addressing via `digest` is built in. External-system correlation via `external_id` is built in.

**`bucket_objects` table** (raw evidence storage):
```
id, agent, body, bucket, byte_count,
content_type, created_at, digest, metadata (json),
observed_at, origin, raw_ref, run_id, service, source, updated_at
```
Indexed on `bucket+digest` (unique), `bucket+run_id+observed_at`, etc.

The first-class bucket is `agent_runs`, intended for raw artifacts before normalization: Codex session JSONL, Factory `tmp/agent-runs/*.jsonl`, stdout/stderr files, prompt snapshots, completion reflections, GoltMund context-bet receipts.

**`annotations` table** (interpretations over evidence):
```
id, annotation_type, author_id, author_type, body,
confidence (decimal 5,4), created_at, payload (json), score (decimal 8,4),
target_id, target_type, updated_at
```

Annotations are explicitly NOT mutations of raw evidence. *"Later disagreement should be a new annotation."* This is append-only-everywhere discipline.

**API contract** (versioned at `/api/v1/`): events (ingest, list, get), buckets (list/get/post), annotations (list/post), analytics (patterns, query, similar). ClickHouse is downstream of canonical BitterLog storage — a projection (run summaries, tool-call views, token rollups, similarity), not the source of truth.

### 1.2 Factory Run / RunEvent / RunSession — the canonical execution noun

`factory/api/app/models/run.rb` declares `Run` as the canonical execution noun, backed by the `agent_runs` table:

```sql
agent_runs (
  id, account_id, agent_id, backend_session_id,
  cached_input_tokens, chat_conversation_id, chat_message_id,
  cost_usd (decimal 12,4),
  created_at, finished_at, input_tokens,
  intent, iteration, last_output_at,
  live_log_offset, live_log_seq, loop_iteration,
  metadata (json) NOT NULL DEFAULT {},
  next_wake_at, output_tokens,
  parent_run_id, resolved_model, run_session_id,
  runtime_adapter, scheduled_job_id, scheduled_wake_token,
  started_at NOT NULL, status NOT NULL,
  subject_id, subject_type,
  surface NOT NULL, task_key, updated_at
)
```

Plus rich `metadata` JSON containing: `launch.{mode,workflow,delegation,workflow_contract,tools_contract,execution_target}`, `runner.{job_id,last_seq,live_log_offset,last_output_at}`, `queue.{source,priority,blocked_reason}`, `chain_root_id`, `goltmund_completion.settlement.{next_intervention_hint,residual.state}`, `iteration`.

**Statuses:** `queued | in_progress | completed | failed | cancelled`
**Surfaces:** `chat | background | task`

`Run` has self-reference (`parent_run_id`), session grouping (`run_session_id`), and accounting (`account_id`, `agent_id`, token counts, cost_usd).

`RunEvent` is minimal: `kind`, `occurred_at`, `sequence` (unique within run), `run_id`. A per-run ordered event stream.

`RunSession` groups runs into a session with `status` (`active | completed | failed | cancelled`), `launch_mode`, `root_run`, `latest_run`.

`OperatorNudge` and `ToolFeedbackItem` are the "lessons from runs" surfaces — both have `category`, `summary`, `detail`, `run_id`, `domain`, `source`, plus dedup-window logic. These are the explicit operator-side learning capture.

### 1.3 R5 — the truth-layer: `bitter.macro_run.v0`

This is the load-bearing layer and the one most distinct from external standards. R5 (April 2026 sweep) introduced the doctrine:

> *"Bitter should not merely record traces; it should record what claims those traces can support."*

The schema is fully versioned and TypeBox-validated. From `factory/api/lib/bitter/bitter.mjs` and `@bitter/contracts`:

```typescript
MacroRunV0Schema = Type.Object({
  schema_version: Type.Literal("bitter.macro_run.v0"),
  macro_run_id, root_session_id,
  macro_id (DottedIdentifier), macro_version,
  macro_source_content_hash,
  invoked_from, status,
  context_packet_ref: string | null,
  phases: MacroPhaseV0[],
  child_runs: MacroChildRunV0[],
  output_policy, selected_output?,
  measurements_ref: string | null,
  provenance,
  contract_level: ContractLevel,
  evidence_origin: EvidenceOrigin,
  guarantees: MacroRunGuarantees,
  artifacts: MacroRunArtifacts,
  started_at, ended_at?,
  definition_snapshot? (full macro definition snapshot for replay)
})
```

**The contract-level ladder** (six levels of replay/audit credibility):

```
prototype:                 0  — no claim
receipt_v0:                1  — receipt-grade, basic artifact completeness
audit_v0:                  2  — full envelope, replay packet, adapter hashes,
                                raw provider trace
replay_skeleton_v0:        3  — replay structure preserved
trace_replayable_v0:       4  — re-feed provider lines through parser
execution_replayable_v0:   5  — full execution can be replayed
```

**`evidence_origin`** is a separate axis answering "was the evidence real?":

```
fake          — FakeBackendAdapter; satisfies machinery, not real billing
local         — real CLI but against local mock/shim
real_provider — real billed model invocations
production    — real + full operator trust (manifest signatures,
                permission enforcement, budget gating)
```

**`MacroRunGuarantees`** (present-tense facts about what THIS run actually proved):

```
process_tree_cancellation: leader_only | process_group | in_process
permissions_enforced:       boolean
budget_enforced:            boolean
replay_packet_complete:     boolean
provider_lines_trace:       absent | events_only | lines_captured
reasoning_persistence:      full | redacted | drop | not_emitted | mixed | unknown
reasoning_observed:         boolean (could there have been CoT to handle?)
prompt_transport:           argv | stdin | temp_file | mixed
```

**`MacroArtifactStatus`** (per artifact key): `missing | present | inline | generated_on_read`. For `receipt_v0`, required artifact keys: `context_packet`, `replay_packet`, `stages`, `inspection_index`.

There's also `bitter.adapter_capabilities.v0` — a separate envelope describing what each backend adapter supports (provider, binary version, supports_headless / supports_jsonl_events / supports_resume / supports_usage_events / supports_tool_events / supports_cancellation, stdout_protocol, stderr_protocol, reconciliation_after_injection).

**This is the most novel part of Bitter's stack.** Nothing in the external landscape grades runs by replay/audit credibility. They all stop at "we recorded what happened." R5 says: *"we recorded what happened AND we can certify what level of claim this run can credibly support."*

### 1.4 BitterFrontier — editorial layer over receipts (`bitter.frontier_source_contract.v0`)

`bitterfrontier/` is the public research/intake arm. Its `RESEARCH_CONTRACT.md` declares the house rule:

> *"No frontier claim without an operator consequence."*
> *"No operator consequence without a receipt."*
> *"No signal unless it can change the next action."*

The schema `bitter.frontier_source_contract.v0` formalizes how source documents are tracked. The durable objects are **Finding** (source-backed observation), **Signal** (accepted finding that can change at least one operator action), and **Digest** (editorial synthesis for humans). The grammar is consistent with the run-receipt layer below it.

### 1.5 The Bitter house style for schema design

Across all four layers:

1. **Schema versioning**: `bitter.NAMESPACE.v0` (`bitter.macro_run.v0`, `bitter.adapter_capabilities.v0`, `bitter.frontier_source_contract.v0`). Versioned from inception, never mutated after publication.
2. **TypeBox / JSON Schema** as the validation surface. Every envelope declares its `schema_version` literal so consumers can dispatch on version.
3. **Append-only by default.** Annotations don't mutate evidence. New facts are new records.
4. **Truth-layer over telemetry-layer.** The novel move: a run isn't fully described by what happened; it's also described by what claims that record can credibly support.
5. **Content addressing.** Digests, source content hashes, adapter source hashes — anywhere replay or attestation matters.
6. **Separation of axes.** `contract_level` (what claim can be made) is separate from `evidence_origin` (was the evidence real). Reading them together is the load-bearing claim, not collapsing them.
7. **Capability profiles as separate envelopes.** `bitter.adapter_capabilities.v0` isn't embedded in macro_run — it's referenced. Capabilities change less often than runs; cross-referencing keeps each envelope honest.

### 1.6 Summary: Bitter has a four-layer stack

```
Layer 4: BitterFrontier — Findings / Signals / Digests (editorial)
                                          ↑
Layer 3: bitter.macro_run.v0 — truth-layer envelope
         (contract_level + evidence_origin + guarantees + artifacts)
                                          ↑
Layer 2: Run / RunEvent / RunSession — canonical execution noun
         (Rails models in Factory; rich metadata; lineage + delegation)
                                          ↑
Layer 1: BitterLog — log_events + bucket_objects + annotations
         (append-only ledger; raw evidence first, parse later)
```

External standards (OTel GenAI, OpenInference, etc.) map roughly to layers 1–2. **Layers 3 and 4 are not addressed by anything in the external landscape.**

---

## 2. External Landscape (24 specs surveyed, 2026-05-11)

### 2.1 The four-bucket taxonomy

The single most useful framing from the survey: **every existing spec falls into one of three buckets, plus a fourth bucket that nobody is filling.**

| Bucket | What it answers | Example specs | Status |
|---|---|---|---|
| **Past-tense observability** | "What happened during this run?" | OTel GenAI, OpenInference, Langfuse, LangSmith, AgentOps, Phoenix, OpenLLMetry, Vercel AI SDK, Datadog LLM, Honeycomb LLM | **Converging** (de facto standard) |
| **Proof-tense accountability** | "Was this action authorized / can we cryptographically prove it occurred?" | Agent Receipts (W3C VC), AAR, IETF ACTA drafts, Microsoft Decision Receipts, Mastercard Verifiable Intent | **Fragmented** (single-action, user-facing) |
| **Manifest-tense declaration** | "What is this agent / what can it do?" | AgentSpec, Open Agent Spec (Prime Vector), Oracle Agent Spec, A2A Agent Cards | **Early; competing** |
| **Future-tense corrective signal** | "What did this run teach the next run?" | **None** | **Empty** |

The fourth bucket is where Bitter's R5 lives. The agent's survey found exactly one in-spirit pattern (TensorOps' "Job Card") that gestures at it — but that's a blog post, not a spec, with no canonical repo, no governance, no spec files.

### 2.2 The 24-spec table (full survey)

| # | Spec | Maintainer | License | Maturity (May 2026) | Bucket | Operator-side fit |
|---|---|---|---|---|---|---|
| 1 | OTel GenAI Semantic Conventions | OTel GenAI SIG (CNCF) | Apache 2.0 | Development; no GA | Past-tense | None. `gen_ai.evaluation.result` is the closest seam. |
| 2 | OpenInference | Arize-AI | Apache 2.0 | Active | Past-tense | None. |
| 3 | MCP (Model Context Protocol) | LF Agentic AI Foundation | MIT | 2025-11-25 spec; production | Transport (orthogonal) | N/A — pure transport. |
| 4 | A2A (Agent2Agent) | LF / a2aproject | Apache 2.0 | v1.0.0; 150+ orgs | Manifest + task lifecycle | Has `Task` lifecycle + artifacts; no carry-forward. |
| 5 | AgentSpec | Community OSS | Apache 2.0 | Early | Manifest | None — static declaration. |
| 6 | Open Agent Spec (Prime Vector) | prime-vector | Vendor → OSS 2026 | v1.5 | Manifest | Explicitly "not an execution framework." |
| 7 | Oracle Agent Spec | Oracle | Apache 2.0 + UPL | 26.1.0 (Jan 2026) | Manifest | Manifest only. |
| 8 | AgentOps event schema | AgentOps-AI (commercial) | Proprietary; SDK MIT | Production | Past-tense | No open schema. arXiv 2411.05285 academic taxonomy. |
| 9 | Langfuse trace schema | Langfuse / YC W23 | MIT (`ee/` excluded) | 26.9k stars | Past-tense (OTel-built) | OTel-native; scores per-trace, not codified as cross-run lessons. |
| 10 | Helicone | Helicone (acquired by Mintlify Mar 2026) | Apache 2.0 OSS | Cloud frozen; OSS continues | Past-tense | OpenLLMetry-compatible; no operator-side fields. |
| 11 | OpenLLMetry (Traceloop) | Traceloop (OTel WG co-lead) | Apache 2.0 | Production | Past-tense (tracks OTel) | None. |
| 12 | Phoenix / Arize AX | Arize | Apache 2.0 / commercial | Production | Past-tense (OpenInference backend) | None. |
| 13 | LangSmith Run schema | LangChain Inc. | Proprietary (SDK Apache 2.0) | Production | Past-tense | 31+ fields incl. `feedback_stats`; per-run scoring, not cross-run carry. |
| 14 | Vercel AI SDK telemetry | Vercel | Apache 2.0 (SDK) | Experimental | Past-tense | None. |
| 15 | Honeycomb LLM Observability | Honeycomb | Commercial, OTel-native | Production | Past-tense | Inherits OTel limits. |
| 16 | Datadog LLM Observability | Datadog | Commercial | Production; native OTel SDK v1.37 (Dec 2026) | Past-tense | Inherits OTel limits. |
| 17 | Job Card pattern (TensorOps) | TensorOps blog | (no license; pattern) | Pattern, not spec | **Future-tense (in spirit)** | Fields: `current_phase, goal, confidence, attempts, needs_human, loop_detected`. Closest in spirit. **Not a canonical spec.** |
| 18 | Agent Receipts (`agentreceipts.ai`) | Independent | Apache 2.0 spec + SDKs | v0.2.0 Draft | Proof-tense | W3C VC, single-action, hash-chained. **User-facing**; no operator-side fields. |
| 19 | AAR (Agent Action Receipt) | Independent / Mastercard "Verifiable Intent" alignment | MIT (SDK) | Production | Proof-tense | Ed25519 + JCS, per-action provenance. Not learning. |
| 20 | IETF `draft-farley-acta-signed-receipts-01` | T. Farley (ScopeBlind) | IETF process | Individual draft (Apr 2026) | Proof-tense | `iteration_id` for grouping; no carry-forward. |
| 21 | `draft-marques-asqav-compliance-receipts-01` | Individual | IETF process | Individual draft | Proof-tense | Compliance profile of ACTA. |
| 22 | Microsoft Agent Governance Toolkit | Microsoft | MIT | 6 maintainers, 4 orgs | Proof-tense | Single-action accountability; Ed25519 + JCS. |
| 23 | CNCF Cloud Native AI WG | CNCF | Apache 2.0 ecosystem | WG forming | Coordinating | No spec yet; whitepaper-stage. |
| 24 | LF Agentic AI Foundation (AAIF) | Linux Foundation | Apache 2.0 ecosystem | Founded Dec 2025 | Coordinating | **No project for agent run records / lessons / receipts.** Hosts MCP, Goose, AGENTS.md. |

### 2.3 Where momentum is

Three concentric circles, ranked by adoption:

**Center (de facto standard, multi-vendor):**
- **OTel GenAI semconv + OpenInference** are functionally one observability schema despite formal Development status. Datadog shipped native v1.37 Dec 2026; Langfuse, LangSmith, Phoenix, Honeycomb all map to it.
- **MCP** is the de facto tool/transport standard, donated to LF AAIF Dec 2025. OpenAI and Google adopted by April 2026.

**Inner ring (real adoption):**
- **A2A** for inter-agent messaging — 150+ orgs (Google, MS, AWS, Salesforce, SAP, ServiceNow, Workday, IBM), Apache 2.0, LF-housed.
- **OpenInference** for agent tracing semantics — strong because of ~30 instrumentation packages (Claude Agent SDK, OpenAI, Anthropic, LangChain, LlamaIndex, Bedrock, Google GenAI, PydanticAI, smolagents, ...).

**Outer ring (early, scattered):**
- Manifest specs (AgentSpec, OAS, Oracle) — early-stage, no decisive momentum yet.
- Receipts/proof specs (Agent Receipts, AAR, IETF ACTA, MS Toolkit) — fragmented, all single-action accountability framing.

**Critical observation:** **Future-tense corrective signal has no incumbent.** The Linux Foundation Agentic AI Foundation publicly acknowledges the gap (May 2026 blog: *"Your MCP Server Works. Your Agent Doesn't. Here's Why"*) but has no project addressing it. CNCF's Cloud Native AI WG is still at whitepaper stage. The mem0 / Letta / Zep / MemPalace agent-memory race has 5 repos with 80k+ stars and no common schema; the community openly admits "no standard schema for what a 'memory' actually is."

### 2.4 Governance landscape (best contribution surfaces, ranked)

1. **OTel GenAI semconv-genai repo** — open issues, real maintainers (`@drewby`, `@nirga` project leads; `@lmolkova`, `@tedsuo` sponsors), weekly meetings (Tuesdays 9 PT general, Mondays 9 PT agent topics). Apache 2.0. Could file an issue proposing `gen_ai.lesson.recorded` event or `gen_ai.harness.diff` attribute group anchored on existing `gen_ai.evaluation.result` semantics.
2. **LF Agentic AI Foundation** — accepting project proposals. Would be a governance fit for "agent run receipt" project at the foundation level alongside MCP / Goose / AGENTS.md. Founding members include AWS, Anthropic, Block, Bloomberg, Cloudflare, Google, MS, OpenAI.
3. **CNCF Cloud Native AI WG (TAG-Runtime / TAG-Observability)** — early; receptive to whitepapers and pre-spec work.
4. **OpenInference** — vendor-led (Arize); attribute extensions can probably get added quickly via PR but it's single-vendor governance.

**License compatibility (no legal blockers):** OTel GenAI Apache 2.0, OpenInference Apache 2.0, MCP MIT, A2A Apache 2.0, Oracle Agent Spec Apache 2.0 + UPL, Agent Receipts Apache 2.0, AAR MIT, Langfuse MIT (excluding `ee/`). Everything is MIT/Apache. Anyone can build derivative or extension specs.

### 2.5 Naming collisions to be aware of

**"Agent Receipts"** is taken — `agentreceipts.ai` is an Apache 2.0 W3C VC-style spec for user-facing single-action accountability (EU AI Act Article 12 traceability, end-user undo). 12 stars, but the name is publicly claimed.

**"AAR / Agent Action Receipt"** is taken — Mastercard's "Verifiable Intent" alignment, MIT SDK, payments-leaning.

**"Agent Run Record"** and **"Agent Run Receipt"** appear unclaimed in operator-side framing as of May 2026. These are candidate names for a Bitter-defined spec that wants to claim the future-tense bucket without colliding with the user-side receipt-as-VC space.

---

## 3. The Gap (sharper now)

**The standards landscape has converged on past-tense (observability) and proof-tense (single-action accountability) but has no future-tense (operator-derived corrective signal that shapes the next run).** Even the OTel SIG's published mission acknowledges the feedback loop as the goal but the schema stops at scoring evaluations.

Concretely missing from every existing spec:

- **Lessons learned** — a structured artifact that says *"the harness needed X to succeed; future runs against this surface should pre-load X."* No spec has a `lesson` or `correction` first-class type. OTel's `gen_ai.evaluation.result` is the only adjacent event and it is shaped for scoring, not corrective signal.
- **Harness diffs** — a structured representation of *"the operator's environment for this run differed from the prior run in these ways, and the difference mattered."* Nothing.
- **Repeat-failure detection** — a counter primitive across runs, identifying when the agent re-stubs its toe on the same root cause. Job Card has `loop_detected` (within-run only); no cross-run analog.
- **Cross-tool / cross-vendor memory portability** — the AI agent memory race (Mem0, Letta, Zep, MemPalace) has 80k+ stars and no common schema.
- **Future-tense carry-forward** — a primitive that says *"this artifact is intended to be loaded by the next agent run on this surface."* Closest analog is A2A's `artifacts` (output deliverables) and AgentOps' "historical plans" — both retrospective lookup, not designed for carry-forward semantics.
- **Contract-level grading** — the R5 ladder (`prototype | receipt_v0 | audit_v0 | replay_skeleton_v0 | trace_replayable_v0 | execution_replayable_v0`). No analog anywhere.
- **Evidence-origin axis** — `fake | local | real_provider | production`. No analog anywhere.

### 3.1 Operator-side concept matrix

| Operator-side concept | Bitter R5 | OTel GenAI | OpenInference | Agent Receipts | Job Card |
|---|---|---|---|---|---|
| Run identity + tool spans | ✓ | ✓ | ✓ | partial | partial |
| Token / cost tracking | ✓ | ✓ | ✓ | — | — |
| Multi-agent / lineage | ✓ | partial (in dev) | partial | — | — |
| Memory / artifact references | ✓ (BitterLog) | partial (in dev) | partial | — | — |
| **Lessons captured (next-run-shaping)** | ✓ | — | — | — | partial (within run) |
| **Corrections / harness diffs** | ✓ | — | — | — | — |
| **Repeat-failure detection (cross-run)** | ✓ | — | — | — | — |
| **Carry-forward context** | ✓ | — | — | — | — |
| **Contract-level grading** | ✓ (six-rung ladder) | — | — | — | — |
| **Evidence origin axis** | ✓ | — | — | partial (proof) | — |
| **Replay / audit guarantees** | ✓ | — | — | — | — |
| **Adapter capability declaration** | ✓ | — | partial | — | — |
| **Custody / ownership axis** | implicit (operator-owned) | — | — | ✓ (user-side) | — |

R5 is the only column that fills the future-tense bucket cleanly.

---

## 4. The Strategic Question (Three Real Options)

### Option A — Define a fresh Bitter-branded spec, abandon OTel alignment

Publish `bitter.run.receipt.v0` as a wholly Bitter-defined format with no special relationship to OTel.

**Pros:** maximum control, full alignment with internal envelopes already in production.

**Cons:** "yet another agent run format" risk in a field with many; no native momentum; reads as fragmenting; standards bodies and competitors can ignore it. **Forking observability is not advised** — OTel GenAI is moving fast in a single direction with broad commercial backing. Forking buys nothing and costs alignment.

### Option B — Adopt OTel GenAI / OpenInference fully and abandon `bitter.macro_run.v0`

**Pros:** rides existing momentum; free instrumentation tooling.

**Cons:** loses R5 truth-layer entirely (contract_level, evidence_origin, guarantees, artifact status). Reduces Bitter to "just another OTel-emitting agent product." **This is dispositive against** — R5 is the work that makes Bitter's position defensible.

### Option C — **Hybrid: emit OTel for past-tense, define `bitter.run.receipt` for future-tense** (recommended)

Treat OTel GenAI + OpenInference as the **observability-layer baseline** Bitter emits compatibly with. Add a small, focused `bitter.run.receipt.v0` spec (or whatever neutral name) that captures the operator-side future-tense fields and explicitly maps to/from OTel events.

**Concrete shape:**

1. **Bitter's runtime emits OTel GenAI spans natively** for the observability layer. Adapter capabilities, span attributes, tool calls — all in OTel-compatible form. Free interop with Phoenix, Langfuse, Datadog, Honeycomb, etc.

2. **Bitter publishes `bitter.run.receipt.v0` as a small Apache 2.0 spec** — JSON Schema + reference SDK + OTel attribute mapping. The receipt envelope references OTel `trace_id` / `span_id` so consumers can correlate. The receipt carries the operator-side fields (lessons, harness_diff, repeat_failure_signature, carry_forward, evaluator_attestations, contract_level, evidence_origin, guarantees, artifacts).

3. **Bitter ships reference adapters** for major external runtimes (Hermes, OpenHands, Codex, Claude Code) that emit `bitter.run.receipt` envelopes from those tools' output streams. Each adapter is small, open-source, acts as bridge.

4. **After 2-3 months of internal evidence the shape is right, Bitter proposes upstream additions to the OTel GenAI SIG** as `gen_ai.lesson.recorded`, `gen_ai.harness.diff`, `gen_ai.repeat_failure.detected` events, anchored on the existing `gen_ai.evaluation.result` semantics. Even if rejected, the proposal is citable and the spec stands on its own.

5. **The receipt schema is published under a neutral name** (e.g., `bitter.run.receipt.v0` for the canonical implementation, with the open spec called *Operator Run Receipt Schema* or similar). The brand stays on the canonical implementation; the spec is universal.

**Pros:**
- Doesn't fragment — uses existing standards where they fit.
- Doesn't surrender what makes Bitter distinct — keeps the truth-layer.
- Positions Bitter at the **standards layer** (one level above any single runtime).
- The future-tense bucket is empty; first credible occupant defines it.
- Open-source-first posture amplifies the play (combined with the recent decision to OSS the constellation).
- Even if the OTel SIG rejects upstream extensions, the published spec + adapters are still useful and citable.
- Apache 2.0 + reference SDK + adapters = lowest friction for ecosystem adoption.

**Cons:**
- Requires standards-body engagement (slower than just shipping our own thing).
- Depends partly on OTel SIG receptiveness for the highest-value outcome.
- Naming and governance need care (who owns the open spec long-term?).

### The recommendation: Option C

The case for Option C is structural. Bitter's competitive position is "one layer above specific runtimes." A proprietary `bitter.run.receipt.v0` makes Bitter look like a vendor with a format. An open spec that explicitly maps to OTel and claims the unclaimed future-tense surface makes Bitter look like a contributor at the standards layer. Same code, very different positioning.

The R5 work is already at standards-quality — versioned, validated, separated by axis, append-only, content-addressed. It deserves to be published.

---

## 5. Concrete Next Steps (Option C playbook)

### Phase 1 — publish the spec v0.1 (1-2 weeks)

1. **Create a public repo** for the spec (candidate org: Bitter's GitHub org with a clear "we maintain but the spec is open" governance note). Apache 2.0.

2. **Write the v0.1 schema**, boiled to essence. First-move field set:

   ```jsonc
   {
     "schema_version": "bitter.run.receipt.v0",
     "run_id": "...",
     "surface": "...",                         // chat | background | task | external
     "agent_identity": { "name": "...", "version": "..." },
     "parent_run_id": null,
     "lineage": { "session_id": "...", "root_run_id": "..." },

     // Past-tense (OTel-correlated)
     "otel_trace_id": "...",                   // optional; if emitted alongside OTel
     "started_at": "...",
     "ended_at": "...",
     "outcome": "completed | failed | cancelled",

     // Future-tense (the gap-filling fields)
     "lessons": [
       { "id": "...", "type": "...", "summary": "...",
         "evidence_ref": "...", "applies_to": "..." }
     ],
     "harness_diff": {
       "added": [...], "modified": [...], "removed": [...]
     },
     "repeat_failure_signature": null,         // hash of the failure mode if repeated
     "carry_forward": [
       { "kind": "...", "ref": "...", "for_surface": "..." }
     ],

     // Truth-layer (R5 essentials)
     "contract_level": "prototype | receipt_v0 | audit_v0 | ...",
     "evidence_origin": "fake | local | real_provider | production",
     "guarantees": { ... },
     "artifacts": { ... },                     // status enum per key

     // Optional attestations
     "evaluator_attestations": [...],
     "emitted_at": "..."
   }
   ```

3. **Write the spec doc** — clean rendering of the schema, the contract-level ladder, the evidence-origin axis, the guarantees block, the artifact status enum. Include: motivation (the four-bucket taxonomy showing the gap), relationship to OTel GenAI (it's a future-tense companion, not an observability replacement), example envelopes, validation tooling.

4. **Write the OTel mapping doc** — show how a `bitter.run.receipt` can be emitted as OTel events. Include: which fields go to OTel attributes, which require the receipt envelope, how `trace_id` correlation works.

5. **Write the A2A mapping doc** — show how an A2A `Task` completes into a `bitter.run.receipt`. The `artifacts[]` field of A2A Task aligns with the receipt's `carry_forward[]` field; the lifecycle states map.

6. **Publish on `bitterfrontier.com/spec/run-receipt` or similar** with a dedicated landing page.

### Phase 2 — reference adapters (1-2 weeks per adapter)

7. **Hermes → `bitter.run.receipt` adapter** — open-source, small Python package or Rust crate. Takes Hermes session JSONL and emits a `bitter.run.receipt` envelope.
8. **OpenHands → `bitter.run.receipt` adapter** — same shape; takes OpenHands trace output.
9. **Claude Code / Codex / Gemini CLI adapters** — Bitter already runs these internally; extracting the adapter is a low-cost contribution.
10. **Each adapter ships with a small repeat-failure benchmark** showing the adapter detects when the same problem recurs across two runs. Concrete numbers competitors and observers can cite.

### Phase 3 — OTel GenAI SIG engagement (parallel; long horizon, 2-6 months)

11. **Draft the OTEP (OpenTelemetry Enhancement Proposal)** proposing `gen_ai.lesson.recorded` event, `gen_ai.harness.diff` attribute group, and `gen_ai.repeat_failure.detected` event. Anchor on existing `gen_ai.evaluation.result` event semantics.
12. **Engage the OTel GenAI SIG** — present at SIG meeting (Tuesdays 9 PT general, Mondays 9 PT agent topics). Praise-first, source-backed.
13. **Collaborate on multi-agent / memory / artifact tracking** — the GenAI SIG is already actively developing these (issues #1530, #1732). Bitter has experience to contribute.

### Phase 4 — public articulation (BitterFrontier)

14. **First BitterFrontier piece**: *"What's missing from agent observability — the operator-side gap."* References the four-bucket taxonomy, names the empty bucket. Praise-first analysis of OTel GenAI / OpenInference, ends with a pointer to the spec proposal.
15. **Second piece**: *"Why every solved failure should change the next run — a proposal for operator-side semantic conventions."* Thesis piece. Only ships after the spec, the OTel mapping doc, and at least one reference adapter exist (per BitterFrontier's own doctrine: "No frontier claim without an operator consequence; no operator consequence without a receipt").
16. **Third piece**: case studies of how a Bitter `audit_v0` run differs from a typical OTel-only trace. Concrete examples drawn from Factory production.

### Phase 5 — governance maturation (months)

17. **Track which observability platforms add support** for the `bitter.run.receipt` envelope (even partially).
18. **Track which agent runtimes (Hermes, OpenHands, others) accept PRs** for receipt emission.
19. **If adoption signals are real, propose hosting under LF Agentic AI Foundation** (which already hosts MCP, Goose, AGENTS.md) to get foundation-level governance and IP rules.
20. **Iterate the spec** based on adoption feedback. Publish v1.0 only after multiple external implementations exist and the shape has been stress-tested.

---

## 6. Risk Register

| Risk | Likelihood | Mitigation |
|---|---|---|
| OTel SIG declines the extension proposal | Medium | Publish anyway; spec is useful as a community extension; cite from BitterFrontier and reference implementations. The future-tense bucket is empty — first credible occupant defines it whether OTel adopts or not. |
| Competitors adopt the spec but rebrand or re-implement | Low–Medium | Bitter's brand stays on the canonical implementation; spec being adopted broadly IS the win, even by competitors. |
| Spec proposal is seen as fragmentation | Medium | Frame consistently as "future-tense companion to OTel observability, not replacement"; avoid `bitter.*` naming on the open spec layer; cite OTel GenAI as the past-tense base in every doc. |
| **Name collision with `agentreceipts.ai` (Agent Receipts W3C VC project)** | **High** | Use distinct framing: "operator run receipt" / "run record" rather than just "agent receipts." The other project is user-side / single-action; ours is operator-side / cross-run. Disambiguate explicitly in the spec doc. |
| Confusion with proof-tense single-action receipts (Agent Receipts, AAR, IETF ACTA, MS Toolkit) | Medium | Lead the spec doc with the four-bucket taxonomy. Make clear: this is not a signed-decision receipt for end-user accountability; this is a structured artifact of what the run taught the next run. |
| R5 internal evolution breaks public spec compatibility | Medium | Use semver discipline; the open spec is `v0.1` and Bitter's internal `bitter.macro_run.v0` is allowed to evolve; bump open spec to `v1.0` when evolution reaches it. |
| Standards work consumes engineering time | High | Allocate explicitly; scope the v0.1 spec narrowly enough to fit ~2 weeks of focused work; don't let scope creep. |
| Maintainers ignore outreach (Hermes, OpenHands) | High (default) | Praise-first + concrete adapter PRs; don't expect reciprocity; the play works at low maintainer engagement because the spec + adapters + content cycle compounds independently. |
| LF AAIF hosts a competing receipt spec before Bitter | Low–Medium | They've publicly named the gap (May 2026 blog) but have no project filling it. Bitter has a 6-12 month window. After that, the bucket may be claimed by someone else. |
| Bitter's audience (calling-card stage, indie operators) doesn't care about a spec | Medium | The spec isn't for current customers — it's for ecosystem positioning, search presence, and citation gravity. The publishing arm (BitterFrontier) is the distribution lever, not direct sales. |

---

## 7. Summary Table — what changes after shipping Option C

| Concern | Status quo (today) | After Option C ships |
|---|---|---|
| Bitter's runtime emits OTel-compatible traces | Partial (some adapters do, some don't) | Yes, native, all adapters |
| `bitter.macro_run.v0` exists | Yes (internal-only) | Yes (also published as part of public spec, with neutral name) |
| External runtimes can produce Bitter-compatible receipts | No | Yes (via reference adapters: Hermes, OpenHands, Claude Code, Codex, Gemini CLI) |
| OTel GenAI SIG knows about future-tense / operator-side concerns | No | Yes (proposed OTEP) |
| BitterFrontier has a public artifact tying spec to thesis | No | Yes (multi-piece content cycle) |
| Bitter's competitive position | "Substrate; constellation; trust the brand" | "Substrate + constellation + spec layer participant + first occupant of the future-tense bucket" |
| Open-source posture amplifier | Constellation only | Constellation + open spec + open adapters |
| Citation surface for content | Internal docs | Public spec + reference implementations + benchmark + content pieces |

---

## Appendix A — Related Bitter doctrine and memory

- `feedback_market_vocabulary.md` — use the market's words; reserve invention for genuine new layers
- `project_experience_learning_frame.md` — the AI era is about learning from experience; Bitter is the operator-side substrate
- `project_competitive_strategy.md` — compete on category, collaborate on interoperability; receipt schema is the wedge
- `project_marketing_thesis.md` — locked four-line public copy hierarchy; *Run agents. Keep the lesson.* + *Stop solving the same problems twice.*
- `project_r5_followup_stabilization.md` — the truth-layer pattern; *"Bitter should not merely record traces; it should record what claims those traces can support."*
- `bitterfrontier/RESEARCH_CONTRACT.md` — *"No frontier claim without an operator consequence. No operator consequence without a receipt."*

---

## Appendix B — Answers from external research

1. **Has the OTel GenAI SIG already discussed anything resembling "operator-side carry-forward"?** No. Issues #1732 and #1530 define what an agent IS, not what it learned. The OTel blog post on AI Agent Observability acknowledges the feedback loop as the goal but the schema stops at evaluation scoring (`gen_ai.evaluation.result` is the closest seam).

2. **Are there community standards efforts (CNCF, LF AI & Data) currently working in this neighborhood?** CNCF Cloud Native AI WG is at whitepaper stage. LF Agentic AI Foundation (founded Dec 2025) hosts MCP, Goose, AGENTS.md but **no project for agent run records / lessons / receipts**. Their May 2026 blog *"Your MCP Server Works. Your Agent Doesn't. Here's Why"* publicly acknowledges the gap.

3. **License compatibility** — All major specs are Apache 2.0 or MIT. No legal blocker to publishing a derivative or extension spec.

4. **Naming for the open spec** — `bitter.run.receipt.v0` for the canonical implementation; *Operator Run Receipt Schema* (or similar) for the published public spec. **Avoid** "Agent Receipts" (taken by `agentreceipts.ai` for user-side W3C VC) and "AAR" (taken by Mastercard-aligned per-action provenance).

5. **Governance shape** — Start with Bitter's GitHub org and a clear "we maintain but the spec is open" note. If adoption signals are real, propose hosting under LF Agentic AI Foundation (which already hosts MCP, Goose, AGENTS.md) to get foundation-level governance.

---

## Appendix C — Concrete first-move artifact list

Copy-pasteable scope for Phase 1 (≤2 weeks):

- `spec/bitter.run.receipt.v0.json` — JSON Schema, ~150 lines, pulls fields from existing `bitter.macro_run.v0` and trims to operator-side essentials
- `spec/README.md` — motivation (four-bucket taxonomy), schema rendering, examples
- `spec/otel-mapping.md` — how `bitter.run.receipt` maps to OTel GenAI events/attributes
- `spec/a2a-mapping.md` — how A2A `Task` completes into a receipt
- `spec/examples/` — 3-5 example envelopes (prototype, receipt_v0, audit_v0)
- `sdk-ts/` — TypeScript reference SDK (TypeBox-validated, mirrors internal `bitter.mjs`)
- `sdk-py/` — Python reference SDK (pydantic, for AgentOps/Phoenix-compatible workflows)
- `adapters/hermes/` — reads Hermes session JSONL, emits receipt
- `adapters/openhands/` — reads OpenHands trace output, emits receipt
- `bench/repeat-failure-bench/` — small open benchmark for repeat-failure detection across two runs

That's the v0.1 ship. Total scope is bounded; nothing depends on standards-body cooperation.
