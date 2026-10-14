---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-the-agent-can-change-omp-settings-including-approval-policy-session-grants-span-keys-but
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L120-L148
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L305-L318
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L399-L461
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/test/internal-urls/cfg-protocol.test.ts#L108-L135
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/commit/548ccb3e9edbeed9e0c543aff98a1fcb28d803c3
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.3.1
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L129-L146
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L168-L174
    precision: tagged_commit_file
---
# 2026-10-13-omp-the-agent-can-change-omp-settings-including-approval-policy-session-grants-span-keys-but

The agent can change OMP settings, including approval policy; session grants span keys but distinguish saving. cfg:// lets the interactive agent read settings with credentials redacted and change registered keys for the session or persist them to global config.yml with /save. An effective change requires cfg approval unless an existing session grant covers it; yolo alone does not supply that grant. A session-only grant covers later session-only changes across keys, but the first /save still asks. A grant on a /save prompt covers subsequent saves as well. No-op session writes return unchanged without asking; environment-shadowed session writes are refused before prompting. Reachable keys include tools.approvalMode, tools.approval, bash.patterns and disabledProviders. Since v18.6.1 writable collab guests can answer the prompt. Task subagents and print, RPC and ACP callers cannot write settings through this handler. The instruction to change settings only when asked is model guidance, not a user-intent check. The production collab relay source and binaries remain unpublished; its stated lack of retention is not independently established here.

Channel: tagged-release. Half: both. Date: 2026-09-25 (v18.3.1); 2026-10-04 (v18.6.1).

Operator consequence: Choose Allow once. Inspect the setting and before/after values, especially approval, provider and collab settings. An Always for this session grant is not confined to the key shown. Sharing a control link delegates the ability to answer settings prompts, including persistence to your global config. ask.timeout controls unattended denial.

## Receipt
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L120-L148
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L305-L318
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L399-L461
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/test/internal-urls/cfg-protocol.test.ts#L108-L135
- https://github.com/can1357/oh-my-pi/commit/548ccb3e9edbeed9e0c543aff98a1fcb28d803c3
- https://github.com/can1357/oh-my-pi/releases/tag/v18.3.1
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L129-L146
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L168-L174
