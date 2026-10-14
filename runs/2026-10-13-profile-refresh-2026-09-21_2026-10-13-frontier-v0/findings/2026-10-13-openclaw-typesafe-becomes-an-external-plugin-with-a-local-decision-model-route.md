---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-typesafe-becomes-an-external-plugin-with-a-local-decision-model-route
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/5acfb83d9fe84d5741343d85d5e3d99243bafd39
    precision: commit
  - url: https://github.com/openclaw/openclaw/compare/5acfb83d...v2026.9.6
    precision: git_compare
  - url: https://registry.npmjs.org/@openclaw%2ftypesafe/2026.9.6
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.6/docs/plugins/typesafe.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.6/CHANGELOG/2026.9.6.md
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-typesafe-becomes-an-external-plugin-with-a-local-decision-model-route

TypeSafe becomes an external plugin with a local decision-model route. TypeSafe leaves the core package for an official external installation while retaining its plugin id and compatible configuration. An explicitly configured loopback baseUrl can serve local System One decisions without a TypeSafe key or forwarding its hosted credential; omitted baseUrl retains hosted behavior. The plugin is disabled by default, and installation alone does not select a decision model or schedule background work. The tagged setup text still calls publication pending, but the versioned registry record establishes that @openclaw/typesafe 2026.9.6 was published and requires a compatible host/API.

Channel: tagged-release, separate @openclaw/typesafe package. Half: capability. Date: 2026-09-21 merge, 2026-09-23 first stable 2026.9.6.

Operator consequence: Account for a separate plugin package during upgrades. Choose the local or hosted decision endpoint explicitly; a model label alone does not select the endpoint. Enable/select the decision role only when needed. This is a concrete local-serving capability and distribution change, not a measured decision-quality or latency gain.

## Receipt
- https://github.com/openclaw/openclaw/commit/5acfb83d9fe84d5741343d85d5e3d99243bafd39
- https://github.com/openclaw/openclaw/compare/5acfb83d...v2026.9.6
- https://registry.npmjs.org/@openclaw%2ftypesafe/2026.9.6
- https://github.com/openclaw/openclaw/blob/v2026.9.6/docs/plugins/typesafe.md
- https://github.com/openclaw/openclaw/blob/v2026.9.6/CHANGELOG/2026.9.6.md
