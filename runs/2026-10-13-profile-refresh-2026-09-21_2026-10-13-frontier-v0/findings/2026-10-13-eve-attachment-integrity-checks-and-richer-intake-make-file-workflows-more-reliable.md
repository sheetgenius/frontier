---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-attachment-integrity-checks-and-richer-intake-make-file-workflows-more-reliable
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/f234b513067f8dc315d4cfc5703174dd7e243fd0
    precision: commit
  - url: https://github.com/vercel/eve/commit/b6b353f1bd0512d0adde137b31406656a123e981
    precision: commit
  - url: https://github.com/vercel/eve/commit/0248e696a5858755ba79fc86c89c3c9f2f9e277e
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.70.3
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.77.0
    precision: github_release
---
# 2026-10-13-eve-attachment-integrity-checks-and-richer-intake-make-file-workflows-more-reliable

Attachment integrity checks and richer intake make file workflows more reliable. Staged attachment bytes are checked against their content address before model use; overwritten bytes degrade to FileNotFound rather than masquerading as the upload. 0.77.0 applies upload policies to final bytes and verified media types across intake paths. Supported public HTTPS links become staged files with public-address checks, a 25 MB cap, 30-second timeout and at most ten links per message, sequentially. read_file can reopen PDFs after compaction up to 20 MiB; output image becomes file, with PDF pages. Unsupported/private/failed links become notes rather than persistent model-call failures.

Channel: tagged-release. Half: both. Date: 2026-10-03 (eve@0.70.3), 2026-10-11 (eve@0.77.0).

Operator consequence: Test document workflows and custom fetchFile/uploadPolicy integrations, including overwritten bytes and disallowed media. Update read_file output consumers and preserve the published download and file-size limits. This is bounded intake, not arbitrary URL fetching or a measured end-to-end recovery result.

## Receipt
- https://github.com/vercel/eve/commit/f234b513067f8dc315d4cfc5703174dd7e243fd0
- https://github.com/vercel/eve/commit/b6b353f1bd0512d0adde137b31406656a123e981
- https://github.com/vercel/eve/commit/0248e696a5858755ba79fc86c89c3c9f2f9e277e
- https://github.com/vercel/eve/releases/tag/eve%400.70.3
- https://github.com/vercel/eve/releases/tag/eve%400.77.0
