---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-v0-64-0-stable-and-v0-65-0-preview-ship-before-the-window-closes
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
    precision: github_release
  - url: https://registry.npmjs.org/@google%2fgemini-cli
    precision: official_docs
  - url: https://www.npmjs.com/package/@google/gemini-cli/v/0.64.0
    precision: package_registry
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/package.json
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/LICENSE
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/cli/auto-memory.md#L15-L58
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2225-L2232
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2340-L2348
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/42c51822084ac25cd5d97ac0023822c5235f88c8/.github/workflows/release-promote.yml#L3-L7
    precision: tagged_commit_file
---
# 2026-10-13-gemini-cli-v0-64-0-stable-and-v0-65-0-preview-ship-before-the-window-closes

v0.64.0 stable and v0.65.0 preview ship before the window closes. The 08:55Z channel snapshot was overtaken by v0.65.0-preview.0 at 20:27:55Z and v0.64.0 stable at 20:44:46Z on GitHub; npm followed at 20:31:28.212Z and 20:48:24.183Z. The window has four stables and six non-nightly previews. The install target is @google/gemini-cli@0.64.0, with Node >=20 and Apache-2.0 licensing unchanged. The last in-window nightly is 0.65.0-nightly.20261013.g51617c1bc; the October 14 registry nightly is outside the window. Auto Memory remains off with reviewable candidates, dynamic-model configuration remains false and enableAgents true. Manual promotion and the 67-minute v0.61.0 preview.1 interval make a fixed week of preview exposure an unsafe release assumption.

Channel: tagged-release. Half: capability. Date: 2026-10-13.

Operator consequence: Pin `npm install -g @google/gemini-cli@0.64.0` for stable adoption as of the profile date; use exact 0.65.0-preview.0 only for its additional repairs and test them explicitly. Do not present the old preview-only taint/OAuth/session/ACP changes as absent from stable, or the MCP-add repair as already stable. Keep registry retrieval date separate from package publication date.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
- https://registry.npmjs.org/@google%2fgemini-cli
- https://www.npmjs.com/package/@google/gemini-cli/v/0.64.0
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/package.json
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/LICENSE
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/cli/auto-memory.md#L15-L58
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2225-L2232
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2340-L2348
- https://github.com/google-gemini/gemini-cli/blob/42c51822084ac25cd5d97ac0023822c5235f88c8/.github/workflows/release-promote.yml#L3-L7
