---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-approvals-got-finer-and-assisted-permissions-the-llm-approval-judge-got-an-admin-off-switc
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L29
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L11
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L99
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L773
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-approvals-got-finer-and-assisted-permissions-the-llm-approval-judge-got-an-admin-off-switc

Approvals got finer, and Assisted Permissions (the LLM approval judge) got an admin off-switch and a decision trail. The docs describe the assisted mode as attaching "an LLM safety recommendation so the CLI can auto-approve requests the model evaluates as acceptable" (L773). It changed in four steps this window. In 1.0.90, auto-approval started to account for messages typed while the agent works (L107). In 1.0.91, "complete, statically analyzable read-only shell pipelines can now enter execution-evidence review", while incomplete or unbound pipelines need explicit approval (L99). In 1.0.94, the judge receives the visible shell code instead of forcing manual approval (L25), and "Managed policy can disable Assisted Permissions and keep sessions in Manual Approval mode" (L29). In 1.0.96, the timeline shows "whether you, Assisted Permissions, policy, or unattended fallback made each permission decision" (L11). Path approvals also narrowed. In 1.0.88, approvals for missing paths are remembered "without granting their parent directory" (L162), which reads as a fix for an over-grant. 1.0.90 adds session-scoped read-only directory approvals (L105). The docs name neither the managed key that disables the judge nor what "unattended fallback" decides.

Channel: tagged-release. Half: both. Date: 2026-09-22 to 2026-10-12.

Operator consequence: Managed policy can require Manual Approval instead of Assisted Permissions from 1.0.94. On 1.0.96 or later, sample the timeline attribution to see which decisions came from you, the judge, policy or unattended fallback. The attention trade moves from deciding every request to checking model decisions and exceptions. No judge or enforcement behavior was tested. Watch for documentation naming the managed key and defining unattended fallback; the earlier allow-auto-only setting was not proven to be the only administrative lever.

## Receipt
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L29
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L11
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L99
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L773
