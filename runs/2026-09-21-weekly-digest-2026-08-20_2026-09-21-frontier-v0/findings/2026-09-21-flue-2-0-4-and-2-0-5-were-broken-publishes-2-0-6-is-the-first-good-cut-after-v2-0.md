---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-flue-2-0-4-and-2-0-5-were-broken-publishes-2-0-6-is-the-first-good-cut-after-v2-0
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/v2.0.6/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-flue-2-0-4-and-2-0-5-were-broken-publishes-2-0-6-is-the-first-good-cut-after-v2-0

2.0.4 and 2.0.5 were broken publishes; 2.0.6 is the first good cut after v2.0.3. Three patch cuts in five days, two of them fixing the
packaging of the one before.

Channel: tagged-release. Half: defect. Date: 2026-09-09 to 2026-09-14.

Operator consequence: Do not pin 2.0.4 (uninstallable outside the
workspace) or 2.0.5 (docs missing). Skip straight to 2.1.0. The episode is
itself the likely cause of finding 1: the maintainers moved to changesets the
day after v2.0.6.

## Receipt
- https://github.com/withastro/flue/blob/v2.0.6/CHANGELOG.md
