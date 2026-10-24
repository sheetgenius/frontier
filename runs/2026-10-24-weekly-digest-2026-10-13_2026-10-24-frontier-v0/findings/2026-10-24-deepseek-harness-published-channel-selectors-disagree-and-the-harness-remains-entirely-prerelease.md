---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-published-channel-selectors-disagree-and-the-harness-remains-entirely-prerelease
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://api.github.com/repos/deepseek-ai/deepseek-harness/releases?per_page=100
    precision: official_docs
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh
    precision: official_docs
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.1-rc.2
    precision: official_docs
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.1-rc.3
    precision: official_docs
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3
    precision: github_release
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh-sdk-client
    precision: official_docs
  - url: https://pypi.org/pypi/deepseek-harness-sdk/0.2.1rc2/json
    precision: package_registry
  - url: https://download.deepseek.com/dsh-desk/feeds/mac-arm64/nightly-mac.yml
    precision: official_docs
  - url: https://download.deepseek.com/dsh-desk/feeds/mac-x64/nightly-mac.yml
    precision: official_docs
  - url: https://download.deepseek.com/dsh-desk/feeds/win-x64/nightly.yml
    precision: official_docs
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/README.md
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-published-channel-selectors-disagree-and-the-harness-remains-entirely-prerelease

Published channel selectors disagree and the harness remains entirely prerelease. At 2026-10-24T10:33:49Z CLI npm selectors remain `latest=0.2.1-rc.2`, `next=0.2.1-rc.3`, `alpha=0.2.1-alpha.5`; all 37 versions are prereleases. At 10:34:37Z all 32 GitHub release objects remain prereleases, newest rc.3 published 2026-10-23T15:26:39Z. The independent 10:13:13Z to 10:13:16Z Desktop feed reads give rc.3 for ARM and Windows Nightly but rc.1 for Intel; stable aliases return 404. Python remains 0.2.1rc2 at the 10:13:16Z metadata read. The SDK client's `latest` remains 0.0.1-rc.1 at 10:17:11Z to 10:17:13Z; match its explicit version to the selected runtime. CLI manifests retain ranged vendor dependencies. No stable harness exists, and independently stable DeepSeek Cordis packages do not change that.

Channel: preview-or-beta. Half: both. Date: 2026-10-24.

Operator consequence: For a disposable default-channel trial select `@deepseek-ai/dsh@0.2.1-rc.2` explicitly, resolve and inspect its dependency lock before running `dsh web`; use `npx @deepseek-ai/dsh@0.2.1-rc.3 web` only when deliberately selecting the newer preview. Match SDK versions explicitly and inspect the actual Desktop platform feed before relying on rc.2 or rc.3 features. These commands were not executed. A version pin alone does not freeze the complete install graph or establish production suitability.

## Receipt
- https://api.github.com/repos/deepseek-ai/deepseek-harness/releases?per_page=100
- https://registry.npmjs.org/@deepseek-ai%2Fdsh
- https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.1-rc.2
- https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.1-rc.3
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3
- https://registry.npmjs.org/@deepseek-ai%2Fdsh-sdk-client
- https://pypi.org/pypi/deepseek-harness-sdk/0.2.1rc2/json
- https://download.deepseek.com/dsh-desk/feeds/mac-arm64/nightly-mac.yml
- https://download.deepseek.com/dsh-desk/feeds/mac-x64/nightly-mac.yml
- https://download.deepseek.com/dsh-desk/feeds/win-x64/nightly.yml
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/README.md
