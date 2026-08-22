---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-gemini-cli-git-env-hardening-is-preview-not-0-56-0
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.57.0-preview.0/packages/core/src/utils/gitUtils.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/pull/28792
    precision: github_pr
---
# 2026-08-20-gemini-cli-git-env-hardening-is-preview-not-0-56-0

Parent recorded git subprocess env neutralization as main-unreleased after v0.55.1. It did not ride the v0.56.0 promotion. gitUtils.ts at v0.56.0 (85 lines) has no getSafeGitEnv. At v0.57.0-preview.0 it exports getSafeGitEnv and pins GIT_CONFIG_GLOBAL plus credential.helper. compare v0.57.0-preview.0...c0d192452 status=behind, ahead_by=0. compare v0.56.0...c0d192452 status=diverged.

Channel: preview-or-beta. Half: both | security-relevant.

Operator consequence: on latest, a workspace .git/config can still set core.pager / core.hooksPath for agent git. If you need the guard before the next real stable, the runnable channel is preview. Re-test gemini extensions install against private repos because credential.helper is blanked.

## Receipt
- https://github.com/google-gemini/gemini-cli/blob/v0.57.0-preview.0/packages/core/src/utils/gitUtils.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.56.0/packages/core/src/utils/gitUtils.ts
- https://github.com/google-gemini/gemini-cli/pull/28792
