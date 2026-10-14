---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-guardian-v2-is-still-off-auto-review-gained-policy-template-and-audit-log-controls-plus
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1814
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L55-L66
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/decisions.rs#L30
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/pull/47870
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/47125
    precision: merged_pr
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/analytics/normalize.rs#L320-L321
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.163.0-alpha.10/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L76
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76
    precision: commit
---
# 2026-10-13-codex-guardian-v2-is-still-off-auto-review-gained-policy-template-and-audit-log-controls-plus

Guardian V2 is still off; auto-review gained policy, template and audit-log controls, plus an opt-in Decisions comparison. The flag did not flip. The older Guardian approval reviewer stays Stable/true (lib.rs L1763-L1766) and still approves without a model review in Full Access (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-reviewer/src/routing.rs#L86-L91). The reviewer became configurable and auditable instead: `auto_review.experimental_policy_template` overrides the reviewer prompt (#45516, 0.156.0); `auto_review.extra_policy` and the managed `guardian_extra_policy` append policy text (#47125, 0.157.0); `otel.log_guardian_assessments`, off by default and needing an OTLP log exporter, exports completed synchronous-review assessments with status, risk level, user authorization and a rationale capped at 64 KiB; cached V2 approvals are excluded, and errors and cancellations differ from completed allow/deny assessments (#47870, 0.158.0). Reviews are now bound to the action's target environment (#47630), and the Browser connector gets computer-use review (#47647). New in 0.162.0 and off by default, `guardianv2_decisions_comparison` sends each Guardian V2 snapshot classification, including its transcript context, a second time to `https://api.openai.com/v1/decisions`, authenticated with `CODEX_GUARDIAN_DECISIONS_API_KEY` or, for the default OpenAI provider, `OPENAI_API_KEY` (startup.rs L55-L66; decisions.rs L30); alpha.8 switches that fallback to the cached login key (#53389) and adds an environment fallback (90f00bd8); use the alpha.10 resolver as the end-of-window preview receipt. The 0.156.0 `/usage` dashboard labels server-reported `guardian_review` and `guardian_classifier` usage as "Auto review" and "Auto review classifier", while by-model message counts fold `codex-auto-review` into "other" (normalize.rs L179, L320-L321). The auto-review docs page (retrieved 2026-10-13) documents none of the new keys and still says nothing about usage or cost.

Channel: tagged-release (flags and controls); preview-or-beta (#53389 and 90f00bd8 first in alpha.8). Half: both. Date: 2026-09-22 (0.156.0) to 2026-10-08 (0.162.0); 2026-10-13 (alpha.8 includes #53389 and its environment-fallback follow-up).

Operator consequence: Nothing auto-enables Guardian V2 through 0.162.1 or on main. Teams that need receipts for reviewer decisions should turn on `otel.log_guardian_assessments` with an OTLP exporter; this is a new synchronous-review audit export, not a log of every Guardian decision. Put organization rules in `guardian_extra_policy` instead of replacing the whole template. The opt-in comparison sends transcript-bearing classifier requests to a separate endpoint using the selected API credential; verify its billing ownership before enabling it. `/usage` source labels establish attribution, not the monetary cost of auto-review.

## Receipt
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1814
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L55-L66
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/decisions.rs#L30
- https://github.com/openai/codex/pull/47870
- https://github.com/openai/codex/pull/47125
- https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/analytics/normalize.rs#L320-L321
- https://github.com/openai/codex/blob/rust-v0.163.0-alpha.10/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L76
- https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76
