---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-repository-scoped-git-ssh-brokering-is-on-main-only-at-window-close
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/commit/6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306/docs/AGENT_YAML_SPEC.md#L517-L561
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-repository-scoped-git-ssh-brokering-is-on-main-only-at-window-close

Repository-scoped Git SSH brokering is on main only at window close. The new sandbox.git_ssh grant keeps an SSH key in the trusted parent, which validates the host, repository and fetch/push operation. The sandbox receives a transport helper and scoped Unix socket, rather than direct key access or arbitrary SSH. Linux bubblewrap and macOS Seatbelt helper/terminal paths are supported; other backends reject the setting. It landed later on October 13 and is not in stable 0.18.0 or that day's nightly.

Channel: main-unreleased. Half: capability. Date: 2026-10-13T16:27:42Z merged.

Operator consequence: Track the first containing release before relying on this grant in a stable fleet. It could replace handing an agent a deploy key or general SSH access. Review exact repo/operation grants and keep key and known-host files outside sandbox paths; no claim of measured security or reliability follows from static source review.

## Receipt
- https://github.com/omnigent-ai/omnigent/commit/6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306
- https://github.com/omnigent-ai/omnigent/blob/6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306/docs/AGENT_YAML_SPEC.md#L517-L561
