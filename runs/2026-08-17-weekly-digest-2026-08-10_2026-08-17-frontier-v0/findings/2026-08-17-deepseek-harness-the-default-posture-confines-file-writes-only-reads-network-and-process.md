---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-the-default-posture-confines-file-writes-only-reads-network-and-process
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/apps/cli/reference/README.md
    precision: official_docs
---
# 2026-08-17-deepseek-harness-the-default-posture-confines-file-writes-only-reads-network-and-process

The default posture confines file writes only  --  reads, network and process visibility are unconfined by design.

Worth stating plainly because the landing page's phrasing invites the opposite reading. apps/cli/reference/README.md at the tag: "New sessions default to the `workspace-write` permission preset. Bash and filesystem mutations are restricted to the session workspace and platform temporary roots; reads, network access, and process visibility are not confined." docs/subsystems/sandbox.md agrees at the vocabulary level  --  `SandboxMode` "governs filesystem effects only... Network and process visibility are outside this vocabulary"  --  and adds that enforcement completeness is a reported fact, not a guarantee: `partial` means "an active backend or older kernel ABI cannot govern every promised file effect," with older Landlock ABIs and the Windows ACL runner's Everyone and hard-link boundaries named as current partial cases. The backends are Linux bwrap/Landlock, macOS Seatbelt, and a Windows ACL restricted-token runner.

Channel: preview-or-beta. Ancestry: Both documents are read at 99f6f02, the sole tag, flagged prerelease by the GitHub release API. There is no stable tag to compare against.

Operator consequence: Calibrate, and do not describe this to your security team as a sandbox. The default preset stops the agent writing outside your workspace; it does not stop it reading your SSH keys, your cloud credential files or your browser profile, and it does not stop it making network calls with what it read. On Windows, or on a Linux kernel with an older Landlock ABI, even the write confinement can report `partial`. If the threat you care about is exfiltration rather than accidental writes, the boundary has to be a container, a VM or a separate machine.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/apps/cli/reference/README.md
