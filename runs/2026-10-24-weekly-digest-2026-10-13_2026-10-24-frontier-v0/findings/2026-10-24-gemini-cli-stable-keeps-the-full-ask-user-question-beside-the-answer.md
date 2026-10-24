---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-stable-keeps-the-full-ask-user-question-beside-the-answer
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/53a625646ba7f17063e4c33de3a30102bece1876
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/tools/ask-user.ts#L212-L235
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/ask-user.ts#L215-L246
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0
    precision: github_release
---
# 2026-10-24-gemini-cli-stable-keeps-the-full-ask-user-question-beside-the-answer

Stable keeps the full ask_user question beside the answer. The generated ask_user result display now retains the full question text beside its answer, including multiline formatting, rather than only a short header/category. The source explains that the dialog's description disappears after closing. This changes the result display; it does not establish a new persistent consent mechanism or authorization policy.

Channel: tagged-release. Half: capability. Date: 2026-10-20.

Operator consequence: Use stable 0.65.0 for post-dialog review and preserve the question together with the answer in transcript/UI readers. A reviewer can inspect what was actually asked instead of reconstructing it from a short label. Audit integrations should keep this context while continuing to distinguish an answer from a grant of authority.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/53a625646ba7f17063e4c33de3a30102bece1876
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/tools/ask-user.ts#L212-L235
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/ask-user.ts#L215-L246
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0
