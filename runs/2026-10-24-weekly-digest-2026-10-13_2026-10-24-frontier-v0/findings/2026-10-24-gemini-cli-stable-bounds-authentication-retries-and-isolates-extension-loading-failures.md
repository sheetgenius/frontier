---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-stable-bounds-authentication-retries-and-isolates-extension-loading-failures
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/44d764ee579610bf73c43107f5e0422cd92588b9
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/e5e1d3d0514e5e579c5f2406928e801aef9efcc6
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/51617c1bcbcb038291125b092501b4342f4e7f77
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extension-manager.ts
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-stable-bounds-authentication-retries-and-isolates-extension-loading-failures

Stable bounds authentication retries and isolates extension loading failures. Stable bounds verification retry attempts, preserves the retry count across credential refresh and clears cached Google credentials on the relevant authentication change. Loading extensions now warns and skips an invalid allowlist pattern, missing install metadata or a disallowed installed extension instead of preventing unrelated extensions from loading. Installation-time allowlist validation remains strict; this is not permission to install outside the allowlist.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: On 0.65.0, investigate the named authentication or extension failure instead of assuming all integrations failed. Successful loading of other extensions no longer proves that every configured extension loaded, so deployment checks should inspect the warnings and effective extension list. The improvement reduces repeated login prompts and global startup failure, while retaining an operator decision about the failed component.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/44d764ee579610bf73c43107f5e0422cd92588b9
- https://github.com/google-gemini/gemini-cli/commit/e5e1d3d0514e5e579c5f2406928e801aef9efcc6
- https://github.com/google-gemini/gemini-cli/commit/51617c1bcbcb038291125b092501b4342f4e7f77
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extension-manager.ts
