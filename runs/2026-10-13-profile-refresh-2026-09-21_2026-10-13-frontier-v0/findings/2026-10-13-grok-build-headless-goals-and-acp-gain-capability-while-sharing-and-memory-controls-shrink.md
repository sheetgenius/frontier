---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-headless-goals-and-acp-gain-capability-while-sharing-and-memory-controls-shrink
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.42.external.md?generation=1790446548796174
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.44.external.md?generation=1790656650477799
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.45.external.md?generation=1790661788238032
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.53.external.md?generation=1791827231375569
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/15-agent-mode.md#L9
    precision: tagged_commit_file
  - url: https://docs.x.ai/build/overview
    precision: official_docs
---
# 2026-10-13-grok-build-headless-goals-and-acp-gain-capability-while-sharing-and-memory-controls-shrink

Headless goals and ACP gain capability while sharing and memory controls shrink. Goal-driven headless runs can now wait for background work to finish, ACP clients can list sessions and MCP credentials can rotate via token files. Per-folder web grants and request forms are documented capability additions, not demonstrations that secrets cannot escape elsewhere. Sharing is removed and memory loses rollout knobs. Interactive tool filters remain ahead of stable.

Channel: tagged-release (1.0.42/1.0.44/1.0.45/1.0.51 changes available by stable 1.0.52); preview-or-beta (interactive tool flags in enterprise/non-stable 1.0.53). Half: capability. Date: 2026-09-26..2026-10-12.

Operator consequence: Adapt scripts that used /share. Set background-wait-timeout for headless goals in CI and review persisted domain grants. Stable 1.0.52 TUI users must use deny rules rather than tools/disallowed-tools. ACP wrappers, including Omnigent, do not replace Grok's permission pipeline. Keep Grok Bot, chat and API-model claims separate from the CLI.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.42.external.md?generation=1790446548796174
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.44.external.md?generation=1790656650477799
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.45.external.md?generation=1790661788238032
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.53.external.md?generation=1791827231375569
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/15-agent-mode.md#L9
- https://docs.x.ai/build/overview
