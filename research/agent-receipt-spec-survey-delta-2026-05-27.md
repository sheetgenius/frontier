# Agent Run Receipt Spec — Landscape Delta 2026-05-11 → 2026-05-27

Last revised: 2026-05-27
Status: Draft for internal review (Bitter / BitterFrontier)
Author of record: Michael Ruescher, with Claude Opus 4.7 (1M context). Delta research conducted 2026-05-27.
Baseline: `research/agent-receipt-spec-survey-2026-05-11.md`.

---

## TL;DR

Sixteen calendar days. The landscape moved more than expected on past-tense and proof-tense; on future-tense (the bucket the baseline named empty) it did not move in name, but it moved meaningfully in *proximity*. Five concrete deltas:

1. **OTel split GenAI semconv into its own repo, `open-telemetry/semantic-conventions-genai`** (created 2026-05-05, six days before the baseline). The legacy `area:gen-ai` PRs in `semantic-conventions` are being closed and re-filed in the new repo. This is the most important governance signal of the period: GenAI semconv is now a first-class workstream with its own release cadence, PR dashboard, and reference scenarios. *Operator consequence:* the contribution surface the baseline named (Phase 3) has been promoted and is more accessible — and more contested — than it was on 2026-05-11.

2. **OpenTelemetry graduated from CNCF on 2026-05-21.** The graduation press cites "trust in AI agents" and explicitly positions OTel as the substrate for agent observability. *Operator consequence:* the past-tense bucket is no longer "converging" — it has graduated. Any Bitter posture that depends on "OTel as default emit target" hardened in this window.

3. **A new OTel `gen_ai` workstream is forming around `evaluation`, `compaction`, `context.selection`, `invoke_node`, `memory.*`, and `agent.threat.detection.*`.** The memory operation conventions (PR #140) **merged on 2026-05-19** — the spec now has `create_memory_store`, `search_memory`, `update_memory`, `delete_memory`, `delete_memory_store` as first-class `gen_ai.operation.name` values. A separate, *broader* memory-systems proposal (issue #200, opened 2026-05-27) explicitly proposes lifecycle, layer-transfer, decay, and governance attributes. The `gen_ai.context.selection.evaluated` event (PR #190, opened 2026-05-22) is the closest thing the SIG has yet proposed to a "did the harness over-select context" primitive. None of these is a future-tense lesson/correction primitive, but several are now adjacent to one. **The window to be the credible occupant of the future-tense bucket is narrower than the baseline implied.**

4. **Proof-tense bucket is consolidating, fast.** `draft-marques-asqav-compliance-receipts` went from `-01` at baseline to **`-04`** by 2026-05-19 (four revisions in eight days, adding DORA Article 17, NIST AI RMF, Colorado/Texas state acts, HIPAA, SEC 17a-4, NYDFS, CIRCIA, and a counterparty-binding extension). A new sibling `draft-farley-acta-knowledge-units-00` (2026-04-06) extends ACTA into multi-model deliberation evidence. Microsoft Agent Governance Toolkit shipped v3.6.0 (2026-05-12) and v3.7.0 (2026-05-18) with the `GateRecord` decision-receipt pattern formalized into six specification documents. Mastercard's AAR / Verifiable Intent and Visa's Trusted Agent Protocol (TAP) are both now anchoring payments-side agent-action accountability. The proof-tense bucket is no longer "fragmented" — it is rapidly stratifying into a payments leg (Mastercard / Visa), a compliance leg (Marques ASQAV), a decision-evidence leg (ACTA / MS Toolkit), and a deliberation-evidence leg (ACTA KU). *Operator consequence:* the language risk the baseline flagged (collision with "Agent Receipts" naming) has gotten worse; a Bitter-published spec must aggressively disambiguate from these four neighbors, not just one.

5. **The future-tense bucket is still formally empty, but the spirit-of-the-bucket has a new minor-tier claimant: ReinaMacCredy/maestro** (176 stars, MIT, founded 2025-12-19, last updated 2026-05-27). It frames itself as an "agent harness" with a "verdict ledger" and per-task receipt metadata (`summary`, `surprise`, `verifiedBy`). It is not a spec. It is not governance-backed. It is a tool. But it is a public, multi-Claude-Code/Codex-targeted artifact with non-trivial momentum that names the same problem Bitter R5 names. A second, much smaller adjacent project (`manasvardhan/agent-replay`, 1 star, MIT) explicitly records-and-diffs agent runs. *Operator consequence:* the operator-side future-tense seam has its first public weak claimant. Bitter still has the bucket, but the move from "no incumbents" to "one tool-level claimant + several adjacent specs" happened inside this window.

**Bottom line on Phase 1 posture:** the baseline's Phase 1 ship — publish `bitter.run.receipt.v0` Apache 2.0, with reference adapters and an OTel mapping doc — **still holds and should accelerate**, not decelerate. The four governance windows the baseline assumed (6–12 months to claim future-tense; OTel SIG receptive to extensions; LF AAIF open-but-unclaimed; no proof-tense collision risk beyond "Agent Receipts") have all narrowed. The right Phase 1 move is sharper, faster, and more disambiguation-conscious than the baseline draft suggested. Details in the final section.

---

## 1. Method and discipline

This is a delta, not a re-survey. Twenty-six targeted lookups against primary sources (GitHub commits/PRs/issues, IETF datatracker, CNCF/LF press releases, project websites) executed 2026-05-27. Citations carry URL + observation date. Where a spec did **not** move, that is noted explicitly — silence is signal too.

Two scope rules:

- **Skipped** anything fully captured in baseline section 2 unless there is new movement.
- **Skipped** survey-style adjacent items (LangChain LangSmith run schema, Helicone, Vercel AI SDK, Datadog, Honeycomb) that did not have material movement in this window. None of them shipped operator-side / cross-run carry-forward semantics. Silence holds.

---

## 2. Bucket A — Past-tense observability

### 2.1 OTel: the GenAI semconv was extracted into its own repo

**Observed fact (2026-05-27):**

- `open-telemetry/semantic-conventions-genai` was created **2026-05-05** (six days before the baseline survey was published — but at baseline, the move was not yet visible in PR closure patterns).
- The move was formalized in PR #3696 of `semantic-conventions` ("Move GenAI semantic conventions to its own dedicated repository"), with the canonical announcement at <https://github.com/open-telemetry/semantic-conventions-genai>.
- On 2026-05-18 (one week after baseline), maintainer `lmolkova` began closing `area:gen-ai` PRs in the legacy repo with the message *"Closing this PR here, but please consider reintroducing it in the new repo."*
- Three GenAI PRs that were active at baseline (#3250 memory operations, #3233 security guardian, #3473 invoke_agent server span) were closed unmerged in the legacy repo on 2026-05-11, 2026-05-18, and 2026-05-20 respectively, then re-filed in the new repo.
- A companion Python repo, `open-telemetry/opentelemetry-python-genai`, was created **2026-05-12** — one day after baseline.

**Inferred status:** GenAI semconv is now a first-class OTel workstream with dedicated governance, its own release workflow (PR #148 "[chore] add basic release workflow" merged 2026-05-18), a real-time PR dashboard (PR #163 merged 2026-05-18), and a deliberate split between "spec" (YAML registry + generated docs) and "reference scenarios" (executable Python implementations validating each span/event shape). This is the *opposite* of stalling — it is a structural upgrade in cadence.

**Source:** <https://github.com/open-telemetry/semantic-conventions-genai/commits/main>, observed 2026-05-27.

### 2.2 OpenTelemetry graduated from CNCF on 2026-05-21

**Observed fact:**

- Press release dated 2026-05-21: *"Cloud Native Computing Foundation Announces OpenTelemetry's Graduation, Solidifying Status as the De Facto Observability Standard"*.
- Cited milestones: 12,000+ contributors from 2,800+ companies; second-highest velocity among 240+ CNCF projects (behind Kubernetes); JavaScript and Python APIs each exceeded 1.3B downloads in April 2026.
- AWS quote in the release: observability is *"the foundation of trust in AI agents."* CNCF CTO Chris Aniszczyk: *"As organizations increasingly scale AI and cloud native workloads, real time observability is critical."*

**Inferred status:** The baseline's framing that OTel GenAI was *"converging (de facto standard)"* was a 2026-05-11 read on what graduated nine days later. The convergence is complete at the parent-project level; the GenAI subproject inherits that authority. The implication is that Bitter's "emit OTel for past-tense" posture is now riding a graduated CNCF project, not an in-development one.

**Source:** <https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/>, observed 2026-05-27.

### 2.3 New `gen_ai.*` spec movement that lands inside the window

The new `semantic-conventions-genai` repo had **substantial** activity in 16 days. The most relevant items, with merge status:

| PR | Title | State | Merged | Date | Relevance to Bitter R5 |
|---|---|---|---|---|---|
| #140 | Add GenAI memory operation conventions | **closed** | ✅ **merged** | 2026-05-19 | Establishes `create_memory_store`, `search_memory`, `update_memory`, `delete_memory`, `delete_memory_store` as `gen_ai.operation.name` values. Adjacent to carry-forward but framed as CRUD against a memory store, not as cross-run lesson capture. |
| #136 | fix(mcp): add tool.call.arguments and tool.call.result to server span | **closed** | ✅ merged | 2026-05-16 | MCP tool-call observability hardening. Tangential. |
| #142 | gen-ai: add document modality to multimodal content parts | **closed** | ✅ merged | 2026-05-16 | Multimodal. Tangential. |
| #162 | semconv for compaction | **open** | — | opened 2026-05-14 | Adds `gen_ai.conversation.compacted` boolean. **Directly adjacent** to Bitter's "context_packet" / replay-skeleton concern. |
| #185 | gen-ai: add evaluation operation name and gen_ai.evaluate.internal span | **open** | — | opened 2026-05-21 | Promotes the existing `gen_ai.evaluation.result` event to also have a proper span and `gen_ai.operation.name: "evaluation"` enum value. Cites OpenSearch having already invented a custom value, naming the fragmentation cost. |
| #188 | Add workflow node convention (`invoke_node`) | **open** | — | opened 2026-05-22 | Adds `gen_ai.invoke_node.internal` span and `gen_ai.node.name` attribute. Workflow-graph-shaped, similar to A2A's task lifecycle. |
| #190 | Add experimental GenAI context selection event | **open** | — | opened 2026-05-22 | `gen_ai.context.selection.evaluated` event. Captures candidate/selected/suppressed input counts + delivered-context hash count. **The closest thing in OTel to a primitive that asks "did the harness over-select context before the model call?"** PR body cites the operator framing directly. |
| #195 | semconv for a2a protocol | **open** | — | opened 2026-05-26 | A2A client/server spans, task/context attributes, streaming metrics, reference scenario against `a2a-sdk==1.0.3`. |
| #165 | proposal: agent.threat.detection.* attributes + event | **open** | — | opened 2026-05-17 | New `agent.*` namespace (not `gen_ai.*`) with `rule_id`, `ruleset`, `severity`, `action`, `correlation_id`, plus an `agent.threat.detection` event. Explicit governance choice to use `agent.*` instead of `gen_ai.*` because threat-detection is a property of the agent, not the model. |
| #179 | Add prompt versioning and variable support to GenAI attributes | **open** | — | opened 2026-05-20 | Prompt-template provenance. |
| #197 | Add modality, cache, and phase breakdowns for token usage | **open** | — | opened 2026-05-27 | Token-usage breakdowns. |
| #200 | **Proposal: Semantic Conventions for Generative AI Memory Systems (`gen_ai.memory.*`)** | **open issue** | — | opened 2026-05-27 | Broader, lifecycle-shaped proposal: store/retrieve/update/decay/expire/forget/transfer-between-layers; memory health, confidence decay, audit-of-memory-influenced-decisions, memory poisoning detection. This is the **most expansive** proposal in the bucket and it lands the same day as this delta. |

**The pattern:** OTel GenAI SIG is now adding lifecycle-shaped primitives (memory ops, evaluation spans, context selection events, workflow nodes), but each is still scoped to *single-operation* observability, not *cross-run learning*. The closest the bucket gets to future-tense is #190 (context selection) and #200 (memory health / drift / poisoning detection) — neither is a `gen_ai.lesson.*`, `gen_ai.correction.*`, or `gen_ai.harness.diff.*` primitive. **The seam Bitter named in baseline §2.4 still exists, but it is now actively being narrowed from above.**

**Sources:** PRs #140, #136, #142, #162, #185, #188, #190, #195, #165, #179, #197 in `open-telemetry/semantic-conventions-genai`; issue #200 at <https://github.com/open-telemetry/semantic-conventions-genai/issues/200>. Observed 2026-05-27.

### 2.4 OpenInference: reasoning conventions hardened, no future-tense move

- PR #3112 ("feat: specify reasoning semantic conventions") merged **2026-05-22**. Clarifies provider continuity tokens, `message_content.id`, OpenAI `encrypted_content` vs Anthropic `thinking.signature` vs Gemini `thoughtSignature` vs Gemini `functionCall.thoughtSignature`. Tool-call reasoning state is preserved.
- This hardens the past-tense fidelity of agent reasoning capture but does **not** introduce any cross-run, lesson-shaped, or operator-corrective primitive.

**Sources:** `Arize-ai/openinference` commit `feat: specify reasoning semantic conventions (#3160)` 2026-05-23 and PR #3112 merged 2026-05-22. Observed 2026-05-27.

### 2.5 Vendor observability stacks — silence

Langfuse shipped v3.174.0 (2026-05-13), v3.174.1 (2026-05-13), and v3.175.0 (2026-05-21). None of these is a schema-level move. Helicone, Phoenix, LangSmith, Vercel AI SDK, Datadog, Honeycomb: no observable schema delta in the window. **Silence: the past-tense bucket is now mature enough that vendors are tracking OTel rather than competing on schema.**

---

## 3. Bucket B — Proof-tense accountability

The bucket the baseline called *"fragmented (single-action, user-facing)"* moved sharply.

### 3.1 IETF: ACTA compliance receipts went from -01 to -04 in eight days

**Observed fact:**

- At baseline (2026-05-11): `draft-marques-asqav-compliance-receipts-01` (compliance profile of ACTA signed action receipts, EU AI Act Article 12 alignment).
- At 2026-05-27: `draft-marques-asqav-compliance-receipts-04`, last revised **2026-05-19**. Four revisions in eight days.
- Scope expansion observed in the abstract: now binds to EU AI Act Articles 12 + 26, DORA Article 17, NIST AI RMF, Colorado AI Act, Texas AI Act, HIPAA, SEC Rule 17a-4, NYDFS cybersecurity, and CIRCIA. Adds a **counterparty-binding extension for cross-agent verification under compromised intermediaries.**

**Inferred status:** the ASQAV compliance profile is *trying very hard to become the policy-anchor of choice* for agent action receipts. The cross-agent / counterparty-binding extension is the new feature most relevant to anyone (including Bitter) thinking about multi-run or multi-agent provenance. It is **not** future-tense corrective signal — it is past-tense + cryptographic proof — but it gestures at multi-actor evidence in a way that the baseline's single-action framing of the proof-tense bucket missed.

**Source:** <https://datatracker.ietf.org/doc/draft-marques-asqav-compliance-receipts/>, observed 2026-05-27 (versions 00–04 listed; v04 dated 2026-05-19).

### 3.2 IETF: a new sibling ACTA spec — Knowledge Units for multi-model deliberation

**Observed fact:**

- `draft-farley-acta-knowledge-units-00`, published **2026-04-06** (predates baseline; the baseline survey did not surface it — observed first in this delta pass).
- Expires 2026-10-08.
- Abstract: defines a Knowledge Unit format for capturing verified knowledge from structured multi-model deliberation. Captures the question asked, models that participated, consensus achieved, points of agreement *and disagreement*, and cryptographic receipts (Ed25519 per round).
- Complements `draft-farley-acta-signed-receipts` (which is still at `-01`, no movement since baseline).
- Intended status: Informational.

**Why this matters for Bitter:** the KU format is the first IETF artifact that explicitly *preserves disagreement as a signal*, not noise to be smoothed. This is doctrinally adjacent to Bitter's "no signal unless it can change the next action" rule and the R5 framing that runs should be graded by what claims they can credibly support. KU is a multi-model evidence object; `bitter.run.receipt.v0` is a single-run evidence object — but the two formats overlap in posture (cryptographic provenance + structured uncertainty preservation) far more than baseline implied existed in the IETF space.

**Source:** <https://datatracker.ietf.org/doc/draft-farley-acta-knowledge-units/>, observed 2026-05-27.

### 3.3 IETF: ACTA signed-receipts itself — silence

- `draft-farley-acta-signed-receipts` is still at `-01`, last updated 2026-04-25.
- Not WG-adopted. No formal standing in IETF.

**Silence: signal.** The parent ACTA receipt spec has not moved in 32 days. The compliance-profile derivative (Marques) and the deliberation extension (Farley KU) are doing the work. The core spec is stable.

### 3.4 Microsoft Agent Governance Toolkit shipped twice in 6 days

- **v3.6.0 released 2026-05-12** (one day after baseline). Six specification documents covering identity, trust, hypervisor execution, SRE governance, MCP security, and audit/compliance frameworks. `ExternalJWKSProvider` for cross-organization agent federation. `StdoutAuditSink` for containerized deployments. 319 security fixes (path traversal, SSRF, injection).
- **v3.7.0 released 2026-05-18.** `ToolPolicy` schema for declarative rate-limit, approval, and justification guards on tool invocations. EU AI Act fixes. Documentation pass.
- The `GateRecord` decision-receipt pattern is now formalized: SHA-256 pre-execution hash, four institutional categories, tamper detection. Designed to populate the commitment-mode receipt payload layer in ACTA format. Receipt then signs and seals; auditors read GDR fields inside.

**Inferred status:** the toolkit is moving from "single-action accountability artifact" toward "policy enforcement + decision evidence + signed receipt" stack. It is now ~6 maintainers / multiple contributing orgs (per baseline) but with concrete schemas, demos, and discussion threads (e.g., Discussion #276 "policy enforcement vs decision evidence"). It is also tightly coupled to OWASP Agentic Top 10 (10/10 controls), giving it a security-policy adoption story that none of the future-tense candidates have.

**Source:** <https://github.com/microsoft/agent-governance-toolkit/releases>, observed 2026-05-27.

### 3.5 Mastercard "Verifiable Intent" + Visa "Trusted Agent Protocol"

Both predate baseline (Mastercard Verifiable Intent: 2026-03-05; Visa TAP: late 2025/early 2026). Neither was given full weight in the baseline's proof-tense bucket. Both are **standards-shaped, not standards-bodied** — they are open-source frameworks rather than IETF/W3C drafts. Both anchor agent-action accountability in the payments rails, where the regulatory pressure is highest.

**Bitter-relevant observation:** Mastercard AAR fields per public reporting include *Agent identity, Principal, Action (type/target/method/status), Input/Output hashes, Cost, Timestamp.* This is the most production-deployed agent-action receipt schema in 2026. Naming pressure is highest here: any Bitter spec that uses the word "receipt" must explicitly disambiguate from this layer.

**Source:** <https://www.pymnts.com/mastercard/2026/mastercard-unveils-open-standard-to-verify-ai-agent-transactions/>; <https://github.com/visa/trusted-agent-protocol>. Observed 2026-05-27.

### 3.6 `agentreceipts.ai` / `realalonw/agent-receipts` — silence

- Repo `realalonw/agent-receipts` had **no commits since 2026-05-11**.
- No new release tag observable.
- Spec page still says v0.2.0 Draft.

**Silence: signal.** The user-facing W3C VC agent-receipts spec is not moving. The name is still claimed; the spec is not advancing. Bitter's risk on this name collision is unchanged in severity but slightly reduced in urgency — the project is not actively pushing into adjacent territory.

**Source:** <https://github.com/realalonw/agent-receipts/commits>, observed 2026-05-27.

---

## 4. Bucket C — Manifest-tense declaration

### 4.1 Oracle Agent Spec — release cadence visible, scope unchanged

- Commits since 2026-05-11: docs polish, LangGraph adapter improvements, `create-agent-spec` Agent skill (note: integrates with Anthropic Agent Skills format), prep for v26.2 release.
- Still framed as declarative manifest with `Sensitive Fields`, `Swarm`, `ManagerWorkers` orchestration. Not future-tense.

**Source:** `oracle/agent-spec` commits 2026-05-11 → 2026-05-27, observed 2026-05-27.

### 4.2 Open Agent Spec (Prime Vector) — no observed movement in window

No new release of `prime-vector/open-agent-spec` observed since v1.5. The spec remains explicitly *"not an execution framework."*

### 4.3 A2A — version stable, docs and lifecycle fixes only

- Repo cadence continues but **no v1.x point release** since v1.0.0 (2026-03-12).
- Notable commits in window:
  - 2026-05-19: *fix: TaskStatus values in the specification (#1801)* — corrective spec fix.
  - 2026-05-19: *docs: remove deprecated stateTransitionHistory references (#1834)* — removes a deprecated field from canonical docs.
  - 2026-05-23: *docs(fix): align push notification auth examples (#1793)*.
  - 2026-05-26: *docs: add multi-tenancy guide and clarify tenant field semantics (#1848)*.
- The `Task` lifecycle and artifact model the baseline cited are stable.

**Inferred status:** A2A is consolidating, not extending. The artifact/carry-forward seam the baseline named is still open. Critically, **OTel is now drafting `gen_ai` semconv for A2A** (PR #195, opened 2026-05-26) — this is the integration point Bitter would also want to land against, and it is now in flight under a different sponsor.

**Source:** `a2aproject/A2A` commits, observed 2026-05-27.

### 4.4 Anthropic Agent Skills — open standard, 32 tools adopted

The Agent Skills spec (released as open standard 2025-12-18; not surfaced in baseline) reached 32 tool adoptions by March 2026 including VS Code, ChatGPT, Codex CLI, Gemini CLI, JetBrains Junie, AWS Kiro, Block Goose. SKILL.md files at a canonical path.

**Why this matters to Bitter:** Agent Skills is *capability declaration*, not run record. It is the "what the agent knows how to do" artifact, not the "what happened during this run" artifact. The two are complementary — Skills declares the procedural knowledge that a Bitter receipt could in principle reference (in `carry_forward` or `harness_diff`).

It also confirms a pattern: **Anthropic's playbook for open-standard adoption is fast.** From release to 32 tools in 3 months. If Bitter ships `bitter.run.receipt.v0` Apache 2.0 with reference adapters for Claude Code / Codex / Gemini CLI, the analogue is plausible — but only because the adapter targets are now standardized on a shared file-format convention. The Skills standard *increases* the adapter-economics for Bitter, not decreases.

**Source:** <https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation>; <https://thenewstack.io/agent-skills-anthropics-next-bid-to-define-ai-standards/>. Observed 2026-05-27.

### 4.5 AWS Agent Registry — preview launched 2026-04-09

(Predates baseline; baseline did not catalog it.)

Schema posture per AWS docs: Agents comply with A2A AgentCard v0.3.0; MCP Servers comply with official MCP server schema; Agent Skills documented in Markdown with optional JSON; Custom Resources in JSON. Approval workflow: draft → pending → approved.

**Inferred status:** AWS is positioning Agent Registry as the *manifest-tense governance layer*. It explicitly does not include run-receipt semantics. It is the catalog, not the ledger. **Operator-side run-record territory is still open from the AWS direction.**

**Source:** <https://aws.amazon.com/about-aws/whats-new/2026/04/aws-agent-registry-in-agentcore-preview/>, observed 2026-05-27.

---

## 5. Bucket D — Future-tense corrective signal (the empty bucket)

This is the bucket the baseline explicitly named empty and the bucket `bitter.macro_run.v0` occupies. The delta:

### 5.1 Still empty *as a spec*

No project currently calling itself a spec — no Apache/MIT-licensed JSON Schema, no IETF draft, no W3C, no OTel proposal — has been published in the 16-day window that:

- Defines a `lesson` or `correction` first-class type with cross-run scope.
- Defines `harness_diff` as a structured primitive.
- Defines a `repeat_failure_signature` or cross-run failure-mode hash.
- Defines `carry_forward` semantics (an artifact intended to be loaded by the *next* run on a surface).
- Defines `contract_level` grading or `evidence_origin` axis.

The baseline's claim that *"first credible occupant defines it"* still holds at the spec layer.

### 5.2 New: a tool-level claimant in the spirit-of-the-bucket — `ReinaMacCredy/maestro`

**Observed fact:**

- Repo `ReinaMacCredy/maestro`, 176 stars, MIT, created **2025-12-19**, last updated 2026-05-27. Description: *"Agent harness for codebases. Gives Claude Code, Codex, and CI a shared task system, verdict ledger, and state store so agent work is traceable and auditable."*
- Per search-result excerpt: *"Every task carries optional receipt metadata (summary, surprise, verifiedBy) captured at completion."*
- Targets Claude Code, Codex, and CI — same surfaces Bitter targets.

**Inferred status:** Maestro is **not a spec** — it is a tool with an opinionated internal schema. But it is the first publicly visible artifact in the window that:
1. Names "verdict ledger" as a first-class concept (proof-tense × future-tense overlap).
2. Captures `summary` / `surprise` / `verifiedBy` at task completion (the `surprise` field is in-spirit a tiny lesson primitive).
3. Targets exactly the agent harnesses Bitter targets (Claude Code, Codex, CI).
4. Has non-trivial momentum (176 stars in ~5 months, recently updated).

**What it does not have:** spec-grade schema versioning, JSON Schema validation, OTel mapping, governance, or a public specification of the receipt envelope shape. It is a calling-card-stage project, not a standards-tier artifact.

**Operator consequence:** the future-tense bucket has its first proximate occupant at the tool layer. Bitter's window to be the first *spec* layer occupant is intact — but the cultural framing of "harness with receipts" is no longer purely Bitter-shaped. The naming and positioning of `bitter.run.receipt.v0` should now explicitly distinguish from Maestro-shape (per-task ledger inside a harness) by emphasizing the *cross-run* and *cross-harness* dimensions.

**Source:** <https://github.com/ReinaMacCredy/maestro>, observed 2026-05-27.

### 5.3 New: a much-smaller adjacent project — `manasvardhan/agent-replay`

- 1 star, MIT, created 2026-02-16, last updated 2026-05-08.
- Description: *"Record, replay, and debug AI agent execution traces."*
- Per search-result excerpt, it can *"diff two runs to find exactly where behavior diverged."*

**Inferred status:** noise-floor occupant. Naming the pattern but with no governance, momentum, or community. Worth noting only because *the run-diff concept is becoming a public idea* in the agent-tooling adjacent space.

**Source:** <https://github.com/manasvardhan/agent-replay>, observed 2026-05-27.

### 5.4 The OTel SIG is now narrowing toward the seam

Three OTel `semantic-conventions-genai` PRs/issues open in the window are *adjacent* to future-tense (none is future-tense itself):

- **#162 (compaction)** — `gen_ai.conversation.compacted` boolean. Names whether the conversation history fed to a model is a compacted view of a longer prior conversation. This is a one-bit primitive — but it is the first OTel field that admits the harness modified the model's view of the past.
- **#190 (context selection)** — `gen_ai.context.selection.evaluated` event. Privacy-preserving counts (candidates / selected / suppressed) plus a delivered-context hash count. Captures whether the harness over-selected context before the model call. PR body: *"a cheap count-only event gives operators an early waste signal without requiring raw content capture."*
- **#200 (memory systems proposal, issue)** — opened **the same day as this delta**. Proposes `gen_ai.memory.*` covering store/retrieve/update/decay/expire/forget/transfer-between-layers, plus memory health, confidence decay, audit-of-memory-influenced-decisions, memory poisoning detection. This is the most expansive proposal in the bucket and explicitly cites *"how memories influence decisions"* and *"detect memory poisoning or drift"* as use cases.

**The shape of the threat:** OTel is now in a position where, if it accepted a future-tense proposal *with sufficient credibility*, it would land it inside `gen_ai.*` rather than `bitter.*`. The seam is not closed yet, but the SIG has demonstrated in this window that it will accept new namespaces (`agent.*` for threat detection, per PR #165) when the rationale is operator-coherent. **Bitter's OTEP for `gen_ai.lesson.*` / `gen_ai.harness.diff` (baseline Phase 3) needs to start sooner than the original 2–6 month horizon implied** — or someone else's proposal will land first.

### 5.5 mem0 / Letta / Zep / MemPalace — the agent-memory race is still schema-fragmented

- `mem0` (the leader) shipped continuously through the window: `delete_linked` option, OpenCode/Antigravity plugins, pgvector filter improvements, mem0-plugin v0.2.5/v0.2.6. Active, but no schema-level move toward cross-tool portability.
- `letta-ai/letta` had a single commit in the window: 2026-05-14 *"fix(security): use JSON instead of pickle for sandbox->server tool result transport."* Security fix, not schema.
- No public memory-schema unification effort observed in the window.

**Silence: signal.** The baseline's claim that *"the AI agent memory race has 80k+ stars and no common schema"* is unchanged. The OTel memory-ops PR (#140 merged) and the broader memory-systems proposal (#200) are the first credible standards-side answer to this — and **OTel, not mem0/Letta/Zep/MemPalace, will likely be the de facto memory schema layer if any of them get adopted.** This shifts where Bitter should engage: not with the agent-memory tools (which are not converging on a schema), but with the OTel SIG (which is now actively proposing one).

**Source:** `mem0ai/mem0` and `letta-ai/letta` commit logs, observed 2026-05-27.

---

## 6. Adjacent ecosystem — governance moves

### 6.1 LF Agentic AI Foundation: 43 new members, no new project intake

**Observed fact (2026-05-18 press):**

- AAIF added 43 new members in Q2 2026: 4 Gold, 27 Silver, 12 Associate. Total membership: 180 organizations.
- Notable new Silver members: Atlassian, Avaya, Agen.co, Arkhai, Alice.
- Notable new Associates: Consumer Reports, Drexel University, NSW Government, Sandia National Laboratories, Rust Foundation, U.S. Army.
- **Hosted projects unchanged:** MCP, Goose, AGENTS.md. No new project intakes announced in the window.
- A new project lifecycle policy (Growth → Impact → Emeritus) is now formally documented.

**Inferred status:** the foundation is consolidating membership, not yet accepting new technical projects. The contribution-surface the baseline identified (LF AAIF as host for a Bitter receipt project) is **wider** in membership but still **open** in scope. The 6–12 month window the baseline assumed is plausible — but membership growth at this rate means competitor proposals are more likely to surface in 2026-Q3/Q4.

**Source:** <https://www.hpcwire.com/aiwire/2026/05/18/agentic-ai-foundation-adds-43-new-members-as-adoption-of-open-agent-standards-accelerates/>, observed 2026-05-27.

### 6.2 CNCF Cloud Native AI WG: OTel graduation was the event

The most concrete CNCF AI WG news in the window *was* OpenTelemetry's graduation. The CNAI working group itself remains at whitepaper / coordination stage; no spec-tier deliverable observed.

**Source:** <https://tag-runtime.cncf.io/wgs/cnaiwg/whitepapers/cloudnativeai/>, observed 2026-05-27.

### 6.3 MCP: new draft protocol version `2026-07-28` is in prep

- `modelcontextprotocol/modelcontextprotocol` repo activity in the window: heavy. 2026-05-27 alone saw multiple draft-spec language updates, including pinning the next draft protocol version to **2026-07-28**.
- Tool annotations IG charter discussion merged (#2615 on 2026-05-27).
- Removed the deprecated `Example Clients overview page`.
- No commits observed that touch tool-call accountability or memory at the schema layer. **Silence on the receipt/memory seam from MCP itself.**

**Inferred status:** MCP is on track for a 2026-07-28 release. The accountability and memory seams are being deferred to OTel `semantic-conventions-genai` (per the gen_ai.memory.client work targeting MCP integration in PR #4252 of `opentelemetry-python-contrib`, cited in the closed-then-reopened memory ops PR thread).

**Source:** `modelcontextprotocol/modelcontextprotocol` commits, observed 2026-05-27.

### 6.4 Naming claims — the status of "Agent Run Receipt" / "Agent Run Record"

- Targeted search for repositories named "agent-run-receipt", "agent-run-record", "operator-run-receipt", "harness-diff": **no exact name hits.**
- Phrases "agent run receipt" / "agent run record" / "operator run receipt": still unclaimed at the spec layer.
- "Harness diff" appears in casual usage (agent-replay project description) but is not claimed as a primitive.

**Inferred status:** the candidate-names list the baseline identified is **still open at the spec layer**. The cultural risk is rising (Maestro uses "harness" + "ledger"; agent-replay uses "diff") but no one has used these specific phrasings as a spec name. This is the area where Bitter's window remains most intact.

---

## 7. Updated four-bucket map (delta from baseline §2.1)

| Bucket | Baseline status (2026-05-11) | Delta-aware status (2026-05-27) |
|---|---|---|
| **Past-tense observability** | Converging (de facto standard) | **Graduated** + GenAI semconv now in its own dedicated repo with release workflow. Multiple lifecycle-adjacent PRs in flight (memory ops merged; evaluation, compaction, context-selection, workflow-node, threat-detection in review). |
| **Proof-tense accountability** | Fragmented (single-action, user-facing) | **Stratifying fast.** Compliance leg (ASQAV -01 → -04), deliberation leg (Farley KU -00), enterprise governance leg (MS Toolkit v3.6 / v3.7), payments leg (Mastercard AAR / Visa TAP). User-side W3C VC leg (`agentreceipts.ai`) is silent. |
| **Manifest-tense declaration** | Early; competing | **Consolidating around A2A AgentCard + Anthropic Agent Skills + (catalog-tier) AWS Agent Registry.** Oracle Agent Spec stable cadence; Prime Vector OAS silent. |
| **Future-tense corrective signal** | Empty | **Empty *as a spec*** — but tool-level claimant emerged (Maestro, 176 stars). OTel SIG is now actively narrowing toward the seam from above (PRs #162, #190; issue #200). **First-occupant window narrower than baseline implied.** |

---

## 8. Implications for Phase 1

The original survey recommended Option C: hybrid (emit OTel for past-tense; publish `bitter.run.receipt.v0` for future-tense; reference adapters; OTel SIG engagement). Three questions, each answered through the Bitter house rule (*"no frontier claim without an operator consequence"*):

### Q1: Does the Phase 1 posture still hold?

**Yes — and it should accelerate.** Four operator-side consequences from the delta:

1. **OTel graduation removes "betting on an in-development standard" risk.** The hybrid Option C the baseline assumed was contingent on OTel GenAI continuing to converge. As of 2026-05-21, the parent project is graduated and the GenAI subproject has its own dedicated repo, release workflow, and PR dashboard. *Operator consequence:* Bitter can commit harder to "emit OTel for past-tense" without worry that the underlying base will be re-architected. Adapter work targeting OTel GenAI spans is now a graduated-standard investment, not a development-stage gamble.

2. **The future-tense first-occupant window is narrower.** The baseline assumed a 6–12 month window. The delta shows: (a) OTel `semantic-conventions-genai` is now adding lifecycle-shaped primitives at a real cadence (memory ops merged in 8 days from PR file; #200 memory-systems proposal lands the same day as this delta); (b) Maestro has 176 stars and is publicly claiming "verdict ledger" framing; (c) AAIF added 43 members and is more likely to surface a competitor proposal in 2026-Q3/Q4 than at baseline. *Operator consequence:* Phase 1 should ship in **≤2 weeks**, not "1–2 weeks plus drift." The schema-shape work is already done internally (`bitter.macro_run.v0` is the source). The blocker is publication.

3. **Naming risk is higher than baseline modeled.** Proof-tense bucket now has four distinct neighbors (compliance, deliberation, enterprise governance, payments) instead of one. Maestro added "ledger" + "harness." *Operator consequence:* the spec name should aggressively disambiguate. Concretely: prefer *"operator run receipt"* over *"agent receipt"*; in the spec doc, lead with the **five-neighbor disambiguation** (Marques ASQAV compliance receipts, Farley ACTA signed receipts, MS Toolkit GateRecord, Mastercard AAR, `agentreceipts.ai` W3C VC) instead of the baseline's four-bucket taxonomy alone. Each disambiguation should be one sentence: *what they are; what we are; why both should exist.*

4. **OTel SIG engagement must start now, not after Phase 2.** Baseline staged OTel SIG engagement as Phase 3 (2–6 months out). The delta shows OTel is filing memory-ops and context-selection PRs that, if accepted, would land inside `gen_ai.*` namespace and reduce the cultural credibility of any later `bitter.*` proposal in the same space. *Operator consequence:* a praise-first OTEP-style sketch proposing `gen_ai.lesson.*` / `gen_ai.harness.diff` / `gen_ai.repeat_failure.detected` should be circulated as a **draft proposal in the existing Tuesday 9 PT SIG meetings within 2 weeks of Phase 1 publication**, not deferred. Even a sketch that gets rejected establishes Bitter as the first credible voice in the seam, which is the operator-side win regardless of standards-body outcome.

### Q2: Does the Phase 1 posture change?

**Three changes recommended:**

**Change 1 — Reference adapter target list should explicitly include Maestro and the OTel `gen_ai` memory-ops scenario.** Baseline listed Hermes, OpenHands, Claude Code, Codex, Gemini CLI as adapter targets. Add:
- **Maestro adapter** — reads `verdict ledger` + per-task receipt metadata (`summary`, `surprise`, `verifiedBy`) and emits a `bitter.run.receipt.v0` envelope. This is the highest-leverage adapter: it directly demonstrates that Bitter's spec is a superset of the tool-layer pattern, and it puts a Bitter receipt next to a Maestro receipt in a single repo where the difference (cross-run vs per-task) is visible at a glance.
- **OTel `gen_ai.memory.*` mapping** — show how a `bitter.run.receipt.v0` envelope can be projected into the merged memory-op spans (PR #140) plus the context-selection event (#190). This is the OTel mapping doc the baseline already calls for, updated for what actually landed in the SIG.

**Change 2 — Spec doc should include a "five-neighbor disambiguation" section.** Replace the baseline's "leading with four-bucket taxonomy" framing with:
1. Open with a one-paragraph statement of what `bitter.run.receipt.v0` is *for* — operator-side learning across runs.
2. Then a five-row disambiguation table:
    - vs Marques ASQAV compliance receipts (we do not bind to EU AI Act / DORA / NIST AI RMF policy fields; we are about future-tense learning).
    - vs Farley ACTA signed receipts (we are not a cryptographic provenance artifact per se; we reference replay packets but we do not chain Ed25519 signatures per action).
    - vs MS Agent Governance Toolkit GateRecord (we do not enforce policy; we record what the run taught the next run).
    - vs Mastercard AAR / Verifiable Intent (we are not per-action payment authorization).
    - vs `agentreceipts.ai` W3C VC (we are operator-facing, not end-user-facing; not single-action; not VC-shaped).
3. Then the four-bucket taxonomy, as background.
4. Then the schema.

**Change 3 — Skip Bitter-namespaced naming in the open spec; prefer `operator.run.receipt.v0` for the open envelope.** Baseline already noted that "the brand stays on the canonical implementation; the spec is universal." The delta sharpens this: with Maestro using a tool-internal "verdict ledger" and OTel now adding `agent.*` namespace (per PR #165 for threat detection), the cultural pattern is *the open spec gets a namespace that names the operator concern, not the vendor.* Concrete recommendation: the open envelope's `schema_version` literal should be `operator.run.receipt.v0` (or a similarly neutral name); Bitter's internal `bitter.macro_run.v0` continues to exist privately and references the open envelope by reference. *Operator consequence:* third-party adopters (Maestro maintainers, OpenHands maintainers, future LF AAIF reviewers) can adopt the spec without adopting the Bitter brand, which is what unlocks adapter ecosystem.

### Q3: Does the Phase 1 posture decelerate?

**No — but the OTel SIG Phase 3 timeline accelerates by 4–8 weeks.** The baseline's Phase 3 ("OTel GenAI SIG engagement — parallel; long horizon, 2–6 months") was modeled on a stale-state OTel that had not yet split out the GenAI repo and had not yet graduated. Both happened. The SIG is now more accessible (dedicated repo, active dashboard, weekly cadence) but also more contested (memory-ops, context-selection, evaluation-span PRs all in flight from non-Bitter contributors). The implication is:

- **Phase 1 (spec ship): ≤2 weeks** (unchanged).
- **Phase 2 (reference adapters): 1–2 weeks per adapter** (add Maestro to the target list).
- **Phase 3 (OTel SIG sketch): start in parallel with Phase 1**, not after Phase 2. Concretely: post a discussion issue in `open-telemetry/semantic-conventions-genai` named *"Proposal for future-tense semantic conventions: `gen_ai.lesson.recorded`, `gen_ai.harness.diff`, `gen_ai.repeat_failure.detected`"* within the same week the Bitter spec lands. Reference the spec; invite collaboration; praise-first about the memory-ops and context-selection PRs as the right ground-floor work.

---

## 9. Risk register delta (changes only)

| Risk | Baseline (2026-05-11) | Delta status (2026-05-27) |
|---|---|---|
| OTel SIG declines the extension proposal | Medium | **Lower** — SIG has shown it will accept new namespaces (`agent.*` for threat detection); the seam is closer than it was. |
| Name collision with `agentreceipts.ai` | High | **Unchanged in severity, lower in immediacy.** The W3C VC project is silent in the window. |
| Confusion with proof-tense single-action receipts | Medium | **Higher.** Four neighbors instead of one (Marques, Farley, MS Toolkit, Mastercard/Visa). Disambiguation must be more deliberate. |
| LF AAIF hosts a competing receipt spec before Bitter | Low–Medium | **Unchanged.** AAIF added members, not projects, in the window. 6–12 month window still credible. |
| Spec proposal seen as fragmentation | Medium | **Lower.** OTel graduation framed observability as *the* standard; a future-tense companion can credibly be positioned as "what comes after past-tense," not "another past-tense." |
| Maintainers (Hermes, OpenHands) ignore outreach | High | **Unchanged.** Adding Maestro as adapter target gives a faster-moving counterparty with stated interest in the same problem. |
| **NEW: OTel SIG lands a future-tense primitive under `gen_ai.*` before Bitter publishes** | n/a at baseline | **Medium and rising.** Context-selection PR (#190) and memory-systems proposal (#200) are within one or two design iterations of being able to host a `lesson` or `correction` primitive. Mitigation: ship Phase 1 in ≤2 weeks and post the SIG sketch in parallel. |
| **NEW: Maestro-style tool-layer pattern becomes the cultural default before Bitter establishes the spec-layer pattern** | n/a at baseline | **Low–Medium.** Maestro has 176 stars but no spec. Mitigation: publish the operator-run-receipt envelope with reference adapter for Maestro itself in Phase 2; turn the competitor into the first adopter. |
| **NEW: ACTA-family receipts (Marques compliance, Farley KU) become the regulatory anchor for "agent receipts" in policy contexts** | n/a at baseline | **Medium.** Marques is at -04 in 8 days and binds to 9+ regulatory frameworks. Mitigation: the Bitter open spec must explicitly cite ACTA as the proof-tense neighbor and clarify that operator-run-receipt is not a policy artifact. |

---

## 10. What did *not* move (silence as signal)

For completeness, the following items the baseline catalogued had **no material movement** in the window. Each silence is its own small evidence:

- **`agentreceipts.ai` / `realalonw/agent-receipts`** — no commits since baseline. User-facing W3C VC spec is not advancing.
- **`draft-farley-acta-signed-receipts`** — still at `-01`. The base ACTA receipt spec is stable.
- **Vendor observability stacks** (LangSmith, Helicone, Phoenix, Vercel AI SDK, Datadog, Honeycomb) — no schema-tier moves. Vendors are tracking OTel, not competing on schema.
- **AgentSpec (community OSS) and Open Agent Spec (Prime Vector)** — no observed releases.
- **mem0 / Letta / Zep / MemPalace common schema** — still no common schema. The schema effort, if any, will be at OTel.
- **A2A** — v1.0.0 still latest tag; only docs/bugfix commits in the window.
- **Job Card pattern (TensorOps)** — still a blog post. No spec emerged.

Together, these silences confirm the baseline's central thesis: the world is converging on past-tense (now graduated), stratifying in proof-tense, consolidating in manifest-tense, and *still leaving future-tense open at the spec layer*.

---

## 11. One-line answer

The Bitter `bitter.run.receipt.v0` Phase 1 posture from 2026-05-11 still holds and should accelerate: ship the spec in ≤2 weeks, add Maestro as an adapter target alongside Hermes/OpenHands/Claude Code/Codex/Gemini CLI, prefer a vendor-neutral envelope name (`operator.run.receipt.v0` for the open spec; `bitter.macro_run.v0` continues internally), lead the spec doc with explicit disambiguation from five proof-tense neighbors, and post the OTel SIG `gen_ai.lesson.*` / `gen_ai.harness.diff` sketch in parallel with publication rather than deferring it. The future-tense bucket is still empty as a spec — but for the first time in this window, it has both a tool-level claimant (Maestro) and a standards-body neighbor (OTel context-selection / memory-systems) narrowing toward it from two sides.

---

## Appendix — primary sources cited (URL + observation date 2026-05-27)

- `open-telemetry/semantic-conventions-genai` — <https://github.com/open-telemetry/semantic-conventions-genai>
- OTel CNCF graduation press — <https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/>
- Memory ops PR (merged) — <https://github.com/open-telemetry/semantic-conventions-genai/pull/140>
- Compaction PR — <https://github.com/open-telemetry/semantic-conventions-genai/pull/162>
- Context selection event PR — <https://github.com/open-telemetry/semantic-conventions-genai/pull/190>
- Evaluation span PR — <https://github.com/open-telemetry/semantic-conventions-genai/pull/185>
- Workflow node PR — <https://github.com/open-telemetry/semantic-conventions-genai/pull/188>
- A2A semconv PR — <https://github.com/open-telemetry/semantic-conventions-genai/pull/195>
- Agent threat detection PR — <https://github.com/open-telemetry/semantic-conventions-genai/pull/165>
- Memory systems proposal issue — <https://github.com/open-telemetry/semantic-conventions-genai/issues/200>
- Agentic systems meta-issue — <https://github.com/open-telemetry/semantic-conventions-genai/issues/35>
- Move-to-new-repo PR — <https://github.com/open-telemetry/semantic-conventions/pull/3696>
- OpenInference reasoning semconv PR — <https://github.com/Arize-ai/openinference/pull/3112>
- `draft-marques-asqav-compliance-receipts` (v04, 2026-05-19) — <https://datatracker.ietf.org/doc/draft-marques-asqav-compliance-receipts/>
- `draft-farley-acta-knowledge-units-00` (2026-04-06) — <https://datatracker.ietf.org/doc/draft-farley-acta-knowledge-units/>
- `draft-farley-acta-signed-receipts-01` (2026-04-25; unchanged) — <https://datatracker.ietf.org/doc/draft-farley-acta-signed-receipts/>
- Microsoft Agent Governance Toolkit releases — <https://github.com/microsoft/agent-governance-toolkit/releases>
- AAIF May 2026 member-growth press — <https://www.hpcwire.com/aiwire/2026/05/18/agentic-ai-foundation-adds-43-new-members-as-adoption-of-open-agent-standards-accelerates/>
- AAIF site — <https://aaif.io/>
- A2A repo — <https://github.com/a2aproject/A2A>
- MCP repo — <https://github.com/modelcontextprotocol/modelcontextprotocol>
- `realalonw/agent-receipts` — <https://github.com/realalonw/agent-receipts>
- `oracle/agent-spec` — <https://github.com/oracle/agent-spec>
- `ReinaMacCredy/maestro` — <https://github.com/ReinaMacCredy/maestro>
- `manasvardhan/agent-replay` — <https://github.com/manasvardhan/agent-replay>
- Mastercard Verifiable Intent — <https://www.pymnts.com/mastercard/2026/mastercard-unveils-open-standard-to-verify-ai-agent-transactions/>
- Visa Trusted Agent Protocol — <https://github.com/visa/trusted-agent-protocol>
- AWS Agent Registry preview (2026-04-09) — <https://aws.amazon.com/about-aws/whats-new/2026/04/aws-agent-registry-in-agentcore-preview/>
- Anthropic Agent Skills (open standard) — <https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation>
- `mem0ai/mem0` — <https://github.com/mem0ai/mem0>
- `letta-ai/letta` — <https://github.com/letta-ai/letta>
- CNCF CNAI WG whitepaper — <https://tag-runtime.cncf.io/wgs/cnaiwg/whitepapers/cloudnativeai/>
