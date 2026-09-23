---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-1-0-85-session-scoped-sandbox-bypass-for-users-when-policy-allows
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L139
    precision: tagged_commit_file
---
# 2026-09-21-github-copilot-cli-1-0-85-session-scoped-sandbox-bypass-for-users-when-policy-allows

1.0.85: session-scoped sandbox bypass for users when policy allows. `/sandbox disable` turns the sandbox off for the current session when the organization's policy allows bypass (L139), and a managed sandbox session can be disabled for the rest of the session from an approved bypass prompt (L51). Approved retries are labeled "sandbox relaxed" (network policy still enforced) or "sandbox bypassed" (fully unsandboxed) (L80). The managed startup notice now names `/sandbox disable` instead of claiming sandboxing cannot be turned off (L91).

Channel: tagged-release. Half: capability. Date: 2026-09-16.

Operator consequence: This settles one contract question in the vendor's words: the admin's `sandbox.allowBypass` decides whether a local user can turn off an org-managed sandbox; the user decides only within that. If you manage policy, decide `allowBypass` explicitly now, because a single approved prompt disables the sandbox for the whole session, not one command. Not probed locally.

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L139
