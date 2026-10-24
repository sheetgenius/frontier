---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-plan-restricts-edit-tools-but-retains-host-shell-authority
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/schema/src/agent.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/agent.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/plan.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/shell.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/subagent.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/SECURITY.md
    precision: tagged_commit_file
---
# 2026-10-24-opencode-plan-restricts-edit-tools-but-retains-host-shell-authority

Plan restricts edit tools but retains host shell authority. Base permissions allow all actions, ask for file reads matching `*.env` and `*.env.*`, and allow `*.env.example`. Build adds question access. Plan denies edit actions except its plan files and supplies model instructions, but adds no shell deny. The tagged README still says Plan asks before bash; the implementation and corrected permission docs support allowed shell instead. External-directory access is allowed by default. Shell directory inference is best effort and commands run with the host user's filesystem, process and network authority. The general subagent disallows questions and further subagents, while Explore has a different allowlist; neither name proves a host boundary. A custom subagent gets its own agent permissions: the creation path does not intersect them with the parent session's rules. Default nested subagent depth is one.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Re-audit each agent and its possible children rather than approving a Plan label. Use narrow shell rules where useful, but put secrets, network limits, process limits and filesystem confinement in a separately enforced container/VM or host policy when those boundaries are required. This is a source-established operating model, not a newly reproduced exploit. Fewer prompts can reduce interruptions; they also move judgment to setup and output review. No prompt or worktree substitutes for isolation.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/schema/src/agent.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/agent.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/plan.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/shell.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/subagent.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/SECURITY.md
