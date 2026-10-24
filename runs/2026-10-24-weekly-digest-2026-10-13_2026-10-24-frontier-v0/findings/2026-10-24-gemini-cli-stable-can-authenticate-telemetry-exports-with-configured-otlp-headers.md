---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-stable-can-authenticate-telemetry-exports-with-configured-otlp-headers
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/b8e550e918e1f3f140e497b1a4ee945f88e672f1
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/config.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/sdk.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/cli/telemetry.md
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-stable-can-authenticate-telemetry-exports-with-configured-otlp-headers

Stable can authenticate telemetry exports with configured OTLP headers. Telemetry headers are merged with case-insensitive keys in precedence order: settings, `OTEL_EXPORTER_OTLP_HEADERS`, `GEMINI_TELEMETRY_OTLP_HEADERS`, then CLI arguments. Invalid header objects or wholly unusable nonempty header strings cause configuration errors. In comma-separated key=value input, malformed pairs and invalid names/values are skipped when another valid pair remains; gRPC exporter metadata can also skip invalid entries with a warning. The SDK passes headers to HTTP trace/log/metric exporters and metadata to gRPC exporters. This is an authenticated-export primitive; it does not itself enable telemetry.

Channel: tagged-release. Half: capability. Date: 2026-10-20.

Operator consequence: Teams can connect stable 0.65.0 directly to a collector that requires credentials, potentially removing a local proxy used only to inject headers. Verify effective headers rather than assume partial corruption fails closed. Check precedence before rollout and choose the exported data deliberately: the telemetry guide still documents prompt logging as enabled by default when that logging path is used. A functioning transport is not evidence that the intended data-minimization policy is configured.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/b8e550e918e1f3f140e497b1a4ee945f88e672f1
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/config.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/sdk.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/cli/telemetry.md
