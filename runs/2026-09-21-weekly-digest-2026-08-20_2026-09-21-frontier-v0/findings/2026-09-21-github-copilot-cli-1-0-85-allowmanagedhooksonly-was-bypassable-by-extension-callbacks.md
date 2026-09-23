---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-1-0-85-allowmanagedhooksonly-was-bypassable-by-extension-callbacks
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L127
    precision: tagged_commit_file
---
# 2026-09-21-github-copilot-cli-1-0-85-allowmanagedhooksonly-was-bypassable-by-extension-callbacks

1.0.85: allowManagedHooksOnly was bypassable by extension callbacks. The `allowManagedHooksOnly` policy now also blocks extension-registered `preToolUse`, `postToolUse` and `postToolUseFailure` callbacks, which "previously bypassed the managed-only lockdown." Same release: configured hooks now keep running after an extension restart instead of silently stopping and later denying every tool call (L126); managed Edit and Write rules now apply to recognized shell redirections and in-place `sed` (L135); an MDM or managed-settings sandbox policy no longer discards `sandbox.allowBypass` (L90).

Channel: tagged-release. Half: defect. Date: 2026-09-16.

Operator consequence: Enterprise admins who rely on managed-only hooks as a control should treat every version before 1.0.85 as not enforcing it against extensions, and require 1.0.85+ fleet-wide. The Edit/Write-via-redirection change means a deny rule on writes to a path now also catches `echo > path` and `sed -i`; expect new prompts in scripts that wrote that way.

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L127
