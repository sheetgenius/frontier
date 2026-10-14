---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-channel-fourteen-stables-in-eighteen-days-model-and-daemon-changes-in-patches-sdks-in-lock
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.162.1
    precision: github_release
  - url: https://github.com/openai/codex/releases
    precision: official_docs
  - url: https://www.npmjs.com/package/@openai/codex
    precision: package_registry
  - url: https://pypi.org/project/openai-codex/
    precision: package_registry
  - url: https://github.com/openai/codex/pull/51186
    precision: merged_pr
  - url: https://github.com/openai/codex/pull/49704
    precision: merged_pr
  - url: https://learn.chatgpt.com/docs/changelog
    precision: official_docs
  - url: https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.8
    precision: github_release
  - url: https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.9
    precision: github_release
  - url: https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10
    precision: github_release
  - url: https://pypi.org/pypi/openai-codex/0.159.1/json
    precision: package_registry
  - url: https://pypi.org/pypi/openai-codex/0.160.1/json
    precision: package_registry
  - url: https://github.com/openai/codex/blob/rust-v0.162.1/README.md#L14-L54
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@openai%2fcodex
    precision: official_docs
  - url: https://registry.npmjs.org/@openai%2fcodex-sdk
    precision: official_docs
---
# 2026-10-13-codex-channel-fourteen-stables-in-eighteen-days-model-and-daemon-changes-in-patches-sdks-in-lock

Channel: fourteen stables in eighteen days, model and daemon changes in patches, SDKs in lockstep. Fourteen non-prerelease tags landed between 2026-09-22 and 2026-10-09, with 94 new alpha release objects alongside. The release pipeline now refuses to move GitHub `latest`, npm `latest` and platform dist-tags, the R2 `latest` channel or the installer aliases backward (#51186), and parks out-of-order alpha publishes under `release-<version>-<tag>` dist-tags (#49704). That is the failure the parent observed on 2026-09-23, when npm `alpha` pointed back to 0.155.0-alpha.16.3. At the cutoff, newest stable is rust-v0.162.1, published 2026-10-09T19:44:51Z; npm CLI and TypeScript SDK latest are 0.162.1 and PyPI openai-codex is 0.162.1. The tagged README lists the standalone installer first, with npm and Homebrew alternatives; that ordering already existed at 0.155.1 and is not new this window. The Python SDK ships to PyPI with every CLI stable but without GitHub release objects. Independent text extraction on 2026-10-14 finds all fourteen CLI entries on the official changelog; the original absence claim was an inspection error with no immutable October 13 support. Python publication delays are approximately 3.4 to 12.3 minutes using the earliest artifact upload per version.

Channel: tagged-release; docs-only (changelog). Half: capability. Date: 2026-09-22 to 2026-10-09.

Operator consequence: The default install moved from 0.155.1 to 0.162.1 in eighteen days, and 0.156.1 adds model choices, 0.159.1 changes the default model, and 0.162.1 fixes daemon compatibility; 0.159.3 also adds reminders. Pin the CLI, the Python SDK and the TypeScript SDK to the same version and upgrade on purpose; read each versioned GitHub release body for historical facts. Pinning the CLI does not pin an auto-started background server (section 2).

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.162.1
- https://github.com/openai/codex/releases
- https://www.npmjs.com/package/@openai/codex
- https://pypi.org/project/openai-codex/
- https://github.com/openai/codex/pull/51186
- https://github.com/openai/codex/pull/49704
- https://learn.chatgpt.com/docs/changelog
- https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.8
- https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.9
- https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10
- https://pypi.org/pypi/openai-codex/0.159.1/json
- https://pypi.org/pypi/openai-codex/0.160.1/json
- https://github.com/openai/codex/blob/rust-v0.162.1/README.md#L14-L54
- https://registry.npmjs.org/@openai%2fcodex
- https://registry.npmjs.org/@openai%2fcodex-sdk
