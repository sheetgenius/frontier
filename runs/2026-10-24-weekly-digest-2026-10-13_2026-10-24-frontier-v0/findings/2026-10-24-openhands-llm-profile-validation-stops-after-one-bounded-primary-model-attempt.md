---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-llm-profile-validation-stops-after-one-bounded-primary-model-attempt
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/76055f697a5e9295252e0d54ab4ea822946e5c54
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/profiles_router.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-llm-profile-validation-stops-after-one-bounded-primary-model-attempt

LLM profile validation stops after one bounded primary-model attempt. Preflight makes one attempt with a timeout of at most 15 seconds, no retries and no fallback LLMs. A quota-exhaustion 429 fails validation; ordinary transient rate limits/timeouts remain non-blocking.

Channel: tagged-release. Half: both. Date: 2026-10-19 (SDK v1.56.0).

Operator consequence: Recheck setup error handling rather than treating every 429 alike. This shortens waiting and prevents a working fallback from validating a broken primary, while a non-blocking transient response still is not a successful model call.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/76055f697a5e9295252e0d54ab4ea822946e5c54
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/profiles_router.py
