---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-preview-restores-user-git-configuration-while-disabling-interactive-credential-prompts
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/5534eeac330570eb2d0e71846eb42a8bef346a41
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/a2426f78653c8a3848fb2173d76b9dbf5b8e4fe2
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/services/shellExecutionService.ts
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-preview-restores-user-git-configuration-while-disabling-interactive-credential-prompts

Preview restores user Git configuration while disabling interactive credential prompts. The hardened shell/Git environment no longer forces global Git configuration to the null device; a nonempty explicit global-config path is retained and otherwise normal user configuration can apply. System configuration remains disabled and selected sensitive settings remain overridden. The Git helper disables terminal credential prompting, SSH askpass and interactive credential-manager prompts, with SSH BatchMode on its helper path.

Channel: preview-or-beta. Half: both. Date: 2026-10-20.

Operator consequence: Test 0.66.0-preview.0 if agent Git operations depend on user identity, URL rewrites or other legitimate global configuration. Recheck effective Git settings and pre-provision authentication: restoring configuration can remove repeated setup work, while noninteractive authentication converts an unattended prompt into a failure. Do not infer that all hooks or credential helpers are restored, or that every shell-launched SSH command gets the helper's exact environment.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/5534eeac330570eb2d0e71846eb42a8bef346a41
- https://github.com/google-gemini/gemini-cli/commit/a2426f78653c8a3848fb2173d76b9dbf5b8e4fe2
- https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/services/shellExecutionService.ts
