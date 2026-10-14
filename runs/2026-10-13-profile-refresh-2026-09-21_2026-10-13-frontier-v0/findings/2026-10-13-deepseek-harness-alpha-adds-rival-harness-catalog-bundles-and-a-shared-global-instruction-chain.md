---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-alpha-adds-rival-harness-catalog-bundles-and-a-shared-global-instruction-chain
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L30-L40
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/subagent/subagent-codex/src/run.ts#L69
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/subagent/subagent-claude-code/src/run.ts#L56
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/user/guide/providers.md
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-alpha-adds-rival-harness-catalog-bundles-and-a-shared-global-instruction-chain

Alpha adds rival-harness catalog bundles and a shared global instruction chain. Alpha makes Claude Code and Codex delegation a catalog install; the wrappers already exist on rc and default to unattended approval modes. Those defaults do not imply every operation succeeds or all user communication is suppressed. Base-backed profiles with the instruction plugin and a filesystem provider load eligible global files on the first request, subject to the byte budget and deduplication. The chain includes DSH_HOME/AGENTS.md and DSH_AGENTS_HOME/AGENTS.md (default ~/.agents), followed by project instructions. Mods remains a compatibility experiment, not a promise.

Channel: preview-or-beta; new catalog/global behavior alpha-only. Half: both. Date: 2026-10-03 (Mods experiment); 2026-10-09 (catalog and shared instructions).

Operator consequence: Inspect each wrapper's permissionMode, audit eligible shared instruction files, and use process DSH_HOME/DSH_AGENTS_HOME to select homes; stray row keys are ignored. Do not confuse the new catalog convenience with a new approval boundary or stable rival-harness integration.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L30-L40
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/subagent/subagent-codex/src/run.ts#L69
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/subagent/subagent-claude-code/src/run.ts#L56
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/user/guide/providers.md
