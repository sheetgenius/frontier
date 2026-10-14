---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-0-5-0-guards-console-state-patches-against-prototype-chain-paths
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/421636d5900320233df9f0096809b4462123ff04
    precision: commit
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/ui/src/lib/state/jsonPatch.ts#L65-L128
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/ui/src/lib/state/agentState.ts#L171
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-0-5-0-guards-console-state-patches-against-prototype-chain-paths

0.5.0 guards console state patches against prototype-chain paths. The console now rejects JSON patch paths containing __proto__, constructor or prototype before applying the patch. The earlier walker followed ordinary object properties, so a crafted state path could write through the prototype chain instead of only into the intended document. The state projection calls this guarded implementation. This hardening shipped in the packaged UI; it is not the separate npm client patcher, which had earlier own-property checks. No CVE or live exploit is claimed.

Channel: preview-or-beta (packaged console at T5 and T6). Half: defect. Date: 2026-09-30 (released; committed 2026-09-29 UTC).

Operator consequence: Use the T5/T6 console rather than an older packaged UI when displaying model-invented state. Keep console and server versions aligned; do not infer the npm client implementation from this console fix.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/commit/421636d5900320233df9f0096809b4462123ff04
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/ui/src/lib/state/jsonPatch.ts#L65-L128
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/ui/src/lib/state/agentState.ts#L171
