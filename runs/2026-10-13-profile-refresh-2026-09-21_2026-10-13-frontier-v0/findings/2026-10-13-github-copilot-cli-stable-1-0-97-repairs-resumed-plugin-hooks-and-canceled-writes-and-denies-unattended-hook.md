---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-stable-1-0-97-repairs-resumed-plugin-hooks-and-canceled-writes-and-denies-unattended-hook
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.97
    precision: github_release
  - url: https://github.com/github/copilot-cli/blob/76c3172eb38f/changelog.md?plain=1#L3-L27
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-stable-1-0-97-repairs-resumed-plugin-hooks-and-canceled-writes-and-denies-unattended-hook

Stable 1.0.97 repairs resumed plugin hooks and canceled writes, and denies unattended hook ask decisions. The stable release repairs resumed sessions rebuilding hooks from the wrong plugin list: repository-local marketplace hooks remain available, while hooks from configuration-disabled plugins no longer return. Suspended-session resume reports interrupted tool calls and avoids replaying canceled writes. Autopilot denies a preToolUse hook's ask decision instead of opening an unattended dialog. An invalid config.json entry no longer resets trusted folders, sign-ins and other saved state. The release also adds agent-scoped declarative hooks and discovers custom agents beyond the prior 100-agent or deep-nesting limits. The repair notes establish prior behavior but not the earliest affected versions.

Channel: tagged-release. Half: both. Date: 2026-10-13.

Operator consequence: Upgrade to stable 1.0.97 before relying on resumed sessions with disabled plugins or canceled tool writes. Check the hook list and interrupted-call handling on an existing session. There is no need to select a preview to receive these repairs at the cutoff. Audit custom hooks that return ask under Autopilot: the documented result is denial, not a request left waiting for a person.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.97
- https://github.com/github/copilot-cli/blob/76c3172eb38f/changelog.md?plain=1#L3-L27
