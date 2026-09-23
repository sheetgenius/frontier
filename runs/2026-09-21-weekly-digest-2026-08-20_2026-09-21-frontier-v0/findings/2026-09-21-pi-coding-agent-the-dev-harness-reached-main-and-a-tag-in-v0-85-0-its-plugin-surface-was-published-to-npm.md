---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-pi-coding-agent-the-dev-harness-reached-main-and-a-tag-in-v0-85-0-its-plugin-surface-was-published-to-npm
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v0.85.0/packages/agent/docs/plugins.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/releases/tag/v0.85.1
    precision: github_release
---
# 2026-09-21-pi-coding-agent-the-dev-harness-reached-main-and-a-tag-in-v0-85-0-its-plugin-surface-was-published-to-npm

The `dev` harness reached main and a tag in v0.85.0; its plugin surface was published to npm once by accident, then pulled. Carry-forward 1 answered yes, with a caveat the release notes do not advertise. The new harness code is now in every tag from v0.85.0, but v0.85.0's notes do not mention it, and the plugin/facet architecture it carries is still labelled "Design specification for the experimental facet and service architecture" at v0.87.0. The one npm version that shipped it compiled (0.85.0) broke SDK imports; 0.85.1 withdrew it from the package. At v0.87.0 plugins.md says facets are "not a security sandbox: session facets are trusted code in the authoritative process," and names `telemetry(permission(sandbox(coreBash)))` wrapper composition as the intended place for a permission layer.

Channel: tagged-release for the code; the experimental plugin/facet surface is source-only on npm from 0.85.1 on. Half: both. Date: 2026-09-04 (v0.85.0), 2026-09-05 (v0.85.1).

Operator consequence: Do not pin 0.85.0; it is the broken publish. `import "@earendil-works/pi-coding-agent/experimental/plugin"` does not resolve from npm on 0.85.1 through 0.87.0; to try the new harness you build from source at a tag. Extensions still run through the existing extension API. Watch for a release note that names the facet host as supported and ships `dist/experimental/plugin.js`; that, not the ancestry, is when the harness becomes installable.

## Receipt
- https://github.com/earendil-works/pi/blob/v0.85.0/packages/agent/docs/plugins.md
- https://github.com/earendil-works/pi/releases/tag/v0.85.1
