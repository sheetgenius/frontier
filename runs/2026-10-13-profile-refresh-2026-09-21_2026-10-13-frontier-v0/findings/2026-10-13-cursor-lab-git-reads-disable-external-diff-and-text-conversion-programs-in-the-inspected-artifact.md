---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-lab-git-reads-disable-external-diff-and-text-conversion-programs-in-the-inspected-artifact
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-13-cursor-lab-git-reads-disable-external-diff-and-text-conversion-programs-in-the-inspected-artifact

Lab git reads disable external diff and text conversion programs in the inspected artifact. The inspected lab wrapper suppresses repository-controlled external diff and text-conversion execution for five git read operations. The recorded default artifact lacks that transformation. This narrows an execution path; it does not establish a fix for the September fsmonitor allegation.

Channel: preview-or-beta relative to the researcher's October 13 morning lab snapshot. Half: defect. Date: 2026-10-12 artifact.

Operator consequence: Verify the wrapper in the actual worker or CLI build before relying on this hardening. This is no all-day default-channel guarantee and no blanket sandbox-safety claim. An advisory or tested reproduction tied to a build is needed to settle the different fsmonitor question.

## Receipt
- https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
