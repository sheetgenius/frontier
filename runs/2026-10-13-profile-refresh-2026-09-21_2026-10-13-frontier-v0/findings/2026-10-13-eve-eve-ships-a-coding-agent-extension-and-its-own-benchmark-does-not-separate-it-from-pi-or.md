---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-eve-ships-a-coding-agent-extension-and-its-own-benchmark-does-not-separate-it-from-pi-or
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/docs/code-extension.mdx
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/apps/docs/lib/evals/eve-code-benchmark.json
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/docs/code-extension.mdx?plain=1#L6-L27
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/releases/tag/eve%400.66.0
    precision: github_release
---
# 2026-10-13-eve-eve-ships-a-coding-agent-extension-and-its-own-benchmark-does-not-separate-it-from-pi-or

eve ships a coding-agent extension, and its own benchmark does not separate it from Pi or opencode. Mounting `eve/extensions/code` turns an eve agent into a coding agent: `apply_patch`, `grep`, coding skills, a read-only worker subagent and sandbox bootstrap helpers, with GitHub and pull-request work in the companion `eve/extensions/git` and computer use in its own `eve/computer-use` extension. The docs publish a benchmark against opencode and Pi with the method stated. It measures Eve source 4d1491477a2e4f220131a3eb857a030c9eec0419, not eventual release 0.79.0, and was not reproduced here. On the vendor's numbers, Pi resolved the most attempts, and all three 95% intervals overlap, which by the vendor's stated rule does not establish a difference; that does not demonstrate equivalence.

Channel: tagged-release. Half: capability. Date: 2026-09-23 (eve@0.66.0), 2026-09-28 (eve@0.68.0), 2026-10-09 (eve@0.76.0).

Operator consequence: If you already run agents on eve, try the code extension for repository work inside the same durable, approval-gated runtime. Do not switch from Pi or opencode on these numbers: 36 attempts per harness on one model cannot separate them, and the vendor says so. Lens: a framework vendor now ships and benchmarks its own coding harness, so the framework-versus-coding-agent line on the watchlist is blurring.

## Receipt
- https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json
- https://github.com/vercel/eve/blob/eve%400.79.0/docs/code-extension.mdx
- https://github.com/vercel/eve/blob/eve%400.78.0/apps/docs/lib/evals/eve-code-benchmark.json
- https://github.com/vercel/eve/blob/eve%400.78.0/docs/code-extension.mdx?plain=1#L6-L27
- https://github.com/vercel/eve/releases/tag/eve%400.66.0
