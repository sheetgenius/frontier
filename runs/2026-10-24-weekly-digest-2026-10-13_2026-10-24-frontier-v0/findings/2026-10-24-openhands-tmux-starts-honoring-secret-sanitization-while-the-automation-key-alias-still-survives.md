---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-tmux-starts-honoring-secret-sanitization-while-the-automation-key-alias-still-survives
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/ec6655cc181db85c9583d0c42956f6bb5e34687d
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/e3a26821f8f7c85e98078c7b5e1a80647fc7d0c7
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569
    precision: tagged_commit_file
---
# 2026-10-24-openhands-tmux-starts-honoring-secret-sanitization-while-the-automation-key-alias-still-survives

Tmux starts honoring secret sanitization, while the automation-key alias still survives. Passing a reduced environment to libtmux did not delete inherited variables. The fix explicitly removes inherited keys absent from the sanitized environment when preparing tmux. The SDK also releases earlier work keeping provider credentials out of completion logs. These are material repairs, but the sanitizer still does not remove `OPENHANDS_AUTOMATION_API_KEY`; Canvas deliberately exports that alias with the stack session key. The authenticated saved-secret-value route still has no profile check. Separately, setting only `LOCAL_BACKEND_API_KEY` in the Docker entrypoint still skips the block exporting `OH_SESSION_API_KEYS_0`; the [server dependency](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/dependencies.py) only demands a key when its configured key list is nonempty.

Channel: tagged-release. Half: defect. Date: 2026-10-15 (completion-log repair); 2026-10-22 (SDK v1.58.0).

Operator consequence: Upgrade for the real tmux repair, but do not retire the default-local-runtime credential warning or the Docker configuration warning. The code still implies an alias-mediated route from terminal access to saved secrets outside the profile; no exploit was executed here. Configure both Docker key variables consistently and require an unauthenticated protected-route rejection before exposure. Human review of a profile cannot substitute for testing the process credential boundary.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/ec6655cc181db85c9583d0c42956f6bb5e34687d
- https://github.com/OpenHands/software-agent-sdk/commit/e3a26821f8f7c85e98078c7b5e1a80647fc7d0c7
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569
