---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-unsandboxed-permission-rules-are-deprecated-in-favor-of-command-rules
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.2/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-antigravity-unsandboxed-permission-rules-are-deprecated-in-favor-of-command-rules

`unsandboxed` permission rules are deprecated in favor of `command` rules. The rule kind that let a command escape the sandbox is on its way out, and the deprecation arrived without its own changelog entry.

Channel: tagged-release. Half: both. Date: 2026-09-12.

Operator consequence: Grep CLI, shared and project configs for `unsandboxed` and migrate to `command` rules now; the notes give no removal version. Treat a project-level config carrying `unsandboxed` rules as a finding in review.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.2/CHANGELOG.md
