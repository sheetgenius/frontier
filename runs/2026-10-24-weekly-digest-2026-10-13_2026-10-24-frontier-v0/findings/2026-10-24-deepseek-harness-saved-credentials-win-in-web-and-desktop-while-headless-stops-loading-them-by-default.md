---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-saved-credentials-win-in-web-and-desktop-while-headless-stops-loading-them-by-default
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/credentials/credentials/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/headless/cordis.patch.yml
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/5249d9a4ceeb9824b1713f7520a0fe094d6f89da
    precision: commit
---
# 2026-10-24-deepseek-harness-saved-credentials-win-in-web-and-desktop-while-headless-stops-loading-them-by-default

Saved credentials win in Web and Desktop, while headless stops loading them by default. With the saved provider mounted, credential resolution uses saved values before the launch environment, then project `.env`, then home `.env`. The launch environment is captured at process start. The shipped headless composition disables the saved-credential provider and resolves environment and `.env` sources instead. This changes which account or key pays for a run without changing the visible prompt.

Channel: preview-or-beta. Half: both. Date: 2026-10-14.

Operator consequence: Audit key provenance when upgrading a desktop trial or moving it into automation. Do not assume exporting a new key overrides a saved Web key, or that a previously signed-in desktop supplies headless credentials. Explicit credential configuration removes an interactive dependency for automation but makes provenance and cost attribution the operator's responsibility.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/credentials/credentials/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/headless/cordis.patch.yml
- https://github.com/deepseek-ai/deepseek-harness/commit/5249d9a4ceeb9824b1713f7520a0fe094d6f89da
