---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-35-0-stops-recording-model-and-tool-inputs-and-outputs-in-traces
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.35.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-35-0-stops-recording-model-and-tool-inputs-and-outputs-in-traces

eve 0.35.0 stops recording model and tool inputs and outputs in traces by default.

Instrumentation now records trace metadata without model or tool inputs and outputs by default. Content capture is opt-in: set `recordInputs` or `recordOutputs` to `true`, or use `EVE_TRACES_CONTENT=on` for the automatic local trace spool. This follows 0.34.0's redaction work, in which OpenTelemetry destinations can independently decline input or output content, redaction covers span attributes, exception and custom events, and status messages without mutating spans shared with other destinations, and providers can declare themselves metadata-only so eve never builds sensitive projections for them.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.35.0 published 2026-08-13T15:32:54Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.34.0...eve%400.35.0'` returned a 17-commit list containing the minor-change commit 3f92f7d  --  in the history of the stable tag eve@0.35.0.

Operator consequence: Two opposite consequences, and which one applies depends on which side of the trade you were on. If you were relying on traces to debug what an agent actually said and did, your traces go quiet on upgrade and you must set `recordInputs`/`recordOutputs` explicitly. If you were shipping agent traces to a third-party observability vendor, the default just stopped exporting prompts, responses and tool payloads to them  --  a real reduction in what leaves your boundary, and worth confirming against your own vendor contract before you turn it back on. The metadata-only provider tier is the design to note: it lets you send one class of telemetry to a vendor and keep the content class local, without hand-rolling redaction.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.35.0
