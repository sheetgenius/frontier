---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-credential-telemetry-and-approval-repairs-ship-as-ordinary-pull-requests
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/17430
    precision: merged_pr
  - url: https://github.com/OpenHands/software-agent-sdk/pull/5551
    precision: merged_pr
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/file_router.py#L159
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/pull/18039
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/18086
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/18127
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17995
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/security/advisories
    precision: official_docs
---
# 2026-10-13-openhands-credential-telemetry-and-approval-repairs-ship-as-ordinary-pull-requests

Credential, telemetry and approval repairs ship as ordinary pull requests. Cross-backend credentials: the settings cache was valid for five minutes no matter which backend answered, and it also builds conversation-start payloads, so per #17430 a conversation started on backend B right after switching from A could be started with A's credentials (fixed in v1.24.0; #16958 in v1.27.0 also pins retries to the backend that started them). Trajectory downloads: "Download trajectory" zipped the whole conversation directory, including the `acp/<provider>/` runtime credential files, so a shared zip of a Claude Code, Codex, Gemini, Pi or OpenCode conversation could carry ACP credential files (SDK #5551, in agent server 1.54.0, Canvas v1.27.0 and later). Git Sync: the status card printed `user:password@` from stored remote URLs (#18039, v1.26.0). Telemetry: under Do Not Track the PostHog client still initialized and fetched config and flags from z.openhands.dev (#18086, v1.26.0); until v1.21.0, autocapture recorded every click, change and submit once consent was given (#17502). Approvals: a rejected action kept its event group spinning as if in flight, and off macOS the confirm and reject shortcuts did nothing while the buttons advertised them; they now accept Ctrl and cannot fire twice (#17995, #18127, v1.27.0).

Channel: tagged-release. Half: defect. Date: 2026-09-22 to 2026-10-12.

Operator consequence: Run v1.27.0 or later (v1.27.1) if you switch one Canvas between personal and shared backends, download trajectories, or sync to credentialed remotes. Rotate ACP provider credentials if you shared a trajectory zip of an ACP conversation made before v1.27.0, and review credential-bearing settings used after a backend switch on v1.23.0 or earlier and rotate credentials where the wrong backend received them. The telemetry consent checkbox is pre-checked ([telemetry-consent-banner.tsx L99](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/components/features/analytics/telemetry-consent-banner.tsx#L99)), and Do Not Track is fully honored only from v1.26.0. No observed theft was established by these code paths. No new first-party advisory was found in this window; dependency advisories remain relevant (sections 15 and 16).

## Receipt
- https://github.com/OpenHands/OpenHands/pull/17430
- https://github.com/OpenHands/software-agent-sdk/pull/5551
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/file_router.py#L159
- https://github.com/OpenHands/OpenHands/pull/18039
- https://github.com/OpenHands/OpenHands/pull/18086
- https://github.com/OpenHands/OpenHands/pull/18127
- https://github.com/OpenHands/OpenHands/pull/17995
- https://github.com/OpenHands/OpenHands/security/advisories
