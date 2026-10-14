---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-ralph-is-disabled-headless-resume-and-model-declared-tool-changes-reach
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/base/cordis.patch.yml#L440-L449
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/src/startup.ts#L43-L44
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/bundle/headless/src/startup.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/interaction/tool-ask-user/README.md#L30-L44
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/subsystems/web.md#L129-L131
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-ralph-is-disabled-headless-resume-and-model-declared-tool-changes-reach

Ralph is disabled; headless resume and model-declared tool changes reach rc. Ralph remains implemented but is disabled; the documented distinction is that completion is the worker's self-report, not independent evaluation. Headless NDJSON/resume and the previously alpha-only remote-work capabilities now have rc support. Cache-preserving dynamic tool changes depend on the model/API declaring support and a compatible adapter, not common lab ownership. Alpha.2 also documents these capabilities on pi-ai routes.

Channel: preview-or-beta. Half: capability. Date: 2026-09-23 through 2026-09-29.

Operator consequence: Use headless --json on the current rc, correcting the old recommendation at 0.1.5-rc.2. If re-enabling Ralph, add an independent completion check. Timed questions allow independent work to continue but do not grant approval. Review the separate loss of the background-wake cap in section 19.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/base/cordis.patch.yml#L440-L449
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/src/startup.ts#L43-L44
- https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/bundle/headless/src/startup.ts
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/interaction/tool-ask-user/README.md#L30-L44
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/subsystems/web.md#L129-L131
