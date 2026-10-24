---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-preview-fixes-env-resolution-order-nightly-preserves-raw-placeholders-during-migration
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/bdc1bd25d8e9551419ba9dc8831a6e0d85d36030
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/a713410aba5d594594e20d5c822e3aab8f822089
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/config/settings.ts
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-preview-fixes-env-resolution-order-nightly-preserves-raw-placeholders-during-migration

Preview fixes .env resolution order; nightly preserves raw placeholders during migration. The regular preview loads eligible `.env` files before the final settings-placeholder expansion, keeping an earlier limited pass for controls needed to decide which environment files can be loaded. The later nightly fix carries raw and expanded settings separately through deprecated-setting migration so `${VAR}` is not replaced in persisted settings by its resolved value. This settles the source-level migration lead from the parent harvest; no credential disclosure or exfiltration was reproduced. Mutable discovery/report link: [issue #29556](https://github.com/google-gemini/gemini-cli/issues/29556), created 2026-09-29 and closed 2026-10-22, is not implementation proof.

Channel: preview-or-beta. Half: both. Date: 2026-10-22.

Operator consequence: Try the preview for settings whose variables come from an eligible `.env`; use the October 23 or later nightly if you specifically need placeholder-preserving migration. Stable 0.65.0 does not contain either fix. Inspect migration diffs and keep secret-bearing files out of version control. Separating configuration text from resolved runtime values removes manual repair but does not prove every settings writer masks secrets.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/bdc1bd25d8e9551419ba9dc8831a6e0d85d36030
- https://github.com/google-gemini/gemini-cli/commit/a713410aba5d594594e20d5c822e3aab8f822089
- https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/config/settings.ts
