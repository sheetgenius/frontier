---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-2-0-adds-bounded-history-reads-pdf-attachments-and-server-timestamps-and-makes-readsubmi
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.0
    precision: github_release
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L30-L42
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/sdk/src/public/reply.ts#L51-L54
    precision: tagged_commit_file
---
# 2026-10-13-flue-2-2-0-adds-bounded-history-reads-pdf-attachments-and-server-timestamps-and-makes-readsubmi

2.2.0 adds bounded history reads, PDF attachments and server timestamps, and makes `readSubmissionReply()` require settlements. 2.2.0 adds bounded SDK history reads with generation-bound cursors and 410 after reset, native PDF attachments on supported model APIs with placeholders elsewhere, and server-authored timestamps on messages and settlements. It also makes settlements mandatory for readSubmissionReply(), a breaking TypeScript change. Unbounded reads remain available and @flue/react still observes the whole conversation.

Channel: tagged-release. Half: both. Date: 2026-09-28.

Operator consequence: Chat UIs with long transcripts should move to the bounded reads and handle the 410 by re-basing; `@flue/react` still observes the whole conversation. Before relying on PDFs, check that your provider is on the native list, because elsewhere the model gets only a placeholder. In audit trails, use the server timestamp rather than client time. Fix `readSubmissionReply()` call sites that pass only `messages`.

## Receipt
- https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.0
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L30-L42
- https://github.com/withastro/flue/blob/v2.3.0/packages/sdk/src/public/reply.ts#L51-L54
