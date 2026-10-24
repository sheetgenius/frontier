---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-stable-1-0-103-replaces-1-0-97-while-runtime-auto-update-remains-enabled
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.103
    precision: github_release
  - url: https://registry.npmjs.org/@github/copilot/1.0.103
    precision: official_docs
  - url: https://registry.npmjs.org/@github%2fcopilot
    precision: official_docs
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.104-2
    precision: github_release
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L452-L453
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L140-L146
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-stable-1-0-103-replaces-1-0-97-while-runtime-auto-update-remains-enabled

Stable 1.0.103 replaces 1.0.97 while runtime auto-update remains enabled. The install target advances from baseline 1.0.97 to stable 1.0.103, published 22 October. Install with npm install -g @github/copilot@1.0.103. Preview remains 1.0.104-2 at the timed registry read. The documented runtime updater remains enabled by default on the stable channel; COPILOT_AUTO_UPDATE=false is the environment control for an automated version pin. The Install today inventory separately records Homebrew, WinGet, sandbox enablement, preview gates, and the public branch's notes-only advance.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: For reproducible automation, set the runtime update control and record copilot --version in addition to the package installation. Keep preview changes in a separate trial. Package version, plugin updates, hosted model availability, and the binary a host actually launches are separate deployment facts.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.103
- https://registry.npmjs.org/@github/copilot/1.0.103
- https://registry.npmjs.org/@github%2fcopilot
- https://github.com/github/copilot-cli/releases/tag/v1.0.104-2
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L452-L453
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L140-L146
