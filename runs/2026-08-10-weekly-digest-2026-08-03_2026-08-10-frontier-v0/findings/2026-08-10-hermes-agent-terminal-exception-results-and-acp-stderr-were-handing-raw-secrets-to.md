---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-hermes-agent-terminal-exception-results-and-acp-stderr-were-handing-raw-secrets-to
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/81675
    precision: merged_pr
---
# 2026-08-10-hermes-agent-terminal-exception-results-and-acp-stderr-were-handing-raw-secrets-to

Terminal exception results and ACP stderr were handing raw secrets to the model.

Both terminal_tool exception paths (generic `except` and `TERMINAL_DEGRADED_MODE=fail`) returned raw `str(e)` plus `traceback.format_exc()` to the model  --  only the logger copy was redacted, so a failing command with an inline secret put that secret in the model's context and in the transcript. Separately, the ACP adapter's `_setup_logging` cleared root handlers and installed a plain `logging.Formatter`, bypassing redaction on ACP stderr entirely. Both now pass through `redact_sensitive_text` / `RedactingFormatter`. The before/after table shows `OPENAI_API_KEY=sk-proj-AbCd...` verbatim becoming `OPENAI_API_KEY=***`.

Channel: tagged-release. Ancestry: merge_commit_sha 72eda946be949a5932923df3325037a0d6c5da49; compare/72eda946...v2026.8.13 -> status=ahead, ahead_by=996, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: This is a transcript-contamination class, not a live-exploit class: the secret is in stored session data and in anything you exported or shared from it. If you ran commands with inline credentials on v0.20.0 or earlier, rotate them and treat old session exports as sensitive.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/81675
