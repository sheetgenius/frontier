---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-docs-separate-telemetry-identity-from-five-content-capture-classes-all-off-by-default
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/commit/d0b0714881f0ba6d484b2b7ced0c3d13f75e4d81
    precision: commit
  - url: https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L286-L337
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-docs-separate-telemetry-identity-from-five-content-capture-classes-all-off-by-default

Docs separate telemetry identity from five content capture classes, all off by default. The CLI documentation now defines independent telemetry.capture controls for identity, prompts, responses, toolArguments, toolOutput and policyDetail; each defaults to false. Identity can attribute activity without prompt or tool content. Legacy captureContent and lockCaptureContent do not govern identity. Managed telemetry overrides local, SDK and environment values. Among managed sources, the highest-precedence source supplies the complete telemetry object; lower objects are not merged.

Channel: docs-only. Half: capability. Date: 2026-10-13.

Operator consequence: For attribution-only audits, configure identity independently rather than turning on content capture. Review legacy capture/lock policy and the complete winning managed object before exporting traces. This is a documented policy surface, not proof that a particular binary already enforces it.

## Receipt
- https://github.com/github/docs/commit/d0b0714881f0ba6d484b2b7ced0c3d13f75e4d81
- https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L286-L337
