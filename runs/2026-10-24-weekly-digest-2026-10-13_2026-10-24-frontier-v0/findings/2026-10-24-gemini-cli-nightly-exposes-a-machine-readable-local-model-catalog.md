---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-nightly-exposes-a-machine-readable-local-model-catalog
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/models/list.ts
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-nightly-exposes-a-machine-readable-local-model-catalog

Nightly exposes a machine-readable local model catalog. `gemini models list --output-format json` and `gemini --list-models` expose a catalog derived from local settings/configuration and the shared available-model builder. The command skips extension loading and emits model metadata. Its output-token value is a fixed 8192 in this implementation; the command is not a live entitlement query or a probe of which backend model actually serves a request.

Channel: preview-or-beta. Half: capability. Date: 2026-10-23.

Operator consequence: Adapter authors can consume structured discovery instead of scraping a UI menu or maintaining a separate list. Use the nightly only where that new command is required, and keep catalog identity, requested model and returned model separate in evaluation receipts. The catalog removes discovery glue without settling access, negotiated limits or served-model identity.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005
- https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/models/list.ts
