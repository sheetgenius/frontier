---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-trace-content-is-still-on-by-default-the-flue-opentelemetry-readme-said-the-opposite-until
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/767e9a848b1ec0b53b6f637fefd2e0491a7e77f5/packages/opentelemetry/README.md#L46
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/opentelemetry/README.md#L46
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/telemetry/content.ts#L151
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.1.1
    precision: github_release
---
# 2026-10-13-flue-trace-content-is-still-on-by-default-the-flue-opentelemetry-readme-said-the-opposite-until

Trace content is still on by default; the `@flue/opentelemetry` README said the opposite until 2.1.1, and tool payloads now land on standard attributes. The default did not move. Prompts, system instructions, tool arguments and results, and (for OpenTelemetry) exception messages and stacks all ship unless you pass `content: false` or a transform says otherwise. The documentation that ships inside the package changed: from 2.0.0 through 2.1.0 the npm README told readers content capture was off. And from 2.1.1, tool payloads of every shape go to the standard GenAI attributes that trace backends display, instead of vendor keys many backends ignore.

Channel: tagged-release. Half: both. Date: 2026-09-23.

Operator consequence: If you enabled `@flue/opentelemetry` between 2026-07-31 (2.0.0) and 2026-09-23 (2.1.1) on the README's word, your trace backend has been receiving conversation content. Check retention and access there, then set `content: false` or a redacting transform. After 2.1.1 the same payloads are easier to see in standard trace UIs, so revisit who can read traces. The profile's advice to set `content: false` before pointing at a hosted backend still stands.

## Receipt
- https://github.com/withastro/flue/blob/767e9a848b1ec0b53b6f637fefd2e0491a7e77f5/packages/opentelemetry/README.md#L46
- https://github.com/withastro/flue/blob/v2.3.0/packages/opentelemetry/README.md#L46
- https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/telemetry/content.ts#L151
- https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.1.1
