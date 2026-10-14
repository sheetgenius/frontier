---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-local-http-approval-hooks-work-but-refused-requests-still-fail-open
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
    precision: official_docs
---
# 2026-10-13-grok-build-local-http-approval-hooks-work-but-refused-requests-still-fail-open

Local HTTP approval hooks work, but refused requests still fail open. Local approval services become a documented usable integration. URL errors are surfaced, but a request refused at execution remains a hook error that allows the call. Proxy/DNS configuration can therefore defeat the intended policy without an affirmative deny.

Channel: tagged-release (stable 1.0.52). Half: both. Date: 2026-10-11 (1.0.52 note and shipped-guide documentation).

Operator consequence: Try loopback approval services with an independent boundary for consequential actions. Test invalid URLs, DNS failures, proxy modes, timeouts and denied replies on the actual route. Verify that failure stops the action rather than trusting a loaded managed-policy hook.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
