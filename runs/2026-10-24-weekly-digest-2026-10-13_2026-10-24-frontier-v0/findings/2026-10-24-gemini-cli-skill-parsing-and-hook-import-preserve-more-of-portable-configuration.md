---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-skill-parsing-and-hook-import-preserve-more-of-portable-configuration
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/debf423248af42e5710ccae49380a5031670a94f
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/skills/skillLoader.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/commit/5b36aacf5bf3d044badc881063f7671598c27c9d
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/hooks/migrate.ts
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-skill-parsing-and-hook-import-preserve-more-of-portable-configuration

Skill parsing and hook import preserve more of portable configuration. The preview skill loader reads encoded files through the shared reader, accepts a leading BOM/trailing delimiter whitespace, and improves fallback parsing of quoted, single-line and multiline descriptions without swallowing subsequent keys. The October 24 nightly's Claude hook importer converts positive finite timeout values from seconds to milliseconds, rounds them and caps them at the timer limit instead of copying the number unchanged.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Try the preview when a valid portable skill is silently missed or its description is malformed. Use the latest nightly importer for hook timeout conversion, and inspect already-imported settings separately: this is an import fix, not a proven retroactive migration. These changes reduce format-specific glue while leaving the operator responsible for whether the imported hook's command and authority are appropriate.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/debf423248af42e5710ccae49380a5031670a94f
- https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/skills/skillLoader.ts
- https://github.com/google-gemini/gemini-cli/commit/5b36aacf5bf3d044badc881063f7671598c27c9d
- https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/hooks/migrate.ts
