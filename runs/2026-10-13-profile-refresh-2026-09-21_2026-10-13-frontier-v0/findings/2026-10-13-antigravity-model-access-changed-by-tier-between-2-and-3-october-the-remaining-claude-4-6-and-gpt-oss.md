---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-model-access-changed-by-tier-between-2-and-3-october-the-remaining-claude-4-6-and-gpt-oss
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261002022157/https://www.antigravity.google/docs/models/
    precision: official_docs
  - url: https://web.archive.org/web/20261003070147/https://antigravity.google/docs/models
    precision: official_docs
  - url: https://web.archive.org/web/20261007130653id_/https://antigravity.google/docs/models.md
    precision: official_docs
  - url: https://antigravity.google/docs/models.md
    precision: official_docs
  - url: https://web.archive.org/web/20261010095514/https://antigravity.google/docs/enterprise/?hl=de
    precision: official_docs
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.17/CHANGELOG.md?plain=1#L9
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L12
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md
    precision: official_docs
---
# 2026-10-13-antigravity-model-access-changed-by-tier-between-2-and-3-october-the-remaining-claude-4-6-and-gpt-oss

Model access changed by tier between 2 and 3 October; the remaining Claude 4.6 and GPT-OSS-120b retire on 2026-11-02. Between 2 and 3 October the models page added Claude Sonnet 5.5 and Opus 5.5 for non-trial Google AI Pro and Ultra, removed Ultra access to Sonnet 4.6 and Opus 4.6, and scheduled the remaining 4.6 models and GPT-OSS-120b for removal on 2 November 2026. Free and Google AI Plus have no 5.5 access; after the scheduled removals their listed reasoning-model choices are Gemini only. Enterprise never had 4.6 or GPT-OSS access in the checked captures and gained administrator-enabled 5.5 separately (section 13). Model lifecycle is outside the CLI changelog; announcement cards are a service-notice channel, not evidence that a particular CLI run can select a model. The headless docs say an unknown model exits non-zero with an ERROR status rather than falling back.

Channel: docs-only; service catalog and entitlements, not a CLI release. Half: both. Date: 2026-10-02..2026-10-03 (models-page change); Enterprise access added 2026-10-09..2026-10-10; posture retrieved 2026-10-13.

Operator consequence: Ultra users with 4.6 pins need a replacement already, not on 2 November. For remaining eligible tiers, replace 4.6 and GPT-OSS pins before 2 November and test under the actual account: Free and AI Plus must move to Gemini among the listed choices, while non-trial Pro and Ultra can consider Claude 5.5. Enterprise administrators must enable partner models and accept token billing. The documented CLI replacements are `claude-opus-5-5-<level>` and `claude-sonnet-5-5-<level>` with low, medium (default), high or max; `--effort` needs 1.2.11 or later. Keep `agy models` as the account-specific check. A fixed CLI binary does not pin the service catalog.

## Receipt
- https://web.archive.org/web/20261002022157/https://www.antigravity.google/docs/models/
- https://web.archive.org/web/20261003070147/https://antigravity.google/docs/models
- https://web.archive.org/web/20261007130653id_/https://antigravity.google/docs/models.md
- https://antigravity.google/docs/models.md
- https://web.archive.org/web/20261010095514/https://antigravity.google/docs/enterprise/?hl=de
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.17/CHANGELOG.md?plain=1#L9
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L12
- https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md
